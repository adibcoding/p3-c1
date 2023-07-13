import postsReducer from "./posts";
import { combineReducers } from "redux";

const baseReducer = combineReducers({
  posts: postsReducer,
});

export default baseReducer;
