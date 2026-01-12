import Image from "next/image";

export default function Education() {
  const educationItems = [
    {
      institution: "University of La Rochelle, France",
      degree: "Ph.D Student in Cotuelle Program",
      period: "2021-2024",
      image: "laRochelle.webp",
    },
    {
      institution: "WorldQuant University, USA",
      degree: "Master of Science, Financial Engineering",
      period: "2021-2023",
      image: "worldquant.svg",
    },
    {
      institution: "University of Montpellier, France",
      degree:
        "Master of Science, Technology, Health, Information Technology and Communication Infrastructure Engineering for Big Data Analysis",
      period: "2019-2020",
      image: "Montpellier.jpg",
    },
    {
      institution: "University of Science and Technology in Hanoi, Vietnam",
      degree: "Master of Science, Information Technology and Communication",
      period: "2017-2021",
      image: "usth.webp",
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <blockquote className="mb-8 border-primary border-l-4 pl-4 text-muted-foreground italic leading-relaxed">
        &quot;An investment in knowledge pays the best interest.&quot;
        <br />
        <span className="mt-2 block">- Benjamin Franklin</span>
      </blockquote>

      <h1 className="mb-8 font-bold text-4xl text-foreground tracking-tight">
        EDUCATION
      </h1>
      <div className="space-y-6">
        {educationItems.map((item) => (
          <article
            className="group flex flex-col gap-4 rounded-lg border border-border/50 bg-card p-4 transition-all duration-200 hover:border-primary/50 hover:shadow-lg sm:flex-row sm:p-6"
            key={item.institution}
          >
            {item.image && (
              <div className="shrink-0 overflow-hidden rounded-lg sm:w-48">
                <Image
                  alt={item.institution}
                  className="h-auto w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  height={200}
                  src={`/images/${item.image}`}
                  width={200}
                />
              </div>
            )}
            <div className="flex-1 space-y-2">
              <h2 className="font-semibold text-2xl leading-tight">
                <strong className="text-foreground">{item.institution}</strong>
              </h2>
              <p className="text-lg text-muted-foreground italic">
                {item.degree}
              </p>
              <p className="font-semibold text-foreground">{item.period}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
