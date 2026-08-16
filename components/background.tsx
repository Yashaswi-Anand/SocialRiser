/**
 * Ambient page backdrop: a masked dot grid plus two slow-drifting colour orbs.
 *
 * Deliberately absolute rather than fixed — the glow belongs to the hero and
 * should scroll away with it. Fixed meant the same wash sat behind every
 * section all the way down the page, which buried the cards on a light canvas.
 */
export function Background() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[820px] overflow-hidden"
      >
        <div className="dot-grid absolute inset-0" />

        <div
          className="orb animate-float left-[-10%] top-[-18%] h-[34rem] w-[34rem] bg-violet-500/40"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="orb animate-float right-[-12%] top-[2%] h-[26rem] w-[26rem] bg-sky-400/35"
          style={{ animationDelay: "-11s" }}
        />
      </div>

      {/* Grain sits above the content, not behind it, so cards and panels pick
          up the texture too. Fixed, so it never tiles differently as you scroll. */}
      <div
        aria-hidden="true"
        className="grain pointer-events-none fixed inset-0 z-[100]"
      />
    </>
  );
}
