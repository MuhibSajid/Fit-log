"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { usePlan } from "@/context/PlanContext";

const navLinks = [
  { href: "/workouts", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Header() {
  const pathname = usePathname();
  const { planItems, savedItems } = usePlan();
  const planCount = planItems.length;
  const savedCount = savedItems.length;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src={logo} alt="FitLog" width={24} height={24} />
          <span className="font-oswald font-bold text-base sm:text-lg tracking-wide uppercase text-foreground">
            FitLog
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "px-4 py-1.5 rounded-full text-sm font-semibold bg-accent-bg text-accent transition-colors"
                    : "px-4 py-1.5 rounded-full text-sm text-muted hover:text-foreground transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-muted">Plan</span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-on-accent text-xs font-bold">
              {planCount}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-muted">Saved</span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-surface text-muted-light text-xs font-bold">
              {savedCount}
            </span>
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border px-4 py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    isActive
                      ? "px-4 py-2 rounded-full text-sm font-semibold bg-accent-bg text-accent w-fit"
                      : "px-4 py-2 rounded-full text-sm text-muted w-fit"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-6 text-sm pt-2 border-t border-border">
            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="text-muted">Plan</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-on-accent text-xs font-bold">
                {planCount}
              </span>
            </Link>
            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="text-muted">Saved</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-surface text-muted-light text-xs font-bold">
                {savedCount}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}