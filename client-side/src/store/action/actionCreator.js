import { BASE_URL } from "../../config/api";
import { fetcherHelp } from "../../helpers/fetcherHelp";
import {
  POSTS_LOADING,
  POSTS_SUCCESS,
  DETAIL_POST_SUCCESS,
} from "./actionType";

export const fetchPostLoading = (payload) => {
  return {
    type: POSTS_LOADING,
    payload,
  };
};

export const fetchPostSuccess = (payload) => {
  return {
    type: POSTS_SUCCESS,
    payload,
  };
};

export const fetchOnePostSuccess = (payload) => {
  return {
    type: DETAIL_POST_SUCCESS,
    payload,
  };
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchPostLoading(true));
      const fetchData = fetcherHelp(BASE_URL + "/pub/posts");
      const responseJson = await fetchData();
      console.log(responseJson);
      dispatch(fetchPostSuccess(responseJson));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(fetchPostLoading(false));
    }
  };
};

export const fetchOnePost = (slug) => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchPostLoading(true));
      const fetchData = fetcherHelp(BASE_URL + `/pub/posts/${slug}`);
      const responseJson = await fetchData();
      console.log(responseJson);
      dispatch(fetchOnePostSuccess(responseJson));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(fetchPostLoading(false));
    }
  };
};
