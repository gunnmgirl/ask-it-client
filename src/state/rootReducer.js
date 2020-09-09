import { combineReducers } from "redux";

import auth from "../features/auth/reducers/authReducers";
import user from "../features/user/reducers/userReducers";
import questions from "../features/questions/reducers/questionsReducers";

const rootReducer = combineReducers({
  auth,
  user,
  questions,
});

export default rootReducer;
