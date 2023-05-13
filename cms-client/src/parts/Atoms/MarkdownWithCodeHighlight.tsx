import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components'
// ハイライトカラー設定
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

// ハイライト対象言語の設定
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import csharp from 'react-syntax-highlighter/dist/esm/languages/hljs/csharp';
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('sql', sql);
SyntaxHighlighter.registerLanguage('csharp', csharp);
/** ハイライト対象言語 */
export const highlightTargetLang = 'javascript/css/python/sql/csharp';

interface MarkdownWithCodeHighlightProps {
  children: string;
  outerClassName?: string;
}

const MarkdownWithCodeHighlight: React.FC<MarkdownWithCodeHighlightProps> = ({ children, outerClassName='' }) => {
  const Box = styled.div`
    .md-view {
      border: 3px #ccc solid;
      margin: 10px auto;
      padding: 5px;
      background-color: #eee;
      min-height: 500px;
    }
    .title {
      border: 1px 0px solid #000;
      margin: 3px;
    }
    .center {
      text-align: center;
    }
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
    <Box className={outerClassName}>
      <div className='md-view'>
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
      </div>
    </Box>
  );
};

export default MarkdownWithCodeHighlight;
