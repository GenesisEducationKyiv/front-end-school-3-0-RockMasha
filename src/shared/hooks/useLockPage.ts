import { useEffect } from 'react'

function useLockPage() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  })
}

export default useLockPage
