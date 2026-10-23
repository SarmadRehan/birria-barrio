import { brand, directionsUrl, locations, phoneHref } from "@/data/birria";

import { SectionHeading } from "./SectionHeading";

export function Locations() {
  return (
    <section id="locations" aria-labelledby="locations-title" className="border-t border-snow/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="locations-title"
          eyebrow="San Antonio"
          title="Three Kitchens"
          intro="Dine in, take out or get delivery. All three are closed Monday and Tuesday."
        />

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {locations.map((location) => (
            <li key={location.id} className="flex flex-col overflow-hidden rounded-3xl border border-snow/10 bg-panel">
              <div aria-hidden="true" className="bg-tricolor h-2" />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-light">{location.area}</p>
                <h3 className="mt-1 font-display text-3xl uppercase leading-tight">{location.name}</h3>
                <address className="mt-3 text-lg not-italic leading-relaxed">
                  {location.street}
                  <br />
                  San Antonio, TX {location.postalCode}
                </address>
                {location.opened && <p className="mt-1 text-sm text-mist">{location.opened}</p>}

                <dl className="mt-5 divide-y divide-snow/10 border-y border-snow/10">
                  {location.hours.map((entry) => (
                    <div key={entry.days} className="flex justify-between gap-4 py-2.5">
                      <dt className="font-bold">{entry.days}</dt>
                      <dd className={entry.hours === "Closed" ? "text-mist" : "text-snow"}>{entry.hours}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                  <a
                    href={directionsUrl(`Birria Barrio ${location.mapsQuery}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-verde px-4 py-3 text-center font-bold text-white transition-colors hover:bg-verde/80"
                    aria-label={`Directions to ${location.name}, ${location.street}`}
                  >
                    Directions
                  </a>
                  <a
                    href={phoneHref(brand.phone)}
                    className="rounded-full border border-snow/25 px-4 py-3 text-center font-bold transition-colors hover:border-snow"
                    aria-label={`Call ${location.name} at ${brand.phone}`}
                  >
                    Call
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-mist">
          One number for all three:{" "}
          <a href={phoneHref(brand.phone)} className="font-bold text-verde-light underline underline-offset-4">
            {brand.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
