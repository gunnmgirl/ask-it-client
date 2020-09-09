import { call, put, takeLatest } from "redux-saga/effects";

import queries from "../../../api/queries";

function* getLatestQuestions(action) {
  try {
    const data = yield call(queries.getLatestQuestions, action.payload);
    const result = data.data;
    yield put({ type: "GET_LATEST_QUESTIONS_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_LATEST_QUESTIONS_FAILURE", error });
  }
}

function* getHotQuestions(action) {
  try {
    const data = yield call(queries.getHotQuestions, action.payload);
    const result = data.data;
    yield put({ type: "GET_HOT_QUESTIONS_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_HOT_QUESTIONS_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("GET_LATEST_QUESTIONS_REQUEST", getLatestQuestions);
  yield takeLatest("GET_HOT_QUESTIONS_REQUEST", getHotQuestions);
};

export default saga;
