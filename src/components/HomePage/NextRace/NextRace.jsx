import Container from '../Container';
import { useEffect } from 'react';

const NextRace = () => {
  useEffect(() => {
    fetch('https://ergast.com/api/f1/current/next.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data);
        const nextRaceData = data.MRData.RaceTable.Races[0];
        console.log('nextRaceData', nextRaceData);
        const nextRace = {
          circuit: {
            name: nextRaceData.Circuit.circuitName,
            id: nextRaceData.Circuit.circuitId,
            location: {
              locality: nextRaceData.Circuit.Location.locality,
              country: nextRaceData.Circuit.Location.country,
            },
          },
          date: nextRaceData.date,
          time: nextRaceData.time,
          name: nextRaceData.raceName,
        };
        console.log(nextRace);
      });
  }, []);
  return (
    <Container>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4'>
        Next Race:
      </p>
    </Container>
  );
};
export default NextRace;
