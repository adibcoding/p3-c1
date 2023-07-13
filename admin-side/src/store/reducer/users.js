import { USERS_LOGIN_SUCCESS } from "../action/actionType";

const initialState = {
  access_token: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer
