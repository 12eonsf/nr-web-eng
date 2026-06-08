import {
  ArrowRight,
  Camera,
  CalendarDays,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Network,
  Play,
  Plus,
  Quote,
  Radio,
  Save,
  Upload,
  Users,
  Video,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { defaultContent, PlatformLink, SiteContent } from "./content";

const STORAGE_KEY = "neu-reality-content-v11";
const HERO_IMAGE = "/assets/hero-illustration.jpg";
const LOGO_IMAGE = "/assets/neu-reality-logo-white.png";
const MOBILE_NAV_LOGO_IMAGE = "/assets/mobile-nav-logo.png";
const COMMUNITY_VIDEO = "/assets/bg-video-h264.mp4";
const COMMUNITY_VIDEO_POSTER = "/assets/neu-reality-vision-field.png";

type SectionKey = keyof SiteContent;
type StaticPageKey = "about" | "privacy" | "terms";

type PageSubsection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type PageSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: PageSubsection[];
};

type StaticPageContent = {
  key: StaticPageKey;
  eyebrow: string;
  title: string;
  deck: string;
  highlights?: [string, string][];
  sections: PageSection[];
};

type FieldConfig = {
  key: string;
  label: string;
  kind?: "text" | "textarea" | "media" | "select";
  options?: string[];
};

const navItems = [
  ["Articles", "articles"],
  ["Interviews", "interviews"],
  ["Podcast", "podcasts"],
  ["Events", "events"],
  ["Academy", "academy"],
  ["Neuroaesthetics", "neuroaesthetics"],
  ["Newsletter", "newsletter"],
  ["Partners", "partners"]
] as const;

const footerSocialLinks: PlatformLink[] = [
  { label: "X", url: "https://twitter.com/Neureality_mag" },
  { label: "Instagram", url: "https://www.instagram.com/neu_reality/" },
  { label: "TikTok", url: "https://www.tiktok.com/@neureality?_t=8j9zFdCx3WC&_r=1" },
  { label: "Bluesky", url: "https://bsky.app/profile/neureality.bsky.social" }
];

const staticPages: Record<StaticPageKey, StaticPageContent> = {
  about: {
    key: "about",
    eyebrow: "About Us",
    title: "About Us",
    deck:
      "Neu-Reality is an independent science communication platform focused on neuroscience, intelligence, frontier technology, and the changing relationship between research and society.",
    highlights: [
      ["2016", "founded"],
      ["1M+", "subscribers across platforms"],
      ["400", "contributors and volunteers"],
      ["10M+", "annual reads"]
    ],
    sections: [
      {
        id: "mission",
        heading: "Our Mission",
        paragraphs: [
          "Neu-Reality follows scientific breakthroughs, technology transfer, clinical applications, and commercial trends in fields related to the brain and intelligence. We also work to make science more understandable and participatory for the public, while encouraging interdisciplinary exchange across research communities.",
          "After years of sustained work, Neu-Reality has become one of China's leading independent science media platforms in frontier technology. The platform has been recognized by organizations including Huxiu and The Intellectual, and was named a 2020 Author of the Year by Huxiu."
        ]
      },
      {
        id: "community",
        heading: "A Global Contributor Network",
        paragraphs: [
          "Our volunteer and contributor community includes nearly 400 members from leading universities and institutions in China and around the world, including Peking University, Tsinghua University, Beijing Normal University, Fudan University, Shanghai Jiao Tong University, Zhejiang University, the Institute of Neuroscience at the Chinese Academy of Sciences, the University of Cambridge, the University of Oxford, University College London, Stanford University, the Max Planck Institutes, MIT, the University of California system, and Princeton University.",
          "These contributors work across scientific research, journalism, education, technology, and cultural communication. Their expertise helps keep Neu-Reality's reporting, interpretation, and public programs grounded in specialist knowledge."
        ]
      },
      {
        id: "public-programs",
        heading: "Public Programs",
        paragraphs: [
          "In Beijing and Shanghai, Neu-Reality has hosted six Mind+ public talks, inviting scientists to explain how the brain works through topics such as autism and schizophrenia, decision-making, and neuroaesthetics. Livestreams and replays of these events have reached nearly 500,000 viewers.",
          "In October 2019, Neu-Reality partnered with Beijing 706 Youth Space to co-host Mental Health Month, presenting 20 talks, experiential activities, and themed gatherings on psychology and mental health."
        ]
      },
      {
        id: "projects",
        heading: "New Projects",
        paragraphs: [
          "We continue to explore new formats, including podcasts, newsletters, illustration, video, and forums. In Neuromancing, our podcast, we dive with guests from different fields into the unknown territories of human thought, examining the brain through science, medicine, technology, and philosophy.",
          "On Ximalaya, the podcast has received more than one million plays. Our research-focused publication, NeuroFrontier, shares research interpretation, academic skills, and weekly paper briefings for scholars. NeuS, a Neu-Reality business and technology service platform, tracks research progress, application translation, policy movement, and investment trends across brain science industries."
        ]
      },
      {
        id: "collaboration",
        heading: "Collaboration",
        paragraphs: [
          "Alongside science communication, Neu-Reality has collaborated with publishers, research institutes, technology and education companies, and art organizations. We have helped translate and write books, produced a brain science special issue with CITIC Press, and supported academic publishing projects including Cognitive Science.",
          "We have also built deep collaboration with the Philosophy and Cognitive Science Interdisciplinary Platform at Renmin University of China, jointly organizing academic exchange programs such as the international conference on predictive processing, adaptive orientation, and causal reasoning."
        ]
      },
      {
        id: "name",
        heading: "What Neu-Reality Means",
        paragraphs: [
          "The name Neu-Reality carries two meanings: our reality is represented by neural activity, and neuroscience and neurotechnology may lead us toward new realities in the future.",
          "We believe the brain remains one of the last frontiers of human knowledge. Neu-Reality exists to witness, explain, and connect the major steps along that path.",
          "Contact: support@neu-reality.com"
        ]
      }
    ]
  },
  privacy: {
    key: "privacy",
    eyebrow: "Privacy Policy",
    title: "Privacy Policy",
    deck:
      "This policy explains how Neu-Reality collects, uses, stores, shares, and protects personal information when you visit or use our website.",
    sections: [
      {
        id: "collection",
        heading: "1. Information We Collect",
        paragraphs: ["We may collect information in the following ways:"],
        bullets: [
          "Information you provide directly, such as your name, email address, phone number, mailing address, payment information, or other details submitted when you register, place an order, complete a form, or contact us.",
          "Information collected automatically, such as device information, browser type, IP address, visit time, and browsing activity through cookies, log files, and similar technologies.",
          "Information from third parties or partners, such as social media platforms, when you have authorized that third party to share information with us."
        ]
      },
      {
        id: "use",
        heading: "2. How We Use Information",
        paragraphs: ["The information we collect may be used to:"],
        bullets: [
          "Provide, maintain, and improve our services.",
          "Process and manage orders, payments, and deliveries.",
          "Send account notifications, order confirmations, or promotional messages.",
          "Improve customer service and user experience.",
          "Prevent fraud and other illegal activities.",
          "Comply with legal and regulatory requirements."
        ]
      },
      {
        id: "cookies",
        heading: "3. Cookies and Tracking Technologies",
        paragraphs: [
          "To improve the user experience, we may use cookies and similar tracking technologies to understand activity on our website. Cookies help us remember preferences and provide personalized content and advertising. You may disable cookies in your browser settings, but doing so may affect some website functions."
        ]
      },
      {
        id: "sharing",
        heading: "4. Information Sharing",
        paragraphs: ["We do not sell or rent your personal information to third parties. We only share information in the following circumstances:"],
        bullets: [
          "Service providers: to provide services, we may share information with trusted third-party service providers such as payment processors or logistics partners.",
          "Legal compliance: when necessary, we may disclose information according to laws, regulations, or government requirements.",
          "Business transfers: if our business is involved in a merger, acquisition, or asset sale, your information may be transferred as part of the business assets."
        ]
      },
      {
        id: "protection",
        heading: "5. Information Protection",
        paragraphs: [
          "We take reasonable technical and organizational measures to protect personal information from unauthorized access, disclosure, alteration, or destruction. Although we work to protect your information, internet transmission is not completely secure, and we cannot guarantee absolute security for data transmitted to us."
        ]
      },
      {
        id: "rights",
        heading: "6. Your Rights",
        paragraphs: ["You have the following rights regarding your personal information:"],
        bullets: [
          "Access: you may request access to the personal information we store about you.",
          "Correction: you may request correction if your personal information is inaccurate.",
          "Deletion: in certain circumstances, you may request that we delete your personal information.",
          "Marketing opt-out: you may unsubscribe from marketing emails at any time by clicking the unsubscribe link in an email or by contacting us."
        ]
      },
      {
        id: "third-party-links",
        heading: "7. Third-Party Links",
        paragraphs: [
          "Our website may contain links to third-party websites. Those websites have their own privacy policies, and we are not responsible for their content or activities."
        ]
      },
      {
        id: "changes",
        heading: "8. Changes to This Policy",
        paragraphs: [
          "We may update this privacy policy from time to time. When updates are made, we will post the revised date on this page. We recommend reviewing this policy periodically for the latest information."
        ]
      },
      {
        id: "contact",
        heading: "9. Contact Us",
        paragraphs: [
          "If you have questions about this privacy policy or wish to exercise your rights, please contact us at support@neu-reality.com."
        ]
      }
    ]
  },
  terms: {
    key: "terms",
    eyebrow: "Terms of Service",
    title: "Terms of Service",
    deck:
      "These terms govern your access to and use of the Neu-Reality website and services operated by Shanghai Naoshang Media Technology Co., Ltd.",
    sections: [
      {
        id: "intro",
        heading: "Introduction",
        paragraphs: [
          "Welcome to the Neu-Reality website. This website is operated and managed by Shanghai Naoshang Media Technology Co., Ltd. By using this website and its services, you should carefully read and agree to these terms. If you do not agree to any part of this agreement, please stop using the website."
        ]
      },
      {
        id: "services",
        heading: "Article 1. Services",
        subsections: [
          {
            heading: "Paid Content",
            paragraphs: [
              "The website provides users with high-quality content, including but not limited to articles, videos, and online courses. Some content is available only to paid users or subscribers."
            ]
          },
          {
            heading: "Event Notifications",
            paragraphs: [
              "The website provides registered users with event notifications and registration services related to neuroscience, psychology, and related fields."
            ]
          },
          {
            heading: "Copyright Notice",
            paragraphs: [
              "Unless otherwise stated, website content, including text, images, audio, and video, is copyrighted by Shanghai Naoshang Media Technology Co., Ltd. Without written authorization, no person may copy, distribute, republish, adapt, or use the content for commercial purposes in any form."
            ]
          }
        ]
      },
      {
        id: "accounts",
        heading: "Article 2. Registration and Account Management",
        subsections: [
          {
            heading: "Registration Requirements",
            paragraphs: [
              "When registering, you must provide true and complete personal information, including but not limited to username, contact details, and WeChat account information. You are responsible for any consequences arising from false information."
            ]
          },
          {
            heading: "Account Security",
            paragraphs: [
              "Users must properly safeguard account credentials and passwords and must not disclose account information to others. Users are responsible for losses caused by improper account management."
            ]
          },
          {
            heading: "Account Restrictions",
            paragraphs: ["Users must not use website accounts to engage in the following conduct:"],
            bullets: [
              "Publishing illegal, non-compliant, or inappropriate content.",
              "Infringing others' privacy, intellectual property, or other lawful rights.",
              "Commercializing website content without authorization."
            ]
          }
        ]
      },
      {
        id: "conduct",
        heading: "Article 3. User Conduct",
        subsections: [
          {
            heading: "Prohibited Content",
            paragraphs: ["Users must not upload or distribute any of the following content on the website:"],
            bullets: [
              "Content that violates Chinese laws or regulations.",
              "Content containing malicious code or content that disrupts website functions.",
              "Content that harms the interests of the website or third parties."
            ]
          },
          {
            heading: "Lawful Use",
            paragraphs: [
              "Users agree to use the website and its services lawfully in accordance with this agreement and applicable laws and regulations. If user conduct causes losses to the company or any third party, the user bears full liability for compensation."
            ]
          }
        ]
      },
      {
        id: "paid-services",
        heading: "Article 4. Paid Services",
        subsections: [
          {
            heading: "Subscriptions and Payments",
            paragraphs: [
              "Users may access paid content and services by purchasing subscriptions or one-time paid services. All transaction records are subject to the records displayed by the website system."
            ]
          },
          {
            heading: "Fees and Refunds",
            bullets: [
              "Virtual goods: because virtual goods, including paid content, courses, and membership services, are special in nature, once purchased successfully they are not refundable. Please carefully confirm the relevant content and service terms before purchase.",
              "Physical goods: for physical goods purchased through this website, users have the right to return goods without reason within seven days, provided that the goods remain in original packaging, unused, and undamaged; the user bears return shipping costs; and if the goods have quality issues, the website bears the return shipping costs.",
              "Refund process: if you meet the refund conditions, please submit a refund request through the website customer service channel. We will complete the refund review within seven business days after receiving the returned goods or confirming that virtual goods cannot be used."
            ]
          }
        ]
      },
      {
        id: "intellectual-property",
        heading: "Article 5. Intellectual Property",
        subsections: [
          {
            heading: "Ownership",
            paragraphs: [
              "Unless otherwise stated, all services and content on this website, including text, images, video, audio, and code, belong to Shanghai Naoshang Media Technology Co., Ltd. and are protected by the Copyright Law of the People's Republic of China and other applicable laws."
            ]
          },
          {
            heading: "License and Restrictions",
            bullets: [
              "Users are authorized only to browse and use content within this website and may not redistribute it or use it commercially in any form.",
              "If special authorization is required, please contact the website in advance and obtain written permission."
            ]
          }
        ]
      },
      {
        id: "privacy",
        heading: "Article 6. Privacy Protection",
        subsections: [
          {
            heading: "Information Collection",
            paragraphs: [
              "We collect information provided by users during registration and use, including but not limited to names, contact details, and browsing records."
            ]
          },
          {
            heading: "Information Use",
            bullets: [
              "Your personal information is used only as necessary to provide website services.",
              "Except as otherwise required by laws and regulations or with explicit user authorization, we will not disclose your personal information to third parties."
            ]
          },
          {
            heading: "Information Security",
            paragraphs: [
              "We will take reasonable technical measures to protect user information. However, the company is not liable for information leakage caused by force majeure events such as hacking attacks."
            ]
          }
        ]
      },
      {
        id: "service-interruption",
        heading: "Article 7. Service Interruption and Termination",
        subsections: [
          {
            heading: "Service Interruption",
            paragraphs: [
              "The website may temporarily interrupt services due to system maintenance, upgrades, or force majeure. The company will try to notify users in advance."
            ]
          },
          {
            heading: "Service Termination",
            bullets: [
              "If a user violates this agreement, the company has the right to suspend or terminate that user's account access.",
              "If a user voluntarily stops using the services, the company assumes no liability."
            ]
          }
        ]
      },
      {
        id: "disclaimer",
        heading: "Article 8. Disclaimer",
        bullets: [
          "The website services are provided as is, without express or implied warranties regarding suitability, error-free operation, or reliability.",
          "The website is not liable for indirect, incidental, special, or punitive losses caused by users' use of, or inability to use, the services."
        ]
      },
      {
        id: "modification",
        heading: "Article 9. Modification",
        paragraphs: [
          "The website may modify this agreement from time to time according to actual needs. Modified terms will be announced on the website. Continued use of the services after modification constitutes acceptance of the updated terms."
        ]
      },
      {
        id: "disputes",
        heading: "Article 10. Dispute Resolution",
        paragraphs: [
          "Disputes arising from or related to this agreement should first be resolved through friendly consultation. If consultation fails, either party may bring a lawsuit before the people's court with jurisdiction over the location of Shanghai Naoshang Media Technology Co., Ltd."
        ]
      },
      {
        id: "contact",
        heading: "Article 11. Contact",
        paragraphs: [
          "If you have questions about this agreement or the website services, please contact us.",
          "Company name: Shanghai Naoshang Media Technology Co., Ltd.",
          "Email: support@neu-reality.com",
          "Please carefully read and fully understand these terms before registering for or using this website. If you continue to use the website services, you are deemed to have accepted all terms of this agreement."
        ]
      }
    ]
  }
};

const pageRoutes: Record<string, StaticPageKey> = {
  "/about-us": "about",
  "/about-us/": "about",
  "/private-policy": "privacy",
  "/private-policy/": "privacy",
  "/privacy-policy": "privacy",
  "/privacy-policy/": "privacy",
  "/terms-of-service": "terms",
  "/terms-of-service/": "terms"
};

function getStaticPageKey(pathname = window.location.pathname): StaticPageKey | null {
  return pageRoutes[pathname] ?? pageRoutes[pathname.replace(/\/$/, "")] ?? null;
}

function restoreStaticHostPath() {
  const params = new URLSearchParams(window.location.search);
  const spaPath = params.get("spaPath");
  if (!spaPath?.startsWith("/")) return;

  window.history.replaceState(null, "", spaPath);
}

restoreStaticHostPath();

const articleLabels = [
  "Neuroscience",
  "Philosophy",
  "Computation",
  "Cognitive Science",
  "Philosophy of Science",
  "Cognitive Science",
  "Philosophy of Mind",
  "Artificial Intelligence"
];
const podcastMeta = [
  ["Ep. 32", "55 min"],
  ["Ep. 28", "1 hr 13 min"],
  ["Ep. 27", "1 hr 12 min"],
  ["Ep. 20", "45 min"],
  ["Ep. 16", "1 hr 7 min"],
  ["Ep. 5", "1 hr 19 min"]
];
const showCollaborationCases = false;

const neuroaestheticsIntro = [
  "Since 2016, we have continuously introduced and explored the field of neuroaesthetics through articles, podcasts, and public events. At the heart of this field lies a compelling idea: beauty may not exist solely within the artwork itself, but within the neural activity of the viewer and listener.",
  "Together with philosopher Rui Zhu from Renmin University of China, we helped bring neuroaesthetics to the broader Chinese public for the first time in a systematic way, receiving enthusiastic responses and growing attention across disciplines.",
  <>
    Through talks such as <em>Why Does Art Look Like Art?</em>, we invited audiences to reflect on the "parallelism between
    the brain and art," while podcast episodes like <em>Mondrian Was a Neuroscientist</em> explored why artists can, in many
    ways, be seen as intuitive neuroscientists. Alongside these projects, we have consistently introduced the works and ideas
    of pioneering figures in neuroaesthetics, including Semir Zeki and Eric Kandel, to our readers.
  </>,
  "Over the years, an increasing number of audiences have come to appreciate the unique intersection between neuroscience and art through our work. In this special feature, we revisit and reflect on our journey through neuroaesthetics."
] as const;

const neuroaestheticsPodcastDurations = ["1 hr 5 min", "2 hr 14 min", "1 hr 45 min", "1 hr 28 min", "1 hr 7 min"] as const;
const neuroaestheticsArticleLinks = [
  "https://mp.weixin.qq.com/s/Zijtb0SxiPc00fIzodKH8Q",
  "https://mp.weixin.qq.com/s/ckE73Y12FVVFPdZ1Zw0IWw",
  "https://mp.weixin.qq.com/s/TUVHh8KY9i-gnVgqNPKtrA",
  "https://mp.weixin.qq.com/s/hfP-uJdLd55qskDjAosTug",
  "https://mp.weixin.qq.com/s/UrWGL0KbPx5VCuFQXhh05A",
  "https://mp.weixin.qq.com/s/kx-Q7wdWPlKNGIeO1PJw8A",
  "https://mp.weixin.qq.com/s/qKTYBbYexVu0QHviBnp4cQ",
  "https://mp.weixin.qq.com/s/FRKbN2693o-A3sssYuPf_Q"
] as const;
const neuroaestheticsPodcastLinks = [
  "https://open.spotify.com/episode/4snPCacqneJeud3dpIplxT?si=004ae2b9b08d4657",
  "https://open.spotify.com/episode/23sUGrPFz9ZZHjkvZzMrKm?si=73cee0827d964c61",
  "https://open.spotify.com/episode/7crYRyG4oFcS1aLu30CVEG?si=33b0b18cc57542d4",
  "https://open.spotify.com/episode/4bdZtEjMGVzI5hkmalxnC8?si=2db941817fe44d06",
  "https://open.spotify.com/episode/1dw5Iv2yOSeAvbAoU51XjV?si=2a8628af8c024cd4"
] as const;
const neuroaestheticsEventLinks = [
  "https://neu-reality.com/2019/11/mind-plus-live-neuroaesthetics",
  "https://neu-reality.com/2024/10/mondrians-spatial-unconscious",
  "https://www.bilibili.com/video/BV1Yf4y1P7An",
  "https://www.bilibili.com/video/BV1Xg411P7zY"
] as const;

const newsletterLatestItems = [
  "💰 Bigger Rewards, Faster Learning?",
  "🫂 Why One Hug Can Stay in Memory for a Lifetime.",
  "🧠 Under Stress, the Brain Really Can Freeze Up.",
  "🤝 Declining Grip Strength May Signal Depression Risk.",
  "✍️ Your Handwriting May Reveal Cognitive Decline.",
  "🛌 Poor Sleep May Accelerate Organ Aging.",
  "♻️ When Data Runs Dry, How Can AI Avoid Self-Consumption?",
  "🤖 China Is Bringing AI Brain–Computer Interfaces Into Real-World Use."
] as const;
const newsletterLatestTitle = newsletterLatestItems.join(" ");
const newsletterLatestLink = "https://neu-reality.com/2026/05/newsletter-035/";

const heroSlides = [
  {
    eyebrow: "01",
    title: "Intelligence,",
    accent: "Reimagined",
    body:
      "Exploring the breakthroughs, ideas, and future trajectories of neuroscience, AI, and emerging technologies through research-driven storytelling and interdisciplinary dialogue."
  },
  {
    eyebrow: "02",
    title: "Where Great Minds",
    accent: "Converge",
    body:
      "Connecting a worldwide community of researchers, educators, creators, and institutions across academia, technology, media, and innovation."
  },
  {
    eyebrow: "03",
    title: "Education for Future",
    accent: "Thinkers",
    body:
      "Building transformative learning experiences that help the next generation develop cognitive depth, interdisciplinary thinking, and the ability to navigate complexity."
  }
] as const;

const adminSections: { key: SectionKey; label: string; fields: FieldConfig[] }[] = [
  {
    key: "articles",
    label: "Articles",
    fields: [
      { key: "cover", label: "Cover", kind: "media" },
      { key: "title", label: "Title" },
      { key: "summary", label: "Summary", kind: "textarea" },
      { key: "author", label: "Author" }
    ]
  },
  {
    key: "interviews",
    label: "Interviews",
    fields: [
      { key: "headshot", label: "Headshot", kind: "media" },
      { key: "name", label: "Name" },
      { key: "title", label: "Title" },
      { key: "headline", label: "Interview Title" },
      { key: "summary", label: "Summary", kind: "textarea" }
    ]
  },
  {
    key: "podcasts",
    label: "Neuromancing",
    fields: [
      { key: "cover", label: "Cover", kind: "media" },
      { key: "title", label: "Episode Title" }
    ]
  },
  {
    key: "events",
    label: "Past Events",
    fields: [
      { key: "cover", label: "Cover", kind: "media" },
      { key: "theme", label: "Theme" },
      { key: "location", label: "Location" },
      { key: "time", label: "Time" },
      { key: "guests", label: "Guests", kind: "textarea" }
    ]
  },
  {
    key: "courses",
    label: "Noetex Academy",
    fields: [
      { key: "cover", label: "Cover", kind: "media" },
      { key: "theme", label: "Course Theme" },
      { key: "mentorAvatar", label: "Mentor Avatar", kind: "media" },
      { key: "mentorName", label: "Mentor Name" },
      { key: "mentorTitle", label: "Mentor Title" },
      { key: "intro", label: "Course Intro", kind: "textarea" },
      { key: "type", label: "Type", kind: "select", options: ["Course", "Workshop"] },
      { key: "location", label: "Location / Online" }
    ]
  },
  {
    key: "neuroaesthetics",
    label: "Neuroaesthetics",
    fields: [
      { key: "kind", label: "Content Type", kind: "select", options: ["Article", "Podcast", "Event"] },
      { key: "cover", label: "Cover", kind: "media" },
      { key: "title", label: "Title" },
      { key: "intro", label: "Intro", kind: "textarea" },
      { key: "author", label: "Author" },
      { key: "guests", label: "Guests" },
      { key: "time", label: "Time" },
      { key: "speakers", label: "Speakers" }
    ]
  },
  {
    key: "projects",
    label: "Project Cases",
    fields: [
      { key: "cover", label: "Cover", kind: "media" },
      { key: "title", label: "Case Title" },
      { key: "intro", label: "Case Intro", kind: "textarea" }
    ]
  },
  {
    key: "partners",
    label: "Partners",
    fields: [
      { key: "logo", label: "Logo", kind: "media" },
      { key: "name", label: "Partner Name" }
    ]
  },
  {
    key: "platforms",
    label: "Social Links",
    fields: [
      { key: "label", label: "Platform" },
      { key: "url", label: "URL" }
    ]
  }
];

function loadContent(): SiteContent {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaultContent;

  try {
    return { ...defaultContent, ...JSON.parse(stored) };
  } catch {
    return defaultContent;
  }
}

function App() {
  const [content, setContent] = useState<SiteContent>(() => loadContent());
  const [showAdmin, setShowAdmin] = useState(() => window.location.hash === "#admin");
  const [staticPageKey, setStaticPageKey] = useState<StaticPageKey | null>(() => getStaticPageKey());
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const syncLocationState = () => {
      setShowAdmin(window.location.hash === "#admin");
      setStaticPageKey(getStaticPageKey());
    };

    const onHashChange = () => syncLocationState();
    const onPopState = () => syncLocationState();
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroSlide((index) => (index + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, []);

  const totals = useMemo(
    () => [
      ["1M+", "subscribers"],
      ["400", "academic contributors"],
      ["500K", "event views"],
      ["1M+", "podcast plays"]
    ],
    []
  );

  const activeSlide = heroSlides[activeHeroSlide];
  const neuroaestheticsArticles = useMemo(
    () => content.neuroaesthetics.filter((item) => item.kind === "Article"),
    [content.neuroaesthetics]
  );
  const neuroaestheticsPodcasts = useMemo(
    () => content.neuroaesthetics.filter((item) => item.kind === "Podcast"),
    [content.neuroaesthetics]
  );
  const neuroaestheticsEvents = useMemo(
    () => content.neuroaesthetics.filter((item) => item.kind === "Event"),
    [content.neuroaesthetics]
  );

  const saveContent = (nextContent: SiteContent) => {
    setContent(nextContent);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextContent));
  };

  if (showAdmin) {
    return (
      <div className="site-shell">
        <Header />
        <main>
          <AdminPanel content={content} onUpdate={saveContent} />
        </main>
      </div>
    );
  }

  if (staticPageKey) {
    return (
      <div className="site-shell">
        <Header />
        <StaticPage page={staticPages[staticPageKey]} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="site-shell">
      <Header />
      <main id="top">
        <section className="hero section-anchor" id="vision">
          <div className="hero__image" aria-hidden="true">
            <OptimizedImage
              src={HERO_IMAGE}
              alt="Illustration of a figure moving through a neural tunnel"
              decoding="async"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <div className="hero__index" aria-label="Hero slide navigation">
            <div className="hero__dots" role="tablist" aria-label="Hero slides">
              {heroSlides.map((slide, index) => (
                <button
                  aria-label={`Show slide ${slide.eyebrow}`}
                  aria-selected={activeHeroSlide === index}
                  className={activeHeroSlide === index ? "is-active" : ""}
                  key={slide.eyebrow}
                  onClick={() => setActiveHeroSlide(index)}
                  role="tab"
                  type="button"
                />
              ))}
            </div>
          </div>
          <div className="hero__copy">
            <article className="hero-statement" key={activeSlide.eyebrow}>
              <h1>
                {activeSlide.title}
                <br />
                <em>{activeSlide.accent}</em>
              </h1>
              <p>{activeSlide.body}</p>
            </article>
          </div>
          <div className="hero-stats" aria-label="Neu-Reality at a glance">
            {totals.map(([value, label]) => (
              <a href="#articles" key={label}>
                <strong>{value}</strong>
                <small>{label}</small>
              </a>
            ))}
          </div>
        </section>

        <EditorialSection
          id="articles"
          kicker="Articles"
          title="Articles"
          headline="Ideas that expand understanding"
          intro="Curated writings from leading researchers and thinkers."
          linkText="View all articles"
          linkHref="https://neu-reality.com/"
        >
          <div className="article-grid">
            {content.articles.map((article, index) => (
              <article className="content-card article-card" key={article.title}>
                <Cover src={article.cover} alt="" />
                <div className="content-card__body">
                  <span>{articleLabels[index] ?? "Research"}</span>
                  <h3>
                    {article.link ? (
                      <a href={article.link} target="_blank" rel="noreferrer">
                        {article.title}
                      </a>
                    ) : (
                      article.title
                    )}
                  </h3>
                  <p>{article.summary}</p>
                  <small>By {article.author}</small>
                </div>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          id="interviews"
          kicker="Interviews"
          title="Interviews"
          headline="Conversations that go deeper"
          intro="Dialogue with scientists, clinicians, and visionaries shaping the future."
          linkText="View all interviews"
          linkHref="https://neu-reality.com/category/speech-and-interview/qa/"
        >
          <div className="interview-grid">
            {content.interviews.map((interview) => (
              <article className="content-card interview-card" key={interview.name}>
                <OptimizedImage src={interview.headshot} alt={interview.name} decoding="async" loading="lazy" />
                <div className="content-card__body">
                  <span>{interview.name}</span>
                  <small>{interview.title}</small>
                  <h3>{interview.headline}</h3>
                  {interview.link ? (
                    <a className="card-link" href={interview.link} target="_blank" rel="noreferrer">
                      Read more
                      <ArrowRight size={15} />
                    </a>
                  ) : (
                    <span className="card-link card-link--disabled">Coming soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          id="podcasts"
          kicker="PODCAST"
          title="NEUROMANCING"
          headline="NEUROMANCING"
          intro="Wandering through the landscapes of neuroscience and cognitive science, uncovering the hidden mechanisms and subtle fascinations beneath cognition and perception."
          asideExtra={<PodcastListenLinks />}
        >
          <div className="podcast-strip">
            {content.podcasts.map((podcast, index) => (
              <article className="content-card podcast-card" key={podcast.title}>
                <div className="podcast-card__cover">
                  <Cover src={podcast.cover} alt="" />
                  <button type="button" aria-label={`Play ${podcast.title}`}>
                    <Headphones size={22} />
                  </button>
                </div>
                <div className="content-card__body">
                  <span>{podcastMeta[index]?.[0] ?? "Episode"}</span>
                  <h3>
                    {podcast.link ? (
                      <a href={podcast.link} target="_blank" rel="noreferrer">
                        {podcast.title}
                      </a>
                    ) : (
                      podcast.title
                    )}
                  </h3>
                  <small>{podcastMeta[index]?.[1] ?? "Listen"}</small>
                </div>
              </article>
            ))}
          </div>
        </EditorialSection>

        <section className="community-video section-anchor" id="community" aria-labelledby="community-video-title">
          <CommunityBackgroundVideo />
          <div className="community-video__copy">
            <h2 id="community-video-title">
              A Community for <em>Curious Minds</em>
            </h2>
            <p>
              From public events to interdisciplinary courses, we bring together learners and
              innovators to explore the future of mind, technology, and society.
            </p>
          </div>
        </section>

        <EditorialSection
          id="events"
          kicker="Past Events"
          title="Past Events"
          headline="Bringing minds together"
          intro="Forums and salons that connect science with culture and society."
        >
          <div className="event-grid">
            {content.events.slice(0, 4).map((event) => (
              <article className="content-card event-card" key={event.theme}>
                <Cover src={event.cover} alt="" />
                <div className="content-card__body">
                  <span>{event.location}</span>
                  <h3>
                    {event.link ? (
                      <a href={event.link} target="_blank" rel="noreferrer">
                        {event.theme}
                      </a>
                    ) : (
                      event.theme
                    )}
                  </h3>
                  <small>{event.time}</small>
                </div>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          id="academy"
          kicker="Noetex Academy"
          title="Noetex Academy"
          headline="Education for the future"
          intro="Interdisciplinary learning across neuroscience, AI, and complex systems."
        >
          <div className="course-grid">
            {content.courses.slice(0, 4).map((course) => (
              <article className="content-card course-card" key={course.theme}>
                <div className="course-card__media">
                  <Cover src={course.cover} alt="" />
                  <CourseEnrollmentStatus status={course.enrollmentStatus} />
                </div>
                <div className="content-card__body">
                  <span>{course.type}</span>
                  <h3>{course.theme}</h3>
                  <CourseMentor course={course} />
                  <p>{course.intro}</p>
                  <CourseDetails details={course.details} />
                  <CourseTags tags={course.tags} />
                </div>
              </article>
            ))}
          </div>
        </EditorialSection>

        <section className="topic-feature section-anchor" id="neuroaesthetics" aria-labelledby="neuroaesthetics-title">
          <div className="topic-feature__inner">
            <div className="topic-feature__lead">
              <div className="topic-feature__copy">
                <span>Featured Topic</span>
                <h2 id="neuroaesthetics-title">Neuroaesthetics</h2>
                <p className="topic-feature__thesis">
                  Tracing how beauty comes alive in the mind.
                </p>
              </div>
              <div className="topic-feature__field" aria-hidden="true">
                <OptimizedImage src="/assets/Neuroaesthetics/Neuroaesthetics Featured.jpg" alt="" decoding="async" loading="lazy" />
              </div>
            </div>

            <div className="topic-feature__narrative">
              <div className="topic-feature__text">
                {neuroaestheticsIntro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="topic-archive" aria-label="Neuroaesthetics complete feature archive">
              <section className="topic-archive__group topic-archive__group--articles">
                <div className="topic-archive__heading">
                  <span>Articles</span>
                  <strong>{neuroaestheticsArticles.length.toString().padStart(2, "0")}</strong>
                </div>
                <ol className="topic-article-grid">
                  {neuroaestheticsArticles.map((item, index) => {
                    const itemLink = item.link ?? neuroaestheticsArticleLinks[index];
                    return (
                    <li className="topic-article" key={item.title}>
                      {itemLink ? (
                        <a
                          className="topic-item-link"
                          href={itemLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${item.title}`}
                        />
                      ) : null}
                      <div className="topic-article__cover">
                        {item.cover ? <OptimizedImage src={item.cover} alt="" decoding="async" loading="lazy" /> : <Camera aria-hidden="true" />}
                      </div>
                      <div className="topic-article__body">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <h3>{item.title}</h3>
                      </div>
                    </li>
                  );
                  })}
                </ol>
              </section>

              <section className="topic-archive__group topic-archive__group--podcasts">
                <div className="topic-archive__heading">
                  <span>Podcasts</span>
                  <strong>{neuroaestheticsPodcasts.length.toString().padStart(2, "0")}</strong>
                </div>
                <ol className="topic-playlist">
                  {neuroaestheticsPodcasts.map((item, index) => {
                    const itemLink = item.link ?? neuroaestheticsPodcastLinks[index];
                    return (
                    <li className="topic-playlist__item" key={item.title}>
                      {itemLink ? (
                        <a
                          className="topic-item-link"
                          href={itemLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${item.title}`}
                        />
                      ) : null}
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div className="topic-playlist__button" aria-hidden="true">
                        <Play size={15} />
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        {neuroaestheticsPodcastDurations[index] ? (
                          <p>
                            <strong>Duration</strong>
                            {neuroaestheticsPodcastDurations[index]}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  );
                  })}
                </ol>
              </section>

              <section className="topic-archive__group topic-archive__group--events">
                <div className="topic-archive__heading">
                  <span>Events</span>
                  <strong>{neuroaestheticsEvents.length.toString().padStart(2, "0")}</strong>
                </div>
                <ol className="topic-event-list">
                  {neuroaestheticsEvents.map((item, index) => {
                    const itemLink = item.link ?? neuroaestheticsEventLinks[index];
                    return (
                    <li className="topic-event" key={item.title}>
                      {itemLink ? (
                        <a
                          className="topic-item-link"
                          href={itemLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${item.title}`}
                        />
                      ) : null}
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <dl>
                          <div>
                            <dt>Time</dt>
                            <dd>{item.time || "Time to be confirmed"}</dd>
                          </div>
                          <div>
                            <dt>{item.speakers?.includes(",") ? "Speakers" : "Speaker"}</dt>
                            <dd>{item.speakers || "Speakers to be confirmed"}</dd>
                          </div>
                        </dl>
                      </div>
                    </li>
                  );
                  })}
                </ol>
              </section>
            </div>
          </div>
        </section>

        <section className="newsletter-section section-anchor" id="newsletter" aria-labelledby="newsletter-title">
          <div className="editorial-section__inner newsletter-section__inner">
            <aside className="section-aside">
              <span>Newsletter</span>
              <h2 id="newsletter-title">Insights, delivered</h2>
              <p>
                Across recurring columns, we explore the frontiers of neuroscience, psychiatry,
                artificial intelligence, and life science.
              </p>
              <a className="newsletter-cta" href={newsletterLatestLink} target="_blank" rel="noreferrer">
                <span
                  className="newsletter-cta__marquee"
                  aria-label="Get the latest research, industry insights, and health perspectives in your inbox"
                >
                  <span>
                    Get the latest research, industry insights, and health perspectives in your inbox
                    <span aria-hidden="true">•</span>
                    Get the latest research, industry insights, and health perspectives in your inbox
                  </span>
                </span>
                <i className="bi bi-arrow-right-short" aria-hidden="true" />
              </a>
            </aside>

            <div className="newsletter-section__content">
              <article className="newsletter-latest">
                <span>
                  <i className="bi bi-newspaper" aria-hidden="true" />
                  Latest Issue
                </span>
                <h3>
                  <a href={newsletterLatestLink} target="_blank" rel="noreferrer">
                    {newsletterLatestItems.map((item, index) => (
                      <span
                        className="newsletter-latest__headline"
                        data-tone={index % 2 === 0 ? "ink" : "muted"}
                        key={item}
                      >
                        {item}
                        {index < newsletterLatestItems.length - 1 ? " " : ""}
                      </span>
                    ))}
                  </a>
                </h3>
              </article>
            </div>
          </div>
        </section>

        {showCollaborationCases ? (
          <EditorialSection
            id="projects"
            kicker="Collaboration Cases"
            title="Collaboration Cases"
            headline="Building impact together"
            intro="Selected projects with institutions, publishers, and innovators."
            linkText="View all cases"
          >
            <div className="project-grid">
              {content.projects.slice(0, 3).map((project) => (
                <article className="content-card project-card" key={project.title}>
                  <Cover src={project.cover} alt="" />
                  <div className="content-card__body">
                    <h3>{project.title}</h3>
                    <p>{project.intro}</p>
                  </div>
                </article>
              ))}
              <CalloutCard icon={<Network />} title="Partnerships that advance knowledge and society." link="Work with us" />
            </div>
          </EditorialSection>
        ) : null}

        <section className="partners section-anchor" id="partners">
          <div className="editorial-section__inner partners__inner">
            <aside className="section-aside">
              <span>Partners</span>
              <h2>Our partners</h2>
              <p>A global network across academia, publishing, technology, and nonprofits.</p>
            </aside>
            <div className="partners__content">
              <div className="logo-wall" aria-label="Partner logos">
                <div className="logo-wall__track">
                  {[...content.partners, ...content.partners].map((partner, index) => (
                    <article aria-hidden={index >= content.partners.length} key={`${partner.name}-${index}`}>
                      {partner.logo ? <OptimizedImage src={partner.logo} alt={index < content.partners.length ? `${partner.name} logo` : ""} decoding="async" loading="lazy" /> : <span>{partner.name}</span>}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const getPageScroll = () => document.scrollingElement?.scrollTop ?? window.scrollY;
  const [isScrolled, setIsScrolled] = useState(() => getPageScroll() > 24);

  useEffect(() => {
    const onScroll = () => setIsScrolled(getPageScroll() > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header${isMenuOpen ? " is-menu-open" : ""}${isScrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="/#top" aria-label="Neu-Reality home">
        <OptimizedImage src={LOGO_IMAGE} alt="" decoding="async" loading="lazy" />
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav id="primary-navigation" aria-label="Primary navigation">
        <span className="mobile-nav-heading">Menu</span>
        {navItems.map(([label, href]) => (
          <a href={`/#${href}`} key={href} onClick={() => setIsMenuOpen(false)}>
            {label}
          </a>
        ))}
        <div className="language-switch" aria-label="Language">
          <span aria-current="true">EN</span>
          <span aria-hidden="true">|</span>
          <a href={chinesePageUrl()} onClick={() => setIsMenuOpen(false)}>
            CN
          </a>
        </div>
        <div className="mobile-nav-signature">
          <img src={MOBILE_NAV_LOGO_IMAGE} alt="Neu-Reality" decoding="async" loading="eager" />
          <p className="mobile-nav-slogan">
            <span>For every mind.</span>
            <span>For everything that reshapes us.</span>
          </p>
          <div className="mobile-nav-socials" aria-label="Social media links">
            {footerSocialLinks.map((platform) => (
              <a href={platform.url} key={platform.label} target="_blank" rel="noreferrer" aria-label={platform.label}>
                {socialIcon(platform.label)}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

function CommunityBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      const playback = video.play();
      if (playback) {
        playback.catch(() => {
          // Mobile browsers can defer autoplay until the first user gesture.
        });
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        tryPlay();
      }
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    window.addEventListener("click", tryPlay, { once: true });

    return () => {
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("click", tryPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="community-video__media"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={COMMUNITY_VIDEO_POSTER}
      aria-hidden="true"
      webkit-playsinline="true"
      x5-video-player-type="h5-page"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portrait"
    >
      <source src={COMMUNITY_VIDEO} type="video/mp4" />
    </video>
  );
}

function chinesePageUrl() {
  const pageKey = getStaticPageKey();
  if (pageKey === "about") return "https://neu-reality.com/about-us/";
  if (pageKey === "privacy") return "https://neu-reality.com/private-policy/";
  if (pageKey === "terms") return "https://neu-reality.com/terms-of-service/";
  return "https://neu-reality.com/";
}

function EditorialSection({
  id,
  kicker,
  headline,
  intro,
  linkText,
  linkHref,
  asideExtra,
  children
}: {
  id: string;
  kicker: string;
  title: string;
  headline: string;
  intro: string;
  linkText?: string;
  linkHref?: string;
  asideExtra?: React.ReactNode;
  children: React.ReactNode;
}) {
  const isExternalLink = linkHref?.startsWith("http");

  return (
    <section className="editorial-section section-anchor" id={id}>
      <div className="editorial-section__inner">
        <aside className="section-aside">
          <span>{kicker}</span>
          <h2>{headline}</h2>
          <p>{intro}</p>
          {asideExtra ? <div className="section-aside__extra">{asideExtra}</div> : null}
          {linkText ? (
            <a
              className="section-link"
              href={linkHref ?? `#${id}`}
              rel={isExternalLink ? "noreferrer" : undefined}
              target={isExternalLink ? "_blank" : undefined}
            >
              {linkText}
              <ArrowRight size={16} />
            </a>
          ) : null}
        </aside>
        <div className="editorial-section__content">{children}</div>
      </div>
    </section>
  );
}

function PodcastListenLinks() {
  const platforms = [
    {
      label: "Spotify",
      logo: "/assets/podcast/spotify-card.svg",
      href: "https://open.spotify.com/show/1Ya8rAqwYNNdybDpf0JJXe?si=051ccaf4ef00415b"
    },
    {
      label: "Apple Podcasts",
      logo: "/assets/podcast/apple-podcasts-card.svg",
      href: "https://podcasts.apple.com/gb/podcast//id1488227859"
    },
    {
      label: "小宇宙",
      logo: "/assets/podcast/xiaoyuzhou-card.svg",
      href: "https://www.xiaoyuzhoufm.com/podcast/5e280fa7418a84a0461f8f01"
    },
    {
      label: "喜马拉雅",
      logo: "/assets/podcast/ximalaya-card.svg",
      href: "https://xima.tv/1_RBM4yM?_sonic=0"
    }
  ];

  return (
    <div className="podcast-listen" aria-label="Podcast platforms">
      <small>Listen on</small>
      <div className="podcast-platforms">
        {platforms.map((platform) => (
          <a
            aria-label={`Listen on ${platform.label}`}
            href={platform.href}
            key={platform.label}
            rel="noreferrer"
            target="_blank"
            title={platform.label}
          >
            <OptimizedImage src={platform.logo} alt="" decoding="async" loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  );
}

const rasterAssetPattern = /\.(png|jpe?g)$/i;

function getAvifSrc(src: string) {
  if (!src.startsWith("/assets/") || !rasterAssetPattern.test(src)) {
    return null;
  }

  return src.replace(rasterAssetPattern, ".avif");
}

function OptimizedImage({
  alt,
  src,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
}) {
  const avifSrc = getAvifSrc(src);
  const image = <img src={src} alt={alt} {...props} />;

  if (!avifSrc) {
    return image;
  }

  return (
    <picture className="optimized-picture">
      <source srcSet={encodeURI(avifSrc)} type="image/avif" />
      {image}
    </picture>
  );
}

function CalloutCard({ icon, title, link }: { icon: React.ReactNode; title: string; link: string }) {
  return (
    <aside className="callout-card">
      <div>{icon}</div>
      <p>{title}</p>
      <a className="card-link" href="#partners">
        {link}
        <ArrowRight size={15} />
      </a>
    </aside>
  );
}

function Cover({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="cover">
      {src ? <OptimizedImage src={src} alt={alt} decoding="async" loading="lazy" /> : <Camera aria-hidden="true" />}
    </div>
  );
}

function CourseMentor({ course }: { course: SiteContent["courses"][number] }) {
  const legacyMentor = course.mentor?.trim() ?? "";
  const legacyParts = legacyMentor.split(",").map((part) => part.trim()).filter(Boolean);
  const hasLegacyName = legacyParts.length > 1;
  const hasMentorName = Boolean(course.mentorName);
  const name = course.mentorName || (hasLegacyName ? legacyParts[0] : "Faculty Mentor");
  const title = course.mentorTitle || (!hasMentorName ? (hasLegacyName ? legacyParts.slice(1).join(", ") : legacyMentor) : "");
  const isLogoAvatar = course.mentorAvatarVariant === "logo";
  const showAvatar = course.mentorAvatar !== null;
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className={`course-mentor${isLogoAvatar ? " course-mentor--logo" : ""}${showAvatar ? "" : " course-mentor--no-avatar"}`}>
      {showAvatar ? (
        <div className={`course-mentor__avatar${isLogoAvatar ? " course-mentor__avatar--logo" : ""}`}>
          {course.mentorAvatar ? (
            <OptimizedImage src={course.mentorAvatar} alt={`${name} avatar`} decoding="async" loading="lazy" />
          ) : (
            <span aria-hidden="true">{initials}</span>
          )}
        </div>
      ) : null}
      <div className="course-mentor__copy">
        <strong>{name}</strong>
        {title ? <small>{title}</small> : null}
      </div>
    </div>
  );
}

function CourseTags({ tags }: { tags?: SiteContent["courses"][number]["tags"] }) {
  const items = Array.isArray(tags)
    ? tags
    : typeof tags === "string"
      ? tags.split(/[,，]/).map((tag) => tag.trim()).filter(Boolean)
      : [];

  if (!items.length) return null;

  return (
    <div className="course-tags" aria-label="Course topics">
      {items.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function CourseDetails({ details }: { details?: SiteContent["courses"][number]["details"] }) {
  if (!details) return null;

  const items: { icon: React.ReactNode; label?: string }[] = [
    { icon: <Radio size={15} />, label: details.format },
    { icon: <Clock3 size={15} />, label: details.duration },
    { icon: <Users size={15} />, label: details.capacity },
    { icon: <CalendarDays size={15} />, label: details.start },
    { icon: <Video size={15} />, label: details.platform },
    { icon: <MapPin size={15} />, label: details.venue }
  ].filter((item) => Boolean(item.label));

  return (
    <div className="course-details" aria-label="Course details">
      {items.map((item) => (
        <span key={item.label}>
          {item.icon}
          {item.label}
        </span>
      ))}
    </div>
  );
}

function CourseEnrollmentStatus({ status }: { status?: SiteContent["courses"][number]["enrollmentStatus"] }) {
  const isOpen = status === "open";

  return (
    <div className={`course-status${isOpen ? " course-status--open" : " course-status--completed"}`}>
      {isOpen ? (
        <>
          <strong>New Cohort</strong>
          <span>Open for Enrollment</span>
        </>
      ) : (
        <strong>Completed</strong>
      )}
    </div>
  );
}

function AdminPanel({
  content,
  onUpdate
}: {
  content: SiteContent;
  onUpdate: (content: SiteContent) => void;
}) {
  const [draft, setDraft] = useState(content);
  const [active, setActive] = useState<SectionKey>("articles");
  const [status, setStatus] = useState("Changes are editable locally. Save to update the public page.");
  const current = adminSections.find((section) => section.key === active) ?? adminSections[0];

  const updateItem = (section: SectionKey, index: number, field: string, value: string) => {
    setDraft((previous) => {
      const items = [...previous[section]] as Record<string, string>[];
      items[index] = { ...items[index], [field]: value };
      return { ...previous, [section]: items };
    });
  };

  const addItem = () => {
    const nextItem = current.fields.reduce<Record<string, string>>((item, field) => {
      item[field.key] = field.options?.[0] ?? "";
      return item;
    }, {});
    setDraft((previous) => ({
      ...previous,
      [active]: [...previous[active], nextItem]
    }));
  };

  const save = () => {
    onUpdate(draft);
    setStatus("Saved. Return to the site with the link above to see the updated sections.");
  };

  return (
    <section className="admin-panel section-anchor" id="admin">
      <div className="admin-panel__top">
        <div>
          <Upload />
          <h1>Content Panel</h1>
          <p>
            Edit each section with text fields and media upload boxes. This route is hidden from
            the main page and can be opened directly with <code>#admin</code>.
          </p>
        </div>
        <a className="button button--quiet" href="#top">
          Return to site
        </a>
      </div>

      <div className="admin-workspace">
        <aside className="admin-tabs" aria-label="Content sections">
          {adminSections.map((section) => (
            <button
              className={active === section.key ? "is-active" : ""}
              key={section.key}
              type="button"
              onClick={() => setActive(section.key)}
            >
              {section.label}
            </button>
          ))}
        </aside>

        <div className="admin-editor">
          <div className="admin-editor__header">
            <h2>{current.label}</h2>
            <button className="button button--quiet" type="button" onClick={addItem}>
              <Plus size={18} />
              Add item
            </button>
          </div>

          <div className="admin-items">
            {draft[active].map((rawItem, index) => {
              const item = rawItem as Record<string, string>;
              return (
                <article className="admin-item" key={`${active}-${index}`}>
                  <strong>{current.label} {index + 1}</strong>
                  <div className="admin-fields">
                    {current.fields.map((field) => (
                      <Field
                        field={field}
                        key={field.key}
                        value={item[field.key] ?? ""}
                        onChange={(value) => updateItem(active, index, field.key, value)}
                      />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="admin-panel__actions">
        <button className="button button--primary" type="button" onClick={save}>
          <Save size={18} />
          Save content
        </button>
        <button
          className="button button--quiet"
          type="button"
          onClick={() => {
            setDraft(defaultContent);
            onUpdate(defaultContent);
            window.localStorage.removeItem(STORAGE_KEY);
            setStatus("Mock content restored.");
          }}
        >
          Restore mock data
        </button>
        <p role="status">{status}</p>
      </div>
    </section>
  );
}

function Field({
  field,
  value,
  onChange
}: {
  field: FieldConfig;
  value: string;
  onChange: (value: string) => void;
}) {
  if (field.kind === "media") {
    return (
      <label className="field field--media">
        <span>{field.label}</span>
        {value ? <img src={value} alt="" /> : <Upload aria-hidden="true" />}
        <input
          accept="image/*,video/*"
          type="file"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => onChange(String(reader.result ?? ""));
            reader.readAsDataURL(file);
          }}
        />
      </label>
    );
  }

  if (field.kind === "textarea") {
    return (
      <label className="field field--wide">
        <span>{field.label}</span>
        <textarea value={value} onChange={(event) => onChange(event.target.value)} />
      </label>
    );
  }

  if (field.kind === "select") {
    return (
      <label className="field">
        <span>{field.label}</span>
        <select value={value} onChange={(event) => onChange(event.target.value)}>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <label className="field">
      <span>{field.label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function StaticPage({ page }: { page: StaticPageContent }) {
  return (
    <main className="static-page" id="top">
      <section className="static-hero" aria-labelledby="static-page-title">
        <div className="static-hero__image" aria-hidden="true">
          <OptimizedImage src={HERO_IMAGE} alt="" decoding="async" fetchPriority="high" loading="eager" />
        </div>
        <div className="static-hero__copy">
          <span>{page.eyebrow}</span>
          <h1 id="static-page-title">{page.title}</h1>
          <p>{page.deck}</p>
        </div>
        {page.highlights ? (
          <div className="static-hero__stats" aria-label={`${page.title} highlights`}>
            {page.highlights.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <small>{label}</small>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <section className="static-document" aria-label={`${page.title} content`}>
        <aside className="static-document__nav">
          <span>On this page</span>
          <nav aria-label={`${page.title} sections`}>
            {page.sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.heading.replace(/^Article\s+\d+\.\s*/, "").replace(/^\d+\.\s*/, "")}
              </a>
            ))}
          </nav>
        </aside>

        <article className="static-document__body">
          {page.sections.map((section) => (
            <PageSectionBlock key={section.id} section={section} />
          ))}
        </article>
      </section>
    </main>
  );
}

function PageSectionBlock({ section }: { section: PageSection }) {
  return (
    <section id={section.id} className="static-copy-section">
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <PageBulletList bullets={section.bullets} />
      {section.subsections?.map((subsection) => (
        <div className="static-copy-subsection" key={subsection.heading}>
          <h3>{subsection.heading}</h3>
          {subsection.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <PageBulletList bullets={subsection.bullets} />
        </div>
      ))}
    </section>
  );
}

function PageBulletList({ bullets }: { bullets?: string[] }) {
  if (!bullets?.length) return null;

  return (
    <ul>
      {bullets.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-about">
        <img className="footer-logo" src={MOBILE_NAV_LOGO_IMAGE} alt="Neu-Reality" decoding="async" loading="lazy" />
        <p>
          Neu-Reality (神经现实) is one of China’s leading independent science communication
          platforms dedicated to neuroscience and artificial intelligence. Over the past decade,
          Neu-Reality has built a global network of nearly 400 contributors from institutions
          including MIT, Harvard, Stanford, Oxford, Cambridge, the Max Planck Institutes, while
          reaching more than one million subscribers across platforms. Through publications, public
          events, podcasts, academic collaborations, and educational initiatives, Neu-Reality
          connects research, technology, and culture to foster deeper public understanding of the
          brain, intelligence, and emerging technologies shaping the future.
        </p>
      </div>
      <div className="footer-links">
        <h2>Links</h2>
        <nav aria-label="Footer navigation">
          <a href="https://www.neu-reality.com/">Chinese Site</a>
          <a href="/about-us/">About Us</a>
          <a href="/private-policy/">Privacy Policy</a>
          <a href="/terms-of-service/">Terms of Service</a>
        </nav>
        <div className="footer-socials" aria-label="Social media links">
          {footerSocialLinks.map((platform) => (
            <a href={platform.url} key={platform.label} target="_blank" rel="noreferrer" aria-label={platform.label}>
              {socialIcon(platform.label)}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-contact">
        <h2>Contact</h2>
        <address>
          <strong>Shanghai</strong>
          <a href="mailto:support@neu-reality.com">
            <Mail size={15} />
            support@neu-reality.com
          </a>
          <span>
            <MapPin size={15} />
            Building 1, No. 947 Jinle Road, Baoshan District, Shanghai, China
          </span>
        </address>
        <address>
          <strong>London</strong>
          <a href="mailto:info@noetex.ai">
            <Mail size={15} />
            info@noetex.ai
          </a>
          <span>
            <MapPin size={15} />
            71-75 Shelton Street, Covent Garden, London, UK
          </span>
        </address>
      </div>
      <p className="copyright">© 2016-2026 神经现实 Neu-Reality | © 2025-2026 Noetex Ltd.</p>
    </footer>
  );
}

function socialIcon(label: string) {
  const lower = label.toLowerCase();
  const iconClass = lower.includes("instagram")
    ? "bi-instagram"
    : lower.includes("tiktok")
      ? "bi-tiktok"
      : lower.includes("bluesky")
        ? "bi-bluesky"
        : lower === "x" || lower.includes("twitter")
          ? "bi-twitter-x"
          : "bi-link-45deg";

  return <i className={`bi ${iconClass}`} aria-hidden="true" />;
}

export default App;
