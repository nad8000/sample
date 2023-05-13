import React, { useState, ChangeEvent } from 'react';
import MarkdownWithCodeHighlight from '../Atoms/MarkdownWithCodeHighlight';
import TextAreaContainer from '../Atoms/TextAreaContainer';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  .txt {
    margin-top: 75px;
    width: 49%;
  }
  .md {
    width: 49%;
    min-width: auto;
  }
`;

function MarkdownWithCodeHighlightEdit() {
  const [text, setText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Box>
      <TextAreaContainer outerClassName='txt' value={text} onChange={handleChange} />
      <MarkdownWithCodeHighlight outerClassName='md'>{text}</MarkdownWithCodeHighlight>
    </Box>
  );
}

export default MarkdownWithCodeHighlightEdit;