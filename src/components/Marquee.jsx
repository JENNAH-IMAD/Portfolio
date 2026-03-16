const Marquee = ({ items = [], reverse = false }) => {
  const text = items.join(" ✦ ") + " ✦ ";
  const repeated = text.repeat(4);

  return (
    <div className="overflow-hidden py-4 select-none pointer-events-none">
      <div
        className={`whitespace-nowrap text-[3rem] sm:text-[4rem] md:text-[5rem] font-extrabold uppercase tracking-[0.06em] text-white/[0.04] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {repeated}
      </div>
    </div>
  );
};

export default Marquee;
