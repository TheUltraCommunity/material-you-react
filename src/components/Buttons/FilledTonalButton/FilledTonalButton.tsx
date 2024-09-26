import React, { useState } from "react";
import FilledButton from "../FilledButton/FilledButton";

type FilledTonalButtonProps = {
  children: React.ReactNode;
  icon?: string;
  disabled?: boolean;
  containerColor?: string;
  contentColor?: string;
  width?: string;
};

const FilledTonalButton = (props: FilledTonalButtonProps) => {
  return (
    <FilledButton
      children={props.children}
      icon={props.icon}
      disabled={props.disabled}
      containerColor="rgb(var(--md-sys-color-secondary-container))"
      contentColor="rgb(var(--md-sys-color-on-secondary-container))"
      width={props.width}
      draggable={false}
    />
  );
};

export default FilledTonalButton;
