import {
  Award,
  BookOpen,
  Briefcase,
  Globe,
  GraduationCap,
  Home,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Github, GoogleScholar, LinkedIn, Mail } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Resume() {
  const workExperience = [
    {
      period: "2024 – Present",
      title: "NLP / ML Research Engineer",
      company: "Arkhn",
      location: "Paris, France",
      responsibilities: [
        "Designed and deployed Assistant for hospitals, enabling clinicians to query patient tracking data (chatbot) and auto-generate reports.",
        "Built robust data pipelines integrating OCR, document parsing, and information extraction across heterogeneous medical document formats.",
        "Implemented real-time monitoring and evaluation to trace system performance.",
      ],
    },
    {
      period: "2024 – Present",
      title: "Founder",
      company: "Tihado",
      location: "Paris, France",
      responsibilities: [
        "Vidzly - 1st Prize for Creativity at Agents & MCP Hackathon 2025",
        "EatAble - 3rd Prize at AMD Robotics Hackathon 2025",
        "Zootopi - a knowledge-sharing platform, featuring tutorials, research projects, blog articles.",
      ],
    },
    {
      period: "2021 – 2024",
      title: "Ph.D.",
      company:
        "La Rochelle University (France) & Jožef Stefan Institute (Slovenia)",
      location: "",
      responsibilities: [
        "Conducted applied research on cross-lingual and cross-domain terminology extraction for scientific and institutional users under several projects and fundings: RSDO, TERMITRAID, PROTEUS (BI-FR/23-24-PROTEUS006), CANDAS (P2-0103), KOBOS (J6-3131).",
        "Developed end-to-end ML pipelines deployed in public research infrastructures (e.g. Slovenian Terminology Portal) and prototyped solutions for named entity recognition in Slavic languages (Slovenian, Macedonian, Serbian, Bosnian, Croatian) under KLIPING project.",
      ],
    },
    {
      period: "2020 – 2021",
      title: "Data Scientist / ML Engineer",
      company: "3T JSC",
      location: "Hanoi, Vietnam",
      responsibilities: [
        "Designed and deployed credit scoring systems used in banks and fintech companies.",
        "Built data pipelines and evaluation metrics for large-scale call-center analytics.",
      ],
    },
    {
      period: "2019 – 2020",
      title: "Data Scientist",
      company: "Samsung SDS",
      location: "Hanoi, Vietnam",
      responsibilities: [
        "Developed ML pipelines for legal document classification and entity extraction, supporting compliance with Vietnamese law.",
      ],
    },
  ];

  const teachingExperience = [
    {
      period: "2021-Now",
      organization: "VietAI, Vietnam",
      courses: [
        "Pre-Machine Learning",
        "Foundation of Deep Learning",
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
      period: "2021 – 2024",
      degree: "Ph.D",
      institution:
        "La Rochelle University, France & Jožef Stefan Institute, Slovenia",
    },
    {
      period: "2019 – 2020",
      degree: "MSc",
      institution: "University of Montpellier, France",
    },
    {
      period: "2014 – 2017",
      degree: "BSc",
      institution: "University of Science and Technology of Hanoi, Vietnam",
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <Image
            alt="Hanh Tran"
            className="rounded-lg border-2 border-border shadow-lg"
            height={220}
            src="/images/Hanh.jpg"
            width={220}
          />
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="mb-2 font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
              TRAN Thi Hong Hanh
            </h1>
            <p className="font-medium text-muted-foreground text-xl">
              NLP Engineer | Open-source Contributor
            </p>
          </div>

          <Separator />

          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <Link
                className="text-primary transition-colors hover:underline"
                href="mailto:hanh.usth@gmail.com"
              >
                hanh.usth@gmail.com
              </Link>
            </div>
            <div className="flex items-start gap-3">
              <Home className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">Paris, France</span>
            </div>
            <div className="flex items-start gap-3 sm:col-span-2">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">
                Vietnamese (Native), English (C1), French (B2), Spanish (A1)
              </span>
            </div>
          </div>

          <Separator />

          <div className="flex flex-wrap items-center gap-3">
            <Link
              className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-foreground text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              href="https://scholar.google.com/citations?user=OGb4sloAAAAJ&hl=fr"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GoogleScholar size={18} />
              <span>Google Scholar</span>
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-foreground text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              href="https://github.com/honghanhh"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github size={18} />
              <span>GitHub</span>
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-foreground text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              href="https://www.linkedin.com/in/hanh-thi-hong-tran-0b886212a/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn size={18} />
              <span>LinkedIn</span>
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-foreground text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              href="https://hanh.zootopi.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Globe size={18} />
              <span>Website</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="font-bold text-3xl text-foreground tracking-tight">
            Work Experience
          </h2>
        </div>
        <div className="space-y-6">
          {workExperience.map((exp) => (
            <div
              className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              key={`${exp.company}-${exp.period}`}
            >
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {exp.title}
                  </h3>
                  <p className="font-medium text-muted-foreground">
                    {exp.company}
                    {exp.location && ` • ${exp.location}`}
                  </p>
                </div>
                <Badge className="mt-1 shrink-0 sm:mt-0" variant="outline">
                  {exp.period}
                </Badge>
              </div>
              <ul className="ml-4 space-y-2 text-muted-foreground">
                {exp.responsibilities.map((resp, idx) => (
                  <li className="relative pl-6" key={idx}>
                    <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-primary" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Experience */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="font-bold text-3xl text-foreground tracking-tight">
            Teaching Experience
          </h2>
        </div>
        <div className="space-y-4">
          {teachingExperience.map((exp) => (
            <div
              className="rounded-lg border border-border bg-card p-5"
              key={`${exp.organization}-${exp.period}`}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-foreground">
                  {exp.organization}
                </h3>
                <Badge className="text-xs" variant="secondary">
                  {exp.period}
                </Badge>
              </div>
              <ul className="ml-4 space-y-1.5 text-muted-foreground">
                {exp.courses.map((course, idx) => (
                  <li className="relative pl-5" key={idx}>
                    <span className="absolute top-1.5 left-0 h-1 w-1 rounded-full bg-muted-foreground" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="font-bold text-3xl text-foreground tracking-tight">
            Education
          </h2>
        </div>
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              className="rounded-lg border border-border bg-card p-5"
              key={`${edu.institution}-${edu.period}`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
                <Badge className="shrink-0" variant="outline">
                  {edu.period}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Certificates */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="font-bold text-3xl text-foreground tracking-tight">
            Awards & Certificates
          </h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="default">1st Place</Badge>
              <Badge variant="secondary">Creativity Award</Badge>
            </div>
            <p className="font-semibold text-foreground">
              MCP 1st Birthday Hackathon
            </p>
            <p className="text-muted-foreground text-sm">
              Anthropic, HuggingFace, Gradio (December 2025)
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="mb-2">
              <Badge variant="default">3rd Place</Badge>
            </div>
            <p className="font-semibold text-foreground">
              AMD Open Robotics Hackathon
            </p>
            <p className="text-muted-foreground text-sm">
              AMD, HuggingFace, WowRobo, Data Monsters (December 2025)
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="mb-2">
              <Badge variant="outline">Certification</Badge>
            </div>
            <p className="font-semibold text-foreground">
              Associate Cloud Engineer
            </p>
            <p className="text-muted-foreground text-sm">June 2025</p>
          </div>
        </div>
      </section>

      {/* Open-source & Community Contributions */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="font-bold text-3xl text-foreground tracking-tight">
            Open-source & Community Contributions
          </h2>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li className="relative pl-6">
              <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-medium text-foreground">
                Open contributor:
              </span>{" "}
              robotics-course, agents-course, mcp-course,
              data-science-specialization
            </li>
            <li className="relative pl-6">
              <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-primary" />
              Developed tutorials and educational material for ML practitioners
              and researchers
            </li>
            <li className="relative pl-6">
              <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-medium text-foreground">
                Conference roles:
              </span>{" "}
              Programme committee member, reviewer, and co-chair (LREC, EMNLP,
              COLING, ECAI, ICPR, SemEval, ESSLLI)
            </li>
            <li className="relative pl-6">
              <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-primary" />
              Speaker at Women in AI & Women Technakers events
            </li>
          </ul>
        </div>
      </section>

      {/* Main Publications */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="font-bold text-3xl text-foreground tracking-tight">
            Main Publications
          </h2>
        </div>
        <div className="space-y-5">
          {/* Publication 1 */}
          <div className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  1
                </span>
                <Badge className="text-xs" variant="secondary">
                  2025
                </Badge>
                <Badge className="text-xs" variant="outline">
                  Conference
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
                SEKE: Specialised Experts for Keyword Extraction
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-medium text-foreground">
                  Matej Martinc
                </span>
                ,{" "}
                <strong className="font-semibold text-foreground">
                  Hanh Thi Hong Tran
                </strong>
                , et al.
              </p>
              <p className="text-muted-foreground text-sm italic">
                In{" "}
                <em>
                  Findings of the Association for Computational Linguistics:
                  EMNLP 2025
                </em>
                , pages 14191–14205, Suzhou, China.
              </p>
            </div>
          </div>

          {/* Publication 2 */}
          <div className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  2
                </span>
                <Badge className="text-xs" variant="outline">
                  Conference
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
                Ar-Q-former: Historical Newspaper Article Separation based on
                Multimodal Transformer Structure
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-medium text-foreground">Wenjun Sun</span>,{" "}
                <span className="font-medium text-foreground">
                  Nancy Girdhar
                </span>
                ,{" "}
                <strong className="font-semibold text-foreground">
                  Hanh Thi Hong Tran
                </strong>
                , et al.
              </p>
              <p className="text-muted-foreground text-sm italic">
                In{" "}
                <em>
                  International Conference on Document Analysis and Recognition
                </em>{" "}
                (pp. 476-492). Cham: Springer Nature Switzerland.
              </p>
            </div>
          </div>

          {/* Publication 3 */}
          <div className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  3
                </span>
                <Badge className="text-xs" variant="secondary">
                  2025
                </Badge>
                <Badge className="text-xs" variant="outline">
                  Journal
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
                LlamATE: Automated terminology extraction using large-scale
                generative language models
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="font-semibold text-foreground">
                  Hanh Thi Hong Tran
                </strong>
                , et al.
              </p>
              <p className="text-muted-foreground text-sm italic">
                <em>
                  Terminology: International Journal of Theoretical and Applied
                  Issues in Specialized Communication
                </em>
                , 2025, vol. 31, no 1, p. 5-36.
              </p>
            </div>
          </div>

          {/* Publication 4 */}
          <div className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  4
                </span>
                <Badge className="text-xs" variant="secondary">
                  2024
                </Badge>
                <Badge className="text-xs" variant="outline">
                  Conference
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
                Is Prompting What Term Extraction Needs?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="font-semibold text-foreground">
                  Hanh Thi Hong Tran
                </strong>
                , et al.
              </p>
              <p className="text-muted-foreground text-sm italic">
                In{" "}
                <em>International Conference on Text, Speech, and Dialogue</em>.
                Cham: Springer Nature Switzerland, 2024.
              </p>
            </div>
          </div>

          {/* Publication 5 */}
          <div className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  5
                </span>
                <Badge variant="default">Best Paper Award</Badge>
                <Badge className="text-xs" variant="secondary">
                  2024
                </Badge>
                <Badge className="text-xs" variant="outline">
                  Conference
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
                Leveraging Open Large Language Models for Historical Named
                Entity Recognition
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-medium text-foreground">
                  Carlos-Emiliano González-Gallardo
                </span>
                ,{" "}
                <strong className="font-semibold text-foreground">
                  Hanh Thi Hong Tran
                </strong>
                , et al.
              </p>
              <p className="text-muted-foreground text-sm italic">
                <em>
                  International Conference on Theory and Practice of Digital
                  Libraries
                </em>
                . Cham: Springer Nature Switzerland, 2024.
              </p>
            </div>
          </div>

          {/* Publication 6 */}
          <div className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  6
                </span>
                <Badge className="text-xs" variant="secondary">
                  2024
                </Badge>
                <Badge className="text-xs" variant="outline">
                  Journal
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
                Can cross-domain term extraction benefit from cross-lingual
                transfer and nested term labeling?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="font-semibold text-foreground">
                  Hanh Thi Hong Tran
                </strong>
                , et al.
              </p>
              <p className="text-muted-foreground text-sm italic">
                <em>Machine Learning</em>, 2024, p. 1-30.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 rounded-lg border border-border bg-card p-4">
          <p className="text-muted-foreground text-sm">
            Full list available on{" "}
            <Link
              className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:underline"
              href="https://scholar.google.com/citations?user=OGb4sloAAAAJ&hl=fr"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Scholar
              <Globe className="h-3 w-3" />
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
