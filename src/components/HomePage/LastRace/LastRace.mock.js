export const validResponseMock = {
  loading: false,
  status: true,
  response: {
    circuitName: 'Bahrain International Circuit',
    circuitId: 'bahrain',
    locality: 'Sakhir',
    country: 'Bahrain',
    countryCode: 'BH',
    date: '2023-03-05',
    time: '15:00:00Z',
    raceName: 'Bahrain Grand Prix',
    round: '1',
    schedule: {
      fp1: null,
      fp2: null,
      fp3: null,
      quali: null,
      sprint: null,
      race: '2023-03-05T15:00:00Z',
    },
    results: [
      {
        name: 'Max Verstappen',
        position: '1',
        team: 'red_bull',
      },
      {
        name: 'Sergio Pérez',
        position: '2',
        team: 'red_bull',
      },
      {
        name: 'Fernando Alonso',
        position: '3',
        team: 'aston_martin',
      },
    ],
  },
  error: null,
};

export const loadingResponseMock = {
  loading: true,
  status: false,
  response: null,
  error: null,
};

export const errorResponseMock = {
  loading: true,
  status: false,
  response: null,
  error: true,
};
