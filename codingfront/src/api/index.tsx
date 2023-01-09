import axios from "axios";

const BackendUrl = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: BackendUrl,
});

export default api;
