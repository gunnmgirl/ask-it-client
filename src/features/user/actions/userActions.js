export const getMostPopular = (payload) => {
  return {
    type: "GET_MOST_POPULAR_REQUEST",
    payload,
  };
};

export const getUser = (payload) => {
  return {
    type: "GET_USER_REQUEST",
    payload,
  };
};

export const changePassword = (payload, meta) => {
  return {
    type: "CHANGE_PASSWORD_REQUEST",
    payload,
    meta,
  };
};

export const editUser = (payload, meta) => {
  return {
    type: "EDIT_USER_REQUEST",
    payload,
    meta,
  };
};
