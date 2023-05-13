import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
  text-align: center;
  .textarea {
    width: 96%;
    min-height: 97%;
  }
`;

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  outerClassName?: string;
}

const TextAreaContainer: React.FC<TextareaProps> = ({ value, onChange, placeholder = 'マークダウンで入力して下さい...', outerClassName = '' }) => {
  return (
    <Box className={outerClassName}>
      <textarea
        className={'textarea'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default TextAreaContainer;
