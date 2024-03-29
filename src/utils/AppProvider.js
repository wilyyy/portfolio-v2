import { useContext, createContext, useState } from "react";
import { globalTheme } from "./ThemeConfig";

const initialStates = {
   theme: "dark",
   setTheme: () => {},

   status: "none",
   setStatus: () => {},
};

const MyContext = createContext(initialStates);

const AppProvider = ({ children }) => {
   const [theme, setTheme] = useState(initialStates.theme);
   const [status, setStatus] = useState(initialStates.status);

   return (
      <MyContext.Provider value={{ theme, setTheme, status, setStatus }}>
         <style jsx global>
            {`
               body {
                  background-color: ${globalTheme[theme].base};
                  color: ${globalTheme[theme].text};
                  transition: all 0.35s linear;
                  font-family: "cartograph_extralight";
               }
            `}
         </style>
         {children}
      </MyContext.Provider>
   );
};

export default AppProvider;

//theme hook
export const useTheme = () => {
   const { theme, setTheme } = useContext(MyContext);
   return { theme, setTheme };
};

// current apge status for opening modals
export const useStatus = () => {
   const { status, setStatus } = useContext(MyContext);
   return { status, setStatus };
};
