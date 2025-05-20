import CardProvider from "../CardProvider/CardProvider";
import LoaderProvider from "../LoaderProvider/LoaderProvider";
import ModalProvider from "../ModalProvider/ModalProvider";
import SortProvider from "../SortProvider/SortProvider";

function Provider({ children }) {
  return (
    <SortProvider>
      <LoaderProvider>
        <ModalProvider>
          <CardProvider>{children}</CardProvider>
        </ModalProvider>
      </LoaderProvider>
    </SortProvider>
  );
}

export default Provider;
