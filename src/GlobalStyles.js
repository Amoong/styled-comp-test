import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${({ theme }) => {
    const { bgColor } = theme;
    return css`
      body {
        background: ${bgColor};
        transition: background 0.5s;
      }
    `;
  }}

  button {
    outline: none;
    border: none;
  }
`;

export default GlobalStyles;
