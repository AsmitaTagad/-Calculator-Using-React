import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [result, setResult] = useState('');

  const handleClick = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearDisplay = () => {
    setResult('');
  };
  const calculate = () => {
    setResult(eval(result));
  };
  return (
    <div className="calc">
      <input id="ans" placeholder="0" type="text" value={result} />

      <input
        type="button"
        value={'9'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'8'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'7'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'6'}
        className="button"
        onClick={handleClick}
      />

      <input
        type="button"
        value={'5'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'4'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'3'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'2'}
        className="button"
        onClick={handleClick}
      />

      <input
        type="button"
        value={'1'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'0'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'.'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'+'}
        className="button"
        onClick={handleClick}
      />

      <input
        type="button"
        value={'-'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'*'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'/'}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={'%'}
        className="button"
        onClick={handleClick}
      />

      <input
        type="button"
        value={'Clear'}
        className="button btn1"
        onClick={clearDisplay}
      />
      <input
        type="button"
        value={'='}
        className="button btn1"
        onClick={calculate}
      />
    </div>
  );
}
