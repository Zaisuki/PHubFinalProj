import { DAYS } from "./conts";
import { CalendarHead, HeadDay, SevenColGrid, Wrapper } from "./styled";

export const Calendar = ()=>{
return (
  <Wrapper>
    <CalendarHead>
    <ion-icon name="arrow-back-circle-outline"></ion-icon>
    <p>Jan 2024</p>
    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
    </CalendarHead>
    <SevenColGrid>
      {DAYS.map((day) => (
      <HeadDay>{day}</HeadDay>
      ))}
    </SevenColGrid>
  </Wrapper>
);
};