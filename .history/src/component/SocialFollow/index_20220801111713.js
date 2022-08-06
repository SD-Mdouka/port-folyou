import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import './style.css';

const SocialFollow = () => {
    return (
      <>
        <div class="social-container">
          <h3 className="justify-center items-center text-white font-bold text-2xl ml-[200px]">Social Follow</h3>
          <div className="">
            <a
                href="https://www.facebook.com/learnbuildteach/"
                className="facebook social flex flex-row"
            >
                <FontAwesomeIcon icon={faFacebook} size="4x" />
                <span className="text-black text-[25px] items-center rounded-full px-3 py-3 -ml-[60px] -mr-3 font-bold bg-white">Salah Eddine Mdouka</span>
            </a>

          </div>
          <a
            href="https://www.twitter.com/jamesqquick"
            className="twitter social"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/learnbuildteach"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </>
    );
}
export default SocialFollow;