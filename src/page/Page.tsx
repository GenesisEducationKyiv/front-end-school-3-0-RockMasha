import { useFiltersHiddenContext } from '../context/FiltersProvider'
import { useLoaderProviderContext } from '../context/LoaderProvider'
import { useModalValueContext } from '../context/ModalProvider'
import MainLoader from '../components/UI/Loader/MainLoader.jsx'
import Tost from '../components/modules/Tost/Tost.jsx'
import Header from '../components/layout/Header/Header.jsx'
import { TracksList } from '../features/TrackList'
import { SortTracks } from '../features/SortTracks'
import { DeleteTrackModal } from '../features/modals/DeleteTrackModal'
import { FormTrackModal } from '../features/modals/FormTrackModal'
import { UploadFileModal } from '../features/modals/UploadFileModal'
import { GlobalStyles } from '../styles/GlobalStyled.jsx'

function Page() {
  const { hidden } = useFiltersHiddenContext()
  const { loading } = useLoaderProviderContext()
  const { formTrackModal, deleteTrackModal, uploadFileModal } =
    useModalValueContext()

  return (
    <>
      <Header />
      {!hidden && <SortTracks />}
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
