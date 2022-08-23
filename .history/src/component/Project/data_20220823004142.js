import {
  FaJsSquare,
  FaReact,
  SiRedux,
  FaBootstrap,
  FaNode,
  FaLaravel,
  FaWordpress,
} from "react-icons/fa";
import { DiMysql, DiNodejs } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/td";
import { SiRedux } from "react-icons/si";
export const projects = [
  {
    title: "React",
    subtitle: "Auth0 + CRUD",
    icon: (
      <>
        <FaJsSquare />
        {/* <IconsManifest /> */}
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
        <TbBrandTailwind />
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
        <TbBrandTailwind />
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