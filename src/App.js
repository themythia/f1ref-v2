import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import ThemeWrapper from './components/shared/ThemeWrapper';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarPage from './components/CalendarPage/CalendarPage';
import DriversPage from './components/DriversPage/DriversPage';
import TeamsPage from './components/TeamsPage/TeamsPage';
import RacePage from './components/RacePage/RacePage';

function App() {
  //todo
  // - dark mode shadows
  // - next race session times
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
          <Route path='teams' element={<TeamsPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeWrapper>
  );
}

export default App;
