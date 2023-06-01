import * as React from 'react';
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import Button from '../../parts/Atoms/button/Button';


export default function PrimarySearchAppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={()=>{navigate('/edit');}}>記事の新規作成</Button>
    </div>
  );
}
