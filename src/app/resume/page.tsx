import Image from "next/image";
import config from "@/config";

export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto p-5 flex gap-20 flex-col">
      <div className="flex gap-10 md:flex-row flex-col">
        <div className="min-w-64">
          <Image
            src="/images/me.jpg"
            alt={config.info.name}
            width={256}
            height={256}
            className="mx-auto"
          />
        </div>
        <div className="m-auto flex-1">
          <h1 className="sm:text-4xl text-3xl mb-10 max-md:text-center">
            {config.info.name}
          </h1>
          <div className="flex flex-wrap gap-x-8 gap-y-5">
            <div>
              <p>
                <i>🇻🇳 Nationality:</i> {config.info.nationality}
              </p>
              <p>
                <i>🏠 Address:</i> {config.info.address}
              </p>
              <p>
                <i>🧑‍🎓 Titles:</i> {config.info.titles}
              </p>
              <p>
                <i>🗺️ Languages:</i> {config.info.languages}
              </p>
            </div>
            <div className="flex max-sm:flex-wrap sm:flex-col gap-x-4">
              {config.info.socials
                .filter((social) => social.label !== "Website")
                .map((social, index) => (
                  <div key={index} className="flex gap-1">
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-6 h-6 rounded-full"
                    />
                    <a href={social.url} target="_blank">
                      {social.label}
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="sm:text-4xl text-3xl mb-5">Work Experience</h2>
        <ul className="flex flex-col gap-2">
          {config.works.map((work, index) => (
            <li key={index}>
              <strong>{work.date}: </strong>
              {work.title}
              <>{work.description}</>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="sm:text-4xl text-3xl mb-5">Teaching Experience</h2>
        <ul className="flex flex-col gap-2">
          {config.teachings.map((teaching, index) => (
            <li key={index}>
              <strong>{teaching.date}: </strong>
              {teaching.organization}
              <div className="flex flex-wrap gap-x-5">
                {teaching.courses.map((course, index) => (
                  <p key={index}>{`[${index + 1}] ${course}`}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="sm:text-4xl text-3xl mb-5">Education</h2>
        <ul className="flex flex-col gap-2">
          {config.education.map((education, index) => (
            <li key={index}>
              <strong>{education.date}: </strong>
              <i>{education.degree}</i> -{" "}
              {education.program ? (
                education.program
              ) : (
                <strong>{education.school}</strong>
              )}
              {education.additional && (
                <ul>
                  {education.additional.map((additional, index) => (
                    <li key={index}>{additional}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="sm:text-4xl text-3xl mb-5">Publication</h2>
        <ul className="flex flex-col gap-2">
          {config.publications.map((publication, index) => (
            <li key={index}>
              {publication.authors
                .slice(0, 2)
                .map((author, index) =>
                  typeof author === "string" ? author : author.name
                )
                .join(", ")}
              , et al. &quot;{publication.title}&quot;{" "}
              <i>{publication.published}</i>. {publication.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
