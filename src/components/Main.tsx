import Workshop from './Workshop';
import Garage from './Garage';
import { ICar } from '../interfaces/interfaces';

function Main({ cars }: { cars: ICar[] }) {
  return (
    <>
      <Workshop />
      <Garage cars={cars} />
    </>
  );
}

export default Main;
