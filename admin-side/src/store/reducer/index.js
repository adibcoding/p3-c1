import { combineReducers } from "redux";
import postsReducer from "./posts";
import categoriesReducer from "./categories";
import usersReducer from "./users";

const baseReducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  users: usersReducer
});

export default baseReducer;
