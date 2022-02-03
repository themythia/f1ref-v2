import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import { toggleTheme } from './slices/settingsSlice';

function App() {
  // placeholder code until navbar implemented
  // const theme = useSelector((store) => store.settings);
  // const store = useSelector((store) => store);
  // console.log('store:', store);
  // const dispatch = useDispatch();

  // const toggleTheme = (theme) => {
  //   dispatch(toggleTheme());
  //   localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  // };

  // return <button onClick={() => toggleTheme(theme)}>Toggle theme!</button>;
  const store = useSelector((store) => store);
  console.log('store', store);
  return <Navbar />;
}

export default App;
