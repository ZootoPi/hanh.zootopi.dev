import Image from "next/image";

export default function SideProjects() {
  const projects = [
    {
      title: "Foreigner Guide",
      description:
        "France is full of opportunities... and endless paperwork! Lost in the jungle of visas, contracts, and taxes. Don't worry—you're not alone. This site is your cheat sheet to navigate French law at ease.",
      image: "foreigner-guide.png",
    },
    {
      title: "Zootopi",
      description:
        "A personal platform to share knowledge, projects, and blogs.",
      image: "zootopi.webp",
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-bold text-4xl text-foreground tracking-tight">
        Side projects
      </h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            className="group flex flex-col gap-4 rounded-lg border border-border/50 bg-card p-4 transition-all duration-200 hover:border-primary/50 hover:shadow-lg sm:flex-row sm:p-6"
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
            <div className="flex-1 space-y-2">
              <h2 className="font-semibold text-2xl leading-tight">
                <strong className="text-foreground">{project.title}</strong>
              </h2>
              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
