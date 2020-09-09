const INITIAL_STATE = {
  loading: false,
  error: false,
  page: 0,
  users: [],
  totalUsers: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_MOST_POPULAR_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        users: action.payload.users,
        totalUsers: action.payload.totalUsers,
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
        me: action.payload,
        loading: false,
        error: false,
      };
    default:
      return { ...state };
  }
};
