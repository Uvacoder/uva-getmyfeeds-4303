import styled from "styled-components";
import { useState, useRef } from "react";
import Form from "../components/Form";
import LinkContainer from "../containers/LinkContainer";
import { useStore, useDispatch } from "../context";
import { createNewFeed } from "../utils";

const SettingsPage = () => {
  const ref = useRef("");
  const { feeds } = useStore();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    createNewFeed({ ref, feeds, dispatch, setError });
  };

  return (
    <Wrapper>
      <Heading>Settings</Heading>
      <LinkContainer />
      <Form inputRef={ref} handleSubmit={handleSubmit} />
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

const Heading = styled.h1`
  font-size: 40px;
`;

const ErrorText = styled.p`
  text-align: center;
  color: #df2935;
`;

export default SettingsPage;
