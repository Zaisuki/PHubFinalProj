import { useState } from 'react';
import '../assets/scss/calendar.scss';
import { MONTHS } from '../utils/calendar/calendarConst';
import { areDatestheSame, getDateObj, getDaysInMonth, getSortedDays, range } from '../utils/calendar/calendarUtil';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { Component } from 'react';
    
const localizer = momentLocalizer(moment);

class Calendarness extends Component {
  state = {
    events: [
        {
            start: moment("2024-02-10T00:00:00").toDate(),
            end: moment("2024-02-10T23:59:59").toDate(),
            title: "Birthday ni Glai"
        },

        {
            start: moment("2024-02-14T00:00:00").toDate(),
            end: moment("2024-02-14T23:59:59").toDate(),
            title: "Valentine's Day"
        },

        {
            start: moment("2024-02-19T10:59:00").toDate(),
            end: moment("2024-02-21T23:59:59").toDate(),
            title: "Sleepover sa bahay ni Renek"
        },

        {
            start: moment("2024-02-22T09:30:00").toDate(),
            end: moment("2024-02-22T16:00:00").toDate(),
            title: "Practice ko para sa zumba"
        },

        {
            start: moment("2024-02-23T07:30:00").toDate(),
            end: moment("2024-02-23T15:00:00").toDate(),
            title: "May pasok"
        },
        {
            start: moment("2024-02-24T07:30:00").toDate(),
            end: moment("2024-02-24T16:30:00").toDate(),
            title: "May pasok ulit"
        },

        {
        start: moment("2024-02-25T10:00:00").toDate(),
        end: moment("2024-02-26T15:00:00").toDate(),
        title: "Basta Feb 25 - Feb 26"
        }
    ]
  };

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}
export default Calendarness;
