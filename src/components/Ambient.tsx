export const Ambient = () => {
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
        <button className="w-30 h-10 rounded-lg text-cloud bg-seafoam-secondary">
          Play
        </button>
      </div>
    </>
  );
};
