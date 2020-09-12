import axios from "axios";

import history from "../routing/history";
import { logout } from "../features/auth/actions/authActions";
import store from "../state/store";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

instance.interceptors.request.use(
  (request) => {
    request.headers.authorization = localStorage.getItem("token");
    return request;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      const { dispatch } = store;
      dispatch(logout());
      localStorage.removeItem("token");
      history.push("/");
    }
    return Promise.reject(error.response);
  }
);

export default instance;
