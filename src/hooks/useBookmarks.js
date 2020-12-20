import { useStore, useDispatch } from "../context";

export const useBookmarks = () => {
  const dispatch = useDispatch();
  const { bookmarks } = useStore();

  const getBookmarks = () => {
    //get the existing bookmarks from LocalStorage and push it to our state to be
    //available for the current session
    let tempBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    dispatch({ type: "BOOKMARKS", payload: tempBookmarks });
  };

  const setBookmarks = (item) => {
    let tempBookmarks = bookmarks;
    //Check if the bookmark already exists
    if (!tempBookmarks.some((fav) => fav.guid === item.guid)) {
      tempBookmarks.push(item);
      localStorage.setItem("bookmarks", JSON.stringify(tempBookmarks));
      dispatch({ type: "BOOKMARKS", payload: tempBookmarks });
    } else {
      //If exists, remove it from the stored value
      const filteredFavs = tempBookmarks.filter(
        (fav) => fav.guid !== item.guid
      );
      //Pass the filtered value back to Local Storage -> this essentially works as removing it from the array
      dispatch({ type: "BOOKMARKS", payload: filteredFavs });
      localStorage.setItem("bookmarks", JSON.stringify(filteredFavs));
    }
  };

  return { getBookmarks, setBookmarks };
};
