import { useState, useEffect } from "react";

export default function DateTime({ date, time }) {
   const [currTime, setCurrTime] = useState();

   useEffect(() => {
      setInterval(() => {
         setCurrTime(new Date().toLocaleTimeString());
      }, 1000);
   }, []);

   const options = { year: "numeric", month: "long", day: "numeric" };
   const showDate = new Date().toLocaleDateString(undefined, options);
   return (
      <>
         {date && (
            <div>
               <p>{showDate}</p>
            </div>
         )}

         {time && (
            <div>
               <p>{currTime}</p>
            </div>
         )}
      </>
   );
}
