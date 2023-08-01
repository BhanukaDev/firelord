import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    firelogo: {
      fontSize: 30,
      fontFamily: ['Hammersmith One', 'sans-serif'].join(','),
    },
    identifierTitle: {
      fontFamily: ['Kanit', 'sans-serif'].join(','),
      fontSize: 18,
      color: '#767571',
    },
    identifierText: {
      fontSize: 16,
      fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    },
  },
  palette: {
    primary: {
      main: '#ffd740',
      contrastText: 'fffde7',
    },
    secondary: {
      main: '#ffab40',
    },
    success: {
      main: '#27C208',
      contrastText: '#FFFFFF',
    },

    appbar: {
      main: '#ffffff',
    },
  },
});
