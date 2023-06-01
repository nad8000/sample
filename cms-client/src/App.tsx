import * as React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// Component
import ListPage from './parts/Pages/ListPage';
import EditorPage from './parts/Pages/EditorPage';
import HomePage from './parts/Pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/edit" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
