import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./theme/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
