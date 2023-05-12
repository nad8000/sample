import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components'

const Box = styled.div`
  
`;

interface MarkdownProps {
  children: string;
  disabled?: boolean;
}

const MarkdownView: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <Box>
      <ReactMarkdown>
        {children}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownView;
