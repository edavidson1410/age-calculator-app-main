import "./DateInput.css";

const DateInput = ({update}) => {


    return(
        <>
            <form id="ageForm">
                <div className="inputDate">
                    <label htmlFor="day">DAY</label>
                    <input type="text" id="day" placeholder="DD" name="day" onChange={update}></input>
                </div>
                <div className="inputDate">
                    <label htmlFor="month">MONTH</label>
                    <input type="text" id="month" placeholder="MM" name="month" onChange={update}></input>
                </div>
                <div className="inputDate">
                    <label htmlFor="year">YEAR</label>
                    <input type="text" id="year" placeholder="YYYY" name="year" onChange={update}></input>
                </div>
            </form>
        </>
    )
}

export default DateInput ;