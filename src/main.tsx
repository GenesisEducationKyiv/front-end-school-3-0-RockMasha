import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GeneralProvider from './context/GeneralProvider'
import type { NullableElement } from './types'
import { BrowserRouter } from 'react-router-dom'
import App from './page/App'

const rootElement: NullableElement<HTMLDivElement> =
  document.querySelector('div#root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </BrowserRouter>
  </StrictMode>
)
