"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/side-projects", label: "Side projects" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav className="fixed top-4 right-4 left-4 z-50 mx-auto max-w-6xl">
      <div className="rounded-lg border border-border/50 bg-background/80 shadow-lg backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-center">
            <div className="flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    className={cn(
                      "relative cursor-pointer rounded-md px-3 py-2 font-medium text-sm transition-all duration-200",
                      "hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isActive
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
