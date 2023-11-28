import Image from "next/image";
import config from "@/config";

export default function Home() {
  const googleScholar = config.info.socials.find((social) =>
    social.label.includes("Google Scholar")
  );
  return (
    <div className="max-w-6xl mx-auto p-5 flex gap-10 flex-col">
      <div className="flex my-6 gap-10 md:flex-row flex-col">
        <div className="min-w-64">
          <Image
            src="/images/me.jpg"
            alt={config.info.name}
            width={256}
            height={256}
            className="mx-auto"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl mb-10 max-md:text-center">
            Hello, I&apos;m {config.info.shortName} 🔥
          </h1>
          <p className="">{config.info.brief}</p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-8">NEWS</h2>
        <ul className="gap-2 flex flex-col">
          {config.news.map((news, index) => (
            <li key={index} className="flex sm:flex-row flex-col gap-2">
              <p className="whitespace-nowrap">
                <strong>{news.date}</strong>:
              </p>
              <p>
                <i>{news.content}</i>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-4xl mb-2">PUBLICATIONS</h2>
        {googleScholar && (
          <p>
            For a complete list of publications, please refer to my{" "}
            <a href={googleScholar.url} target="_blank">
              Google Scholar
            </a>{" "}
            page.
          </p>
        )}

        <div className="flex flex-col mt-6 gap-10">
          {config.publications.map((publication, index) => (
            <div key={index} className="flex gap-5 sm:flex-row flex-col">
              <div className="min-w-64">
                <Image
                  src={publication.image}
                  alt={publication.title}
                  height={256}
                  width={256}
                  className="mx-auto"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">
                  <a href={publication.link} target="_blank">
                    {publication.title}
                  </a>
                </h3>
                <p className="mt-2">
                  {publication.authors.map((author, index) => (
                    <span key={index}>
                      {typeof author === "string" ? (
                        author
                      ) : (
                        <strong>{author.name}</strong>
                      )}
                      {index < publication.authors.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <p className="mt-2">{publication.published}</p>
                <p className="mt-5">
                  <i>{publication.summary}</i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
