import { combineReducers } from "redux";

import auth from "../features/auth/reducers/authReducers";
import user from "../features/user/reducers/userReducers";
import questions from "../features/questions/reducers/questionsReducers";
import theme from "../themes/reducers/themesReducers";

const rootReducer = combineReducers({
  auth,
  user,
  questions,
  theme,
});

export default rootReducer;
