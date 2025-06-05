import { HashLoader } from 'react-spinners'
import useLockPage from '../../../shared/hooks/useLockPage.ts'
import { Wrapper } from '../Modal/Modal.styled.jsx'
import { colors } from '../../../styles/colors.js'
import isPhone from '@/shared/helpers/isPhone.ts'

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

export default ListLoader
