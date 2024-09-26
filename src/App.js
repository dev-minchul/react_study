import React from 'react';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import AnimalsContainer from './docs/day04/expert/AnimalsContainer';


// import HomeInput from './pages/home/HomeInput';
// import Home from './pages/home/Home';



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <AnimalsContainer />
    </ThemeProvider>
    </>
  );
}

export default App;
