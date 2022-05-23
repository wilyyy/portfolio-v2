import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import ContentModal from "@/src/components/ContentModals/ContentModal";
import { HoverZoom } from "@/src/utils/Animations";

export default function Contact() {
   const { theme } = useTheme();

   return (
      <ContentModal>
         <Top>
            <h2 className="title">Contact Me</h2>
         </Top>
         <Bottom>
            <Input
               type="text"
               placeholder="Full Name"
               border={globalTheme[theme].border}
               text={globalTheme[theme].text}
               bg={
                  theme === "dark"
                     ? "linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 0%, rgba(255, 255, 255, 0) 100%)"
                     : "#FAF8EB"
               }
            />
            <Input
               type="email"
               placeholder="Email Address"
               border={globalTheme[theme].border}
               text={globalTheme[theme].text}
               bg={
                  theme === "dark"
                     ? "linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 0%, rgba(255, 255, 255, 0) 100%)"
                     : "#FAF8EB"
               }
            />
            <Input
               type="text"
               placeholder="Subject"
               border={globalTheme[theme].border}
               text={globalTheme[theme].text}
               bg={
                  theme === "dark"
                     ? "linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 0%, rgba(255, 255, 255, 0) 100%)"
                     : "#FAF8EB"
               }
            />
            <TextArea
               placeholder="Enter Message here..."
               border={globalTheme[theme].border}
               text={globalTheme[theme].text}
               bg={
                  theme === "dark"
                     ? "linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 0%, rgba(255, 255, 255, 0) 100%)"
                     : "#FAF8EB"
               }
            />
            <Submit
               type="submit"
               value="Send Message"
               bg={
                  theme === "dark"
                     ? "linear-gradient(152.97deg, rgba(11, 15, 19, 0.83) 0%, rgba(30, 52, 72, 0.65) 100%)"
                     : "#FAF8EB"
               }
               text={globalTheme[theme].text}
               border={globalTheme[theme].border}
               whileHover={{ scale: 1.1 }}
               transition={{ type: "spring", stiffness: 500 }}
               textShadow={globalTheme[theme].textShadow}
            />
         </Bottom>
      </ContentModal>
   );
}

const Top = styled.div`
   height: 15%;
   width: 100%;
   display: flex;
   align-items: center;

   .title {
      position: relative;
      left: 40px;
   }
`;

const Bottom = styled.div`
   width: 100%;
   height: 85%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
`;

const Input = styled.input`
   width: 75%;
   height: 42px;
   border-radius: 5px;
   background: ${(props) => props.bg};
   box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.6), inset 0px 6px 4px rgba(0, 0, 0, 0.6);
   color: ${(props) => props.text};
   padding: 2%;
   outline: none;
   border: 1px solid ${(props) => props.border};

   ::placeholder {
      color: ${(props) => props.text};
   }
`;

const TextArea = styled.textarea`
   resize: none;
   width: 75%;
   min-width: 75%;
   max-width: 75%;
   height: 200px;
   min-height: 200px;
   max-height: 200px;
   border-radius: 5px;
   background: ${(props) => props.bg};
   box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.6), inset 0px 6px 4px rgba(0, 0, 0, 0.6);
   color: ${(props) => props.text};
   padding: 2%;
   outline: none;
   border: 1px solid ${(props) => props.border};
   font-size: 16px;

   ::placeholder {
      color: ${(props) => props.text};
   }
`;

const Submit = styled(motion.input)`
   width: 20%;
   font-weight: 600;
   height: 64px;
   background: ${(props) => props.bg};
   border: 1px solid ${(props) => props.border};
   font-size: 20px;
   color: ${(props) => props.text};
   border-radius: 16px;
   text-shadow: 0px 0px 10px ${(props) => props.textShadow};
`;
