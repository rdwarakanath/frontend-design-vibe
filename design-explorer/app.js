/* ==============================
   Design Style Explorer — JS
   ============================== */

// ---- Markdown content embedded as JS objects (no server needed) ----
const styleContent = {
  minimalism: {
    title: "Minimalism",
    md: `## 🎨 Minimalism
**Category:** Clean & Structural

**🧠 Summary:** A foundational design approach that removes all excess, focusing purely on essential elements, typography, and purposeful whitespace to guide the user's attention.

**✨ Feels Like:** Calm, premium, focused, uncluttered, sophisticated.

**📌 Key Characteristics:**
- High utilization of negative (white) space
- Extremely limited and purposeful color palette (often monochromatic or 1-2 accents)
- Strong reliance on typography for hierarchy
- Elimination of purely decorative visual elements

**✅ Use Case:**
- High-end brand portfolios and lookbooks
- Premium fashion or luxury e-commerce sites
- Elegant SaaS landing pages

**🚫 When to Avoid:**
- Complex, data-heavy dashboards
- Entertainment, gaming, or children-focused platforms
- Highly interactive and dynamic web applications

**🧩 Works Well With:** Typography-First Design, Swiss / International Design, Monochromatic palettes

**⚠️ Common Mistakes:**
- Creating a layout that looks "unfinished" rather than intentional
- Poor font pairings that make the design look generic
- Inadequate contrast making content hard to read

**🎯 Design Tips:**
- Treat whitespace as an active element, not just empty background.
- Select one distinctive geometric sans-serif font and pair it with a reliable body font.
- Group elements logically so proximity defines relationships.

**💻 Prompt (for vibe coding):**

Design a clean and minimal UI layout prioritizing deep whitespace and a strong typographic hierarchy. Use a monochrome palette with one subtle accent color. Strip away all unnecessary borders, shadows, and decorations, letting the content structure the page.`
  },

  "bento-grid": {
    title: "Bento Grid",
    md: `## 🎨 Bento Grid
**Category:** Clean & Structural

**🧠 Summary:** A highly modular, tile-based layout system inspired by traditional Japanese bento boxes, where content is divided into strictly ordered, neatly partitioned rectangular cards.

**✨ Feels Like:** Organized, snappy, modern, satisfying, information-dense.

**📌 Key Characteristics:**
- Strict grid system grouping elements into distinctly sized rectangular blocks
- Soft rounded corners on all cards
- Consistent internal padding and uniform gaps between them
- Content constrained perfectly within its container

**✅ Use Case:**
- Product features sections on landing pages
- Dashboards and control panels
- Creative portfolios summarizing skills and projects

**🚫 When to Avoid:**
- Long-form reading or blog posts
- Highly narrative or cinematic scrollytelling sites
- Deep, hierarchical multi-step forms

**🧩 Works Well With:** Glassmorphism, Soft UI / Minimalist shadows, Bright gradient accents

**⚠️ Common Mistakes:**
- Making tiles too small, causing content to feel cramped
- Using the same size for every tile, destroying visual hierarchy
- Overcomplicating the grid with too many tiny compartments

**🎯 Design Tips:**
- Establish a base grid (e.g., 3×3 or 4×4) and let tiles span multiple columns/rows for emphasis.
- Ensure the border-radius of the outer container matches the inner tiles.
- Keep the page background subtly different from tile color to make them pop.

**💻 Prompt (for vibe coding):**

Create a modern Bento Grid layout where content is cleanly separated into cards of varying sizes (squares and rectangles) on a structured grid. Use a soft background color, rounded corners for the cards, and consistent gap spacing. Ensure one large card acts as the primary focal point.`
  },

  swiss: {
    title: "Swiss / International",
    md: `## 🎨 Swiss / International Style
**Category:** Clean & Structural

**🧠 Summary:** A historically significant graphic design style translated to web, emphasizing absolute objectivity, readability, asymmetric layouts, and adherence to a strict mathematical grid.

**✨ Feels Like:** Objective, authoritative, timeless, highly structured, intellectual.

**📌 Key Characteristics:**
- Strict adherence to a rigid, often asymmetrical grid system
- Heavy use of classic sans-serif typography (Helvetica, Neue Haas Grotesk)
- Flush left, ragged right text alignment
- Stark, high-contrast imagery using photography

**✅ Use Case:**
- Architectural firm portfolios
- Museum and art gallery websites
- Digital documentation and encyclopedias

**🚫 When to Avoid:**
- Playful, casual consumer products
- Apps requiring complex micro-interactions and depth
- Emotionally driven, narrative marketing

**🧩 Works Well With:** Typography-First Design, Brutalism (Raw), Monochromatic / High-contrast themes

**⚠️ Common Mistakes:**
- Ignoring the grid entirely, breaking structural integrity
- Using centered text (Swiss style uses left-aligned text almost exclusively)
- Cluttering the design with unnecessary visual motifs

**🎯 Design Tips:**
- Let the grid dictate every placement; don't "eyeball" margins.
- Use massive font weight contrasts (Ultra Bold headers + Light body) to create hierarchy without colour.
- Utilize large-scale photography bleeding to grid edges.

**💻 Prompt (for vibe coding):**

Design a web page based on the Swiss International Style. Rely on a strict, asymmetrical grid layout. Use a classic neo-grotesque sans-serif font, stark black-and-white contrast, and completely left-aligned text. Avoid any decorative elements, letting the math of the layout and typography do the work.`
  },

  "flat-design": {
    title: "Flat Design 2.0",
    md: `## 🎨 Flat Design 2.0
**Category:** Clean & Structural

**🧠 Summary:** An evolution of strict flat design that reintroduces subtle depth—like drop shadows and highlights—while keeping the core aesthetic clean, fast, and highly legible.

**✨ Feels Like:** Accessible, friendly, efficient, vibrant, clear.

**📌 Key Characteristics:**
- Solid, often vibrant colors with distinct contrast
- Minimal texture and no extreme realistic depth
- Use of subtle, broad shadows to indicate distinct interactive layers
- Crisp, clean vector illustrations and iconography

**✅ Use Case:**
- Startup SaaS platforms
- Mobile application interfaces
- Educational tools and lightweight productivity software

**🚫 When to Avoid:**
- High-end luxury brands with a moody aesthetic
- Immersive gaming environments
- Highly experimental artistic portfolios

**🧩 Works Well With:** Card-Based Design, Material Design principles, Split-Screen Layouts

**⚠️ Common Mistakes:**
- Using excessively harsh shadows that ruin the "flat" aesthetic
- Poor color contrast between flat layers
- Making everything look clickable, or nothing look clickable

**🎯 Design Tips:**
- Use shadow purely for functional hierarchy (e.g., floating buttons, dropdowns), not decoration.
- Stick to 3–4 primary colours to maintain consistency.
- Keep illustrations geometric and conceptually simple.

**💻 Prompt (for vibe coding):**

Implement a Flat Design 2.0 interface. Rely on solid, vibrant colors, clean vector icons, and simple typography. Reintroduce subtle, soft drop shadows only to indicate interactivity or floating elements, but completely avoid realistic lighting, textures, or bevels.`
  },

  material: {
    title: "Material Design",
    md: `## 🎨 Material Design
**Category:** Clean & Structural

**🧠 Summary:** Google's comprehensive design language that mimics physical paper and ink, utilizing realistic lighting, shadow layering (elevation), and meaningful motion.

**✨ Feels Like:** Intuitive, tactile, systematic, familiar, Google-esque.

**📌 Key Characteristics:**
- Strict z-axis elevation rules dictating shadow behaviour
- Responsive animations (e.g., ripple effects on clicks)
- Bold, intentional use of colour and edge-to-edge imagery
- Floating action buttons (FAB) and structured app bars

**✅ Use Case:**
- Android mobile applications
- Heavy data dashboards and enterprise management systems
- Google ecosystem integrations

**🚫 When to Avoid:**
- Highly unique, rule-breaking marketing campaigns
- Experimental experiential websites
- Soft, organic wellness brand identities

**🧩 Works Well With:** Card-Based Design, Form-Centric Design, Dashboard UI

**⚠️ Common Mistakes:**
- Incorrectly layering elements (high-elevation shadow behind background)
- Overusing the primary accent colour
- Overly long or bouncy animations contradicting Material's physics

**🎯 Design Tips:**
- Think of every UI element as physical paper sliding over another.
- Use shadows dynamically; elements "lift" (shadow increases) on hover/press.
- Utilize the Material typography scale (Roboto or geometric fonts) for familiarity.

**💻 Prompt (for vibe coding):**

Design a UI strictly following Material Design guidelines. Use layered 'paper' surfaces distinguished by precise drop shadows representing different elevations. Include a dedicated app bar, floating action buttons, and ensure interactive elements have clear layered feedback.`
  },

  "card-based": {
    title: "Card-Based Design",
    md: `## 🎨 Card-Based Design
**Category:** Clean & Structural

**🧠 Summary:** An organizational paradigm that chunks information into independent, bite-sized, clearly delineated rectangular containers (cards) to improve scannability and interactivity.

**✨ Feels Like:** Digestible, modular, browsing-friendly, structured.

**📌 Key Characteristics:**
- Independent containers housing related information (image, title, text, action)
- Clearly defined borders or soft shadows separating cards from background
- Uniform width but variable height, or uniform grids
- Entire card is often interactive/clickable

**✅ Use Case:**
- E-commerce product listings and catalogues
- Social media feeds and blog indexes
- Complex dashboards displaying different metrics

**🚫 When to Avoid:**
- Single, flowing, narrative storytelling articles
- Immersive cinematic web experiences
- Checkout flows requiring sequential focus

**🧩 Works Well With:** Flat Design 2.0, Shadow-based Depth, Material Design

**⚠️ Common Mistakes:**
- Stuffing too much disjointed information into a single card
- Not enough space between cards, causing visual clutter
- Card looks like a button without clear clickable actions inside

**🎯 Design Tips:**
- Apply slight hover effects (lifting shadow, border colour change) for interactivity cues.
- Ensure background contrast makes cards distinctly visible.
- Maintain consistent internal padding so content breathes.

**💻 Prompt (for vibe coding):**

Create a highly scannable Card-Based layout. Chunk the content into visually distinct, repeating card components, each containing a media element, a title, a brief description, and a call-to-action. Give the cards subtle borders or soft shadows to lift them from a muted background.`
  },

  "split-screen": {
    title: "Split-Screen Layout",
    md: `## 🎨 Split-Screen Layout
**Category:** Clean & Structural

**🧠 Summary:** A spatial layout technique where the viewport is divided vertically into two distinct, often contrasting, halves that present equally important but different messages or options.

**✨ Feels Like:** Balanced, decisive, contrasting, striking, dual-natured.

**📌 Key Characteristics:**
- A clear 50/50 vertical division of the screen (on desktop)
- Heavy juxtaposition (solid colour vs. photography, text vs. image)
- Symmetrical visual weight
- Content stacks vertically on mobile screens

**✅ Use Case:**
- Product landing pages comparing two features
- Login/Signup portals (form + branding)
- E-commerce sites separating product lines

**🚫 When to Avoid:**
- Content-heavy news sites or documentation
- Complex SaaS application interfaces
- Single-message marketing campaigns

**🧩 Works Well With:** Minimalism, High-contrast typography, Interactive & Motion (hover expansion)

**⚠️ Common Mistakes:**
- Forgetting mobile stacking behaviour
- Uneven visual weight causing users to ignore one half
- Overloading each side with too much text

**🎯 Design Tips:**
- Use high contrast between panels (dark vs. light, vibrant vs. muted).
- Implement hover interactions where one side slightly expands.
- Keep the central dividing line perfectly centred.

**💻 Prompt (for vibe coding):**

Design a Split-Screen landing page that divides the desktop viewport into two equal vertical halves. One side should feature bold branding typography on a solid, vibrant background, while the other side focuses on high-quality structural imagery. Ensure high contrast between the two sections.`
  },

  "grid-systems": {
    title: "Grid Systems",
    md: `## 🎨 Grid Systems
**Category:** Clean & Structural

**🧠 Summary:** Not just an invisible framework, but an aesthetic where the underlying structural grid is made deliberately visible or strictly enforced to create an atmosphere of engineering and precision.

**✨ Feels Like:** Engineered, precise, mathematical, technical, reliable.

**📌 Key Characteristics:**
- Visible border lines dividing the layout into columns and sections
- Rigorous alignment — everything snaps to grid intersections
- Highly structured hierarchy and whitespace rules
- Monospaced or highly technical fonts are frequently used

**✅ Use Case:**
- Developer tools and API documentation
- Technical product landing pages (e.g., engineered hardware)
- Digital design agency portfolios

**🚫 When to Avoid:**
- Soft, organic lifestyle brands
- Fluid, emotionally-driven storytelling websites
- Whimsical or children-oriented designs

**🧩 Works Well With:** Swiss / International, Brutalism (Raw), Typography-First

**⚠️ Common Mistakes:**
- Overcomplicating with too many intersecting lines
- Grid lines too thick or high-contrast, overwhelming content
- Forgetting to align internal padding flawlessly

**🎯 Design Tips:**
- Use 1px sharp borders with low opacity to define grid lines.
- Ensure typography perfectly aligns with the drawn grid.
- Use a 12-column foundation and clearly demarcate sections.

**💻 Prompt (for vibe coding):**

Create a highly structured layout where the Grid System defines the aesthetic. Use fine, 1px visible borders to separate sections, rows, and columns. Keep all elements rigorously aligned to this visible structure, and utilize a technical sans-serif font for a highly engineered, precise feel.`
  },

  "typography-first": {
    title: "Typography-First",
    md: `## 🎨 Typography-First
**Category:** Clean & Structural

**🧠 Summary:** A design methodology that strips away traditional UI elements (images, containers, buttons) and relies almost exclusively on expressive, scaled text to carry the aesthetic and structural load.

**✨ Feels Like:** Bold, editorial, confident, outspoken, minimalist-yet-loud.

**📌 Key Characteristics:**
- Massive, oversized headline fonts dominating the viewport
- Deep contrast in font weights, styles (mixing serif + sans-serif), and sizes
- Creative use of spacing, leading, and kerning as design elements
- Extreme minimalism regarding other media

**✅ Use Case:**
- Independent design studios and personal portfolios
- Cutting-edge editorial blogs and online magazines
- Typographically driven brand manifestos

**🚫 When to Avoid:**
- Image-heavy e-commerce stores
- Dashboards requiring rapid scanning of complex data
- Traditional corporate websites needing conventional structures

**🧩 Works Well With:** Minimalism, Swiss / International, Hover-driven Interactive UI

**⚠️ Common Mistakes:**
- Choosing illegible display fonts that sacrifice readability
- Forgetting typographic hierarchy — everything feels loud
- Poor responsive behaviour (massive text overflowing on mobile)

**🎯 Design Tips:**
- Treat letters like visual art shapes; allow them to overlap or interact closely.
- Set up a highly intentional typographic scale — H1 dramatically larger than body copy.
- Limit colours and keep contrast high; let the font forms create the visual experience.

**💻 Prompt (for vibe coding):**

Design a Typography-First web experience that eschews traditional images and boxes. Use a massive, expressive display font for the primary headings that takes up the majority of the screen space. Pair it with a highly readable, contrasting body font. Let the arrangement, size, and weight of the text perform all the visual heavy lifting.`
  }
};

// ---- Simple Markdown-to-HTML parser ----
function parseMarkdown(md) {
  // Normalize newlines and ensure proper block separation
  md = md.replace(/\r\n/g, '\n');
  md = md.replace(/^(## .+)$/gm, '$1\n\n');
  md = md.replace(/^(\*\*.*?\*\*)$/gm, '$1\n\n');

  // Split into blocks by double newline
  const blocks = md.split(/\n\n+/);
  let html = '';

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    // Heading
    if (trimmed.startsWith('## ')) {
      html += `<h2>${trimmed.slice(3)}</h2>\n`;
      continue;
    }

    // List block
    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').map(l => {
        const m = l.match(/^- (.+)$/);
        return m ? `<li>${m[1]}</li>` : '';
      }).join('\n');
      html += `<ul>${items}</ul>\n`;
      continue;
    }

    // HR
    if (trimmed === '---') {
      html += '<hr>\n';
      continue;
    }

    // Regular paragraph — apply inline formatting
    let p = trimmed
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>');
    html += `<p>${p}</p>\n`;
  }

  return html;
}

// ---- DOM References ----
const previewSection = document.getElementById('preview-section');
const previewBox = document.getElementById('preview-box');
const previewStyleName = document.getElementById('preview-style-name');
const contentRendered = document.getElementById('content-rendered');
const contentLoading = document.getElementById('content-loading');
const buttons = document.querySelectorAll('.style-btn');

let currentStyle = 'minimalism';

// ---- Switch Style ----
function switchStyle(styleKey) {
  if (styleKey === currentStyle) return;
  currentStyle = styleKey;

  // Update active button
  buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.style === styleKey));

  // Update preview CSS class
  const allClasses = [...previewSection.classList].filter(c => c.startsWith('style--'));
  allClasses.forEach(c => previewSection.classList.remove(c));
  
  // Add a small fade transition
  previewBox.style.opacity = '0';
  previewBox.style.transform = 'translateY(8px)';

  setTimeout(() => {
    previewSection.classList.add(`style--${styleKey}`);
    previewBox.style.opacity = '1';
    previewBox.style.transform = 'translateY(0)';
  }, 180);

  // Update label
  const data = styleContent[styleKey];
  previewStyleName.textContent = data ? data.title : styleKey;

  // Load content
  loadContent(styleKey);
}

// ---- Load Content ----
function loadContent(styleKey) {
  contentRendered.style.opacity = '0';
  contentLoading.style.display = 'flex';

  setTimeout(() => {
    const data = styleContent[styleKey];
    if (data) {
      contentRendered.innerHTML = parseMarkdown(data.md);
    } else {
      contentRendered.innerHTML = '<p>Content not found.</p>';
    }
    contentLoading.style.display = 'none';
    contentRendered.style.opacity = '1';
  }, 350);
}

// ---- Event Listeners ----
buttons.forEach(btn => {
  btn.addEventListener('click', () => switchStyle(btn.dataset.style));
});

// ---- Initial Load ----
document.addEventListener('DOMContentLoaded', () => {
  previewSection.classList.add('style--minimalism');
  previewBox.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  contentRendered.style.transition = 'opacity 0.3s ease';
  loadContent('minimalism');
});
