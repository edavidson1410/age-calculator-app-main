import "./Age.css"

const Age = (props) => {
    
  let today = new Date();
  let thisYear = today.getFullYear();
  let thisMonth = today.getMonth();
  let thisDay = today.getDate();

    return(
        <>
            <div className="age">
                <div className="ageNum">
                    {props.year != 0 ? thisYear - props.year : "--"}
                </div>
                years
            </div>
            <div className="age">
                <div className="ageNum">
                    {props.month != 0 ? thisMonth - props.month : "--"}   
                </div>
                months
            </div>
            <div className="age">
                <div className="ageNum">
                    {props.day != 0 ? thisDay - props.day : "--"}
                </div>
                days
            </div>
        </>
    )
}

export default Age;