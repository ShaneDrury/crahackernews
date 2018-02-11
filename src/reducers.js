import { RECEIVE_POSTS, REQUEST_POSTS } from "./actions";

const NOT_ASKED = "NOT_ASKED";
const LOADING = "LOADING";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

const initialState = {
  status: NOT_ASKED,
  items: []
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        status: LOADING,
      };
    case RECEIVE_POSTS:
      return {
        status: SUCCESS,
        items: action.payload,
      }
  }
  return state;
};

export default posts;
