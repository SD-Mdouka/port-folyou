import React from "react";
import { TextSlid } from "../../../fakeData";
import { Button } from "../../share-component/Button";
import { Paragraph } from "../../share-component/Paragraph";
import { Text } from "../../share-component/Text";
import "./index.css";

export const FormSlid = ({ idLine }) => {
  return TextSlid.map((LineText) => {
    return (
      <div className="relative mt-[110px]" key={LineText.id}>
        {LineText.id === idLine && (
          <div className="containerList w-full my-[25px]">
            <Text text={LineText.text} classStyle="titleContainer" />
            <Paragraph text={LineText.paragraph} classStyle="paragraph" />

            <div className="pt-[5px]">
              <Button
                title={"Découvrir"}
                href={LineText.url}
                classStyle={"btnDecouvrir"}
              />
            </div>
          </div>
        )}
      </div>
    );
  });
};
