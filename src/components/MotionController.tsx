import { useEffect } from "react";

// Drives the site's scroll motion from one place:
//  - [data-reveal] elements get [data-revealed] the first time they enter
//    the viewport (the transitions themselves are in index.css);
//  - [data-parallax="0.05"] elements drift with scroll at that rate,
//    measured against their parent so the movement never feeds back.
// Motion only runs when <html> has the .motion-ok class, which index.html
// sets unless the visitor prefers reduced motion.
const MotionController = () => {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion-ok")) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    const parallax = new Set<HTMLElement>();
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of parallax) {
        if (!el.isConnected) {
          parallax.delete(el);
          continue;
        }
        const box = (el.parentElement ?? el).getBoundingClientRect();
        if (box.bottom < -200 || box.top > vh + 200) continue;
        const speed = parseFloat(el.dataset.parallax || "0.05");
        const offset = box.top + box.height / 2 - vh / 2;
        // Images are scaled to 114%, so cap the drift inside that spare 7%.
        const limit = el instanceof HTMLImageElement ? el.offsetHeight * 0.065 : Infinity;
        const py = Math.max(-limit, Math.min(limit, -offset * speed));
        el.style.setProperty("--py", `${py.toFixed(1)}px`);
      }
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const scan = () => {
      document.querySelectorAll("[data-reveal]:not([data-revealed])").forEach((el) => io.observe(el));
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => parallax.add(el));
      requestUpdate();
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.getElementById("root") ?? document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
};

export default MotionController;
