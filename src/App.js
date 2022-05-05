import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ThemeWrapper from './components/shared/ThemeWrapper';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import CalendarPage from './components/CalendarPage/CalendarPage';
import DriversPage from './components/DriversPage/DriversPage';
import TeamsPage from './components/TeamsPage/TeamsPage';
import RacePage from './components/RacePage/RacePage';
import DriverPage from './components/DriverPage/DriverPage';
import TeamPage from './components/TeamPage/TeamPage';
import FourOhFour from './components/shared/FourOhFour';

function App() {
  // todo
  // change <Fragment> to <></>
  // take a loot at useFetch
  // check utils funcs
  // useFetch dependency argument
  // add an X icon to 404 page

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
