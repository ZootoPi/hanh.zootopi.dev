import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=OGb4sloAAAAJ&hl=fr",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg",
  },
  {
    label: "Github",
    url: "https://github.com/honghanhh",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/thi-hong-hanh-tran-0b886212a/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg",
  },
  {
    label: "Website",
    url: "https://hanh.zootopi.dev/",
    icon: "https://zootopi.dev/img/logo.svg",
  },
  {
    label: "Mail",
    url: "mailto:thi.tran@univ-lr.fr",
    icon: "https://cdncms.tihado.com/media/m2vzf0hh-image.png",
  },
];

export const Footer = () => {
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
