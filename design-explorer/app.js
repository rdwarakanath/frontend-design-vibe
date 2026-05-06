/* ==============================
   Design Style Explorer — JS
   ============================== */

// ---- Markdown content embedded as JS objects (no server needed) ----
const styleContent = {
  // ---- CLEAN & STRUCTURAL ----
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
  },

  // ---- DEPTH & MATERIAL ----
  "glassmorphism": {
    title: "Glassmorphism",
    md: `## 🎨 Glassmorphism
**Category:** Depth & Material

**🧠 Summary:** A visual style that simulates frosted glass through translucent layers, background blurs, and subtle light borders, giving the UI a modern, floating depth over colorful backgrounds.

**✨ Feels Like:** Ethereal, premium, modern, layered, translucent.

**📌 Key Characteristics:**
- Frosted glass effect using high background blurs
- Translucent panels with lowered opacity
- Subtle, thin, bright borders to define the edges of the glass
- Deeply saturated or animated backgrounds that shine vibrantly through the blur

**✅ Use Case:**
- High-end tech product landing pages
- Fintech app dashboards
- Weather and music player applications

**🚫 When to Avoid:**
- Text-heavy blogs or documentation (blur reduces readability)
- Sites accessed heavily on low-performance devices (CSS blurs can cause lag)
- Minimalist, monochrome websites (glass needs colorful backgrounds to stand out)

**🧩 Works Well With:** Aurora UI / Gradient Mesh backgrounds, Shadow-based Depth, High-tech & Future themes

**⚠️ Common Mistakes:**
- Overusing the effect, stacking too many blurred layers which ruins contrast
- Insufficient text contrast over the blurred glass
- Forgetting a subtle light border, causing the glass object to blend into the background completely

**🎯 Design Notes (Practical Tips):**
- Let the background do the heavy lifting—use bright, abstract shapes or gradients underneath.
- Add a 1px solid border with a very low opacity white (or black in dark mode) to catch the "light."
- Increase the blur radius to ensure text on the glass remains legible.

**💻 Prompt (for vibe coding):**

Implement a modern Glassmorphism UI. Create layered, translucent panels with a strong background blur, sitting over a vibrant graphic or gradient background. Add a 1px soft white lighting border around the panels to simulate cut glass edges, and ensure text remains highly legible.`
  },

  "dark-glassmorphism": {
    title: "Dark Glassmorphism",
    md: `## 🎨 Dark Glassmorphism
**Category:** Depth & Material

**🧠 Summary:** A moodier, darker twist on traditional glassmorphism, relying on deep blacks and grays, neon accents, and dark frosted panels to create an edgier, high-contrast digital environment.

**✨ Feels Like:** Nocturnal, cyberpunk, high-end tech, mysterious, deep.

**📌 Key Characteristics:**
- Deep dark backgrounds (often pure blacks or dark grays)
- Low-opacity dark panels with background blurs
- High contrast neon or vivid accent lights shining through from underneath
- Subtle reflective gradients on the borders

**✅ Use Case:**
- Web3 and crypto platforms
- Hardcore gaming and streaming overlays
- Developer tools and IDEs

**🚫 When to Avoid:**
- Soft, organic health or wellness platforms
- Classical corporate business services
- Content aiming for a bright, approachable vibe

**🧩 Works Well With:** Cyberpunk / High-Tech themes, Aurora UI (dark variants), Glowing microinteractions

**⚠️ Common Mistakes:**
- Making the background totally black without any light sources, rendering the glass invisible
- Using low contrast dark text on a dark glass panel
- Over-illuminating the borders, making them look solid rather than reflective

**🎯 Design Notes (Practical Tips):**
- Place glowing, blurry orbs of neon colors behind the dark glass to give it structural depth.
- Enhance legibility with pure white or bright neon typography.
- Keep the blur effect extremely smooth and tightly constrained.

**💻 Prompt (for vibe coding):**

Design a Dark Glassmorphism interface. Use a deep, dark thematic background accented with blurred neon light orbs. Overlay dark, frosted translucent cards with strong background blurs and thin, glossy borders that catch the neon light. Prioritize high contrast white typography.`
  },

  "neumorphism": {
    title: "Neumorphism",
    md: `## 🎨 Neumorphism
**Category:** Depth & Material

**🧠 Summary:** A style characterized by soft, low-contrast UI elements that appear to be extruded from or indented into the background, resembling soft plastic rather than floating layers.

**✨ Feels Like:** Soft, seamless, tactile, futuristic-minimalist, molded.

**📌 Key Characteristics:**
- UI elements and background share exactly the same color
- Soft, diffused dual-shadows (one light, one dark) to create extrusion
- Extremely low contrast bounding boxes
- Rounded, pill-like, or heavily curved edges

**✅ Use Case:**
- Simple mobile app controls (like smart home toggles)
- Single-purpose calculators or utility apps
- Clean hardware/music synthesizer interfaces

**🚫 When to Avoid:**
- Information-dense enterprise dashboards
- Web applications requiring high accessibility and distinct contrast
- Complex navigations with many nested layers

**🧩 Works Well With:** Soft UI, Minimalism, Mono-color palettes

**⚠️ Common Mistakes:**
- Ignoring accessibility guidelines; neumorphism intrinsically suffers from low contrast and can be hard to read.
- Using neumorphism on deeply colored backgrounds (it works best on off-whites or soft grays).
- Trying to neatly stack multiple neumorphic cards, creating visual chaos.

**🎯 Design Notes (Practical Tips):**
- Use neumorphism selectively for interactive elements like buttons and toggles, rather than entire content cards.
- Add small, colored indicator lights within neumorphic toggles to show active states since shadows alone aren't clear enough.
- Ensure the background color is explicitly set (neither pure white nor pure black) so both light and dark shadows can render.

**💻 Prompt (for vibe coding):**

Create a soft Neumorphism UI where interactive elements appear extruded from the background material. Use the exact same color for the background and components, defining the shapes exclusively through soft, diffused dual drop shadows (one bright highlight, one dark shadow). Maintain a very soft, tactile aesthetic.`
  },

  "claymorphism": {
    title: "Claymorphism",
    md: `## 🎨 Claymorphism
**Category:** Depth & Material

**🧠 Summary:** A heavily rounded, playful 3D style that uses fluffy, soft inner and outer shadows to make 2D elements look like inflating balloons, soft clay, or 3D pastel renders.

**✨ Feels Like:** Playful, friendly, buoyant, squishy, approachable.

**📌 Key Characteristics:**
- Extremely rounded corners and pill shapes
- A combination of soft inset shadows and thick outer drop shadows
- Bright, pastel, or candy-like color palettes
- Simulated soft 3D volumes

**✅ Use Case:**
- EdTech and interactive children's applications
- Playful crypto or NFT project landing pages
- Task managers looking to dramatically reduce stress

**🚫 When to Avoid:**
- Serious financial or banking portals
- Highly technical developer documentation
- High-end minimalist luxury brands

**🧩 Works Well With:** 3D Interactive elements / WebGL, Bubble/Puffy typography, Microinteractions (bouncy animations)

**⚠️ Common Mistakes:**
- Losing the "clay" illusion by using harsh, tight drop shadows
- Over-saturating the colors, making the design hard to look at
- Applying claymorphism to tiny elements, causing them to look like muddy smudges

**🎯 Design Notes (Practical Tips):**
- Pair an outer drop-shadow with two inner shadows (one light highlight on top, one dark indent on the bottom) to achieve the 3D clay look.
- Keep hover animations bouncy and physical to match the visual style.
- Use larger, slightly heavier geometric fonts to complement the volume of the UI.

**💻 Prompt (for vibe coding):**

Design a playful Claymorphism UI emphasizing thick, soft volumes. Use large border radii for all elements. Apply a combination of soft outer shadows and distinct, soft inner shadows (top highlight and bottom shade) to create a puffed, 3D clay-like aesthetic. Use a bright, pastel-leaning palette.`
  },

  "skeuomorphism": {
    title: "Skeuomorphism",
    md: `## 🎨 Skeuomorphism
**Category:** Depth & Material

**🧠 Summary:** A retro-leaning design strategy that perfectly mimics real-world textures, lighting, and physical mechanisms (like leather, wood, stitched fabric, or metallic dials).

**✨ Feels Like:** Nostalgic, highly-textured, analog, mechanical, familiar.

**📌 Key Characteristics:**
- Heavy use of real-world material textures (wood grain, brushed metal, stitched leather)
- Realistic, hard light sources creating tight highlights and deep drop shadows
- Interfaces modeled exactly on physical tools (knobs, switches, real-world calculators)
- Extremely high detail and embellishment

**✅ Use Case:**
- Audio plug-in (VST) and music production software interfaces
- Digital watch faces and specialized timer apps
- Vintage-themed niche applications or games

**🚫 When to Avoid:**
- Modern, fast-loading SaaS platforms
- Mobile-first, responsive grid systems (textures scale poorly)
- Enterprise data visualization tools

**🧩 Works Well With:** Vintage / Retro typography, WebGL rendered interactive elements, Shadow-based depth

**⚠️ Common Mistakes:**
- Mixing modern flat elements with photorealistic textures, creating a disjointed UI
- Sacrificing usability for the sake of strict real-world mimicry
- Using low-res, repeating texture patterns that look cheap

**🎯 Design Notes (Practical Tips):**
- Focus relentlessly on lighting consistency; if a light source comes from the top left, every bezel and knob must reflect it perfectly.
- Stick to one distinct dominant material metaphor rather than clashing five different textures.
- Ensure that despite the rich graphics, hit-boxes for interactive elements remain large and accessible.

**💻 Prompt (for vibe coding):**

Design a hyper-realistic Skeuomorphic interface. Utilize rich, real-world textures like brushed metal, matte plastic, or leather. Apply realistic lighting models with tight specular highlights, bevels, indents, and crisp drop shadows to perfectly emulate physical, mechanical components and buttons.`
  },

  "aurora-ui": {
    title: "Aurora UI",
    md: `## 🎨 Aurora UI
**Category:** Depth & Material

**🧠 Summary:** A dreamy, radiant style characterized by glowing, diffused, multi-colored gradients fading into each other smoothly, resembling the Northern Lights.

**✨ Feels Like:** Dreamy, ambient, soft, luxurious, organic.

**📌 Key Characteristics:**
- Soft, highly blurred atmospheric color blobs
- Smooth transitions between three or more harmonious colors
- Typically used as an ambient, moving background layer
- Often overlaid with subtle noise/grain textures for a tactile feel

**✅ Use Case:**
- Startup hero sections and landing pages
- Modern SaaS branding
- Wellness and mental health applications

**🚫 When to Avoid:**
- highly structured, strict-grid dashboards
- Technical platforms demanding severe objectivity
- When the color palette requires strict monochromatic limits

**🧩 Works Well With:** Glassmorphism, Minimalism, Microinteractions and motion

**⚠️ Common Mistakes:**
- Allowing bright aurora blobs to sit behind text without adjusting contrast
- Utilizing clashing, muddy colors that don't blur smoothly into one another
- Moving the blobs too fast via CSS animation, causing distraction

**🎯 Design Notes (Practical Tips):**
- Add an extremely subtle CSS noise/grain overlay (usually via an SVG filter) to give the gradients an expensive, modern matte finish.
- Keep the Aurora blobs slow-moving and ambient with infinite CSS keyframes.
- Float stark, flat or glassmorphic cards directly over the glowing colors to define structure.

**💻 Prompt (for vibe coding):**

Create an Aurora UI background featuring soft, highly blurred, glowing color blobs merging elegantly together. Set these blobs in slow, ambient motion to mimic the Northern Lights. Add a subtle, fine-grain noise texture over the entire background, and overlay crisp, high-contrast text and UI elements.`
  },

  "gradient-design": {
    title: "Gradient Design",
    md: `## 🎨 Gradient Design
**Category:** Depth & Material

**🧠 Summary:** Moving away from flat, single colors; this design actively embraces vibrant linear, radial, or conic gradients to create a sense of direction, energy, and volume.

**✨ Feels Like:** Energetic, vibrant, contemporary, lively, dynamic.

**📌 Key Characteristics:**
- Smooth transitions spanning across UI elements (buttons, text, backgrounds)
- High pigmentation and vibrancy
- Subtle angular or radial directions leading the eye
- Replaces standard flat grays/whites with very soft colored dual-tones

**✅ Use Case:**
- Engaging marketing landing pages
- E-commerce sites pushing modern aesthetics
- App interfaces aiming for a lively tone

**🚫 When to Avoid:**
- Serious documentation and encyclopedias
- Long-reading journalism and intense text platforms
- Brutalist or specifically flat designs

**🧩 Works Well With:** Flat Design 2.0, Large Typography, Card-Based Design

**⚠️ Common Mistakes:**
- Implementing "muddy" gradients by mixing colors from opposite ends of the color wheel (e.g., green to red).
- Overusing harsh gradients everywhere, leaving the eye no resting space.
- Applying heavy gradients to small body text, rendering it unreadable.

**🎯 Design Notes (Practical Tips):**
- Use analog colors (neighbors on the color wheel) for smooth, safe gradients (e.g., purple to pink).
- Use gradient mapping on large display typography as a focal point.
- Implement subtle gradients on backgrounds to provide a sense of lighting and space without drawing distinct shadows.

**💻 Prompt (for vibe coding):**

Design a UI that prominently features vibrant Gradient Design. Utilize smooth, analog color gradients for background sweeping layers and key interactive elements like buttons. Inject a sense of energy into the layout without using complex shadows, relying purely on the directional flow of the colors.`
  },

  "gradient-mesh": {
    title: "Gradient Mesh",
    md: `## 🎨 Gradient Mesh
**Category:** Depth & Material

**🧠 Summary:** A highly complex evolution of standard gradients, where multi-point color meshes blend irregularly, creating fluid, organic, and abstract 3D-like volume and flow.

**✨ Feels Like:** Premium, abstract, highly engineered, artistic, fluid.

**📌 Key Characteristics:**
- Irregular, multi-point color blending (unlike simple linear or radial gradients)
- Wavy, distorted color layers that suggest a molded, 3D surface
- Often highly saturated, luminous, and metallic looking
- Frequently paired with very stark, minimal typography directly on top

**✅ Use Case:**
- Hero sections for high-end boutique agencies
- Product launches for sleek consumer hardware or software
- Creative portfolios requiring a striking first impression

**🚫 When to Avoid:**
- Pages where the background must remain completely un-distracting
- Dense, multi-component layouts
- Corporate sites prioritizing strict, traditional trust (e.g., legal firms)

**🧩 Works Well With:** Glassmorphism, Minimalism, Fluid/Organic shapes

**⚠️ Common Mistakes:**
- Using so many intense colors in the mesh that it resembles a messy tie-dye shirt instead of an elegant flow.
- Competing heavily with foreground UI elements.
- Generating the mesh through extremely heavy CSS or WebGL that ruins site performance.

**🎯 Design Notes (Practical Tips):**
- Pre-render intricate gradient meshes as high-quality WebP images to save browser rendering power, reserving CSS only for subtle pans.
- Use a monochromatic or deeply limited palette for the mesh to keep it sophisticated (e.g., blending varying shades of deep oceanic blues and silvers).
- Keep all foreground elements radically simple (white text, thin lines) to let the mesh act as art.

**💻 Prompt (for vibe coding):**

Design a hero section utilizing highly complex, fluid Gradient Mesh as the background. Blend irregular, multi-point colors to simulate a sweeping, abstract 3D surface. Lay stark, ultra-minimal typography and UI elements cleanly over the mesh so the vivid background acts as the primary artistic focus.`
  },

  "shadow-based-depth": {
    title: "Shadow-based Depth",
    md: `## 🎨 Shadow-based Depth
**Category:** Depth & Material

**🧠 Summary:** A structural design methodology that builds hierarchy exclusively through the highly deliberate manipulation of drop shadows, moving away from lines, borders, or color blocking.

**✨ Feels Like:** Floating, layered, clean, atmospheric, dimensional.

**📌 Key Characteristics:**
- Use of extremely soft, low-opacity, broad shadow spreads to denote floating objects
- Removal of hard borders or distinct background colors
- A clear Z-axis hierarchy (higher elements have broader, lighter shadows)
- Elements visually detach dynamically upon hover

**✅ Use Case:**
- Dashboards with draggable or reorganizable widgets
- Task management boards (e.g., Kanban boards)
- Clean portfolio sites emphasizing individual works

**🚫 When to Avoid:**
- Heavily illustrated, flat-2D experiences
- Extremely text-heavy pages with no distinct UI blocks
- Dark mode interfaces where standard black shadows disappear

**🧩 Works Well With:** Card-Based Design, Material Design, Clean & Structural grids

**⚠️ Common Mistakes:**
- Using pure black \`#000000\` with high opacity for shadows, looking dirty and harsh.
- Having contradictory shadow angles, ruining the illusion of a single light source.
- Applying shadows to everything, flattening the hierarchy because everything is "floating."

**🎯 Design Notes (Practical Tips):**
- Tint your shadows lightly with the primary background color for a more natural integration (e.g., a dark blue shadow on a pale blue background).
- Lower the shadow opacity significantly and drastically increase the blur radius for a premium, airy feel.
- Only lift elements with shadow when you want the user to know they can interact with them.

**💻 Prompt (for vibe coding):**

Implement a very clean, borderless layout relying strictly on Shadow-based Depth for structure. Construct a layered Z-axis using varying dropshadow spreads—soft, tinted, broad shadows for floating cards, and sharp shadows to denote interactivity. Maintain a uniform light source direction and keep the aesthetic airy and floating.`
  },

  // ---- RETRO & NOSTALGIC ----
  "neo-brutalism": {
    title: "Neo-Brutalism",
    md: `## 🎨 Neo-Brutalism
**Category:** Retro & Nostalgic

**🧠 Summary:** A highly stylized, modern take on early internet and raw architectural brutalism. It features high contrast, stark borders, unapologetic blocks of primary colors, and intentionally rigid structures.

**✨ Feels Like:** Bold, unapologetic, trendy, architectural, stark.

**📌 Key Characteristics:**
- Thick, harsh black borders separating components
- Vibrant, almost chaotic primary and pastel color combinations
- Unapologetically hard drop-shadows (no blur, 100% opacity off-set lines)
- Mixed, quirky typography (often pairing large serifs with monospace)

**✅ Use Case:**
- Creative agency portfolios seeking an edgy vibe
- Modern streetwear e-commerce 
- Web3 and indie tech tools aiming to stand out

**🚫 When to Avoid:**
- Medical or traditional financial institutions
- Luxury brands relying on sleek minimalism
- Accessibility-critical public service sites (the starkness can be overwhelming)

**🧩 Works Well With:** Typography-First layouts, Quirky microinteractions, Collage/Zine design elements

**⚠️ Common Mistakes:**
- Losing typographic hierarchy because everything looks equally "loud"
- Ignoring mobile responsiveness (the thick borders and blocks can clutter small screens)
- Misaligning the hard drop-shadows, breaking the flat structural aesthetic

**🎯 Design Notes (Practical Tips):**
- Remove all border-radius or keep it strictly squared to harsh corners.
- Treat every div and image as a distinct structural block with a heavy stroke.
- Use raw, unpolished hover states like sudden color inversions or harsh shifts instead of smooth fades.

**💻 Prompt (for vibe coding):**

Design a Neo-Brutalist webpage. Rely heavily on thick, black borders, completely unblurred solid drop-shadows offset drastically, and bold patches of primary colors. Eschew smooth gradients and soft curves for a raw, aggressively structured, poster-like grid system that feels heavily stylized.`
  },

  "brutalism": {
    title: "Brutalism (Raw)",
    md: `## 🎨 Brutalism (Raw)
**Category:** Retro & Nostalgic

**🧠 Summary:** Distinct from Neo-Brutalism, this is a purist, anti-design approach. It mimics unstyled default HTML, rejecting modern visual polish in favor of raw, unvarnished functionality and utilitarian rawness.

**✨ Feels Like:** Unpolished, rebellious, purist, utilitarian, early-HTML.

**📌 Key Characteristics:**
- Default browser fonts (Times New Roman, Courier) and styling
- Complete absence of layout grids, CSS flexbox/grid alignments, or padding
- Default blue, underlined hyperlinks and harsh purple visited links
- Glitchy, overlapping text and raw, unedited low-res imagery

**✅ Use Case:**
- Highly experimental art galleries
- Subversive, counter-culture editorial blogs
- Underground indie music promos

**🚫 When to Avoid:**
- Any standard commercial product or SaaS
- Sites requiring user trust (e-commerce checkout)
- Traditional corporate branding

**🧩 Works Well With:** Deconstructivism, Abstract Design, Cyber Retro aesthetics

**⚠️ Common Mistakes:**
- Adding "accidental" modern polish (like soft shadows or Flexbox centering) which ruins the raw intent.
- Making the site completely unusable; raw doesn't mean entirely broken navigation.
- Overusing the style as an excuse for poor underlying code architecture.

**🎯 Design Notes (Practical Tips):**
- Strip your CSS reset file immediately. Let the browser render elements in their aggressive, default state.
- Purposefully misalign elements or use \`<marquee>\` tags to evoke early 90s web design.
- Use stark black backgrounds with neon green text or pure white backgrounds with harsh black text.

**💻 Prompt (for vibe coding):**

Create a completely raw, true Brutalist webpage. Actively avoid modern CSS styling, flexbox centering, or soft features. Rely on default browser styling, harsh Times New Roman fonts, standard blue underlined links, and unapologetic, ragged structures that rebel against modern UX polish.`
  },

  "y2k-frutiger-aero": {
    title: "Y2K / Frutiger Aero",
    md: `## 🎨 Y2K / Frutiger Aero
**Category:** Retro & Nostalgic

**🧠 Summary:** A hyper-nostalgic aesthetic referencing late 90s/early 2000s tech optimism. It features glossy textures, excessive chrome, metallic gradients, aquatic themes, and highly shiny, bubbly interfaces.

**✨ Feels Like:** Optimistic, glossy, tech-utopian, bubbly, synthetic.

**📌 Key Characteristics:**
- Glossy, plastic, or chrome textures everywhere (skeuomorphic buttons)
- Dominance of aquatic blues, vibrant greens, and metallic silvers
- Highly rendered 3D orbs, water droplets, and glass effects
- Gradients that mimic shiny metallic sheen across text and containers

**✅ Use Case:**
- Nostalgia-driven marketing campaigns
- Gen Z lifestyle and fashion brands
- Specialized, quirky interactive portfolios

**🚫 When to Avoid:**
- Professional B2B services
- Information-heavy data dashboards
- Clean, modern architectural sites

**🧩 Works Well With:** 3D Interactive elements, Skeuomorphism, Liquid / Organic shapes

**⚠️ Common Mistakes:**
- Making the layout look cheap rather than purposefully nostalgic
- Ignoring legibility by putting text over complex, shiny gradients
- Using flat colors—Y2K fundamentally requires gloss, specular highlights, and bevels.

**🎯 Design Notes (Practical Tips):**
- Look to the early Mac OS X Aqua interface or Windows Aero for direct inspiration.
- Use multiple CSS linear gradients on top of each other with hard stops to create a "chrome tube" or glossy glass effect.
- Incorporate distinct swooshing shapes, sparkles, and lens flares as decorative elements.

**💻 Prompt (for vibe coding):**

Design a hyper-glossy, nostalgic Y2K/Frutiger Aero interface. Embed a technological utopian feel using heavy metallic and aquatic gradients. Form bubbly, highly rounded buttons that look like clear plastic or glass with severe specular white highlights, emphasizing a stylized retro-future look.`
  },

  "retro-70s-80s": {
    title: "Retro (70s/80s)",
    md: `## 🎨 Retro (70s/80s)
**Category:** Retro & Nostalgic

**🧠 Summary:** A warm, nostalgic style emphasizing the graphic design sensibilities of the 1970s and 80s, characterized by analog grain, sepia/warm tones, thick serif fonts, and vintage textures.

**✨ Feels Like:** Warm, analog, historical, cinematic, cozy.

**📌 Key Characteristics:**
- Warm, muted color palettes (mustards, burnt oranges, olive greens, browns)
- Prominent, tight-tracked, swooping serif or groovy custom typography
- Distinct overlay textures (film grain, halftone dot patterns, paper textures)
- Flat, vintage-style illustration work over photography

**✅ Use Case:**
- Boutique coffee shops and craft breweries
- Lifestyle and vintage clothing stores
- Nostalgic storytelling brand sites

**🚫 When to Avoid:**
- Futuristic tech startups or AI tools
- Sleek, high-performance financial systems
- Sites reliant on showcasing high-contrast, razor-sharp modern photography

**🧩 Works Well With:** Typography-First layout, Paper / Zine aesthetics, Parallax Design

**⚠️ Common Mistakes:**
- Combining a sleek, modern UI grid with a retro font, resulting in visual confusion.
- Making the CSS grain texture too heavy, impacting loading speed or screen visibility.
- Ignoring the typography—this style relies fundamentally on the personality of the font.

**🎯 Design Notes (Practical Tips):**
- Use thick, expressive display serifs (like Cooper Black or similar swooping fonts) with negative letter-spacing for headlines.
- Apply a subtle SVG noise filter layered over the background with \`mix-blend-mode: multiply\` to add instant analog warmth.
- Avoid pure white or pure black; use off-whites (creams) and dark browns/charcoals.

**💻 Prompt (for vibe coding):**

Create a warm, nostalgic 70s-style layout. Prioritize a color palette heavily utilizing burnt oranges, mustards, and cream off-whites. Use a tightly spaced, heavy vintage serif font for all headers. Apply a subtle grain/noise filter across the viewport to replicate the feel of analog print material.`
  },

  "pixel-8-bit": {
    title: "Pixel / 8-bit",
    md: `## 🎨 Pixel / 8-bit
**Category:** Retro & Nostalgic

**🧠 Summary:** An homage to early video game graphics and early computing, building the entire interface out of distinct, un-antialiased blocks (pixels), complete with blocky fonts and low-res iconography.

**✨ Feels Like:** Playful, geeky, nostalgic, arcade-like, constrained.

**📌 Key Characteristics:**
- Everything is rendered in a highly visible grid of squares
- Use of specific 8-bit, monospaced, pixelated typography
- Extremely limited color palettes resembling old hardware limitations (e.g., CGA/EGA)
- Chunky borders, usually 2px to 4px wide, imitating limited resolution

**✅ Use Case:**
- Game developer portfolios, indie game studios
- Playful tech events or hackathon landing pages
- Crypto/NFT interfaces targeting gaming subcultures

**🚫 When to Avoid:**
- Serious e-commerce or premium retail
- Content intended for dense reading (pixel fonts cause severe eye strain)
- Mainstream SaaS products looking for broad enterprise appeal

**🧩 Works Well With:** Brutalism (Raw), Dark mode interfaces, Microinteractions (e.g., sprite sheet animations upon hover)

**⚠️ Common Mistakes:**
- Mixing smooth, high-res web fonts with pixel graphics—it shatters the illusion instantly.
- Making the pixels so large that navigating the UI becomes impossible.
- Using soft drop shadows or gradients (true 8-bit only uses flat dithered colors).

**🎯 Design Notes (Practical Tips):**
- Disable image smoothing in CSS via \`image-rendering: pixelated;\` to keep everything perfectly sharp.
- Utilize CSS box-shadows to draw pixel-art icons directly in the code without loading images.
- Keep hover effects strictly blocky (e.g., inverting colors instantly, not fading).

**💻 Prompt (for vibe coding):**

Design an interface entirely mimicking an 8-bit arcade aesthetic. Turn off image anti-aliasing to keep borders and assets strictly sharp and blocky workspace. Only use pixel-art typography and rigid, thick borders without curved radii. Employ a limited, bright arcade color palette set against a stark dark background.`
  },

  "vaporwave": {
    title: "Vaporwave",
    md: `## 🎨 Vaporwave
**Category:** Retro & Nostalgic

**🧠 Summary:** A hyper-specific internet aesthetic that satirizes 1980s/90s consumerism. It heavily incorporates neon pastels, classical Roman busts, obsolete tech interfaces, trailing windows, and grid lines.

**✨ Feels Like:** Surreal, ironic, neon, floating, hyper-digital.

**📌 Key Characteristics:**
- Pastel color palettes strictly dominated by cyan, magenta, and lavender
- Synthwave sunset grids sweeping into the background horizon
- Repurposing classical greek statues alongside 90s Windows 95 UI elements
- Glitchy, overlapping layouts and neon outlines

**✅ Use Case:**
- Experimental music acts and label websites
- Niche streetwear and internet-culture brands
- Highly interactive, Easter egg-laden personal portfolios

**🚫 When to Avoid:**
- Any project requiring high accessibility scores and clear readability
- Clean, corporate environments
- Anything aiming for a serious, grounded, real-world presence

**🧩 Works Well With:** Cyber Retro themes, WebGL / 3D Interactive elements, Glitch microinteractions

**⚠️ Common Mistakes:**
- Failing to commit to the irony. Vaporwave requires embracing elements that are typically considered 'bad design' purposefully.
- Over-animating the scene to the point that the browser crashes.
- Ignoring contrast entirely; even in this chaotic style, the main CTA needs to be findable.

**🎯 Design Notes (Practical Tips):**
- Build a glowing perspective grid at the bottom of the viewport using repeating linear-gradients shifted in 3D CSS space.
- Construct the actual UI panels using exact Windows 95 or MacOS 9 CSS replicas (gray boxes, hard bevels).
- Combine totally unrelated motifs (palm trees, dolphins, marble columns) via collage principles.

**💻 Prompt (for vibe coding):**

Construct a heavily stylized Vaporwave UI. Establish a surreal vibe using a neon cyan, magenta, and lavender pastel palette layered against an immense 3D perspective grid. Embed interactive elements housed inside retro, beveled Windows 95-style structural windows, surrounded by glitching, stylized imagery.`
  },

  "cyber-retro": {
    title: "Cyber Retro",
    md: `## 🎨 Cyber Retro
**Category:** Retro & Nostalgic

**🧠 Summary:** Distinct from dark cyberpunk, this style channels the raw, text-based terminal hacker aesthetics of the late 80s / early 90s, reminiscent of MS-DOS, phosphor monitors, and early Unix mainframes.

**✨ Feels Like:** Hacker, raw, backend, mysterious, technical.

**📌 Key Characteristics:**
- Pure black backgrounds mimicking powered-off monitors
- High-contrast, monochromatic text in neon green, amber, or cyan (phosphor colors)
- Strict reliance on monospace fonts exclusively
- Layouts built functionally out of ASCII characters or very simple CSS borders

**✅ Use Case:**
- Heavy developer tools, CLI wrappers, or deep tech products
- Cybersecurity firm branding or ethical hacking educational platforms
- Easter-egg console interfaces hidden within modern sites

**🚫 When to Avoid:**
- Highly visual portfolios requiring photography or video
- Any consumer-facing e-commerce or lifestyle app
- Audiences completely unfamiliar with development or IT culture

**🧩 Works Well With:** Brutalism (Raw), Pixel / 8-bit styles, Typography-First Design (specifically monospace)

**⚠️ Common Mistakes:**
- Using proportional sans-serif fonts instead of strict monospace, ruining the text-grid alignment.
- Adding soft shadows, gradients, or rounded corners. A terminal has straight, hard borders only.
- Forgetting a blinking cursor \`_\` or \`|\` to indicate input or active state.

**🎯 Design Notes (Practical Tips):**
- Use CSS to apply a very subtle horizontal scanline pattern and a faint glow filter (text-shadow) over the typography to simulate CRT monitors.
- Build structural boxes using pure text borders (like \`+---+\` or \`|\`) or 1px sharp CSS strokes.
- Animate content sequentially on load to mimic an older, slow terminal booting up or printing text stream.

**💻 Prompt (for vibe coding):**

Design a raw, Cyber Retro terminal interface. Set a pure black background with a subtle CRT scanline effect. Utilize only a monospace font colored in stark phosphor green or amber. Build all layout divisions and UI structures purely out of sharp 1px borders or ASCII characters, recreating an authentic MS-DOS hacker aesthetic.`
  },

  // ---- ARTISTIC & EXPERIMENTAL ----
  "maximalism": {
    title: "Maximalism",
    md: `## 🎨 Maximalism
**Category:** Artistic & Experimental

**🧠 Summary:** The deliberate, confident rejection of minimalism — using an abundance of patterns, textures, vibrant colors, and overlapping imagery, while maintaining a controlled, intentional visual tension that avoids accidental chaos.

**✨ Feels Like:** Decadent, opulent, overwhelming-in-a-good-way, bold, theatrical.

**📌 Key Characteristics:**
- Layered visual elements fighting for attention simultaneously
- Multiple typefaces used within a single composition
- Complex, layered patterns mixed with large photography
- Every inch of whitespace deliberately filled with purposeful elements

**✅ Use Case:**
- High-fashion editorials and luxury couture portfolios
- Avant-garde art galleries and museum digital campaigns
- Music artists with an elaborate creative visual identity

**🚫 When to Avoid:**
- Any product requiring fast UX comprehension (e-commerce checkout, SaaS)
- Accessibility-focused digital services
- Startups trying to communicate efficiency and simplicity

**🧩 Works Well With:** Editorial Design, Collage Design, Asymmetrical Layout

**⚠️ Common Mistakes:**
- Mistaking unplanned clutter for maximalism — true maximalism has rigid underlying order
- Failing to define one single exit point (CTA) that survives the visual noise
- Applying maximalism without testing how each layer holds on mobile

**🎯 Design Notes (Practical Tips):**
- Establish one anchor element (the primary subject) and then build the surrounding chaos around it.
- Use a strict typographic system even if you're layering five different typefaces — vary weight and size consistently.
- Apply 3D CSS transforms and stacking contexts deliberately to create a sense of physical depth among the layered elements.

**💻 Prompt (for vibe coding):**

Design an unapologetically Maximalist UI. Layer multiple visual elements — patterns, rich photography, bold typography, and colorful decorations — into a single cohesive but intensely dense composition. Ensure an underlying structural grid still carries the layout, but deliberately overfill every section with purposeful visual abundance.`
  },

  "editorial-design": {
    title: "Editorial Design",
    md: `## 🎨 Editorial Design
**Category:** Artistic & Experimental

**🧠 Summary:** A digital translation of printed magazine layout language, using asymmetric column grids, full-bleed imagery, pull quotes, and expressive typographic storytelling to present content as high-quality long-form journalism.

**✨ Feels Like:** Curated, literary, authoritative, beautifully composed, journalistic.

**📌 Key Characteristics:**
- Asymmetric multi-column layouts mixing image and text blocks
- Large, expressive pull quotes set in display type
- Full-bleed images that break free from standard column widths
- Extremely high production value photography and illustration

**✅ Use Case:**
- Long-form digital journalism and online magazines
- Thought leadership blogs and annual brand reports
- Cultural, editorial, and lifestyle brand websites

**🚫 When to Avoid:**
- Quick-scan landing pages optimized for conversion
- Complex web applications and dashboards
- Product catalogs requiring uniform listing grids

**🧩 Works Well With:** Typography-First layouts, Parallax Design, Scrollytelling

**⚠️ Common Mistakes:**
- Treating it like a standard CMS article layout (single centered column) — editorial requires a genuinely complex, asymmetric layout
- Under-investing in the photography; editorial design is only as strong as its imagery
- Failing to break the grid deliberately in at least one place per section

**🎯 Design Notes (Practical Tips):**
- Intentionally break your column grid with one large element per section (an image spanning 3 columns into the margin, or type rotating 90°).
- Use varied article entry formats: some starting with a full-bleed header image, some with a stark, typographic opening statement.
- Establish strict vertical rhythm through consistent baseline grids.

**💻 Prompt (for vibe coding):**

Design a sophisticated Editorial web layout resembling a premium digital magazine. Implement an asymmetric multi-column grid where text and imagery interact dynamically. Use oversized pull quotes, intentional full-bleed breaks, and varied section entries to create the distinct visual rhythm of a prestigious print publication, translated to the web.`
  },

  "paper-zine": {
    title: "Paper / Zine",
    md: `## 🎨 Paper / Zine
**Category:** Artistic & Experimental

**🧠 Summary:** A lo-fi, DIY aesthetic inspired by self-published zines, punk cut-and-paste pamphlets, and photocopied newsletters — celebrating imperfection, torn edges, and handcrafted analog rawness.

**✨ Feels Like:** Handmade, underground, personal, imperfect, intimate.

**📌 Key Characteristics:**
- Paper and photocopier textures applied globally to layouts
- Torn or rough-cut edge effects between sections
- Mixed media collage feel with hand-drawn elements
- Deliberately uneven, manually-placed typography (as if cut from a magazine)

**✅ Use Case:**
- Indie artist and musician platforms
- Independent creative publication websites
- Community-driven, grassroots cultural organizations

**🚫 When to Avoid:**
- Commercial SaaS or tech products
- Any platform requiring institutional trust (healthcare, finance)
- Highly structured, information-dense applications

**🧩 Works Well With:** Retro (70s/80s) palette, Collage Design elements, Brutalism (Raw) principles

**⚠️ Common Mistakes:**
- Relying on a single repeated stock texture rather than combining multiple textures organically
- Only making the background papery while everything else remains completely digital — the rawness must permeate all elements
- Forgetting legibility targets — even zines have readable headlines

**🎯 Design Notes (Practical Tips):**
- Use CSS \`mix-blend-mode: multiply\` on paper texture PNGs overlaid on white backgrounds for an instant organic look.
- Create "torn edge" page dividers by generating irregular SVG path shapes along section boundaries.
- Apply a typewriter or hand-stamped monospace font for body text, and an expressive display font for headlines.

**💻 Prompt (for vibe coding):**

Design a handcrafted Paper/Zine aesthetic web page. Overlay coarse paper and aged texture across all sections using blend modes. Replicate the cut-and-paste layout of self-published zines through deliberately uneven text positioning, torn SVG edge dividers between sections, and a raw, deeply personal, lo-fi typographic system.`
  },

  "collage-design": {
    title: "Collage Design",
    md: `## 🎨 Collage Design
**Category:** Artistic & Experimental

**🧠 Summary:** A visual strategy that assembles compositions from layered, mixed-source elements — photography, illustrations, type fragments, and textures — assembled as physical paper collages but realized in digital CSS and SVG.

**✨ Feels Like:** Layered, curatorial, artistic, eclectic, found-object.

**📌 Key Characteristics:**
- Elements from completely different visual sources layered together deliberately
- Images with harsh cutouts (no soft feathering) placed at varied rotations
- Cutout text fragments placed over photographs
- Mixed-scale items (enormous sticker next to tiny postage stamp)

**✅ Use Case:**
- Creative studio portfolios with a strong curatorial identity
- Fashion editorial campaigns
- Music and entertainment brand campaigns

**🚫 When to Avoid:**
- Straightforward product marketing landing pages
- Consumer SaaS with busy visual environments already
- Any context requiring strict, predictable information hierarchy

**🧩 Works Well With:** Maximalism, Paper / Zine, Asymmetrical Layout

**⚠️ Common Mistakes:**
- Using soft Photoshop masks to cut out images — harsh, flat mask edges are essential to the physical collage feel
- Evenly spacing and aligning all elements — deliberate slight rotations and overlaps are the core of the aesthetic
- Treating it like wallpaper (decorative background only) rather than building the entire UI from the collage components

**🎯 Design Notes (Practical Tips):**
- Rotate some elements by 2–5 degrees either way using \`transform: rotate()\` to suggest physical placement.
- Vary the rendering — some images should appear purely photographic, while others should be rendered as if they were halftone-printed.
- Use \`clip-path\` to create precise cutout shapes around images for the scissors-cut effect.

**💻 Prompt (for vibe coding):**

Create a digital Collage Design layout. Assemble the UI from mixed-source elements — photographs, text fragments, graphic shapes — layered together at varied scales and subtle rotations, mimicking a tactile, physical cut-and-paste assembly. Ensure elements overlap with hard, harsh edges rather than feathered masks.`
  },

  "abstract-design": {
    title: "Abstract Design",
    md: `## 🎨 Abstract Design
**Category:** Artistic & Experimental

**🧠 Summary:** A style that abandons representational imagery entirely in favor of non-objective forms — geometric shapes, fluid curves, and color relationships — to communicate mood, identity, and brand purely through formal visual language.

**✨ Feels Like:** Conceptual, sophisticated, ambiguous, high-art, structural.

**📌 Key Characteristics:**
- Non-representational shapes as primary visual elements
- Tension between geometric precision and organic fluidity
- Fine-tuned color theory driving the entire palette
- Typography floats in abstract compositional space

**✅ Use Case:**
- High-end branding and identity studios
- Abstract software product hero sections
- Cultural institutions (museums, art centers)

**🚫 When to Avoid:**
- E-commerce sites that must communicate product specifics
- Educational platforms requiring clear visual storytelling
- Applications where users need immediate, literal comprehension

**🧩 Works Well With:** Gradient Mesh, Asymmetrical Layout, Deconstructivism

**⚠️ Common Mistakes:**
- Creating shapes that accidentally look like something representational (a blob that looks like a country on a map) when aiming for pure abstraction
- Filling every corner with shapes, leaving no negative space for the abstract forms to breathe
- Choosing random colors rather than applying a deliberate color theory framework

**🎯 Design Notes (Practical Tips):**
- Ground your abstract elements in one clear visual metaphor even if abstract (e.g., kinetic movement, geological strata, or signal waves).
- Create visual rhythm by repeating abstracted shapes at varying scales across the composition.
- Use SVG filters like \`feTurbulence\` and \`feDisplacementMap\` to morph geometric shapes into organic abstractions dynamically.

**💻 Prompt (for vibe coding):**

Design an Abstract UI where non-representational geometric and organic shapes dominate the visual landscape. Let abstracted forms and color fields carry the compositional weight. Float the sparingly minimal text and interface elements atop this visual plane, letting the abstract arrangement itself convey the brand's character.`
  },

  "asymmetrical-layout": {
    title: "Asymmetrical Layout",
    md: `## 🎨 Asymmetrical Layout
**Category:** Artistic & Experimental

**🧠 Summary:** A compositional strategy that deliberately destroys centered or equal-weight layouts in favor of a controlled imbalance, creating tension, movement, and visual interest through unequal weighting of elements.

**✨ Feels Like:** Dynamic, tension-filled, modern, intellectually restless, arresting.

**📌 Key Characteristics:**
- Radically unequal column weights (e.g., 70/30 split)
- Deliberate visual tension between heavy and light areas
- Elements consciously crossing into adjacent layout zones
- Intentional breathing room on one side to heighten tension

**✅ Use Case:**
- Modern creative agency front pages
- Design and architecture studio portfolios
- Contemporary brand identity showcases

**🚫 When to Avoid:**
- Traditional corporate homepages expecting a highly conservative audience
- Accessibility-focused platforms (asymmetry can confuse predictable scanning)
- Catalogs with repeated, uniform grid items

**🧩 Works Well With:** Editorial Design, Typography-First layouts, Abstract or Deconstructivist elements

**⚠️ Common Mistakes:**
- Creating asymmetry only in one section and reverting to perfect center alignment everywhere else — the principle must be systematic
- Making the layout feel random rather than deliberately balanced around a visual fulcrum
- Breaking asymmetry on mobile by stacking everything to center

**🎯 Design Notes (Practical Tips):**
- Identify one "anchor" element (large image or type block) and build the remaining composition around its visual weight.
- Use \`position: sticky\` on an asymmetric sidebar while scrollable content occupies the opposite column.
- Use large whitespace asymmetrically — a massive margin on the right draws strong attention to the left.

**💻 Prompt (for vibe coding):**

Create an intentionally Asymmetrical Layout. Destroy equal-weight, centered composition in favor of a deliberate imbalance — one dramatically heavier column and one almost empty counterpart creating visual tension. Let elements from one zone transgress into adjacent zones. Ensure the imbalance creates energy and directional movement.`
  },

  "deconstructivism": {
    title: "Deconstructivism",
    md: `## 🎨 Deconstructivism
**Category:** Artistic & Experimental

**🧠 Summary:** A highly confrontational design philosophy that systematically dismantles and rebuilds conventional layout rules — fragmenting grids, distorting type, and dislocating UI components — to create productive visual disruption.

**✨ Feels Like:** Subversive, fractured, deconstructed, chaotic-yet-controlled, boundary-pushing.

**📌 Key Characteristics:**
- Broken, fragmented grid systems where alignment rules are systematically violated
- Overlapping and layered text at multiple axes and scales
- UI components deliberately positioned outside expected boundaries
- Distortion filters applied to typography and images

**✅ Use Case:**
- Avant-garde creative and digital art websites
- Experimental web art installations
- Bold fashion or conceptual creative campaigns

**🚫 When to Avoid:**
- E-commerce and any transactional platforms
- Applications requiring fast and consistent task completion
- Sites serving users with cognitive accessibility needs

**🧩 Works Well With:** Abstract Design, Brutalism (Raw), Glitch / Vaporwave aesthetics

**⚠️ Common Mistakes:**
- Being so deconstructive that basic navigation becomes impossible — intentional disruption must still allow users to find content
- Applying distortion completely randomly rather than consistently subverting one specific rule consistently (e.g., systematically breaking only the baseline)
- Duplicating a more random Brutalism style without the conceptual deliberateness required by Deconstructivism

**🎯 Design Notes (Practical Tips):**
- Use CSS 3D transforms (\`rotateZ\`, \`skewX\`) applied selectively to type to create an unstable feeling without losing legibility.
- Deliberately misalign grid items by a fixed, constantly applied amount rather than a chaotic random one.
- Apply SVG \`feDisplacementMap\` filters to intentionally warp specific images or containers.

**💻 Prompt (for vibe coding):**

Create a Deconstructivist web layout that systematically dismantles conventional design rules. Fragment the grid, rotate and distort typographic elements, and displace UI components deliberately beyond their expected boundaries. Ensure the deconstruction is purposeful and tightly controlled rather than random, with one specific visual rule being consistently and productively violated throughout.`

  },

  // ---- ORGANIC & NATURAL ----
  "liquid-organic": {
    title: "Liquid / Organic",
    md: `## 🎨 Liquid / Organic
**Category:** Organic & Natural

**🧠 Summary:** A flowing, fluid design language that replaces all rigid straight lines and sharp corners with smooth, continuously curved, blob-like organic shapes that mimic natural flowing materials like water or molten glass.

**✨ Feels Like:** Fluid, sensory, meditative, alive, continuously moving.

**📌 Key Characteristics:**
- SVG blob shapes used as section dividers, image masks, and background elements
- Borders and sections defined entirely by smooth, curved SVG paths
- Flowing wave animations separating content sections
- Rounded, bulbous containers that recall drops of liquid

**✅ Use Case:**
- Spa, wellness, and holistic beauty product brands
- Women's lifestyle, self-care, and health-focused platforms
- Artisanal, hand-crafted food and beverage brand sites

**🚫 When to Avoid:**
- Clinical, precise technical documentation
- Hard analytical tools and dashboards
- Swiss-influenced, rigorously structured grid layouts

**🧩 Works Well With:**
- Nature-Inspired color palettes
- Glassmorphism (applying to rounded containers)
- Parallax Design (flowing parallax blob animations)

**⚠️ Common Mistakes:**
- Using the same blob shape repeated identically, making the design feel templated rather than uniquely handcrafted
- Over-animating every blob simultaneously, causing intense visual chaos
- Choosing blob shapes that accidentally look unintentional or randomly generated (blobs must still feel artfully crafted)

**🎯 Design Notes (Practical Tips):**
- Use an SVG blob generator to create at least three or four distinct, unique organic shapes for use throughout the layout.
- Program blobs to slowly, gently morph between one shape and another using CSS \`clip-path\` animation on a smooth \`bezier\` curve.
- Intentionally vary the sizes of the blobs significantly — contrast a massive full-viewport blob with a tiny decorative accent blob.

**💻 Prompt (for vibe coding):**
Design a fully organic, Liquid/Organic layout that eliminates all hard edges. Use flowing, biomorphic SVG blob shapes as section backgrounds, image masks, and decorative elements. Gently animate several of the blobs in a continuous morphing loop. Create a palette from soft natural hues that reinforces the feeling of flowing, living material.`
  },
  "biomorphism": {
    title: "Biomorphism",
    md: `## 🎨 Biomorphism
**Category:** Organic & Natural

**🧠 Summary:** A design philosophy that directly borrows structural forms, patterns, and rhythms from biology — such as cellular patterns, spiral growth, wing or leaf structures — and applies them as the core visual and structural language of the UI.

**✨ Feels Like:** Scientific-yet-natural, alive, precise yet organic, growth-inspired.

**📌 Key Characteristics:**
- Direct visual reference to natural biological structures (honeycombs, spirals, cross-sections, cellular networks)
- Structural patterns repeating in fractal-like or naturally scaling rhythms
- Color palettes drawing strictly from natural biologically-occurring hues
- Typography set within organic-shaped containers

**✅ Use Case:**
- Biotechnology, life science, and pharmaceutical brand sites
- Eco and environmental sustainability organizations
- Nature-focused, science-meets-design creative projects

**🚫 When to Avoid:**
- Abstract, purely conceptual digital art with no natural reference
- High-technology AI companies not wanting natural world associations
- Budget-limited products, since the complex organic patterns require highly crafted assets

**🧩 Works Well With:**
- Liquid / Organic shaping
- Nature-Inspired palettes
- Soft UI quality

**⚠️ Common Mistakes:**
- Letting the biological pattern references become too literal and medical (biological textures can feel clinical and uncomfortable)
- Forcing perfect mathematical repetition of organic forms — nature has controlled variance and imperfection, not geometric precision
- Using too dark or too saturated colors when the natural biological world favors muted, pigmented-yet-natural hues

**🎯 Design Notes (Practical Tips):**
- Reference specific biological organisms for your visual system — for example, the hexagonal lattice of a dragonfly wing, or the Fibonacci spiral of a shell.
- Generate repeating SVG patterns from these biologically-sourced reference shapes to build a cohesive surface texture.
- Create section backgrounds using slowly shifting layered wave forms that mimic biological growth rings or interference patterns underwater.

**💻 Prompt (for vibe coding):**
Design a Biomorphic interface visually referencing a specific natural biological structure (such as cellular membranes, growth spirals, or branching neural networks). Build patterned background surfaces directly from these natural forms using SVG patterns. Apply a palette drawn strictly from the natural colors found in the referenced organism.
`
  },
  "soft-ui": {
    title: "Soft UI",
    md: `## 🎨 Soft UI
**Category:** Organic & Natural

**🧠 Summary:** A clean, accessible, visually calming design language that prioritizes soft edges, gentle pastel palettes, and low-stimulus visual environments to create interfaces that feel psychologically safe and effortlessly comfortable.

**✨ Feels Like:** Gentle, safe, restful, effortless, psychologically light.

**📌 Key Characteristics:**
- Very large, generous border radii on all containers and input fields
- Soft, pastel or heavily desaturated color palettes
- Gentle drop shadows with large spreads and low contrast to the background
- Rounded, approachable typography using low-weight geometric sans-serifs

**✅ Use Case:**
- Mental health, meditation, and mindfulness applications
- Sleep, wellness, and self-care platforms
- Journaling or habit-tracking apps targeting stress reduction

**🚫 When to Avoid:**
- High-performance trading or analytics dashboards
- Tech-forward AI tools requiring confident, precise aesthetics
- Content-heavy editorial publications

**🧩 Works Well With:**
- Neumorphism (selectively applied)
- Nature-Inspired color palettes
- Liquid / Organic shapes

**⚠️ Common Mistakes:**
- Making everything so soft and low-contrast that CTA buttons completely disappear visually
- Treating Soft UI and Neumorphism as interchangeable — Soft UI maintains clear contrast while Neumorphism specifically uses dual shadows
- Using Soft UI for an application type (like power tools or dashboards) where the softness communicates fragility rather than calm

**🎯 Design Notes (Practical Tips):**
- Define your palette using HSL with low saturation (10–30%) and high lightness (70–90%) for that characteristic soft, breathable feel.
- Use \`border-radius: 1rem\` or higher as a base-line rule across all interactive components.
- Keep micro-interactions slow and graceful — long easing durations (400–600ms) with gentle cubic-bezier curves.

**💻 Prompt (for vibe coding):**
Create a Soft UI interface emphasizing gentle, low-stimulation visual comfort. Apply extremely large, rounded border radii across all containers, form inputs, and buttons. Use a palette of muted, desaturated pastels and keep shadows broad, soft, and low contrast. Prioritize slow, cushioned micro-animations that feel physically light.
`
  },
  "nature-inspired": {
    title: "Nature-Inspired",
    md: `## 🎨 Nature-Inspired
**Category:** Organic & Natural

**🧠 Summary:** A grounded, textural design philosophy that directly bridges the gap between digital interfaces and the physical natural world through earthy color palettes, organic textures, natural photography, and sustainable visual messaging.

**✨ Feels Like:** Grounded, sustainable, warm, honest, rooted.

**📌 Key Characteristics:**
- Color palettes exclusively sourced from natural environments (forest greens, stone grays, bark browns, sky blues, ochre yellows)
- Use of real, organic, macro-scale photography (moss close-ups, stone surfaces, wood grain)
- Section backgrounds featuring translucent natural textures layered lightly
- Earthy, genuine, unpolished typographic choices (humanist sans-serif or organic serifs)

**✅ Use Case:**
- Sustainable and ethical fashion brands
- Organic food, farming, and agriculture brands
- Eco architecture, green technology, and environmental advocacy

**🚫 When to Avoid:**
- Clean, hard-edged digital product launches
- Strong dark-mode-first tech brands
- Futuristic, space-age technology aesthetics

**🧩 Works Well With:**
- Soft UI elements
- Biomorphism
- Liquid / Organic shapes

**⚠️ Common Mistakes:**
- Using photography that is too glossy and studio-lit, losing the natural, raw authenticity the style requires
- Choosing generic stock-photo nature images rather than authentic, specific, highly textured macro photography
- Applying a too-green color palette that looks more like a consumer "eco-badge" than a genuinely earthy brand

**🎯 Design Notes (Practical Tips):**
- Use a highly desaturated "stone" or "linen" off-white as your primary background tone rather than pure white.
- Overlay extremely subtle paper or rough canvas texture over background sections to break the completely clinical digital surface.
- Ensure typography uses naturalistic, humanist letter shapes rather than geometric forms — the subtle imperfection in letter construction reinforces the organic brand.

**💻 Prompt (for vibe coding):**
Design a deeply Nature-Inspired website rooted in earthy, natural colors (deep forest greens, warm bark browns, stone grays, unbleached linens). Apply subtle organic textures over background panels and use highly authentic, macro-level nature photography. Build the typographic system from humanist, slightly imperfect-feeling fonts that mirror natural forms.
`
  }
};

// ---- CATEGORY DATA ----
const categories = [
  {
    id: "clean-structural",
    title: "Clean & Structural",
    themeClass: "theme-clean-structural",
    styles: [
      { key: "minimalism", label: "Minimalism", icon: "◻" },
      { key: "bento-grid", label: "Bento Grid", icon: "⊞" },
      { key: "swiss", label: "Swiss / International", icon: "⊟" },
      { key: "flat-design", label: "Flat Design 2.0", icon: "▣" },
      { key: "material", label: "Material Design", icon: "◈" },
      { key: "card-based", label: "Card-Based", icon: "▦" },
      { key: "split-screen", label: "Split-Screen", icon: "◧" },
      { key: "grid-systems", label: "Grid Systems", icon: "▤" },
      { key: "typography-first", label: "Typography-First", icon: "Aa" }
    ]
  },
  {
    id: "depth-material",
    title: "Depth & Material",
    themeClass: "theme-depth-material",
    styles: [
      { key: "glassmorphism", label: "Glassmorphism", icon: "🪟" },
      { key: "dark-glassmorphism", label: "Dark Glassmorphism", icon: "🌌" },
      { key: "neumorphism", label: "Neumorphism", icon: "⚪" },
      { key: "claymorphism", label: "Claymorphism", icon: "🫧" },
      { key: "skeuomorphism", label: "Skeuomorphism", icon: "🎛️" },
      { key: "aurora-ui", label: "Aurora UI", icon: "✨" },
      { key: "gradient-design", label: "Gradient Design", icon: "🌈" },
      { key: "gradient-mesh", label: "Gradient Mesh", icon: "🕸️" },
      { key: "shadow-based-depth", label: "Shadow-based Depth", icon: "☁️" }
    ]
  },
  {
    id: "retro-nostalgic",
    title: "Retro & Nostalgic",
    themeClass: "theme-retro-nostalgic",
    styles: [
      { key: "neo-brutalism", label: "Neo-Brutalism", icon: "⬛" },
      { key: "brutalism", label: "Brutalism (Raw)", icon: "🏗️" },
      { key: "y2k-frutiger-aero", label: "Y2K / Frutiger Aero", icon: "🌐" },
      { key: "retro-70s-80s", label: "Retro (70s/80s)", icon: "📼" },
      { key: "pixel-8-bit", label: "Pixel Art / 8-Bit", icon: "👾" },
      { key: "vaporwave", label: "Vaporwave", icon: "🌴" },
      { key: "cyber-retro", label: "Cyber Retro", icon: "💻" }
    ]
  },
  {
    id: "artistic-experimental",
    title: "Artistic & Experimental",
    themeClass: "theme-artistic-experimental",
    styles: [
      { key: "maximalism", label: "Maximalism", icon: "🎭" },
      { key: "editorial-design", label: "Editorial Design", icon: "📰" },
      { key: "paper-zine", label: "Paper / Zine", icon: "✂️" },
      { key: "collage-design", label: "Collage Design", icon: "🧩" },
      { key: "abstract-design", label: "Abstract Design", icon: "🎨" },
      { key: "asymmetrical-layout", label: "Asymmetrical Layout", icon: "⚖️" },
      { key: "deconstructivism", label: "Deconstructivism", icon: "🏚️" }
    ]
  }
  ,
  {
    id: "organic-natural",
    title: "Organic & Natural Design Styles",
    themeClass: "theme-organic-natural",
    styles: [
      { key: "liquid-organic", label: "Liquid / Organic", icon: "💧" },
      { key: "biomorphism", label: "Biomorphism", icon: "🌿" },
      { key: "soft-ui", label: "Soft UI", icon: "☁️" },
      { key: "nature-inspired", label: "Nature-Inspired", icon: "🍃" }
    ]
  }
];

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
const styleGrid = document.getElementById('style-grid');

let currentCategoryIndex = 0;
let currentStyle = null;

// ---- Switch Category ----
function renderCategory(index) {
  const cat = categories[index];

  // Update Header
  document.getElementById('category-title-text').textContent = cat.title;

  // Update Global Theme
  document.body.className = cat.themeClass;

  // Rebuild buttons dynamically
  styleGrid.innerHTML = '';
  cat.styles.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'style-btn';
    btn.dataset.style = s.key;
    btn.innerHTML = `<span class="style-btn__icon">${s.icon}</span><span class="style-btn__label">${s.label}</span>`;
    btn.addEventListener('click', () => switchStyle(s.key));
    styleGrid.appendChild(btn);
  });

  // Switch to first style of this category
  switchStyle(cat.styles[0].key);
}

// ---- Switch Style ----
function switchStyle(styleKey) {
  if (styleKey === currentStyle) return;
  currentStyle = styleKey;

  // Update active button
  const buttons = document.querySelectorAll('.style-btn');
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
document.getElementById('nav-arrow-left').addEventListener('click', () => {
  currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
  renderCategory(currentCategoryIndex);
});
document.getElementById('nav-arrow-right').addEventListener('click', () => {
  currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
  renderCategory(currentCategoryIndex);
});

// ---- Initial Load ----
document.addEventListener('DOMContentLoaded', () => {
  previewBox.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  contentRendered.style.transition = 'opacity 0.3s ease';
  renderCategory(0);
});
