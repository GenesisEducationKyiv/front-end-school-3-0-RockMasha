import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

export const setup = () => {
  return {
    render: async (component: React.ReactElement) => {
      const root = createRoot(document.getElementById('root')!)
      root.render(<StrictMode>{component}</StrictMode>)
    },
  }
}
