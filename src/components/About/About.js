import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import ContentModal from "../ContentModals/ContentModal";

export default function About() {
   const { theme } = useTheme();

   return (
      <ContentModal flexDex="row">
         <Left border={globalTheme[theme].border}>
            <Top>
               <h2 className="title">My Story</h2>
            </Top>
            <Bottom>
               <p>asdasdasdas</p>
               <p>asdasdasdas</p>
               <p>asdasdasdas</p>
               <p>asdasdasdas</p>
               <p>asdasdasdas</p>
            </Bottom>
         </Left>
         <Right>
            <Top>
               <h2 className="title">Hiya, I&apos;m William!</h2>
            </Top>
            <Bottom>
               <Bio>
                  <div className="text">
                     <p>
                        I&apos;m a developer and designer hybrid based in Vancouver, BC.
                        Having built a variety of web / mobile applications with several
                        interdisciplinary teams, I am currently seeking a career in Front
                        End Development.
                     </p>
                     <p>
                        Besides that, I enjoy dystopian or psychological novels,
                        documentaries about random topics and esports. Consumed by
                        lifelong wanderlust, I'm hoping to travel and explore the world to
                        broaden my horizons.
                     </p>
                  </div>
                  <div className="pictureGoHere"></div>
               </Bio>
            </Bottom>
            <Spacer bg={globalTheme[theme].border}>
               <div className="divider" />
            </Spacer>
         </Right>
      </ContentModal>
   );
}

const Left = styled.div`
   width: 25%;
   height: 100%;
   border-right: 1px solid ${(props) => props.border};
`;

const Right = styled.div`
   width: 75%;
   height: 100%;
   overflow-y: scroll;
`;

const Top = styled.div`
   height: 15%;
   display: flex;
   align-items: center;

   .title {
      position: relative;
      left: 40px;
   }
`;

const Bottom = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Bio = styled.div`
   width: 90%;
   display: flex;
   justify-content: space-between;

   .text {
      width: 60%;
      height: 260px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .pictureGoHere {
      width: 35%;
      height: 223px;
      background: rgba(0, 0, 0, 0.43);
      border: 1px solid #2e374d;
   }
`;

const Spacer = styled.div`
   width: 100%;
   height: 85px;
   display: flex;
   justify-content: center;
   align-items: center;

   .divider {
      width: 80%;
      height: 1px;
      background: ${(props) => props.bg};
   }
`;

const Education = styled.div``;
