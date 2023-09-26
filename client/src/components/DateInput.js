import "./DateInput.css";

const DateInput = (props) => {


    return(
        <>
            <form id="ageForm">
                <div className="inputDate">
                    <label htmlFor="day">DAY</label>
                    <input type="text" id="day" placeholder="DD" name="day" onChange={props.updateDay}></input>
                    {(props.validation.day != "")
                    && <p>{props.validation.day}</p>}
                </div>
                <div className="inputDate">
                    <label htmlFor="month">MONTH</label>
                    <input type="text" id="month" placeholder="MM" name="month" onChange={props.updateMonth}></input>
                    {(props.validation.month != "")
                    && <p>{props.validation.month}</p>}
                </div>
                <div className="inputDate">
                    <label htmlFor="year">YEAR</label>
                    <input type="text" id="year" placeholder="YYYY" name="year" onChange={props.updateYear}></input>
                    {(props.validation.year != "")
                    && <p>{props.validation.year}</p>}
                </div>
            </form>
        </>
    )
}

export default DateInput ;