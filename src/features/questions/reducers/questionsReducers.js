const INITIAL_STATE = {
  questions: [],
  totalQuestions: 0,
  page: 0,
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_MORE_QUESTIONS":
      return { ...state, page: state.page + 1 };
    case "GET_HOT_QUESTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        questions: [...state.questions, action.payload.questions],
        totalQuestions: action.payload.totalQuestions,
      };
    case "GET_HOT_QUESTIONS_FAILURE":
      return {
        ...state,
        loading: false,
        error: false,
        questions: [...state.questions, action.payload.questions],
        totalQuestions: action.payload.totalQuestions,
      };
    case "GET_LATEST_QUESTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        questions: [...state.questions, action.payload.questions],
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
