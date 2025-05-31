import { defaultErrorMessage } from "../consts/defaultErrorMessage";

function getErrorMessage(error) {
  switch (error?.response?.data?.error) {
    case "A track with this title already exists":
      return "Track with some name already create";

    default:
      return defaultErrorMessage;
  }
}

export default getErrorMessage;
