import styled from "styled-components";
import { Link } from "react-router-dom";
import { BookmarkButton } from "./BookmarkButton";

const ListItem = ({ title, author, thumbnail, handleClick, ...item }) => (
  <Wrapper>
    <RowFlex>
      <StyledImage src={thumbnail} alt={title} />
      <section>
        <Heading onClick={handleClick} to={`/story/1`}>
          {title}
        </Heading>
        <SubText>{author}</SubText>
      </section>
    </RowFlex>
    <BookmarkButton item={item} />
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

  :hover {
    transform: translate3D(0, -1px, 0) scale(1.03);
    transition-duration: 0.2s;
  }
`;

const RowFlex = styled.div`
  display: flex;
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

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export default ListItem;
