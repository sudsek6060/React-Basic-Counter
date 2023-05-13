import { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="container">
        <h1>Counter</h1>
        <div className="counter">
          <button onClick={() => count <= -10 ? "" : setCount (count - 1)}>-</button>
          <h1>{count}</h1>
          <button onClick={() => count >= 10 ? "" : setCount (count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
