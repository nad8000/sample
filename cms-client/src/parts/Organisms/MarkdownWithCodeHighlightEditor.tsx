import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// component
import MarkdownWithCodeHighlightEdit from '../Molecules/MarkdownWithCodeHighlightEdit';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';

const Box = styled.div`
  .center {
    text-align: center;
  }
`;

function MarkdownWithCodeHighlightEditor() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const onClickSave = () => {
    return;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Box>
      <div className='center'>タイトル：<Input value={text} onChange={handleChange}/><Button onClick={()=>{onClickSave()}}>保存</Button></div>
      <div>
        <MarkdownWithCodeHighlightEdit />
      </div>
      <div className='center'><Button onClick={()=>{navigate('/list')}}>戻る</Button></div>
    </Box>
  );
}

export default MarkdownWithCodeHighlightEditor;