import Link from "next/link";
import { Github, GoogleScholar, LinkedIn, Mail } from "./icon";

export function Footer() {
  const socialLinks: { name: string; href: string; icon: React.ReactNode }[] = [
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?user=OGb4sloAAAAJ&hl=fr",
      icon: <GoogleScholar size={24} />,
    },
    {
      name: "Github",
      href: "https://github.com/honghanhh",
      icon: <Github size={24} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hanh-thi-hong-tran-0b886212a/",
      icon: <LinkedIn size={24} />,
    },
    {
      name: "Mail",
      href: "mailto:hanh@zootopi.dev",
      icon: <Mail size={24} />,
    },
  ];

  return (
    <footer className="w-full border-border border-t bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            2026 © Thi Hong Hanh Tran
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              return (
                <Link
                  aria-label={link.name}
                  className="cursor-pointer rounded-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href={link.href}
                  key={link.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
