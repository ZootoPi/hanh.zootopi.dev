import { Flag, Globe, GraduationCap, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Github, GoogleScholar, LinkedIn, Mail } from "@/components/icon";

export default function Resume() {
  const workExperience = [
    {
      period: "2024-2025",
      title: "NLP Engineer",
      company: "Arkhn",
      location: "France",
      responsibilities: [
        "Developed Assistant, a Microsoft Word plugin to help doctors quickly access patient tracking information and auto-generate medical reports.",
        "Developed evaluation pipeline for AI agents in Assistant.",
      ],
    },
    {
      period: "2020-2021",
      title: "Data Scientist and Consultant",
      company: "3T JSC",
      location: "Vietnam",
      responsibilities: [
        "Developed innovative solutions for both internal and external products.",
        "Spearheaded the design and implementation of a Credit Scoring System, successfully deployed in a major bank and two fintech companies in Vietnam",
        "Engineered the Barem KPI system, evaluating the call quality and content in call centers.",
      ],
    },
    {
      period: "2019-2020",
      title: "Data Scientist",
      company: "Samsung SDSV",
      location: "Vietnam",
      responsibilities: [
        "Contributed to the development of the Brightics AI core product by building the Brightics Law feature.",
        "Pioneered the classification of standard contracts based on provided contract formats from Samsung.",
        "Implemented cutting-edge techniques for extracting crucial entities within contracts.",
        "Successfully classified Provision/Benefit types in adherence to Vietnamese laws.",
      ],
    },
  ];

  const teachingExperience = [
    {
      period: "2021-Now",
      organization: "VietAI, Vietnam",
      courses: [
        "Pre-Machine Learning",
        "Foundation of Deep Learning classes",
        "ChatGPT for everyone",
        "Build applications with OpenAI",
      ],
    },
    {
      period: "2021-2022",
      organization: "Python Trainer MCI, Vietnam",
      courses: [
        "Python for Data Analysis",
        "Python for Machine Learning & Deep Learning",
      ],
    },
    {
      period: "2016-2017",
      organization: "Program Manager BeeCode, Vietnam",
      courses: ["Computer Science classes", "Summer schools"],
    },
  ];

  const education = [
    {
      period: "2021-2024",
      degree: "Ph.D Student in Cotuelle Program",
      institution:
        "La Rochelle University, France, and Jozef Stefan Institute, Slovenia.",
      topic:
        "Topic: Cross-lingual cross-domain terminology extraction on less-resourced languages",
    },
    {
      period: "2021-2023",
      degree: "Master of Science, Financial Engineering",
      institution: "WorldQuant University, USA",
    },
    {
      period: "2019-2020",
      degree:
        "Master of Science, Technology, Health, Information Technology and Communication Infrastructure Engineering for Big Data Analysis",
      institution: "University of Montpellier, France",
    },
    {
      period: "2017-2021",
      degree: "Master of Science, Information Technology and Communication",
      institution: "University of Science and Technology in Hanoi, Vietnam",
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <Image
            alt="Hanh Tran"
            className="rounded-md"
            height={200}
            src="/images/Hanh.jpg"
            width={200}
          />
        </div>
        <div className="flex-1">
          <h1 className="mb-8 font-bold text-4xl text-foreground tracking-tight">
            TRAN Thi Hong Hanh
          </h1>

          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p className="flex items-center gap-2">
              <Flag className="h-5 w-5 shrink-0" />
              <span>
                <span className="font-semibold">Nationality</span>: Vietnamese
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Home className="h-5 w-5 shrink-0" />
              <span>
                <span className="font-semibold">Address</span>: Paris, France
              </span>
            </p>
            <p className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 shrink-0" />
              <span>
                <span className="font-semibold">Titles</span>: NLP Engineer/Dr.
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Globe className="h-5 w-5 shrink-0" />
              <span>
                <span className="font-semibold">Languages</span>: Vietnamese,
                English, French
              </span>
            </p>
            <div className="flex items-center gap-2">
              <Link
                className="flex cursor-pointer items-center gap-1 text-primary transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                href="https://scholar.google.com/citations?user=OGb4sloAAAAJ&hl=fr"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GoogleScholar size={20} />
                Google Scholar
              </Link>
              <Link
                className="flex cursor-pointer items-center gap-1 text-primary transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                href="https://github.com/honghanhh"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github size={20} />
                Github
              </Link>
              <Link
                className="flex cursor-pointer items-center gap-1 text-primary transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                href="https://www.linkedin.com/in/hanh-thi-hong-tran-0b886212a/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedIn size={20} />
                LinkedIn
              </Link>
              <Link
                className="flex cursor-pointer items-center gap-1 text-primary transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                href="https://hanh.zootopi.dev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Globe size={20} />
                Website
              </Link>
              <Link
                className="flex cursor-pointer items-center gap-1 text-primary transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                href="mailto:hanh@zootopi.dev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Mail size={20} />
                hanh@zootopi.dev
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="mb-6 font-bold text-3xl text-foreground tracking-tight">
          Work Experience
        </h2>
        <ul className="space-y-6">
          {workExperience.map((exp) => (
            <li className="space-y-2" key={`${exp.company}-${exp.period}`}>
              <p className="font-semibold text-foreground">
                * <strong>{exp.period}</strong>: {exp.title} at{" "}
                <strong>{exp.company}</strong>, {exp.location}
              </p>
              <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Teaching Experience */}
      <section className="mb-12">
        <h2 className="mb-6 font-bold text-3xl text-foreground tracking-tight">
          Teaching Experience
        </h2>
        <ul className="space-y-4">
          {teachingExperience.map((exp) => (
            <li className="space-y-2" key={`${exp.organization}-${exp.period}`}>
              <p className="font-semibold text-foreground">
                * <strong>{exp.period}</strong>: {exp.organization}
              </p>
              <ul className="ml-6 list-none space-y-1 text-muted-foreground">
                {exp.courses.map((course, idx) => (
                  <li key={idx}>
                    [{idx + 1}] {course}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="mb-6 font-bold text-3xl text-foreground tracking-tight">
          Education
        </h2>
        <ul className="space-y-4">
          {education.map((edu) => (
            <li className="space-y-1" key={`${edu.institution}-${edu.period}`}>
              <p className="font-semibold text-foreground">
                * <strong>{edu.period}</strong>: <em>{edu.degree}</em> -{" "}
                <strong>{edu.institution}</strong>
              </p>
              {edu.topic && (
                <p className="ml-6 text-muted-foreground">{edu.topic}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Publication */}
      <section>
        <h2 className="mb-6 font-bold text-3xl text-foreground tracking-tight">
          Publication
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          For a complete list of publications, please refer to my{" "}
          <a
            className="cursor-pointer text-primary transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href="https://scholar.google.com/citations?user=OGb4sloAAAAJ&hl=fr"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Scholar page
          </a>
          .
        </p>
      </section>
    </div>
  );
}
