import {
  FETCH_HISTORIES_BEGIN,
  FETCH_HISTORIES_SUCCESS,
  FETCH_HISTORIES_FAILURE
} from "./";

const baseUrl = "http://localhost:8080/histories";

export const fetchHistories = () => {
  return dispatch => {
    fetchHistoriesBegin();
    return fetch(baseUrl)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchHistoriesSuccess(json));

        return json;
      })
      .catch(error => dispatch(fetchHistoriesFailure(error)));
  };
};

export const fetchHistoriesBegin = () => ({
  type: FETCH_HISTORIES_BEGIN
});

export const fetchHistoriesSuccess = histories => ({
  type: FETCH_HISTORIES_SUCCESS,
  payload: { histories }
});

export const fetchHistoriesFailure = error => ({
  type: FETCH_HISTORIES_FAILURE,
  payload: { error }
});

// Handle HTTP errors since fetch won't.
const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
