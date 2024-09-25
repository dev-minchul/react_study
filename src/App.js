import React from 'react';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import HomeIcon from './pages/home/HomeIcon';
// import HomeInput from './pages/home/HomeInput';
// import Home from './pages/home/Home';



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <HomeIcon />
     
    </ThemeProvider>
    </>
  );
}

export default App;
