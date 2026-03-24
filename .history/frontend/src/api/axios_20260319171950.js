import axios from "axios";
import { toast } from "react-hot-toast";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

//request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//response interceptor

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      //remove old token

      localStorage.removeItem("token");
      localStorage.removeItem("role");

      //show message to user
      toast.error("Session expired.Please login again");
      //redirect to login page

      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);
export default api;
