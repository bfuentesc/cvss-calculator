import NavBar from './components/NavBar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './themes/materialTheme';
import AppRoutes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
  // Inicializar el estado de darkMode leyendo de localStorage o usando false como default
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Intenta obtener el estado guardado de darkMode de localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === null ? false : savedMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

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

