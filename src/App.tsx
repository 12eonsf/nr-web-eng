import {
  ArrowRight,
  Camera,
  Headphones,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Network,
  Play,
  Plus,
  Quote,
  Save,
  Upload,
  X,
  Youtube
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { defaultContent, SiteContent } from "./content";

const STORAGE_KEY = "neu-reality-content-v7";
const HERO_IMAGE = "/assets/hero-illustration.jpg";
const LOGO_IMAGE = "/assets/neu-reality-logo-white.png";
const FOOTER_LOGO_IMAGE = "/assets/neu-reality-logo.png";
const COMMUNITY_VIDEO = "/assets/BG Video.mp4";

type SectionKey = keyof SiteContent;

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
  ["Partners", "partners"]
] as const;

const articleLabels = ["Cognitive Science", "AI & Medicine", "Science & Society", "Neuroethics"];
const podcastMeta = [
  ["Ep. 32", "55 min"],
  ["Ep. 28", "1 hr 13 min"],
  ["Ep. 27", "1 hr 12 min"],
  ["Ep. 20", "45 min"],
  ["Ep. 16", "1 hr 7 min"],
  ["Ep. 5", "1 hr 19 min"]
];

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
      { key: "intro", label: "Intro", kind: "textarea" }
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
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const onHashChange = () => setShowAdmin(window.location.hash === "#admin");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
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

  return (
    <div className="site-shell">
      <Header />
      <main id="top">
        <section className="hero section-anchor" id="vision">
          <div className="hero__image" aria-hidden="true">
            <img src={HERO_IMAGE} alt="Illustration of a figure moving through a neural tunnel" />
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
        >
          <div className="article-grid">
            {content.articles.map((article, index) => (
              <article className="content-card article-card" key={article.title}>
                <Cover src={article.cover} alt="" />
                <div className="content-card__body">
                  <span>{articleLabels[index] ?? "Research"}</span>
                  <h3>{article.title}</h3>
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
        >
          <div className="interview-grid">
            {content.interviews.map((interview) => (
              <article className="content-card interview-card" key={interview.name}>
                <img src={interview.headshot} alt={interview.name} />
                <div className="content-card__body">
                  <span>{interview.name}</span>
                  <small>{interview.title}</small>
                  <h3>{interview.headline}</h3>
                  <a className="card-link" href="#interviews">
                    Read more
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          id="podcasts"
          kicker="Neuromancing · Podcast"
          title="Neuromancing"
          headline="The unknown mind"
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
                  <h3>{podcast.title}</h3>
                  <small>{podcastMeta[index]?.[1] ?? "Listen"}</small>
                </div>
              </article>
            ))}
          </div>
        </EditorialSection>

        <section className="community-video section-anchor" id="community" aria-labelledby="community-video-title">
          <video className="community-video__media" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src={COMMUNITY_VIDEO} type="video/mp4" />
          </video>
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
          linkText="View all events"
        >
          <div className="event-grid">
            {content.events.slice(0, 4).map((event) => (
              <article className="content-card event-card" key={event.theme}>
                <Cover src={event.cover} alt="" />
                <div className="content-card__body">
                  <span>{event.location}</span>
                  <h3>{event.theme}</h3>
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
          linkText="View all courses"
        >
          <div className="course-grid">
            {content.courses.slice(0, 4).map((course) => (
              <article className="content-card course-card" key={course.theme}>
                <div className="course-card__media">
                  <Cover src={course.cover} alt="" />
                  <span className="course-card__location">{course.location}</span>
                </div>
                <div className="content-card__body">
                  <span>{course.type}</span>
                  <h3>{course.theme}</h3>
                  <CourseMentor course={course} />
                </div>
              </article>
            ))}
          </div>
        </EditorialSection>

        <section className="topic-band section-anchor" id="neuroaesthetics">
          <div className="topic-band__main">
            <img src="/assets/neu-reality-vision-field.png" alt="" />
            <div>
              <span>Featured Topic</span>
              <h2>Neuroaesthetics</h2>
              <p>Exploring the science of beauty, perception, and creative experience.</p>
              <a className="text-link text-link--light" href="#neuroaesthetics">
                Explore the feature
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="topic-band__list">
            {content.neuroaesthetics.slice(0, 3).map((item) => (
              <a href="#neuroaesthetics" key={item.title}>
                <span>{item.kind}</span>
                <h3>{item.title}</h3>
                <ArrowRight size={16} />
              </a>
            ))}
          </div>
          <a className="topic-band__cta" href="#neuroaesthetics">
            View all neuroaesthetics content
            <ArrowRight size={18} />
          </a>
        </section>

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

        <section className="partners section-anchor" id="partners">
          <div className="partners__lead">
            <span>Partners</span>
            <h2>Our partners</h2>
            <p>A global network across academia, publishing, technology, and nonprofits.</p>
          </div>
          <div className="logo-wall" aria-label="Partner logos">
            <div className="logo-wall__track">
              {[...content.partners, ...content.partners].map((partner, index) => (
                <article aria-hidden={index >= content.partners.length} key={`${partner.name}-${index}`}>
                  {partner.logo ? <img src={partner.logo} alt={index < content.partners.length ? `${partner.name} logo` : ""} /> : <span>{partner.name}</span>}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer platforms={content.platforms} />
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

  return (
    <header className={`site-header${isMenuOpen ? " is-menu-open" : ""}${isScrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Neu-Reality home">
        <img src={LOGO_IMAGE} alt="" />
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
        {navItems.map(([label, href]) => (
          <a href={`#${href}`} key={href} onClick={() => setIsMenuOpen(false)}>
            {label}
          </a>
        ))}
        <div className="language-switch" aria-label="Language">
          <span aria-current="true">EN</span>
          <span aria-hidden="true">|</span>
          <a href="https://neu-reality.com/" onClick={() => setIsMenuOpen(false)}>
            CN
          </a>
        </div>
      </nav>
    </header>
  );
}

function EditorialSection({
  id,
  kicker,
  headline,
  intro,
  linkText,
  asideExtra,
  children
}: {
  id: string;
  kicker: string;
  title: string;
  headline: string;
  intro: string;
  linkText?: string;
  asideExtra?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="editorial-section section-anchor" id={id}>
      <div className="editorial-section__inner">
        <aside className="section-aside">
          <span>{kicker}</span>
          <h2>{headline}</h2>
          <p>{intro}</p>
          {asideExtra ? <div className="section-aside__extra">{asideExtra}</div> : null}
          {linkText ? (
            <a className="section-link" href={`#${id}`}>
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
    { label: "Spotify", logo: "/assets/podcast/spotify-card.svg" },
    { label: "Apple Podcasts", logo: "/assets/podcast/apple-podcasts-card.svg" },
    { label: "喜马拉雅", logo: "/assets/podcast/ximalaya-card.svg" }
  ];

  return (
    <div className="podcast-listen" aria-label="Podcast platforms">
      <small>Listen on</small>
      <div className="podcast-platforms">
        {platforms.map((platform) => (
          <span aria-label={platform.label} key={platform.label} title={platform.label}>
            <img src={platform.logo} alt="" />
          </span>
        ))}
      </div>
    </div>
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
      {src ? <img src={src} alt={alt} /> : <Camera aria-hidden="true" />}
    </div>
  );
}

function CourseMentor({ course }: { course: SiteContent["courses"][number] }) {
  const legacyMentor = course.mentor?.trim() ?? "";
  const legacyParts = legacyMentor.split(",").map((part) => part.trim()).filter(Boolean);
  const hasLegacyName = legacyParts.length > 1;
  const name = course.mentorName || (hasLegacyName ? legacyParts[0] : "Faculty Mentor");
  const title =
    course.mentorTitle ||
    (hasLegacyName ? legacyParts.slice(1).join(", ") : legacyMentor) ||
    "Noetex Academy Mentor";
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="course-mentor">
      <div className="course-mentor__avatar">
        {course.mentorAvatar ? (
          <img src={course.mentorAvatar} alt={`${name} avatar`} />
        ) : (
          <span aria-hidden="true">{initials}</span>
        )}
      </div>
      <div className="course-mentor__copy">
        <strong>{name}</strong>
        <small>{title}</small>
      </div>
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

function Footer({ platforms }: { platforms: SiteContent["platforms"] }) {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand brand--footer" href="#top">
          <img src={FOOTER_LOGO_IMAGE} alt="" />
          <strong>Neu-Reality</strong>
        </a>
        <p className="footer-slogan">A public observatory for brain science, intelligence, and future education.</p>
        <p>Address: 71-75 Shelton Street, Covent Garden, London</p>
      </div>
      <div className="footer-socials" aria-label="Social media links">
        {platforms.map((platform) => (
          <a href={platform.url} key={platform.label} target="_blank" rel="noreferrer" aria-label={platform.label}>
            {socialIcon(platform.label)}
          </a>
        ))}
      </div>
      <nav aria-label="Footer navigation">
        <a href="#top">About Us</a>
        <a href="#top">Privacy Policy</a>
        <a href="#top">Terms of Service</a>
        <a href="mailto:hello@neu-reality.com">Contact</a>
      </nav>
      <p className="copyright">© 2016-2026 神经现实 Neu-Reality | © 2025-2026 Noetex Ltd.</p>
    </footer>
  );
}

function socialIcon(label: string) {
  const lower = label.toLowerCase();
  if (lower.includes("instagram")) return <Instagram size={18} />;
  if (lower.includes("linkedin")) return <Linkedin size={18} />;
  if (lower.includes("youtube")) return <Youtube size={18} />;
  if (lower === "x" || lower.includes("twitter")) return <X size={18} />;
  return <Mail size={18} />;
}

export default App;
