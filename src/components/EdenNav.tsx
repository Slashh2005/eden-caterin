import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoMark from "@/assets/eden/logo-mark-gold.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Our Services" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Our Menu" },
];

const EdenNav = () => {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => setOpen(false), [pathname, hash]);

  return (
    <header className="relative z-30 bg-ivory">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Link to="/" aria-label="Eden Catering & Hospitality — home" className="shrink-0">
          <img src={logoMark} alt="Eden" className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-10" aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                `font-body text-[0.76rem] uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-forest" : "text-ink-soft hover:text-forest"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/about#enquire"
            className="border border-forest/40 px-5 py-2.5 font-body text-[0.72rem] uppercase tracking-[0.22em] text-forest transition-colors hover:border-forest hover:bg-forest hover:text-ivory"
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          className="font-body text-[0.72rem] uppercase tracking-[0.22em] text-forest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-stone bg-ivory px-6 pb-10 pt-6 md:hidden"
          aria-label="Main"
        >
          <ul className="space-y-5">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end className="font-heading text-3xl text-forest">
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/about#enquire" className="font-heading text-3xl italic text-brass">
                Enquire
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default EdenNav;
