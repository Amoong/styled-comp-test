import styled, { css } from 'styled-components'

const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => {
    const { colors: { background1, text1 } } = theme
    return css`
      background-color: ${background1};
      color: ${text1};
    `
  }}
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
`

const Contents = styled.p`
  color: ${(props) => props.color};
  ${(props) => { console.log(props)}}
`

function About() {
  return (
    <AboutContainer>
      <Title>About Page</Title>
      <Contents color="teal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit dolor corrupti, magnam autem ipsum consequatur aliquid officia mollitia saepe.
      </Contents>
    </AboutContainer>
  )
}

export default About