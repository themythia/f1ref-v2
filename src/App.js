import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './slices/themeSlice';

function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log('store:', store);
  return <button onClick={() => dispatch(toggle())}>Toggle theme!</button>;
}

export default App;
