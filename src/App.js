import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const ThemeWrapper = React.lazy(() =>
  import('./components/shared/ThemeWrapper')
);
const HomePage = React.lazy(() => import('./components/HomePage/HomePage'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const CalendarPage = React.lazy(() =>
  import('./components/CalendarPage/CalendarPage')
);
const DriversPage = React.lazy(() =>
  import('./components/DriversPage/DriversPage')
);
const TeamsPage = React.lazy(() => import('./components/TeamsPage/TeamsPage'));
const RacePage = React.lazy(() => import('./components/RacePage/RacePage'));
const DriverPage = React.lazy(() =>
  import('./components/DriverPage/DriverPage')
);
const TeamPage = React.lazy(() => import('./components/TeamPage/TeamPage'));
const FourOhFour = React.lazy(() => import('./components/shared/FourOhFour'));

function App() {
  //todo
  // - clean up duplicate components

  const store = useSelector((store) => store);
  console.log('store', store);
  return (
    <ThemeWrapper>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='calendar' element={<CalendarPage />} />
          <Route path='calendar/:round' element={<RacePage />} />
          <Route path='drivers' element={<DriversPage />} />
          <Route path='drivers/:driverId' element={<DriverPage />} />
          <Route path='teams' element={<TeamsPage />} />
          <Route path='teams/:teamId' element={<TeamPage />} />
          <Route path='*' element={<FourOhFour />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeWrapper>
  );
}

export default App;
