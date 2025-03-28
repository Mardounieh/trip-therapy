const DottedBackground = ({dots = 150}) => {
  return (
    <div className="absolute inset-0  pointer-events-none overflow-hidden bg-grid-slate-900/[0.04] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
      <div className="absolute inset-0">
        {[...Array(dots)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-[2px] h-[2px] rounded-full animate-floating ${
              i % 2 === 0
                ? "shadow-[0_0_5px_rgba(147,51,234)]"
                : "shadow-[0_0_5px_rgba(56,189,248)]"
            }`}
            style={{
              backgroundColor:
                i % 2 === 0
                  ? "rgba(147, 51, 234, 0.6)"
                  : "rgba(56, 189, 248, 0.6)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DottedBackground;