import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
  margin: auto;
  text-align: center;
  &textarea{
    text-align: center;
    width: 100%;
  }
`;

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange, rows = 50, cols = 100, placeholder = 'マークダウンで入力して下さい...' }) => {
  return (
    <Box>
      <textarea
        className="textarea"
        value={value}
        rows={rows}
        cols={cols}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default Textarea;
