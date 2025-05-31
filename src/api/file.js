import { api } from "./axiosInstance";

export async function getFile(name) {
  const answer = await api.get(`/api/files/${name}`, {
    responseType: "arraybuffer",
  });
  return answer.data;
}
export async function postFile(data, id) {
  const answer = await api.post(`/api/tracks/${id}/upload`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return answer.data;
}
export async function deleteFile(id) {
  const answer = await api.delete(`/api/tracks/${id}/file`);
  return answer.data;
}
