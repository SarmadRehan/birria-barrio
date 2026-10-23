import { brand, locations, phoneHref } from "@/data/birria";

import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-snow/10 bg-ink text-mist">
      <div aria-hidden="true" className="bg-checker h-6" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Wordmark className="text-5xl" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{brand.tagline}.</p>
          <p className="mt-4 flex gap-4 text-sm">
            <a href={phoneHref(brand.phone)} className="font-bold text-snow hover:text-verde-light">
              {brand.phone}
            </a>
            <a href={brand.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-snow">
              Facebook
            </a>
            <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-snow">
              Instagram
            </a>
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-3">
          {locations.map((location) => (
            <li key={location.id}>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-verde-light">{location.area}</h2>
              <address className="mt-2 text-sm not-italic leading-relaxed">
                {location.street}
                <br />
                San Antonio, TX {location.postalCode}
              </address>
              <ul className="mt-1 text-sm">
                {location.hours.map((entry) => (
                  <li key={entry.days}>
                    {entry.days}: {entry.hours}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-28 sm:px-6 md:pb-10">
        <p className="rounded-full bg-verde px-4 py-2.5 text-center text-sm font-bold text-white">{brand.demoNotice}</p>
      </div>
    </footer>
  );
}
