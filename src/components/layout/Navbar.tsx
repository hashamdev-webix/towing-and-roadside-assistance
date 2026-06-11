"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES, ROADSIDE_SERVICES } from "@/lib/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Roadside", href: "/roadside-assistance", hasDropdown: true },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-ink-100 shadow-[var(--shadow-card)]">
      <div className="container-default flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-brand-red rounded-md flex items-center justify-center font-display font-bold text-white text-xl">
            T
          </div>
          <span className="hidden sm:block font-display font-bold text-lg uppercase tracking-tight leading-none">
            {SITE.shortName}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-ink-700 hover:text-brand-red transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.hasDropdown && openDropdown === link.href && (
                <div className="absolute top-full left-0 pt-2 min-w-[260px]">
                  <div className="bg-white shadow-[var(--shadow-elevated)] rounded-lg border border-ink-100 overflow-hidden">
                    {(link.href === "/services" ? SERVICES : ROADSIDE_SERVICES).map((item) => (
                      <Link
                        key={item.slug}
                        href={item.href}
                        className="block px-4 py-3 text-sm hover:bg-brand-red-lighter hover:text-brand-red transition-colors border-b border-ink-100 last:border-0"
                      >
                        {link.href === "/services"
                          ? (item as typeof SERVICES[0]).shortTitle
                          : (item as typeof ROADSIDE_SERVICES[0]).title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href={`tel:${SITE.phone.tel}`} variant="primary" size="md">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-ink-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-ink-100 overflow-hidden"
          >
            <div className="container-default py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base font-semibold uppercase tracking-wide text-ink-700 hover:text-brand-red hover:bg-brand-red-lighter rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-ink-100">
                <Button href={`tel:${SITE.phone.tel}`} variant="primary" fullWidth>
                  <Phone className="w-4 h-4" />
                  Call Now: {SITE.phone.display}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
