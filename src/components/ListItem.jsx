import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = ({ title, author, handleClick }) => (
  <Wrapper>
    <div>
      <Heading onClick={handleClick} to={`/story/1`}>
        {title}
      </Heading>
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

const Heading = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  :visited {
    color: inherit;
  }
`;

const SubText = styled.p`
  font-size: 12px;
  color: ${(p) => p.theme.colors.accent};
`;

export default ListItem;
