import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { ButtonLink } from "./ButtonLink";
import { IoMdSunny } from "react-icons/io";
import { RiMoonClearLine } from "react-icons/ri";

const Header = ({ theme, handleClick }) => (
  <StyledHeader>
    <StyledHeading to="/">GetYourFeeds</StyledHeading>
    <div>
      <ButtonLink to="/bookmarks" m={"0 10px"}>
        Bookmarks
      </ButtonLink>
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

const StyledHeading = styled(Link)`
  font-size: 36px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  text-decoration: none;
  :visited {
    color: inherit;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`;

export default Header;
