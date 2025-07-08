import { HashLoader } from 'react-spinners'
import { isPhone } from '../../../shared/helpers/isPhone.ts'
import useLockPage from '../../../shared/hooks/useLockPage.ts'
import { Wrapper } from './Loader.styled.tsx'
import { colors } from '../../../styles/colors.js'

function MainLoader() {
  useLockPage()

  return (
    <Wrapper>
      <HashLoader
        data-testid="loading-indicator"
        size={isPhone() ? '75px' : '100px'}
        color={colors.white}
        speedMultiplier={2}
      />
    </Wrapper>
  )
}

export default MainLoader
