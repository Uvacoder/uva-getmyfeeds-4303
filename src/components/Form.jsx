import styled from "styled-components";
import { Button } from "./Button";

const Form = ({ inputRef, handleSubmit, MEDIUM_URL }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input type="text" value={MEDIUM_URL} disabled />
      <Input type="text" placeholder="the-economist" ref={inputRef} />
      <Button pad="10px 12px" w="100%" m="5px">
        Add Feed
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-family: ${(p) => p.theme.fonts.text};
  margin: 5px;
`;

export default Form;
