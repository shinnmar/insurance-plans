import api from "./axiosInstance";
import { API_BASE_URL } from "./apiConfig";

export const fetchUser = async () => {
  const response = await api.get(`${API_BASE_URL}/user.json`);
  return response.data;
};
