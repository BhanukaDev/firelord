import { AppBar, Avatar, Divider, Toolbar } from '@mui/material';
import { FireLogo } from './FireLogo';
import { theme } from '../theme';

export const FireAppbar = () => {
  return (
    <AppBar
      color='appbar'
      elevation={0}
      position='static'
      sx={{ zIndex: theme.zIndex.drawer + 1 }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <FireLogo />
        <Avatar
          sx={{
            width: 30,
            height: 30,
          }}
        />
      </Toolbar>
      <Divider />
    </AppBar>
  );
};
