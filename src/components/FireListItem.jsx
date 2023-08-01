/* eslint-disable react/prop-types */
import { Divider, ListItemButton, Tooltip, Typography } from '@mui/material';
import { FlexContainer } from './FlexContainer';

export const FireListItem = ({ text, desc = 'none', icon, iconColor }) => {
  const showContextMenu = (e) => {
    e.preventDefault();
    console.log(`${text} clicked!`);
  };
  return (
    <Tooltip title={`${text}: ${desc}`} arrow>
      <ListItemButton
        sx={{
          p: 0,
        }}
        onContextMenuCapture={showContextMenu}
      >
        <FlexContainer
          type='row'
          sx={{
            flexGrow: 1,
            gap: 1,
            fontSize: '20px',
            color: iconColor,
            justifyContent: 'left',
            alignItems: 'center',
            p: '5px 6px',
            my: '2px',
            bgcolor: '#E7E5DE',
          }}
        >
          {icon} <Divider orientation='vertical' flexItem />
          <Typography variant='identifierText' color={'#7C7769'}>
            {text}
          </Typography>
        </FlexContainer>
      </ListItemButton>
    </Tooltip>
  );
};
