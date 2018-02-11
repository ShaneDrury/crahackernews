const NOT_ASKED = "NOT_ASKED";
const LOADING = "LOADING";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

const initialState = {
  status: NOT_ASKED,
  items: []
};

const posts = (state = initialState, action) => {
  return state;
};

export default posts;
