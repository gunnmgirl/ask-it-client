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

function deleteAnswer(payload) {
  return axios.delete("/answer", {
    params: {
      questionId: payload.questionId,
      answerId: payload.answerId,
    },
  });
}

export default {
  signup,
  postAnswer,
  login,
  deleteAnswer,
};

export { signup, login, postAnswer };
