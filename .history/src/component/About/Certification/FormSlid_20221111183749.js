import React from "react";
import { TextSlid } from "../../../fakeData";
import "./index.css";

export const ImageCertification = () => {
  return TextSlid.map((LineImg) => {
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
