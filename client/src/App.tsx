import { Route, Routes } from 'react-router-dom';

import BinsPage from './components/BinsPage';
import Hero from './components/Hero';

function App() {
  return (
    <div className="flex flex-col bg-zinc-200 dark:bg-[#171212] p-4 h-screen overflow-y-hidden">
      <Routes>
        <Route path="/bins/:binPath?" element={<BinsPage />} />
        <Route
          path="/bins/:binPath/requests/:requestId"
          element={<BinsPage />}
        />
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
