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
    //Ref for the input value instead of onChange
    const refValue = ref.current.value;
    //Form Validations
    if (refValue !== "") {
      const response = await fetchFeed(`${MEDIUM_URL}${refValue}`);
      //If RSS2JSON validates the url to be a good one, we add it to our feed list else throw an error
      if (response.status === "ok") {
        const feedObject = {
          name: refValue,
          url: `${MEDIUM_URL}${refValue}`,
        };
        //Check if the feed already exists, so as to not add it again
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
    } else {
      setError("Field cannot be empty");
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
      {error ? <ErrorText>Error - {error}</ErrorText> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Heading = styled.h2`
  font-size: 48px;
  text-align: center;
  margin: 30px;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const ErrorText = styled.p`
  text-align: center;
  color: #df2935;
`;

export default HomePage;
