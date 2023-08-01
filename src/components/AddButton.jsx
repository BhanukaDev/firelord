import { Button } from '@mui/material';
import { MdAdd } from 'react-icons/md';

export const AddButton = () => {
  return (
    <Button
      variant='contained'
      color='success'
      sx={{
        padding: 0.4,
        margin: 0,
        minWidth: 0,
        fontSize: '20px',
      }}
      disableElevation
    >
      <MdAdd />
    </Button>
  );
};
