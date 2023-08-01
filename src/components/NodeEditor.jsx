/* eslint-disable react/prop-types */
import { Box, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import DraggableDiv from './DraggableDiv';
import { Draggable } from 'drag-react';

export const NodeEditor = () => {
  const containerRef = useRef(null);

  const [isMouseDown, setMouseDown] = useState(false);
  const [mouseDownPos, setMouseDownPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (containerRef.current === e.target) {
      setMouseDown(true);
      const x = e.clientX;
      const y = e.clientY;
      setMouseDownPos({ x, y });
      console.log('Node pressed');
    }
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    containerRef.current.scrollLeft =
      containerRef.current.scrollLeft - (e.clientX - mouseDownPos.x) * 0.1;
    containerRef.current.scrollTop =
      containerRef.current.scrollTop - (e.clientY - mouseDownPos.y) * 0.1;
  };

  return (
    <Box
      component={'div'}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      ref={containerRef}
      sx={{
        overflow: 'auto',
        gridColumn: 'span 5',
        gridRow: 'span 3',

        position: 'relative',

        scrollBehavior: 'contain',
        scrollbarWidth: 'none',

        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Box
        sx={{
          minWidth: '2000px',
          minHeight: '2000px',
          backgroundImage: 'radial-gradient(#000 1px,transparent 1px)',
          backgroundSize: '50px 50px',
          bgcolor: '#F7F7F5',
          backgroundRepeat: 'repeat',
        }}
      >
        {/* <DraggableDiv />
        <DraggableDiv /> */}

        <Draggable style={{ position: 'absolute' }}>
          <Box>
            <TextField></TextField>
          </Box>
        </Draggable>
      </Box>
    </Box>
  );
};
