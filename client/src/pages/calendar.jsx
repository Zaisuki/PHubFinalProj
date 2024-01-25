import { useState } from 'react';
import '../assets/scss/calendar.scss';
import { DAYS, MONTHS } from '../utils/calendar/calendarConst';
import { getDaysInMonth, getSortedDays, range } from '../utils/calendar/calendarUtil';

const Calendar = () => {
    const startingdate = new Date();
    const [currentMonth, setCurrentMonth] = useState(4);
    const [currentYear, setCurrentYear] = useState(startingdate.getFullYear());
    const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);
    return (
        <div className='wrapper'>
            <div className='calendarHead'>
                <ion-icon name='arrow-back-circle-outline'></ion-icon>
                <p>
                    {MONTHS[currentMonth]} {currentYear}
                </p>
                <ion-icon name='arrow-forward-circle-outline'></ion-icon>
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
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
