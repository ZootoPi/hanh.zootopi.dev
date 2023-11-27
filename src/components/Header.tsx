import config from "@/config";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="absolute top-0 h-14 w-full flex justify-end gap-4 px-6">
      {config.header.links.map((link) => (
        <Link
          href={link.path}
          key={link.label}
          className="text-center my-auto font-light"
        >
          {link.label}
        </Link>
      ))}
    </header>
  );
};
