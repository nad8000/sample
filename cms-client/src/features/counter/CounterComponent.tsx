import React from 'react';
import Counter from './Counter';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const TextLink = styled.a`
  color: rgb(112, 76, 182);
`;

const CounterComponent: React.FC = () => {
  return (
    <div className="App">
      <Header>
        <span>リンク</span> <Link to="/about">About</Link>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <TextLink href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </TextLink>
          <span>, </span>
          <TextLink href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </TextLink>
          <span>, </span>
          <TextLink href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
            Redux Toolkit
          </TextLink>
          ,<span> and </span>
          <TextLink href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
            React Redux
          </TextLink>
        </span>
      </Header>
    </div>
  );
};

export default CounterComponent;
