import { ReactElement } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';
import { Home } from './pages/Home/home';
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://rickandmortyapi.com/api',
// });

function App(): ReactElement {
  // async function teste() {
  //   const response = await api.get(`/character?page=${3}`);
  //   console.log(response.data);
  // }

  const theme = createTheme({
    palette: {
      // mode: 'dark',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#303030',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
