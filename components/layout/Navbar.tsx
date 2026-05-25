"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { logoPath, navigation, services } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-40 border-b border-default bg-base"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        <Link
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          href="/"
          onClick={() => setOpen(false)}
        >
          <Image
            src={logoPath}
            alt="SaaviGenAI key logo"
            width={44}
            height={44}
            priority
            className="rounded-full"
          />
          <span className="hidden items-end gap-1 font-display text-xl font-bold text-primary sm:flex">
            SaaviGenAI{" "}
            <span className="mb-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link
            className={cn(
              "border-b-2 border-transparent py-7 text-sm font-medium text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
              pathname === "/" && "border-gold font-semibold text-primary",
            )}
            href="/"
          >
            Home
          </Link>
          <div className="group relative">
            <button
              className={cn(
                "border-b-2 border-transparent py-7 text-sm font-medium text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
                pathname.startsWith("/services") &&
                  "border-gold font-semibold text-primary",
              )}
            >
              Services
            </button>
            <div className="invisible absolute left-0 top-full w-64 rounded-xl border border-default bg-base p-2 opacity-0 shadow-md transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {services.map((service) => (
                <Link
                  key={service.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-secondary transition-colors hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  href={service.href}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          {navigation.slice(3).map((item) => (
            <Link
              key={item.href}
              className={cn(
                "border-b-2 border-transparent py-7 text-sm font-medium text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
                isActive(pathname, item.href) &&
                  "border-gold font-semibold text-primary",
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="/contact" className="px-5 py-2.5">
            Get in Touch
          </Button>
        </div>

        <button
          className="rounded p-2 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 md:hidden"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-default bg-base px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            <Link
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-medium text-secondary",
                pathname === "/" && "bg-surface font-semibold text-primary",
              )}
              href="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            {navigation.map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium text-secondary",
                  isActive(pathname, item.href) &&
                    "bg-surface font-semibold text-primary",
                )}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/contact"
              className="mt-3"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
