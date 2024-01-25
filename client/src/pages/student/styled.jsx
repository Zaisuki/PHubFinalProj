import styled from "styled-components";
 export const Wrapper = styled.div`
 width: auto;
 height: 100vh;
 border: 1px solid;
 margin: 5px;
 `;

export const CalendarHead = styled.div`
width: 100%;
height: 40px;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 24px;
`;

export const SevenColGrid = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(7, 1fr);
`;
export const HeadDay = styled.span`
text-align: center;
background: darkkhaki;
font-size: 1.2rem;
`

