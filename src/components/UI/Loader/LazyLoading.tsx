import { CircleLoader } from 'react-spinners'
import useLockPage from '../../../shared/hooks/useLockPage'
import { isPhone } from '@/shared/helpers/isPhone'
import { Wrapper } from './Loader.styled'

function LazyLoading() {
  useLockPage()

  return (
    <Wrapper>
      <CircleLoader
        color={'#fff'}
        speedMultiplier={1.5}
        size={isPhone() ? '75px' : '150px'}
      />
    </Wrapper>
  )
}

export default LazyLoading
