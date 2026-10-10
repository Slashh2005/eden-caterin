import RevealText from "@/components/RevealText";
import { FormEvent, useState } from "react";
import Sprig from "@/components/Sprig";
import { eden, eventTypes } from "@/lib/eden";
import edenStall from "@/assets/eden/eden-stall.jpg";
import prepHerbs from "@/assets/eden/prep-herbs.jpg";
import dish from "@/assets/eden/about-dish.jpg";
import tableSetting from "@/assets/eden/about-table-setting.jpg";
import hospitalityTable from "@/assets/eden/hospitality.jpg";

const About = () => {
  const [sent, setSent] = useState(false);

  // No server yet: the enquiry opens in the visitor's email app, addressed to Eden.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Enquiry: ${get("eventType") || "Event"}${get("date") ? ` on ${get("date")}` : ""}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Event date: ${get("date")}`,
      `Event type: ${get("eventType")}`,
      `Number of guests: ${get("guests")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${eden.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      {/* Story */}
      <section className="mx-auto max-w-[1320px] px-6 pb-24 pt-14 md:px-10 md:pb-32 md:pt-24">
        <p data-reveal="fade" className="eyebrow mb-6">About Eden</p>
        <RevealText as="h1" className="max-w-3xl text-[2.6rem] leading-[1.05] md:text-[4rem]">
          The Story <em className="text-brass">Behind Eden.</em>
        </RevealText>

        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-8">
          <div data-reveal="image" className="md:col-span-5 md:-ml-10 lg:-ml-24">
            <div className="aspect-[3/4] overflow-hidden">
              <img data-parallax="0.05" src={edenStall} alt="Smiling behind the Eden table at an outdoor stall, with Eden-labelled bowls in front" className="photo" />
            </div>
            <p className="note mt-3 text-right text-sm">Behind the Eden table.</p>
          </div>

          <div className="space-y-6 text-ink-soft md:col-span-5 md:col-start-7 md:pt-16">
            <p data-reveal="up" data-delay="1" className="font-heading text-[1.5rem] leading-snug text-forest">
              Eden started the way a lot of good things do — cooking for people we love, and noticing how a
              shared meal changes a room.
            </p>
            <p data-reveal="up">
              Friends began asking us to cook for their family gatherings, then their parents' anniversaries, then their
              office year-ends. Somewhere along the way it stopped being a favour and became the work we wanted to
              do every day.
            </p>
            <p data-reveal="up">
              We're still a small, hands-on team, and we like it that way. We plan every menu ourselves, we're in
              the kitchen on the day, and we're the ones making sure your guests are looked after. You'll always know
              who you're dealing with.
            </p>
            <p data-reveal="up">
              We cook the food we believe in: fresh, generous and properly seasoned, with a nod to the South African
              tables we grew up around. Nothing fussy for the sake of it — just good food, served beautifully and
              with care.
            </p>
            <p data-reveal="fade" className="note pt-2 text-lg text-forest/80">— Khanyisile Zwane</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative bg-linen/70">
        <Sprig data-parallax="0.1" className="pointer-events-none absolute bottom-8 left-16 hidden h-44 text-brass-soft md:block" />
        <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-32">
          <div className="md:ml-[25%] md:max-w-3xl">
            <p data-reveal="fade" className="eyebrow mb-8">Our Philosophy</p>
            <RevealText as="blockquote" className="font-heading text-[2rem] leading-[1.25] text-forest md:text-[2.6rem]">
              Good food brings people together. At Eden, we believe the details matter — from the ingredients we
              choose to the way every plate reaches the table.
            </RevealText>
          </div>
        </div>
      </section>

      {/* Photography */}
      <section className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <figure data-reveal="image" className="md:col-span-4">
            <div className="aspect-[3/4]">
              <img src={prepHerbs} alt="Chopping fresh herbs on a board" className="photo" loading="lazy" />
            </div>
            <figcaption className="mt-4">
              <span className="eyebrow">Preparation</span>
              <p className="note mt-1 text-base">Herbs picked and chopped the morning of.</p>
            </figcaption>
          </figure>
          <figure data-reveal="image" data-delay="1" className="md:col-span-5 md:mt-28">
            <div className="aspect-[4/5]">
              <img src={dish} alt="Seared salmon on vegetables in a white bowl, with wine glasses behind" className="photo" loading="lazy" />
            </div>
            <figcaption className="mt-4">
              <span className="eyebrow">Plating</span>
              <p className="note mt-1 text-base">Every plate checked before it leaves the pass.</p>
            </figcaption>
          </figure>
          <figure data-reveal="image" data-delay="2" className="md:col-span-3 md:mt-12">
            <div className="aspect-[3/4]">
              <img src={tableSetting} alt="A long table laid with plates, cutlery, folded napkins and small vases of flowers" className="photo object-[35%_50%]" loading="lazy" />
            </div>
            <figcaption className="mt-4">
              <span className="eyebrow">The Table</span>
              <p className="note mt-1 text-base">Laid with care, down to the last fork.</p>
            </figcaption>
          </figure>
        </div>
        <figure data-reveal="image" className="mt-16 md:ml-[33%] md:mt-24">
          <div className="aspect-[16/9] overflow-hidden">
            <img data-parallax="0.06" src={hospitalityTable} alt="An outdoor table full of shared dishes and drinks" className="photo" loading="lazy" />
          </div>
          <figcaption className="mt-4">
            <span className="eyebrow">Hospitality</span>
            <p className="note mt-1 text-base">The part we love most — a full table and nobody in a hurry.</p>
          </figcaption>
        </figure>
      </section>

      {/* Contact */}
      <section id="enquire" className="scroll-mt-4 bg-paper">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-6 py-24 md:grid-cols-12 md:gap-8 md:px-10 md:py-32">
          <div className="md:col-span-4">
            <p data-reveal="fade" className="eyebrow mb-6">Enquire</p>
            <RevealText as="h2" className="text-4xl md:text-5xl">
              Let's create something <em className="text-brass">memorable.</em>
            </RevealText>
            <p data-reveal="up" data-delay="1" className="mt-6 text-ink-soft">
              Tell us a little about your occasion and we'll be in touch personally, usually within a day or two.
            </p>

            <dl data-reveal="fade" data-delay="2" className="mt-12 space-y-6 border-t border-stone pt-8">
              <div>
                <dt className="field-label">Email</dt>
                <dd><a href={`mailto:${eden.email}`} className="font-heading text-xl text-forest hover:text-brass">{eden.email}</a></dd>
              </div>
              <div>
                <dt className="field-label">Phone & WhatsApp</dt>
                <dd className="flex flex-wrap items-baseline gap-x-4">
                  <a href={eden.phoneHref} className="font-heading text-xl text-forest hover:text-brass">{eden.phoneDisplay}</a>
                  <a href={eden.whatsappHref} target="_blank" rel="noreferrer" className="text-sm text-ink-soft underline decoration-brass-soft underline-offset-4 hover:text-forest">
                    Message on WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="field-label">Instagram</dt>
                <dd><a href={eden.instagramHref} target="_blank" rel="noreferrer" className="font-heading text-xl text-forest hover:text-brass">{eden.instagramHandle}</a></dd>
              </div>
              <div>
                <dt className="field-label">Where we cater</dt>
                <dd className="font-heading text-xl text-forest">{eden.area}</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            {sent ? (
              <div className="border-t border-stone pt-10">
                <p className="font-heading text-3xl text-forest">Thank you.</p>
                <p className="mt-4 max-w-md text-ink-soft">
                  Your email app should have opened with your enquiry ready to send. If it didn't, write to us
                  directly at{" "}
                  <a href={`mailto:${eden.email}`} className="text-forest underline decoration-brass-soft underline-offset-4">{eden.email}</a>{" "}
                  or send us a WhatsApp.
                </p>
                <button type="button" onClick={() => setSent(false)} className="text-link mt-8">
                  Back to the form
                </button>
              </div>
            ) : (
              <form data-reveal="up" data-delay="1" onSubmit={handleSubmit} className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
                <label className="block">
                  <span className="field-label">Name</span>
                  <input name="name" required autoComplete="name" className="field" />
                </label>
                <label className="block">
                  <span className="field-label">Email</span>
                  <input name="email" type="email" required autoComplete="email" className="field" />
                </label>
                <label className="block">
                  <span className="field-label">Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" className="field" />
                </label>
                <label className="block">
                  <span className="field-label">Event date</span>
                  <input name="date" type="date" className="field" />
                </label>
                <label className="block">
                  <span className="field-label">Event type</span>
                  <select name="eventType" defaultValue="" className="field cursor-pointer">
                    <option value="" disabled>Choose one</option>
                    {eventTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="field-label">Number of guests</span>
                  <input name="guests" type="number" min={1} inputMode="numeric" className="field" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="field-label">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="The occasion, the venue, any dietary needs — whatever you'd like us to know."
                    className="field resize-none"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-solid">Send Enquiry</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
