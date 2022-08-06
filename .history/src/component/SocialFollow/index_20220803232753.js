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
      <section className="text-center text-black mt-2">
        <h3 className="font-bold text-2xl">Social Follow</h3>
        <div className="social-container  justify-center pl-[150px] space-y-[100px] mt-6">
          <div className="flex grid-cols-2 social-link max-h-[50px]">
            <a
              href="https://web.facebook.com/salaheddine.mdouka"
              className="facebook social relative left-2 -mt-3 rounded-full border-[10px] border-white h-[69px]"
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <span className="text-black text-[20px] p-3.5 w-full mr-[106px] rounded-r-full font-bold bg-white">
              Salah Eddine Mdouka
            </span>
          </div>
          <div className="flex grid-cols-2 social-link max-h-[50px]">
            <a
              href="https://www.instagram.com/sdmdouka/"
              className="instagram social relative left-1 -mt-4 rounded-full border-[10px] border-white h-[82px]"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <span className="text-black text-[20px] p-5 w-full -mx-2 -my-2 mr-[110px] rounded-r-full font-bold bg-white">
              sdmdouka
            </span>
          </div>
          <div className="flex grid-cols-2 social-link  max-h-[44px]">
            <a
              href="https://twitter.com/SMdouka"
              className="twitter social relative left-1 -mt-5 rounded-full border-[10px] border-white h-[82px]"
            >
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <span className="text-black text-[20px] p-5 w-full -mx-2 -my-2 mr-[110px] rounded-r-full font-bold bg-white">
              @SMdouka
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
export default SocialFollow;
