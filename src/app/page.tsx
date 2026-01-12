import { Sparkles } from "lucide-react";
import Image from "next/image";

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="text-blue-500 hover:underline"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const newsItems = [
    {
      date: "January 2025",
      content: (
        <p>
          I became a reviewer for{" "}
          <Link href="https://conll.org/">
            The SIGNLL Conference on Computational Natural Language Learning
          </Link>{" "}
          (CoNLL 2025).
        </p>
      ),
    },
    {
      date: "September 2024",
      content: (
        <p>
          I joined as an NLP Engineer in{" "}
          <Link href="https://www.arkhn.com/">Arkhn</Link>, Paris, France.
        </p>
      ),
    },
    {
      date: "September 2024",
      content: (
        <p>
          One of the 3 accepted papers got "Best Paper Awards" at the{" "}
          <Link href="https://tpdl2024.nuk.si/">
            28th International Conference on Theory and Practice of Digital
            Libraries
          </Link>
          (TPDL), 2024.
        </p>
      ),
    },
    {
      date: "August 2024",
      content: (
        <p>
          I taught{" "}
          <Link href="https://course.vietai.org/courses/GENERATIVE-AI-FOR-EVERYONE-2024">
            Generative AI for Everyone
          </Link>{" "}
          course at <Link href="https://course.vietai.org/">VietAI</Link>
        </p>
      ),
    },
    {
      date: "July 2024",
      content:
        'I gave seminars about "Terminology in the era of LLMs" at the University of Coimbra, Portugal, and the University of Malta, Malta.',
    },
    {
      date: "June 2024",
      content: (
        <p>
          I became a reviewer for{" "}
          <Link href="https://conll.org/">
            The SIGNLL Conference on Computational Natural Language Learning
          </Link>{" "}
          (CoNLL 2024) and{" "}
          <Link href="https://coling2025.org/">
            The 31st International Conference on Computational Linguistics
          </Link>{" "}
          (COLING 2025).
        </p>
      ),
    },
    {
      date: "February 2024",
      content: (
        <p>
          I became the Program Committee for the
          <Link href="https://sites.google.com/view/textgraphs2024">
            17th Workshop on Graph-Based Natural Language Processing
            (TextGraphs-17)
          </Link>{" "}
          co-located with ACL-2024 in Bangkok, Thailand
        </p>
      ),
    },
    {
      date: "December 2023",
      content: (
        <p>
          I became Student Session Chairs at{" "}
          <Link href="https://2024.esslli.eu/">
            35th European Summer School in Logic, Language, and Information
          </Link>{" "}
          in Leuven, Belgium.
        </p>
      ),
    },
    {
      date: "Oct 2023",
      content: (
        <p>
          I taught{" "}
          <Link href="https://course.vietai.org/courses/build-applications-with-openai-api">
            Build Applications with OpenAI API
          </Link>{" "}
          course at <Link href="https://course.vietai.org/">VietAI</Link>.
        </p>
      ),
    },
    {
      date: "Sep 2023",
      content: (
        <p>
          I became a Program Committee of{" "}
          <Link href="https://contents2023.kulak.kuleuven.be/">
            Computational Terminology in NLP & Translation Studies (ConTeNTS)
          </Link>{" "}
          at <Link href="https://ranlp.org/ranlp2023/">RANLP 2023</Link>
        </p>
      ),
    },
    {
      date: "July - August 2023",
      content: (
        <p>
          I joined{" "}
          <Link href="https://2023.esslli.eu/">
            34TH EUROPEAN SUMMER SCHOOL IN LOGIC, LANGUAGE AND INFORMATION
          </Link>{" "}
          in Ljubljana, Slovenia.
        </p>
      ),
    },
    {
      date: "June - July 2023",
      content: (
        <p>
          I joined{" "}
          <Link href="https://mlss2023.mlinpl.org/">
            MACHINE LEARNING SUMMER SCHOOL ON APPLICATIONS IN SCIENCE
          </Link>{" "}
          in Krakow, Poland.
        </p>
      ),
    },
    {
      date: "May 2023",
      content: (
        <p>
          I joined{" "}
          <Link href="https://2023.eacl.org/">
            The 17th Conference of the European Chapter of the Association for
            Computational Linguistics
          </Link>{" "}
          in Dubrovnik, Croatia.
          <br />I taught the{" "}
          <Link href="https://course.vietai.org/courses/chatgpt-bard-for-everyone">
            ChatGPT/Bard for Everyone
          </Link>{" "}
          course at <Link href="https://course.vietai.org/">VietAI</Link>.
        </p>
      ),
    },
    {
      date: "March 2023",
      content: (
        <p>
          I joined
          <Link href="https://www.santannapisa.it/it/alta-formazione/eelisa-spring-school-ethos-tekhne-new-generation-ai-researchers">
            EELISA spring school "Ethos + Tekhne: a new generation of AI
            researchers
          </Link>{" "}
          in Pisa, Italy.
        </p>
      ),
    },
  ];

  const publications = [
    {
      title:
        "LIAS: Layout Information-Based Article Separation in Historical Newspapers",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-72437-4_15",
      authors: [
        { name: "Wenjun Sun", bold: false },
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Carlos-Emiliano González-Gallardo", bold: false },
        { name: "Mickaël Coustaty", bold: false },
        { name: "Antoine Doucet", bold: false },
      ],
      venue:
        "International Conference on Theory and Practice of Digital Libraries (TPDL 2024)",
      description:
        "We propose LIAS, a method based on layout information, and conduct experiments on historical newspapers. The method initially identifies the separator lines of the newspaper, analyzes the layout information to reconstruct the in- formation flow of the document, performs segmentation based on the semantic relationship of each text block in the information flow, and ultimately achieves article separation.",
      image: "lias.webp",
    },
    {
      title: "LIT: Label-Informed Transformers on Token-Based Classification",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-72437-4_16",
      authors: [
        { name: "Wenjun Sun", bold: false },
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Carlos-Emiliano González-Gallardo", bold: false },
        { name: "Mickaël Coustaty", bold: false },
        { name: "Antoine Doucet", bold: false },
      ],
      venue:
        "International Conference on Theory and Practice of Digital Libraries (TPDL 2024)",
      description:
        "We propose LIT, an end-to-end pipeline architecture that integrates the transformer's encoder-decoder mechanism with an additional label semantic to token classification tasks.",
      image: "lit.webp",
    },
    {
      title:
        "Leveraging Open Large Language Models for Historical Named Entity Recognition",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-72437-4_22",
      authors: [
        { name: "Carlos-Emiliano González-Gallardo", bold: false },
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Ahmed Hamdi", bold: false },
        { name: "Antoine Doucet", bold: false },
      ],
      venue:
        "International Conference on Theory and Practice of Digital Libraries (TPDL 2024)",
      badge: "Best Paper Awards",
      description:
        "We develop methods to detect semantic ambiguous and complex entities in short and low-context settings of Complex NER using three different prompt-based approaches.",
      image:
        "Leveraging Open Large Language Models for Historical Named Entity Recognition.webp",
    },
    {
      title: "Is Prompting What Term Extraction Needs?",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-70563-2_2",
      authors: [
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Carlos-Emiliano González-Gallardo", bold: false },
        { name: "Julien Delaunay", bold: false },
        { name: "Antoine Doucet", bold: false },
        { name: "Senja Pollak", bold: false },
      ],
      venue:
        "International Conference on Text, Speech, and Dialogue (TSD 2024)",
      description:
        "We evaluate the applicability of open and closed-sourced LLMs on the ATE task compared to two benchmarks where we consider ATE as sequence-labeling (iobATE) and seq2seq (templATE) tasks.",
      image: "Is Prompting What Term Extraction Needs.webp",
    },
    {
      title:
        "Global-SEG: Text Semantic Segmentation Based on Global Semantic Pair Relations",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-70546-5_15",
      authors: [
        { name: "Wenjun Sun", bold: false },
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Carlos-Emiliano González-Gallardo", bold: false },
        { name: "Mickaël Coustaty", bold: false },
        { name: "Antoine Doucet", bold: false },
      ],
      venue:
        "International Conference on Document Analysis and Recognition (ICDAR 2024)",
      description:
        "We propose Global-SEG, utilizing global semantic pair relations from both token- and sentence-level language models for text semantic segmentation.",
      image: "Global-SEG.webp",
    },
    {
      title:
        "Can cross-domain term extraction benefit from cross-lingual transfer and nested term labeling?",
      url: "https://link.springer.com/article/10.1007/s10994-023-06506-7",
      authors: [
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Matej Martinc", bold: false },
        { name: "Andraz Repar", bold: false },
        { name: "Nikola Ljubešić", bold: false },
        { name: "Antoine Doucet", bold: false },
        { name: "& Senja Pollak", bold: false },
      ],
      venue: "Machine Learning, 2024",
      description:
        "We propose a novel NOBI annotation regime and evaluate the abilities of cross-lingual and multilingual versus monolingual learning in the cross-domain to automatic term extraction.",
      image:
        "Can cross-domain term extraction benefit from cross-lingual transfer and nested term labeling.webp",
    },
    {
      title:
        "L3I++ at SemEval-2024 Task 8: Can Fine-tuned LLM Detect Multigenerator, Multidomain, and Multilingual Black-Box Machine-Generated Text?",
      url: "https://aclanthology.org/2024.semeval-1.3.pdf",
      authors: [
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Tien Nam Nguyen", bold: false },
        { name: "Antoine Doucet", bold: false },
        { name: "Senja Pollak", bold: false },
      ],
      venue:
        "Proceedings of the The 18th International Workshop on Semantic Evaluation (SemEval-2024)",
      description:
        "We propose a comparative study among three groups of methods to trigger the detection: (1) Using metric-based models; (2) Using a fine-tuned sequence-labeling language model (LM); and (3) Using a fine-tuned large-scale language model (LLM).",
      image: "L3I task 8.webp",
    },
    {
      title:
        "L3I++ at SemEval-2023 Task 2: Prompting for Multilingual Complex NER",
      url: "https://aclanthology.org/2023.semeval-1.112.pdf",
      authors: [
        { name: "Carlos-Emiliano González-Gallardo", bold: false },
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Nancy Girdhar", bold: false },
        { name: "Emanuela Boros", bold: false },
        { name: "Jose G Moreno", bold: false },
        { name: "Antoine Doucet", bold: false },
      ],
      venue:
        "Proceedings of the The 17th International Workshop on Semantic Evaluation (SemEval-2023)",
      description:
        "We develop methods to detect semantic ambiguous and complex entities in short and low-context settings of Complex NER using three different prompt-based approaches.",
      image: "L3I task 2.webp",
    },
    {
      title:
        "Ensembling Transformers for Cross-domain Automatic Term Extraction",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-21756-2_7",
      authors: [
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Matej Martinc", bold: false },
        { name: "Andraz Pelicon", bold: false },
        { name: "Antoine Doucet", bold: false },
        { name: "Senja Pollak", bold: false },
      ],
      venue:
        "International Conference on Asian Digital Libraries (ICADL, 2022)",
      description:
        "We propose a comparative study on the predictive power of Transformers at extracting single- and multi-word terms in a multilingual cross-domain setting with and without ensembling approaches.",
      image:
        "Ensembling Transformers for Cross-domain Automatic Term Extraction.webp",
    },
    {
      title:
        "Can Cross-domain Term Extraction Benefit from Cross-lingual Transfer?",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-18840-4_26",
      authors: [
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Matej Martinc", bold: false },
        { name: "Antoine Doucet", bold: false },
        { name: "Senja Pollak", bold: false },
      ],
      venue: "International Conference on Discovery Science (DS, 2022)",
      description:
        "We evaluate the abilities of cross-lingual and multilingual versus monolingual learning in the cross-domain to automatic term extraction.",
      image:
        "Can Cross-domain Term Extraction Benefit from Cross-lingual Transfer.webp",
    },
    {
      title:
        "Named Entity Recognition Architecture Combining Contextual and Global Features",
      url: "https://link.springer.com/chapter/10.1007/978-3-030-91669-5_21",
      authors: [
        { name: "Hanh Thi Hong Tran", bold: true },
        { name: "Antoine Doucet", bold: false },
        { name: "Nicolas Sidere", bold: false },
        { name: "Jose G Moreno", bold: false },
        { name: "Senja Pollak", bold: false },
      ],
      venue:
        "International Conference on Asian Digital Libraries (ICADL, 2021)",
      description:
        "We propose the combination of contextual features from XLNet and global features from the Graph Convolution Network (GCN) to enhance NER performance.",
      image:
        "Named Entity Recognition Architecture Combining Contextual and Global Features.webp",
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="shrink-0">
            <Image
              alt="Hanh Tran"
              className="rounded-md"
              height={200}
              src="/images/Hanh.jpg"
              width={200}
            />
          </div>
          <div className="flex-1 space-y-4 text-lg leading-relaxed">
            <h1 className="flex items-center gap-2 font-bold text-4xl text-foreground tracking-tight">
              Hello, I&apos;m Hanh Tran
              <Sparkles className="h-8 w-8 text-yellow-400" />
            </h1>
            <p className="text-foreground/90">
              I am an NLP Engineer at{" "}
              <strong className="text-foreground">Arkhn</strong>.
            </p>
            <p className="text-foreground/90">
              I got my Ph.D. diploma in the Cotuelle program between{" "}
              <strong className="text-foreground">
                La Rochelle University
              </strong>
              , France, and{" "}
              <strong className="text-foreground">
                Jožef Stefan Institute
              </strong>
              , Slovenia supervised by Prof. Antoine Doucet and Assist. Prof.
              Senja Pollak. Previously, I worked as a Data Scientist at{" "}
              <strong className="text-foreground">Samsung SDSV</strong>.
            </p>
            <p className="text-foreground/90">
              My research interests are natural language processing, information
              extraction, low-resourced languages, generative AI, and
              large-scale language models.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="mb-16">
        <h2 className="mb-8 font-bold text-3xl text-foreground tracking-tight">
          NEWS
        </h2>
        <ul className="space-y-6">
          {newsItems.map((item, index) => (
            <li className="flex flex-col gap-2 sm:flex-row" key={index}>
              <span className="min-w-[140px] font-semibold text-foreground sm:min-w-[180px]">
                {item.date}:
              </span>
              <span className="text-muted-foreground italic leading-relaxed">
                {item.content}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Publications Section */}
      <section className="mb-16">
        <h2 className="mb-4 font-bold text-3xl text-foreground tracking-tight">
          PUBLICATIONS
        </h2>
        <p className="mb-8 text-muted-foreground leading-relaxed">
          For a complete list of publications, please refer to my{" "}
          <a
            className="cursor-pointer text-primary transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href="https://scholar.google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Scholar page
          </a>
          .
        </p>
        <div className="space-y-6">
          {publications.map((pub) => (
            <article
              className="group flex flex-col gap-4 rounded-lg border border-border/50 bg-card p-4 transition-all duration-200 hover:border-primary/50 hover:shadow-lg sm:flex-row sm:p-6"
              key={pub.title}
            >
              {pub.image && (
                <div className="shrink-0 overflow-hidden rounded-lg sm:w-48">
                  <Image
                    alt={pub.title}
                    className="h-auto w-full object-contain transition-transform duration-200 group-hover:scale-105"
                    height={200}
                    src={`/images/${pub.image}`}
                    width={200}
                  />
                </div>
              )}
              <div className="flex-1 space-y-2">
                <a href={pub.url} rel="noopener noreferrer" target="_blank">
                  <h3 className="font-semibold text-xl leading-tight">
                    <strong className="text-foreground">{pub.title}</strong>
                  </h3>
                </a>
                <p className="text-muted-foreground">
                  {pub.authors.map((author, i) => (
                    <span key={`${author.name}-${i}`}>
                      {author.bold ? (
                        <strong className="text-foreground">
                          {author.name}
                        </strong>
                      ) : (
                        author.name
                      )}
                      {i < pub.authors.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <p className="text-muted-foreground italic">{pub.venue}</p>
                {pub.badge && (
                  <p className="inline-block rounded-md bg-primary/10 px-3 py-1 font-semibold text-primary text-sm">
                    ({pub.badge})
                  </p>
                )}
                <p className="mt-2 text-muted-foreground italic">
                  {pub.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
