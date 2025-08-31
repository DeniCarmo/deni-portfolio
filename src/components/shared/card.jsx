function Card ({children}) {
  return (
    <section className="w-full max-w-[850px] h-auto min-h-[100px] bg-slate-900 rounded-lg shadow-lg shadow-black/60 p-4">
      {children}
    </section>
  );
}

export default Card;