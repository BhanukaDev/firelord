/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Collapse, List, Typography } from '@mui/material';
import { FlexContainer } from './FlexContainer';
import { AddButton } from './AddButton';
import { FireListItem } from './FireListItem';
import { AiOutlineFunction } from 'react-icons/ai';

export const IdentifierContainers = ({ title, children }) => {
  return (
    <FlexContainer className='identifierContainer' type='column'>
      <FlexContainer
        type={'row'}
        sx={{
          justifyContent: 'space-between',
          bgcolor: '#E0DCCF',
          py: 0.6,
          px: 0.8,
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          border: '1px solid #CAC9C6',
        }}
      >
        <Typography variant='identifierTitle'>{title}</Typography>
        <AddButton />
      </FlexContainer>
      <Collapse in>
        <List
          disablePadding
          sx={{
            px: 0.3,
            pt: 0.1,
          }}
        >
          {children}
        </List>
      </Collapse>
    </FlexContainer>
  );
};
