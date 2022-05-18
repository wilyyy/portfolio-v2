import styled from "styled-components";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Location } from "@styled-icons/ionicons-sharp/Location";
import { Github } from "@styled-icons/bootstrap/Github";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { LinkedinBox } from "@styled-icons/remix-line/LinkedinBox";
import { StyledIconBase } from "@styled-icons/styled-icon";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import DateTime from "./DateTime";

import lightswitch_dark from "@/public/lightswitch_light.svg";
import lightswitch_outline from "@/public/lightswitch_outline.svg";

export default function Header() {
   const { theme } = useTheme();

   return (
      <Container>
         <DateTime />
      </Container>
   );
}

const Container = styled.div`
   width: 95%;
   height: 20%;
   display: flex;
   justify-content: space-between;
`;
