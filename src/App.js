import { useState } from 'react' 
import styled, { ThemeProvider } from 'styled-components'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'

import darkTheme from './themes/darkTheme'
import lightTheme from './themes/lightTheme'

import Nav from './Nav'
import AboutPage from './pages/AboutPage'
import MainPage from './pages/MainPage'

const ThemeButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  background: black;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Title>styled-component</Title>
      <ThemeButton onClick={() => setIsDarkTheme(!isDarkTheme)}>{isDarkTheme ? '🌙' : '☀️'}</ThemeButton>
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
