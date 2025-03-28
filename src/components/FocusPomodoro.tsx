import { useState } from "react";

export const FocusPomodoro = () => {
  const [selectedTime, setSelectedTime] = useState(25);

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(parseInt(event.target.value));
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-slate">Pomodoro</h1>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <select
          value={selectedTime}
          onChange={handleTimeChange}
          className="h-10 p-2 rounded-lg border text-slate-700 border-seafoam-secondary bg-cloud"
        >
          <option value={25}>25 minutes</option>
          <option value={30}>30 minutes</option>
          <option value={50}>50 minutes</option>
          <option value={60}>60 minutes</option>
        </select>
        <p className="text-6xl font-semibold text-slate">{selectedTime}:00</p>
      </div>
      <div className="w-full flex items-center justify-evenly">
        <button className="w-30 h-10 rounded-lg text-cloud bg-seafoam-secondary">
          Play
        </button>
        <button className="w-30 h-10 rounded-lg text-slate bg-cloud border border-seafoam-secondary">
          Restart
        </button>
      </div>
    </>
  );
};
