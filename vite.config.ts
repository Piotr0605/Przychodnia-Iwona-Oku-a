import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { applyHtmlMeta, metaForNotFound, metaForPage } from './seo/applyHtmlMeta'
import { PAGE_META } from './seo/site'

// Root *.html files are the old static pages. Vite serves them ahead of the
// React router, so a direct visit to /rejestracja never reaches the app.
// In dev, send those routes to the SPA shell. The production build writes
// one HTML file per public route instead.
const LEGACY_SPA_ROUTES = [
  '/rejestracja',
  '/karta-poz',
  '/gdzie-po-pomoc',
  '/cennik-uslug',
  '/cennik-szczepien',
  '/polityka-rodo',
]

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

// Google reads the first HTML response. One shared shell made every URL
// look like the homepage. Write a file per public route at build time.
function prerenderRouteHtml(): Plugin {
  return {
    name: 'prerender-route-html',
    apply: 'build',
    closeBundle() {
      const dist = path.join(projectRoot, 'dist')
      const indexPath = path.join(dist, 'index.html')
      const template = fs.readFileSync(indexPath, 'utf8')
      for (const page of PAGE_META) {
        const html = applyHtmlMeta(template, metaForPage(page))
        if (page.path === '/') {
          fs.writeFileSync(indexPath, html)
          continue
        }
        fs.writeFileSync(path.join(dist, `${page.path.slice(1)}.html`), html)
      }
      fs.writeFileSync(path.join(dist, '404.html'), applyHtmlMeta(template, metaForNotFound()))
    },
  }
}

function spaOverLegacyHtml(): Plugin {
  return {
    name: 'spa-over-legacy-html',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const message = req as { url?: string }
        const raw = message.url ?? ''
        const pathname = (raw.split('?')[0] ?? '').replace(/\/$/, '') || '/'
        const route = pathname.endsWith('.html') ? pathname.slice(0, -'.html'.length) : pathname
        if (LEGACY_SPA_ROUTES.includes(route)) {
          const query = raw.includes('?') ? raw.slice(raw.indexOf('?')) : ''
          message.url = `/index.html${query}`
        }
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [spaOverLegacyHtml(), prerenderRouteHtml(), react()],
  base: '/', // Critical for Vercel root domain deployment
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})