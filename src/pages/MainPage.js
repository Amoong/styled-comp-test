import styled, { css } from 'styled-components'

const MainPageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  ${({ theme }) => {
    const { colors } = theme
    return css`
      background-color: ${colors.background1};
    `
  }}
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
`

function MainPage() {
  return (<MainPageContainer>
    <Title>Main Page</Title>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, earum!
    </p>
  </MainPageContainer>
  )
}

export default MainPage