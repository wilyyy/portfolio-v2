import { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

import { Calendar } from "@styled-icons/bootstrap/Calendar";
import { Clock } from "@styled-icons/bootstrap/Clock";
import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import lightswitch_dark from "@/public/lightswitch_light.svg";
import lightswitch_outline from "@/public/lightswitch_outline.svg";

const DateTime = ({ date, time }) => {
   const [currTime, setCurrTime] = useState();
   const { theme, setTheme } = useTheme();

   useEffect(() => {
      setInterval(() => {
         setCurrTime(new Date().toLocaleTimeString());
      }, 1000);
   }, []);

   const options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };
   const showDate = new Date().toLocaleDateString(undefined, options);

   return (
      <>
         <Container>
            <Row>
               <Calendar color={globalTheme[theme].text} />
               <Spacer />
               <p>{showDate}</p>
            </Row>
            <Row>
               <Clock color={globalTheme[theme].text} />
               <Spacer />
               <p>{currTime}</p>
            </Row>
         </Container>
         {/* {date && (
            <div>
               <p>{showDate}</p>
            </div>
         )}

         {time && (
            <div>
               <p>{currTime}</p>
            </div>
         )} */}
      </>
   );
};

export default DateTime;

const Container = styled.div`
   height: 68px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   ${StyledIconBase} {
      color: ${(props) => props.color};
      width: 20px;
      height: 22px;
   }
`;

const Row = styled.div`
   display: flex;
   align-items: center;
   width: auto;
   height: auto;
`;

const Spacer = styled.div`
   width: 10px;
`;
