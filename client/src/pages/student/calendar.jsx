import { useState } from 'react';
import '../../assets/scss/calendar.scss';
import { DAYS, MONTHS } from "./conts";
import { range } from "./util"

const Calendar = ()=>{
  
  const startingdate = new Date()
  const [currentMonth, setCurrentMonth] = useState(startingdate.getMonth())
  const [currentYear, setCurrenyear] = useState(startingdate.getFullYear())
return (
  <div className="wrapper">
    <div className="calendarHead">
    <ion-icon name="arrow-back-circle-outline"></ion-icon>
    <p>{MONTHS[currentMonth]} {currentYear}</p>
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