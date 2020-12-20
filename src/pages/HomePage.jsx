import styled from "styled-components";
import LinkContainer from "../containers/LinkContainer";

const HomePage = () => {
  return (
    <Wrapper>
      <Heading>The place to read your feeds.</Heading>
      <LinkContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 48px;
  text-align: center;
  margin: 30px;
`;

export default HomePage;
