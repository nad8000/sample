import React, { useState, ChangeEvent } from 'react';
import MarkdownWithCodeHighlight, { highlightTargetLang } from '../../Atoms/markDown/MarkdownWithCodeHighlight';
import TextAreaContainer from '../../Atoms/textarea/TextAreaContainer';
import styled from '@emotion/styled';

const Div = styled.div`
  .txt,.md {
    width: 49%;
  }
  .flex {
    display: flex;
  }
  .center {
    text-align: center;
  }
`;

function MarkdownWithCodeHighlightEdit() {
  const [text, setText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Div>
      <div className='flex'>
        <div className='txt center'>
          <h2>Contents</h2>
          <span>ハイライト対象:{highlightTargetLang}</span>
        </div>
        <div className='md'>
          <h2 className='center'>Markdowm preview</h2>
        </div>
      </div>
      <div className='flex'>
        <TextAreaContainer outerClassName='txt' value={text} onChange={handleChange} />
        <MarkdownWithCodeHighlight outerClassName='md'>{text}</MarkdownWithCodeHighlight>
      </div>
    </Div>
  );
}

export default MarkdownWithCodeHighlightEdit;