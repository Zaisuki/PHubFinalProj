import '../../assets/scss/calendar.scss';
import { DAYS } from "./conts";
import { range } from "./util"

const Calendar = ()=>{
  const range = (end) => {
    const {result} = Array.from({lenght: end}).reduce(
        ({result, current}) => ({
            result: [...result, current],
            current: current + 1
        }),
        {result: [], current: 1}
    );
    
    return result;
};
return (
  <div className="wrapper">
    <div className="calendarHead">
    <ion-icon name="arrow-back-circle-outline"></ion-icon>
    <p>Jan 2024</p>
    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
    </div>
    <div className="sevenColGrid">
      {DAYS.map((day) => (
      <div className="headDay">{day}</div>
      ))}
      </div>
      <div className="calenderBody">
          {range(31).map((day) => ( 
      <div className="styledDay">
            {day}
        </div>
        ))} 
    </div>
  </div>
);
};

export default Calendar;