import { CircleLoader } from 'react-spinners'
import useLockPage from '../../../shared/hooks/useLockPage.ts'
import { Wrapper } from '../Modal/Modal.styled.jsx'
import { colors } from '../../../styles/colors.js'
import { isPhone } from '@/shared/helpers/isPhone.ts'

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
