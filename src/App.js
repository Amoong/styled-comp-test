import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";

import InnerPage from "./InnerPage";

import darkTheme from "./themes/darkTheme";
import lightTheme from "./themes/lightTheme";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: ${props => props.theme.textColor1};
  } */
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${props => props.theme.textColor1};
`;

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <Title>styled-component</Title>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>change theme</button>
        <InnerPage />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
