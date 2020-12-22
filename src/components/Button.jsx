import styled from "styled-components";

export const Button = styled.button`
  padding: ${(p) => p.pad};
  height: ${(p) => p.h};
  font-family: ${(p) => p.theme.fonts.text};
  font-size: 16px;
  background: ${(p) => p.theme.colors.elements};
  color: ${(p) => p.theme.colors.text};
  border: none;
  border-radius: 3px;
  margin: ${(p) => p.m};
  cursor: pointer;

  @media (max-width: 768px) {
    width: ${(p) => p.w};
  }
`;

Button.defaultProps = {
  pad: "8px 12px",
};

export const DeleteButton = styled(Button)`
  background: #df2935;
`;
