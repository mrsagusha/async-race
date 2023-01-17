import axios from 'axios';
import { HandySvg } from 'handy-svg';
import bmw from '../assets/images/bmw.svg';
import Button from './UI/Button';
import ButtonAction from './UI/ButtonAction';
import { ICar, IMovementResponse } from '../interfaces/interfaces';
import styles from './CarTrack.module.css';
import { useState } from 'react';

function CarTrack({
  car,
  deleteCar,
  selectCarForUpdatting,
}: {
  car: ICar;
  deleteCar(car: ICar): void;
  selectCarForUpdatting(car: ICar): void;
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
    });
  };

  console.log(style);

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
          <ButtonAction action="stop">B</ButtonAction>
        </div>
        <HandySvg
          className={isDriving ? `${styles.car} ${styles.drive}` : styles.car}
          style={style}
          src={bmw}
          width="4vw"
          height="4vw"
        />
      </div>
    </div>
  );
}

export default CarTrack;
