import axios from "axios";
const api = "http://127.0.0.1:3000/api/v1";
const SchoolApi = axios.create({
  baseURL: api,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

SchoolApi.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("token");
    token = token.replace(/['"]+/g, "");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response.message);
  }
);

export default SchoolApi;
