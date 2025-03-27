import { useState } from "react";
export const MainMenu = () => {
  //TODO ISFOCUSACTIVE: MAIN CONTENT AND NAV COLOR SHOULD BE DIFFERENT
  //TODO IF !ISFOCUSACTIVE: MAIN CONTENT SHOULD BE AMBIENT SOUNDS

  const [isFocusActive, setIsFocusActive] = useState(false);

  return (
    <article className="w-full h-fit flex flex-col gap-8">
      <div className=" flex items-center  justify-center h-10 w-full ">
        <nav className="w-14/15 h-full flex rounded-md bg-cloud ">
          <div className="flex w-full h-full items-center justify-around">
            <button>Relaxation</button>
            <button>Focus</button>
          </div>
        </nav>
      </div>
      <div className="w-full bg-amber-200 h-200">
        {isFocusActive ? <p>Focus</p> : <p>Relax</p>}
      </div>
    </article>
  );
};
