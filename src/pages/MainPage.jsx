import styled from "styled-components";
import { useStore } from "../context";
import FeedContainer from "../containers/FeedContainer";

const MainPage = ({ url }) => {
  const { feedDetails } = useStore();
  return (
    <Wrapper>
      <Heading>{feedDetails.title}</Heading>
      <SubText>{feedDetails.description}</SubText>
      <FeedContainer url={url} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 40px;
`;

const SubText = styled.p`
  font-size: 16px;
  color: ${(p) => p.theme.colors.accent};
`;

export default MainPage;
