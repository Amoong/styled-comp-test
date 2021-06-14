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

const Button = styled.button`
  width: 100px;
  height: 50px;
  ${({ theme }) => {
    const { colors } = theme

    return css`
      background-color: ${colors.buttonBackground1};
      color: ${colors.text1};
    `
  }}
`

function MainPage() {
  return (<MainPageContainer>
    <h1>Main Page</h1>
    <Button>
      버튼 1
    </Button>
  </MainPageContainer>
  )
}

export default MainPage