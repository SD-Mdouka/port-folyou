import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const SocialFollow = () => {
  return (
    <>
      <section className="text-center text-black mt-2">
        <h3 className="font-bold text-2xl">Social Follow</h3>
        <div className="social-container  justify-center pl-[185px] space-y-[100px] mt-6">
          <motion.div
            initial={{ x: -30, y: 0, opacity: 0, top: 0.9 }}
            animate={{ x: 10, y: 10, opacity: 1, top: 1 }}
            exit={{ x: -10, y: 40, opacity: 0, top: 0.9 }}
            transition={{
              duration: 1.18,
              ease: [0.12, 0.93, 0.66, 0.97],
            }}
          >
            <div className="flex grid-cols-2 social-link max-h-[50px]">
              <a
                href="https://web.facebook.com/salaheddine.mdouka"
                className="facebook social relative left-2 -mt-2 rounded-full border-[10px] border-white h-[69px]"
              >
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </a>
              <span className="text-black text-[20px] p-3 w-full -ml-1 rounded-r-full font-bold bg-white">
                <a href="https://web.facebook.com/salaheddine.mdouka">
                  Salah Eddine Mdouka
                </a>
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -30, y: 0, opacity: 0, top: 0.9 }}
            animate={{ x: 30, y: 30, opacity: 1, top: 3 }}
            exit={{ x: -10, y: 40, opacity: 0, top: 0.9 }}
            transition={{
              duration: 2.3,
              ease: [0.12, 0.93, 0.66, 0.97],
            }}
          >
            <div className="flex grid-cols-2 social-link  max-h-[44px]">
              <a
                href="https://twitter.com/SMdouka"
                className="twitter social relative left-2 -mt-2 rounded-full border-[10px] border-white h-[69px]"
              >
                <FontAwesomeIcon icon={faTwitter} size="3x" />
              </a>
              <span className="text-black text-[20px] p-3 w-full -ml-1 rounded-r-full font-bold bg-white">
                <a href="https://twitter.com/SMdouka">@SMdouka</a>
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -30, y: 0, opacity: 0, top: 0.9 }}
            animate={{ x: 30, y: 30, opacity: 1, top: 3 }}
            exit={{ x: -10, y: 40, opacity: 0, top: 0.9 }}
            transition={{
              duration: 2.3,
              ease: [0.12, 0.93, 0.66, 0.97],
            }}
          >
            <div className="flex grid-cols-2 social-link  max-h-[44px]">
              <a
                href="https://github.com/SD-Mdouka"
                className="text-[30px] font-bold text-black social relative left-2 -mt-2 rounded-full border-[10px] border-white h-[69px]"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <span className="text-black text-[20px] p-3 w-full -ml-1 rounded-r-full font-bold bg-white">
                <a href="https://github.com/SD-Mdouka">SD-Mdouka</a>
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -30, y: 0, opacity: 0, top: 0.9 }}
            animate={{ x: 30, y: 30, opacity: 1, top: 3 }}
            exit={{ x: -10, y: 40, opacity: 0, top: 0.9 }}
            transition={{
              duration: 2.3,
              ease: [0.12, 0.93, 0.66, 0.97],
            }}
          >
            <div className="flex grid-cols-2 social-link  max-h-[44px]">
              <a
                href="https://www.linkedin.com/in/salah-eddine-mdouka-578695133/"
                className="text-[30px] text-[#0072b1] social relative left-2 -mt-2 rounded-full border-[10px] border-white h-[69px]"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
              <span className="text-black text-[20px] p-3 w-full -ml-1 rounded-r-full font-bold bg-white">
                <a href="https://www.linkedin.com/in/salah-eddine-mdouka-578695133/">
                  Salah Eddine Mdouka
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default SocialFollow;
