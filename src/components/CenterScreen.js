import styled from "styled-components";
import Baffle from "baffle-react";

import Icon from "./Nav/Icon";
import { useStatus } from "../utils/AppProvider";

export default function CenterScreen() {
   const { status, setStatus } = useStatus();
   return (
      <Container opacity={status === "none" ? 1 : 0.1}>
         <Inner>
            <Baffle
               speed={50}
               characters="asd!4912~&CBM%AD^&@hgk#&^aja*(asm,&%^~kjajlnvni^&*x*uwem"
               exclude={[" ", "!"]}
               obfuscate={false}
               update={true}
               revealDuration={1000}
            >
               The craft of William Laurel Alvarez, a web and mobile developer with a
               passion for human centered design.
            </Baffle>
            <Row>
               <Icon folder isText onButtonClick={() => setStatus("work")} />
               <Icon notepad isText onButtonClick={() => setStatus("info")} />
               <Icon gear isText onButtonClick={() => setStatus("tools")} />
               <Icon mail isText onButtonClick={() => setStatus("mail")} />
            </Row>
         </Inner>
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   opacity: ${(props) => props.opacity};
`;

const Inner = styled.div`
   width: 50%;
   height: 25%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   text-align: center;
   position: relative;
   bottom: 8%;
`;

const Row = styled.div`
   display: flex;
   width: 70%;
   height: 20%;
   justify-content: space-between;
   align-items: center;
`;
