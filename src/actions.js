export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

const requestPosts = () => ({ type: REQUEST_POSTS });
const receivePosts = (posts) => ({ type: RECEIVE_POSTS, payload: posts });

const TOP_POSTS = "https://hacker-news.firebaseio.com/v0/topstories.json";

const processItems = items => items.slice(0, 5);

export const fetchPosts = () => dispatch => {
  dispatch(requestPosts());
  fetch(TOP_POSTS, {
    "Content-type": "application/json"
  })
    .then(response => response.json())
    .then(json => dispatch(receivePosts(processItems(json))));
};
