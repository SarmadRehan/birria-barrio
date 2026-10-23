import { brand, phoneHref } from "@/data/birria";

import { OrderButton } from "./OrderDialog";

/** Thumb-reachable call, order and locations buttons, shown on small screens only. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_1.5fr_1fr] gap-2 border-t border-snow/10 bg-ink/95 p-3 text-sm backdrop-blur min-[360px]:text-base md:hidden">
      <a href={phoneHref(brand.phone)} className="rounded-full border border-snow/25 py-3 text-center font-bold">
        Call
      </a>
      <OrderButton className="rounded-full bg-rojo-dark py-3 text-center font-bold text-white">Order pickup</OrderButton>
      <a href="#locations" className="rounded-full border border-snow/25 py-3 text-center font-bold">
        Locations
      </a>
    </div>
  );
}
