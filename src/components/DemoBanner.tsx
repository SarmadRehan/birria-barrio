import { brand } from "@/data/birria";

export function DemoBanner() {
  return <p className="bg-verde px-4 py-2 text-center text-sm font-bold text-white">{brand.demoNotice}</p>;
}
