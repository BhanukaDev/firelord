import { Box, Typography } from '@mui/material';
import { BsFire } from 'react-icons/bs';

export const FireLogo = () => {
  return (
    <Box
      sx={{
        fontSize: '26px',
        display: 'inline-flex',
        alignItems: 'baseline',
        color: 'red',
      }}
    >
      <Typography variant='firelogo' mr={1} color={'black'}>
        firelord
      </Typography>
      <BsFire />
    </Box>
  );
};
