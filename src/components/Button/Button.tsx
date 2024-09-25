import React from "react";

type ButtonProps =  {
  txt : string,
  backgroundColor? : string
}

const Button = (props : ButtonProps) => {
  return <button style={{backgroundColor : `${props.backgroundColor ?? 'green'}`}}>{props.txt}</button>;
};

export default Button;
