import { Toaster, ToastBar } from "react-hot-toast";

function Tost() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          animation: "slideUp 0.3s ease-in-out",
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div
              data-testid="toast-container"
              data-type={t.type}
              {...(t.type && { ["data-testid"]: `toast-${t.type}` })}
            >
              {icon}
              {message}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}

export default Tost;
