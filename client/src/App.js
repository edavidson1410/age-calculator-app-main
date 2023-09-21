import DateInput from "./components/DateInput";
import Age from "./components/Age";
import "./App.css"
import { useState } from 'react';

function App() {

  const [state, setState] = useState({
    year: 0,
    month: 0,
    day: 0
  });

  const update = (event) => {
    const target = event.currentTarget;
    setState({
      ...state,
      [target.name]: parseInt(target.value)
    })
  }

  const handleClick = () => {

  }

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <DateInput update={update}/>
        </div>
        <div className="submit">
          <hr></hr>
          <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </button>
        </div>
        <div className="bottom">
          <Age year={state.year} month={state.month} day={state.day} /> 
        </div>
      </div>
    </div>
  );
}

export default App;
