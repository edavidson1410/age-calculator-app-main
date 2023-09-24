import DateInput from "./components/DateInput";
import Age from "./components/Age";
import "./App.css"
import { useState } from 'react';

function App() {

  const[validated, setValidated] = useState(false);

  const [state, setState] = useState({
    year: 0,
    month: 0,
    day: 0
  });

  const update = (event) => {
    console.log(1)
    const target = event.currentTarget;
    setState({
      ...state,
      [target.name]: parseInt(target.value)
    })
    setValidated(false);
  }

  const handleSubmit = () => {
    if(state.year == 0 || state.month == 0 || state.day ==0) {
      console.log(1)
    } else if(state.day < 1 || state.day > 31) {
      console.log(2);
    } else if(state.month < 1 || state.month > 12) {
      console.log(3)
    } else if(state.year) {
      
    }


    setValidated(true);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <DateInput update={update}/>
        </div>
        <div className="submit">
          <hr></hr>
          <button onClick={handleSubmit}>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </button>
        </div>
        <div className="bottom">
          <Age year={state.year} month={state.month} day={state.day} validated={validated}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
