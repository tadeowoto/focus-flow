type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="w-full min-h-screen bg-mist-background">
      <div className="flex flex-col gap-2 items-center p-10 w-full h-60 ">
        <h1 className="text-4xl font-bold text-slate">FocusFlow</h1>
        <p className="text-center tracking-wide font-semibold text-slate ">
          Enhance your concentration and productivity
        </p>
      </div>
      {children}
    </main>
  );
};
