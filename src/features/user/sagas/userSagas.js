import { call, put, takeLatest } from "redux-saga/effects";

import queries from "../../../api/queries";
import mutations from "../../../api/mutations";

function* getMostPopular(action) {
  try {
    const data = yield call(queries.getMostPopular, action.payload);
    const result = data.data;
    yield put({ type: "GET_MOST_POPULAR_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_MOST_POPULAR_FAILURE", error });
  }
}

function* getUser(action) {
  try {
    const data = yield call(queries.getUser, action.payload);
    const result = data.data;
    yield put({ type: "GET_USER_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_USER_FAILURE", error });
  }
}

function* editUser(action) {
  const { formik, handleOnEdit } = action.meta;
  try {
    const data = yield call(mutations.editUser, action.payload);
    const result = data.data;
    formik.setSubmitting(false);
    handleOnEdit();
    yield put({ type: "EDIT_USER_SUCCESS", payload: result });
  } catch (error) {
    formik.setFieldError("lastName", error.data);
    formik.setSubmitting(false);
    yield put({ type: "EDIT_USER_FAILURE", error });
  }
}

function* changePassword(action) {
  const { formik, handleOnChange } = action.meta;
  try {
    const data = yield call(mutations.changePassword, action.payload);
    const result = data.data;
    formik.setSubmitting(false);
    handleOnChange();
    yield put({ type: "CHANGE_PASSWORD_SUCCESS", payload: result });
  } catch (error) {
    formik.setFieldError("confirmPassword", error.data);
    formik.setSubmitting(false);
    yield put({ type: "CHANGE_PASSWORD_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("GET_MOST_POPULAR_REQUEST", getMostPopular);
  yield takeLatest("GET_USER_REQUEST", getUser);
  yield takeLatest("EDIT_USER_REQUEST", editUser);
  yield takeLatest("CHANGE_PASSWORD_REQUEST", changePassword);
};

export default saga;
