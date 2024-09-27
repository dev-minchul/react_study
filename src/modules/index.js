import { combineReducers } from "redux";
import font from "./font";
import count from "./count";

const rootReducer = combineReducers({
  font,
  count
});

export default rootReducer;