import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import styled from 'styled-components';

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Link = styled.a`
  color: rgb(112, 76, 182);
`; 

function App() {
  return (
    <div className="App">
      <Header>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </Link>
          <span>, </span>
          <Link href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </Link>
          <span>, </span>
          <Link href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
            Redux Toolkit
          </Link>
          ,<span> and </span>
          <Link href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
            React Redux
          </Link>
        </span>
      </Header>
    </div>
  );
}

export default App;
