import { useState, useEffect } from "react";

export const Ambient = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSound, setSelectedSound] = useState<string>("rain");
  const sounds: { name: string; file: string; svg: string }[] = [
    { name: "Rain", file: "/rain.mp3", svg: "/rain.svg" },
    { name: "Ocean", file: "/sea.wav", svg: "/ocean.svg" },
    { name: "Birds", file: "/birds.flac", svg: "/bird.svg" },
    { name: "Wind", file: "/wind.wav", svg: "/wind.svg" },
  ];

  // estado que inicializa con un objeto Audio, y que se actualiza cuando se cambia el sonido seleccionado
  const [audio] = useState(new Audio(sounds[0].file));

  useEffect(() => {
    audio.src =
      sounds.find((sound) => sound.name.toLowerCase() === selectedSound)
        ?.file || "";
    audio.loop = true;
    if (isPlaying) {
      audio.play();
    }
    return () => {
      audio.pause();
    };
  }, [selectedSound, audio]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleSoundSelect = (sound: string) => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
    setSelectedSound(sound.toLowerCase());
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-slate">Ambient Sounds</h1>
      <div className="w-full flex flex-col items-center">
        <div className="w-full h-40 grid grid-cols-2 place-items-center">
          {sounds.map((sound) => (
            <button
              key={sound.name}
              onClick={() => handleSoundSelect(sound.name)}
              className={`w-30 h-10 rounded-lg border border-seafoam-secondary flex items-center justify-center gap-2 ${
                selectedSound === sound.name.toLowerCase()
                  ? "bg-seafoam-secondary text-cloud"
                  : ""
              }`}
            >
              <img src={sound.svg} alt={sound.name} className="w-5 h-5" />
              {sound.name}
            </button>
          ))}
        </div>
        <div>
          <button
            className={`w-30 h-10 rounded-lg ${
              isPlaying
                ? "text-slate bg-cloud border border-seafoam-secondary"
                : "text-cloud bg-seafoam-secondary"
            }`}
            onClick={handlePlayPause}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </>
  );
};
