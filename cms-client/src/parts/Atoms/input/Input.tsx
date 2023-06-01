import React from 'react';
import styled from '@emotion/styled'

const InputWrapper = styled.input`
  display: inline-block;
  margin: 0;
  padding: 0;
  display: inline-block;
  height: auto;
  width: 500px;
  height: 25px;
  margin: 5px;
`;

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, type = 'text', placeholder = '', className }) => {
  return <InputWrapper className={className} type={type} value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;