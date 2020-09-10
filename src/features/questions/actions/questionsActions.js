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

export const getQuestionAndAnswers = (payload) => {
  return {
    type: "GET_QUESTION_AND_ANSWERS_REQUEST",
    payload,
  };
};

export const loadMoreQuestions = () => {
  return {
    type: "LOAD_MORE_QUESTIONS",
  };
};
