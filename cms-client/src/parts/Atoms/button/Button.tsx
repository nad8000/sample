import React from 'react';
import styled from '@emotion/styled'

interface ButtonProps {
  onClick: Function;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false, className }) => {

  const ButtonWrapper = styled.button`
    height: 30px;
    background-color: #000;
    color: #fff;
    /* border-radius: 3px; */
    margin: 0;
    padding: 0;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
      color: #000;
    }
`;

  return (
    <ButtonWrapper type='button' className={className} onClick={()=>{onClick();}} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
