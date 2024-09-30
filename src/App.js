import React from 'react';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';








// import HomeInput from './pages/home/HomeInput';
// import Home from './pages/home/Home';



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />
    </ThemeProvider>
    </>
  );
}

export default App;
