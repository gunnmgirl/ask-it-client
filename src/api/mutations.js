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

function postQuestion(payload) {
  return axios.post("/question", payload);
}

function changePassword(payload) {
  return axios.post("/user/changePassword", payload);
}
function editAnswer(payload) {
  return axios.post("/answer/edit", payload);
}

function editUser(payload) {
  return axios.post("/user/edit", payload);
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
  editUser,
  postAnswer,
  postQuestion,
  login,
  deleteAnswer,
  editAnswer,
  changePassword,
};

export {
  signup,
  login,
  postAnswer,
  deleteAnswer,
  editAnswer,
  changePassword,
  postQuestion,
};
