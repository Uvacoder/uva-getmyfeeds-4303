import styled from "styled-components";
import { Button } from "./Button";

const Form = ({ inputRef, handleSubmit, MEDIUM_URL }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input type="text" value={MEDIUM_URL} disabled />
      <Input type="text" placeholder="the-economist" ref={inputRef} />
      <Button h="100%">Add Feed</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-family: ${(p) => p.theme.fonts.text};
  margin: 0 5px;
`;

export default Form;
