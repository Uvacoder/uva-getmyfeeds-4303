import styled from "styled-components";
import { useEffect } from "react";
import { fetchFeed } from "../services";
import { useDispatch, useStore } from "../context";
import ListItem from "../components/ListItem";

const FeedContainer = ({ url }) => {
  const dispatch = useDispatch();
  const { feedItems, isLoading } = useStore();

  useEffect(() => {
    dispatch({ type: "IS_LOADING", payload: true });
    fetchFeed(url).then((data) => {
      dispatch({ type: "FEED_DETAILS", payload: data.feed });
      dispatch({ type: "FEED_ITEMS", payload: data.items });
      dispatch({ type: "IS_LOADING", payload: false });
    });
  }, []);

  return (
    <Wrapper>
      {!isLoading ? (
        <>
          {feedItems.map((item) => (
            <ListItem key={item.title} {...item} />
          ))}
        </>
      ) : (
        <h2>Loading Data</h2>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export default FeedContainer;
