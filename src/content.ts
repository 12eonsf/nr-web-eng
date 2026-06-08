export type Article = {
  cover: string;
  title: string;
  summary: string;
  author: string;
  link?: string;
};

export type Interview = {
  headshot: string;
  name: string;
  title: string;
  headline: string;
  summary: string;
  link?: string;
};

export type Podcast = {
  cover: string;
  title: string;
  link?: string;
};

export type EventItem = {
  cover: string;
  theme: string;
  location: string;
  time: string;
  guests: string;
  link?: string;
};

export type Course = {
  cover: string;
  theme: string;
  mentor?: string;
  mentorAvatar?: string | null;
  mentorAvatarVariant?: "photo" | "logo";
  mentorName: string;
  mentorTitle: string;
  intro: string;
  details?: {
    format?: string;
    duration?: string;
    capacity?: string;
    start?: string;
    platform?: string;
    venue?: string;
  };
  tags?: string[] | string;
  enrollmentStatus?: "open" | "completed";
  type: "Course" | "Workshop";
  location: string;
};

export type TopicItem = {
  kind: "Article" | "Podcast" | "Event";
  cover: string;
  title: string;
  intro: string;
  link?: string;
  author?: string;
  guests?: string;
  time?: string;
  speakers?: string;
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
      author: "Fanji Gu",
      link: "https://neu-reality.com/2021/01/the-paradigm-shift-of-brain-sciences/"
    },
    {
      cover: "/assets/Mirror Neurons.png",
      title: "Mirror Neurons: Reemerging After a Decade of Stigma",
      summary:
        "Over the past three decades, the study of mirror neurons has followed a trajectory as dramatic as a roller coaster. Has the label “mirror neuron” truly lost its appeal?",
      author: "Chin",
      link: "https://neu-reality.com/2024/10/mirror-neuron-defending/"
    },
    {
      cover: "/assets/“Democratic” Neural Networks.png",
      title: "“Democratic” Neural Networks: Compromising with Imperfection",
      summary:
        "“Democratic” neuron models are fundamentally crude. They do not reflect the true workings of the biological brain, but instead offer a highly simplified approximation. Yet precisely because of this simplicity and efficiency, these “democratic” neurons became the foundation of modern deep learning.",
      author: "Runzhe Yang",
      link: "https://neu-reality.com/2020/06/democracy-in-neurons/"
    },
    {
      cover: "/assets/If the Brain Dislikes Surprise.png",
      title: "If the Brain Dislikes Surprise, Why Does It Struggle with Boredom?",
      summary:
        "Predictive coding, a framework often regarded as a candidate for a unified theory of the brain, encounters the “dark room problem.”",
      author: "Zekun Sun",
      link: "https://neu-reality.com/2020/05/predictive-coding-the-dark-room-problem/"
    },
    {
      cover: "/assets/Free Will.JPG",
      title: "Free Will, Lie Detectors, and “Mind Reading”",
      summary:
        "Whether we are prepared for it or not, mind reading has already arrived. Yet it is neither Aladdin’s magic lamp nor destined to become Pandora’s box.",
      author: "Yinzhu Yang",
      link:
        "https://neu-reality.com/2022/12/%e7%a5%9e%e7%bb%8f%e6%bc%ab%e8%b0%88-%e8%87%aa%e7%94%b1%e6%84%8f%e5%bf%97%e3%80%81%e6%b5%8b%e8%b0%8e%e4%bb%aa%e4%b8%8e%e8%af%bb%e5%bf%83%e6%9c%af/"
    },
    {
      cover: "/assets/Is Cognitive Science Dead.jpg",
      title: "Is Cognitive Science Dead?",
      summary:
        "No one can definitively declare whether cognitive science as a discipline will ultimately fail, but humanity’s exploration of the mind will never come to a halt.",
      author: "Anjie Cao",
      link: "https://neu-reality.com/2019/09/is-cognitive-science-dead/"
    },
    {
      cover: "/assets/Time and Consciousness in the Images of Life.jpg",
      title: "Time and Consciousness in the Images of Life",
      summary:
        "What we call the time of life is not only an image of the world, but also an image life constructs of itself.",
      author: "Rui Zhu",
      link: "https://mp.weixin.qq.com/s/4N7nGC5tozylAKsniym1lQ"
    },
    {
      cover: "/assets/AI Has Bias Too.png",
      title: "AI Has Bias Too — So How Should We Trust It?",
      summary:
        "If the AI revolution is inevitable, then at the very least, interpretable systems may offer a better foundation for integrating into a new algorithmic social contract.",
      author: "Amecolli",
      link: "https://neu-reality.com/2020/05/xai/"
    }
  ],
  interviews: [
    {
      headshot: "/assets/Anil Seth.png",
      name: "Anil Seth",
      title: "Professor of Cognitive and Computational Neuroscience, University of Sussex",
      headline: "A conversation with Anil Seth on Consciousness",
      summary: "On consciousness, perception, and the scientific study of subjective experience."
    },
    {
      headshot: "/assets/David Poeppel.png",
      name: "David Poeppel",
      title: "Professor of Psychology and Neural Science, New York University",
      headline: "A conversation with David Poeppel on Language and Speech",
      summary: "On language, auditory perception, and the neural architecture of communication.",
      link: "https://neu-reality.com/2021/01/interview-7-neuroscientists/"
    },
    {
      headshot: "/assets/Edward Boyden.png",
      name: "Edward Boyden",
      title: "Y. Eva Tan Professor in Neurotechnology, Massachusetts Institute of Technology",
      headline: "A conversation with Edward Boyden on Brain Technology",
      summary: "On neurotechnology, tools for mapping the brain, and engineering new ways to observe life.",
      link: "https://neu-reality.com/2021/09/ed-boyden-interview/"
    },
    {
      headshot: "/assets/Krishna Shenoy.png",
      name: "Krishna Shenoy",
      title: "Hong Seh and Vivian W. M. Lim Professor, Stanford University",
      headline: "A conversation with Krishna Shenoy on Brain-to-Text Communication",
      summary: "On neural engineering, brain-computer interfaces, and translating signals into action.",
      link: "https://mp.weixin.qq.com/s/lOrElYanU5Spy8NXUZkkdA"
    },
    {
      headshot: "/assets/Masud Husain.png",
      name: "Masud Husain",
      title: "Professor of Neurology & Cognitive Neuroscience, University of Oxford",
      headline: "A conversation with Masud Husain on Attention and Motivation",
      summary: "On attention, cognition, and the clinical frontiers of cognitive neuroscience.",
      link: "https://neu-reality.com/2021/01/interview-7-neuroscientists/"
    },
    {
      headshot: "/assets/Nancy Ip.png",
      name: "Nancy Ip",
      title: "President, Hong Kong University of Science and Technology",
      headline: "A conversation with Nancy Ip on Alzheimer's Disease",
      summary: "On brain science, university leadership, and building research ecosystems.",
      link: "https://neu-reality.com/2023/07/interview-nacy-lp/"
    },
    {
      headshot: "/assets/Rebecca Saxe.png",
      name: "Rebecca Saxe",
      title: "Professor of Cognitive Neuroscience, Massachusetts Institute of Technology",
      headline: "A conversation with Rebecca Saxe on Social Cognition",
      summary: "On social cognition, development, and how humans understand other minds.",
      link: "https://mp.weixin.qq.com/s/tI9tp7suLfwiUWtmfjMECg"
    },
    {
      headshot: "/assets/Xiaorong Gao.png",
      name: "Xiaorong Gao",
      title: "Professor of Biomedical Engineering, Tsinghua University",
      headline: "A conversation with Xiaorong Gao on Invasive Brain-Computer Interfaces",
      summary: "On biomedical engineering, neural interfaces, and the future of applied brain science.",
      link: "https://neu-reality.com/2025/04/interview-gao-xiao-rong-bci/"
    }
  ],
  podcasts: [
    {
      cover: "/assets/An Interview with Ted Dobie.jpeg",
      title: "An Interview with Ted Dobie: Journals Are Born from the Soil of Science",
      link: "https://open.spotify.com/episode/3P9zegJ4CRzy8n6onsypFQ?si=05bab95464114e67"
    },
    {
      cover: "/assets/Phantom Limbs.JPG",
      title: "Phantom Limbs, Epilepsy, and the Flame of Consciousness in the Physical World",
      link: "https://open.spotify.com/episode/1VY4Absn8U0poMlHlyMWci?si=527dc24e03a84be7"
    },
    {
      cover: "/assets/The Crisis of Cognitive Science.jpeg",
      title: "The Crisis of Cognitive Science: Definitions, Paradigms, and the Problem of Consciousness",
      link: "https://open.spotify.com/episode/44D8TwoIkKJLeQSGbdX1jV?si=89678696ae64446b"
    },
    {
      cover: "/assets/Can We Be Reduced to the Brain.jpg",
      title: "Can We Be Reduced to the Brain?",
      link: "https://open.spotify.com/episode/4ZDf1yFgZ4RLkrVksftyob?si=8a41d7ecab0a439f"
    },
    {
      cover: "/assets/On Fear.jpg",
      title: "On Fear",
      link: "https://open.spotify.com/episode/1dw5Iv2yOSeAvbAoU51XjV?si=488bbcdc35904d15"
    },
    {
      cover: "/assets/The Brain as a Time Machine.jpg",
      title: "The Brain as a Time Machine",
      link: "https://open.spotify.com/episode/0Q7VZ5neUCxxEMsqkGr2bW?si=7b061b949a114f26"
    }
  ],
  events: [
    {
      cover: "/assets/Beijing Consciousness and Intelligence Summit.jpg",
      theme: "Beijing Consciousness and Intelligence Summit",
      location: "Beijing",
      time: "16 May 2026",
      guests:
        "The Frontiers of Consciousness: From Biology to Digital Minds, From Theory to Experience. Speakers: Huan Luo, Professor at the School of Psychological and Cognitive Sciences, Peking University, and Principal Investigator at the Peking University IDG/McGovern Institute for Brain Research; Lei Ma, Assistant Professor at the Peking University College of Future Technology, and Researcher at the National Biomedical Imaging Center; Jianhua Mei, Professor at the School of Philosophy and Sociology, Shanxi University.",
      link: "https://mp.weixin.qq.com/s/THP2i1T4o55KImtbgu4HMA"
    },
    {
      cover: "/assets/London Brain and Intelligence Summit.png",
      theme: "London Brain and Intelligence Summit",
      location: "London",
      time: "23 August 2025",
      guests:
        "Shaping the next paradigm in consciousness, cognition, and computation. Speakers: Tristan Bekinschtein, Professor of Consciousness and Cognition, University of Cambridge; Andrea Luppi, Wellcome Early Career Fellow at the University of Oxford, Fellow of St John’s College Cambridge; Devin B. Terhune, Reader in Experimental Psychology in the Institute of Psychiatry, Psychology, & Neuroscience at King’s College London.",
      link: "https://lbis.noetex.ai"
    },
    {
      cover: "/assets/Neuromodulation.jpg",
      theme: "Neuromodulation: From Medical Applications to Commercial Translation",
      location: "Beijing",
      time: "6 March 2023",
      guests:
        "Speakers: He Cui, Senior Research Fellow at the Chinese Institute for Brain Research, Beijing; Zheng Wang, Research Fellow at the School of Psychological and Cognitive Sciences, Peking University.",
      link: "https://mp.weixin.qq.com/s/UO6leM02g129_kkZNZ4uoQ"
    },
    {
      cover: "/assets/Does the Brain Flip Coins.png",
      theme: "Does the Brain Flip Coins? Exploring the Neural Mechanisms of Decision-Making",
      location: "Shanghai",
      time: "13 May 2019",
      guests:
        "Speaker: Tianming Yang, Researcher at the Institute of Neuroscience, Chinese Academy of Sciences and the Center for Excellence in Brain Science and Intelligence Technology.",
      link: "https://neu-reality.com/2019/05/mind-plus-live-decision/"
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
      cover: "/assets/academy/decision-making.jpg",
      theme: "The Neuroscience of Decision-Making",
      mentorAvatar: "/assets/falculty/alireza-soltani.jpg",
      mentorName: "Alireza Soltani",
      mentorTitle: "Associate Professor at Dartmouth College",
      intro:
        "This course explores how the brain represents reward, risk, and uncertainty to shape decision-making, learning, and social behavior.",
      details: {
        format: "Livestreaming",
        duration: "7 weeks",
        start: "Start: October, 2025",
        platform: "Zoom"
      },
      tags: ["Computational Neuroscience", "Cognitive Neuroscience", "Neuropharmacology", "Neuroeconomics", "Decision-Making"],
      enrollmentStatus: "open",
      type: "Course",
      location: "Online"
    },
    {
      cover: "/assets/academy/Memory.jpg",
      theme: "The Neuroscience of Memory",
      mentorAvatar: null,
      mentorName: "To be announced",
      mentorTitle: "",
      intro:
        "This course explores how the brain encodes, consolidates, and retrieves memories, showing how everyday experiences become lasting episodic memories.",
      details: {
        format: "Livestreaming",
        duration: "7 weeks",
        start: "Start: September, 2026",
        platform: "Zoom"
      },
      tags: ["Cognitive Neuroscience", "Psychology", "Learning", "Memory"],
      enrollmentStatus: "open",
      type: "Course",
      location: "Online"
    },
    {
      cover: "/assets/academy/cognitive-control.jpg",
      theme: "How We Adapt Our Thinking and Behavior to Goals",
      mentorAvatar: "",
      mentorName: "Faculty from University of Cambridge",
      mentorTitle: "",
      intro:
        "This Cambridge-based workshop explores the brain's planning mechanism that enables flexible goal-directed behavior through hands-on cognitive neuroscience research.",
      details: {
        format: "In-person",
        duration: "3 Days",
        start: "Start: August 24, 2025",
        venue: "Cambridge"
      },
      enrollmentStatus: "completed",
      type: "Workshop",
      location: "Cambridge"
    },
    {
      cover: "/assets/academy/economic-games.jpg",
      theme: "Cognitive Algorithms and Neural Mechanisms of Economic Games",
      mentorAvatar: "",
      mentorName: "Faculty from University College London",
      mentorTitle: "",
      intro:
        "This London-based workshop investigates how biological and machine agents make optimal decisions in strategic interactions through game theory and neuroscience.",
      details: {
        format: "In-person",
        duration: "3 Days",
        start: "Start: August 24, 2025",
        venue: "London"
      },
      enrollmentStatus: "completed",
      type: "Workshop",
      location: "London"
    },
    {
      cover: "/assets/AI Has Bias Too.png",
      theme: "Understanding Intelligent Agents",
      mentorAvatar: "",
      mentorName: "Imperial Faculty",
      mentorTitle: "Faculty from Imperial College London",
      intro:
        "A workshop on intelligent agents, agency, and the conceptual foundations of current AI systems.",
      type: "Workshop",
      location: "London"
    }
  ],
  neuroaesthetics: [
    {
      kind: "Article",
      cover: "/assets/Neuroaesthetics/article 1.png",
      title: "Beauty Exists Within the Viewer's Nervous System",
      intro: "",
      link: "https://mp.weixin.qq.com/s/Zijtb0SxiPc00fIzodKH8Q",
      author: "Neu-Reality"
    },
    {
      kind: "Article",
      cover: "/assets/Neuroaesthetics/article 2.png",
      title: "Will Neuroscience Constrain Art Appreciation?",
      intro: "",
      link: "https://mp.weixin.qq.com/s/ckE73Y12FVVFPdZ1Zw0IWw",
      author: "Neu-Reality"
    },
    {
      kind: "Article",
      cover: "/assets/Neuroaesthetics/article 3.jpg",
      title: "Where Does the Beauty of Art Truly Reside?",
      intro: "",
      link: "https://mp.weixin.qq.com/s/TUVHh8KY9i-gnVgqNPKtrA",
      author: "Neu-Reality"
    },
    {
      kind: "Article",
      cover: "/assets/Neuroaesthetics/article 4.png",
      title: "Neuroaesthetics: The Chemical Reactions Between Brain and Art",
      intro: "",
      link: "https://mp.weixin.qq.com/s/hfP-uJdLd55qskDjAosTug",
      author: "Neu-Reality"
    },
    {
      kind: "Article",
      cover: "/assets/Neuroaesthetics/article 5.png",
      title: "Returning to Vienna: Understanding Brain and Art with a Nobel Laureate",
      intro: "",
      link: "https://mp.weixin.qq.com/s/UrWGL0KbPx5VCuFQXhh05A",
      author: "Neu-Reality"
    },
    {
      kind: "Article",
      cover: "/assets/Neuroaesthetics/article 6.png",
      title: "The Pleasure of Art: A Game of Perception and Creation",
      intro: "",
      link: "https://mp.weixin.qq.com/s/kx-Q7wdWPlKNGIeO1PJw8A",
      author: "Neu-Reality"
    },
    {
      kind: "Article",
      cover: "/assets/Neuroaesthetics/article 7.png",
      title: "Beauty That Overwhelms: The Mystery of Stendhal Syndrome",
      intro: "",
      link: "https://mp.weixin.qq.com/s/qKTYBbYexVu0QHviBnp4cQ",
      author: "Neu-Reality"
    },
    {
      kind: "Article",
      cover: "/assets/Neuroaesthetics/article 8.png",
      title: "Is Art a Human Monopoly?",
      intro: "",
      link: "https://mp.weixin.qq.com/s/FRKbN2693o-A3sssYuPf_Q",
      author: "Neu-Reality"
    },
    {
      kind: "Podcast",
      cover: "",
      title: "An Introduction to Neuroaesthetics: Mondrian Was a Neuroscientist",
      intro: "",
      link: "https://open.spotify.com/episode/4snPCacqneJeud3dpIplxT?si=004ae2b9b08d4657",
      guests: "Neuromancing"
    },
    {
      kind: "Podcast",
      cover: "",
      title: "Three Artworks That Challenged Scientific Ethics",
      intro: "",
      link: "https://open.spotify.com/episode/23sUGrPFz9ZZHjkvZzMrKm?si=73cee0827d964c61",
      guests: "Neuromancing"
    },
    {
      kind: "Podcast",
      cover: "",
      title: "When Embodied Senses Meet the AI Artist",
      intro: "",
      link: "https://open.spotify.com/episode/7crYRyG4oFcS1aLu30CVEG?si=33b0b18cc57542d4",
      guests: "Neuromancing"
    },
    {
      kind: "Podcast",
      cover: "",
      title: "The Media Artist Obsessed with Technological Sublimity",
      intro: "",
      link: "https://open.spotify.com/episode/4bdZtEjMGVzI5hkmalxnC8?si=2db941817fe44d06",
      guests: "Neuromancing"
    },
    {
      kind: "Podcast",
      cover: "",
      title: "On Fear",
      intro: "",
      link: "https://open.spotify.com/episode/1dw5Iv2yOSeAvbAoU51XjV?si=2a8628af8c024cd4",
      guests: "Neuromancing"
    },
    {
      kind: "Event",
      cover: "",
      title: "Why Does Art Look Like Art?",
      intro: "",
      link: "https://neu-reality.com/2019/11/mind-plus-live-neuroaesthetics",
      time: "September 22, 2019",
      speakers: "Rui Zhu"
    },
    {
      kind: "Event",
      cover: "",
      title: "When Art Touches the Nervous System: Mondrian's Spatial Unconscious",
      intro: "",
      link: "https://neu-reality.com/2024/10/mondrians-spatial-unconscious",
      time: "November 5, 2020",
      speakers: "Rui Zhu"
    },
    {
      kind: "Event",
      cover: "",
      title: "Space: Machines, the Brain, and Art",
      intro: "",
      link: "https://www.bilibili.com/video/BV1Yf4y1P7An",
      time: "November 14, 2021",
      speakers: "Ellen Winner, Yue Guo, Mark Solms, Chao Yang, Rui Zhu"
    },
    {
      kind: "Event",
      cover: "",
      title: "Understanding Emotion Through Brain and Art",
      intro: "",
      link: "https://www.bilibili.com/video/BV1Xg411P7zY",
      time: "September 11, 2021",
      speakers: "Yong Gu, Zengchang Qin, Qiange Wan, Yuan Yuan, Rui Zhu"
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
    { label: "X", url: "https://twitter.com/Neureality_mag" },
    { label: "Instagram", url: "https://www.instagram.com/neu_reality/" },
    { label: "TikTok", url: "https://www.tiktok.com/@neureality?_t=8j9zFdCx3WC&_r=1" },
    { label: "Bluesky", url: "https://bsky.app/profile/neureality.bsky.social" }
  ]
};
