const INITIAL_STATE = {
  loading: false,
  error: false,
  page: 0,
  users: [],
  totalUsers: 0,
  me: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_MORE_QUESTIONS":
      return { ...state, page: state.page + 1 };
    case "CLEAR_PAGE_COUNTER":
      return { ...state, page: 0, users: [] };
    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        me: action.payload,
      };
    case "CHANGE_PASSWORD_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "EDIT_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        me: action.payload,
      };
    case "EDIT_USER_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        me: action.payload,
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "GET_MOST_POPULAR_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        users: [...state.users, ...action.payload.users],
        totalUsers: action.payload.totalUsers,
      };
    case "GET_MOST_POPULAR_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "GET_MOST_POPULAR_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        me: action.payload,
      };
    default:
      return { ...state };
  }
};
