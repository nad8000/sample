import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components'


const Box = styled.div`
  border: 3px #ccc solid;
  margin: 10px auto;
  padding: 5px;
  width: 80%;
  min-height: 500px;
`;

const Title = styled.h2`
  text-align: center;
  border: 1px 0px solid #000;
`;

interface MarkdownProps {
  children: string;
  disabled?: boolean;
}

// シンタックスハイライトなし
const MarkdownView: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <>
      <Title>Markdown Preview</Title>
      <Box>
        <ReactMarkdown >
          {children}
        </ReactMarkdown>
      </Box>
    </>
  );
};

export default MarkdownView;
