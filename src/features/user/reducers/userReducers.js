const INITIAL_STATE = {
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userId: action.payload,
        loading: false,
        error: false,
      };
    default:
      return { ...state };
  }
};
