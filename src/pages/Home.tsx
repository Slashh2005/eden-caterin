import { Link } from "react-router-dom";
import RevealText from "@/components/RevealText";
import Sprig from "@/components/Sprig";
import WorkCarousel, { type WorkSlide } from "@/components/WorkCarousel";
import logoFull from "@/assets/eden/logo-full-gold.png";
import founder from "@/assets/eden/founder.jpg";
import chickenMayo from "@/assets/eden/work-chicken-mayo.jpg";
import meatPlatter from "@/assets/eden/work-meat-platter.jpg";
import closingTable from "@/assets/eden/closing-table.jpg";

const values = [
  {
    title: "Quality Ingredients",
    text: "Fresh produce, bought well and bought close to home where we can.",
  },
  {
    title: "Exceptional Cooking",
    text: "Honest, generous food cooked properly — the kind people ask about afterwards.",
  },
  {
    title: "Excellent Service",
    text: "Reliable, warm and on time, so you get to enjoy your own occasion.",
  },
];

// Client testimonials. Keep quotes to what clients actually said.
const testimonials = [
  {
    quote: "Eden is very organised, and they respect both time and quality.",
    name: "Simone",
    occasion: "Office event",
  },
  {
    quote: "The best food I have ever tasted.",
    name: "Mr Khaba",
    occasion: "Ordered platters",
  },
];

const workSlides: WorkSlide[] = [
  {
    img: chickenMayo,
    alt: "Open chicken mayo sandwiches on toasted bread with lettuce and herbs",
    label: "Our Menu",
    title: "Platters for every gathering",
    cta: "View the menu",
    to: "/menu",
  },
  {
    img: meatPlatter,
    alt: "A full meat platter with glazed wings, boerewors, fatcakes and filled rolls",
    label: "Our Services",
    title: "Catering made around your occasion",
    cta: "See our services",
    to: "/services",
  },
];

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <Sprig data-parallax="0.08" className="pointer-events-none absolute -right-6 top-4 h-52 text-brass-soft/80 md:left-[52%] md:right-auto md:top-12 md:h-64" />
      <div className="relative mx-auto grid max-w-[1320px] gap-12 px-6 pb-24 pt-10 md:grid-cols-12 md:items-end md:gap-8 md:px-10 md:pb-32 md:pt-16">
        <div className="md:col-span-7">
          <img data-reveal="fade" src={logoFull} alt="Eden Catering & Hospitality" className="mb-14 w-56 md:mb-20 md:w-72" />
          <RevealText as="h1" className="text-[2.8rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
            Where Good Food <br className="hidden sm:block" />
            <em className="text-brass">Meets Purpose.</em>
          </RevealText>
        </div>
        <div className="md:col-span-4 md:col-start-9 md:pb-3">
          <p data-reveal="up" data-delay="2" className="max-w-sm border-t border-stone pt-6 text-ink-soft">
            Thoughtfully prepared food, beautifully presented and served with care.
          </p>
          <div data-reveal="up" data-delay="3" className="mt-8 flex flex-wrap gap-4">
            <Link to="/services" className="btn-solid">View Our Services</Link>
            <Link to="/about#enquire" className="btn-outline">Enquire With Us</Link>
          </div>
        </div>
      </div>
    </section>

    {/* Welcome */}
    <section className="relative bg-paper">
            <div className="mx-auto grid max-w-[1320px] gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <figure data-reveal="image" className="md:col-span-5 md:col-start-1 lg:-ml-10">
          <div className="relative aspect-[3/4] w-full overflow-hidden md:translate-y-10">
            <img
              data-parallax="0.05"
              src={founder}
              alt="Khanyisile Zwane, founder of Eden, sitting outdoors in golden evening light"
              className="photo object-[50%_30%]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-forest-deep/15" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 px-7 pb-8 text-ivory md:px-9 md:pb-10 [text-shadow:0_1px_14px_rgba(21,42,32,0.55)]">
              <span className="block font-heading text-[1.6rem] italic leading-none text-ivory/90 md:text-[1.9rem]">
                Meet the founder
              </span>
              <span className="mt-3 block font-heading text-[1.35rem] uppercase leading-tight tracking-[0.18em] md:text-[1.5rem] lg:text-[1.7rem]">
                Khanyisile Zwane
              </span>
            </figcaption>
          </div>
        </figure>
        <div className="md:col-span-6 md:col-start-7 md:pt-10 lg:col-span-5">
          <p data-reveal="fade" className="eyebrow mb-6">Hello</p>
          <RevealText as="h2" className="text-4xl md:text-5xl">Welcome to Eden.</RevealText>
          <p data-reveal="up" data-delay="1" className="mt-8 font-heading text-[1.45rem] leading-snug text-forest/90">
            Eden is a catering and hospitality company created with a simple belief: food should be more than
            something you eat — it should be an experience.
          </p>
          <p data-reveal="up" data-delay="2" className="mt-6 max-w-md text-ink-soft">
            We cook for small tables and full rooms alike, and we treat every one of them as if it were our own.
          </p>
          <Link data-reveal="up" data-delay="3" to="/about" className="text-link mt-10">Our story</Link>
        </div>
      </div>
    </section>

    {/* Values & our work */}
    <section className="bg-linen/70">
      <div className="mx-auto grid max-w-[1320px] gap-16 px-6 py-24 md:grid-cols-12 md:gap-8 md:px-10 md:py-32">
        <div className="md:col-span-5">
          <p data-reveal="fade" className="eyebrow mb-5">What we stand for</p>
          <RevealText as="h2" className="text-4xl md:text-[2.8rem]">
            Good food, <em>made with purpose.</em>
          </RevealText>
          <p data-reveal="up" data-delay="1" className="mt-6 max-w-md text-ink-soft">
            From breakfast platters at a baby shower to a full spread for a community day, everything we serve is
            cooked by hand, packed with care and delivered on time.
          </p>
          <ul className="mt-12 border-b border-stone">
            {values.map((v, i) => (
              <li key={v.title} data-reveal="up" data-delay={i + 1} className="border-t border-stone py-7">
                <h3 className="text-[1.75rem]">{v.title}</h3>
                <p className="mt-1.5 max-w-md text-ink-soft">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal="up" data-delay="2" className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
          <WorkCarousel slides={workSlides} />
        </div>
      </div>
    </section>

    {/* Closing image */}
    <section className="relative">
      <div className="relative h-[78vh] min-h-[480px] w-full overflow-hidden">
        <img data-parallax="0.08" src={closingTable} alt="A table of shared dishes, bread and drinks" className="photo" loading="lazy" />
        <div className="absolute inset-0 bg-forest-deep/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1320px] px-6 pb-16 md:px-10 md:pb-24">
            <RevealText as="h2" className="max-w-xl text-[2.6rem] leading-[1.05] text-ivory md:text-6xl">
              Comfort. <br />
              <em className="text-brass-soft">Made With Purpose.</em>
            </RevealText>
          </div>
        </div>
      </div>

      {/* Kind words */}
      <div className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-28">
          <p data-reveal="fade" className="eyebrow mb-12 md:mb-16">Kind words</p>
          <div className="grid gap-16 md:grid-cols-12 md:gap-8">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                data-reveal="up"
                data-delay={i + 1}
                className={i === 0 ? "md:col-span-5" : "md:col-span-5 md:col-start-8 md:mt-20"}
              >
                <span aria-hidden="true" className="block font-heading text-7xl leading-[0.6] text-brass-soft">
                  &ldquo;
                </span>
                <blockquote className="mt-4 font-heading text-[1.7rem] italic leading-snug text-forest md:text-[2rem]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-brass-soft" aria-hidden="true" />
                  <span>
                    <span className="block font-body text-[0.74rem] uppercase tracking-[0.22em] text-forest">{t.name}</span>
                    <span className="note text-sm">{t.occasion}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div data-reveal="up" className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:px-10 md:py-20">
        <p className="font-heading text-3xl text-forest md:text-[2.4rem]">
          Let Eden take care of the table.
        </p>
        <Link to="/about#enquire" className="btn-solid">Start an Enquiry</Link>
      </div>
    </section>
  </>
);

export default Home;
