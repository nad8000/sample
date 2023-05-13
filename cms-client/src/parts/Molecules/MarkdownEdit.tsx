import React, { useState, ChangeEvent } from 'react';
import MarkdownView from '../Atoms/MarkdownView';
import Textarea from '../Atoms/TextArea';

/** @deprecated シンタックスハイライトなし */
function MarkdownEdit() {
  const [text, setText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <Textarea value={text} onChange={handleChange} />
      <MarkdownView>{text}</MarkdownView>
    </>
  );
}

export default MarkdownEdit;