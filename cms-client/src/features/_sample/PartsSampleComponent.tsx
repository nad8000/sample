import React, { useState } from 'react';
import Button from '../../parts/Atoms/Button'
import Input from '../../parts/Atoms/Input'
import TextArea from '../../parts/Atoms/TextArea'
import MarkdownView from '../../parts/Atoms/MarkdownView'

const txt = `
# あああ
## あああ
- ああ
- ああ
`;

const Counter: React.FC = () =>{

  return (
    <>
      <Button onClick={()=>{}}>保存</Button>
      <Input onChange={()=>{}} value='かっこいいタイトル'/>
      <TextArea onChange={()=>{}} value='内容'></TextArea>
      <MarkdownView>{txt}</MarkdownView>
    </>
  );
} 

export default Counter;