// == Import
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import FormUser from 'src/containers/FormUser';
import LoggedUser from 'src/containers/LoggedUser';
import './styles.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// == Composant
const App = () => (
  <div className="app">
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Stack spacing={2}>

        <FormUser />
        <LoggedUser />
      </Stack>
    </ThemeProvider>
  </div>
);

// == Export
export default App;
