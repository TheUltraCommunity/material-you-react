import React from 'react';

type ButtonProps = {
    txt: string;
    backgroundColor?: string;
};
declare const Button: (props: ButtonProps) => React.JSX.Element;

export { Button };
