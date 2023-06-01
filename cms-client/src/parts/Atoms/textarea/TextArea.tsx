import React from 'react';
import styled from '@emotion/styled'

const DivWrapper = styled.div`
  margin: auto;
  text-align: center;
`;

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
  placeholder?: string;
  outerClassName?: string;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange, rows = 100, cols = 100, placeholder = 'マークダウンで入力して下さい...', outerClassName = '' }) => {
  return (
    <DivWrapper className={outerClassName}>
      <textarea
        value={value}
        rows={rows}
        cols={cols}
        onChange={onChange}
        placeholder={placeholder}
        className={`textarea`}
      />
    </DivWrapper>
  );
};

export default Textarea;
