import { useState, useEffect } from "react";

export const FocusPomodoro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(25 * 60);
  const [isBreak, setIsBreak] = useState(false);
  const [audio] = useState(new Audio("/bell.wav"));
  useEffect(() => {
    let timer: number | null = null;

    if (isPlaying && selectedTime > 0) {
      timer = setInterval(() => {
        setSelectedTime((prevTime) => {
          if (prevTime <= 1) {
            audio.play();
            if (isBreak) {
              setIsBreak(false);
              setSelectedTime(25 * 60); //pomodoro de nuevo
              setIsPlaying(false); //detener el pomodoro
              return 25 * 60;
            } else {
              setIsBreak(true);
              setSelectedTime(5 * 60); //descanso de nuevo
              setIsPlaying(false); //detener el pomodoro
              return 5 * 60;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    // Limpiar el interval cuando se pausa o el componente se desmonta
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isPlaying, selectedTime]);

  const handlePomodoro = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-slate">Pomodoro Timer</h1>
      <p className="text-md font-bold text-lavender">
        {isBreak ? "chill and serv a mate" : "Time on, lets focus"}
      </p>
      <div className="text-4xl text-slate my-4">{formatTime(selectedTime)}</div>
      <button
        className={`w-30 h-10 rounded-lg ${
          isPlaying
            ? "text-slate bg-cloud border border-seafoam-secondary"
            : "text-cloud bg-seafoam-secondary"
        }`}
        onClick={handlePomodoro}
      >
        {isPlaying ? "Pause" : "Start"}
      </button>
    </div>
  );
};
