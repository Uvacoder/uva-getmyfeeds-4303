import styled from "styled-components";
import { ButtonLink } from "../components/ButtonLink";
import { useDispatch, useStore } from "../context";
import { AiFillDelete } from "react-icons/ai";
import { DeleteButton } from "../components/Button";

const LinkContainer = () => {
  const { feeds } = useStore();
  const dispatch = useDispatch();

  const handleDelete = (feed) => {
    const newFeeds = feeds.filter((oldFeed) => oldFeed.name !== feed.name);

    dispatch({ type: "FEEDS", payload: newFeeds });
  };
  return (
    <Wrapper>
      <Text>Available Feeds</Text>
      {feeds.length > 0 ? (
        feeds.map((feed) => (
          <ButtonWrapper key={`${feed.name}`}>
            <ButtonLink to={`/${feed.name.toLowerCase()}`} m={"10px"} w="100%">
              {feed.name}
            </ButtonLink>
            <DeleteButton w={"auto"} onClick={() => handleDelete(feed)}>
              <AiFillDelete />
            </DeleteButton>
          </ButtonWrapper>
        ))
      ) : (
        <ErrorText>No feeds present. Add them below</ErrorText>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
  }
`;

const Text = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: ${(p) => p.theme.fontWeights.heading};
  margin: 0 10px;
`;

const ErrorText = styled.p`
  text-align: center;
  color: #df2935;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default LinkContainer;
