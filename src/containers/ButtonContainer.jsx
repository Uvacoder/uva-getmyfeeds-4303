import styled from "styled-components";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

import { Button } from "../components/Button";

const socials = [
  {
    name: "twitter",
    url: "https://twitter.com",
    icon: <AiOutlineTwitter />,
  },
  {
    name: "facebook",
    url: "https://facebook.com",
    icon: <AiFillFacebook />,
  },
  {
    name: "email",
    url: "mailto:rajatkulkarni95@gmail.com",
    icon: <AiOutlineMail />,
  },
];

const ButtonContainer = () => {
  return (
    <Wrapper>
      {socials.map((social) => (
        <Link
          href={social.url}
          key={social.name}
          aria-label={`${social.site} Icon`}
          target="_blank"
          rel="noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
`;

const Link = styled.a`
  padding: 8px 12px;
  background: ${(p) => p.theme.colors.elements};
  color: ${(p) => p.theme.colors.text};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 5px;
`;

export default ButtonContainer;
