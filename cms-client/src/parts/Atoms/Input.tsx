import React from 'react';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, type = 'text', placeholder = '' }) => {
  return <input className="input" type={type} value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;