import React from 'react';
import styled from '@emotion/styled'

const DivWrapper = styled.div`
  text-align: center;
  .textarea {
    width: 96%;
    min-height: 500px;
    margin: 10px auto;
    padding: 7px;
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
    <DivWrapper className={outerClassName}>
      <textarea
        className={'textarea'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </DivWrapper>
  );
};

export default TextAreaContainer;
