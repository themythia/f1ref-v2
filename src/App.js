import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import { toggle } from './slices/themeSlice';

function App() {
  // placeholder code until navbar implemented
  // const theme = useSelector((store) => store.theme);
  // const dispatch = useDispatch();

  // const toggleTheme = (theme) => {
  //   dispatch(toggle());
  //   localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  // };

  // return <button onClick={() => toggleTheme(theme)}>Toggle theme!</button>;

  return <Navbar />;
}

export default App;
