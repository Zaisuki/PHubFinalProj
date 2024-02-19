import { useState } from 'react';
import '../assets/scss/calendar.scss';
import { MONTHS } from '../utils/calendar/calendarConst';
import { areDatestheSame, getDateObj, getDaysInMonth, getSortedDays, range } from '../utils/calendar/calendarUtil';

const Calendar = () => {
    const startingdate = new Date();
    const [currentMonth, setCurrentMonth] = useState(startingdate.getMonth());
    const [currentYear, setCurrentYear] = useState(startingdate.getFullYear());
    const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);

    const nextMonth = (date) => {
        if (date < 11) {
            setCurrentMonth((prev) => prev + 1);
        } else {
            setCurrentMonth(0);
            setCurrentYear((prev) => prev + 1);
        }
    };
    const prevMonth = (date) => {
        if (date > 0) {
            setCurrentMonth((prev) => prev - 1);
        } else {
            setCurrentMonth(11);
            setCurrentYear((prev) => prev - 1);
        }
    };

    return (
        <div className='wrapper'>
            <div className='calendarHead'>
                <ion-icon onClick={() => prevMonth(currentMonth)} name='arrow-back-circle-outline'></ion-icon>
                <p>
                    {MONTHS[currentMonth]} {currentYear}
                </p>
                <ion-icon onClick={() => nextMonth(currentMonth)} name='arrow-forward-circle-outline'></ion-icon>
            </div>
            <div className='sevenColGrid'>
                {getSortedDays(currentMonth, currentYear).map((day) => (
                    <div className='headDay' key={day}>
                        {day}
                    </div>
                ))}
            </div>
            <div
                className='calenderBody'
                style={{
                    gridTemplateRows: `repeat(${DAYSINAMONTH === 28}) => (fourCol ? 4 : 5)}, 1fr)`,
                }}
            >
                {range(DAYSINAMONTH).map((day) => (
                    <div className='styledDay' key={day + 'a'}>
                        <span className={`${areDatestheSame(new Date(), getDateObj(day, currentMonth, currentYear)) ? 'active' : ''}`} key={day + 'a'}>
                            {day}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
