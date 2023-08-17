import "./DateInput.css";

const DateInput = () => {

    return(
        <>
            <div className="inputDate">
                <label for="day">DAY</label>
                <input type="text" id="day" placeholder="DD" name="birthdate"></input>
            </div>
            <div className="inputDate">
                <label for="month">MONTH</label>
                <input type="text" id="month" placeholder="MM" name="birthdate"></input>
            </div>
            <div className="inputDate">
                <label for="year">YEAR</label>
                <input type="text" id="year" placeholder="YYYY" name="birthdate"></input>
            </div>
        </>
    )
}

export default DateInput ;