export const getMostPopular = (payload) => {
  return {
    type: "GET_MOST_POPULAR_REQUEST",
    payload,
  };
};
