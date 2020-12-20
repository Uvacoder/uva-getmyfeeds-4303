import styled from "styled-components";
import { useEffect } from "react";
import { fetchFeed } from "../services";
import { useDispatch, useStore } from "../context";

const FeedContainer = ({ url }) => {
  const dispatch = useDispatch();
  const { feedDetails, feedItems, isLoading } = useStore();

  useEffect(() => {
    dispatch({ type: "IS_LOADING", payload: true });
    fetchFeed(url).then((data) => {
      dispatch({ type: "FEED_DETAILS", payload: data.feed });
      dispatch({ type: "FEED_ITEMS", payload: data.items });
      dispatch({ type: "IS_LOADING", payload: false });
    });
  }, []);

  return (
    <>
      <h1>Feed</h1>
      {!isLoading ? (
        <pre>{JSON.stringify(feedItems)}</pre>
      ) : (
        <h2>Loading Data</h2>
      )}
    </>
  );
};

export default FeedContainer;
