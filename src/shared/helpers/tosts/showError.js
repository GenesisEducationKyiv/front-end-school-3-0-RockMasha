import toast from "react-hot-toast";
import getErrorMessage from "../getErrorMessage";
import { defaultErrorMessage } from "../../consts/defaultErrorMessage";

export const showError = (error) => {
  const text = error ? getErrorMessage(error) : defaultErrorMessage;
  toast.error(text);
};
