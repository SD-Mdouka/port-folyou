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
      <div className="social-container flex grid-rows-1">
        <div className="flex grid-cols-1 w-full  max-h-[60px] rounded-[20px] mt-8">
          <a
            href="https://www.facebook.com/learnbuildteach/"
            className="facebook social "
          >
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </a>
          <span className="text-black text-[25px] items-end text-end justify-items-end rounded-l-full w-[400px] font-bold bg-white">
            Salah Eddine Mdouka
          </span>
        </div>
      </div>
    </>
  );
};
export default SocialFollow;
