import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from './themes/materialTheme';
import AppRoutes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
