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
    <Wrapper>
      {!isLoading ? (
        <>
          <Heading>{feedDetails.title}</Heading>
          <SubText>{feedDetails.description}</SubText>
        </>
      ) : (
        <h2>Loading Data</h2>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: "32px";
`;

const SubText = styled.p`
  font-size: "16px";
  color: ${(p) => p.theme.colors.accent};
`;

export default FeedContainer;
