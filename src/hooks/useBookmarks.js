import { useStore, useDispatch } from "../context";

export const useBookmarks = () => {
  const dispatch = useDispatch();
  const { bookmarks } = useStore();

  const getBookmarks = () => {
    let tempBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    dispatch({ type: "BOOKMARKS", payload: tempBookmarks });
  };

  const setBookmarks = (item) => {
    let tempBookmarks = bookmarks;

    if (!tempBookmarks.some((fav) => fav.guid === item.guid)) {
      tempBookmarks.push(item);
      localStorage.setItem("bookmarks", JSON.stringify(tempBookmarks));
      dispatch({ type: "BOOKMARKS", payload: tempBookmarks });
    } else {
      const filteredFavs = tempBookmarks.filter(
        (fav) => fav.guid !== item.guid
      );

      dispatch({ type: "BOOKMARKS", payload: filteredFavs });
      localStorage.setItem("bookmarks", JSON.stringify(filteredFavs));
    }
  };

  return { getBookmarks, setBookmarks };
};
