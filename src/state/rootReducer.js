import { combineReducers } from "redux";

import auth from "../features/auth/reducers/authReducers";
import user from "../features/user/reducers/userReducers";

const rootReducer = combineReducers({
  auth,
  user,
});

export default rootReducer;
