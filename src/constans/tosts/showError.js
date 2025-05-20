import toast from "react-hot-toast";
export const showError = (text) =>
  toast.error(text || "Opsss... Something went wrong");
