import React, { useState, ChangeEvent } from 'react';
import MarkdownWithCodeHighlight from '../Atoms/MarkdownWithCodeHighlight';
import Textarea from '../Atoms/TextArea';

function MarkdownWithCodeHighlightEdit() {
  const [text, setText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Textarea value={text} onChange={handleChange} />
      <MarkdownWithCodeHighlight>{text}</MarkdownWithCodeHighlight>
    </div>
  );
}

export default MarkdownWithCodeHighlightEdit;