import axios from 'axios';
import { HandySvg } from 'handy-svg';
import bmw from '../assets/images/bmw.svg';
import Button from './UI/Button';
import ButtonAction from './UI/ButtonAction';
import { ICar } from '../interfaces/interfaces';
import styles from './CarTrack.module.css';

function CarTrack({
  car,
  deleteCar,
  selectCarForUpdatting,
}: {
  car: ICar;
  deleteCar(car: ICar): void;
  selectCarForUpdatting(car: ICar): void;
}) {
  const deleteCarHandler = async () => {
    try {
      const res = axios.delete(`http://127.0.0.1:3000/garage/${car.id}`);
      deleteCar(car);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles.carSelectButtons}>
        <Button onClick={() => selectCarForUpdatting(car)}>Select</Button>
        <Button onClick={deleteCarHandler}>Remove</Button>
        <p>{car.name}</p>
      </div>
      <div className={styles.track}>
        <div className={styles.carActionsButton}>
          <ButtonAction action="move">A</ButtonAction>
          <ButtonAction action="stop">B</ButtonAction>
        </div>
        <HandySvg className={styles.car} src={bmw} width="4vw" height="4vw" />
      </div>
    </div>
  );
}

export default CarTrack;
