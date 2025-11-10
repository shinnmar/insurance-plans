import api from "./axiosInstance";import { API_BASE_URL } from "./apiConfig";

export const fetchPlans = async () => {
  const response = await api.get(`${API_BASE_URL}/plans.json`);
  return response.data;
};
