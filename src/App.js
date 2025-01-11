import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [state,setState] = useState(false)
  return (
    <div>
      <h2 onClick={()=>setState(!state)}>Show / Hide</h2>
      { state && <Counter /> }
    </div>
  );
}

export default App;
