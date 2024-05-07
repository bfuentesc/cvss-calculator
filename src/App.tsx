import NavBar from './components/NavBar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './themes/materialTheme';
import AppRoutes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar handleDarkModeChange={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
