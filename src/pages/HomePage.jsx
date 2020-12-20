import styled from "styled-components";
import LinkContainer from "../containers/LinkContainer";

const HomePage = () => {
  return (
    <Wrapper>
      <LinkContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default HomePage;
