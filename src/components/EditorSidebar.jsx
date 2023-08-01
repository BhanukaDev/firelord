import { FlexContainer } from './FlexContainer';

import { IdentifierContainers } from './IdentifierContainers';
import { FireListItem } from './FireListItem';
import { AiOutlineFunction } from 'react-icons/ai';

export const EditorSidebar = () => {
  return (
    <FlexContainer
      type='column'
      sx={{
        p: 0.6,
        gridColumn: 'span 1',
        gridRow: 'span 3',
        borderRight: '2px solid #D6D4CC',
      }}
    >
      <IdentifierContainers title={'Functions'}>
        <FireListItem
          text={'init'}
          icon={<AiOutlineFunction />}
          iconColor={'#0E7A81'}
        />
        <FireListItem
          text={'startQuiz'}
          icon={<AiOutlineFunction />}
          iconColor={'#0E7A81'}
        />
        <FireListItem
          text={'typewriterEffect'}
          icon={<AiOutlineFunction />}
          iconColor={'#0E7A81'}
        />
      </IdentifierContainers>
    </FlexContainer>
  );
};
