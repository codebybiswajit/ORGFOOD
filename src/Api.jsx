import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Replace with your API base URL
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await api.post("/auth/refresh-token", {
        token: refreshToken,
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      api.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.accessToken;
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);

export { api };
