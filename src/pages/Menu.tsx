import { Link } from "react-router-dom";
import RevealText from "@/components/RevealText";
import Sprig from "@/components/Sprig";
import { eden } from "@/lib/eden";
import { menuSections, packages, occasions, type MenuSection } from "@/lib/menu";
import canapes from "@/assets/eden/menu-canapes.jpg";
import sweet from "@/assets/eden/menu-sweet.jpg";

const sectionId = (title: string) => title.toLowerCase().replace(/[^a-z]+/g, "-");

const MenuBlock = ({ section }: { section: MenuSection }) => (
  <section id={sectionId(section.title)} data-reveal="up" className="scroll-mt-6">
    <div className="flex items-baseline justify-between gap-4 border-b border-forest/30 pb-3">
      <RevealText as="h2" className="text-[1.9rem] md:text-[2.1rem]">{section.title}</RevealText>
      {section.portion && <p className="note shrink-0 text-base">{section.portion}</p>}
    </div>
    <ul className="mt-4">
      {section.items.map((item) => (
        <li key={item.name} className="py-2.5">
          <div className="flex items-baseline gap-3">
            <span className="font-heading text-[1.3rem] leading-tight text-forest">{item.name}</span>
            <span className="mb-1.5 min-w-6 flex-1 border-b border-dotted border-brass-soft" aria-hidden="true" />
            <span className="font-heading text-[1.3rem] tabular-nums text-forest">{item.price}</span>
          </div>
          {(item.detail || item.serves) && (
            <div className="mt-0.5 flex justify-between gap-6 text-[0.92rem] text-ink-soft">
              <span className="italic">{item.detail}</span>
              {item.serves && <span className="shrink-0">{item.serves}</span>}
            </div>
          )}
        </li>
      ))}
    </ul>
  </section>
);

const Menu = () => {
  const left = menuSections.slice(0, 3);
  const right = menuSections.slice(3);

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-[1320px] px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p data-reveal="fade" className="eyebrow mb-6">Intimate Events</p>
            <RevealText as="h1" className="text-[2.6rem] leading-[1.05] md:text-[4rem]">
              Our Menu <em className="text-brass">&amp; Pricing.</em>
            </RevealText>
            <p data-reveal="up" data-delay="1" className="mt-6 max-w-md font-heading text-[1.35rem] leading-snug text-forest/90">
              Beautiful food. Thoughtful details. An elevated experience.
            </p>
            <p data-reveal="up" data-delay="2" className="mt-5 max-w-md text-ink-soft">
              Platters for brunches, showers and small gatherings. Order them on their own, or choose one
              of our combo packages below. Prices are per platter.
            </p>
            <nav data-reveal="fade" data-delay="3" className="mt-10 flex flex-wrap gap-x-6 gap-y-2" aria-label="Menu sections">
              {menuSections.map((s) => (
                <a key={s.title} href={`#${sectionId(s.title)}`} className="font-heading text-lg italic text-forest/80 hover:text-forest">
                  {s.title}
                </a>
              ))}
              <a href="#packages" className="font-heading text-lg italic text-brass hover:text-forest">
                Combo Packages
              </a>
            </nav>
          </div>
          <figure data-reveal="image" data-delay="1" className="md:col-span-5 md:col-start-8 md:-mr-10 lg:-mr-24">
            <div className="aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <img data-parallax="0.05" src={canapes} alt="Canapés and small bites laid out on a wooden board" className="photo" />
            </div>
            <figcaption className="note mt-3 text-sm md:pr-24">Small bites, plated for a garden shower.</figcaption>
          </figure>
        </div>
      </section>

      {/* The menu */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-6 py-20 md:grid-cols-2 md:gap-x-20 md:px-10 md:py-28 lg:gap-x-28">
          <div className="space-y-16">
            {left.map((s) => (
              <MenuBlock key={s.title} section={s} />
            ))}
            <div data-reveal="image" className="hidden aspect-[4/3] w-4/5 overflow-hidden md:block">
              <img data-parallax="0.05" src={sweet} alt="A slice of layered cake with fresh berries" className="photo" loading="lazy" />
            </div>
          </div>
          <div className="space-y-16 md:pt-24">
            {right.map((s) => (
              <MenuBlock key={s.title} section={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Combo packages */}
      <section id="packages" className="scroll-mt-4 bg-forest text-ivory">
        <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p data-reveal="fade" className="mb-5 font-body text-[0.7rem] uppercase tracking-[0.28em] text-brass-soft">
                Perfect for small gatherings, big moments
              </p>
              <RevealText as="h2" className="text-4xl text-ivory md:text-5xl">
                Intimate Event <em className="text-brass-soft">Combo Packages.</em>
              </RevealText>
            </div>
          </div>

          <div className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((p, i) => (
              <article
                key={p.name}
                data-reveal="up"
                data-delay={i + 1}
                className={`flex flex-col border-t border-ivory/20 pt-8 sm:pr-8 lg:border-t-0 lg:pt-0 ${
                  i > 0 ? "lg:border-l lg:pl-8" : ""
                }`}
              >
                <h3 className="text-[1.65rem] text-ivory">{p.name}</h3>
                <p className="mt-4 font-heading text-[2.6rem] leading-none tabular-nums text-brass-soft">{p.price}</p>
                <p className="mt-2 font-body text-[0.7rem] uppercase tracking-[0.22em] text-ivory/60">{p.serves}</p>
                <ul className="mt-6 flex-1 space-y-1.5 text-[0.95rem] text-ivory/80">
                  {p.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <Link
                  to="/about#enquire"
                  className="mt-8 self-start border-b border-brass-soft/60 pb-1 font-body text-[0.72rem] uppercase tracking-[0.2em] text-ivory hover:border-ivory"
                >
                  Book this package
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="relative mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-32">
        <Sprig data-parallax="0.1" className="pointer-events-none absolute right-10 top-12 hidden h-44 text-brass-soft md:block" />
        <p data-reveal="fade" className="eyebrow mb-6">Perfect for</p>
        <RevealText as="h2" className="max-w-xl text-4xl md:text-5xl">
          These <em>special occasions.</em>
        </RevealText>
        <ul data-reveal="up" data-delay="1" className="mt-10 flex max-w-4xl flex-wrap gap-x-3 gap-y-1 font-heading text-[1.6rem] leading-[1.6] text-forest/90 md:text-[2rem]">
          {occasions.map((o, i) => (
            <li key={o} className="whitespace-nowrap">
              {o}
              {i < occasions.length - 1 && <span className="ml-3 text-brass" aria-hidden="true">·</span>}
            </li>
          ))}
        </ul>
        <ul data-reveal="fade" data-delay="2" className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-stone pt-8 font-body text-[0.72rem] uppercase tracking-[0.22em] text-ink-soft">
          <li>Fresh, quality ingredients</li>
          <li>Beautifully presented</li>
          <li>Reliable &amp; professional service</li>
        </ul>
      </section>

      {/* Book */}
      <section className="bg-linen/70">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-10 px-6 py-20 md:flex-row md:items-center md:px-10">
          <div>
            <RevealText as="p" className="font-heading text-3xl italic text-forest md:text-[2.4rem]">
              Let's make your next event unforgettable.
            </RevealText>
            <p data-reveal="up" data-delay="2" className="mt-3 text-ink-soft">
              DM{" "}
              <a href={eden.instagramHref} target="_blank" rel="noreferrer" className="text-forest underline decoration-brass-soft underline-offset-4">
                {eden.instagramHandle}
              </a>{" "}
              for enquiries and bookings, or send us an enquiry here.
            </p>
          </div>
          <div data-reveal="up" data-delay="3" className="shrink-0">
            <Link to="/about#enquire" className="btn-solid">Book Now</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
