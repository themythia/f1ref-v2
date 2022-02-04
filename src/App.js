import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import { toggleTheme } from './slices/settingsSlice';

function App() {
  //todo
  // - dark mode shadows
  const store = useSelector((store) => store);
  console.log('store', store);
  return <Navbar />;
}

export default App;
