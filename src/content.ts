export type Article = {
  cover: string;
  title: string;
  summary: string;
  author: string;
};

export type Interview = {
  headshot: string;
  name: string;
  title: string;
  headline: string;
  summary: string;
};

export type Podcast = {
  cover: string;
  title: string;
};

export type EventItem = {
  cover: string;
  theme: string;
  location: string;
  time: string;
  guests: string;
};

export type Course = {
  cover: string;
  theme: string;
  mentor: string;
  intro: string;
  type: "Course" | "Workshop";
  location: string;
};

export type TopicItem = {
  kind: "Article" | "Podcast" | "Event";
  cover: string;
  title: string;
  intro: string;
};

export type Project = {
  cover: string;
  title: string;
  intro: string;
};

export type Partner = {
  logo: string;
  name: string;
};

export type PlatformLink = {
  label: string;
  url: string;
};

export type SiteContent = {
  articles: Article[];
  interviews: Interview[];
  podcasts: Podcast[];
  events: EventItem[];
  courses: Course[];
  neuroaesthetics: TopicItem[];
  projects: Project[];
  partners: Partner[];
  platforms: PlatformLink[];
};

const cover = (seed: string) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1200&q=82`;

export const defaultContent: SiteContent = {
  articles: [
    {
      cover: "/assets/A Paradigm Revolution in Brain Science.png",
      title: "A Paradigm Revolution in Brain Science",
      summary:
        "Looking back at the history of neuroscience, it becomes increasingly clear that a new paradigm shift may already be taking shape.",
      author: "Fanji Gu"
    },
    {
      cover: "/assets/Mirror Neurons.png",
      title: "Mirror Neurons: Reemerging After a Decade of Stigma",
      summary:
        "Over the past three decades, the study of mirror neurons has followed a trajectory as dramatic as a roller coaster. Has the label “mirror neuron” truly lost its appeal?",
      author: "Chin"
    },
    {
      cover: "/assets/“Democratic” Neural Networks.png",
      title: "“Democratic” Neural Networks: Compromising with Imperfection",
      summary:
        "“Democratic” neuron models are fundamentally crude. They do not reflect the true workings of the biological brain, but instead offer a highly simplified approximation. Yet precisely because of this simplicity and efficiency, these “democratic” neurons became the foundation of modern deep learning.",
      author: "Runzhe Yang"
    },
    {
      cover: "/assets/If the Brain Dislikes Surprise.png",
      title: "If the Brain Dislikes Surprise, Why Does It Struggle with Boredom?",
      summary:
        "Predictive coding, a framework often regarded as a candidate for a unified theory of the brain, encounters the “dark room problem.”",
      author: "Zekun Sun"
    },
    {
      cover: "/assets/Free Will.JPG",
      title: "Free Will, Lie Detectors, and “Mind Reading”",
      summary:
        "Whether we are prepared for it or not, mind reading has already arrived. Yet it is neither Aladdin’s magic lamp nor destined to become Pandora’s box.",
      author: "Yinzhu Yang"
    },
    {
      cover: "/assets/Is Cognitive Science Dead.jpg",
      title: "Is Cognitive Science Dead?",
      summary:
        "No one can definitively declare whether cognitive science as a discipline will ultimately fail, but humanity’s exploration of the mind will never come to a halt.",
      author: "Anjie Cao"
    },
    {
      cover: "/assets/Time and Consciousness in the Images of Life.jpg",
      title: "Time and Consciousness in the Images of Life",
      summary:
        "What we call the time of life is not only an image of the world, but also an image life constructs of itself.",
      author: "Rui Zhu"
    },
    {
      cover: "/assets/AI Has Bias Too.png",
      title: "AI Has Bias Too — So How Should We Trust It?",
      summary:
        "If the AI revolution is inevitable, then at the very least, interpretable systems may offer a better foundation for integrating into a new algorithmic social contract.",
      author: "Amecolli"
    }
  ],
  interviews: [
    {
      headshot: "/assets/Anil Seth.png",
      name: "Anil Seth",
      title: "Professor of Cognitive and Computational Neuroscience, University of Sussex",
      headline: "A conversation with Anil Seth",
      summary: "On consciousness, perception, and the scientific study of subjective experience."
    },
    {
      headshot: "/assets/David Poeppel.png",
      name: "David Poeppel",
      title: "Professor of Psychology and Neural Science, New York University",
      headline: "A conversation with David Poeppel",
      summary: "On language, auditory perception, and the neural architecture of communication."
    },
    {
      headshot: "/assets/Edward Boyden.png",
      name: "Edward Boyden",
      title: "Y. Eva Tan Professor in Neurotechnology, Massachusetts Institute of Technology",
      headline: "A conversation with Edward Boyden",
      summary: "On neurotechnology, tools for mapping the brain, and engineering new ways to observe life."
    },
    {
      headshot: "/assets/Krishna Shenoy.png",
      name: "Krishna Shenoy",
      title: "Hong Seh and Vivian W. M. Lim Professor, Stanford University",
      headline: "A conversation with Krishna Shenoy",
      summary: "On neural engineering, brain-computer interfaces, and translating signals into action."
    },
    {
      headshot: "/assets/Masud Husain.png",
      name: "Masud Husain",
      title: "Professor of Neurology & Cognitive Neuroscience, University of Oxford",
      headline: "A conversation with Masud Husain",
      summary: "On attention, cognition, and the clinical frontiers of cognitive neuroscience."
    },
    {
      headshot: "/assets/Nancy Ip.png",
      name: "Nancy Ip",
      title: "President, Hong Kong University of Science and Technology",
      headline: "A conversation with Nancy Ip",
      summary: "On brain science, university leadership, and building research ecosystems."
    },
    {
      headshot: "/assets/Rebecca Saxe.png",
      name: "Rebecca Saxe",
      title: "Professor of Cognitive Neuroscience, Massachusetts Institute of Technology",
      headline: "A conversation with Rebecca Saxe",
      summary: "On social cognition, development, and how humans understand other minds."
    },
    {
      headshot: "/assets/Xiaorong Gao.png",
      name: "Xiaorong Gao",
      title: "Professor of Biomedical Engineering, Tsinghua University",
      headline: "A conversation with Xiaorong Gao",
      summary: "On biomedical engineering, neural interfaces, and the future of applied brain science."
    }
  ],
  podcasts: [
    {
      cover: "/assets/An Interview with Ted Dobie.jpeg",
      title: "An Interview with Ted Dobie: Journals Are Born from the Soil of Science"
    },
    {
      cover: "/assets/Phantom Limbs.JPG",
      title: "Phantom Limbs, Epilepsy, and the Flame of Consciousness in the Physical World"
    },
    {
      cover: "/assets/The Crisis of Cognitive Science.jpeg",
      title: "The Crisis of Cognitive Science: Definitions, Paradigms, and the Problem of Consciousness"
    },
    {
      cover: "/assets/Can We Be Reduced to the Brain.jpg",
      title: "Can We Be Reduced to the Brain?"
    },
    {
      cover: "/assets/On Fear.jpg",
      title: "On Fear"
    },
    {
      cover: "/assets/The Brain as a Time Machine.jpg",
      title: "The Brain as a Time Machine"
    }
  ],
  events: [
    {
      cover: "/assets/Beijing Consciousness and Intelligence Summit.jpg",
      theme: "Beijing Consciousness and Intelligence Summit",
      location: "Beijing",
      time: "16 May 2026",
      guests:
        "The Frontiers of Consciousness: From Biology to Digital Minds, From Theory to Experience. Speakers: Huan Luo, Professor at the School of Psychological and Cognitive Sciences, Peking University, and Principal Investigator at the Peking University IDG/McGovern Institute for Brain Research; Lei Ma, Assistant Professor at the Peking University College of Future Technology, and Researcher at the National Biomedical Imaging Center; Jianhua Mei, Professor at the School of Philosophy and Sociology, Shanxi University."
    },
    {
      cover: "/assets/London Brain and Intelligence Summit.png",
      theme: "London Brain and Intelligence Summit",
      location: "London",
      time: "23 August 2025",
      guests:
        "Shaping the next paradigm in consciousness, cognition, and computation. Speakers: Tristan Bekinschtein, Professor of Consciousness and Cognition, University of Cambridge; Andrea Luppi, Wellcome Early Career Fellow at the University of Oxford, Fellow of St John’s College Cambridge; Devin B. Terhune, Reader in Experimental Psychology in the Institute of Psychiatry, Psychology, & Neuroscience at King’s College London."
    },
    {
      cover: "/assets/Neuromodulation.jpg",
      theme: "Neuromodulation: From Medical Applications to Commercial Translation",
      location: "Beijing",
      time: "6 March 2023",
      guests:
        "Speakers: He Cui, Senior Research Fellow at the Chinese Institute for Brain Research, Beijing; Zheng Wang, Research Fellow at the School of Psychological and Cognitive Sciences, Peking University."
    },
    {
      cover: "/assets/Does the Brain Flip Coins.png",
      theme: "Does the Brain Flip Coins? Exploring the Neural Mechanisms of Decision-Making",
      location: "Shanghai",
      time: "13 May 2019",
      guests:
        "Speaker: Tianming Yang, Researcher at the Institute of Neuroscience, Chinese Academy of Sciences and the Center for Excellence in Brain Science and Intelligence Technology."
    },
    {
      cover: "/assets/Turbulence in the Depths of the Mind.png",
      theme: "Turbulence in the Depths of the Mind: Autism and Schizophrenia",
      location: "TBA",
      time: "TBA",
      guests:
        "Speaker: Jun Yao, Researcher at the School of Life Sciences, Tsinghua University."
    }
  ],
  courses: [
    {
      cover: "/assets/Does the Brain Flip Coins.png",
      theme: "The Neuroscience of Decision-making",
      mentor: "Associate Professor at Dartmouth College",
      intro:
        "A course on neural computation, choice behavior, and the mechanisms that shape decisions.",
      type: "Course",
      location: "Online"
    },
    {
      cover: "/assets/Time and Consciousness in the Images of Life.jpg",
      theme: "The Neuroscience of Memory",
      mentor: "Lila Davachi, Professor of Psychology at Columbia University",
      intro:
        "A course on memory systems, learning, and how experience is transformed into durable knowledge.",
      type: "Course",
      location: "Online"
    },
    {
      cover: "/assets/London Brain and Intelligence Summit.png",
      theme: "How We Adapt Our Thinking and Behavior to Goals",
      mentor: "Faculty from University of Cambridge",
      intro:
        "A Cambridge-based course on cognitive flexibility, goal-directed behavior, and adaptive thought.",
      type: "Course",
      location: "Cambridge"
    },
    {
      cover: "/assets/“Democratic” Neural Networks.png",
      theme: "Cognitive Algorithms and Neural Mechanisms of Economic Games",
      mentor: "Faculty from University College London",
      intro:
        "A London course exploring economic games, decision models, and the neural mechanisms of social exchange.",
      type: "Course",
      location: "London"
    },
    {
      cover: "/assets/AI Has Bias Too.png",
      theme: "Understanding Intelligent Agents",
      mentor: "Faculty from Imperial College London",
      intro:
        "A workshop on intelligent agents, agency, and the conceptual foundations of current AI systems.",
      type: "Workshop",
      location: "London"
    }
  ],
  neuroaesthetics: [
    {
      kind: "Article",
      cover: cover("photo-1547891654-e66ed7ebb968"),
      title: "Why Beauty Changes Attention",
      intro:
        "A field note on aesthetics, perception, and the cognitive architecture of preference."
    },
    {
      kind: "Podcast",
      cover: cover("photo-1500530855697-b586d89ba3ee"),
      title: "The Brain in the Gallery",
      intro:
        "A conversation on art, prediction, and the neuroscience of visual experience."
    },
    {
      kind: "Event",
      cover: cover("photo-1505373877841-8d25f7d46678"),
      title: "Neuroaesthetics Roundtable",
      intro:
        "A gathering for scientists, curators, designers, and educators exploring experience."
    }
  ],
  projects: [
    {
      cover: "/assets/Free Will.JPG",
      title: "Cognitive Science Special Issue",
      intro:
        "Editorial planning, topic development, and public-facing translation for a neuroscience publishing program."
    },
    {
      cover: "/assets/Time and Consciousness in the Images of Life.jpg",
      title: "International Conference on Predictive Processing",
      intro:
        "A continuing academic collaboration connecting philosophy, cognitive science, and public dialogue."
    },
    {
      cover: cover("photo-1494526585095-c41746248156"),
      title: "Science and Venture Forum",
      intro:
        "Connecting research with innovation through institution-led conversation."
    }
  ],
  partners: [
    { logo: "/assets/partners/AntGroup.png", name: "Ant Group" },
    { logo: "/assets/partners/BerggruenInstitute.png", name: "Berggruen Institute" },
    { logo: "/assets/partners/ByteDance.png", name: "ByteDance" },
    { logo: "/assets/partners/CIBR.png", name: "CIBR" },
    { logo: "/assets/partners/Cell Press.png", name: "Cell Press" },
    { logo: "/assets/partners/Frontiers.png", name: "Frontiers" },
    { logo: "/assets/partners/Qwen.png", name: "Qwen" },
    { logo: "/assets/partners/ScientificAmerican.png", name: "Scientific American" },
    { logo: "/assets/partners/Tencent.png", name: "Tencent" },
    { logo: "/assets/partners/Wiley.png", name: "Wiley" },
    { logo: "/assets/partners/ZhenFund.png", name: "ZhenFund" }
  ],
  platforms: [
    { label: "Instagram", url: "https://example.com" },
    { label: "X", url: "https://example.com" },
    { label: "LinkedIn", url: "https://example.com" },
    { label: "YouTube", url: "https://example.com" }
  ]
};
