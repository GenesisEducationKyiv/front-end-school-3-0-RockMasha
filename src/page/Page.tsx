import MainLoader from '../components/UI/Loader/MainLoader.tsx'
import Tost from '../components/modules/Tost/Tost.tsx'
import Header from '../components/layout/Header/Header.tsx'
import { TracksList } from '../features/TrackList'
import { openPage } from '@/shared/helpers/tosts/openPage.ts'
import { useSelector } from 'react-redux'
import { selectFilterPanel, selectLoading, selectModals } from '@/redux'
import { lazy, Suspense } from 'react'
import LazyLoading from '@/components/UI/Loader/LazyLoading'
import ActiveTrackPanel from '@/features/ActiveTrackPanel/ActiveTrackPanel.tsx'
import TracksSection from '@/components/UI/TracksSection/TracksSection.tsx'

openPage()

export const DeleteTrackModal = lazy(
  () => import('@/features/modals/DeleteTrackModal/components/DeleteTrackModal')
)
export const UploadFileModal = lazy(
  () => import('@/features/modals/UploadFileModal/components/UploadFileModal')
)
export const FormTrackModal = lazy(
  () => import('@/features/modals/FormTrackModal/components/FormTrackModal')
)
export const SortTracks = lazy(
  () => import('@/features/SortTracks/components/SortTracks')
)

function Page() {
  const filterPanel = useSelector(selectFilterPanel)
  const loading = useSelector(selectLoading)
  const { formTrackModal, deleteTrackModal, uploadFileModal } =
    useSelector(selectModals)

  return (
    <>
      <Header />
      {filterPanel && (
        <Suspense fallback={<LazyLoading />}>
          <SortTracks />
        </Suspense>
      )}

      <TracksSection>
        <ActiveTrackPanel />
        <TracksList />
      </TracksSection>

      {formTrackModal && (
        <Suspense fallback={<LazyLoading />}>
          <FormTrackModal />
        </Suspense>
      )}
      {deleteTrackModal && (
        <Suspense fallback={<LazyLoading />}>
          <DeleteTrackModal />
        </Suspense>
      )}
      {uploadFileModal && (
        <Suspense fallback={<LazyLoading />}>
          <UploadFileModal />
        </Suspense>
      )}
      {loading && <MainLoader />}
      <Tost />
    </>
  )
}

export default Page
