import styled, { css } from 'styled-components'

const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => {
    const { colors: { aboutPageBackground, text1 } } = theme
    return css`
      background-color: ${aboutPageBackground};
      color: ${text1};
    `
  }}
`

function About() {
  return (
    <AboutContainer>
      <h1>About Page</h1>
    </AboutContainer>
  )
}

export default About