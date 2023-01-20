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
  const [allRace, setAllRace] = useState(false);
  const [allReset, setAllReset] = useState(false);
  const [updateText, setUpdateText] = useState('');
  const [updateColor, setUpdateColor] = useState('#000000');
  const [carForUpdate, setCarForUpdate] = useState<null | ICar>(null);

  const startAllRaceHandler = () => {
    if (allRace) setAllRace(false);
    else setAllRace(true);
    resetAllCarsHandler();
  };

  const resetAllCarsHandler = () => {
    if (allRace) setAllReset(false);
    else setAllReset(true);
  };

  const selectCarForUpdattingHandler = (car: ICar) => {
    setUpdateText(car.name);
    setUpdateColor(car.color);
    setCarForUpdate(car);
  };

  const updateTextHandler = (e?: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateText(e ? e.target.value : '');
  };

  const updateColorHandler = (e?: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateColor(e ? e.target.value : '');
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
        startAllRace={startAllRaceHandler}
        resetAllCars={resetAllCarsHandler}
      />
      <Garage
        cars={cars}
        deleteCar={deleteCar}
        selectCarForUpdatting={selectCarForUpdattingHandler}
        allRace={allRace}
        startAllRace={startAllRaceHandler}
        allReset={allReset}
      />
    </>
  );
}

export default Main;
