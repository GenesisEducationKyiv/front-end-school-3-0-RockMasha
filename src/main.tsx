import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import type { NullableElement } from './types'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './page/App'
import { store } from './redux/store'

const rootElement: NullableElement<HTMLDivElement> =
  document.querySelector('div#root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
