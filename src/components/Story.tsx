import Image from "next/image";

import { story, storyImage } from "@/data/birria";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="border-t border-snow/10 bg-panel py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <figure className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-snow/10">
            <Image
              src={storyImage.src}
              alt={storyImage.alt}
              fill
              sizes="(min-width: 1024px) 34rem, 92vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-mist">From the Birria Barrio Facebook page</figcaption>
        </figure>

        <div className="text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-verde-light">Our story</p>
          <h2 id="story-title" className="mt-3 font-display text-5xl uppercase leading-none text-balance sm:text-6xl">
            It Started With a Truck
          </h2>
          <div aria-hidden="true" className="bg-tricolor mx-auto mt-5 h-1.5 w-24 rounded-full lg:mx-0" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-mist">
            {story.map((sentence) => (
              <p key={sentence}>{sentence}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
