import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>React + Redux Counter</h1>
      <div className="counter">
        <button onClick={() => dispatch(decrement())}>−</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default App;
