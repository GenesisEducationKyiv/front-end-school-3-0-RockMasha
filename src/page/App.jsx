import { useEffect } from 'react'
import { useLoaderProviderContext } from '../context/LoaderProvider'
import { openPage } from '../shared/helpers/tosts/openPage'
import Page from './Page'

openPage()

function App() {
  const { startLoading } = useLoaderProviderContext()

  useEffect(() => {
    startLoading(() => {})
  }, [startLoading])

  return <Page />
}

export default App
