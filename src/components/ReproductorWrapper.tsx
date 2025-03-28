type Props = {
  children: React.ReactNode;
};

export const ReproductorWrapper = ({ children }: Props) => {
  return (
    <div className="w-full h-full p-2">
      <article className="w-full h-90 bg-cloud p-5 flex flex-col items-center justify-center rounded-2xl">
        {children}
      </article>
    </div>
  );
};
