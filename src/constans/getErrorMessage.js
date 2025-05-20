function getErrorMessage(error) {
  switch (error?.response?.data?.error) {
    case "A track with this title already exists":
      return "Track with some name already create";

    default:
      return "Opsss... Something went wrong";
  }
}

export default getErrorMessage;
