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
    subtitle: "App Shopping",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaJsSquare />
        <FaReact />
        Style Component
      </span>
    ),
    image: "./assete/project/BoitMessage.png",
    link: "https://github.com/SD-Mdouka/gestionmarch",
    live: "https://gestionmarch.vercel.app/",
  },
  {
    title: "React",
    subtitle: "App Boit Message",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaJsSquare />
        <FaReact />
        <FaBootstrap />
        ContextApi
      </span>
    ),
    image: "./assete/project/BoitMessage.png",
    link: "https://github.com/SD-Mdouka/gestionmarch",
    live: "https://gestionmarch.vercel.app/",
  },
  {
    title: "React",
    subtitle: "Site App Gestion Produit",
    icon: (
      <span className="flex justify-center mt-[70px] gap-5">
        <FaJsSquare />
        <FaReact />
      </span>
    ),
    image: "./assete/project/AppGestion.png",
    link: "https://github.com/SD-Mdouka/gestionmarch",
    live: "https://gestionmarch.vercel.app/",
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
    live: "https://oncef-projet.vercel.app/",
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
    live: "https://inscription-memedoc.vercel.app/",
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
    live: "https://ecommerce-ashen-tau.vercel.app/",
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
    image: "./assete/project/XO_GAME.png",
    link: "https://github.com/SD-Mdouka/XO_GAME",
    live: "https://xo-game-jet.vercel.app/",
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
    image: "./assete/project/chat_teams.png",
    link: "https://github.com/SD-Mdouka/chat_teams",
    live: "",
  },
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
    live: "https://projectoauth.vercel.app/",
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
    live: "",
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
    link: "",
    live: "http://bci-inspection.com/",
  },
];
