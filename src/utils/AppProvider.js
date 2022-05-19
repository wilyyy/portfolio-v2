import { useContext, createContext, useState } from "react";
import { globalTheme } from "./ThemeConfig";

const initialStates = {
   theme: "dark",
   setTheme: () => {},

   pageTransition: false,
   setPageTransition: () => {},
};

const MyContext = createContext(initialStates);

const AppProvider = ({ children }) => {
   const [theme, setTheme] = useState(initialStates.theme);
   const [pageTransition, setPageTransition] = useState(initialStates.theme);

   return (
      <MyContext.Provider value={{ theme, setTheme, pageTransition, setPageTransition }}>
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

//if page has already been loaded, use this state to change loading transition between page
export const usePageTransition = () => {
   const { pageTransition, setPageTransition } = useContext(MyContext);
   return { pageTransition, setPageTransition };
};