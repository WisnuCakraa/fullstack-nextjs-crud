import { combineReducers } from "redux";
import novels from "./novels";

const rootReducer = combineReducers({
  novels: novels,

})

export default rootReducer;