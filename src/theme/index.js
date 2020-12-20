const theme = {
  fonts: {
    text: "Inter",
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  screens: {
    sm: "440px",
    md: "768px",
    lg: "900px",
    xl: "1152px",
  },
};

const light = {
  colors: {
    text: "#21232C",
    background: "#EFF1F5",
    elements: "#FFFFFF",
    primary: "#D6E3F8",
    secondary: "#73A0E7",
    accent: "#6C7693",
  },
};

const dark = {
  colors: {
    text: "#F2F5F7",
    background: "#0D131A",
    elements: "#1E262F",
    primary: "#2D3A3A",
    secondary: "#787E91",
    accent: "#7E8C9A",
  },
};

export const lightTheme = { ...theme, ...light };
export const darkTheme = { ...theme, ...dark };
