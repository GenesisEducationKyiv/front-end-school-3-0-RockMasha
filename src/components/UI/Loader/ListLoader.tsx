import { HashLoader } from 'react-spinners'
import useLockPage from '../../../shared/hooks/useLockPage.ts'
import { Wrapper } from './Loader.styled.tsx'
import { isPhone } from '@/shared/helpers/isPhone.ts'

function ListLoader() {
  useLockPage()

  return (
    <Wrapper>
      <HashLoader
        data-testid="loading-tracks"
        color={'#fff'}
        speedMultiplier={2}
        size={isPhone() ? '75px' : '100px'}
      />
    </Wrapper>
  )
}

export default ListLoader
