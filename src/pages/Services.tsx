import { Link } from "react-router-dom";
import RevealText from "@/components/RevealText";
import Sprig from "@/components/Sprig";
import privateImg from "@/assets/eden/private-gatherings.jpg";
import celebrationsImg from "@/assets/eden/celebrations.jpg";
import corporateImg from "@/assets/eden/corporate-event.jpg";
import hospitalityImg from "@/assets/eden/serving-table.jpg";
import teamStall from "@/assets/eden/eden-team-stall.jpg";

const services = [
  {
    id: "private",
    title: "Private Gatherings",
    lead: "Intimate dinners, family occasions, celebrations and special moments.",
    body: "Some of our favourite evenings happen around a dining room table. We plan a menu with you, cook it properly and serve it the way you'd want your guests looked after — then quietly clear away so the evening can carry on.",
    serves: ["Plated dinners", "Family-style sharing", "Sunday lunches", "Anniversaries"],
    img: privateImg,
    alt: "Friends raising glasses at a candlelit dinner",
    note: "A small dinner for eight.",
  },
  {
    id: "events",
    title: "Events & Celebrations",
    lead: "Catering designed around engagements, launches, celebrations and other memorable occasions.",
    body: "Big days deserve food that people remember for the right reasons. We work around your venue, your guest list and your style — whether that's canapés passed through a garden or a long table laid for a proper feast.",
    serves: ["Engagements", "Milestones", "Launches", "Canapés & grazing tables"],
    img: celebrationsImg,
    alt: "A long table set with flowers, candles and glassware",
    note: "Engagement lunch, laid for forty.",
  },
  {
    id: "corporate",
    title: "Corporate Catering",
    lead: "Professional catering for meetings, corporate functions, staff events and business occasions.",
    body: "Good food makes a working day better. We arrive on time, set up neatly and serve food that feels considered rather than catered — from working lunches to year-end functions.",
    serves: ["Meetings & workshops", "Corporate functions", "Staff events", "Year-end functions"],
    img: corporateImg,
    alt: "Covered platters of filled rolls and chicken laid out for an office celebration",
    note: "An office celebration, set up on the day."
  },
  {
    id: "hospitality",
    title: "Hospitality",
    lead: "A complete hospitality experience combining food, presentation and attentive service.",
    body: "When you'd like everything taken care of, we bring the whole experience: the menu, the table, and a team who know how to look after guests without getting in the way.",
    serves: ["Front-of-house staff", "Table styling", "Beverage service", "Full event service"],
    img: hospitalityImg,
    alt: "Guests passing plates across a busy table",
    note: "Breakfast for the wedding party.",
  },
];

const Services = () => (
  <>
    {/* Header */}
    <section className="relative mx-auto max-w-[1320px] px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-24">
      <Sprig data-parallax="0.1" className="pointer-events-none absolute right-6 top-6 h-36 text-brass-soft/80 md:right-24 md:h-52" />
      <p data-reveal="fade" className="eyebrow mb-6">Our Services</p>
      <RevealText as="h1" className="max-w-3xl text-[2.6rem] leading-[1.05] md:text-[4rem]">
        Catering Made Around <em className="text-brass">Your Occasion.</em>
      </RevealText>
      <div className="mt-10 grid gap-10 md:grid-cols-12">
        <p data-reveal="up" data-delay="1" className="text-ink-soft md:col-span-5">
          Every occasion is different, so we don't work from a fixed package. Eden provides thoughtfully prepared
          food and hospitality for gatherings of every size — and we shape each one around the people, the place and
          the moment.
        </p>
        <ul data-reveal="fade" data-delay="2" className="flex flex-wrap gap-x-8 gap-y-3 self-end md:col-span-6 md:col-start-7 md:justify-end">
          {services.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="font-heading text-xl italic text-forest/80 hover:text-forest">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Services */}
    {services.map((s, i) => {
      const flip = i % 2 === 1;
      return (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-6 ${flip ? "bg-paper" : ""}`}
        >
          <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-20 md:grid-cols-12 md:gap-8 md:px-10 md:py-28">
            <figure
              data-reveal="image"
              className={`md:col-span-7 ${flip ? "md:order-2 md:col-start-6 md:-mr-10 lg:-mr-24" : "md:-ml-10 lg:-ml-24"}`}
            >
              <div className={`overflow-hidden ${i % 3 === 0 ? "aspect-[4/3]" : "aspect-[5/4]"}`}>
                <img data-parallax="0.05" src={s.img} alt={s.alt} className="photo" loading={i === 0 ? "eager" : "lazy"} />
              </div>
              <figcaption className={`note mt-3 text-sm ${flip ? "md:pr-24" : "text-right md:pl-24"}`}>
                {s.note}
              </figcaption>
            </figure>

            <div
              className={`flex flex-col justify-center md:col-span-4 ${
                flip ? "md:order-1 md:col-start-1" : "md:col-start-9"
              }`}
            >
              <span data-reveal="fade" className="font-heading text-lg italic text-brass">0{i + 1}</span>
              <RevealText as="h2" className="mt-3 text-4xl md:text-[2.75rem]">{s.title}</RevealText>
              <p data-reveal="up" data-delay="1" className="mt-5 font-heading text-[1.3rem] leading-snug text-forest/90">{s.lead}</p>
              <p data-reveal="up" data-delay="2" className="mt-5 text-ink-soft">{s.body}</p>
              <ul data-reveal="fade" data-delay="3" className="mt-7 border-t border-stone pt-5 text-[0.95rem] text-ink-soft">
                {s.serves.map((item) => (
                  <li key={item} className="py-1">
                    <span className="mr-3 text-brass">·</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link data-reveal="up" data-delay="3" to="/about#enquire" className="text-link mt-9 self-start">Enquire</Link>
            </div>
          </div>
        </section>
      );
    })}

    {/* Tell us */}
    <section className="bg-forest text-ivory">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-6">
          <p data-reveal="fade" className="mb-6 font-body text-[0.7rem] uppercase tracking-[0.28em] text-brass-soft">No complicated forms</p>
          <RevealText as="h2" className="text-4xl text-ivory md:text-5xl">
            Tell us what <em className="text-brass-soft">you're planning.</em>
          </RevealText>
          <p data-reveal="up" data-delay="1" className="mt-6 max-w-md text-ivory/75">
            A date, a rough number of guests and the kind of occasion is all we need to start. We'll come back to
            you personally with ideas and a quote.
          </p>
          <div data-reveal="up" data-delay="2" className="mt-10">
            <Link to="/about#enquire" className="btn-light">Send an Enquiry</Link>
          </div>
        </div>
        <div data-reveal="image" data-delay="1" className="md:col-span-5 md:col-start-8">
          <div className="aspect-[4/5] overflow-hidden md:-mb-40 md:translate-y-4">
            <img data-parallax="0.05" src={teamStall} alt="Two of the Eden team smiling with thumbs up behind a stall table of Eden bowls and treats" className="photo object-[50%_60%]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
    <div className="hidden h-36 md:block" />
  </>
);

export default Services;
