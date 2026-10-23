type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, id }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-verde-light">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-5xl uppercase leading-none text-balance sm:text-6xl">
        {title}
      </h2>
      <div aria-hidden="true" className="bg-tricolor mx-auto mt-5 h-1.5 w-24 rounded-full" />
      {intro && <p className="mt-5 text-lg leading-relaxed text-mist">{intro}</p>}
    </div>
  );
}
