export const getLatestQuestions = (payload) => {
  return {
    type: "GET_LATEST_QUESTIONS_REQUEST",
    payload,
  };
};

export const getHotQuestions = (payload) => {
  return {
    type: "GET_HOT_QUESTIONS_REQUEST",
    payload,
  };
};

export const postAnswer = (payload) => {
  return {
    type: "POST_ANSWER_REQUEST",
    payload,
  };
};

export const getQuestion = (payload) => {
  return {
    type: "GET_QUESTION_REQUEST",
    payload,
  };
};

export const loadMoreQuestions = () => {
  return {
    type: "LOAD_MORE_QUESTIONS",
  };
};
