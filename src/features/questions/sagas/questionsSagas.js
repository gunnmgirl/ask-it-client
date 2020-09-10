import { call, put, takeLatest } from "redux-saga/effects";

import queries from "../../../api/queries";
import mutations from "../../../api/mutations";

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

function* postAnswer(action) {
  try {
    const data = yield call(mutations.postAnswer, action.payload);
    const result = data.data;
    yield put({ type: "POST_ANSWER_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "POST_ANSWER_FAILURE", error });
  }
}

function* deleteAnswer(action) {
  try {
    const data = yield call(mutations.deleteAnswer, action.payload);
    const result = data.data;
    yield put({ type: "DELETE_ANSWER_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "DELETE_ANSWER_FAILURE", error });
  }
}

function* getQuestionAndAnswers(action) {
  try {
    const data = yield call(queries.getQuestionAndAnswers, action.payload);
    const result = data.data;
    yield put({ type: "GET_QUESTION_AND_ANSWERS_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_QUESTION_AND_ANSWERS_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("GET_LATEST_QUESTIONS_REQUEST", getLatestQuestions);
  yield takeLatest("GET_HOT_QUESTIONS_REQUEST", getHotQuestions);
  yield takeLatest("POST_ANSWER_REQUEST", postAnswer);
  yield takeLatest("DELETE_ANSWER_REQUEST", deleteAnswer);
  yield takeLatest("GET_QUESTION_AND_ANSWERS_REQUEST", getQuestionAndAnswers);
};

export default saga;
