import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${({ theme }) => {
    const { colors: { link1, text1, background1 } } = theme
    return css`
      * {
        color: ${text1};
      }
      body {
        background-color: ${background1};
      }
      a {
        color: ${link1}
      }
    `
  }}

  button {
    outline: none;
    border: none;
  }
`

export default GlobalStyles
