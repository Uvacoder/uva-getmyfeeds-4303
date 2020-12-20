import { Button } from "./Button";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useBookmarks } from "../hooks/useBookmarks";
import { useStore } from "../context";

export const BookmarkButton = ({ item }) => {
  const { setBookmarks } = useBookmarks();
  const { bookmarks } = useStore();

  const isBookmarked = bookmarks.some((fav) => fav.guid === item.guid);

  return (
    <Button onClick={() => setBookmarks(item)}>
      {isBookmarked ? (
        <BsFillBookmarkFill style={{ fontSize: "24px" }} />
      ) : (
        <BsBookmark style={{ fontSize: "24px" }} />
      )}
    </Button>
  );
};
