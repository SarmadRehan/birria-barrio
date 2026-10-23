import type { StaticImageData } from "next/image";

import birriaRamen from "@/assets/images/birria-ramen.jpg";
import eggRolls from "@/assets/images/egg-rolls.jpg";
import grilledCheese from "@/assets/images/grilled-cheese.jpg";
import hotCheetoBalls from "@/assets/images/hot-cheeto-balls.jpg";
import presaNight from "@/assets/images/presa-night.jpg";
import quesabirria from "@/assets/images/quesabirria.jpg";
import quesabirriaTray from "@/assets/images/quesabirria-tray.jpg";
import quesadilla from "@/assets/images/quesadilla.jpg";

// Every fact comes from the verified table in the demo brief (checked 2026-10-23) unless a
// comment names another source. Anything not sourced is left out.
export const brand = {
  name: "Birria Barrio",
  tagline: "From a food truck on Presa to three San Antonio kitchens",
  description:
    "Birria Barrio serves birria tacos with consomé, quesabirria, birria ramen and more from three San Antonio kitchens: Southtown, S Flores and Pinn Rd.",
  demoNotice: "Demo by Sarmad Rehan · not the official Birria Barrio website",
  // Google Maps lists the same number for all three locations.
  phone: "(210) 289-4066",
  facebookUrl: "https://www.facebook.com/Birriabarrio",
  facebookFollowers: "28K",
  instagramUrl: "https://www.instagram.com/birriabarrio/",
  instagramHandle: "@birriabarrio",
  instagramFollowers: "6.8K",
  timeZone: "America/Chicago",
} as const;

export function phoneHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

// Their app storefronts, for the "order by phone or app for now" panel. The DoorDash link is their
// DoorDash-powered order.online store for S Flores; the Uber Eats store is S Alamo. Neither app
// listing turned up for Pinn Rd.
export const orderApps = [
  { label: "DoorDash", location: "S Flores", href: "https://order.online/store/birria-barrio-y-mas-s-flores-st-24619894" },
  { label: "Uber Eats", location: "S Alamo", href: "https://www.ubereats.com/store/birria-barrio-s-alamo/NFov-gWhT0ijFa1i3XtVYg" },
] as const;

export type Photo = { src: StaticImageData; alt: string };

// Photos only from Birria Barrio's own Instagram and Facebook posts.
export const heroImage: Photo = {
  src: quesabirriaTray,
  alt: "Five quesabirria tacos on red-and-white checkered paper in a red tray, with salsa verde, an orange salsa, cilantro, onion, lime and a cup of consomé",
};

export const storyImage: Photo = {
  src: presaNight,
  alt: "A Birria Barrio food stand at night under orange canopies and string lights, with picnic tables and a bus painted in serape stripes",
};

export type MenuItem = {
  id: string;
  name: string;
  /** From their own order.online menu (S Flores), lightly trimmed; null where no source describes it. */
  description: string | null;
  photo?: Photo;
  note?: string;
};

// Order from the brief: birria ramen and quesabirria first. Descriptions: their DoorDash-powered
// order.online menu for the S Flores location (read 2026-10-23), prices left off.
export const menu: MenuItem[] = [
  {
    id: "ramen",
    name: "Birria ramen",
    description: "Ramen filled with birria consomé, topped with onion and cilantro.",
    photo: { src: birriaRamen, alt: "A cup of ramen in deep red birria consomé with onion and cilantro, on a serape-striped table" },
  },
  {
    id: "quesabirria",
    name: "Quesabirria",
    description:
      "Corn tortilla tacos filled with melted cheese, tender beef birria, onion and cilantro. Served with lime, salsa verde and consomé for dipping.",
    photo: { src: quesabirria, alt: "Crisp quesabirria tacos stuffed with shredded beef birria and melted cheese" },
  },
  {
    id: "tacos",
    name: "Birria tacos with consomé",
    description:
      "Soft corn tortillas filled with tender beef birria, onion and cilantro, with lime, salsa verde and a cup of consomé on the side. No cheese; for that, get the quesabirria.",
  },
  {
    id: "grilled-cheese",
    name: "Birria grilled cheese",
    description:
      "Beef birria melted between golden, crispy grilled cheese, topped with onion and cilantro. Served with consomé for dipping, lime, salsa verde and warm tortillas.",
    photo: { src: grilledCheese, alt: "A birria grilled cheese cut in half on checkered paper, with consomé, two salsas, lime, cilantro and onion" },
  },
  {
    id: "mac",
    name: "Birria mac & cheese",
    description:
      "Tender beef birria and creamy mac and cheese, topped with onion and cilantro, with lime and salsa verde. Hot Cheetos optional for an extra kick.",
  },
  {
    id: "egg-rolls",
    name: "Birria egg rolls",
    description: "Crispy egg rolls stuffed with beef birria and melted cheese, served with lime, salsa and consomé for dipping.",
    photo: { src: eggRolls, alt: "Three golden birria egg rolls on checkered paper with consomé, salsa verde, an orange salsa, lime, cilantro and onion" },
    // Their Instagram, Dec 4, 2024.
    note: "Launched at the S Flores location",
  },
  {
    id: "cheeto-balls",
    name: "Hot Cheeto birria balls",
    description:
      "Two crispy, spicy Hot Cheeto-coated balls filled with birria, melted cheese and rice, with onion, cilantro, lime, red salsa and consomé.",
    photo: { src: hotCheetoBalls, alt: "Two bright red Hot Cheeto-crusted birria balls on checkered paper with consomé, salsa, lime, cilantro and onion" },
    // Their Instagram, May 1, 2024.
    note: "Launched at the S Flores location",
  },
  {
    id: "keto",
    name: "Keto taco",
    description: "A cheese-shell taco filled with birria, onion and cilantro, with lime, salsa verde and consomé on the side.",
  },
  {
    id: "quesadillas",
    name: "Quesadillas",
    description: "A warm flour tortilla with your choice of meat, melted cheese, onion and cilantro. Comes small or large.",
    photo: { src: quesadilla, alt: "A grilled flour-tortilla quesadilla cut in wedges with grilled onions, peppers, lime and three salsas" },
  },
  {
    id: "bowl",
    name: "Birria bowl",
    // On Google's menu highlights, but no source describes what's in it.
    description: null,
  },
];

export type DayHours = { days: string; hours: string };

export type Location = {
  id: string;
  name: string;
  area: string;
  street: string;
  postalCode: string;
  hours: DayHours[];
  opened?: string;
  mapsQuery: string;
};

// Addresses and hours: Google Maps. Opening dates: Google Maps and CultureMap (2025-06-17).
// 2710 S Presa St is left out: Yelp still lists it, but Google Maps and Facebook don't.
export const locations: Location[] = [
  {
    id: "alamo",
    name: "Birria Barrio Southtown",
    area: "Southtown",
    street: "1203 S Alamo St",
    postalCode: "78210",
    hours: [
      { days: "Wed – Sun", hours: "2pm – 12am" },
      { days: "Mon – Tue", hours: "Closed" },
    ],
    opened: "Opened June 2025",
    mapsQuery: "1203 S Alamo St, San Antonio, TX 78210",
  },
  {
    id: "flores",
    name: "Birria Barrio y Más",
    area: "S Flores",
    street: "6203 S Flores St",
    postalCode: "78214",
    hours: [
      { days: "Wed – Thu, Sun", hours: "2pm – 12am" },
      { days: "Fri – Sat", hours: "2pm – 2am" },
      { days: "Mon – Tue", hours: "Closed" },
    ],
    mapsQuery: "6203 S Flores St, San Antonio, TX 78214",
  },
  {
    id: "pinn",
    name: "Birria Barrio Pinn Rd",
    area: "Pinn Rd",
    street: "2403 Pinn Rd",
    postalCode: "78227",
    hours: [
      { days: "Wed – Sun", hours: "3pm – 11:30pm" },
      { days: "Mon – Tue", hours: "Closed" },
    ],
    opened: "Opened May 2025",
    mapsQuery: "2403 Pinn Rd, San Antonio, TX 78227",
  },
];

export function directionsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

// Google Maps (dine-in, takeout, delivery); DoorDash and Uber Eats.
export const services = ["Dine-in", "Takeout", "Delivery"];

// KSAT (2021-09-14), MySA (2023-12-01), CultureMap (2025-06-17).
export const story = [
  "Husband and wife Martin Bargas and Sabrina Perez started Birria Barrio as a food truck on South Presa in 2020.",
  "It grew from there into restaurants, and today Birria Barrio cooks in three San Antonio kitchens: Southtown on S Alamo, Birria Barrio y Más on S Flores, and Pinn Rd.",
];
