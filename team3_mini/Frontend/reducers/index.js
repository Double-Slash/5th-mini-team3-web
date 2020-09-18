import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

const intialState = {};

const rootReducer = combineReducers({
  index: (state = intialState, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
