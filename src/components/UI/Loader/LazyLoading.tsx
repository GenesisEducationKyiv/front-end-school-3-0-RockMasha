import { CircleLoader } from 'react-spinners'
import useLockPage from '../../../shared/hooks/useLockPage.ts'
import { colors } from '../../../styles/colors.ts'
import { isPhone } from '@/shared/helpers/isPhone.ts'
import { Wrapper } from './Loader.styled.tsx'

function LazyLoading() {
  useLockPage()

  return (
    <Wrapper>
      <CircleLoader
        color={colors.white}
        speedMultiplier={1.5}
        size={isPhone() ? '75px' : '150px'}
      />
    </Wrapper>
  )
}

export default LazyLoading
