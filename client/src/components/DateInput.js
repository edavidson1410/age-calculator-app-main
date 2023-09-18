import "./DateInput.css";

const DateInput = ({update}) => {
    return(
        <>
            <div className="inputDate">
                <label for="day">DAY</label>
                <input type="text" id="day" placeholder="DD" name="day" onChange={update()}></input>
            </div>
            <div className="inputDate">
                <label for="month">MONTH</label>
                <input type="text" id="month" placeholder="MM" name="month" onSubmit={console.log(1)}></input>
            </div>
            <div className="inputDate">
                <label for="year">YEAR</label>
                <input type="text" id="year" placeholder="YYYY" name="year" onSubmit={console.log(1)}></input>
            </div>
        </>
    )
}

export default DateInput ;