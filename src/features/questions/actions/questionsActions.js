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

export const editAnswer = (payload) => {
  return {
    type: "EDIT_ANSWER_REQUEST",
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

export const downvoteAnswer = (payload) => {
  return {
    type: "DOWNVOTE_ANSWER_REQUEST",
    payload,
  };
};

export const upvoteAnswer = (payload) => {
  return {
    type: "UPVOTE_ANSWER_REQUEST",
    payload,
  };
};

export const downvoteQuestion = (payload) => {
  return {
    type: "DOWNVOTE_QUESTION_REQUEST",
    payload,
  };
};
export const upvoteQuestion = (payload) => {
  return {
    type: "UPVOTE_QUESTION_REQUEST",
    payload,
  };
};

export const getMyQuestions = (payload) => {
  return {
    type: "GET_MY_QUESTIONS_REQUEST",
    payload,
  };
};

export const deleteAnswer = (payload) => {
  return {
    type: "DELETE_ANSWER_REQUEST",
    payload,
  };
};

export const postQuestion = (payload) => {
  return {
    type: "POST_QUESTION_REQUEST",
    payload,
  };
};
