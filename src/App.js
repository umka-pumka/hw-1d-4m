import { useState } from "react";
import './style.css';

function App() {
  const [num, setNum] = useState(0);

  const handleIncrement = () => {
    if (num < 15) {
      setNum(num + 1);
    }
  };

  const handleDecrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const handleReset = () => {
    setNum(0);
  };

  const handleAddFive = () => {
    if (num < 11) {
      setNum(num + 5);
    } else {
      setNum(15);
    }
  };

  const handleSubtractFive = () => {
    if (num > 5) {
      setNum(num - 5);
    } else {
      setNum(0);
    }
  };

  return (
    <div>
      <h1>{num}</h1>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleAddFive}>+5</button>
      <button onClick={handleSubtractFive}>-5</button>
    </div>
  );
}

export default App;