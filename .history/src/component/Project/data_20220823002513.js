import {
  FaJsSquare,
  FaReact,
  // Fa500Px,redux
  FaBootstrap,
  FaNode,
  // SiTailwindcss, tailwind
 
  FaLaravel,
  FaWordpress,
  
} from "react-icons/fa";
import { DiMysql, DiNodejs } from "react-icons/di";
export const projects = [
  {
    title: "React",
    subtitle: "Auth0 + CRUD",
    icon: (
      <>
        <FaJsSquare />
        {/* <IconsManifest /> */}
        <FaReact />
        {/* <Fa500Px /> */}
      </>
    ),
    image: "./project/Auth0+CRUD.png",
    link: "https://github.com/SD-Mdouka/projectoauth",
  },
  {
    title: "React",
    subtitle: "Clon UI ONCF",
    icon: (
      <>
        <FaJsSquare />
        <FaReact />
        {/* <Fa500Px /> */}
        {/* <SiTailwindcss /> */}
      </>
    ),
    image: "./project/ONCFUI.png",
    link: "https://github.com/SD-Mdouka/oncefProjet",
  },
  {
    title: "React",
    subtitle: "Site App Memedoc",
    icon: (
      <>
        <FaNode />
        <FaReact />
        {/* <Fa500Px /> */}
        <FaBootstrap />
      </>
    ),
    image: "./project/Memedoc.png",
    link: "https://github.com/SD-Mdouka/Inscription-Memedoc",
  },
  {
    title: "React",
    subtitle: "React + NextJs",
    icon: (
      <>
        <FaJsSquare />
        <FaReact />
        <DiNodejs />
      </>
    ),
    image: "./project/ecommerce.png",
    link: "https://github.com/SD-Mdouka/ecommerce",
  },
  {
    title: "Laravel",
    subtitle: "Clone UI Movies With LiveWire",
    icon: (
      <>
        <FaJsSquare />
        <FaLaravel />
        {/* <SiTailwindcss /> */}
      </>
    ),
    image: "./project/Movies.png",
    link: "https://github.com/SD-Mdouka/app_livewire-apline",
  },
  {
    title: "Laravel",
    subtitle: "Project Gestion Restaurant",
    icon: (
      <>
        <FaLaravel />
        <DiMysql />
      </>
    ),
    image: "./project/restourant.png",
    link: "https://github.com/SD-Mdouka/Gestion-Restaurant",
  },
  {
    title: "WordPress",
    subtitle: "Site Web App service BCI",
    icon: <FaWordpress />,
    image: "./project/BCI-Service.png",
    link: "http://bci-inspection.com/",
  },
];
