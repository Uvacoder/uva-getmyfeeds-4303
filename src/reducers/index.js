const initialState = {
  feedItems: [],
  isLoading: false,
  feed: {},
  bookmarks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "FEED":
      return {
        ...state,
        feed: action.payload,
      };
    case "FEED_ITEMS":
      return {
        ...state,
        feedItems: action.payload,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "BOOKMARKS":
      return {
        ...state,
        bookmarks: action.payload,
      };

    default:
      return state;
  }
}

export { initialState, reducer };
