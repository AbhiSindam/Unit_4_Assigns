
import './App.css';
import { Timer } from './components/Timer';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0)

  

  // console.log("value", value)

  return (
    <div className="App">
      <input type="number" name="" id="" onChange={(e) => setValue(e.target.value)} />
      
      <Timer data={value}/>
    </div>
  );
}

export default App;
