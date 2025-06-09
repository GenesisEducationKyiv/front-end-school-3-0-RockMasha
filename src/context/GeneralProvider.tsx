import type { ChildrenProps } from '@/types'
import CardIdentifierProvider from './CardIdentifierProvider'
import FiltersProvider from './FiltersProvider'
import LoaderProvider from './LoaderProvider'
import ModalProvider from './ModalProvider'

function GeneralProvider({ children }: ChildrenProps) {
  return (
    <LoaderProvider>
      <FiltersProvider>
        <ModalProvider>
          <CardIdentifierProvider>{children}</CardIdentifierProvider>
        </ModalProvider>
      </FiltersProvider>
    </LoaderProvider>
  )
}

export default GeneralProvider
