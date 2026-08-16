/**
 * Ambient page backdrop: a masked dot grid plus two slow-drifting colour orbs.
 * Fixed and non-interactive, so it sits behind every page without affecting layout.
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="dot-grid absolute inset-0" />

      <div
        className="orb animate-float left-[-12%] top-[-16%] h-[38rem] w-[38rem] bg-violet-500/40"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="orb animate-float right-[-14%] top-[6%] h-[30rem] w-[30rem] bg-sky-400/35"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
