import styled from "styled-components";
import { ButtonLink } from "../components/ButtonLink";
import { useStore } from "../context";

const LinkContainer = () => {
  const { feeds } = useStore();
  return (
    <Wrapper>
      {feeds.map((feed) => (
        <ButtonLink key={`/${feed.name}`} to={`/${feed.name}`} m={"0 10px"}>
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

export default LinkContainer;
