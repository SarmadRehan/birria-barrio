"use client";

import { createContext, useCallback, useContext, useRef } from "react";

import { brand, orderApps, phoneHref } from "@/data/birria";

import { Wordmark } from "./Wordmark";

const OrderDialogContext = createContext<(() => void) | null>(null);

/** Renders the single "pickup ordering coming soon" panel shared by every order button. */
export function OrderDialogProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = useCallback(() => dialogRef.current?.showModal(), []);
  const close = () => dialogRef.current?.close();

  return (
    <OrderDialogContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="order-dialog-title"
        aria-describedby="order-dialog-description"
        className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-3xl bg-panel p-0 text-snow shadow-2xl backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Clicks on the backdrop land on the <dialog> itself, not its content.
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="bg-checker h-5" />
        <div className="p-7 text-center sm:p-8">
          <Wordmark className="block text-4xl" />
          <p className="mt-5 inline-block rounded-full bg-verde px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
            Coming soon
          </p>
          <h2 id="order-dialog-title" className="mt-3 font-display text-4xl uppercase">
            Order for Pickup
          </h2>
          <p id="order-dialog-description" className="mt-3 leading-relaxed text-mist">
            Ordering for pickup on this site isn&apos;t live yet. For now, order by phone, or through the apps.
          </p>

          <a
            href={phoneHref(brand.phone)}
            className="mt-6 block rounded-full bg-rojo-dark px-6 py-3.5 text-lg font-bold text-white transition-colors hover:bg-rojo-deep"
          >
            Call {brand.phone}
          </a>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {orderApps.map((app) => (
              <a
                key={app.label}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-snow/25 px-4 py-3 font-bold transition-colors hover:border-snow"
              >
                {app.label} <span className="font-normal text-mist">· {app.location}</span>
              </a>
            ))}
          </div>
          <button
            type="button"
            autoFocus
            onClick={close}
            className="mt-5 text-sm font-bold text-mist underline underline-offset-4 hover:text-snow"
          >
            Close
          </button>
        </div>
      </dialog>
    </OrderDialogContext.Provider>
  );
}

type OrderButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function OrderButton({ className, children }: OrderButtonProps) {
  const openDialog = useContext(OrderDialogContext);
  if (!openDialog) throw new Error("OrderButton must be rendered inside OrderDialogProvider");

  return (
    <button type="button" aria-haspopup="dialog" className={className} onClick={openDialog}>
      {children}
    </button>
  );
}
