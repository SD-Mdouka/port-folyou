import React from "react";
import { CertificationSlid } from "./data";
import "./index.css";

export const ImageCertification = ({ idLine }) => {
  return CertificationSlid.map((LineImg) => {
    return (
      <div className="relative mt-[110px]" key={LineText.id}>
        {LineImg.id === idLine && (
          <>
            <img src={LineImg.src} />
          </>
        )}
      </div>
    );
  });
};
