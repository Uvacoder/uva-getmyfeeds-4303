import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./theme/GlobalStyle";
import { fetchFeed } from "./services";
import { useEffect } from "react";
import Header from "./components/Header";
import { useTheme } from "./hooks/useTheme";

function App() {
  useEffect(() => {
    fetchFeed("https://medium.com/feed/the-economist");
  }, []);

  const [storedTheme, setStoredTheme] = useTheme();

  const themeSwitcher = () => {
    storedTheme === "light" ? setStoredTheme("dark") : setStoredTheme("light");
  };

  return (
    <ThemeProvider theme={storedTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header theme={storedTheme} handleClick={themeSwitcher} />
    </ThemeProvider>
  );
}

export default App;
