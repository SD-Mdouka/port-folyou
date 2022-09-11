import {
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNode,
  FaLaravel,
  FaWordpress,
} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import { SiRedux, SiAuth0 } from "react-icons/si";
import { Icon } from "@iconify/react";

export const projects = [
  {
    title: "React",
    subtitle: "Auth0 + CRUD",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaJsSquare />
        <SiAuth0 />
        <FaReact />
        <SiRedux />
      </span>
    ),
    image: "./assete/project/Auth0+CRUD.png",
    link: "https://github.com/SD-Mdouka/projectoauth",
  },
  {
    title: "React",
    subtitle: "Clon UI ONCF",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaJsSquare />
        <FaReact />
        <SiRedux />
        <TbBrandTailwind />
      </span>
    ),
    image: "./assete/project/ONCF_UI.png",
    link: "https://github.com/SD-Mdouka/oncefProjet",
  },
  {
    title: "React",
    subtitle: "Site App Memedoc",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaNode />
        <FaReact />
        <SiRedux />
        <FaBootstrap />
      </span>
    ),
    image: "./assete/project/Memedoc.png",
    link: "https://github.com/SD-Mdouka/Inscription-Memedoc",
  },
  {
    title: "React",
    subtitle: "React + NextJs",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaJsSquare />
        <FaReact />
        <Icon icon="simple-icons:nextdotjs" />
      </span>
    ),
    image: "./assete/project/ecommerce.png",
    link: "https://github.com/SD-Mdouka/ecommerce",
  },
  {
    title: "React",
    subtitle: "XO Games",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaJsSquare />
        <FaReact />
        Context Api
      </span>
    ),
    image: "./assete/project/XO_Game.jpg",
    link: "https://github.com/SD-Mdouka/XO_GAME",
  },
  {
    title: "React",
    subtitle: "Project Chats (WebSocket)",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaJsSquare />
        <FaReact />
        <FaNode />
      </span>
    ),
    image: "./assete/project/Project_Chat.png",
    link: "https://github.com/SD-Mdouka/chat_teams",
  },
  {
    title: "Laravel",
    subtitle: "Clone UI Movies With LiveWire",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaJsSquare />
        <FaLaravel />
        <Icon icon="simple-icons:livewire" />
        <TbBrandTailwind />
      </span>
    ),
    image: "./assete/project/Movies.png",
    link: "https://github.com/SD-Mdouka/app_livewire-apline",
  },
  {
    title: "Laravel",
    subtitle: "Project Gestion Restaurant",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaLaravel />
        <DiMysql />
      </span>
    ),
    image: "./assete/project/restourant.png",
    link: "https://github.com/SD-Mdouka/Gestion-Restaurant",
  },
  {
    title: "WordPress",
    subtitle: "Site Web App service BCI",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaWordpress />
      </span>
    ),
    image: "./assete/project/BCI-Service.png",
    link: "http://bci-inspection.com/",
  },
];
