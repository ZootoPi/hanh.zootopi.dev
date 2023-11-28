import config from "@/config";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex h-24 sm:gap-3 max-sm:flex-col">
      <div className="flex flex-1 sm:justify-end items-center justify-center">
        {config.footer.copyright}
      </div>
      <div className="flex flex-1 gap-2 items-center max-sm:justify-center">
        {config.info.socials.map((social) => (
          <a
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
          </a>
        ))}
      </div>
    </footer>
  );
};
