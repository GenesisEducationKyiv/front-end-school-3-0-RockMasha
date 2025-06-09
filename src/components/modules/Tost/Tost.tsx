import { Toaster, ToastBar } from 'react-hot-toast'
import { ToastContainer } from './Tost.styled'

function Tost() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          animation: 'slideUp 0.3s ease-in-out',
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <ToastContainer
              role="alert"
              aria-live="polite"
              data-testid="toast-container"
              data-type={t.type}
            >
              {icon}
              {message}
            </ToastContainer>
          )}
        </ToastBar>
      )}
    </Toaster>
  )
}

export default Tost
