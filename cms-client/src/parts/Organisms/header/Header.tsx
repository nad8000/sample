import React from 'react';
import styled from '@emotion/styled'
import Button from '../../Atoms/button/Button'
import { NavigateFunction, useNavigate} from 'react-router-dom';

const HeaderWrapper = styled.header`
  display: block;
  width: 100%;
  background-color: #000;
  margin: 0;
  padding: 0;
  .button {
    width: 30%;
  }
  .home {
    width: 10%;
  }
  .login {
    width: 10%;
    margin-left: 20%;
  }
`;

/**
 * ヘッダーコンポーネント
 * @returns {React.Component}
 */
const Header: React.FC = ({}) => {
  const navigate: NavigateFunction = useNavigate();
  return (
  <HeaderWrapper>
    <Button className='home' onClick={()=>{navigate('/');}}>HOME</Button>
    <Button className='button' onClick={()=>{navigate('/list');}}>記事一覧</Button>
    <Button className='button' onClick={()=>{navigate('/edit');}}>新規作成</Button>
    <Button className='login' onClick={()=>{navigate('/login');}} disabled={true}>ログイン</Button>
  </HeaderWrapper>
  );
};

export default Header;