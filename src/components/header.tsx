"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const menu = (
    <nav
      id="mobile-nav"
      data-open={open ? "true" : "false"}
      aria-hidden={!open}
      style={{
        display: open ? "flex" : "none",
        position: "fixed",
        inset: 0,
        zIndex: 60,
        flexDirection: "column",
        background: "#161210",
        padding: "6.5rem 1.5rem 2.5rem",
      }}
    >
      <div className="flex flex-1 flex-col justify-center gap-1">
        {nav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "kicker border-b border-white/10 py-4 text-sm",
                active ? "text-gold" : "text-cream"
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/enquire"
          className="btn-gold mt-8 w-full"
          onClick={() => setOpen(false)}
        >
          Enquire
        </Link>
      </div>
    </nav>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/75 via-black/35 to-transparent transition-opacity",
          scrolled || open ? "opacity-0" : "opacity-100"
        )}
      />
      <div
        className={cn(
          "relative z-50 border-b transition-colors duration-300",
          scrolled || open
            ? "border-white/10 bg-charcoal/95"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 text-cream"
            aria-label="Kimba African Journeys home"
          >
            <BrandMark tone="white" className="h-12 w-10 shrink-0 sm:h-14 sm:w-12" />
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-serif text-[1.05rem] leading-tight tracking-wide sm:text-lg">
                Kimba African Journeys
              </span>
              <span className="kicker mt-0.5 text-[0.62rem] text-gold">
                Curated travel
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "kicker text-[0.65rem] transition-colors",
                    active ? "text-gold" : "text-cream/90 hover:text-gold"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/enquire" className="btn-ghost-light h-10 px-5 text-[0.62rem]">
              Enquire
            </Link>
          </nav>

          <button
            type="button"
            className="relative z-[70] inline-flex size-10 items-center justify-center text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mounted ? createPortal(menu, document.body) : menu}
    </header>
  );
}
