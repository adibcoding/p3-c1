import {
  POSTS_LOADING,
  POSTS_SUCCESS,
  DETAIL_POST_SUCCESS,
} from "../action/actionType";

const initialState = {
  posts: [],
  loading: false,
  post: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case POSTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case DETAIL_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
