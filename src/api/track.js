import { api } from "./axiosInstance";

let TracksController = null;
export async function getTracks(params = {}, page = 1) {
  if (TracksController) {
    TracksController.abort();
  }
  TracksController = new AbortController();
  const answer = await api.get("/api/tracks", {
    signal: TracksController.signal,
    params: { ...params, page },
  });
  TracksController = null;
  return answer.data;
}

export async function postTrack(data) {
  const answer = await api.post(`/api/tracks`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return answer.data;
}

export async function getTrackBySlug(slug) {
  const answer = await api.get(`/api/tracks/${slug}`);
  return answer.data;
}

export async function redactTrack(data, id) {
  const answer = await api.put(`/api/tracks/${id}`, data);
  return answer.data;
}

export async function deleteTrack(id) {
  const answer = await api.delete(`/api/tracks/${id}`);
  return answer.data;
}
