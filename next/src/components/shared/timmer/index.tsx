"use client";

import React from "react";

import styles from "./styles.module.css";

import { IDiv } from "@/types/jsx";
import { cn } from "@/lib/utils";

interface CircleCountDownProps extends IDiv {
  time: number;
  size: number;
  stroke: string;
  strokeWidth: number;
  onComplete?: VoidFunction;
  color?: string;
  strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
}

const CircleCountDown: React.FC<CircleCountDownProps> = ({
  time,
  size,
  stroke,
  onComplete,
  strokeWidth,
  strokeLinecap = "round",
  color = "black",
  ...rest
}) => {
  const radius = size / 2;
  const milliseconds = time * 1000;
  const circumference = size * Math.PI;

  const [countdown, setCountdown] = React.useState(milliseconds);

  const seconds = (countdown / 1000).toFixed();

  const strokeDashoffset =
    circumference - (countdown / milliseconds) * circumference;

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 10);
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 10);

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div
      className={cn(
        "opacity-0 animate-fade-up animate-delay-300 animate-duration-500 animate-fill-forwards",
        "flex flex-col items-center justify-center bg-foreground-100 bg-opacity-80",
        "rounded-full shadow-lg border-2 border-foreground-200",
        rest.className,
      )}
    >
      <label className={cn("text-primary", styles.seconds)}>
        {seconds}
        <span className="text-sm">s</span>
      </label>
      <div className={styles.countDownContainer}>
        <svg className={styles.svg} height={size} width={size}>
          <circle
            className="stroke-primary"
            cx={radius}
            cy={radius}
            fill="none"
            r={radius}
            stroke={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap={strokeLinecap}
            strokeWidth={strokeWidth}
          />
        </svg>
      </div>
    </div>
  );
};

export default CircleCountDown;
