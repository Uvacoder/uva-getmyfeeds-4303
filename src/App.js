import { fetchFeed } from "./services";
import { useState } from "react";

function App() {
  return (
    <>
      <h1>RSS Reader</h1>
      <button onClick={() => fetchFeed("https://medium.com/feed/backchannel")}>
        Fetch Backchannel
      </button>
    </>
  );
}

export default App;
