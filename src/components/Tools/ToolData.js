import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { JsSquare } from "@styled-icons/fa-brands/JsSquare";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Storybook } from "@styled-icons/simple-icons/Storybook";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { TailwindCss } from "@styled-icons/boxicons-logos/TailwindCss";
import { Sass } from "@styled-icons/boxicons-logos/Sass";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Github } from "@styled-icons/bootstrap/Github";
import { Express } from "@styled-icons/simple-icons/Express";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import { Adobeillustrator } from "@styled-icons/simple-icons/Adobeillustrator";
import { Autodesk } from "@styled-icons/simple-icons/Autodesk";
import { Adobeaftereffects } from "@styled-icons/simple-icons/Adobeaftereffects";
import { Php } from "@styled-icons/simple-icons/Php";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Bitbucket } from "@styled-icons/fa-brands/Bitbucket";
import { Notion } from "@styled-icons/simple-icons/Notion";
import { Jirasoftware } from "@styled-icons/simple-icons/Jirasoftware";
import { Trello } from "@styled-icons/boxicons-logos/Trello";
import { Miro } from "@styled-icons/simple-icons/Miro";
import { DigitalOcean } from "@styled-icons/fa-brands/DigitalOcean";
import { Vercel } from "@styled-icons/simple-icons/Vercel";
import { Jquery } from "@styled-icons/boxicons-logos/Jquery";
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { Blender } from "@styled-icons/boxicons-logos/Blender";

// if search state is empty return all 3 divs (dev, des, agi) else return 1 for search result

export const ToolData = [
   { type: "dev", name: "Javascript", icon: <JsSquare /> },
   { type: "dev", name: "Typescript", icon: <Typescript /> },
   { type: "dev", name: "React.js", icon: <LogoReact /> },
   { type: "dev", name: "Next.js", icon: <Nextdotjs /> },
   { type: "dev", name: "React Native", icon: <LogoReact /> },
   { type: "dev", name: "Storybook", icon: <Storybook /> },
   { type: "dev", name: "HTML", icon: <Html5 /> },
   { type: "dev", name: "CSS", icon: <Css3 /> },
   { type: "dev", name: "Tailwind", icon: <TailwindCss /> },
   { type: "dev", name: "SASS", icon: <Sass /> },
   { type: "dev", name: "Styled Components", icon: <Styledcomponents /> },
   { type: "dev", name: "Jquery", icon: <Jquery /> },
   { type: "dev", name: "Express.js", icon: <Express /> },
   { type: "dev", name: "Node.js", icon: <Nodejs /> },
   { type: "dev", name: "MongoDB", icon: <Mongodb /> },
   { type: "dev", name: "PHP", icon: <Php /> },
   { type: "dev", name: "Firebase", icon: <Firebase /> },
   { type: "dev", name: "MySQL", icon: <Mysql /> },
   { type: "dev", name: "Digital Ocean", icon: <DigitalOcean /> },
   { type: "dev", name: "Vercel", icon: <Vercel /> },

   //design logos
   { type: "des", name: "Figma", icon: <Figma /> },
   { type: "des", name: "Photoshop", icon: <Adobephotoshop /> },
   { type: "des", name: "Illustrator", icon: <Adobeillustrator /> },
   { type: "des", name: "After Effects", icon: <Adobeaftereffects /> },
   { type: "des", name: "3DS Max", icon: <Autodesk /> },
   { type: "des", name: "Blender", icon: <Blender /> },

   //agile logos
   { type: "agi", name: "Github", icon: <Github /> },
   { type: "agi", name: "Bitbucket", icon: <Bitbucket /> },
   { type: "agi", name: "Notion", icon: <Notion /> },
   { type: "agi", name: "Jira", icon: <Jirasoftware /> },
   { type: "agi", name: "Trello", icon: <Trello /> },
   { type: "agi", name: "Miro", icon: <Miro /> },
];
