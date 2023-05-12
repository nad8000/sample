import React from 'react';
import styled from 'styled-components'

const Box = styled.button`
  height: 30px;
  background-color: #888;
  color: #fff;
  border-radius: 3px;
  margin: 3px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #000;
  }
`;

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', disabled = false }) => {
  return (
    <Box className="button" type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Box>
  );
};

export default Button;
