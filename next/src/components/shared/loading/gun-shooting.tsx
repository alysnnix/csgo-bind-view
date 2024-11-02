"use client";

import { useRive, useStateMachineInput } from "@rive-app/react-canvas-lite";
import React from "react";

const STATE_MACHINE_NAME = "State Machine 1";
const TRIGGER_NAME = "Trigger ";

interface Props {
  handleTrigger: () => void;
}

const FireBtn = ({ handleTrigger }: Props) => {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    handleTrigger();
    setCounter(counter + 1);
  };

  return (
    <button
      className="bg-white absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-4 rounded-full text-black font-bold active:scale-90"
      onClick={handleClick}
    >
      Fire! 🔥 {counter}
    </button>
  );
};

export default function GunShooting() {
  const { rive, RiveComponent } = useRive({
    src: "/gunfire.riv",
    animations: ["2nd aniamtion"],
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const triggerInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    TRIGGER_NAME,
  );

  const handleButtonClick = () => {
    if (triggerInput) {
      triggerInput.fire();
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <RiveComponent className="w-full h-full" />
      <FireBtn handleTrigger={handleButtonClick} />
    </div>
  );
}
