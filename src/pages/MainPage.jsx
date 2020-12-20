import styled from "styled-components";
import { useEffect } from "react";
import { useBookmarks } from "../hooks/useBookmarks";
import { useStore } from "../context";
import FeedContainer from "../containers/FeedContainer";
import LinkContainer from "../containers/LinkContainer";

const MainPage = ({ url }) => {
  const { feedDetails } = useStore();

  return (
    <Wrapper>
      <LinkContainer />
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

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const SubText = styled.p`
  font-size: 16px;
  color: ${(p) => p.theme.colors.accent};
  text-align: center;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export default MainPage;
