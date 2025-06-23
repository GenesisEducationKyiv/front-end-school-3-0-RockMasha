import MainLoader from '../components/UI/Loader/MainLoader.jsx'
import Tost from '../components/modules/Tost/Tost.jsx'
import Header from '../components/layout/Header/Header.jsx'
import { TracksList } from '../features/TrackList'
import { SortTracks } from '../features/SortTracks'
import { DeleteTrackModal } from '../features/modals/DeleteTrackModal'
import { FormTrackModal } from '../features/modals/FormTrackModal'
import { UploadFileModal } from '../features/modals/UploadFileModal'
import { GlobalStyles } from '../styles/GlobalStyled.jsx'
import { openPage } from '@/shared/helpers/tosts/openPage.js'
import { useSelector } from 'react-redux'
import { selectorFilterPanel, selectorLoading, selectorModals } from '@/redux'

openPage()

function Page() {
  const filterPanel = useSelector(selectorFilterPanel)
  const loading = useSelector(selectorLoading)
  const { formTrackModal, deleteTrackModal, uploadFileModal } =
    useSelector(selectorModals)

  return (
    <>
      <Header />
      {filterPanel && <SortTracks />}
      <TracksList />
      {formTrackModal && <FormTrackModal />}
      {deleteTrackModal && <DeleteTrackModal />}
      {uploadFileModal && <UploadFileModal />}

      {loading && <MainLoader />}
      <Tost />

      <GlobalStyles />
    </>
  )
}

export default Page
