import { MEDIUM_URL } from "../constants";
import { fetchFeed } from "../services";

export const createNewFeed = async ({ ref, feeds, dispatch, setError }) => {
  const refValue = ref.current.value;
  //Form Validations
  if (refValue !== "") {
    const response = await fetchFeed(`${MEDIUM_URL}${refValue}`);
    //If RSS2JSON validates the url to be a good one, we add it to our feed list else throw an error
    if (response.status === "ok") {
      const feedObject = {
        name: refValue,
        url: `${MEDIUM_URL}${refValue}`,
      };
      //Check if the feed already exists, so as to not add it again
      if (
        !feeds.some(
          (feed) => feed.name.toLowerCase() === feedObject.name.toLowerCase()
        )
      ) {
        const newFeeds = feeds.concat(feedObject);
        dispatch({ type: "FEEDS", payload: newFeeds });
        setError("");
        ref.current.value = "";
      } else {
        setError("Feed already exists");
      }
    } else {
      setError(response.message);
    }
  } else {
    setError("Field cannot be empty");
  }
};
