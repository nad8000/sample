import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components'
// ハイライトカラー設定
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// ハイライト対象言語の設定
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
SyntaxHighlighter.registerLanguage('js', javascript);
SyntaxHighlighter.registerLanguage('css', css);
const highlightLang = 'JavaScript/CSS'

interface MarkdownWithCodeHighlightProps {
  children: string;
}

const MarkdownWithCodeHighlight: React.FC<MarkdownWithCodeHighlightProps> = ({ children }) => {
  const Box = styled.div`
    border: 3px #ccc solid;
    margin: 10px auto;
    padding: 5px;
    width: 80%;
    min-height: 500px;
  `;
  const Title = styled.h2`
    text-align: center;
    border: 1px 0px solid #000;
  `;
  const SubTitle = styled.div`
    text-align: center;
    border: 1px 0px solid #000;
    text-align: center;
  `;
  
  // コードブロックのレンダリングをカスタマイズ
  const CodeBlock: React.FC<{ language: string; value: string }> = ({ language, value }) => {
    return (
      <SyntaxHighlighter language={language} style={a11yDark} showLineNumbers={true}>
        {value}
      </SyntaxHighlighter>
    );
  };

  return (
    <>
      <Title>Markdown Preview</Title>
      <SubTitle>
        <span>ハイライト可能言語:{highlightLang}</span>
      </SubTitle>
      <Box>
        <ReactMarkdown
          children={children}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <CodeBlock
                  language={match[1]}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </Box>
    </>
  );
};

export default MarkdownWithCodeHighlight;
