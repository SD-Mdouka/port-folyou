import React from "react";
import { CertificationSlid } from "./data";
import "./index.css";

export const ImageCertification = ({ idLine }) => {
  return CertificationSlid.map((LineImg) => {
    return (
      <div className="relative mt-[110px]" key={LineImg.id}>
        {LineImg.id === idLine && (
          <>
            <img src={LineImg.src} alt={LineImg.title} />
            <p className="titleContainer">{LineImg.title}</p>
          </>
        )}
      </div>
    );
  });
};
