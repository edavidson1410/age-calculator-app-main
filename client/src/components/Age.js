import "./Age.css"

const Age = (props) => {

  let thisYear = props.today.getFullYear();
  let thisMonth = props.today.getMonth() + 1;
  let thisDate = props.today.getDate();

    return(
        <>
            <div className="age">
                <div className="ageNum">
                    {props.year != undefined && props.valid == true ? thisYear - props.year : "--"}
                </div>
                years
            </div>
            <div className="age">
                <div className="ageNum">
                    {props.month != undefined && props.valid == true ? Math.abs(thisMonth - props.month) : "--"}   
                </div>
                months
            </div>
            <div className="age">
                <div className="ageNum">
                    {props.day != undefined && props.valid == true ? Math.abs(thisDate - props.day) : "--"}
                </div>
                days
            </div>
        </>
    )
}

export default Age;