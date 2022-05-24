import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../global/styles';
import IndexPage from '../pages/IndexPage';

const theme = {};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IndexPage />
    </ThemeProvider>
  );
}

export default App;
