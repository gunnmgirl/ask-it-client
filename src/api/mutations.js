import axios from "../http";

function signup(payload) {
  return axios.put("/auth/signup", payload);
}

function login(payload) {
  return axios.post("/auth/login", payload);
}

function postAnswer(payload) {
  return axios.post("/answer", payload);
}

export default {
  signup,
  postAnswer,
  login,
};

export { signup, login, postAnswer };
