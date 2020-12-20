import styled from "styled-components";

const ListItem = ({ title, author }) => (
  <Wrapper>
    <div>
      <Heading>{title}</Heading>
      <SubText>{author}</SubText>
    </div>
  </Wrapper>
);

const Wrapper = styled.article`
  padding: 10px;
  border: none;
  border-radius: 2px;
  background: ${(p) => p.theme.colors.elements};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  width: 45%;
`;

const Heading = styled.h4`
  font-size: 16px;
`;

const SubText = styled.p`
  font-size: 12px;
  color: ${(p) => p.theme.colors.accent};
`;

export default ListItem;
