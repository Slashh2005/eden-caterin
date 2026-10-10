# Eden Catering & Hospitality

The website for Eden Catering & Hospitality — *Comfort, Made With Purpose.*

Four pages: Home, Our Services, Our Menu, and About & Contact (with the enquiry form).

## Run it locally

```sh
npm install
npm run dev      # local preview at http://localhost:8080
npm run build    # production build in dist/
```

## Where to change things

| What | File |
| --- | --- |
| Email, phone, WhatsApp, Instagram, service area | `src/lib/eden.ts` |
| Menu items, prices, combo packages, occasions | `src/lib/menu.ts` |
| Page content | `src/pages/` (`Home.tsx`, `Services.tsx`, `Menu.tsx`, `About.tsx`) |
| Photos and logo | `src/assets/eden/` |
| Colours, fonts, animation timings | `src/index.css`, `tailwind.config.ts` |

Built with React, Vite and Tailwind CSS.
