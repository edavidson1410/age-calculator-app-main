import "./DateInput.css";

const DateInput = (props) => {
    const inputs = ["day", "month", "year"];

    return(
        <>
            <form id="ageForm">
                <div className={props.validation.day ? "inputDate errorText" : "inputDate"}>
                    <label htmlFor="day" className={props.validation.day ? "errorText" : ""}>DAY</label>
                    <input className={props.validation.day ? "errorBorder" : ""} type="text" id="day" placeholder="DD" name="day" onChange={props.updateDay}></input>
                    {(props.validation.day != "")
                    ? <p>{props.validation.day}</p> : <p></p>}
                </div>
                <div className={props.validation.month ? "inputDate errorText" : "inputDate"}>
                    <label htmlFor="month" className={props.validation.month ? "errorText" : ""}>MONTH</label>
                    <input className={props.validation.month ? "errorBorder" : ""} type="text" id="month" placeholder="MM" name="day" onChange={props.updateMonth}></input>
                    {(props.validation.month != "")
                    ? <p>{props.validation.month}</p> : <p></p>}
                </div>
                <div className={props.validation.year ? "inputDate errorText" : "inputDate"}>
                    <label htmlFor="year" className={props.validation.year ? "errorText" : ""}>YEAR</label>
                    <input className={props.validation.year ? "errorBorder" : ""} type="text" id="year" placeholder="YYYY" name="day" onChange={props.updateYear}></input>
                    {(props.validation.year != "")
                    ? <p>{props.validation.year}</p> : <p></p>}
                </div>
            </form>
        </>
    )
}

export default DateInput ;


{/* {inputs.map(field => {
    return(
    <div className="inputDate">
        <label htmlFor={field}>{field.toUpperCase()}</label>
        <input type="text" id={field} placeholder="DD" name={field} onChange={props.updateDay}></input>
        {(props.validation.day != "")
        && <p>{props.validation.day}</p>}
    </div>
    )
})} */}