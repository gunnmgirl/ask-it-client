import axios from "../http";

function getLatestQuestions(payload) {
  return axios.get("/question/latest", {
    params: {
      page: payload.page,
    },
  });
}

function getMyQuestions(payload) {
  return axios.get("/question/myQuestions", {
    params: {
      page: payload.page,
    },
  });
}

function getUser(payload) {
  return axios.get("/user", {
    params: {
      userId: payload,
    },
  });
}

function getHotQuestions(payload) {
  return axios.get("/question/hot", {
    params: {
      page: payload.page,
    },
  });
}

function getQuestionAndAnswers(payload) {
  return axios.get(`/question/${payload}`);
}

function getMostPopular(payload) {
  return axios.get("/user/popular", {
    params: {
      page: payload.page,
    },
  });
}

export default {
  getLatestQuestions,
  getHotQuestions,
  getMostPopular,
  getQuestionAndAnswers,
  getUser,
  getMyQuestions,
};

export {
  getLatestQuestions,
  getHotQuestions,
  getUser,
  getMostPopular,
  getQuestionAndAnswers,
  getMyQuestions,
};
