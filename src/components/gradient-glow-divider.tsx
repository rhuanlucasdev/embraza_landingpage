export const GradientGlowDivider = () => {
  return (
    <div className="relative w-full h-24 -mt-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="gradient-glow-animation" />
    </div>
  );
};
