import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Root *.html files are the old static pages. Vite serves them ahead of the
// React router, so a direct visit to /rejestracja never reaches the app.
// Production already rewrites these paths to index.html.
const LEGACY_SPA_ROUTES = [
  '/rejestracja',
  '/karta-poz',
  '/gdzie-po-pomoc',
  '/cennik-uslug',
  '/cennik-szczepien',
  '/polityka-rodo',
]

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
  plugins: [spaOverLegacyHtml(), react()],
  base: '/', // Critical for Vercel root domain deployment
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})