import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const SocialFollow = () => {
  return (
    <>
      <h3 className="justify-center items-center text-white font-bold text-2xl ml-[200px]">
        Social Follow
      </h3>
      <div className="social-container">
        <div className="flex flex-row w-full h-[60px] rounded-[20px]">
          <a
            href="https://www.facebook.com/learnbuildteach/"
            className="facebook social "
          >
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </a>
          <span className="text-black text-[25px] items-center rounded-full px-3 py-3 w-[500px] font-bold bg-white">
            Salah Eddine Mdouka
          </span>
        </div>
      </div>
    </>
  );
};
export default SocialFollow;
