export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POSTS_FAILURE = "REQUEST_POSTS_FAILURE";

const requestPosts = () => ({ type: REQUEST_POSTS });
const receivePosts = posts => ({ type: RECEIVE_POSTS, payload: posts });
const requestPostsFailure = () => ({ type: REQUEST_POSTS_FAILURE });

const TOP_POSTS = "https://hacker-news.firebaseio.com/v0/topstories.json";

const getPostUrl = itemId =>
  `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;

const processItems = items => items.slice(0, 5);

const apiFetch = async url => {
  const response = await fetch(url, {"Content-type": "application/json"});
  if (!response.ok) {
    let e = new Error(response.statusText);
    e.response = response;
    throw e;
  }
  return response.json();
};

const fetchPostContents = async (ids) => {
  const postUrls = ids.map(getPostUrl);
  return Promise.all(postUrls.map(apiFetch));
};

export const fetchPosts = () => async dispatch => {
  dispatch(requestPosts());
  let postIds;
  try {
    postIds = await apiFetch(TOP_POSTS);
  } catch (e) {
    dispatch(requestPostsFailure());
    return;
  }
  const topPostIds = processItems(postIds);

  let postContents;
  try {
    postContents = await fetchPostContents(topPostIds);
  } catch (e) {
    dispatch(requestPostsFailure());
    return;
  }

  dispatch(receivePosts(postContents));
};
