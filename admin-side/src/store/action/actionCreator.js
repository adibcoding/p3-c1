import { BASE_URL } from "../../config/api";
import { fetcherHelp } from "../../helpers/fetcherHelp";
import {
  POSTS_LOADING,
  POSTS_SUCCESS,
  POSTS_DELETE_SUCCESS,
  POST_DETAIL_SUCCESS,
  CATEGORIES_SUCCESS,
  CATEGORIES_LOADING,
  CATEGORIES_DETAIL_SUCCESS,
} from "./actionType";

export const fetchPostSuccess = (payload) => {
  return {
    type: POSTS_SUCCESS,
    payload,
  };
};

export const fetchDetailPostSuccess = (payload) => {
  return {
    type: POST_DETAIL_SUCCESS,
    payload,
  };
};

export const fetchPostLoading = (payload) => {
  return {
    type: POSTS_LOADING,
    payload,
  };
};

export const fetchDeleteSuccess = (payload) => {
  return {
    type: POSTS_DELETE_SUCCESS,
    payload,
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostLoading(true));
      const fetchData = fetcherHelp(BASE_URL + "/posts");
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

export const fetchOnePost = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostLoading(true));
      const fetchData = fetcherHelp(BASE_URL + `/posts/${id}`);
      const responseJson = await fetchData();
      console.log(responseJson);
      dispatch(fetchDetailPostSuccess(responseJson));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(fetchPostLoading(false));
    }
  };
};

export const fetchDeletePosts = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostLoading(true));
      const fetchData = fetcherHelp(BASE_URL + `/posts/${id}`, "DELETE");
      const responseJson = await fetchData();
      console.log(responseJson);
      dispatch(fetchDeleteSuccess(responseJson));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(fetchPostLoading(false));
    }
  };
};

export const addPost = (payload) => {
  return async () => {
    try {
      const fetchData = fetcherHelp(BASE_URL + "/posts", "POST", payload);
      const responseJson = await fetchData();
      console.log(responseJson);
    } catch (err) {
      throw await err;
    }
  };
};

export const editPost = (payload, id) => {
  return async () => {
    try {
      const fetchData = fetcherHelp(BASE_URL + `/posts/${id}`, "PUT", payload);
      const responseJson = await fetchData();
      console.log(responseJson);
    } catch (err) {
      throw await err;
    }
  };
};

//Categories

export const fetchCategoriesSuccess = (payload) => {
  return {
    type: CATEGORIES_SUCCESS,
    payload,
  };
};

export const fetchCategoriesDetailSuccess = (payload) => {
  return {
    type: CATEGORIES_DETAIL_SUCCESS,
    payload,
  };
};

export const fetchCategoriesLoading = (payload) => {
  return {
    type: CATEGORIES_LOADING,
    payload,
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCategoriesLoading(true));
      const fetchData = fetcherHelp(BASE_URL + "/categories");
      const responseJson = await fetchData();
      console.log(responseJson);
      dispatch(fetchCategoriesSuccess(responseJson));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(fetchCategoriesLoading(false));
    }
  };
};

export const fetchDetailCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchCategoriesLoading(true));
      const fetchData = fetcherHelp(BASE_URL + `/categories/${id}`);
      const responseJson = await fetchData();
      console.log(responseJson);
      dispatch(fetchCategoriesDetailSuccess(responseJson));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(fetchCategoriesLoading(false));
    }
  };
};

export const addCategories = (payload) => {
  return async () => {
    try {
      const fetchData = fetcherHelp(BASE_URL + "/categories", "POST", payload);
      const responseJson = await fetchData();
      console.log(responseJson);
    } catch (err) {
      throw await err;
    }
  };
};

export const editCategory = (payload, id) => {
  return async () => {
    try {
      const fetchData = fetcherHelp(
        BASE_URL + `/categories/${id}`,
        "PUT",
        payload
      );

      const responseJson = await fetchData();
      console.log(responseJson);
    } catch (err) {
      throw await err;
    }
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchCategoriesLoading(true));
      const fetchData = fetcherHelp(BASE_URL + `/categories/${id}`, "DELETE");
      const responseJson = await fetchData();
      console.log(responseJson);
    } catch (err) {
      throw await err;
    } finally {
      dispatch(fetchCategoriesLoading(false));
    }
  };
};

//users

export const registerUser = (payload) => {
  return async () => {
    try {
      const fetchData = fetcherHelp(BASE_URL + "/register", "POST", payload);
      const responseJson = await fetchData();
      console.log(responseJson);
    } catch (err) {
      console.log(err);
      throw await err;
    }
  };
};

export const loginUser = (payload) => {
  return async () => {
    try {
      const fetchData = fetcherHelp(BASE_URL + "/login", "POST", payload);
      const responseJson = await fetchData();
      console.log(responseJson);
      localStorage.setItem("access_token", responseJson.access_token);
    } catch (err) {
      console.log("<<<<<<<<< in actioncreator");
      throw await err;
    }
  };
};
