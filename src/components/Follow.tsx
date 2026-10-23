import { brand } from "@/data/birria";

const links = [
  { href: brand.facebookUrl, label: "Facebook", handle: "Birria Barrio", followers: brand.facebookFollowers },
  { href: brand.instagramUrl, label: "Instagram", handle: brand.instagramHandle, followers: brand.instagramFollowers },
];

export function Follow() {
  return (
    <section id="follow" aria-labelledby="follow-title" className="border-t border-snow/10 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-verde-light">Follow along</p>
        <h2 id="follow-title" className="mt-3 font-display text-5xl uppercase leading-none sm:text-6xl">
          New Drops & Specials
        </h2>
        <div aria-hidden="true" className="bg-tricolor mx-auto mt-5 h-1.5 w-24 rounded-full" />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.label} className="min-w-0">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-3xl border border-snow/15 bg-panel p-7 text-left transition-colors hover:border-verde-light"
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-verde-light">{link.label}</span>
                <span className="mt-2 block font-display text-3xl break-words uppercase group-hover:text-verde-light">
                  {link.handle}
                </span>
                <span className="mt-1 block text-mist">{link.followers} followers</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
