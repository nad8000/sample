import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CounterComponent from './features/counter/CounterComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterComponent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
