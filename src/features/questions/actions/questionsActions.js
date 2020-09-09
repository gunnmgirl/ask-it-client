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

export const loadMoreQuestions = () => {
  return {
    type: "LOAD_MORE_QUESTIONS",
  };
};
