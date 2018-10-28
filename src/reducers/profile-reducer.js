import {
  FETCH_PROFILE_INFO_BEGIN,
  FETCH_PROFILE_INFO_SUCCESS,
  FETCH_PROFILE_INFO_FAILURE
} from "../actions/index";

const initialState = {
  item: {},
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_INFO_BEGIN:
      return { ...state, loading: true };
    case FETCH_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload.profile
      };
    case FETCH_PROFILE_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: {}
      };
    default:
      return state;
  }
};
