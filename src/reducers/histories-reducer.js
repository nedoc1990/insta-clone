import {
  FETCH_HISTORIES_BEGIN,
  FETCH_HISTORIES_SUCCESS,
  FETCH_HISTORIES_FAILURE
} from "../actions/index";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HISTORIES_BEGIN:
      return {
        ...state,
        loading: true
      };
    case FETCH_HISTORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.histories
      };

    case FETCH_HISTORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};
