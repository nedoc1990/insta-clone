import { ADD_COMMENT } from "../actions/index";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return state;
    default:
      return state;
  }
};
