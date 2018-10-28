import {
  FETCH_PROFILE_INFO_BEGIN,
  FETCH_PROFILE_INFO_SUCCESS,
  FETCH_PROFILE_INFO_FAILURE
} from "./index";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchProfileInfo = () => {
  return dispatch => {
    fetchProfileInfoBegin();
    return fetch(`${baseUrl}/users`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProfileInfoSucess(json));
        return json;
      })
      .catch(error => fetchProfileInfoFailure(error));
  };
};

export const fetchProfileInfoBegin = username => ({
  type: FETCH_PROFILE_INFO_BEGIN,
  payload: username
});

export const fetchProfileInfoSucess = profile => ({
  type: FETCH_PROFILE_INFO_SUCCESS,
  payload: { profile }
});

export const fetchProfileInfoFailure = error => ({
  type: FETCH_PROFILE_INFO_FAILURE,
  payload: { error }
});

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
