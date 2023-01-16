import { useState } from 'react';
import Workshop from './Workshop';
import Garage from './Garage';
import { ICar } from '../interfaces/interfaces';

function Main({
  cars,
  addCar,
  deleteCar,
  updateCar,
}: {
  cars: ICar[];
  addCar(car: ICar): void;
  deleteCar(car: ICar): void;
  updateCar(car: ICar, text: string, color: string): void;
}) {
  const [updateText, setUpdateText] = useState('');
  const [updateColor, setUpdateColor] = useState('#000000');
  const [carForUpdate, setCarForUpdate] = useState<null | ICar>(null);

  const selectCarForUpdattingHandler = (car: ICar) => {
    setUpdateText(car.name);
    setUpdateColor(car.color);
    setCarForUpdate(car);
  };

  const updateTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateText(e.target.value);
  };

  const updateColorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateColor(e.target.value);
  };

  return (
    <>
      <Workshop
        addCar={addCar}
        text={updateText}
        color={updateColor}
        updateText={(e) => updateTextHandler(e)}
        updateColor={(e) => updateColorHandler(e)}
        carForUpdate={carForUpdate}
        updateCar={updateCar}
      />
      <Garage
        cars={cars}
        deleteCar={deleteCar}
        selectCarForUpdatting={selectCarForUpdattingHandler}
      />
    </>
  );
}

export default Main;
