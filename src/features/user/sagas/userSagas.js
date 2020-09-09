import { call, put, takeLatest } from "redux-saga/effects";

import queries from "../../../api/queries";

function* getMostPopular(action) {
  try {
    const data = yield call(queries.getMostPopular, action.payload);
    const result = data.data;
    yield put({ type: "GET_MOST_POPULAR_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_MOST_POPULAR_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("GET_MOST_POPULAR_REQUEST", getMostPopular);
};

export default saga;
