import { useState } from "react";

export const Ambient = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButton = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-slate">Ambient Sounds</h1>
      <div className="w-full h-40 grid grid-cols-2 place-items-center">
        <button className="w-30 h-10 rounded-lg border border-seafoam-secondary">
          Rain
        </button>
        <button className="w-30 h-10 rounded-lg border border-seafoam-secondary">
          Ocean
        </button>
        <button className="w-30 h-10 rounded-lg border border-seafoam-secondary">
          Bids
        </button>
        <button className="w-30 h-10 rounded-lg border border-seafoam-secondary">
          Wind
        </button>
      </div>
      <div>
        <button
          className={`${
            isPlaying
              ? "w-30 h-10 rounded-lg text-slate bg-cloud border border-seafoam-secondary"
              : "w-30 h-10 rounded-lg text-cloud bg-seafoam-secondary"
          }`}
          onClick={handleButton}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
};
