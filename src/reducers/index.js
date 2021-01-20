const initialState = {
  feedItems: [],
  isLoading: false,
  feedDetails: {},
  bookmarks: [],
  feeds: [
    {
      name: "Better-Programming",
      url: "https://medium.com/feed/better-programming",
    },
    {
      name: "Towards-Data-Science",
      url: "https://medium.com/feed/towards-data-science",
    },
    { name: "The-Economist", url: "https://medium.com/feed/the-economist" },
  ],
  currentItem: {},
};

// Flux pattern of mutating a copy of the state based on reducers.
function reducer(state, action) {
  switch (action.type) {
    case "FEEDS":
      return {
        ...state,
        feeds: action.payload,
      };
    case "FEED_DETAILS":
      return {
        ...state,
        feedDetails: action.payload,
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
    case "CURRENT_ITEM":
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
}

export { initialState, reducer };
