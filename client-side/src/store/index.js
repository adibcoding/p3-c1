import { legacy_createStore as createStore, applyMiddleware } from "redux";
import baseReducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(baseReducer, applyMiddleware(thunk));

export default store;
