import { Link } from "react-router-dom";
import logoFull from "@/assets/eden/logo-full-ivory.png";
import { eden } from "@/lib/eden";

const EdenFooter = () => (
  <footer className="bg-forest text-ivory/80">
    <div className="mx-auto max-w-[1320px] px-6 pb-10 pt-20 md:px-10">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <img data-reveal="fade" src={logoFull} alt="Eden Catering & Hospitality" className="w-56 opacity-90" />
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="mb-4 font-body text-[0.68rem] uppercase tracking-[0.26em] text-brass-soft">Visit</p>
          <ul className="space-y-2 font-heading text-xl text-ivory">
            <li><Link to="/" className="hover:text-brass-soft">Home</Link></li>
            <li><Link to="/services" className="hover:text-brass-soft">Our Services</Link></li>
            <li><Link to="/about" className="hover:text-brass-soft">About</Link></li>
            <li><Link to="/menu" className="hover:text-brass-soft">Our Menu</Link></li>
            <li><Link to="/about#enquire" className="hover:text-brass-soft">Enquire</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="mb-4 font-body text-[0.68rem] uppercase tracking-[0.26em] text-brass-soft">Say hello</p>
          <ul className="space-y-2 font-heading text-xl text-ivory">
            <li><a href={eden.instagramHref} target="_blank" rel="noreferrer" className="hover:text-brass-soft">Instagram</a></li>
            <li><a href={eden.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-brass-soft">WhatsApp</a></li>
            <li><Link to="/about#enquire" className="hover:text-brass-soft">Email</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-3 border-t border-ivory/15 pt-6 font-body text-[0.72rem] uppercase tracking-[0.2em] text-ivory/55 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {eden.name}</p>
        <p className="font-heading text-base normal-case italic tracking-normal text-brass-soft">{eden.tagline}</p>
      </div>
    </div>
  </footer>
);

export default EdenFooter;
