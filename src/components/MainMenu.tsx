import { useState } from "react";
import { ReproductorWrapper } from "./ReproductorWrapper";
import { Ambient } from "./Ambient";
import { FocusPomodoro } from "./FocusPomodoro";

export const MainMenu = () => {
  //TODO ISFOCUSACTIVE: MAIN CONTENT AND NAV COLOR SHOULD BE DIFFERENT
  //TODO IF !ISFOCUSACTIVE: MAIN CONTENT SHOULD BE AMBIENT SOUNDS

  const [isFocusActive, setIsFocusActive] = useState(false);
  const [isRelaxActive, setIsRelaxActive] = useState(true);
  const handleFocusMenu = () => {
    setIsFocusActive(true);
    setIsRelaxActive(false);
  };

  const handleRelaxMenu = () => {
    setIsRelaxActive(true);
    setIsFocusActive(false);
  };

  return (
    <article className="w-full h-fit flex flex-col gap-8">
      <div className=" flex items-center  justify-center h-10 w-full ">
        <nav className="w-14/15 h-full flex rounded-md bg-cloud ">
          <div className="flex w-full h-full items-center justify-around">
            <button onClick={handleRelaxMenu}>Relaxation</button>
            <button onClick={handleFocusMenu}>Focus</button>
          </div>
        </nav>
      </div>
      <div className="w-full">
        {isFocusActive ? (
          <ReproductorWrapper>
            <FocusPomodoro />
          </ReproductorWrapper>
        ) : isRelaxActive ? (
          <ReproductorWrapper>
            <Ambient />
          </ReproductorWrapper>
        ) : null}
      </div>
    </article>
  );
};
