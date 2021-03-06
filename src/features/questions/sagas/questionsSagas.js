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

function* getMyQuestions(action) {
  try {
    const data = yield call(queries.getMyQuestions, action.payload);
    const result = data.data;
    yield put({ type: "GET_MY_QUESTIONS_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_HOT_QUESTIONS_FAILURE", error });
  }
}

function* downvoteAnswer(action) {
  try {
    const data = yield call(mutations.downvoteAnswer, action.payload);
    const result = data.data;
    yield put({ type: "DOWNVOTE_ANSWER_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "DOWNVOTE_ANSWER_FAILURE", error });
  }
}

function* upvoteAnswer(action) {
  try {
    const data = yield call(mutations.upvoteAnswer, action.payload);
    const result = data.data;
    yield put({ type: "UPVOTE_ANSWER_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "UPVOTE_ANSWER_FAILURE", error });
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

function* downvoteQuestion(action) {
  try {
    const data = yield call(mutations.downvoteQuestion, action.payload);
    const result = data.data;
    yield put({ type: "DOWNVOTE_QUESTION_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "DOWNVOTE_QUESTION_FAILURE", error });
  }
}

function* upvoteQuestion(action) {
  try {
    const data = yield call(mutations.upvoteQuestion, action.payload);
    const result = data.data;
    yield put({ type: "UPVOTE_QUESTION_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "UPVOTE_QUESTION_FAILURE", error });
  }
}

function* postQuestion(action) {
  try {
    const data = yield call(mutations.postQuestion, action.payload);
    const result = data.data;
    yield put({ type: "POST_QUESTION_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "POST_QUESTION_FAILURE", error });
  }
}

function* editAnswer(action) {
  try {
    const data = yield call(mutations.editAnswer, action.payload);
    const result = data.data;
    yield put({ type: "EDIT_ANSWER_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "EDIT_ANSWER_FAILURE", error });
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
  yield takeLatest("POST_QUESTION_REQUEST", postQuestion);
  yield takeLatest("EDIT_ANSWER_REQUEST", editAnswer);
  yield takeLatest("DELETE_ANSWER_REQUEST", deleteAnswer);
  yield takeLatest("GET_QUESTION_AND_ANSWERS_REQUEST", getQuestionAndAnswers);
  yield takeLatest("GET_MY_QUESTIONS_REQUEST", getMyQuestions);
  yield takeLatest("DOWNVOTE_ANSWER_REQUEST", downvoteAnswer);
  yield takeLatest("UPVOTE_ANSWER_REQUEST", upvoteAnswer);
  yield takeLatest("DOWNVOTE_QUESTION_REQUEST", downvoteQuestion);
  yield takeLatest("UPVOTE_QUESTION_REQUEST", upvoteQuestion);
};

export default saga;
