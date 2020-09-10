const INITIAL_STATE = {
  questions: [],
  totalQuestions: 0,
  page: 0,
  question: {
    body: "",
    upvotes: 0,
    downvotes: 0,
    answers: [],
    creator: null,
  },
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_QUESTION_AND_ANSWERS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        question: {
          ...action.payload.question,
          answers: action.payload.answers,
        },
      };
    case "GET_QUESTION_AND_ANSWERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "POST_ANSWER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        question: {
          ...state.question,
          answers: [...state.question.answers, action.payload],
        },
      };
    case "POST_ANSWER_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "DELETE_ANSWER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        question: {
          ...state.question,
          answers: state.question.answers.filter(
            (answer) => answer._id !== action.payload
          ),
        },
      };
    case "DELETE_ANSWER_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "LOAD_MORE_QUESTIONS":
      return { ...state, page: state.page + 1 };
    case "GET_HOT_QUESTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        questions: action.payload.questions,
        totalQuestions: action.payload.totalQuestions,
      };
    case "GET_HOT_QUESTIONS_FAILURE":
      return {
        ...state,
        loading: false,
        error: false,
        questions: action.payload.questions,
        totalQuestions: action.payload.totalQuestions,
      };
    case "GET_LATEST_QUESTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        questions: action.payload.questions,
        totalQuestions: action.payload.totalQuestions,
      };
    case "GET_LATEST_QUESTIONS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
