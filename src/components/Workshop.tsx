import { useState } from 'react';
import axios from 'axios';
import { ICar } from '../interfaces/interfaces';
import Button from './UI/Button';
import styles from './Workshop.module.css';

function Workshop({
  addCar,
  text,
  color,
  updateText,
  updateColor,
  carForUpdate,
  updateCar,
  startAllRace,
}: {
  addCar(car: ICar): void;
  text: string;
  color: string;
  updateText(e: React.ChangeEvent<HTMLInputElement>): void;
  updateColor(e: React.ChangeEvent<HTMLInputElement>): void;
  carForUpdate: null | ICar;
  updateCar(car: ICar, text: string, color: string): void;
  startAllRace(): void;
}) {
  const [createText, setCreateText] = useState('');
  const [createColor, setCreateColor] = useState('#000000');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const createCarHandler = async (e: React.SyntheticEvent) => {
    handleSubmit(e);
    try {
      const res = await axios.post('http://127.0.0.1:3000/garage', {
        name: createText,
        color: createColor,
      });
      addCar(res.data);
      setCreateText('');
      setCreateColor('#000000');
    } catch (error) {
      console.log(error);
    }
  };

  const updateCarHandler = async (e: React.SyntheticEvent) => {
    handleSubmit(e);
    console.log(carForUpdate);
    try {
      const res = await axios.put(
        `http://127.0.0.1:3000/garage/${carForUpdate ? carForUpdate.id : ''}`,
        {
          name: text,
          color: color,
        }
      );
      if (carForUpdate) updateCar(carForUpdate, text, color);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.workshop}>
      <form className={styles.workshopForm} onSubmit={createCarHandler}>
        <input
          className={styles.workshopInput}
          value={createText}
          onChange={(e) => setCreateText(e.target.value)}
        ></input>
        <label className={styles.workshopColorLabel}>
          <input
            className={styles.workshopInput}
            type="color"
            value={createColor}
            onChange={(e) => setCreateColor(e.target.value)}
          ></input>
        </label>
        <Button>Create</Button>
      </form>
      <form className={styles.workshopForm} onSubmit={handleSubmit}>
        <input
          className={styles.workshopInput}
          value={text}
          onChange={updateText}
        ></input>
        <label className={styles.workshopColorLabel}>
          <input type="color" value={color} onChange={updateColor}></input>
        </label>
        <Button onClick={updateCarHandler}>Update</Button>
      </form>
      <div className={styles.buttonsActionsWrapper}>
        <Button onClick={startAllRace}>Race</Button>
        <Button>Reset</Button>
        <Button>Generate cars</Button>
      </div>
    </div>
  );
}

export default Workshop;
