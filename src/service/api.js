import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export async function getGenres() {
  const answer = await axios.get("/api/genres");
  return answer.data;
}

let TracksController = null;
export async function getTracks(params = {}, page = 1) {
  if (TracksController) {
    TracksController.abort();
  }
  TracksController = new AbortController();
  const answer = await axios.get("/api/tracks", {
    signal: TracksController.signal,
    params: { ...params, page },
  });
  TracksController = null;
  return answer.data;
}

export async function postTrack(data) {
  const answer = await axios.post(`/api/tracks`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return answer.data;
}
export async function getOneTrack(slug) {
  const answer = await axios.get(`/api/tracks/${slug}`);
  return answer.data;
}
export async function redactTrack(data, id) {
  const answer = await axios.put(`/api/tracks/${id}`, data);
  return answer.data;
}
export async function deleteTrack(id) {
  const answer = await axios.delete(`/api/tracks/${id}`);
  return answer.data;
}

export async function getFile(name) {
  const answer = await axios.get(`/api/files/${name}`, {
    responseType: "arraybuffer",
  });
  return answer.data;
}
export async function postFile(data, id) {
  const answer = await axios.post(`/api/tracks/${id}/upload`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return answer.data;
}
export async function deleteFile(id) {
  const answer = await axios.delete(`/api/tracks/${id}/file`);
  return answer.data;
}
