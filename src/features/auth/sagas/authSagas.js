import { call, put, takeLatest } from "redux-saga/effects";

import mutations from "../../../api/mutations";
import history from "../../../routing/history";

function* signup(action) {
  const { formik } = action.meta;
  try {
    yield call(mutations.signup, action.payload);
    formik.setSubmitting(false);
    history.push("/login");
    yield put({ type: "SIGNUP_SUCCESS" });
  } catch (error) {
    formik.setFieldError("password", error.data);
    formik.setSubmitting(false);
    yield put({ type: "SIGNUP_FAILURE", error });
  }
}

function* login(action) {
  const { formik } = action.meta;
  try {
    const data = yield call(mutations.login, action.payload);
    const result = data.data;
    localStorage.setItem("token", result.token);
    formik.setSubmitting(false);
    history.push("/");
    yield put({ type: "LOGIN_SUCCESS", payload: result.userId });
  } catch (error) {
    formik.setFieldError("password", error.data);
    formik.setSubmitting(false);
    yield put({ type: "LOGIN_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("SIGNUP_REQUEST", signup);
  yield takeLatest("LOGIN_REQUEST", login);
};

export default saga;
