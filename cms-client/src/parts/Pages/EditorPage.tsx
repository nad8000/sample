import React from 'react';
import styled from '@emotion/styled'
import Header from '../Organisms/header/Header'
import Editor from '../Organisms/MarkdownWithCodeHighlightEditor'
import Footer from '../Organisms/footer/Footer'


const Body = styled.body`
  display: block;
  margin: 0;
  padding: 0;
`;

/**
 * ヘッダーコンポーネント
 * @returns {React.Component}
 */
const EditorPage: React.FC = ({}) => {
  return (
    <Body>
      <Header></Header>
      <Editor></Editor>
      <Footer></Footer>
    </Body>
  );
};

export default EditorPage;