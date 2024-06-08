import axios from "axios";

const apiClient = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BACK_URL,
});

console.log(import.meta.env.VITE_BACK_URL)

export default apiClient;
