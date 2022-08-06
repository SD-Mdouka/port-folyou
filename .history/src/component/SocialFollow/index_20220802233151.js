import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const SocialFollow = () => {
  return (
    <>
      <h3 className="justify-center items-center text-white font-bold text-2xl">
        Social Follow
      </h3>
      <div className="social-container grid-cols-1 space-y-[100px] mt-6">
        <div className="flex grid-cols-2 social-link w-full max-h-[50px] mt-5">
          <a
            href="https://www.facebook.com/learnbuildteach/"
            className="facebook social relative left-2 -mt-4 rounded-full border-[10px] border-white h-[82px]"
          >
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </a>
          <span className="origin-left transition-all duration-75 delay-75 text-black App-logo -ml-1 text-[25px] items-end text-end justify-items-end rounded-r-full p-2 w-[350px] font-bold bg-white">
            Salah Eddine Mdouka
          </span>
        </div>
        <div className="flex grid-cols-2 social-link w-full  max-h-[50px] mt-5">
          <a
            href="https://www.twitter.com/learnbuildteach/"
            className="twitter social relative left-2 -mt-4 rounded-full border-[10px] border-white h-[82px]"
          >
            <FontAwesomeIcon icon={faTwitter} size="4x" />
          </a>
          <span className="origin-left transition-all duration-75 delay-75 text-black App-logo -ml-1 text-[25px] items-end text-end justify-items-end rounded-r-full p-2 w-[350px] font-bold bg-white">
            @SMdouka
          </span>
        </div>
        <div className="flex grid-cols-2 social-link w-full  max-h-[50px] mt-5">
          <a
            href="https://www.instagram.com/learnbuildteach/"
            className="instagram social relative left-2 -mt-4 rounded-full border-[10px] border-white h-[82px]"
          >
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </a>
          <span className="origin-left transition-all duration-75 delay-75 text-black App-logo -ml-1 text-[25px] items-end text-end justify-items-end rounded-r-full p-2 w-[350px] font-bold bg-white">
            Salah Eddine Mdouka
          </span>
        </div>
      </div>
    </>
  );
};
export default SocialFollow;
