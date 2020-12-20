import { useEffect, useState } from "react";

export const useTheme = () => {
  //Storing themes in localstorage
  const [storedTheme, setStoredTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(storedTheme));
  }, [storedTheme]);

  return [storedTheme, setStoredTheme];
};
