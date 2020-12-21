import { Button } from "./Button";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useBookmarks } from "../hooks/useBookmarks";
import { useStore } from "../context";

export const BookmarkButton = ({ item }) => {
  const { setBookmarks } = useBookmarks();
  const { bookmarks } = useStore();

  //Check to see if the ListItem already exists in our Global State
  const isBookmarked = bookmarks.some((fav) => fav.guid === item.guid);

  return (
    <Button onClick={() => setBookmarks(item)} aria-label="bookmark-btn">
      {isBookmarked ? (
        <BsFillBookmarkFill
          style={{ fontSize: "24px" }}
          data-testid="filled-bookmark"
        />
      ) : (
        <BsBookmark
          style={{ fontSize: "24px" }}
          data-testid="unfilled-bookmark"
        />
      )}
    </Button>
  );
};
