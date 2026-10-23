import Image from "next/image";

import { menu, type MenuItem } from "@/data/birria";

import { SectionHeading } from "./SectionHeading";

export function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="border-t border-snow/10 bg-panel py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="menu-title"
          eyebrow="Birria everything"
          title="The Menu"
          intro="Beef birria and its consomé, in tacos, ramen, grilled cheese, egg rolls and more."
        />

        {/* The brief puts birria ramen and quesabirria first, so they get their own row. */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {menu.slice(0, 2).map((item) => (
            <MenuCard key={item.id} item={item} featured />
          ))}
        </ul>
        <ul className="mt-5 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {menu.slice(2).map((item) => (
            <MenuCard key={item.id} item={item} featured={false} />
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-xl text-center text-mist">
          Some items can vary by location, so ask when you order.
        </p>
      </div>
    </section>
  );
}

function MenuCard({ item, featured }: { item: MenuItem; featured: boolean }) {
  return (
    <li
      className={`flex break-inside-avoid flex-col overflow-hidden rounded-3xl border ${featured ? "" : "mb-5"} ${
        item.photo ? "bg-ink" : "border-verde bg-verde text-white"
      } ${featured ? "border-rojo-dark" : item.photo ? "border-snow/10" : ""}`}
    >
      {item.photo ? (
        <div className={`relative ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <Image
            src={item.photo.src}
            alt={item.photo.alt}
            fill
            sizes={featured ? "(min-width: 640px) 34rem, 92vw" : "(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 92vw"}
            className="object-cover"
          />
        </div>
      ) : (
        <div aria-hidden="true" className="bg-checker h-4" />
      )}
      <div className="flex flex-col p-6">
        <h3 className={`font-display uppercase leading-tight ${featured ? "text-4xl" : "text-3xl"}`}>{item.name}</h3>
        {item.description ? (
          <p className={`mt-2 leading-relaxed ${item.photo ? "text-mist" : "text-white/90"}`}>{item.description}</p>
        ) : (
          <p className="mt-2 leading-relaxed text-white/90 italic">Ask at the counter what goes in it.</p>
        )}
        {item.note && <p className="mt-4 text-sm font-bold text-verde-light">{item.note}</p>}
      </div>
    </li>
  );
}
