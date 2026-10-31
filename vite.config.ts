import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { applyHtmlMeta, metaForNotFound, metaForPage } from './seo/applyHtmlMeta'
import { renderRouteBody } from './seo/renderRoute'
import { PAGE_META } from './seo/site'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

function rewriteFundingPage(req: { url?: string }) {
  const raw = req.url ?? ''
  const pathname = (raw.split('?')[0] ?? '').replace(/\/$/, '') || '/'
  if (pathname !== '/dofinansowanie') return
  const query = raw.includes('?') ? raw.slice(raw.indexOf('?')) : ''
  req.url = `/dofinansowanie.html${query}`
}

function injectRenderedBody(html: string, pathname: string): string {
  const body = renderRouteBody(pathname)
  if (!body.includes('<h1')) {
    throw new Error(`prerender: ${pathname} rendered without an h1`)
  }
  const next = html.replace(/<div id="root"><\/div>/, () => `<div id="root">${body}</div>`)
  if (next === html) throw new Error(`prerender: root placeholder missing for ${pathname}`)
  return next
}

// Google reads the first HTML response. One shared shell made every URL
// look like the homepage. Write a file per public route at build time.
function prerenderRouteHtml(): Plugin {
  return {
    name: 'prerender-route-html',
    closeBundle() {
      const dist = path.join(projectRoot, 'dist')
      const indexPath = path.join(dist, 'index.html')
      const template = fs.readFileSync(indexPath, 'utf8')
      for (const page of PAGE_META) {
        const html = injectRenderedBody(applyHtmlMeta(template, metaForPage(page)), page.path)
        if (page.path === '/') {
          fs.writeFileSync(indexPath, html)
          continue
        }
        fs.writeFileSync(path.join(dist, `${page.path.slice(1)}.html`), html)
      }
      fs.writeFileSync(
        path.join(dist, '404.html'),
        injectRenderedBody(applyHtmlMeta(template, metaForNotFound()), '/404'),
      )
    },
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewriteFundingPage(req)
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const message = req as { url?: string }
        rewriteFundingPage(message)
        const raw = message.url ?? ''
        const pathname = (raw.split('?')[0] ?? '').replace(/\/$/, '') || '/'
        const page = PAGE_META.find((entry) => entry.path === pathname)
        if (page && page.path !== '/') {
          const query = raw.includes('?') ? raw.slice(raw.indexOf('?')) : ''
          message.url = `/${page.path.slice(1)}.html${query}`
        }
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [prerenderRouteHtml(), react()],
  base: '/', // Critical for Vercel root domain deployment
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
