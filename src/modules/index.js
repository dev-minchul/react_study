import { combineReducers } from "redux";
import font from "./font";
import count from "./count";
import route from "./route";
import user from "./user";

const rootReducer = combineReducers({
  font,
  count,
  route,
  user
});

export default rootReducer;