import { getSettings } from "@/app/action";
import Image from "next/image";
import Link from "next/link";

export const Footer = async () => {
  const { socials } = await getSettings();

  return (
    <footer className="flex h-24 sm:gap-3 max-sm:flex-col">
      <div className="flex flex-1 sm:justify-end items-center justify-center">
        {new Date().getFullYear()} © Thi Hong Hanh Tran
      </div>
      <div className="flex flex-1 gap-2 items-center max-sm:justify-center">
        {socials.map((social) => (
          <Link
            href={social.url}
            target="_blank"
            key={social.label}
            className="rounded-full overflow-hidden h-8 w-8 flex justify-center items-center"
          >
            <Image
              alt={social.label}
              src={social.icon}
              height={32}
              width={32}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};
