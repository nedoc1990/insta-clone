import {
  FETCH_FEEDS_BEGIN,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
  TOGGLE_LIKE_FEED
} from "./";

const baseUrl = "http://localhost:8080/feeds";

export const fetchFeeds = () => {
  return dispatch => {
    fetchFeedsBegin();
    return fetch(baseUrl)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchFeedsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchFeedsFailure(error)));
  };
};

export const toggleLikeFeed = id => {
  console.log(id);
  return {
    type: TOGGLE_LIKE_FEED,
    payload: id
  };
};

export const fetchFeedsBegin = () => ({
  type: FETCH_FEEDS_BEGIN
});

export const fetchFeedsSuccess = feeds => ({
  type: FETCH_FEEDS_SUCCESS,
  payload: { feeds }
});

export const fetchFeedsFailure = error => ({
  type: FETCH_FEEDS_FAILURE,
  payload: { error }
});

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
