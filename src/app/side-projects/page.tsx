import { Calendar, ExternalLink, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function SideProjects() {
  const projects = [
    {
      title: "EatAble - Voice-Controlled Robotic Assistant",
      description:
        "A voice-controlled robotic assistant designed to empower people with upper limb disabilities to eat independently — restoring dignity, freedom, and equality through accessible AI and robotics.",
      categories: ["Robotics", "AI Assistant"],
      date: "2025-12-14",
      image: "eatable.png",
      url: "https://github.com/tihado/AMD_Robot_Hackathon",
      award: "3rd Place at AMD Open Robotics Hackathon 2025",
    },
    {
      title: "Vidzly - AI-Powered Short Video Creator",
      description:
        "Transform raw footage into viral-ready content in seconds. An intelligent automation platform that revolutionizes short-form video creation using AI.",
      categories: ["AI Video Editing"],
      date: "2025-11-28",
      image: "vidzly.jpeg",
      url: "https://huggingface.co/spaces/MCP-1st-Birthday/vidzly",
      award: "1st Prize for Creativity at Agents & MCP Hackathon 2025",
    },
    {
      title: "Foreigner Guide - Your AI Legal Assistant for France",
      description:
        "France is full of opportunities... and endless paperwork! Lost in the jungle of visas, contracts, and taxes? Don't worry—you're not alone. This site is your cheat sheet to navigate French law at ease. Let's crack it together!",
      categories: ["AI Assistant", "Legal Tech"],
      date: "2025-02-28",
      image: "foreigner-guide.png",
      url: "https://tihado.com/projects",
    },
    {
      title: "Zootopi - Share What We Love!",
      description:
        "Zootopi is a knowledge-sharing platform built with Docusaurus, featuring tutorials, research projects, blog articles, and certificate reviews on AI, data science, and software development.",
      categories: ["Project", "Blog Platform"],
      date: "2022-01-27",
      image: "zootopi.webp",
      url: "https://zootopi.dev/blog",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3">
        <Rocket className="h-8 w-8 text-primary" />
        <h1 className="font-bold text-4xl text-foreground tracking-tight">
          Side Projects
        </h1>
      </div>
      <p className="mb-12 text-lg text-muted-foreground">
        Explore our innovative projects and creative solutions.
      </p>
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            className="group flex flex-col gap-6 rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-primary/50 hover:shadow-lg sm:flex-row sm:p-6"
            key={project.title}
          >
            {project.image && (
              <div className="shrink-0 overflow-hidden rounded-lg sm:w-48">
                <Image
                  alt={project.title}
                  className="h-auto w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  height={200}
                  src={`/images/${project.image}`}
                  width={200}
                />
              </div>
            )}
            <div className="flex-1 space-y-3">
              <div className="space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="font-semibold text-2xl text-foreground leading-tight">
                    {project.title}
                  </h2>
                  {project.url && (
                    <Link
                      className="flex shrink-0 items-center gap-1 text-primary transition-colors hover:underline"
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-sm">View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {project.categories.map((category) => (
                    <Badge
                      className="text-xs"
                      key={category}
                      variant="secondary"
                    >
                      {category}
                    </Badge>
                  ))}
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(project.date)}</span>
                  </div>
                </div>
                {project.award && (
                  <Badge className="text-xs" variant="default">
                    {project.award}
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
