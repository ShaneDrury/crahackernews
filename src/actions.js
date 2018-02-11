export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

const requestPosts = () => ({ type: REQUEST_POSTS });
const receivePosts = posts => ({ type: RECEIVE_POSTS, payload: posts });

const TOP_POSTS = "https://hacker-news.firebaseio.com/v0/topstories.json";

const getPostUrl = itemId =>
  `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;

const processItems = items => items.slice(0, 5);

const apiFetch = url => fetch(url, { "Content-type": "application/json" });

const fetchPostContents = async (ids) => {
  const responses = await Promise.all(ids.map(id => apiFetch(getPostUrl(id))));
  return Promise.all(responses.map(response => response.json()));
};

export const fetchPosts = () => async dispatch => {
  dispatch(requestPosts());
  const response = await apiFetch(TOP_POSTS);
  const json = await response.json();
  const topPostIds = processItems(json);
  const postContents = await fetchPostContents(topPostIds);
  dispatch(receivePosts(postContents));
};
