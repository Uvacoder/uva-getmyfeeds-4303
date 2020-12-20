import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { IoMdSunny } from "react-icons/io";
import { RiMoonClearLine } from "react-icons/ri";

const Header = ({ theme, handleClick }) => (
  <StyledHeader>
    <StyledHeading>GetYourFeeds</StyledHeading>
    <div>
      <Button m={"0 10px"}>Bookmarks</Button>
      <Button onClick={handleClick}>
        {theme === "light" ? (
          <IoMdSunny style={{ transition: "0.3s" }} />
        ) : (
          <RiMoonClearLine style={{ color: "white", transition: "0.3s" }} />
        )}
      </Button>
    </div>
  </StyledHeader>
);

const StyledHeading = styled.h1`
  font-size: "36px";
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`;

export default Header;
