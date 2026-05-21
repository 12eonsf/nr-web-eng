<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: Neu-reality
description: A calm, warm, science-forward institutional website for Neu-reality and Noetex Academy.
---

# Design System: Neu-reality

## 1. Overview

**Creative North Star: "The Warm Research Observatory"**

Neu-reality should feel like a place where serious scientific observation meets human learning: an observatory, a seminar room, and a publishing desk in one coherent surface. The visual system should be calm and warm enough for professors, course partners, institutions, and education collaborators, while keeping a quiet trace of technological experimentation.

The site should use English for all public-facing content. Chinese source material can inform meaning, but headings, navigation, cards, buttons, metadata, and admin-facing section labels should be written in polished English unless a bilingual variant is explicitly requested later.

This system rejects cold AI-startup aesthetics. It should not lean on neon blue, cyber gradients, glowing blobs, glassmorphism, or a generic SaaS landing-page rhythm. Scientific credibility should come from structure, language, editorial pacing, and careful hierarchy, not from decorative technology signals.

**Key Characteristics:**

- Warm institutional trust.
- Science-forward, but not technology-dominated.
- Editorial clarity with restrained experimental moments.
- Serif-led typography for seriousness, memory, and cultural depth.
- Content systems that can later be populated from imported section data.

## 2. Colors

The palette is anchored by Neu-reality's blue-green identity color, supported by warm scientific neutrals and sparing secondary accents.

### Primary

- **Neu-reality Blue-Green** ([to be resolved during implementation]): The primary brand color. Use it for the hero identity signal, key calls to action, active navigation states, selected filters, section anchors, and subtle data highlights. It should feel aqueous, intelligent, and calm, not electric or neon.

### Secondary

- **Warm Signal Amber** ([to be resolved during implementation]): A restrained warmth for educational moments, mentor highlights, event dates, or small emphasis marks. It should appear rarely and never compete with the blue-green.

### Tertiary

- **Soft Neural Violet** ([to be resolved during implementation]): An optional experimental accent for neuroaesthetics or future-facing topic modules. Use it as a whisper, not as the brand's main emotional register.

### Neutral

- **Paper Warmth** ([to be resolved during implementation]): The primary page background. It should be warm off-white, suitable for long-form reading and institutional content.
- **Ink Charcoal** ([to be resolved during implementation]): The main text color. It should read softer than pure black while remaining accessible.
- **Quiet Mist** ([to be resolved during implementation]): Subtle section backgrounds, dividers, input surfaces, and admin import panels.
- **Fine Line Gray** ([to be resolved during implementation]): Borders, separators, timelines, and partner-list structure.

### Named Rules

**The Blue-Green Identity Rule.** Neu-reality Blue-Green is the only color allowed to carry primary brand recognition. Do not split the brand between multiple saturated colors.

**The Warmth Against Sterility Rule.** Every major surface must include a warm neutral or humanizing material quality. Do not let the site collapse into cold laboratory blue.

**The No Neon Rule.** Blue-green must never become cyan neon, electric teal, or cyberpunk glow. If the color looks like an AI tool dashboard, it is wrong.

## 3. Typography

**Display Font:** Serif family ([font pairing to be chosen at implementation])
**Body Font:** Serif family or highly readable humanist companion ([font pairing to be chosen at implementation])
**Label/Mono Font:** Optional restrained sans or mono only for admin utilities, data labels, and import status.

**Character:** Typography should feel scholarly, composed, and contemporary. The serif direction should suggest essays, research, archives, and careful public communication rather than fashion editorial drama.

### Hierarchy

- **Display** (light to regular weight, fluid large size, tight but readable line-height): For the home hero, vision statement, and rare high-emphasis section openings.
- **Headline** (regular to medium weight, generous size): For major content sections such as Who We Are, Noetex Academy, Neuroaesthetics, and Collaboration Projects.
- **Title** (medium weight, compact size): For article cards, interviews, podcast entries, course modules, events, mentors, and partner projects.
- **Body** (regular weight, comfortable size, 1.55 to 1.7 line-height): For descriptions, institutional narrative, contributor details, and program summaries. Keep long lines around 65 to 75 characters.
- **Label** (medium weight, small size, normal letter spacing): For metadata such as author, expert, date, platform, section type, and admin import status.

### Named Rules

**The Serif With Restraint Rule.** Use serif type to create intellectual warmth and trust, not decorative nostalgia. Avoid overly fashionable italic display treatments, drop caps, and magazine affectations.

**The English Content Rule.** All website-facing strings should be English by default: navigation, section headings, card titles, buttons, admin labels, helper text, and empty states.

## 4. Elevation

The system should be flat by default, using tonal layering, spacing, borders, and typographic contrast to create depth. Shadows may appear on interactive content previews, admin import panels, and hover states, but they should be broad, quiet, and ambient rather than dark or floating.

### Shadow Vocabulary

- **Ambient Lift** ([to be resolved during implementation]): For hover states on featured articles, mentor cards, expert interviews, and import panels.
- **Video Veil** ([to be resolved during implementation]): A soft overlay strategy for the vision section so video background never harms text readability.

### Named Rules

**The Institution Before Interface Rule.** Depth should support reading and trust. Do not make the website feel like a dashboard unless the user has entered the admin import flow.

**The Video Must Serve Text Rule.** The vision video background is atmospheric, not the content. Text contrast, fallback imagery, and reduced-motion behavior are mandatory.

## 5. Components

These are starter component directions for implementation. Re-run `/impeccable document` after components exist so this section can be replaced with extracted, exact tokens.

### Buttons

- **Shape:** Gently confident corners, likely small to medium radius ([to be resolved during implementation]).
- **Primary:** Neu-reality Blue-Green background with warm light text. Use for partnership contact, content import, and primary exploration actions.
- **Hover / Focus:** Slight tonal shift, visible focus ring, no glow-heavy cyber treatment.
- **Secondary / Ghost:** Text or fine-border treatments for section navigation and platform links.

### Chips

- **Style:** Small editorial tags for content type, research field, expert role, or platform.
- **State:** Selected chips may use a pale blue-green surface with dark text and a clear border.

### Cards / Containers

- **Corner Style:** Reserved and precise, not pill-like.
- **Background:** Paper Warmth or Quiet Mist, with Neu-reality Blue-Green used only for emphasis.
- **Shadow Strategy:** Flat at rest, ambient lift on interactive cards.
- **Border:** Fine Line Gray for structure.
- **Internal Padding:** Generous for institutional content, tighter for dense admin import rows.

### Inputs / Fields

- **Style:** Quiet surfaces with clear labels, designed for importing structured section content.
- **Focus:** Blue-green border or ring, high contrast, no flashing or glow.
- **Error / Disabled:** Plain language, visible status, and resilient layout for long imported text.

### Navigation

- **Style:** Calm institutional navigation with direct access to key sections and a discreet admin entry.
- **Active State:** Blue-green text, underline, or small marker.
- **Mobile Treatment:** Simple menu with section anchors, not a heavy app shell.

### Vision Media

The vision section may use video background, but it must include a readable overlay, a still fallback, and reduced-motion handling. The video should imply observation, learning, neural complexity, or human inquiry rather than generic science fiction.

### Admin Import Entry

The admin entry should feel integrated but clearly separate from the public narrative. It can be a discreet navigation item, footer utility link, or protected route entry. Once inside, the interface may become more product-like: structured import areas for articles, interviews, podcasts, events, courses, topics, projects, partners, and platform links.

## 6. Do's and Don'ts

### Do:

- **Do** use Neu-reality Blue-Green as the primary identity color and keep it calm, deep, and trustworthy.
- **Do** use serif typography to create scholarly warmth, institutional confidence, and long-form readability.
- **Do** keep all public-facing website content in English.
- **Do** make the first impression suitable for professors, partner institutions, research organizations, publishers, and education collaborators.
- **Do** make each major content section ready for future imported data, including articles, interviews, podcasts, events, courses, topics, projects, partners, and platform links.
- **Do** keep video backgrounds readable, optional under reduced motion, and visually subordinate to the vision copy.

### Don't:

- **Don't** create a generic SaaS landing page with oversized hero metrics and identical card grids.
- **Don't** create a cold AI startup site dominated by dark blue, neon gradients, glowing orbs, or cyber aesthetics.
- **Don't** make the site feel like a corporate brochure that is bureaucratic, stiff, or overly institutional.
- **Don't** bury the mission beneath endless content feeds like a generic media portal.
- **Don't** make Noetex Academy feel like a transactional course-sales page.
- **Don't** use technology as the only visual signal. Brain science, education, public knowledge, long-term inquiry, and cross-cultural collaboration must remain equally present.
