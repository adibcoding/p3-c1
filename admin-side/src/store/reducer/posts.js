import {
  POSTS_DELETE_SUCCESS,
  POSTS_LOADING,
  POSTS_SUCCESS,
  POST_DETAIL_SUCCESS,
} from "../action/actionType";

const initialState = {
  posts: [],
  loading: false,
  deletedPost: {},
  post: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case POST_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case POSTS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        deletedPost: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
