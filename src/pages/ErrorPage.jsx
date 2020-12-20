import styled from "styled-components";
import { ButtonLink } from "../components/ButtonLink";

const ErrorPage = () => {
  return (
    <Wrapper>
      <Heading>Whoops! We couldn't find what you were looking for.</Heading>
      <SubText>Click on the Logo or Below to head back </SubText>
      <ButtonLink to="/">Take me Back</ButtonLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const Heading = styled.h2`
  font-size: 28px;
  text-align: center;
`;

const SubText = styled.p`
  color: ${(p) => p.theme.colors.accent};
  text-align: center;
  margin: 20px 0;
`;

export default ErrorPage;
