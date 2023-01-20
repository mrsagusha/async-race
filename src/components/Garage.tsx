import { ICar } from '../interfaces/interfaces';
import CarTrack from './CarTrack';

function Garage({
  cars,
  deleteCar,
  selectCarForUpdatting,
  allRace,
  startAllRace,
  allReset,
}: {
  cars: ICar[];
  deleteCar(car: ICar): void;
  selectCarForUpdatting(car: ICar): void;
  allRace: boolean;
  startAllRace(): void;
  allReset: boolean;
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
              allRace={allRace}
              startAllRace={startAllRace}
              allReset={allReset}
            />
          );
        })}
      </div>
      <ul></ul>
    </>
  );
}

export default Garage;
