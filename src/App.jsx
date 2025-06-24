import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StoredCode from './pages/StoredCode';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/snippets/:id" element={<StoredCode />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
