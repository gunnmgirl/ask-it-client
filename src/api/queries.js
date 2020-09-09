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

export default {
  getLatestQuestions,
  getHotQuestions,
};

export { getLatestQuestions };
