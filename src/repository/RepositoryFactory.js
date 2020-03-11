import axios from "../repository/base";

export const RepositoryFactory = {
  getUser: data => axios.post(`/user/me`, data),
  loginUser: data => axios.post(`/user/login`, data),
  registerUser: data => axios.post(`/user/register`, data),
  logOutUser: () => axios.post(`/user/me/logout`),
  logOutUserAll: () => axios.post(`/user/me/logout-all`)
};
