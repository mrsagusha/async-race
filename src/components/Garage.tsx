import { ICar } from '../interfaces/interfaces';
import CarTrack from './CarTrack';

function Garage({
  cars,
  deleteCar,
  selectCarForUpdatting,
}: {
  cars: ICar[];
  deleteCar(car: ICar): void;
  selectCarForUpdatting(car: ICar): void;
}) {
  return (
    <>
      <h1>Garage — {`${cars.length} cars`}</h1>
      <h3>Page</h3>
      <div>
        {cars.map((car: ICar) => {
          return (
            <CarTrack
              key={car.id}
              car={car}
              deleteCar={deleteCar}
              selectCarForUpdatting={selectCarForUpdatting}
            />
          );
        })}
      </div>
      <ul></ul>
    </>
  );
}

export default Garage;
