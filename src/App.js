import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import ThemeWrapper from './components/ThemeWrapper';
import { toggleTheme } from './slices/settingsSlice';
import HomePage from './components/HomePage/HomePage';

function App() {
  //todo
  // - dark mode shadows
  const store = useSelector((store) => store);
  console.log('store', store);
  return (
    <ThemeWrapper>
      <Navbar />
      <HomePage />
    </ThemeWrapper>
  );
}

export default App;
