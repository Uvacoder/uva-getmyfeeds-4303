import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonLink = styled(NavLink)`
  padding: 8px 12px;
  font-family: ${(p) => p.theme.fonts.text};
  font-size: 14px;
  background: ${(p) => p.theme.colors.elements};
  color: ${(p) => p.theme.colors.text};
  border: none;
  border-radius: 3px;
  margin: ${(p) => p.m};
  cursor: pointer;
  text-decoration: none;

  :hover {
    background: ${(p) => p.theme.colors.primary};
    transition: 0.2s;
  }

  &.active {
    background: ${(p) => p.theme.colors.secondary};
  }
`;
