import styled from "styled-components";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

import { Button } from "../components/Button";

const ButtonContainer = () => {
  return (
    <Wrapper>
      <Button m={"0 5px"}>
        <AiFillFacebook />
      </Button>
      <Button m={"0 5px"}>
        <AiOutlineTwitter />
      </Button>
      <Button m={"0 5px"}>
        <AiOutlineMail />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
`;

export default ButtonContainer;
