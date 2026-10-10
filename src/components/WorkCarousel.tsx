import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

export type WorkSlide = {
  img: string;
  alt: string;
  label: string;
  title: string;
  cta: string;
  to: string;
};

const AUTO_ADVANCE_MS = 6000;

// A quiet photo carousel: each slide links to a page, with plain previous/next
// controls. It advances slowly on its own unless the visitor is interacting
// with it or prefers reduced motion.
const WorkCarousel = ({ slides }: { slides: WorkSlide[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => emblaApi.scrollNext(), AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [emblaApi, paused]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Our work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div
              key={s.title}
              className="min-w-0 shrink-0 grow-0 basis-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              <Link to={s.to} className="group block focus-visible:outline-none">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="photo transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:opacity-95"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="eyebrow">{s.label}</p>
                    <p className="mt-2 font-heading text-[1.7rem] leading-tight text-forest group-focus-visible:underline">
                      {s.title}
                    </p>
                  </div>
                  <span className="text-link shrink-0">{s.cta}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-stone pt-5">
        <p className="font-heading text-lg italic text-ink-soft tabular-nums" aria-live="polite">
          {index + 1} / {slides.length}
        </p>
        <div className="flex gap-6">
          <button
            type="button"
            onClick={prev}
            className="font-body text-[0.72rem] uppercase tracking-[0.22em] text-forest hover:text-brass"
            aria-label="Previous photo"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={next}
            className="font-body text-[0.72rem] uppercase tracking-[0.22em] text-forest hover:text-brass"
            aria-label="Next photo"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCarousel;
