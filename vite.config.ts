import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { applyHtmlMeta, metaForNotFound, metaForPage } from './seo/applyHtmlMeta'
import { PAGE_META } from './seo/site'

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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [prerenderRouteHtml(), react()],
  base: '/', // Critical for Vercel root domain deployment
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
