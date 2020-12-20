import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Form from "../components/Form";
import LinkContainer from "../containers/LinkContainer";
import { fetchFeed } from "../services";
import { useDispatch, useStore } from "../context";
import { useBookmarks } from "../hooks/useBookmarks";

const HomePage = () => {
  const ref = useRef("");
  const { feeds } = useStore();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const { getBookmarks } = useBookmarks();

  useEffect(() => {
    getBookmarks();
  }, []);

  const MEDIUM_URL = "https://medium.com/feed/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const refValue = ref.current.value;
    if (refValue !== "") {
      const response = await fetchFeed(`${MEDIUM_URL}${refValue}`);

      if (response.status === "ok") {
        const feedObject = {
          name: refValue,
          url: `${MEDIUM_URL}${refValue}`,
        };

        console.log(feeds);

        if (
          !feeds.some(
            (feed) => feed.name.toLowerCase() === feedObject.name.toLowerCase()
          )
        ) {
          const newFeeds = feeds.concat(feedObject);
          dispatch({ type: "FEEDS", payload: newFeeds });
          setError("");
          ref.current.value = "";
        } else {
          setError("Feed already exists");
        }
      } else {
        setError(response.message);
      }
    }
  };

  return (
    <Wrapper>
      <Heading>The place to read your feeds.</Heading>
      <LinkContainer />
      <Form
        inputRef={ref}
        handleSubmit={handleSubmit}
        MEDIUM_URL={MEDIUM_URL}
      />
      {error ? <p>Error - {error}</p> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 48px;
  text-align: center;
  margin: 30px;
`;

export default HomePage;
