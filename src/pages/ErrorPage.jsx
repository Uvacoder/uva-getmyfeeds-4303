import { Fragment } from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Fragment>
      <Heading>Whoops! We couldn't find what you were looking for.</Heading>
      <SubText>Click on the Logo to head back</SubText>
    </Fragment>
  );
};

const Heading = styled.h2`
  font-size: 28px;
  text-align: center;
`;

const SubText = styled.p`
  color: ${(p) => p.theme.colors.accent};
  text-align: center;
`;

export default ErrorPage;
