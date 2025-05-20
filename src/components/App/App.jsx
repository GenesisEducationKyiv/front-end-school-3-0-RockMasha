import { useSortHiddenContext } from "../SortProvider/SortProvider";
import SortTracks from "../SortTracks/SortTracks";
import Header from "../Header/Header";
import TracksList from "../TracksList/TracksList";
import { useLoaderProviderContext } from "../LoaderProvider/LoaderProvider";
import { useEffect } from "react";
import { useModalValueContext } from "../ModalProvider/ModalProvider";
import DeleteTrackModal from "../DeleteTrackModal/DeleteTrackModal";
import UploadFileModal from "../UploadFileModal/UploadFileModal";
import FormTrackModal from "../FormTrackModal/FormTrackModal";
import { openPage } from "../../constans/tosts/openPage";
import Tost from "../Tost/Tost";
import MainLoader from "../rep/Loader/MainLoader/MainLoader";
import { GlobalStyles } from "../GlobalStyled";

openPage();

function App() {
  const { hidden } = useSortHiddenContext();
  const { loading, setLoading } = useLoaderProviderContext();
  const { formTrack, deleteTrack, uploadFile } = useModalValueContext();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Header />
      {!hidden && <SortTracks />}
      <TracksList />
      {formTrack && <FormTrackModal />}
      {deleteTrack && <DeleteTrackModal />}
      {uploadFile && <UploadFileModal />}

      {loading && <MainLoader />}
      <Tost />

      <GlobalStyles />
    </>
  );
}

export default App;
