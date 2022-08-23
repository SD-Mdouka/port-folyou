import {
  FaJsSquare,
  FaReact,
  SiRedux,
  BsBootstrapFill,
  FaNode,
  SiTailwindcss,
  SiNextdotjs,
  IoLogoLaravel,
  BsWordpress,
  SiMysql,
} from "react-icons/fa";
import { SiAuth0 } from "react-icons";
export const projects = [
  {
    title: "React",
    subtitle: "Auth0 + CRUD",
    icon: (
      <>
        <FaJsSquare />
        <SiAuth0 />
        <FaReact />
        <SiRedux />
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
        <SiRedux />
        <SiTailwindcss />
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
        <SiRedux />
        <BsBootstrapFill />
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
        <SiNextdotjs />
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
        <IoLogoLaravel />
        <SiTailwindcss />
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
        <IoLogoLaravel />
        <SiMysql />
      </>
    ),
    image: "./project/restourant.png",
    link: "https://github.com/SD-Mdouka/Gestion-Restaurant",
  },
  {
    title: "WordPress",
    subtitle: "Site Web App service BCI",
    icon: <BsWordpress />,
    image: "./project/BCI-Service.png",
    link: "http://bci-inspection.com/",
  },
];
