import { all, fork } from "redux-saga/effects";

import authSagas from "../features/auth/sagas/authSagas";
import questionsSagas from "../features/questions/sagas/questionsSagas";
import userSagas from "../features/user/sagas/userSagas";

export default function* rootSaga() {
  yield all([fork(authSagas), fork(questionsSagas), fork(userSagas)]);
}
