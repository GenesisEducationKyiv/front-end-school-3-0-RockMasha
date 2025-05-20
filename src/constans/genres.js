import { getGenres } from "../service/api";
import { showError } from "./tosts/showError";

export const genres = await getList();

async function getList() {
  try {
    return await getGenres();
  } catch (error) {
    showError();
    return [];
  }
}
