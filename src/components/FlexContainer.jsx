/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const FlexContainer = styled(Box)(({ type = 'row' | 'column' }) => ({
  display: 'flex',
  flexDirection: type == 'row' ? 'row' : 'column',
}));
