import { useState } from 'react';
import axios from 'axios';
import { FaFlagCheckered } from 'react-icons/fa';
import Button from './UI/Button';
import ButtonAction from './UI/ButtonAction';
import { ICar } from '../interfaces/interfaces';
import styles from './CarTrack.module.css';
import CarIco from './CarIco';

function CarTrack({
  car,
  deleteCar,
  selectCarForUpdatting,
  allRace,
  startAllRace,
  allReset,
}: {
  car: ICar;
  deleteCar(car: ICar): void;
  selectCarForUpdatting(car: ICar): void;
  allRace: boolean;
  startAllRace(): void;
  allReset: boolean;
}) {
  const [style, setStyle] = useState({});
  const [isDriving, setIsDriving] = useState(false);

  const deleteCarHandler = async () => {
    try {
      const res = await axios.delete(`http://127.0.0.1:3000/garage/${car.id}`);
      deleteCar(car);
    } catch (error) {
      console.log(error);
    }
  };

  const startDrivingHandler = async () => {
    const res = await axios.patch(`http://127.0.0.1:3000/engine`, null, {
      params: {
        id: car.id,
        status: 'started',
      },
    });
    setStyle({
      animationDuration: `${res.data.distance / res.data.velocity}ms`,
      fill: 'red',
    });
    console.log(res);
  };

  const returnCarHandler = () => {
    setIsDriving(false);
  };

  if (allRace) {
    (async function () {
      await startDrivingHandler();
      setIsDriving(true);
      startAllRace();
    })();
  }

  return (
    <div>
      <div className={styles.carSelectButtons}>
        <Button onClick={() => selectCarForUpdatting(car)}>Select</Button>
        <Button onClick={deleteCarHandler}>Remove</Button>
        <p>{car.name}</p>
      </div>
      <div className={styles.track}>
        <div className={styles.carActionsButton}>
          <ButtonAction
            action="move"
            onClick={async () => {
              await startDrivingHandler();
              setIsDriving(true);
            }}
          >
            A
          </ButtonAction>
          <ButtonAction action="return" onClick={returnCarHandler}>
            B
          </ButtonAction>
        </div>
        <CarIco
          color={car.color}
          className={
            isDriving && !allReset
              ? `${styles.car} ${styles.drive}`
              : styles.car
          }
          style={style}
        />
        <FaFlagCheckered className={styles.flag} />
      </div>
    </div>
  );
}

export default CarTrack;
