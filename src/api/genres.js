import { showError } from "../shared/helpers/tosts/showError";
import { api } from "./axiosInstance";

async function getGenres() {
  const answer = await api.get("/api/genres");
  return answer.data;
}

async function getList() {
  try {
    return await getGenres();
  } catch (error) {
    showError(error);
    return [];
  }
}

export const genres = await getList();
