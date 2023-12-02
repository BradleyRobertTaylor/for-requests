import { Route, Routes } from 'react-router-dom';

import BinsPage from './components/BinsPage';
import Header from './components/Header';
import Hero from './components/Hero';
import { useBins } from './hooks/useBins';

function App() {
  const [bins, setBins] = useBins();
  return (
    <div className="bg-neutral-300 dark:bg-[#171212] p-4 h-screen">
      <Header bins={bins} setBins={setBins} />
      <Routes>
        <Route path="/bins" element={<BinsPage bins={bins} />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
