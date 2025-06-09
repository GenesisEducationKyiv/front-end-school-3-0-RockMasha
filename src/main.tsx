import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './page/App'
import GeneralProvider from './context/GeneralProvider'
import type { NullableElement } from './types'

const rootElement: NullableElement<HTMLDivElement> =
  document.querySelector('div#root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </StrictMode>
)
