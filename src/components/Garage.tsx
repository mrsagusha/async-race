import { ICar } from '../interfaces/interfaces';
import CarTrack from './CarTrack';

function Garage({ cars }: { cars: ICar[] }) {
  return (
    <>
      <h1>Garage</h1>
      <h3>Page</h3>
      <div>
        {cars.map((car: ICar) => {
          return <CarTrack car={car} />;
        })}
      </div>
    </>
  );
}

export default Garage;
