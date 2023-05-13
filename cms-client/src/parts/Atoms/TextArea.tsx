import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
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
    <Box className={outerClassName}>
      <textarea
        value={value}
        rows={rows}
        cols={cols}
        onChange={onChange}
        placeholder={placeholder}
        className={`textarea`}
      />
    </Box>
  );
};

export default Textarea;
