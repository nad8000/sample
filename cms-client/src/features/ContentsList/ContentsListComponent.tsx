import * as React from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Button from '../../parts/Atoms/Button';


export default function PrimarySearchAppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={()=>{navigate('/editor');}}>記事の新規作成</Button>
    </div>
  );
}
