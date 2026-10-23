import Image from "next/image";

import { brand, heroImage, locations, services } from "@/data/birria";

import { OrderButton } from "./OrderDialog";
import { Wordmark } from "./Wordmark";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-14 sm:px-6 sm:pt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:py-20">
        <div className="text-center lg:text-left">
          <h1 id="hero-title">
            <Wordmark className="text-[2.6rem] min-[360px]:text-6xl sm:text-8xl" />
          </h1>
          <p className="mt-6 font-display text-3xl uppercase leading-[1.05] text-balance sm:text-5xl">
            {brand.tagline}
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            <li className="rounded-full bg-verde px-3.5 py-1.5 text-sm font-bold text-white">
              {locations.length} locations
            </li>
            {services.map((service) => (
              <li key={service} className="rounded-full border border-snow/20 px-3.5 py-1.5 text-sm font-bold">
                {service}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <OrderButton className="w-full rounded-full bg-rojo-dark px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-rojo-deep sm:w-auto">
              Order for pickup
            </OrderButton>
            <a
              href="#locations"
              className="w-full rounded-full border-2 border-verde-light px-8 py-3.5 text-center text-lg font-bold text-verde-light transition-colors hover:bg-verde hover:text-white sm:w-auto"
            >
              Find a location
            </a>
          </div>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="bg-checker absolute -inset-2 rotate-1 rounded-[2rem] sm:-inset-4 sm:rotate-2" />
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border-4 border-ink shadow-2xl">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 36rem, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
