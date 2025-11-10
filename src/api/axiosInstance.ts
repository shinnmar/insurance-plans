import axios from "axios";

import { getLoadingSetter } from "../context/loadingHandler";
import { API_BASE_URL } from "./apiConfig";
const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
    const setLoading = getLoadingSetter();
    setLoading?.(true);
    return config;
});

api.interceptors.response.use(
(response) => {
    const setLoading = getLoadingSetter();
    setLoading?.(false);
    return response;
},
(error) => {
    const setLoading = getLoadingSetter();
    setLoading?.(false);
    return Promise.reject(error);
}
);

export default api;