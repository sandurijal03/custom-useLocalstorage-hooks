import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const App: React.FC = () => {
  const [state, setState] = useLocalStorage('tests');
  return (
    <div>
      <h1>Value: {state}</h1>
      <button onClick={() => setState(Math.floor(Math.random() * 1000))}>
        change state
      </button>
    </div>
  );
};

export default App;
