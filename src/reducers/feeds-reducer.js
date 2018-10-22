import {
  FETCH_FEEDS_BEGIN,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
  TOGGLE_LIKE_FEED
} from "../actions/index";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEEDS_BEGIN:
      return {
        ...state,
        loading: true
      };
    case FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.feeds
      };
    case FETCH_FEEDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case TOGGLE_LIKE_FEED:
      const items = state.items.map(feed => {
        console.log(action.payload);
        return feed.id === action.payload
          ? {
              ...feed,
              liked: !feed.liked,
              likes: feed.liked ? feed.likes - 1 : feed.likes + 1
            }
          : feed;
      });
      return {
        ...state,
        items
      };
    default:
      return state;
  }
};
