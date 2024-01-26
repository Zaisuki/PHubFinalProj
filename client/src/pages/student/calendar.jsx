import { useState } from 'react';
import '../../assets/scss/calendar.scss';
import { DAYS, MONTHS } from "./conts";
import { getDaysInMonth, getSortedDays, range } from "./util"

const Calendar = ()=>{
  
  const startingdate = new Date()
  const [currentMonth, setCurrentMonth] = useState(1)
  const [currentYear, setCurrenyear] = useState(startingdate.getFullYear())
  const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);
  return (
  <div className="wrapper">
    <div className="calendarHead">
    <ion-icon name="arrow-back-circle-outline"></ion-icon>
    <p>{MONTHS[currentMonth]} {currentYear}</p>
    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
    </div>
    <div className="sevenColGrid">
      {getSortedDays(currentMonth, currentYear).map((day) => (
      <div className="headDay">{day}</div>
      ))}
      </div>
      <div className="calenderBody" fourCol={DAYSINAMONTH === 28}>
          {range(DAYSINAMONTH(currentMonth, currentYear)).map((day) => ( 
      <div className="styledDay">
            {day}
        </div>
        ))} 
    </div>
  </div>
);
};

export default Calendar;