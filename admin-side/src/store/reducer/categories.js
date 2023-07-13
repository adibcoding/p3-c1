import { CATEGORIES_DETAIL_SUCCESS, CATEGORIES_LOADING, CATEGORIES_SUCCESS } from "../action/actionType";

const initialState = {
  loading: false,
  categories: [],
  category: {},
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case CATEGORIES_DETAIL_SUCCESS:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
