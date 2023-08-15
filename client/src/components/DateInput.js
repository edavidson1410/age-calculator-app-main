


const DateInput = () => {

    return(
        <>
            <label for="day">DAY</label>
            <input type="text" id="day" placeholder="DD" name="birthdate"></input>
            <label for="month">MONTH</label>
            <input type="text" id="month" placeholder="MM" name="birthdate"></input>
            <label for="year">YEAR</label>
            <input type="text" id="year" placeholder="YYYY" name="birthdate"></input>
        </>
    )
}

export default DateInput ;