import styled from "styled-components";
import { ButtonLink } from "../components/ButtonLink";
import { useStore } from "../context";

const LinkContainer = () => {
  const { feeds } = useStore();
  return (
    <Wrapper>
      <Text>Available Feeds</Text>
      {feeds.map((feed) => (
        <ButtonLink
          key={`/${feed.name}`}
          to={`/${feed.name.toLowerCase()}`}
          m={"0 10px"}
        >
          {feed.name}
        </ButtonLink>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
`;

const Text = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: ${(p) => p.theme.fontWeights.heading};
`;

export default LinkContainer;
