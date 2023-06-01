import React, { useState, ChangeEvent } from 'react';
import styled from '@emotion/styled'
import Button from '../../Atoms/button/Button';
import Input from '../../Atoms/input/Input';

const TitleInput: React.FC = ({}) => {
  const [text, setText] = useState('');

  const onClickSave = () => {
    return;
  };

  const onChangeTextarea = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

const DivWrapper = styled.div`
    .save {
      padding: 0 10px;
    }
  `;
  return (
    <DivWrapper>
      <div className='center'>タイトル：
      <Input value={text} onChange={onChangeTextarea} placeholder='記事タイトルを入力してください...'/>
      <Button className='save' onClick={()=>{onClickSave()}}>保存</Button></div>
    </DivWrapper>
  );
};

export default TitleInput;