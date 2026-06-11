import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES, ROADSIDE_SERVICES } from "@/lib/services";

// Brand icons inline — lucide-react v1.x removed branded icons
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="container-default py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-red rounded-md flex items-center justify-center font-display font-bold text-white text-xl">
                T
              </div>
              <span className="font-display font-bold text-lg uppercase tracking-tight text-white">
                {SITE.shortName}
              </span>
            </div>
            <p className="text-sm text-ink-300 mb-6 leading-relaxed">
              {SITE.tagline}
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${SITE.phone.tel}`} className="flex items-center gap-2 hover:text-brand-red transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-brand-red" />
                  {SITE.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-brand-red transition-colors">
                  <Mail className="w-4 h-4 shrink-0 text-brand-red" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-brand-red mt-0.5" />
                <span>{SITE.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-brand-red" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>

          {/* Towing services */}
          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-wide mb-4 text-base">
              Towing Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="hover:text-brand-red transition-colors">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roadside services */}
          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-wide mb-4 text-base">
              Roadside Assistance
            </h4>
            <ul className="space-y-2 text-sm">
              {ROADSIDE_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="hover:text-brand-red transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-wide mb-4 text-base">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link href="/service-areas" className="hover:text-brand-red transition-colors">Service Areas</Link></li>
              <li><Link href="/blog" className="hover:text-brand-red transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
            </ul>

            <h4 className="font-display font-bold text-white uppercase tracking-wide mb-4 mt-8 text-base">
              Follow
            </h4>
            <div className="flex gap-3">
              <a href={SITE.social.facebook} className="w-9 h-9 rounded-full bg-ink-800 hover:bg-brand-red flex items-center justify-center transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={SITE.social.instagram} className="w-9 h-9 rounded-full bg-ink-800 hover:bg-brand-red flex items-center justify-center transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={SITE.social.twitter} className="w-9 h-9 rounded-full bg-ink-800 hover:bg-brand-red flex items-center justify-center transition-colors" aria-label="Twitter (X)">
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-800">
        <div className="container-default py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-400">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
