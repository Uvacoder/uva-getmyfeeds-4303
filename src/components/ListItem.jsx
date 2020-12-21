import styled from "styled-components";
import { Link } from "react-router-dom";
import { BookmarkButton } from "./BookmarkButton";

const ListItem = ({ item, handleClick }) => {
  const { title, author, thumbnail, guid } = item;
  //Take the right half of the guid to create a unique ID for the route, since the feed doesn't provide
  // an ID by default as a property
  const storyID = guid.split("/p/")[1];
  return (
    <Wrapper>
      <RowFlex>
        <StyledImage src={thumbnail} alt={title} />
        <section>
          <Heading onClick={handleClick} to={`/story/${storyID}`}>
            {title}
          </Heading>
          <SubText>{author}</SubText>
        </section>
      </RowFlex>
      <BookmarkButton item={item} data-testid={`bookmark-btn-${storyID}`} />
    </Wrapper>
  );
};

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
  // Pushes the app onto the user to give an effect of hover
  :hover {
    transform: translate3D(0, -1px, 0) scale(1.03);
    transition-duration: 0.2s;
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const RowFlex = styled.div`
  display: flex;
`;

const Heading = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  :visited,
  :link {
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
