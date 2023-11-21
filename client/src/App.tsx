import { Route, Routes } from 'react-router-dom';

import BinsPage from './components/BinsPage';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-[#171212] p-4 h-screen">
      <Header />
      <Routes>
        <Route path="/buckets" element={<BinsPage />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
