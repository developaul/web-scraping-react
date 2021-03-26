import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './theme/index';

import { ProfileScreen } from './pages/ProfileScreen';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProfileScreen />
    </ThemeProvider>
  );
}

export default App;