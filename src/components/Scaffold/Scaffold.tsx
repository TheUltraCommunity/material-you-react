import React, { cloneElement, forwardRef, useEffect, useState } from "react";
import {
  ScaffoldContext,
  ScaffoldHost,
  SnackbarParams,
} from "./ScaffoldContext";
import { SnackBar } from "../SnackBars";
import useMeasure, { getWidthSizeClass, WindowSizeClass } from "./useMeasure";

type ScaffoldProps = {
  children?:
    | React.ReactNode
    | ((props: ScaffoldHost | null) => React.ReactNode);
  appBar?: React.ReactNode;
  fab?: React.ReactNode;
  bottomAppBar?: React.ReactElement;
  drawer?: React.ReactNode;
};

const Scaffold = ({ children, ...props }: ScaffoldProps) => {
  const [snackbars, setSnackbars] = useState<React.ReactElement[]>([]);
  const [scaffoldHost, setScaffoldHost] = useState<ScaffoldHost | null>(null);
  const bottomBarRef = React.createRef<HTMLDivElement>();
  const [windowSizeClass, setWindowSizeClass] =
    useState<WindowSizeClass | null>(null);
  const [scaffoldRef, measurable] = useMeasure<HTMLDivElement>();
  useEffect(() => {
    const offset = `${(bottomBarRef.current?.clientHeight || 0) + 16}px`;
    setScaffoldHost({
      showSnackBar: (message, params?: SnackbarParams) => {
        console.log("Showing snackbar");
        setSnackbars([
          <SnackBar
            key={message}
            supportingText={message}
            variant={
              message.length > 60 || message.includes("\n")
                ? "twoLine"
                : "singleLine"
            }
            offset={offset}
            action={params?.action}
            actionCallback={() => {
              setSnackbars([]);
              params?.actionCallback?.();
            }}
          />,
        ]);
      },
      openDrawer: () => {
        console.log("Drawer opened");
      },
    });
  }, []);

  useEffect(() => {
    if (measurable.width > 0) {
      const widthSizeClass = getWidthSizeClass(measurable.width);
      setWindowSizeClass(widthSizeClass);
    }
  }, [measurable.width]);

  return (
    <ScaffoldContext.Provider value={scaffoldHost}>
      <div id={"scaffold"} ref={scaffoldRef}>
        {props.appBar}
        {props.drawer}
        {typeof children === "function" ? children(scaffoldHost) : children}
        {snackbars.map((snackbar, index) =>
          cloneElement(snackbar, {
            align:
              windowSizeClass == WindowSizeClass.Large ||
              windowSizeClass == WindowSizeClass.ExtraLarge
                ? "start"
                : "center",
          })
        )}
        {props.fab}

        {
          // This is a hack to get the height of the bottom bar
          // so that the snackbar can be positioned correctly
          //Add ref to props.bottomAppBar
          props.bottomAppBar &&
            cloneElement(props.bottomAppBar, { innerRef: bottomBarRef })
        }
      </div>
    </ScaffoldContext.Provider>
  );
};
export default Scaffold;
