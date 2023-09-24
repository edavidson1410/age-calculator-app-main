import "./Age.css"

const Age = (props) => {

  let thisYear = props.today.getFullYear();
  let thisMonth = props.today.getMonth() + 1;
  let thisDate = props.today.getDate();

    return(
        <>
            <div className="age">
                <div className="ageNum">
                    {props.year != 0 && props.validated == true ? thisYear - props.year : "--"}
                </div>
                years
            </div>
            <div className="age">
                <div className="ageNum">
                    {props.month != 0 && props.validated == true ? thisMonth - props.month : "--"}   
                </div>
                months
            </div>
            <div className="age">
                <div className="ageNum">
                    {props.day != 0 && props.validated == true ? Math.abs(thisDate - props.day) : "--"}
                </div>
                days
            </div>
        </>
    )
}

export default Age;