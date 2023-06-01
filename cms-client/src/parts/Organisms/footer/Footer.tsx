import React from 'react';
import styled from '@emotion/styled'

const HeaderWrapper = styled.footer`
  display: block;
  width: 100%;
  text-align: center;
  background-color: #000000;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  position: absolute;/*←絶対位置*/
  bottom: 0; /*下に固定*/
`;

/**
 * ヘッダーコンポーネント
 * @returns {React.Component}
 */
const Header: React.FC = ({}) => {
  return (
    <HeaderWrapper>Custom Blog</HeaderWrapper>
  );
};

export default Header;