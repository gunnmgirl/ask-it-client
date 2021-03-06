const INITIAL_STATE = {
  questions: [],
  totalQuestions: 0,
  page: 0,
  question: {
    body: "",
    upvotes: { count: 0, users: [] },
    downvotes: { count: 0, users: [] },
    answers: [],
    creator: null,
  },
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CLEAR_PAGE_COUNTER":
      return { ...state, page: 0, questions: [] };
    case "UPVOTE_ANSWER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        question: {
          ...state.question,
          answers: state.question.answers.map((answer) => {
            if (answer._id === action.payload.answer._id) {
              answer.upvotes = action.payload.answer.upvotes;
              answer.downvotes = action.payload.answer.downvotes;
            }
            return answer;
          }),
        },
      };
    case "UPVOTE_ANSWER_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "DOWNVOTE_ANSWER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        question: {
          ...state.question,
          answers: state.question.answers.map((answer) => {
            if (answer._id === action.payload.answer._id) {
              answer.upvotes = action.payload.answer.upvotes;
              answer.downvotes = action.payload.answer.downvotes;
            }
            return answer;
          }),
        },
      };
    case "DOWNVOTE_ANSWER_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "GET_MY_QUESTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        questions: [...state.questions, ...action.payload.questions],
        totalQuestions: action.payload.totalQuestions,
      };
    case "GET_MY_QUESTIONS_REQUEST":
      return {
        ...state,
        error: false,
        loading: true,
      };
    case "GET_MY_QUESTIONS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "POST_QUESTION_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        questions: [action.payload, ...state.questions],
      };
    case "POST_QUESTION_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };
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
    case "GET_QUESTION_AND_ANSWERS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
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
    case "UPVOTE_QUESTION_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        questions: state.questions.map((question) => {
          if (question._id === action.payload.question._id) {
            question.upvotes = action.payload.question.upvotes;
            question.downvotes = action.payload.question.downvotes;
          }
          return question;
        }),
        question: {
          ...state.question,
          upvotes: action.payload.question.upvotes,
          downvotes: action.payload.question.downvotes,
        },
      };
    case "UPVOTE_QUESTION_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "DOWNVOTE_QUESTION_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        questions: state.questions.map((question) => {
          if (question._id === action.payload.question._id) {
            question.upvotes = action.payload.question.upvotes;
            question.downvotes = action.payload.question.downvotes;
          }
          return question;
        }),
        question: {
          ...state.question,
          upvotes: action.payload.question.upvotes,
          downvotes: action.payload.question.downvotes,
        },
      };
    case "DOWNVOTE_QUESTION_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "POST_ANSWER_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "EDIT_ANSWER_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "EDIT_ANSWER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        question: {
          ...state.question,
          answers: state.question.answers.map((answer) => {
            if (answer._id === action.payload.answerId) {
              answer.body = action.payload.newContent;
            }
            return answer;
          }),
        },
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
        questions: [...state.questions, ...action.payload.questions],
        totalQuestions: action.payload.totalQuestions,
      };
    case "GET_HOT_QUESTIONS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "GET_HOT_QUESTIONS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "GET_LATEST_QUESTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        questions: [...state.questions, ...action.payload.questions],
        totalQuestions: action.payload.totalQuestions,
      };
    case "GET_LATEST_QUESTIONS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
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
