import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
// 部品
import MarkdownEdit from '../Molecules/MarkdownEdit';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';

function MarkdownEditor() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const onClickSave = () => {
    return;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <div><Button onClick={()=>{onClickSave()}}>保存</Button><Button onClick={()=>{navigate('/list')}}>戻る</Button>タイトル：<Input value={text} onChange={handleChange}/></div>
      <div>
        <MarkdownEdit />
      </div>
    </>
  );
}

export default MarkdownEditor;