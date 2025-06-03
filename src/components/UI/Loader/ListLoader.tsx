import { HashLoader } from 'react-spinners'
import useLockPage from '../../../shared/hooks/useLockPage.ts'
import { Wrapper } from '../Modal/Modal.styled.jsx'
import { colors } from '../../../styles/colors.js'

function ListLoader() {
  useLockPage()

  return (
    <Wrapper>
      <HashLoader
        data-testid="loading-tracks"
        color={colors.white}
        speedMultiplier={2}
        size={isPhone() ? '75px' : '100px'}
      />
    </Wrapper>
  )
}

function isPhone() {
  return window.innerWidth < 768
}

export default ListLoader
