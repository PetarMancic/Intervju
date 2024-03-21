import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import InfoPage from './InfoPage/InfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/infoPage" element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
