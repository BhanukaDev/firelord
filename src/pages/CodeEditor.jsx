// Code Editor Page

import { Box } from '@mui/material';
import { EditorSidebar } from '../components/EditorSidebar';
import { FireAppbar } from '../components/FireAppbar';
import { NodeEditor } from '../components/NodeEditor';
import { Console } from '../components/Console';

export const CodeEditor = () => {
  return (
    <>
      <FireAppbar />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6,1fr)',
          gridTemplateRows: 'repeat(4,1fr)',
          height: 'calc(100vh - 65px)',
        }}
      >
        <EditorSidebar />
        <NodeEditor />
        <Console />
      </Box>
    </>
  );
};
