import React, { useEffect, useState } from "react";

type SwitchProps<T = void> = {
  mode: "ON" | "OFF";
  offIcon?: boolean;
  onIcon?: boolean;
  disable?: boolean;
  onClickCallback: (params : T) => void
};

/**
 * Switch is used to toggle.
 * @params {'ON' | 'OFF'} `mode`: says wheather the toggle is on or off state.
 * @params {boolean} `offIcon` : The close icon to me shown when toggle is off.
 * @params {boolean} `onIcon` : The Check icon to me shown when toggle is on.
 * @params {() => void} `onClickCallback`   : A callback function hits when user toggle's.
 */

const Switch = <T,>(props: SwitchProps<T>) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState(false);
  const [Mode, setMode] = useState(props.mode);

  const handleClick = () => {
    
    if(props.disable) return;

    setMode((prevMode) => (prevMode === "ON" ? "OFF" : "ON"));
    let newMode = Mode;
    
    const params = {} as T;
    try {
        props.onClickCallback(params);
    } catch (error) {
        if(newMode ===  'ON') {setMode('OFF')}
        else(setMode('ON'));
    }

  };

  useEffect(() => {
  }, [Mode]);

  return (
    <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={handleClick}
        style={{
            width: "52px",
            height: "32px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            padding: "4px",
            cursor: props.disable ? "not-allowed" : "pointer",
            outline: props.disable ? "2px solid rgb(var(--md-sys-color-on-surface))" : "2px solid rgb(var(--md-sys-color-outline))",
            background: props.disable && Mode === 'ON' 
                ? 'rgb(var(--md-sys-color-on-surface))' 
                : props.disable && Mode === 'OFF' 
                    ? 'rgb(var(--md-sys-color-surface-container-highest))' 
                    : Mode === "ON"
                        ? "rgb(var(--md-sys-color-primary))"
                        : "rgb(var(--md-sys-color-surface-container-highest))",
            transition: "background 0.3s ease-out",
            opacity: props.disable ? '0.12' : '',
            userSelect: props.disable ? 'none' : 'auto'
        }}
    >
      <div 
        style={{
            width: isPressed ? "20px" : Mode === "ON" ? "28px" : props.offIcon ? "24px" : '16px',
            height: isPressed ? "20px" : Mode === "ON" ? "28px" : props.offIcon ? "24px" : '16px',
            borderRadius: "50%",
            background:props.disable && Mode === 'ON' 
                ? 'rgb(var(--md-sys-color-surface))' 
                : props.disable && Mode === 'OFF' 
                    ? 'rgb(var(--md-sys-color-on-surface))' 
                    : isHovered && Mode === 'ON' 
                        ? 'rgb(var(--md-sys-color-primary-container))' 
                        : isHovered && Mode === 'OFF' 
                            ? 'rgb(var(--md-sys-color-on-surface-variant))' 
                            : Mode === "ON"
                                ? "rgb(var(--md-sys-color-on-primary))"
                                : "rgb(var(--md-sys-color-outline))",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            opacity: props.disable && Mode === 'OFF' ? '0.38' : props.disable && Mode === 'ON' ? '1' : '',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out",
            transform: Mode === "ON" ? "translateX(20px)" : "translateX(0px)",
        }}
    >
        <span
            className="material-symbols-rounded"
            style={{
                color: props.disable && Mode === 'ON' 
                    ? 'rgb(var(--md-sys-color-on-surface))' 
                    : props.disable && Mode === 'OFF' 
                        ? 'rgb(var(--md-sys-color-surface-container-highest))' 
                        :  isHovered && Mode === 'ON' 
                            ? 'rgb(var(--md-sys-color-on-primary-container))' 
                            : isHovered && Mode === 'OFF' 
                                ? 'rgb(var(--md-sys-color-surface-container-highest))' 
                                : Mode === 'ON' 
                                    ? 'rgb(var(--md-sys-color-on-primary-container))' 
                                    : 'rgb(var(--md-sys-color-on-surface-container-highest))',
                fontSize: '16px',
                opacity: props.disable ? '0.38' : ''
            }} 
        >        
          {Mode === "ON" && props.onIcon ? "check" : Mode === "OFF" && props.offIcon ? "close" : ""}
        </span>
      </div>
    </div>
  );
};

export default Switch;
