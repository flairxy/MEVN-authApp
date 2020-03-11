import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
/*
 * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
 */
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem("jwt");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },

  error => {
    return Promise.reject(error);
  }
);
export default axios;
