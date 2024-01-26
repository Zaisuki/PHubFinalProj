import { useState } from 'react';
import '../assets/scss/calendar.scss';
import { DAYS, SevenColGrid, StyledDay, Wrapper, MONTHS } from '../utils/calendar/calendarConst';
import { areDatestheSame, getDateObj, getDaysInMonth, getSortedDays, range } from '../utils/calendar/calendarUtil';

const Calendar = () => {
    const startingdate = new Date();
    const [currentMonth, setCurrentMonth] = useState(3);
    const [currentYear, setCurrentYear] = useState(startingdate.getFullYear());
    const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);

    const nextMonth = () => {
        if (currentMonth < 11) {
        setCurrentMonth((prev) => prev + 1);
    } else {
        setCurrentMonth(0)
        setCurrentYear((prev) => prev + 1);
    }
    }
    const prevMonth = () => {
        if (currentMonth < 0) {
        setCurrentMonth((prev) => prev - 1);
    } else {
        setCurrentMonth(0)
        setCurrentYear((prev) => prev - 1);
    }
    }

    return (
        <div className='wrapper'>
            <div className='calendarHead'>
                <ion-icon onClick={prevMonth} name='arrow-back-circle-outline'></ion-icon>
                <p>
                    {MONTHS[currentMonth]} {currentYear}
                </p>
                <ion-icon onClick={nextMonth}name='arrow-forward-circle-outline'></ion-icon>
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
                    <div className='styledDay'/*active={areDatestheSame
                    (new Date(), getDateObj(day, currentMonth, currentYear))*/  key={day + 'a'}>
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
