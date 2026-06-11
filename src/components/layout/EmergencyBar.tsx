import { Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export function EmergencyBar() {
  return (
    <div className="bg-brand-red text-white">
      <div className="container-default flex items-center justify-between py-2 gap-3">
        <div className="hidden sm:flex items-center gap-2 text-sm font-medium">
          <Clock className="w-4 h-4" />
          <span>{SITE.hours}</span>
        </div>
        <a href={`tel:${SITE.phone.tel}`} className="flex items-center gap-2 text-sm sm:text-base font-bold hover:underline ml-auto sm:ml-0">
          <Phone className="w-4 h-4" />
          <span className="uppercase tracking-wide">Call Now: {SITE.phone.display}</span>
        </a>
      </div>
    </div>
  );
}
