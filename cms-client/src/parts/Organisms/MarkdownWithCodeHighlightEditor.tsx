import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// component
import MarkdownWithCodeHighlightEdit from '../Molecules/MarkdownWithCodeHighlightEdit';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';

function MarkdownWithCodeHighlightEditor() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const onClickSave = () => {
    return;
  };

  const onChangeTextarea = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const Box = styled.div`
  .center {
    text-align: center;
  }
`;
  return (
    <Box>
      <div className='center'>タイトル：<Input value={text} onChange={onChangeTextarea} placeholder='記事タイトルを入力してください...'/><Button onClick={()=>{onClickSave()}}>保存</Button></div>
      <MarkdownWithCodeHighlightEdit />
      <div className='center'>
        <Button onClick={()=>{navigate('/list')}}>戻る</Button>
      </div>
    </Box>
  );
}

export default MarkdownWithCodeHighlightEditor;