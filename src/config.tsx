const config = {
  info: {
    name: "TRAN Thi Hong Hanh",
    shortName: "Hanh Tran",
    brief: `I am a Ph.D. student in the Cotuelle program between La Rochelle University, France, and Jožef Stefan Institute, Slovenia supervised by Prof. Antoine Doucet and Assist. Prof. Senja Pollak. Previously, I worked as a Data Scientist at Samsung SDSV.
My research interest lies between natural language processing and machine learning, information extraction, low-resourced languages, large-scale language models, and prompting.`,
    avatar: "/images/avatar.jpg",
    email: "thi.tran@univ-lr.fr",
    nationality: "Vietnamese",
    address: "La Rochelle, France",
    titles: "Ph.D. Student",
    languages: "Vietnamese, English, French",
    socials: [
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
        icon: "/images/La_Rochelle_University.png",
      },
    ],
  },
  news: [
    {
      date: "Oct 2023",
      content: (
        <>
          I taught{" "}
          <a
            href="https://course.vietai.org/courses/build-applications-with-openai-api"
            target="_blank"
          >
            <span>Build Applications with OpenAI API</span>
          </a>{" "}
          course at{" "}
          <a href="https://course.vietai.org/" target="_blank">
            VietAI.
          </a>
        </>
      ),
    },
    {
      date: "Sep 2023",
      content: (
        <>
          I became the Program Committee at{" "}
          <a href="https://contents2023.kulak.kuleuven.be/" target="_blank">
            Computational Terminology in NLP & Translation Studies (ConTeNTS)
          </a>
          at{" "}
          <a href="https://ranlp.org/ranlp2023/" target="_blank">
            RANLP 2023.
          </a>
        </>
      ),
    },
    {
      date: "July - August 2023",
      content: (
        <>
          I joined{" "}
          <a href="https://2023.esslli.eu/" target="_blank">
            34TH EUROPEAN SUMMER SCHOOL IN LOGIC, LANGUAGE AND INFORMATION
          </a>{" "}
          in Ljubljana, Slovenia
        </>
      ),
    },
    {
      date: "June - July 2023",
      content: (
        <>
          I joined{" "}
          <a href="https://mlss2023.mlinpl.org/" target="_blank">
            MACHINE LEARNING SUMMER SCHOOL ON APPLICATIONS IN SCIENCE
          </a>{" "}
          in Krakow, Poland.
        </>
      ),
    },
    {
      date: "May 2023",
      content: (
        <>
          I joined{" "}
          <a href="https://2023.eacl.org/" target="_blank">
            The 17th Conference of the European Chapter of the Association for
            Computational Linguistics
          </a>
          , Dubrovnik, Croatia.
          <br />I taught the{" "}
          <a
            href="https://course.vietai.org/courses/chatgpt-bard-for-everyone"
            target="_blank"
          >
            ChatGPT/Bard for Everyone
          </a>{" "}
          course at{" "}
          <a href="https://course.vietai.org/" target="_blank">
            VietAI.
          </a>
        </>
      ),
    },
    {
      date: "March 2023",
      content: (
        <>
          I joined{" "}
          <a href="https://www.santannapisa.it/it/alta-formazione/eelisa-spring-school-ethos-tekhne-new-generation-ai-researchers">
            EELISA spring school &quot;Ethos + Tekhne: a new generation of AI
            researchers
          </a>
          , Pisa, Italy.
        </>
      ),
    },
  ],
  publications: [
    {
      image: "/images/papers/paper_1.png",
      title:
        "L3I++ at SemEval-2023 Task 2: Prompting for Multilingual Complex NER",
      link: "https://aclanthology.org/2023.semeval-1.112.pdf",
      authors: [
        "Carlos-Emiliano González-Gallardo",
        { name: "Hanh Thi Hong Tran", bold: true },
        "Nancy Girdhar",
        "Emanuela Boros",
        "Jose G Moreno",
        "Antoine Doucet",
      ],
      date: "2023",
      published:
        "Proceedings of the The 17th International Workshop on Semantic Evaluation (SemEval-2023)",
      summary:
        "We develop methods to detect semantic ambiguous and complex entities in short and low-context settings of Complex NER using three different prompt-based approaches.",
    },
    {
      image: "/images/papers/paper_2.png",
      title:
        "Ensembling transformers for cross-domain automatic term extraction",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-21756-2_7",
      authors: [
        { name: "Hanh Thi Hong Tran", bold: true },
        "Matej Martinc",
        "Andraz Pelicon",
        "Antoine Doucet",
        "Senja Pollak",
      ],
      date: "Cham: Springer International Publishing, 2022",
      published:
        "International Conference on Asian Digital Libraries (ICADL, 2022)",
      summary:
        "We propose a comparative study on the predictive power of Transformers at extracting single- and multi-word terms in a multilingual cross-domain setting with and without ensembling approaches.",
    },
    {
      image: "/images/papers/paper_3.png",
      title:
        "Can cross-domain term extraction benefit from cross-lingual transfer?",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-18840-4_26",
      authors: [
        { name: "Hanh Thi Hong Tran", bold: true },
        "Matej Martinc",
        "Antoine Doucet",
        "Senja Pollak",
      ],
      date: "Cham: Springer Nature Switzerland, 2022",
      published: "International Conference on Discovery Science (DS, 2022)",
      summary:
        "We evaluate the abilities of cross-lingual and multilingual versus monolingual learning in the cross-domain to automatic term extraction.",
    },
    {
      image: "/images/papers/paper_4.png",
      title:
        "Named entity recognition architecture combining contextual and global features",
      link: "https://link.springer.com/chapter/10.1007/978-3-030-91669-5_21",
      authors: [
        { name: "Hanh Thi Hong Tran", bold: true },
        "Antoine Doucet",
        "Nicolas Sidere",
        "Jose G Moreno",
        "Senja Pollak",
      ],
      date: "Cham: Springer International Publishing, 2021",
      published:
        "International Conference on Asian Digital Libraries (ICADL, 2021)",
      summary:
        "We propose the combination of contextual features from XLNet and global features from the Graph Convolution Network (GCN) to enhance NER performance.",
    },
  ],
  education: [
    {
      image: "/images/La_Rochelle_University.png",
      school: "University of La Rochelle, France",
      link: "https://ent.univ-lr.fr/",
      degree: "Ph.D Student in Cotuelle Program",
      date: "2021-now",
      program: (
        <>
          doctoral program between{" "}
          <strong>La Rochelle University, France</strong>, and{" "}
          <strong>Jozef Stefan Institute, Slovenia.</strong>
        </>
      ),
      additional: [
        "Topic: Cross-lingual cross-domain terminology extraction on less-resourced languages",
      ],
    },
    {
      school: "WorldQuant University, USA",
      link: "https://wqu.org/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/72/WQU_logo_color.png",
      degree: "Master of Science, Financial Engineering",
      date: "2021-2023",
    },
    {
      school: "University of Montpellier, France",
      link: "https://www.umontpellier.fr/en/",
      image: "/images/logo_um.svg",
      degree:
        "Master of Science, Technology, Health, Information Technology and Communication Infrastructure Engineering for Big Data Analysis",
      date: "2019-2020",
    },
    {
      school: "University of Science and Technology in Hanoi, Vietnam",
      link: "https://usth.edu.vn/en/",
      image: "/images/usth.png",
      degree: "Master of Science, Information Technology and Communication",
      date: "2017-2021",
    },
  ],
  teachings: [
    {
      date: "2021-Now",
      organization: "Teacher VietAI, Vietnam",
      courses: [
        "Pre-Machine Learning",
        "Foundation of Deep Learning classes",
        "ChatGPT for everyone",
        "Build applications with OpenAI",
      ],
    },
    {
      date: "2021-2022",
      organization: "Python Trainer MCI, Vietnam",
      courses: [
        "Python for Data Analysis	",
        "Python for Machine Learning & Deep Learning",
      ],
    },
    {
      date: "2016-2017",
      organization: "Program Manager BeeCode, Vietnam ",
      courses: ["Computer Science classes", "Summer schools"],
    },
  ],
  works: [
    {
      date: "2020-2021",
      title: (
        <>
          Data Scientist and Consultant at <strong>3T JSC</strong>, Vietnam
        </>
      ),
      description: (
        <ul>
          <li>
            Built solutions for internal & external products, including:
            <ul>
              <li>
                Developed innovative solutions for both internal and external
                products.
              </li>
              <li>
                Spearheaded the design and implementation of a Credit Scoring
                System, successfully deployed in a major bank and two fintech
                companies in Vietnam
              </li>
              <li>
                Engineered the Barem KPI system, evaluating the call quality and
                content in call centers.
              </li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      date: "2019-2020",
      title: (
        <>
          Data Scientist at <strong>Samsung SDSV</strong>, Vietnam
        </>
      ),
      description: (
        <ul>
          <li>
            Contributed to the development of the Brightics AI core product by
            building the Brightics Law feature.
            <ul>
              <li>
                Pioneered the classification of standard contracts based on
                provided contract formats from Samsung.
              </li>
              <li>
                Implemented cutting-edge techniques for extracting crucial
                entities within contracts.
              </li>
              <li>
                Successfully classified Provision/Benefit types in adherence to
                Vietnamese laws.
              </li>
            </ul>
          </li>
        </ul>
      ),
    },
  ],
  sideProjects: [
    {
      image: "/images/project_1.png",
      title: "Zootopi",
      link: "https://zootopi.dev/",
      description:
        "A personal platform to share knowledge, projects, and blogs.",
    },
  ],
  footer: {
    copyright: `@${new Date().getFullYear()} Hanh Thi Hong Tran.`,
  },
  header: {
    links: [
      {
        label: "Home",
        path: "/",
      },
      {
        label: "Education",
        path: "/education",
      },
      {
        label: "Side projects",
        path: "/side-projects",
      },
      {
        label: "Resume",
        path: "/resume",
      },
    ],
  },
};

export default config;
