import DateInput from "./components/DateInput";
import Age from "./components/Age";
import "./App.css"
import { useState } from 'react';

function App() {

  let today = new Date();

  const[validated, setValidated] = useState(false);

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
    setValidated(false);
  }

  function isNotValidDate(year, month, day) {
    let d = new Date(`${year}-${month}-${day}`);
    //Date overflows into next month with extra days. If it overflows, getMonth+1(Date months start at 0) will not equal month that is input.
    if ( d.getMonth()+1 != state.month ) {
        return true;
    }
    return false;
}

  const handleSubmit = () => {
    if(state.year == 0 || state.month == 0 || state.day ==0) {
      console.log(1)
    } else if(state.day < 1 || state.day > 32) {
      console.log(2);
    } else if(state.month < 1 || state.month > 12) {
      console.log(3);
    } else if(state.year > today.getFullYear()) {
      console.log(4);
    } else if(isNotValidDate(state.year, state.month, state.day)) {
      console.log("notValid");
    } else {
      setValidated(true);
    }
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
          <Age year={state.year} month={state.month} day={state.day} validated={validated} today={today}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
