import styled from "styled-components";
import ListItem from "../components/ListItem";
import { useStore, useDispatch } from "../context";

const BookmarksPage = () => {
  const { bookmarks } = useStore();
  const dispatch = useDispatch();

  const handleListClick = (item) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "CURRENT_ITEM", payload: item });
    dispatch({ type: "IS_LOADING", payload: false });
  };

  return (
    <Wrapper>
      <Heading>Bookmarks</Heading>
      {bookmarks.length > 0 ? (
        <>
          {bookmarks.map((item) => (
            <ListItem
              key={item.title}
              item={item}
              handleClick={() => handleListClick(item)}
            />
          ))}
        </>
      ) : (
        <h2>No Bookmarks Added</h2>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const Heading = styled.h1`
  font-size: 40px;
`;

export default BookmarksPage;
