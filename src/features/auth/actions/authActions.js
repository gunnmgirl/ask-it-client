export const signup = (payload, meta) => {
  return {
    type: "SIGNUP_REQUEST",
    payload,
    meta,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const login = (payload, meta) => {
  return {
    type: "LOGIN_REQUEST",
    payload,
    meta,
  };
};
