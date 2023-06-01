import React from 'react';
import styled from '@emotion/styled';
// component
import TitleInput from '../Molecules/textInput/TitleInput';
import MarkdownWithCodeHighlightEdit from '../Molecules/markdownEditor/MarkdownWithCodeHighlightEdit';

function MarkdownWithCodeHighlightEditor() {

  const Div = styled.div`
  .center {
    text-align: center;
  }
`;
  return (
    <Div>
      <TitleInput></TitleInput>
      <MarkdownWithCodeHighlightEdit />
    </Div>
  );
}

export default MarkdownWithCodeHighlightEditor;