import { Typography } from '@mui/material';
import { FlexContainer } from './FlexContainer';

export const Console = () => {
  return (
    <FlexContainer
      type='column'
      sx={{
        gridColumn: 'span 6',
      }}
    >
      <Typography
        sx={{
          bgcolor: 'red',
        }}
      >
        Console
      </Typography>
    </FlexContainer>
  );
};
