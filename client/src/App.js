import DateInput from "./components/DateInput";
import Age from "./components/Age";
import "./App.css"
import { useState, useEffect } from 'react';

function App() {

  let today = new Date();

  const [validation, setValidation] = useState({ // state of validation
    year: '',
    month: '',
    day: '',
    valid: false,
  });
  const [year, setYear] = useState(undefined); // value of input
  const [month, setMonth] = useState(undefined); // value of input
  const [day, setDay] = useState(undefined); // value of input

  // setState as user inputs values
  const updateYear = (event) => {
    const target = event.currentTarget;
    setValidation({...validation, valid: false}); //sets valid false once new input is entered
    setYear(target.value);
  }
  const updateMonth = (event) => {
    const target = event.currentTarget;
    setValidation({...validation, valid: false}); //sets valid false once new input is entered
    setMonth(target.value);
  }
  const updateDay = (event) => {
    const target = event.currentTarget;
    setValidation({...validation, valid: false}); //sets valid false once new input is entered
    setDay(target.value);
  }

  const validateYear = () => {
    if (!year) {
        return 'This field is required';
    } else if (year > today.getFullYear()) {
        return 'must be a valid year';
    } else {
        return undefined;
    }
  }

  const validateDay = () => {
    if (!day) {
        console.log(1)
        return 'This field is required'
    } else if (validation.day < 1 && validation.day > 31) {
        return 'must be a valid day';
    } else if(isNotValidDate(year, month, day) && year && month){ //if full date is input and is a valid date
      return 'must be a valid date';
    } else {
        return undefined;
    }
  }

  const validateMonth = () => {
    if (!month) {
        return 'This field is required';
    } else if (validation.day < 1 && validation.month > 12) {
        return 'must be a valid month';
    } else {
        return undefined;
    }
  }


  const isNotValidDate = (year, month, day) => {
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);

    if ([4, 6, 9, 11].includes(month) && day > 30) {
      return true;
    }
    if (month === 2) {
      // Leap year calculation
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        if (day > 29) {
          return true;
        }
      } else if (day > 28) {
        return true;
      }
    } return false;
}


const onSubmit = () => {
  const validationStrings = {
      year: validateYear(),
      month: validateMonth(),
      day: validateDay(),
  };
  if (!validationStrings.year && !validationStrings.day && !validationStrings.month) { // they are all valid
      setValidation({...validationStrings, valid: true});
  } else { // one of them is not valid - show errors and turn valid into false
      setValidation({...validationStrings, valid: false});
  }
} 

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <DateInput updateYear={updateYear} updateMonth={updateMonth} updateDay={updateDay} validation={validation}/>
        </div>
        <div className="submit">
          <hr></hr>
          <button onClick={onSubmit}>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </button>
        </div>
        <div className="bottom">
          <Age year={year} month={month} day={day} valid={validation.valid} today={today}/> 
        </div>
      </div>
    </div>
  );
}

export default App;

//   //take out  
//   const[validation, setValidation] = useState({
//     year: "",
//     month: "",
//     day: "",
//     validation: false
//   });

//   const [state, setState] = useState({
//     year: undefined,
//     month: undefined,
//     day: undefined
//   });

//   // setState as user inputs values
//   const update = (event) => {
//     const target = event.currentTarget;
//     setState({
//       ...state,
//       [target.name]: parseInt(target.value)
//     })
//     setValidation(false);
//   }
  
//   //function to determine if Date input exists
//   function isNotValidDate(year, month, day) {
//     let d = new Date(`${year}-${month}-${day}`);
//     //Date overflows into next month with extra days. If it overflows, getMonth+1(Date months start at 0) will not equal month that is input.
//     if ( d.getMonth()+1 != state.month ) {
//         return true;
//     }
//     return false;
// }

// //set date in the handle functions, turn validation into one function
// const handleDay = () => {
//   if(state.day === undefined) {
//     return "This field is required";
//   } else if(state.day < 1 || state.day > 32) {
//       return "Must be a valid day";
//   } else return "";
// }
// const handleMonth = () => {
//   if(state.month === undefined) {
//     return "This field is required"
//   } else if(state.month < 1 || state.month > 12) {
//       return "Must be a valid month";
//   } else return "";
// }
// const handleYear = () => {
//   if(state.year === undefined) {
//     return "This field is required";
//   } else if(state.year > today.getFullYear()) {
//     return "Must be in the past";
//   } else return "";
// }
// const handleValidDate = () => {

// }

// const handleValidation = () => {
//   if(validation.year === "" || validation.month === "" || validation.day === ""){
//     if(isNotValidDate(state.year, state.month, state.day)) {
//       setValidation({...validation,
//         day: "must be a valid date"
//       })
//   } else {
//     setValidation({
//       year : "",
//       month: "",
//       day: "",
//       validation: true
//     })
//   }
// }
// }

//   //validates input before allowing age to calculate
// const handleSubmit = () => {
//     setValidation({
//       year: handleYear(),
//       month: handleMonth(),
//       day: handleDay()
//     })
//     handleValidation();
// }





// function App() {
//   let today = new Date();

//   const [validation, setValidation] = useState({ // state of validation
//     year: '',
//     month: '',
//     day: '',
//     valid: false,
//   });
//   const [year, setYear] = useState(undefined); // value of input
//   const [month, setMonth] = useState(undefined); // value of input
//   const [day, setDay] = useState(undefined); // value of input


//   const onSubmit = () => {
//     const validationStrings = {
//         year: validateYear(),
//         day: handleDay(),
//         month: handleMonth(),
//     }; 

//     if (validationStrings.year === undefined && validationStrings.day === undefined && validationStrings.month === undefined) { // they are all valid
//         setValidation({...validationStrings, valid: true});
//     } else { // one of them is not valid - show errors and turn valid into false
//         setValidation({...validationStrings, valid: false});
//     }
//   }

//   const validateYear = () => {
//     if (year === '') {
//         return 'must not be empty'
//     } else if (year > today.getFullYear()) {
//         return 'not a valid year'
//     } else {
//         return undefined;
//     }
//   }

//   const validateDay = () => {
//     if (validation.day === '') {
//         return 'must not be empty'
//     } else if (validation.day > 31 || isNotValidDate(year, month, day)) {
//         return 'must be a valid date'
//     } else {
//         return undefined
//     }
//   }

//   const validateMonth = () => {
//     if (validation.month === '') {
//         return 'must not be empty'
//     } else if (validation.month > 12) {
//         return 'not valid'
//     } else {
//         return undefined
//     }
//   }

//   const isNotValidDate = (year, month, day) => {
//     let d = new Date(${year}-${month}-${day});
//     // Date overflows into next month with extra days. If it overflows, getMonth+1(Date months start at 0) will not equal month that is input.
//     if ( d.getMonth()+1 != month ) {
//         return true;
//     }
//     return false;
// }

// }