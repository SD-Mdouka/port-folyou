import {
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNode,
  FaLaravel,
  FaWordpress,
} from "react-icons/fa";
import { DiMysql, DiNodejs } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import { SiRedux, SiAuth0 } from "react-icons/si";

export const projects = [
  {
    title: "React",
    subtitle: "Auth0 + CRUD",
    icon: (
      <span className="flex justify-center mt-[70px]">
        <FaJsSquare />
        <SiAuth0 />
        <FaReact />
        <SiRedux />
      </span>
    ),
    image: "./project/Auth0+CRUD.png",
    link: "https://github.com/SD-Mdouka/projectoauth",
  },
  {
    title: "React",
    subtitle: "Clon UI ONCF",
    icon: (
      <span className="flex justify-center mt-[70px]">
        <FaJsSquare />
        <FaReact />
        <SiRedux />
        <TbBrandTailwind />
      </span>
    ),
    image: "./project/ONCFUI.png",
    link: "https://github.com/SD-Mdouka/oncefProjet",
  },
  {
    title: "React",
    subtitle: "Site App Memedoc",
    icon: (
      <span className="flex justify-center mt-[70px]">
        <FaNode />
        <FaReact />
        <SiRedux />
        <FaBootstrap />
      </span>
    ),
    image: "./project/Memedoc.png",
    link: "https://github.com/SD-Mdouka/Inscription-Memedoc",
  },
  {
    title: "React",
    subtitle: "React + NextJs",
    icon: (
      <span className="flex justify-center mt-[70px]">
        <FaJsSquare />
        <FaReact />
        <DiNodejs />
      </span>
    ),
    image: "./project/ecommerce.png",
    link: "https://github.com/SD-Mdouka/ecommerce",
  },
  {
    title: "Laravel",
    subtitle: "Clone UI Movies With LiveWire",
    icon: (
      <span className="flex justify-center mt-[70px]">
        <FaJsSquare />
        <FaLaravel />
        <TbBrandTailwind />
      </span>
    ),
    image: "./project/Movies.png",
    link: "https://github.com/SD-Mdouka/app_livewire-apline",
  },
  {
    title: "Laravel",
    subtitle: "Project Gestion Restaurant",
    icon: (
      <span className="flex justify-center mt-[70px]">
        <FaLaravel />
        <DiMysql />
      </span>
    ),
    image: "./project/restourant.png",
    link: "https://github.com/SD-Mdouka/Gestion-Restaurant",
  },
  {
    title: "WordPress",
    subtitle: "Site Web App service BCI",
    icon: (
      <span className="flex justify-center mt-[70px]">
        <FaWordpress />
      </span>
    ),
    image: "./project/BCI-Service.png",
    link: "http://bci-inspection.com/",
  },
];
