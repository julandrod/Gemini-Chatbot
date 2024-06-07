import axios from "axios";

const apiClient = axios.create({
  withCredentials: true,
  baseURL: "https://gemini-chatbot-e4tn.onrender.com/",
});

export default apiClient;
