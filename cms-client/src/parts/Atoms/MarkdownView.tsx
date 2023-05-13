import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components'

interface MarkdownProps {
  children: string;
  disabled?: boolean;
}

/** @deprecated シンタックスハイライトなし */
const MarkdownView: React.FC<MarkdownProps> = ({ children }) => {
  const Box = styled.div`
    border: 3px #ccc solid;
    margin: 10px auto;
    padding: 5px;
    width: 80%;
    min-height: 500px;
    .title {
      text-align: center;
      border: 1px 0px solid #000;
    }
    .md {

    }
  `;
  
  return (
    <Box>
      <h2 className='title'>Markdown Preview</h2>
      <div className='md'>
        <ReactMarkdown >
          {children}
        </ReactMarkdown>
      </div>
    </Box>
  );
};

export default MarkdownView;
