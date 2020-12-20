import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 12px;
  font-family: ${(p) => p.theme.fonts.text};
  font-size: 16px;
  background: ${(p) => p.theme.colors.elements};
  color: ${(p) => p.theme.colors.text};
  border: none;
  border-radius: 3px;
  margin: ${(p) => p.m};
  cursor: pointer;
`;
