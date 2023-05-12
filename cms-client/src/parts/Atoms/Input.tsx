import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  .input {
    display: inline-block;
    height: auto;
    width: 500px;
    height: 25px;
    margin: 5px;
  }
`;

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, type = 'text', placeholder = '' }) => {
  return <Box><input className="input" type={type} value={value} onChange={onChange} placeholder={placeholder} /></Box>;
};

export default Input;