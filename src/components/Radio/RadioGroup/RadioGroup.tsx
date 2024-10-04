import React, { createRef, useEffect, useState } from "react";
import { RadioButton } from "../RadioButton";
import {
  getComplementaryColor,
  getRecursiveParentBackgroundColor,
} from "../../Scaffold/getRecursiveParentBackgroundColor";

type RadioGroupProps = {
  children: string[];
  value: string | null;
  onChange: (value: string) => void;
};
const RadioGroup = ({ children, value, onChange }: RadioGroupProps) => {
  const innerRef = createRef<HTMLDivElement>();
  const [parentBGColor, setParentBGColor] = useState("transparent");

  useEffect(() => {
    const currentBGColor = getRecursiveParentBackgroundColor(innerRef.current);
    setParentBGColor(getComplementaryColor(currentBGColor));
  }, [innerRef.current]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      {children.map((child) => {
        return (
          <div
            key={child}
            ref={innerRef}
            onClick={() => onChange(child)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0px 16px",
              height: "56px",
            }}
          >
            <RadioButton selected={value == child} onClick={() => {}} />
            <p
              className="body-large"
              style={{
                color: parentBGColor,
                marginLeft: "16px",
              }}
            >
              {child}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
