const DottedBackground = () => {
  return (
    <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden bg-grid-slate-900/[0.04] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
      {/* لایه اول نقطه‌ها */}
      <div className="absolute inset-0">
        {[...Array(250)].map((_, i) => (
          <div
            key={i}
            className={`${i%2 === 0 ? "bg-purple-700/60" : "bg-sky-700/60"} absolute w-[2px] h-[2px] rounded-full animate-twinkle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DottedBackground;