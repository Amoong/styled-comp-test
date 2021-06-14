import { useState } from 'react' 
import styled, { ThemeProvider, css } from 'styled-components'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'

import darkTheme from './themes/darkTheme'
import lightTheme from './themes/lightTheme'

import Nav from './Nav'
import AboutPage from './pages/AboutPage'
import MainPage from './pages/MainPage'

const ThemeButton = styled.button`
  height: 50px;
  font-size: 20px;
  margin-bottom: 20px;
  
  ${({ theme, size }) => {
    const { colors: { buttonBackground1, buttonText1 } } = theme
    let width;
    switch (size) {
      case 'small':
        width = '50px'
        break
      case 'medium':
        width = '100px'
        break
      case 'big':
      default:
        width = '150px'
        break
    }

    return css`
      width: ${width};
      color: ${buttonText1};
      background-color: ${buttonBackground1};
    `
  }}
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Title>styled-component</Title>
      <ThemeButton size="small" onClick={() => setIsDarkTheme(!isDarkTheme)}>{isDarkTheme ? '🌙' : '☀️'}</ThemeButton>
      <Router>
        <Nav />
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
