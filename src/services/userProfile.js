import { apiClient } from "./config";

export const apiAddUserProfile = async (payload) => {
  return apiClient.post("/profiles", payload);
};

export const apiGetUserProfile = async () => {
  return apiClient.get("/profiles");
};

export const apiUpdateUserProfile = async (id, payload) => {
  return apiClient.patch(`/profiles/${id}`, payload);
};