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
        <div className="flex grid-cols-2 social-link w-full  max-h-[50px] mt-5 ml-6">
          <a
            href="https://www.facebook.com/learnbuildteach/"
            className="facebook social relative left-2 -mt-4 rounded-full border-[10px] border-white h-[82px]"
          >
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </a>
          <span className="origin-left transition-all duration-75 delay-75 text-black App-logo -ml-2 text-[25px] items-end text-end justify-items-end rounded-r-full p-2 w-[350px] font-bold bg-white">
            Salah Eddine Mdouka
          </span>
        </div>
      </div>
    </>
  );
};
export default SocialFollow;
