import { HandySvg } from 'handy-svg';
import bmw from '../assets/images/bmw.svg';
import Button from './UI/Button';
import ButtonAction from './UI/ButtonAction';
import { ICar } from '../interfaces/interfaces';
import styles from './CarTrack.module.css';

function CarTrack({ car }: { car: ICar }) {
  return (
    <div key={car.id}>
      <div className={styles.carSelectButtons}>
        <Button>Select</Button>
        <Button>Remove</Button>
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
