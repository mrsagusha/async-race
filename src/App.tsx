import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ICar } from './interfaces/interfaces';
import MainLayout from './components/MainLayout';
import Main from './components/Main';
import Winners from './components/Winners';
import './App.css';

function App() {
  const [cars, setCars] = useState<ICar[]>([]);
  useEffect(() => {
    fetch('http://127.0.0.1:3000/garage')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main cars={cars} />} />
            <Route path="/winners" element={<Winners />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
