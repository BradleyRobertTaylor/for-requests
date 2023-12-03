import { Route, Routes } from 'react-router-dom';

import BinsPage from './components/BinsPage';
import Header from './components/Header';
import Hero from './components/Hero';
import { useBins } from './hooks/useBins';
import { useQuery } from '@tanstack/react-query';
import { getBins } from './services/binService';

function App() {
  const [bins, setBins] = useBins();
  const query = useQuery({ queryKey: ['bins'], queryFn: getBins });

  // const {data} = query
  return (
    <div className="flex flex-col bg-zinc-200 dark:bg-[#171212] p-4 h-screen overflow-y-hidden">
      <Header bins={bins} setBins={setBins} />
      <Routes>
        <Route path="/bins" element={<BinsPage bins={bins} />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
