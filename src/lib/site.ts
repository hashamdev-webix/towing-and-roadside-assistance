// Central site config — edit this file to update business info across the site.

export const SITE = {
  name: "Towing & Roadside Assistance",
  shortName: "Towing & RA",
  tagline: "24/7 Emergency Towing & Roadside Help",
  description:
    "Fast, reliable 24-hour towing and roadside assistance. Emergency response, heavy-duty towing, battery boost, tire change, lockouts and more.",
  url: "https://example.com",
  phone: {
    display: "(555) 123-TOWS",
    tel: "+15551238697",
  },
  email: "dispatch@example.com",
  address: {
    line1: "123 Placeholder Ave",
    city: "Your City",
    region: "ST",
    postalCode: "00000",
    country: "Country",
    full: "123 Placeholder Ave, Your City, ST 00000",
  },
  hours: "24 Hours / 7 Days a Week",
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    google: "#",
  },
} as const;
