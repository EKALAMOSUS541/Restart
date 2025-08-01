import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import { initializeTheme } from './hooks/use-appearance'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),

  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob('./pages/**/*.tsx')
    ),

  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(
      <>
        {/* ✅ App from Inertia */}
        <App {...props} />

        {/* ✅ Global toast notification container */}
        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={4000}
        />
      </>
    )
  },

  progress: {
    color: '#4B5563', // progress bar color
  },
})

// ✅ Initialize theme (dark/light mode toggle)
initializeTheme()
