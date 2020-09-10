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

function editAnswer(payload) {
  return axios.post("/answer/edit", payload);
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
  editAnswer,
};

export { signup, login, postAnswer, deleteAnswer, editAnswer };
