import config from "@/config";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex h-24 justify-center items-center gap-3">
      <div className="flex flex-1 justify-end">{config.footer.copyright}</div>
      <div className="flex flex-1 gap-2">
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
    </div>
  );
};
