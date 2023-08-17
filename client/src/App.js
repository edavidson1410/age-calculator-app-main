import DateInput from "./components/DateInput";
import Age from "./components/Age";
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <DateInput />
        </div>
        <div className="bottom">
          <Age /> 
        </div>
      </div>
    </div>
  );
}

export default App;
