import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import ContentModal from "@/src/components/ContentModals/ContentModal";

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
            />
            <Input
               type="email"
               placeholder="Email Address"
               border={globalTheme[theme].border}
               text={globalTheme[theme].text}
            />
            <Input
               type="text"
               placeholder="Subject"
               border={globalTheme[theme].border}
               text={globalTheme[theme].text}
            />
            <TextArea
               placeholder="Enter Message here..."
               border={globalTheme[theme].border}
               text={globalTheme[theme].text}
            />
            <Submit type="submit" />
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
      left: 4%;
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
   border-radius: 9px;
   background: linear-gradient(
      152.97deg,
      rgba(28, 76, 121, 0.06) 0%,
      rgba(255, 255, 255, 0) 100%
   );
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
   width: 75%;
   min-width: 75%;
   max-width: 75%;
   height: 200px;
   border-radius: 9px;
   background: linear-gradient(
      152.97deg,
      rgba(28, 76, 121, 0.06) 0%,
      rgba(255, 255, 255, 0) 100%
   );
   box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.6), inset 0px 6px 4px rgba(0, 0, 0, 0.6);
   color: ${(props) => props.text};
   padding: 2%;
   outline: none;
   border: 1px solid ${(props) => props.border};

   ::placeholder {
      color: ${(props) => props.text};
   }
`;

const Submit = styled.input`
   width: 30%;
   height: 64px;
`;
