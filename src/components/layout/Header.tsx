"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

function usePlanCounts() {
  return { planCount: 0, savedCount: 0 };
}

const navLinks = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Header() {
  const pathname = usePathname();
  const { planCount, savedCount } = usePlanCounts();

  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FitLog" width={24} height={24} />
          <span className="font-oswald font-bold text-lg tracking-wide uppercase text-foreground">
            FitLog
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "px-4 py-1.5 rounded-full text-sm  font-semibold bg-accent-bg text-accent transition-colors"
                    : "px-4 py-1.5 rounded-full text-sm  text-muted hover:text-foreground transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Plan / Saved counters */}
        <div className="flex items-center gap-6 text-sm ">
          <div className="flex items-center gap-2">
            <span className="text-muted">Plan</span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-on-accent text-xs font-bold">
              {planCount}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted">Saved</span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-surface text-muted-light text-xs font-bold">
              {savedCount}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}