
import './App.css';
import { ProblemOne } from './compnents/ProblemOne';
import { ProblemTwo } from './compnents/ProblemTwo';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Problem 1</h1>
     <ProblemOne/>
      </div>
      <br />
      <hr />
      <div>
        <h1>Problem 2</h1>
        <ProblemTwo/>
      </div>
    </div>
  );
}

export default App;
