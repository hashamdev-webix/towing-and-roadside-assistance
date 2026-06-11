export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  href: string;
  icon: string; // lucide-react icon name
  category: "towing" | "roadside" | "storage";
};

export const SERVICES: Service[] = [
  {
    slug: "emergency-towing",
    title: "Emergency / 24-Hour Towing",
    shortTitle: "Emergency Towing",
    blurb: "Round-the-clock emergency tow trucks dispatched fast — any vehicle, any time.",
    href: "/services/emergency-towing",
    icon: "Siren",
    category: "towing",
  },
  {
    slug: "heavy-duty-towing",
    title: "Heavy Duty Towing",
    shortTitle: "Heavy Duty",
    blurb: "Commercial trucks, buses, RVs, and large equipment — moved safely.",
    href: "/services/heavy-duty-towing",
    icon: "Truck",
    category: "towing",
  },
  {
    slug: "light-medium-duty-towing",
    title: "Light & Medium Duty Towing",
    shortTitle: "Light & Medium Duty",
    blurb: "Cars, vans, SUVs, and small trucks — everyday towing done right.",
    href: "/services/light-medium-duty-towing",
    icon: "Car",
    category: "towing",
  },
  {
    slug: "flatbed-towing",
    title: "Flatbed Towing",
    shortTitle: "Flatbed",
    blurb: "Damage-free transport for luxury, low-clearance, and AWD vehicles.",
    href: "/services/flatbed-towing",
    icon: "TrainTrack",
    category: "towing",
  },
  {
    slug: "accident-collision-towing",
    title: "Accident / Collision Towing",
    shortTitle: "Accident Towing",
    blurb: "Post-accident recovery, insurance coordination, and safe transport.",
    href: "/services/accident-collision-towing",
    icon: "AlertTriangle",
    category: "towing",
  },
  {
    slug: "long-distance-towing",
    title: "Long Distance Towing",
    shortTitle: "Long Distance",
    blurb: "Inter-city and cross-state vehicle transport with full tracking.",
    href: "/services/long-distance-towing",
    icon: "Route",
    category: "towing",
  },
  {
    slug: "motorcycle-towing",
    title: "Motorcycle Towing",
    shortTitle: "Motorcycle",
    blurb: "Specialized motorcycle transport with proper strapping and care.",
    href: "/services/motorcycle-towing",
    icon: "Bike",
    category: "towing",
  },
  {
    slug: "vehicle-storage",
    title: "Vehicle Storage",
    shortTitle: "Vehicle Storage",
    blurb: "Secure short-term and long-term vehicle storage in a monitored yard.",
    href: "/services/vehicle-storage",
    icon: "Warehouse",
    category: "storage",
  },
  {
    slug: "private-property-impound",
    title: "Private Property / Impound Towing",
    shortTitle: "Impound",
    blurb: "Unauthorized vehicle removal for property managers, with signage support.",
    href: "/services/private-property-impound",
    icon: "ShieldAlert",
    category: "towing",
  },
];

export type RoadsideService = {
  slug: string;
  title: string;
  blurb: string;
  href: string;
  icon: string;
};

export const ROADSIDE_SERVICES: RoadsideService[] = [
  {
    slug: "battery-boost",
    title: "Battery Boost / Jump Start",
    blurb: "Dead battery? We'll jump-start your vehicle on the spot.",
    href: "/roadside-assistance/battery-boost",
    icon: "BatteryCharging",
  },
  {
    slug: "tire-change",
    title: "Tire Change",
    blurb: "Flat tire replacement using your spare, fast and safely.",
    href: "/roadside-assistance/tire-change",
    icon: "CircleDot",
  },
  {
    slug: "unlock",
    title: "Vehicle Unlock",
    blurb: "Locked out? We'll get you back in — no damage to your vehicle.",
    href: "/roadside-assistance/unlock",
    icon: "KeyRound",
  },
  {
    slug: "fuel-delivery",
    title: "Fuel Delivery",
    blurb: "Ran out of gas? We'll bring enough fuel to get you to a station.",
    href: "/roadside-assistance/fuel-delivery",
    icon: "Fuel",
  },
];
