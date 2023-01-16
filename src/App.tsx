import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICar } from './interfaces/interfaces';
import MainLayout from './components/MainLayout';
import Main from './components/Main';
import Winners from './components/Winners';
import './App.css';

function App() {
  const [cars, setCars] = useState<ICar[]>([]);
  useEffect(() => {
    axios
      .get('http://127.0.0.1:3000/garage')
      .then((data) => setCars(data.data));
  }, []);

  const addCarHandler = (car: ICar) => {
    setCars([...cars, car]);
  };

  const deleteCarHandler = (car: ICar) => {
    setCars(cars.filter((el) => el !== car));
  };

  const updateCarHandler = (car: ICar, text: string, color: string) => {
    setCars(
      cars.map((el: ICar) => {
        return el.id === car.id
          ? {
              name: text,
              color: color,
              id: el.id,
            }
          : { ...el };
      })
    );
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <Main
                  cars={cars}
                  addCar={addCarHandler}
                  deleteCar={deleteCarHandler}
                  updateCar={updateCarHandler}
                />
              }
            />
            <Route path="/winners" element={<Winners />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
