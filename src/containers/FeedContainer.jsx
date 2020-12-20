import styled from "styled-components";
import { useEffect } from "react";
import { fetchFeed } from "../services";
import { useDispatch, useStore } from "../context";
import ListItem from "../components/ListItem";

const FeedContainer = ({ url }) => {
  const dispatch = useDispatch();
  const { feedItems, isLoading } = useStore();

  //Initial render and fetch of the feeds and then pushing to the global state
  useEffect(() => {
    dispatch({ type: "IS_LOADING", payload: true });
    fetchFeed(url).then((data) => {
      dispatch({ type: "FEED_DETAILS", payload: data.feed });
      dispatch({ type: "FEED_ITEMS", payload: data.items });
      dispatch({ type: "IS_LOADING", payload: false });
    });
    // eslint-disable-next-line
  }, []);

  //Takes the clicked item and pushes it to the state, making
  //it available to the Detailed Page
  const handleListClick = (item) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "CURRENT_ITEM", payload: item });
    dispatch({ type: "IS_LOADING", payload: false });
  };

  return (
    <Wrapper>
      {!isLoading ? (
        <>
          {feedItems.map((item) => (
            <ListItem
              key={item.title}
              item={item}
              handleClick={() => handleListClick(item)}
            />
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

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default FeedContainer;
