import axios from "../http";

function getLatestQuestions(payload) {
  return axios.get("/question/latest", {
    params: {
      page: payload.page,
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

function getQuestion(payload) {
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
  getQuestion,
};

export { getLatestQuestions, getHotQuestions, getMostPopular, getQuestion };
