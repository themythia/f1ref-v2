const circuitData = {
  bahrain: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png',
    stats: {
      firstGp: 2004,
      laps: 57,
      length: 5.412,
      distance: 308.238,
      record: '1:31.447',
      recordHolder: 'Pedro de la Rosa',
      recordYear: 2005,
    },
  },
  jeddah: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Saudi%20Arabia%20carbon.png',
    stats: {
      firstGp: 2021,
      laps: 50,
      length: 6.174,
      distance: 308.45,
      record: '1:30.734',
      recordHolder: 'Lewis Hamilton',
      recordYear: 2021,
    },
  },
  albert_park: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Australia%20carbon.png',
    stats: {
      firstGp: 1996,
      laps: 58,
      length: 5.278,
      distance: 306.124,
      record: '1:20.235',
      recordHolder: 'Sergio Perez',
      recordYear: 2023,
    },
  },
  imola: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Emilia%20Romagna%20carbon.png',
    stats: {
      firstGp: 1980,
      laps: 63,
      length: 4.909,
      distance: 309.049,
      record: '1:15.484',
      recordHolder: 'Lewis Hamilton',
      recordYear: 2020,
    },
  },
  miami: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Miami%20carbon.png',
    stats: {
      firstGp: 2022,
      laps: 57,
      length: 5.412,
      distance: 308.326,
      record: '1:28.708',
      recordHolder: 'Max Verstappen',
      recordYear: 2023,
    },
  },
  catalunya: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png',
    stats: {
      firstGp: 1991,
      laps: 66,
      length: 4.657,
      distance: 307.236,
      record: '1:16.330',
      recordHolder: 'Max Verstappen',
      recordYear: '2023',
    },
  },
  monaco: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monte%20Carlo%20carbon.png',
    stats: {
      firstGp: 1950,
      laps: 78,
      length: 3.337,
      distance: 260.286,
      record: '1:12.909',
      recordHolder: 'Lewis Hamilton',
      recordYear: 2021,
    },
  },
  baku: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png',
    stats: {
      firstGp: 2016,
      laps: 51,
      length: 6.003,
      distance: 306.049,
      record: '1:43.009',
      recordHolder: 'Charles Leclerc',
      recordYear: 2019,
    },
  },
  villeneuve: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada%20carbon.png',
    stats: {
      firstGp: 1978,
      laps: 70,
      length: 4.361,
      distance: 305.27,
      record: '1:13.078',
      recordHolder: 'Valtteri Bottas',
      recordYear: 2019,
    },
  },
  silverstone: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png',
    stats: {
      firstGp: 1950,
      laps: 52,
      length: 5.891,
      distance: 306.198,
      record: '1:27.097',
      recordHolder: 'Max Verstappen',
      recordYear: 2020,
    },
  },
  red_bull_ring: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon.png',
    stats: {
      firstGp: 1970,
      laps: 71,
      length: 4.318,
      distance: 306.452,
      record: '1:05.619',
      recordHolder: 'Carlos Sainz',
      recordYear: 2020,
    },
  },
  ricard: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/France%20carbon.png',
    stats: {
      firstGp: 1971,
      laps: 53,
      length: 5.842,
      distance: 309.69,
      record: '1:32.740',
      recordHolder: 'Sebastian Vettel',
      recordYear: 2019,
    },
  },
  hungaroring: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungar%20carbon.png',
    stats: {
      firstGp: 1986,
      laps: 70,
      length: 4.381,
      distance: 306.63,
      record: '1:16.627',
      recordHolder: 'Lewis Hamilton',
      recordYear: 2020,
    },
  },
  spa: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon.png',
    stats: {
      firstGp: 1950,
      laps: 44,
      length: 7.004,
      distance: 308.052,
      record: '1:46.286',
      recordHolder: 'Valtteri Bottas',
      recordYear: '2018',
    },
  },
  zandvoort: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Netherlands%20carbon.png',
    stats: {
      firstGp: 1952,
      laps: 72,
      length: 4.259,
      distance: 306.587,
      record: '1:11.097',
      recordHolder: 'Lewis Hamilton ',
      recordYear: '2021',
    },
  },
  monza: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png',
    stats: {
      firstGp: 1950,
      laps: 53,
      length: 5.793,
      distance: 306.72,
      record: '1:21.046',
      recordHolder: 'Rubens Barrichello',
      recordYear: '2004',
    },
  },
  marina_bay: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Singapore%20carbon.png',
    stats: {
      firstGp: 2008,
      laps: 62,
      length: 4.94,
      distance: 306.143,
      record: '1:35.867',
      recordHolder: 'Lewis Hamilton',
      recordYear: '2023',
    },
  },
  suzuka: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Japan%20carbon.png',
    stats: {
      firstGp: 1987,
      laps: 53,
      length: 5.807,
      distance: 307.471,
      record: '1:30.983',
      recordHolder: 'Lewis Hamilton',
      recordYear: 2019,
    },
  },
  americas: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/USA%20carbon.png',
    stats: {
      firstGp: 2012,
      laps: 56,
      length: 5.513,
      distance: 308.405,
      record: '1:36.169',
      recordHolder: 'Charles Leclerc',
      recordYear: 2019,
    },
  },
  rodriguez: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Mexico%20carbon.png',
    stats: {
      firstGp: 1963,
      laps: 71,
      length: 4.304,
      distance: 305.354,
      record: '1:17.774',
      recordHolder: 'Valtteri Bottas',
      recordYear: 2021,
    },
  },
  interlagos: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Brazil%20carbon.png',
    stats: {
      firstGp: 1973,
      laps: 71,
      length: 4.309,
      distance: 305.879,
      record: '1:10.540',
      recordHolder: 'Valtteri Bottas',
      recordYear: 2018,
    },
  },
  yas_marina: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhab%20carbon.png',
    stats: {
      firstGp: 2009,
      laps: 58,
      length: 5.281,
      distance: 306.183,
      record: '1:26.103',
      recordHolder: 'Max Verstappen',
      recordYear: 2021,
    },
  },
  vegas: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Las%20Vegas%20carbon.png',
    stats: {
      firstGp: 2023,
      laps: 50,
      length: 6.201,
      distance: 309.958,
      record: '1:35.490',
      recordHolder: 'Oscar Piastri',
      recordYear: 2023,
    },
  },
  losail: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Qatar%20carbon.png',
    stats: {
      firstGp: 2021,
      laps: 57,
      length: 5.419,
      distance: 308.611,
      record: '1:24.319',
      recordHolder: 'Max Verstappen',
      recordYear: 2023,
    },
  },
  shanghai: {
    circuitMap:
      'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/China%20carbon.png',
    stats: {
      firstGp: 2004,
      laps: 56,
      length: 5.451,
      distance: 305.066,
      record: '1:32.238',
      recordHolder: 'Michael Schumacher',
      recordYear: 2004,
    },
  },
};
export default circuitData;
