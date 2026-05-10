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
  },

  // ---- HIGH-TECH & FUTURE ----
  "cyberpunk": {
    title: "Cyberpunk",
    md: `## 🎨 Cyberpunk
**Category:** High-Tech & Future

**🧠 Summary:** A high-contrast, dystopian near-future aesthetic rooted in science fiction — combining neon chromatics against deep urban darkness, glitch corruption, rain-slicked street reflections, and machine-readable UI overlays.

**✨ Feels Like:** Edgy, ominous, high-voltage, subversive, nocturnal.

**📌 Key Characteristics:**
- Deep black or very dark urban backgrounds (almost no pure gray surface)
- Aggressive neon accent colors (hot pink, electric cyan, acid green, viral yellow)
- Glitch effects applied selectively to imagery and type
- UI structured as overlay information systems (HUDs, targeting reticles, scanlines)

**✅ Use Case:**
- AI and machine learning tool interfaces
- High-performance gaming peripherals and PC hardware
- Cybersecurity, net privacy, and hacker-culture brands

**🚫 When to Avoid:**
- Any context requiring institutional trust and conservatism
- Accessible, inclusive consumer platforms (neon on black fails WCAG contrast for body text)
- Warm, organic, natural or wellness brands

**🧩 Works Well With:**
- Dark Glassmorphism
- Sci-Fi HUD layout elements
- WebGL / 3D Interactive overlays

**⚠️ Common Mistakes:**
- Applying neon colors to entire background surfaces rather than using them as precision accent strokes
- Creating glitch effects that are so aggressive they permanently impair readability of core content
- Using shallow, surface-level cyberpunk signifiers (one neon line and a dark background) without committing to the full system

**🎯 Design Notes (Practical Tips):**
- Reserve your brightest neon color for one single interactive element (the primary CTA) so it fires like a laser against the dark environment.
- Use \`text-shadow\` with your neon accent to create authentic glow effects around critical type.
- Apply CSS glitch animations (using \`clip-path\` cut segments with offset positions) only on H1 headlines and hover states, not body text.

**💻 Prompt (for vibe coding):**
Design an intense Cyberpunk UI. Set an extremely dark, near-black background representing a high-contrast nocturnal urban environment. Use aggressive neon accent colors exclusively as precision highlights — glowing borders, active state indicators, and CTA elements. Apply selective CSS glitch animations to headlines and key imagery.
`
  },
  "spatial-3d-ui": {
    title: "Spatial / 3D UI",
    md: `## 🎨 Spatial / 3D UI
**Category:** High-Tech & Future

**🧠 Summary:** A forward-leaning UI paradigm inspired by augmented and virtual reality environments, where the interface is architecturally layered across a three-dimensional space rather than existing on a flat 2D plane.

**✨ Feels Like:** Immersive, weightless, spatially aware, architectural, volumetric.

**📌 Key Characteristics:**
- CSS or WebGL 3D transforms establishing distinct Z-axis layers between panels
- Elements positioned within a perceived three-dimensional volume
- Floating, perspective-shifted cards and UI panels
- Subtle motion parallax driven by mouse movement to reinforce spatial depth

**✅ Use Case:**
- Extended Reality (AR/VR/XR) product showcases
- Immersive 3D game engine or metaverse platform introductions
- Highly premium spatial computing consumer launches (Apple Vision Pro style)

**🚫 When to Avoid:**
- Standard content-browsing websites where depth serves no functional purpose
- Mobile-primary applications (3D transforms perform poorly on lower-end hardware)
- Platforms requiring high accessibility (3D motion can trigger vestibular issues)

**🧩 Works Well With:**
- Glass + 3D Hybrid
- WebGL / 3D Interactive
- Holographic UI elements

**⚠️ Common Mistakes:**
- Using CSS \`perspective\` and \`translateZ\` without establishing a proper, coherent 3D vanishing point
- Making every layer float so aggressively that the designer loses the sense of which layer is "ground" and which is elevated
- Creating a strong spatial experience on desktop that completely collapses into a flat, broken layout on mobile

**🎯 Design Notes (Practical Tips):**
- Establish one clear "ground plane" z=0 and carefully place all floating layers above it with increasing \`translateZ\` values.
- Set a very long \`perspective\` value (1000px–2000px) for a subtle, architectural depth rather than a cartoony fish-eye warp.
- React to mouse position via JS to shift each layer's \`transform\` slightly — faster for closer layers, slower for far layers — creating convincing parallax.

**💻 Prompt (for vibe coding):**
Design a Spatial/3D UI where the interface is architecturally distributed across multiple distinct Z-axis layers using CSS 3D transforms and perspective. Establish a clear "ground" plane and progressively floating panels above it. Implement a mouse-position-driven parallax effect that shifts each layer at a different speed to reinforce the illusion of genuine three-dimensional space.
`
  },
  "glass-3d-hybrid": {
    title: "Glass + 3D Hybrid",
    md: `## 🎨 Glass + 3D Hybrid
**Category:** High-Tech & Future

**🧠 Summary:** A sophisticated fusion that combines the translucency and blur of Glassmorphism with the architectural depth of spatial 3D, floating frosted glass panels within a genuinely perceived three-dimensional volume.

**✨ Feels Like:** Premium, futuristic, ethereal-yet-structured, technically luxurious.

**📌 Key Characteristics:**
- Frosted glass panels positioned at distinct 3D depths within a volumetric scene
- Background diffused gradients or Aurora effects visible and distorted through the glass layers
- Hard-shadow casting from 3D panels onto surfaces behind them
- Subtle CSS 3D perspective on the overall composition established by mouse parallax

**✅ Use Case:**
- Flagship product launches for premium consumer hardware
- Immersive keynote-style digital brand reveals
- Portfolio showcases for creative technology and spatial computing

**🚫 When to Avoid:**
- Any content-heavy reading or complex dashboard application
- Performance-sensitive embedded or low-powered device experiences
- Minimalist, text-driven design systems

**🧩 Works Well With:**
- Spatial / 3D UI layout
- Aurora UI backgrounds
- Holographic UI highlights

**⚠️ Common Mistakes:**
- Forgetting that background blur (\`backdrop-filter: blur\`) interacts with 3D CSS transforms — careful layering order in the DOM is required
- Producing glass panels that are too opaque, defeating the transparency effect's purpose in a 3D scene
- Applying the hybrid without a sufficiently rich, animated background to peer through the glass

**🎯 Design Notes (Practical Tips):**
- Structure your HTML so that the full-viewport animated background gradient exists at the absolute base layer, with all glass panels above it in the stacking context — never set \`transform-style: preserve-3d\` on the blur container or it will break.
- Vary the glass opacity across panels to create depth (nearer panels slightly more opaque; more distant panels practically clear).
- Cast a precise hard-edged CSS box shadow below each glass panel onto the ground plane to physically anchor them in the 3D space.

**💻 Prompt (for vibe coding):**
Create a Glass + 3D Hybrid interface that positions multiple, variably transparent frosted-glass panels at distinct depths within a CSS 3D perspective scene. Animate a rich Aurora gradient background that shimmers through the translucent layers. Apply mouse-position-reactive parallax to the glass panels at varying rates to embed a genuine sense of three-dimensional spatial depth.
`
  },
  "ai-generative-ui": {
    title: "AI / Generative UI",
    md: `## 🎨 AI / Generative UI
**Category:** High-Tech & Future

**🧠 Summary:** An interface paradigm where the layout, typography, and visual elements themselves appear to be dynamically generated, emerging, or adapting in real time — visually communicating machine intelligence and generative computation.

**✨ Feels Like:** Intelligent, alive, self-generating, adaptive, computational.

**📌 Key Characteristics:**
- Animated typing and text-streaming visual metaphors
- Procedurally generated visual noise, particles, or dynamic fields in backgrounds
- UI elements that appear to "render" or "compile" into view on load
- Layout or content states that visually shift or rearrange in response to interaction

**✅ Use Case:**
- AI and large language model product frontends
- Generative art and creative AI tools
- Research-lab and AI model showcase presentations

**🚫 When to Avoid:**
- Platforms requiring the UX to be fast and decisive (the "loading" metaphor can feel slow)
- Traditional, conservative enterprise SaaS
- Simple informational sites where generative metaphors communicate no meaning

**🧩 Works Well With:**
- Cyberpunk aesthetic vocabulary
- Data-Driven Design metrics
- Spatial / 3D depth concepts

**⚠️ Common Mistakes:**
- Creating the "generative" feel purely through a typing animation cursor while every other UI element is completely static
- Making the generative animations so performance-heavy (canvas particles) that they tank frame rate on average hardware
- Using randomness without constraints — effective generative UI uses seeded, controlled procedural outputs, not truly random noise

**🎯 Design Notes (Practical Tips):**
- Implement a shader-based or canvas-based animated noise field as the background (e.g., Perlin noise or a signed-distance field) rendering at 30fps or lower for acceptable performance.
- Animate core text content into view using a typewriter effect but with a variable, human-irregular timing rather than fixed intervals.
- Build a subtle particle system using \`<canvas>\` where particles connect when within a distance threshold, mimicking a neural network topology.

**💻 Prompt (for vibe coding):**
Design an AI/Generative UI that visually communicates machine intelligence. Animate the page loading process as a compilation/rendering sequence. Use a canvas-based generative particle network or Perlin noise field as a living background. Apply text-streaming typewriter animations with variable timing and implement at least one layout element that dynamically adapts to user input in real-time.
`
  },
  "data-driven-design": {
    title: "Data-Driven Design",
    md: `## 🎨 Data-Driven Design
**Category:** High-Tech & Future

**🧠 Summary:** A functional-aesthetic where data visualization, live metrics, and dense numerical information are not merely displayed but are architecturally used as the primary visual elements of the entire interface design.

**✨ Feels Like:** Analytical, precise, trustworthy authority, information-rich, systems-oriented.

**📌 Key Characteristics:**
- Charts, graphs, and numerical metrics displayed as primary content blocks
- Dense, information-rich typography (small, precise, high-contrast numbers)
- Clear grid systems organizing disparate data types
- Animated live data transitions reflecting real-time changes

**✅ Use Case:**
- Fintech investment portfolios and trading dashboards
- Business intelligence and data analytics platforms
- System monitoring and DevOps performance dashboards

**🚫 When to Avoid:**
- Consumer lifestyle or entertainment products
- Long-form narrative or editorial content
- Artistic or heavily visual brand experiences

**🧩 Works Well With:**
- Dashboard UI components
- Grid Systems structure
- Dark mode (reduces eye strain for extended data viewing)

**⚠️ Common Mistakes:**
- Using pie charts for complex multi-variable data (they only work for 2–4 segments maximum)
- Designing charts that look visually beautiful but fail to communicate the actual insight efficiently
- Overcrowding the dashboard with every single available metric rather than surfacing only actionable signals

**🎯 Design Notes (Practical Tips):**
- Establish a strict visual hierarchy using color exclusively for data encoding (status: red/yellow/green) and never for decoration.
- Use small-multiples — identically structured mini charts repeated at varied scales — to enable rapid cross-comparison scanning.
- Animate data transitions with a 200–300ms smooth tween, so users can track state changes as they occur in real time.

**💻 Prompt (for vibe coding):**
Design a Data-Driven interface where real-time and statistical data visualizations form the primary visual system. Build a grid of metric cards, charts, and KPI displays with a shared, strict visual language. Animate live data updates with smooth transitions. Use color exclusively to encode data states (positive/negative, active/inactive) rather than for decoration.
`
  },
  "holographic-ui": {
    title: "Holographic UI",
    md: `## 🎨 Holographic UI
**Category:** High-Tech & Future

**🧠 Summary:** A speculative, future-forward design aesthetic referencing the holographic displays of science-fiction — using prismatic color breaks, translucent layering, iridescent surfaces, and volumetric glow effects to communicate a post-physical interface.

**✨ Feels Like:** Futuristic, speculative, magical-technology, ethereal, luminous.

**📌 Key Characteristics:**
- Iridescent, rainbow-shifting gradient surfaces (spectra changing based on angle or scroll)
- Near-invisible, extremely translucent structural elements
- Glowing, sharp blue-white or multicolored linework on dark surfaces
- Typography rendered in a luminous, slightly tinted semi-transparent white

**✅ Use Case:**
- Concept showcases and vision statement pages for future technology companies
- Spatial computing and augmented reality product marketing
- Premium luxury fashion with a futuristic aesthetic

**🚫 When to Avoid:**
- Consumer products requiring immediate, reliable comprehension
- Any form of dense data dashboard or reporting tool
- Traditional e-commerce or content publication

**🧩 Works Well With:**
- Spatial / 3D UI structure
- Glass + 3D Hybrid translucency
- Aurora UI backgrounds

**⚠️ Common Mistakes:**
- Simulating holographic effects purely by adding rainbow gradients to a flat layout, without any structural layering or luminance
- Failing to maintain high legibility of core typography against iridescent and glowing backgrounds
- Using a single fixed rainbow gradient instead of viewport-angle-reactive iridescence

**🎯 Design Notes (Practical Tips):**
- Achieve an iridescent surface effect using CSS \`conic-gradient\` referencing a CSS custom property that shifts with mouse-position via JS.
- Overlay a very subtle holographic foil effect (a slowly rotating prismatic gradient at very low opacity) over key surfaces using \`mix-blend-mode: color-dodge\`.
- Build your structural linework out of extremely thin (0.5px–1px), luminous CSS borders in near-white with a strong glowing \`box-shadow\` behind them.

**💻 Prompt (for vibe coding):**
Create a Holographic UI for a speculative future technology concept. Generate iridescent, prismatic surfaces whose color gradients shift subtly with mouse position or scroll. Build the UI structure from razor-thin, glowing luminous lines. Apply volumetric glow effects to key features. Maintain near-total translucency across panels, revealing rich background depth through all interface layers.
`
  },
  "sci-fi-hud": {
    title: "Sci-Fi HUD",
    md: `## 🎨 Sci-Fi HUD
**Category:** High-Tech & Future

**🧠 Summary:** A mission-critical, heads-up display interface inspired by cockpit instruments, military targeting systems, and movie science fiction interfaces — designing the entire UI as an operational overlay system of concentric rings, reticles, scan lines and bracketed data readouts.

**✨ Feels Like:** Military-precision, cinematic, high-stakes, systems-operational, authoritative.

**📌 Key Characteristics:**
- Circular, arc-based, and angular geometric chrome UI elements
- Monochrome or dual-tone palettes (typically electric blue or amber on black)
- Data readouts displayed with rapidly changing numeric counters
- Radar and sonar display metaphors (circular sweeping elements)

**✅ Use Case:**
- Flight simulation, aerospace, or military training software
- Immersive experience websites for action films or video game worlds
- Research and command-center prototype visualizations

**🚫 When to Avoid:**
- Standard commercial or consumer content sites
- Platforms requiring calm, low-stimulus environments
- Any site where the creative direction contradicts military-tech visual language

**🧩 Works Well With:**
- Data-Driven Design (for actual data)
- Cyberpunk aesthetics
- WebGL / 3D Interactive renders

**⚠️ Common Mistakes:**
- Building the HUD aesthetic without a functional purpose — every HUD ring and bracket should display actual data or provide real interactive value
- Using rounded, soft corners anywhere (HUDs exclusively use sharp, angular 45-degree cuts and straight geometries)
- Making the underlying content completely unreadable because the HUD chrome overwhelmed it

**🎯 Design Notes (Practical Tips):**
- Use CSS \`clip-path: polygon()\` to create sharp chevron and bracket shapes as HUD frame elements.
- Build radar sweep animations with a conic-gradient rotating behind a semi-transparent surface.
- Apply a subtle global scanline overlay (horizontally repeating 2px linear-gradient at low opacity) to the entire viewport to simulate a CRT or holographic projection display.

**💻 Prompt (for vibe coding):**
Design a functional Sci-Fi HUD interface. Structure every UI element as part of a coherent overlay system: build angular bracket frames, arc and ring data indicators, circular radar sweeps, and sharp geometric panel dividers. Use an electric blue or amber on black restricted palette. Apply a global scanline overlay and animate numeric readouts to continuously update, simulating a live operational system.
`
  },
  "scrollytelling": {
    title: "Scrollytelling",
    md: `## 🎨 Scrollytelling
**Category:** Interactive & Motion

**🧠 Summary:** A narrative design technique where content unfolds dynamically as the user scrolls, using fixed positioning, timed transitions, and sequential visual triggers to tell a cinematic story.

**✨ Feels Like:** Narrative, cinematic, immersive, guided, progressive.

**📌 Key Characteristics:**
- Content "locks" into place while animations occur in the background or foreground
- Sequential appearance of text or imagery tied directly to scroll progress
- Smooth, orchestrated transitions between distinct story "chapters"
- High emphasis on visual pacing and flow

**✅ Use Case:**
- Product "How it works" or "The Story" pages
- Interactive journalism and long-form features
- Brand heritage and timeline showcases

**🚫 When to Avoid:**
- Fast-access information portals
- High-frequency utility apps or dashboards
- Users looking for a "quick scan" experience

**🧩 Works Well With:** Parallax Design, Motion UI, Liquid / Organic shapes

**🎯 Design Notes (Practical Tips):**
- Ensure that despite the animations, the "Enter" and "Exit" points of content are clear.
- Provide a progress indicator so users know how far they are in the story.
- Keep mobile performance in mind—heavy scroll-jacking can be frustrating on touch screens.

**💻 Prompt (for vibe coding):**
Design a Scrollytelling experience where content is presented in distinct, full-viewport layers. As the user scrolls, use fixed positioning for the background while text sections fade and slide into view sequentially. Ensure smooth, timed transitions that feel cinematic and narrative-driven.`
  },
  "parallax-design": {
    title: "Parallax Design",
    md: `## 🎨 Parallax Design
**Category:** Interactive & Motion

**🧠 Summary:** A visual effect where background and foreground elements move at different speeds during scroll or mouse movement, creating an illusion of genuine three-dimensional depth and immersion.

**✨ Feels Like:** Deep, layered, immersive, high-end, atmospheric.

**📌 Key Characteristics:**
- Multiple independent layers moving at varied velocities
- Foreground elements typically move faster than background elements
- Creates a "window" effect into a deeper virtual space
- Often used to add life to static hero sections

**✅ Use Case:**
- Creative agency landing pages
- Immersive gaming and entertainment sites
- High-impact landing page hero sections

**🚫 When to Avoid:**
- Text-heavy pages where motion distracts from reading
- Performance-critical applications
- Users prone to motion sickness (ensure "prefers-reduced-motion" support)

**🧩 Works Well With:** Spatial / 3D UI, Aurora UI, Glassmorphism

**🎯 Design Notes (Practical Tips):**
- Subtle parallax is often more effective than aggressive movement.
- Use \`will-change: transform\` to ensure smooth rendering.
- Test across devices to ensure the depth effect doesn't break the layout on smaller screens.

**💻 Prompt (for vibe coding):**
Implement a Parallax Design effect across multiple layers. Assign different scroll/movement speeds to background, midground, and foreground elements. Ensure the movement feels fluid and natural, creating a strong sense of spatial depth without compromising content readability.`
  },
  "microinteractions": {
    title: "Microinteractions",
    md: `## 🎨 Microinteractions
**Category:** Interactive & Motion

**🧠 Summary:** Small, functional animations that provide immediate feedback to user actions—such as a button "clicking" down, an icon morphing, or a subtle vibration—making the UI feel tactile and responsive.

**✨ Feels Like:** Tactile, responsive, polished, satisfying, alive.

**📌 Key Characteristics:**
- Triggers on hover, click, focus, or state change
- Brief, subtle, and highly purposeful (usually < 300ms)
- Provides clear status communication or feedback
- Often includes physics-based easing (springs/bounces)

**✅ Use Case:**
- Form validation and submission feedback
- Navigation menus and interactive buttons
- Social engagement features (likes, shares)

**🚫 When to Avoid:**
- Purely decorative animations that provide no functional feedback
- Contexts where speed is prioritized over "flavor"
- Overly repetitive animations that become annoying over time

**🧩 Works Well With:** Soft UI, Flat Design 2.0, Neumorphism

**🎯 Design Notes (Practical Tips):**
- Use spring physics for a more "physical" and less "robotic" feel.
- Ensure the interaction completes fast enough that it doesn't slow down the user's workflow.
- Focus on the "feedback" loop: Trigger -> Action -> Feedback -> Result.

**💻 Prompt (for vibe coding):**
Create a set of polished Microinteractions for primary UI elements. Implement reactive hover states where buttons slightly expand and glow, and active states that provide a satisfying "press" effect. Ensure icons morph or animate subtly when interacted with to provide clear functional feedback.`
  },
  "horizontal-scroll": {
    title: "Horizontal Scroll",
    md: `## 🎨 Horizontal Scroll
**Category:** Interactive & Motion

**🧠 Summary:** A layout paradigm that breaks the vertical scrolling convention by moving content sideways, often used for carousels, galleries, or unconventional narrative flows.

**✨ Feels Like:** Unconventional, gallery-like, rhythmic, modern.

**📌 Key Characteristics:**
- Content overflows and scrolls on the X-axis
- Often includes snap-points for distinct sections or cards
- Frequently paired with a visual progress bar or "side-scroll" indicator
- Useful for comparing items side-by-side

**✅ Use Case:**
- Portfolio project galleries
- Product carousels and feature showcases
- Non-linear storytelling or "slideshow" websites

**🚫 When to Avoid:**
- Standard text-heavy articles (hard to read horizontally)
- Navigation-heavy dashboards
- Users expecting traditional vertical flow

**🧩 Works Well With:** Bento Grid, Card-Based Design, Minimalism

**🎯 Design Notes (Practical Tips):**
- Clearly indicate that the page scrolls horizontally (e.g., "Scroll sideways" text or an arrow).
- Implement scroll-snapping for a more controlled and satisfying user experience.
- Ensure the mouse wheel or trackpad translates vertical scroll to horizontal if needed.

**💻 Prompt (for vibe coding):**
Design a Horizontal Scroll layout for a series of content cards. Use CSS scroll-snap to ensure cards lock into place as the user moves sideways. Include a subtle horizontal progress indicator and clear visual cues that the content continues to the right.`
  },
  "webgl-3d-interactive": {
    title: "WebGL / 3D Interactive",
    md: `## 🎨 WebGL / 3D Interactive
**Category:** Interactive & Motion

**🧠 Summary:** The integration of hardware-accelerated 3D graphics directly into the browser, allowing for complex geometries, lighting, and textures that respond dynamically to user input.

**✨ Feels Like:** Immersive, high-performance, cutting-edge, magical.

**📌 Key Characteristics:**
- Genuine 3D depth and perspective (not just CSS transforms)
- Dynamic lighting, shadows, and material reflections
- Interactive 3D objects that the user can rotate or manipulate
- Often uses Three.js or similar libraries for rendering

**✅ Use Case:**
- Product configurators (cars, watches, furniture)
- High-end creative experimental sites
- Interactive educational models and visualizations

**🚫 When to Avoid:**
- Information-first sites where content is priority #1
- Low-bandwidth or low-performance device targets
- Simple landing pages where 3D adds unnecessary weight

**🧩 Works Well With:** Spatial / 3D UI, Glass + 3D Hybrid, Sci-Fi HUD

**🎯 Design Notes (Practical Tips):**
- Optimize textures and geometries to maintain a high frame rate (60fps).
- Provide a fallback (static image) for browsers or devices that don't support WebGL.
- Use 3D as a central focus or a background atmospheric element, not a distraction from text.

**💻 Prompt (for vibe coding):**
Implement a WebGL-inspired interactive section. Create the illusion of a floating 3D object that subtly rotates and reacts to mouse movement. Apply dynamic lighting effects and materials that shimmer as the perspective shifts, providing an immersive, high-tech interactive experience.`
  },
  "motion-ui": {
    title: "Motion UI",
    md: `## 🎨 Motion UI
**Category:** Interactive & Motion

**🧠 Summary:** A design philosophy that treats movement as a core component of the user interface, using fluid transitions and animations to guide focus, explain relationships, and delight the user.

**✨ Feels Like:** Fluid, intuitive, elegant, energetic, seamless.

**📌 Key Characteristics:**
- Meaningful transitions between pages or states
- Staggered entrance animations for list items
- Elements that "stretch" or "squash" to imply physical weight
- Motion used to reinforce the spatial mental model of the app

**✅ Use Case:**
- High-end mobile apps and modern web platforms
- Onboarding flows and multi-step processes
- Dynamic dashboards and data visualizations

**🚫 When to Avoid:**
- Overly cluttered pages where too many things move at once
- Accessibility-first sites where motion can be distracting or nauseating
- Purely decorative "animation for the sake of animation"

**🧩 Works Well With:** Liquid / Organic, Aurora UI, Microinteractions

**🎯 Design Notes (Practical Tips):**
- Use a consistent motion language (same easing, same duration) across the whole app.
- Follow the "Principles of Animation" (timing, staging, exaggeration) adapted for UI.
- Ensure animations can be skipped or are fast enough to not hinder power users.

**💻 Prompt (for vibe coding):**
Apply a comprehensive Motion UI system to the layout. Ensure all elements enter the screen with staggered, fluid animations. Use smooth transitions between different UI states and implement "squash and stretch" physics on interactive components to give them a sense of life and physical presence.`
  },
  "hover-driven-ui": {
    title: "Hover-driven UI",
    md: `## 🎨 Hover-driven UI
**Category:** Interactive & Motion

**🧠 Summary:** An interface designed specifically for desktop interaction, where content is revealed, highlighted, or transformed primarily through mouse-over actions, creating a "discovery-based" user experience.

**✨ Feels Like:** Playful, discovery-led, responsive, elegant, interactive.

**📌 Key Characteristics:**
- Hidden content revealed only on hover
- Dynamic changes in color, size, or depth when the mouse enters an area
- Custom cursors or "magnetic" elements that follow the mouse
- High emphasis on the "resting" vs "active" state of components

**✅ Use Case:**
- Creative portfolios and digital experiments
- Desktop-first premium product showcases
- Interactive maps and detailed infographics

**🚫 When to Avoid:**
- Mobile-primary websites (hover doesn't exist on touch screens)
- Critical navigation elements that should always be visible
- Users with motor impairments who may struggle with precise hovering

**🧩 Works Well With:** Typography-First, Minimalism, Glassmorphism

**🎯 Design Notes (Practical Tips):**
- Always provide a clear visual cue that an element *is* interactive (e.g., cursor change or subtle glow).
- Ensure that for mobile users, the "hover" state is either always visible or triggered by a tap.
- Keep hover transitions smooth and predictable to avoid a "jittery" feel.

**💻 Prompt (for vibe coding):**
Design a Hover-driven UI where the primary content interaction happens on mouse-over. Implement cards that expand and reveal additional information when hovered, and use a magnetic cursor effect or animated highlights to guide the user's attention. Ensure all transitions are fluid and encourage exploration.`
  },
  "dashboard-ui": {
    title: "Dashboard UI",
    md: `## 🎨 Dashboard UI
**Category:** Product & UX-Centered

**🧠 Summary:** A realistic, data-dense interface designed for administrative tasks and complex system management — prioritizing clear hierarchy, efficient space utilization, and consistent component patterns found in modern SaaS tools.

**✨ Feels Like:** Professional, organized, authoritative, efficient, reliable.

**📌 Key Characteristics:**
- Sidebar or top-nav based navigation structure
- KPI "Value" cards with sparklines or trend indicators
- Data tables with robust sorting and filtering affordages
- Consistent grid-based layout (often 12-column or fluid)

**✅ Use Case:**
- Enterprise Resource Planning (ERP) systems
- Marketing analytics and reporting tools
- Content management systems and internal ops tools

**🚫 When to Avoid:**
- Simple landing pages with minimal content
- High-emotion, artistic, or narrative-driven experiences
- Mobile-only platforms where data density is a liability

**🧩 Works Well With:** Data-Driven Design, Bento Grid, Minimalism

**🎯 Design Notes (Practical Tips):**
- Use a neutral, desaturated color palette to allow data visualizations to stand out.
- Maintain consistent spacing (padding/margins) across all cards to create a "stable" feeling.
- Implement clear "Empty States" for when data has not yet been populated.

**💻 Prompt (for vibe coding):**
Design a professional SaaS dashboard interface. Implement a persistent sidebar, a series of KPI cards displaying numerical data and trend indicators, and a clean data table. Use a high-density but readable layout with a desaturated blue/gray professional palette. Focus on realistic component sizing and consistent spacing.`
  },
  "mobile-first": {
    title: "Mobile-First",
    md: `## 🎨 Mobile-First
**Category:** Product & UX-Centered

**🧠 Summary:** A design philosophy that prioritizes the mobile user experience during the creation process, ensuring that core functionality is optimized for touch interaction, limited screen real estate, and varied connection speeds before scaling up to desktop.

**✨ Feels Like:** Compact, focused, thumb-friendly, fast, essential.

**📌 Key Characteristics:**
- Large, easily tappable interaction targets (min 44x44px)
- Linear, vertical content flow optimized for scrolling
- Hidden or collapsed secondary navigation (hamburger or bottom-bar)
- High performance and optimized asset delivery

**✅ Use Case:**
- Social media and messaging applications
- E-commerce and food delivery services
- Any product where >60% of traffic originates from mobile

**🚫 When to Avoid:**
- Complex B2B desktop-only software
- Deep architectural drafting or coding environments
- Platforms requiring massive multi-window data comparison

**🧩 Works Well With:** Minimalism, Flat Design 2.0, Human-Centered

**🎯 Design Notes (Practical Tips):**
- Design for "The Thumb Zone"—place primary actions within easy reach of a single hand.
- Use progressive disclosure to keep the initial view uncluttered.
- Ensure all images and icons have alt text for screen readers, as mobile users often use accessibility features.

**💻 Prompt (for vibe coding):**
Create a Mobile-First layout for a content-heavy application. Prioritize a single-column flow with large, touch-friendly cards. Implement a bottom navigation bar for primary actions and ensure all typography is legible at small sizes. Focus on essential functionality and clean vertical rhythm.`
  },
  "accessibility-first": {
    title: "Accessibility-First",
    md: `## 🎨 Accessibility-First
**Category:** Product & UX-Centered

**🧠 Summary:** A design approach that considers users of all abilities from the start, ensuring the interface is perceivable, operable, understandable, and robust (POUR), resulting in a better experience for everyone, regardless of impairment.

**✨ Feels Like:** Clear, inclusive, usable, thoughtful, high-contrast.

**📌 Key Characteristics:**
- High color contrast ratios (WCAG AAA standards)
- Explicit focus states for keyboard navigation
- Large, legible font sizes and clear typeface choices
- Semantic HTML structure and comprehensive ARIA labeling

**✅ Use Case:**
- Government and public service websites
- Educational platforms and digital libraries
- Global products with a highly diverse user base

**🚫 When to Avoid:**
- *Never* truly avoid, but strictly aesthetic "art-first" experiments may find it challenging.
- Contexts where low-contrast, atmospheric visuals are the primary artistic goal (though a toggle should exist).

**🧩 Works Well With:** Swiss Style, Minimalism, Clean & Structural

**🎯 Design Notes (Practical Tips):**
- Don't rely solely on color to communicate information (use icons or text labels).
- Ensure the site is fully navigable using only the 'Tab' key.
- Test with screen readers (like VoiceOver or NVDA) early in the design process.

**💻 Prompt (for vibe coding):**
Design an Accessibility-First interface with high contrast and clear visual hierarchy. Use a font size of at least 18px for body text and ensure all interactive elements have highly visible focus indicators. Prioritize semantic structure and inclusive UX patterns that work seamlessly for screen reader and keyboard-only users.`
  },
  "human-centered": {
    title: "Human-Centered",
    md: `## 🎨 Human-Centered
**Category:** Product & UX-Centered

**🧠 Summary:** A process that starts with the people you’re designing for and ends with new solutions that are tailor-made to suit their needs—focusing on clarity, empathy, and intuitive flow to reduce cognitive load.

**✨ Feels Like:** Natural, intuitive, empathetic, calm, supportive.

**📌 Key Characteristics:**
- Visual language that mirrors real-world mental models
- Descriptive, jargon-free copy and instructions
- Forgiving error states and clear paths to recovery
- Layouts that follow natural eye-scanning patterns (F-pattern, Z-pattern)

**✅ Use Case:**
- Healthcare and wellness applications
- Financial services and personal banking
- Complex onboarding flows for new technology

**🚫 When to Avoid:**
- Specialist tools where "speed-to-action" for experts overrides "ease-of-use"
- Experimental artistic sites where "confusion" or "discovery" is the intended vibe

**🧩 Works Well With:** Organic / Natural, Soft UI, Minimalism

**🎯 Design Notes (Practical Tips):**
- Use familiar icons and metaphors (e.g., a magnifying glass for search).
- Provide feedback for every action so the user never feels lost.
- Conduct user testing at every stage to validate your assumptions.

**💻 Prompt (for vibe coding):**
Implement a Human-Centered UI that prioritizes clarity and empathy. Use generous whitespace to reduce cognitive load, and include helpful micro-copy to guide the user. Ensure the layout is intuitive and follows common mental models for navigation and task completion.`
  },
  "form-centric-design": {
    title: "Form-Centric Design",
    md: `## 🎨 Form-Centric Design
**Category:** Product & UX-Centered

**🧠 Summary:** A design focus on the most critical interaction point of many products: data entry. It prioritizes the layout, validation, and flow of inputs to ensure high completion rates and a frictionless "conversational" experience.

**✨ Feels Like:** Precise, helpful, frictionless, logical, productive.

**📌 Key Characteristics:**
- Clear, top-aligned labels and accessible input fields
- Real-time inline validation and helpful error messaging
- Logical grouping of fields (e.g., Personal Info vs. Payment)
- Minimalist aesthetic to keep the user focused on the task

**✅ Use Case:**
- SaaS onboarding and registration flows
- Checkout processes and payment forms
- Survey tools and data collection platforms

**🚫 When to Avoid:**
- Content-only blogs or news sites
- Visual portfolios and galleries
- Immersive gaming or entertainment experiences

**🧩 Works Well With:** Minimalism, Clean & Structural, Flat Design 2.0

**🎯 Design Notes (Practical Tips):**
- Avoid using placeholders as labels—they disappear once the user starts typing.
- Use "Single Column" layouts for forms to make them easier to scan.
- Break long forms into multi-step "wizards" to prevent overwhelm.

**💻 Prompt (for vibe coding):**
Design a polished, Form-Centric onboarding experience. Create a multi-step flow with clear progress indicators, beautifully styled inputs, and real-time validation feedback. Focus on reducing friction through logical field grouping and a minimalist, focused aesthetic.`
  },
  "conversion-focused": {
    title: "Conversion-Focused",
    md: `## 🎨 Conversion-Focused
**Category:** Product & UX-Centered

**🧠 Summary:** A design strategy specifically engineered to drive a particular user action—such as a signup, purchase, or download—using visual hierarchy, social proof, and clear calls-to-action (CTAs).

**✨ Feels Like:** Persuasive, direct, trustworthy, high-impact, results-driven.

**📌 Key Characteristics:**
- Highly prominent, high-contrast primary CTA buttons
- Use of social proof (testimonials, logos, ratings)
- "Benefit-first" headline and value proposition
- Reduced "exit points" (minimal distractions from the main goal)

**✅ Use Case:**
- SaaS landing pages and pricing tables
- E-commerce product pages
- Marketing campaigns and lead-capture funnels

**🚫 When to Avoid:**
- Purely informational or educational resources
- Internal tools and dashboards (where "conversion" isn't relevant)
- Artistic explorations where "selling" isn't the goal

**🧩 Works Well With:** Flat Design 2.0, Card-Based Design, Minimalism

**🎯 Design Notes (Practical Tips):**
- Use the "Isolated CTA" technique—place your button in a sea of whitespace to make it unmissable.
- Keep the value proposition "Above the Fold."
- Use Directional Cues (arrows, eye-lines in photos) to point users toward the CTA.

**💻 Prompt (for vibe coding):**
Create a high-impact, Conversion-Focused landing page section. Implement a bold headline, a clear value proposition, and a prominent, high-contrast primary CTA. Include trust-building elements like customer testimonials and brand logos, ensuring the visual hierarchy leads directly to the conversion point.`
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
  ,
  {
    id: "high-tech-future",
    title: "High-Tech & Future Design Styles",
    themeClass: "theme-high-tech-future",
    styles: [
      { key: "cyberpunk", label: "Cyberpunk", icon: "⚡" },
      { key: "spatial-3d-ui", label: "Spatial / 3D UI", icon: "🧊" },
      { key: "glass-3d-hybrid", label: "Glass + 3D Hybrid", icon: "💠" },
      { key: "ai-generative-ui", label: "AI / Generative UI", icon: "🧠" },
      { key: "data-driven-design", label: "Data-Driven Design", icon: "📊" },
      { key: "holographic-ui", label: "Holographic UI", icon: "🔮" },
      { key: "sci-fi-hud", label: "Sci-Fi HUD", icon: "🎯" }
    ]
  },
  {
    id: "interactive-motion",
    title: "Interactive & Motion Design Styles",
    themeClass: "theme-interactive-motion",
    styles: [
      { key: "scrollytelling", label: "Scrollytelling", icon: "📜" },
      { key: "parallax-design", label: "Parallax Design", icon: "🖼️" },
      { key: "microinteractions", label: "Microinteractions", icon: "🖱️" },
      { key: "horizontal-scroll", label: "Horizontal Scroll", icon: "↔️" },
      { key: "webgl-3d-interactive", label: "WebGL / 3D Interactive", icon: "🌐" },
      { key: "motion-ui", label: "Motion UI", icon: "🎬" },
      { key: "hover-driven-ui", label: "Hover-driven UI", icon: "✨" }
    ]
  },
  {
    id: "product-ux",
    title: "Product & UX-Centered Design Styles",
    themeClass: "theme-product-ux",
    styles: [
      { key: "dashboard-ui", label: "Dashboard UI", icon: "📊" },
      { key: "mobile-first", label: "Mobile-First", icon: "📱" },
      { key: "accessibility-first", label: "Accessibility-First", icon: "♿" },
      { key: "human-centered", label: "Human-Centered", icon: "👥" },
      { key: "form-centric-design", label: "Form-Centric Design", icon: "📝" },
      { key: "conversion-focused", label: "Conversion-Focused", icon: "🎯" }
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
  if (currentAppMode === 'styles') {
    currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
    renderCategory(currentCategoryIndex);
  } else {
    currentCatExplorerIndex = (currentCatExplorerIndex - 1 + categoryRegistry.length) % categoryRegistry.length;
    renderCategoryMode(currentCatExplorerIndex);
    document.body.className = 'theme-category-' + categoryRegistry[currentCatExplorerIndex].id;
  }
});
document.getElementById('nav-arrow-right').addEventListener('click', () => {
  if (currentAppMode === 'styles') {
    currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
    renderCategory(currentCategoryIndex);
  } else {
    currentCatExplorerIndex = (currentCatExplorerIndex + 1) % categoryRegistry.length;
    renderCategoryMode(currentCatExplorerIndex);
    document.body.className = 'theme-category-' + categoryRegistry[currentCatExplorerIndex].id;
  }
});

// ---- Initial Load ----
document.addEventListener('DOMContentLoaded', () => {
  previewBox.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  contentRendered.style.transition = 'opacity 0.3s ease';
  renderCategory(0);
});

/* ============================================
   CATEGORY EXPLORER MODE LOGIC
   ============================================ */

const modeBtnStyles = document.getElementById('mode-btn-styles');
const modeBtnCategories = document.getElementById('mode-btn-categories');
const stylesModeContainer = document.getElementById('styles-mode');
const categoriesModeContainer = document.getElementById('categories-mode');

let currentAppMode = 'styles'; // 'styles' or 'categories'

modeBtnStyles.addEventListener('click', () => switchMode('styles'));
modeBtnCategories.addEventListener('click', () => switchMode('categories'));

function switchMode(mode) {
  if (currentAppMode === mode) return;
  currentAppMode = mode;

  if (mode === 'styles') {
    modeBtnStyles.classList.add('active');
    modeBtnCategories.classList.remove('active');
    categoriesModeContainer.style.display = 'none';
    stylesModeContainer.style.display = 'block';

    // Restore styling theme
    document.body.className = categories[currentCategoryIndex].themeClass;

  } else {
    modeBtnCategories.classList.add('active');
    modeBtnStyles.classList.remove('active');
    stylesModeContainer.style.display = 'none';
    categoriesModeContainer.style.display = 'block';

    // Set category mode theme
    document.body.className = 'theme-category-' + categoryRegistry[currentCatExplorerIndex].id;

    // Load category registry
    renderCategoryMode(currentCatExplorerIndex);
  }
}

/* --- Category Registry Data --- */
let currentCatExplorerIndex = 0;

const saasCategoryData = {
  id: 'saas',
  title: '💼 SaaS / Productivity / Tools',
  covers: 'SaaS platforms, B2B tools, workflow apps, admin panels, dashboards, project management tools, CRM tools, dev tools',
  coreGoal: 'Usability + Clarity + Structure + Scalability',
  options: [
    {
      key: 'minimal-bento',
      label: 'Minimal + Bento',
      cssClass: 'saas-style--minimal-bento',
      doc: {
        why: ['Minimal → strips away all distraction, keeps cognitive load near zero', 'Bento → organizes multiple features into a digestible, scannable card grid', 'Together they deliver a professional, approachable tool UI with no learning curve'],
        bestFor: '👉 CLARITY + STRUCTURE',
        useWhen: ['Building multi-feature SaaS dashboards', 'Displaying many tools or modules at once', 'Users need to navigate between different sections quickly'],
        avoidWhen: ['The product has a single focused action (a simple converter or timer)', 'You need deep emotional storytelling', 'Highly creative or artistic brand positioning'],
        keyUi: ['Bento card grid as the primary layout system', 'Clean sidebar or top nav with icon + label', 'Subtle card shadows with generous padding', 'Clear section headers and status indicators'],
        visual: ['Off-white or very light gray background', 'Neutral type (dark gray/charcoal) with one brand accent', 'Thin, clean card borders or soft box shadows', 'Inter, DM Sans, or Outfit as primary typeface'],
        mistakes: ['Making bento cards too equal in size — vary the grid to create hierarchy', 'Using more than 2 accent colors across cards', 'Adding decorative elements that compete with the data inside cards'],
        notes: ['Use CSS Grid with grid-template-areas to define named Bento zones', 'Make the hero/primary card 2–3x the size of secondary cards', 'Keep all interactive elements (buttons, inputs) visually consistent across every card'],
        prompt: 'Design a clean SaaS dashboard using a minimal Bento grid layout. Organize core features into varied-size cards with generous whitespace and a neutral color palette. Prioritize scannability and fast navigation. Use a light background, soft card shadows, and consistent typography throughout.'
      }
    },
    {
      key: 'minimal-data',
      label: 'Minimal + Data UI',
      cssClass: 'saas-style--minimal-data',
      doc: {
        why: ['Minimal → removes all visual noise so data can breathe', 'Data UI → presents metrics, tables, and charts in a structured, readable format', 'Together they create the gold standard for serious productivity tools'],
        bestFor: '👉 USABILITY + PRECISION',
        useWhen: ['Building project management or task tracking apps', 'The UI needs charts, tables, progress bars, and stat cards', 'Users are power users who need information density'],
        avoidWhen: ['Marketing or promotional landing pages', 'Creative or artistic audiences', 'First-time users who need strong onboarding visuals'],
        keyUi: ['Stat/KPI cards at the top', 'Data tables with sorting and filtering', 'Progress indicators and status badges', 'Compact sidebar navigation'],
        visual: ['White or very light gray base', 'Dark text with high contrast', 'Blue or teal as the data accent color', 'Monospace or tabular-number fonts for figures'],
        mistakes: ['Overloading every screen with every data point — prioritize key metrics', 'Using colorful charts that clash with the minimal palette', 'Forgetting empty and loading states for data components'],
        notes: ['Use CSS custom properties to define chart color scales that stay within your palette', 'Implement skeleton loaders for all data-heavy components', 'Always pair a number with a label AND a trend indicator (up/down arrow, % change)'],
        prompt: 'Design a minimal SaaS productivity interface with strong data UI components. Include stat cards, a data table with filters, and a progress tracker. Use a clean white layout with high-contrast typography and a single blue accent. Focus on dense but digestible information architecture.'
      }
    },
    {
      key: 'glass-minimal',
      label: 'Glassmorphism (Light)',
      cssClass: 'saas-style--glass-minimal',
      doc: {
        why: ['Light Glassmorphism → adds a premium, modern feel without the heaviness of dark glass', 'Minimal → keeps the interface readable and professional', 'Together they make the tool feel modern and trustworthy without being flashy'],
        bestFor: '👉 PREMIUM FEEL + APPROACHABILITY',
        useWhen: ['Building a SaaS product that needs to feel modern but not overwhelming', 'Targeting professionals who appreciate subtle sophistication', 'Creating login/onboarding screens, modal dialogs, and overlay panels'],
        avoidWhen: ['Performance is a strict requirement (blur is GPU-expensive)', 'Accessibility contrast requirements are strict (AA/AAA)', 'The UI has large amounts of text content (blur hurts readability)'],
        keyUi: ['Frosted glass cards on a soft gradient background', 'Clean, minimal navigation bar', 'Overlay modals and panels with glass treatment', 'Subtle inner borders (rgba white stroke)'],
        visual: ['Soft light background (very pale blue/lavender or white)', 'Cards: background: rgba(255,255,255,0.6), backdrop-filter: blur(12px)', 'Thin glass borders: border: 1px solid rgba(255,255,255,0.4)', 'Clean dark typography over the frosted surface'],
        mistakes: ['Applying glassmorphism to the entire layout background (only use on cards and panels)', 'Using too much blur on elements with dense text', 'Pairing glass with saturated, dark backgrounds (ruins the light glass effect)'],
        notes: ['Keep blur radius between 8px–16px; beyond that, performance degrades significantly', 'Always test glass contrast ratios with actual content inside the card', 'Use a very subtle gradient background (two close hues) behind the glass for the effect to read well'],
        prompt: 'Design a modern SaaS interface using light glassmorphism. Apply frosted glass treatment to cards, panels, and modals over a soft gradient background. Keep the overall layout minimal and professional. Use light rgba fills, subtle blur, and thin white borders to create a premium, airy feel.'
      }
    },
    {
      key: 'bento-data',
      label: 'Bento + Data UI',
      cssClass: 'saas-style--bento-data',
      doc: {
        why: ['Bento → provides a scalable, modular structure for organizing multiple data views', 'Data UI → fills each cell with meaningful, actionable information', 'Together they are the dominant pattern in modern enterprise and SaaS dashboards'],
        bestFor: '👉 STRUCTURE + SCANNABILITY',
        useWhen: ['Building admin panels, dashboards, and analytics views', 'Displaying multiple KPIs and data widgets simultaneously', 'Users need a high-density overview at a glance'],
        avoidWhen: ['Simple task-completion flows (forms, wizards)', 'Marketing pages or public-facing landing pages', 'Products with a single primary action'],
        keyUi: ['CSS Grid Bento layout with named zones', 'Inline mini-charts (sparklines, donut, bar)', 'Status and badge components', 'Filter bar above the grid'],
        visual: ['White or very light gray background', 'Muted brand accent for chart highlights', 'Consistent card size with a defined sizing scale (1x, 2x, 4x)', 'Clean tabular typography inside data cells'],
        mistakes: ['Making all bento cards identical sizes (defeats the purpose of bento hierarchy)', 'Overloading individual cards with too much data — one insight per card', 'Inconsistent spacing between cards'],
        notes: ['Define a base card unit (e.g., 240px × 200px) and build all larger cards as multiples', 'Each card should have exactly ONE primary metric and ONE supporting trend', 'Always design the grid for both collapsed and expanded states'],
        prompt: 'Design a SaaS analytics dashboard using a Bento grid with embedded data UI components. Organize multiple KPI cards, sparklines, a primary chart, and a data table into a cohesive, scalable grid layout. Use a clean light palette, consistent card sizing, and strong typographic hierarchy for numbers.'
      }
    },
    {
      key: 'flat-card',
      label: 'Flat + Card-Based',
      cssClass: 'saas-style--flat-card',
      doc: {
        why: ['Flat → removes all depth illusions for a clean, unambiguous visual system', 'Card-based → groups related content into discreet, tactile containers', 'Together they create highly accessible, fast-rendering productivity UIs'],
        bestFor: '👉 ACCESSIBILITY + SPEED',
        useWhen: ['Building CRM tools, task managers, and project boards', 'Targeting users who prefer no-frills professional interfaces', 'Performance is a top priority (mobile SaaS)'],
        avoidWhen: ['You need to convey premium quality or luxury', 'The product has a strong visual brand personality', 'Marketing sections require visual richness'],
        keyUi: ['Flat cards with solid borders (no shadows)', 'Status color tags and priority labels', 'List views and Kanban-style columns', 'Clean icon set (Phosphor, Lucide, or Heroicons)'],
        visual: ['Pure white background', '1px solid gray card borders', 'Bright status colors (red/green/yellow/blue) used sparingly as tags only', 'System-native or geometric sans-serif typeface'],
        mistakes: ['Flat doesn\'t mean boring — use bold color blocks and strong type contrast', 'Avoid removing all visual cues for interactivity; use color or underline as affordance', 'Don\'t flatten icons to the point of being unrecognizable at small sizes'],
        notes: ['Use border-left: 4px solid [status-color] on cards as a non-intrusive status indicator', 'Implement drag-and-drop affordances with subtle on-hover elevation (a single box shadow)', 'Pair flat style with a strong iconography system; icons do the heavy visual lifting'],
        prompt: 'Design a flat, card-based SaaS productivity UI. Use solid-border cards, bold status labels, and a clean white background. Implement a Kanban or list view as the primary interaction pattern. Keep all visual depth minimal — rely on color and type weight for hierarchy rather than shadows or gradients.'
      }
    },
    {
      key: 'minimal-type',
      label: 'Minimal + Typography',
      cssClass: 'saas-style--minimal-type',
      doc: {
        why: ['Minimal layout → gives the large type room to breathe and command attention', 'Massive Typography → communicates hierarchy and brand confidence instantly', 'Together they make product messaging feel confident and bold for SaaS landing pages'],
        bestFor: '👉 IMPACT + BRAND CLARITY',
        useWhen: ['SaaS landing pages, hero sections, and onboarding screens', 'Communicating a single powerful value proposition', 'The product has a strong brand voice'],
        avoidWhen: ['Complex dashboard screens with multiple data points', 'Users who are not native speakers (massive type reduces space for explanation)', 'Products with long or complex names/taglines'],
        keyUi: ['Hero heading at 80–140px with tight leading', 'Minimal supporting subtext at modest size', 'Single strong CTA button', 'Almost no other visual elements in the hero zone'],
        visual: ['White or off-white background', 'Near-black display type', 'One accent color used only on the CTA', 'Variable font or a strong geometric display typeface (Clash Display, Space Grotesk)'],
        mistakes: ['Using a massive font without adjusting letter-spacing (letter-spacing: -0.03em at large sizes is essential)', 'Choosing a decorative typeface that sacrifices legibility at scale', 'Adding too many supporting visual elements that compete with the type'],
        notes: ['Use CSS clamp() for fluid responsive type: font-size: clamp(3rem, 10vw, 9rem)', 'Apply -0.02em to -0.04em letter-spacing at hero scale for professional tightness', 'Split the headline into two weight zones (light thin line + bold thick line) for visual rhythm'],
        prompt: 'Design a minimal SaaS landing page hero section dominated by massive, bold typography. Let the headline command the entire viewport. Use near-black type on a white background, tight letter-spacing, and a single bold CTA. Keep all other visual elements stripped away to let the typography carry the full visual weight.'
      }
    }
  ],
  antipatterns: [
    '❌ <strong>Glassmorphism on everything</strong> → decimates readability and performance on complex screens',
    '❌ <strong>Brutalism or maximalism</strong> → destroys the trust and professionalism users expect from tools',
    '❌ <strong>Too many accent colors</strong> → breaks visual consistency and confuses status hierarchies',
    '❌ <strong>Animation-heavy UIs</strong> → distracts power users trying to complete tasks efficiently',
    '❌ <strong>Decorative hero sections on dashboard screens</strong> → wastes vertical space users need for actual data'
  ]
};

const financeCategoryData = {
  id: 'finance',
  title: '💰 Finance / Data / Analytics',
  covers: 'Fintech apps, crypto platforms, banking dashboards, investment platforms, analytics tools, data-heavy apps',
  coreGoal: 'Trust + Precision + Readability + Structure',
  options: [
    {
      key: 'minimal-data',
      label: 'Minimal + Data UI',
      cssClass: 'finance-style--minimal-data',
      doc: {
        why: ['Minimal → eliminates visual noise so complex financial data can dominate without distraction', 'Data UI → structures raw numbers into charts, tables, and stat cards that communicate instantly', 'Together they create the foundational pattern of every trustworthy finance product'],
        bestFor: '👉 TRUST + CLARITY',
        useWhen: ['Building banking dashboards and investment tracking apps', 'Displaying complex analytics, trend data, or transactional history', 'Users are professionals who need data density without cognitive overload'],
        avoidWhen: ['You want emotional engagement or creative storytelling', 'The product is consumer-facing and needs strong visual warmth', 'You\'re building a marketing/landing page, not a dashboard'],
        keyUi: ['KPI stat cards with trend indicators (arrow + percentage)', 'Line and bar charts with labeled axes', 'Sortable, filterable data tables', 'Date range picker and filter controls'],
        visual: ['Pure white or very light gray (#F7F8FA) background', 'Dark charcoal text (#1A1D23) for all data labels', 'Single brand blue or green as the chart accent color', 'Tabular-figure monospace font for numbers (e.g., IBM Plex Mono, Roboto Mono)'],
        mistakes: ['Using multiple chart colors that confuse the data hierarchy — stick to one primary + one secondary color', 'Forgetting to show percentage change alongside raw numbers', 'Missing loading skeletons for data components (jarring layout shift on load)'],
        notes: ['Always pair every number with a label, a unit, and a trend direction', 'Use font-variant-numeric: tabular-nums so numbers align cleanly in tables', 'Define a strict spacing scale so data density never feels cluttered'],
        prompt: 'Design a clean finance dashboard using a minimal layout with strong typography and a data-first UI. Include KPI stat cards, a primary line chart with labeled axes, and a sortable transaction table. Use high contrast, tabular number fonts, and a single blue accent. Avoid all decorative elements — let the data dominate.'
      }
    },
    {
      key: 'glass-minimal',
      label: 'Glassmorphism + Minimal',
      cssClass: 'finance-style--glass-minimal',
      doc: {
        why: ['Glassmorphism → adds a modern, premium fintech aesthetic that feels sleek and innovative', 'Minimal → keeps the glass surfaces readable and avoids the "too futuristic" trap', 'Together they signal that the product is both trustworthy and ahead of its time'],
        bestFor: '👉 TRUST + MODERN FEEL',
        useWhen: ['Building fintech startups and neobanking apps', 'Targeting younger, tech-savvy users who expect modern UI', 'Creating login screens, card interfaces, and modal overlays'],
        avoidWhen: ['Low-end device performance is a concern (backdrop-filter is GPU-heavy)', 'Accessibility contrast is a strict legal requirement', 'The interface is text-heavy (regulatory disclosures, tables)'],
        keyUi: ['Glass cards displaying account balance and portfolio summary', 'Frosted navigation bar', 'Modal dialogs and action sheets with glass treatment', 'Subtle glow highlights around key numbers'],
        visual: ['Deep navy or dark purple gradient background (#0D1B2A → #1B2A4A)', 'Cards: background: rgba(255,255,255,0.08), backdrop-filter: blur(16px)', 'Thin border: border: 1px solid rgba(255,255,255,0.15)', 'White text with light gray secondary labels'],
        mistakes: ['Applying glass to backgrounds — only use on cards, panels, and overlays', 'Too much blur (>20px) making card contents unreadable', 'Low contrast white text on a light section of the gradient background'],
        notes: ['Use backdrop-filter: blur(12px) saturate(180%) for a richer glass effect', 'Always test glass readability against both the lightest and darkest parts of the gradient', 'Keep the background gradient subtle — two tones of the same dark hue, not two clashing colors'],
        prompt: 'Design a modern fintech UI using dark glassmorphism with subtle blur effects on a deep navy gradient background. Apply glass treatment to account cards and stat panels. Combine it with a minimal layout and clean white typography. Highlight key financial figures with soft glow accents.'
      }
    },
    {
      key: 'bento-data',
      label: 'Bento + Data UI',
      cssClass: 'finance-style--bento-data',
      doc: {
        why: ['Bento → structures multiple data widgets into a scalable, modular grid', 'Data UI → fills each Bento cell with exactly one high-value insight or chart', 'Together they power the gold-standard layout of enterprise analytics platforms'],
        bestFor: '👉 STRUCTURE + SCANNABILITY',
        useWhen: ['Building financial dashboards, admin panels, and multi-metric views', 'Users need a bird\'s-eye overview of multiple KPIs simultaneously', 'The product serves analysts, traders, or financial managers'],
        avoidWhen: ['Simple single-metric tracking apps', 'Story-driven or narrative financial reporting', 'Consumer-facing products where data density feels intimidating'],
        keyUi: ['Bento grid with 1x, 2x, and 4x card sizes', 'Inline sparkline charts inside smaller cards', 'A full-width primary chart in the hero card', 'Status badges (green/red) for portfolio or market indicators'],
        visual: ['White or light (#F5F7FA) background', 'Strong card borders or very light shadows', 'One blue and one green accent (for bullish/bearish or income/expense)', 'Tight, compact typography with clear hierarchy'],
        mistakes: ['All cards the same size — defeats Bento\'s core purpose of visual hierarchy', 'Too many data points per card — one primary metric per card, maximum', 'Inconsistent padding inside cards across the grid'],
        notes: ['Start with a 12-column grid and define named grid areas for each card zone', 'Hero card (full width, 2x height) should always be the primary chart', 'Use min-height constraints on cards so they don\'t collapse when data is absent'],
        prompt: 'Design a finance analytics dashboard using a Bento grid layout. Organize KPI cards, sparklines, a primary portfolio chart, and a transactions table into a modular grid. Use a clean light background, high-contrast numbers, and color-coded status indicators for gains and losses. One primary insight per card.'
      }
    },
    {
      key: 'neumorphism-light',
      label: 'Neumorphism (Light)',
      cssClass: 'finance-style--neumorphism-light',
      doc: {
        why: ['Light Neumorphism → creates a soft, tactile quality that feels approachable and calm — good for personal finance', 'Minimal → ensures the interface doesn\'t feel heavy or claustrophobic', 'Together they\'re ideal for consumer personal finance apps that need to feel friendly, not corporate'],
        bestFor: '👉 APPROACHABILITY + TACTILE FEEL',
        useWhen: ['Building personal budgeting apps, savings trackers, or expense managers', 'Targeting non-technical consumers who find traditional finance UIs intimidating', 'Creating a calm, friendly alternative to cold banking aesthetics'],
        avoidWhen: ['Enterprise-grade data dashboards (neumorphism doesn\'t scale to data density)', 'Dark mode interfaces (neumorphism only works on light backgrounds)', 'Accessibility-first products (neumorphic contrast ratios often fail WCAG AA)'],
        keyUi: ['Soft extruded cards for account balance displays', 'Neumorphic toggle switches and buttons', 'Circular progress indicators for savings goals', 'Subtle recessed input fields'],
        visual: ['Flat light gray base (#E0E5EC)', 'Shadow pairs: box-shadow: 6px 6px 12px #B8BEC7, -6px -6px 12px #FFFFFF', 'Minimal use of color — single green or blue accent for positive states only', 'Rounded corners on all elements (border-radius: 16px)'],
        mistakes: ['Failing contrast audits — neumorphic elements must still meet AA contrast minimums', 'Using neumorphism in dark mode (the shadow logic breaks entirely)', 'Applying neumorphic style to complex multi-state data components'],
        notes: ['Limit neumorphic effects to 2–3 key UI components — don\'t apply it globally', 'Use convex style for interactive elements (buttons) and concave for input fields', 'Always layer a color accent on top of neumorphic components to maintain accessibility'],
        prompt: 'Design a personal finance app UI using soft light neumorphism on a pale gray background. Apply extruded card styling to account balance displays, savings goal trackers, and budget categories. Keep the overall layout minimal and calm. Use a single green accent color for positive states and progress indicators.'
      }
    },
    {
      key: 'dark-data',
      label: 'Dark UI + Data Viz',
      cssClass: 'finance-style--dark-data',
      doc: {
        why: ['Dark UI → reduces eye strain for power users who stare at data all day, and makes charts pop with brilliant contrast', 'Data Visualization → rich, colorful charts feel even more vibrant and impactful against a dark background', 'Together they dominate professional trading, crypto, and analytics interfaces'],
        bestFor: '👉 POWER USER FOCUS + VISUAL IMPACT',
        useWhen: ['Building trading terminals, crypto dashboards, and real-time analytics', 'Targeting power users and analysts who use the product for hours at a time', 'You need charts and data visualizations to be the visual centerpiece'],
        avoidWhen: ['Consumer-facing banking products that need to feel approachable and trustworthy', 'Products used primarily in bright office environments', 'Users who need large amounts of text content (dark mode reduces long-read comfort)'],
        keyUi: ['Candlestick or area charts as hero visual elements', 'Dense data tables with alternating row colors', 'Real-time metric tickers', 'Color-coded status indicators (green for gain, red for loss)'],
        visual: ['Deep background: #0A0E1A or #0F1117', 'Card surfaces: #151B2C or #1A2035', 'Chart accent palette: electric blue, emerald green, hot coral', 'Pure white or very light gray text for primary labels'],
        mistakes: ['Pure black (#000000) background — causes halation and fatigue; use very dark navy instead', 'Too many chart colors that lose meaning — define a strict 4-color data palette', 'Low contrast secondary text that disappears on dark surfaces'],
        notes: ['Use #F0F4FF (slightly cool white) for primary text, not pure #FFFFFF — less harsh', 'Define elevation through lightness: background layer → card layer → overlay layer each ~10% lighter', 'Apply a very subtle grid overlay on chart backgrounds for depth without distraction'],
        prompt: 'Design a dark-mode finance analytics dashboard with rich data visualizations. Use a deep navy background with slightly lighter card surfaces. Feature a large candlestick or area chart as the hero element, surrounded by dense KPI cards and a real-time data ticker. Use a vivid chart palette of electric blue, green, and coral on the dark surface.'
      }
    },
    {
      key: 'minimal-type',
      label: 'Minimal + Typography',
      cssClass: 'finance-style--minimal-type',
      doc: {
        why: ['Minimal layout → makes large financial figures the undisputed hero of every screen', 'Numbers-first typography → treats financial data as expressive design elements, not just labels', 'Together they create bold, confident financial UIs that communicate precision and authority'],
        bestFor: '👉 CONFIDENCE + DATA AS DESIGN',
        useWhen: ['Investment portfolio overviews and wealth management summaries', 'Financial reporting screens where one key number tells the story', 'Product moments where the number itself is the achievement (e.g., "You saved $1,200 this month")'],
        avoidWhen: ['Complex multi-metric dashboards requiring simultaneous comparison', 'B2B tools where relational data matters more than single figures', 'Products with unreliable or frequently empty data states'],
        keyUi: ['Hero number displayed at 64–120px as the primary UI element', 'Supporting label and trend badge flanking the number', 'Minimal surrounding context — almost no other competing elements', 'One clean CTA underneath the hero figure'],
        visual: ['Off-white or pure white background', 'Near-black or deep navy hero number', 'One green (positive) or red (negative) accent used only on trend indicators', 'Premium tabular typeface: Neue Haas Grotesk, DM Sans, or Inter Display'],
        mistakes: ['Choosing a display font that isn\'t designed for tabular numbers (digits misalign)', 'Using the large number without clear unit and context labels', 'Forgetting the empty state when no data is available yet'],
        notes: ['Apply font-feature-settings: "tnum" to ensure tabular number alignment', 'Set the hero number with line-height: 1 and tight letter-spacing for maximum impact', 'Animate the number counting up on load using a simple JS counter for delight'],
        prompt: 'Design a minimal finance overview screen where the primary financial figure dominates the layout at massive scale. Treat the number as the main design element with a supporting trend indicator and context label. Keep everything else stripped to near-zero. Use a premium tabular typeface, a white background, and a single accent color for trend states.'
      }
    }
  ],
  antipatterns: [
    '❌ <strong>Brutalism or maximalism</strong> → destroys trust; finance UIs must feel controlled and precise',
    '❌ <strong>Too many colors across charts</strong> → loses the data hierarchy; 3–4 chart colors maximum',
    '❌ <strong>Decorative illustration-heavy layouts</strong> → makes the product feel playful when it needs to feel serious',
    '❌ <strong>Animations on financial figures</strong> → can feel gimmicky and undermine data credibility',
    '❌ <strong>Low contrast on dark dashboards</strong> → a critical failure in data-dense environments where every label matters'
  ]
};

const aiCategoryData = {
  id: 'ai',
  title: '🤖 AI / Tech / Startup',
  covers: 'AI tools, SaaS landing pages, modern tech startups, APIs, developer platforms, ML products',
  coreGoal: 'Futuristic + Modern + Engaging + Slightly Experimental',
  options: [
    {
      key: 'glass-aurora',
      label: 'Glassmorphism + Aurora Gradient',
      cssClass: 'ai-style--glass-aurora',
      doc: {
        why: ['Glassmorphism → the frosted-glass surface feels like a literal interface from the future', 'Aurora Gradient → the organic, shifting color fields evoke AI, energy, and intelligence', 'Together they have become the defining visual language of premium AI product landing pages'],
        bestFor: '👉 FUTURISTIC PREMIUM FEEL',
        useWhen: ['Building AI product landing pages, hero sections, or SaaS waitlist pages', 'You want to immediately communicate that the product is cutting-edge', 'The brand is targeting design-savvy, tech-forward early adopters'],
        avoidWhen: ['The product audience is highly conservative (enterprise procurement, government)', 'You need dense information architecture (aurora distracts from data)', 'Performance is a strict constraint (blur + gradient animations are GPU-heavy)'],
        keyUi: ['Full-viewport aurora gradient as the hero background', 'Frosted glass card containing the product tagline and CTA', 'Floating glass badges/chips showing feature highlights', 'Subtle animated particle or noise overlay'],
        visual: ['Background: animated gradient mesh — deep violet #1A0533, electric blue #0A1628, teal #0D3B2E', 'Cards: background: rgba(255,255,255,0.06), backdrop-filter: blur(20px)', 'Accent: soft neon — electric violet #8B5CF6, cyan #22D3EE', 'Text: white #FFFFFF primary, #A1B0CC secondary'],
        mistakes: ['Over-saturating the aurora so it becomes garish instead of ethereal', 'Making the glass cards too opaque — they should feel translucent, not solid', 'Applying animation to both the background and the cards simultaneously (too much motion)'],
        notes: ['Animate the aurora gradient with a slow CSS @keyframes cycle (20–40s) — imperceptible but alive', 'Apply will-change: transform on the animated gradient layer to hint GPU compositing', 'Use mix-blend-mode: screen on particle layers to integrate them with the aurora naturally'],
        prompt: 'Design an AI product landing page hero using glassmorphism layered over an animated aurora gradient background. Use deep violet, electric blue, and teal as the gradient colors. Apply frosted glass treatment to the product tagline card, CTA area, and floating feature badges. Keep the aurora subtle and slowly animated — otherworldly, not garish.'
      }
    },
    {
      key: 'bento-illustration',
      label: 'Bento + AI Illustration',
      cssClass: 'ai-style--bento-illustration',
      doc: {
        why: ['Bento → makes the AI product\'s features feel organized and approachable rather than overwhelming', 'AI Illustration → bespoke abstract or generative illustrations make the product feel uniquely intelligent', 'Together they\'re perfect for feature showcase sections and AI product homepages'],
        bestFor: '👉 FEATURE CLARITY + DISTINCTIVE BRAND VOICE',
        useWhen: ['Building AI feature overview sections or product explanation pages', 'You have a strong illustration asset or can generate custom AI visuals', 'You want each feature to feel equally premium but visually distinct'],
        avoidWhen: ['You don\'t have access to high-quality custom illustrations', 'The product must prioritize raw data density over visual storytelling', 'B2B sales decks where trust and formality override creativity'],
        keyUi: ['Bento grid where each cell features one AI capability', 'Each card contains: illustration, feature title, one-line description', 'A hero Bento card (2× size) showcasing the primary AI feature', 'Minimal text; let illustration + title carry the message'],
        visual: ['Near-black or dark navy background (#0D1117)', 'Cards: #161B22 surface with subtle gradient border', 'Illustration palette: complementary accent colors per card (violet, teal, amber)', 'White headline, light gray body text'],
        mistakes: ['Using generic stock AI illustrations (neural network clipart) — they destroy credibility', 'Uneven illustration quality across cards — all must feel from the same visual system', 'Making illustration so complex it overshadows the feature copy'],
        notes: ['Commission illustrations in a consistent abstract style — geometric + organic hybrid', 'Animate illustrations subtly with SVG or Lottie — a gentle loop (2–4s) adds life', 'Keep the illustration in the top 60% of the card; reserve the bottom 40% for text'],
        prompt: 'Design an AI product feature section using a dark Bento grid layout. Each card showcases one AI capability with an abstract illustration, a short title, and a one-line description. Use a near-black background with dark card surfaces, gradient card borders, and a distinct accent color per card. Keep the layout clean and modular.'
      }
    },
    {
      key: 'dark-neon',
      label: 'Dark UI + Neon (Cyberpunk Lite)',
      cssClass: 'ai-style--dark-neon',
      doc: {
        why: ['Dark UI → creates a focused, immersive environment that feels like a real dev or AI tool', 'Neon accents (restrained) → add energy and technical edge without full cyberpunk overload', 'Together they speak directly to developer tools, ML platforms, and hacker-culture products'],
        bestFor: '👉 DEVELOPER CREDIBILITY + TECHNICAL EDGE',
        useWhen: ['Building developer tools, CLI interfaces, code editors, or AI APIs', 'Targeting technical users who expect a dark, focused UI', 'The product\'s identity leans into technical sophistication'],
        avoidWhen: ['Marketing to non-technical executives or general consumers', 'The product needs to feel friendly, accessible, or inviting', 'You\'re targeting industries that expect conservative, formal design'],
        keyUi: ['Terminal-style code blocks and syntax highlighting', 'Neon-outlined buttons and badges (not filled — outlines only)', 'Monospace/code typeface for technical content zones', 'Subtle neon glow on primary CTA elements'],
        visual: ['Background: #050810 (very dark, slightly blue-black)', 'Cards: #0D1117', 'Neon accents: electric green #39FF14, cyan #00FFFF, or hot pink #FF007F — pick ONE', 'Primary text: #E6EDF3, secondary: #8B949E'],
        mistakes: ['Using more than one neon color — it becomes overwhelming immediately', 'Full cyberpunk over-the-top styling (scanlines, glitch on everything) — "Lite" means restrained', 'Neon text on dark backgrounds without sufficient contrast for body copy'],
        notes: ['Use the neon color ONLY on CTAs, key labels, and one accent element — never for body text', 'Apply box-shadow: 0 0 16px [neon-color] on primary buttons for a subtle glow effect', 'Use a real monospace font (JetBrains Mono, Fira Code) in terminal sections for authenticity'],
        prompt: 'Design a dark developer tool UI with cyberpunk-lite neon accents. Use a very dark navy-black background, terminal-style code blocks with syntax highlighting, and neon-outlined CTA buttons with a subtle glow effect. Pick a single neon color (green, cyan, or hot pink). Keep the neon restrained — used only for accents and interactive elements, not decoration.'
      }
    },
    {
      key: '3d-minimal',
      label: '3D Elements + Minimal',
      cssClass: 'ai-style--3d-minimal',
      doc: {
        why: ['3D elements → communicate that the product is technically sophisticated and visually innovative', 'Minimal layout → gives the 3D objects space to be the undisputed hero', 'Together they create the "wow" factor hero sections that tech startups are known for'],
        bestFor: '👉 WOW FACTOR + TECHNICAL SOPHISTICATION',
        useWhen: ['AI product heroes featuring the product as a 3D object (sphere, chip, interface)', 'Startup landing pages that need to stand out immediately', 'You have access to WebGL, Three.js, or high-quality 3D assets'],
        avoidWhen: ['You can\'t produce high-quality 3D (a low-quality 3D object is worse than no 3D)', 'Performance on mobile is a primary concern', 'The product category expects humility over spectacle'],
        keyUi: ['Full-viewport or hero-dominant 3D object (rotating sphere, chip, orb)', 'Minimal headline and CTA beneath or beside the 3D element', 'Subtle environmental lighting on the 3D object matching the brand palette', 'Very little other content competing in the hero section'],
        visual: ['Dark background: #080C14', '3D object lit with iridescent or monochromatic accent lighting', 'Minimal text: white headline, single-color CTA', 'Rest of the page can be lighter, with the dark hero as the opening impact'],
        mistakes: ['Interactive 3D that lags on mid-range devices — always performance-test on throttled CPU', 'A 3D object that has no relationship to the product\'s actual purpose', 'Overcrowding the hero with copy, leaving no space for the 3D to breathe'],
        notes: ['Use Three.js with DRACO compression on 3D models for fast load times', 'Implement a low-resolution fallback image for devices where WebGL is unavailable', 'The 3D object should react subtly to mouse position using mousemove parallax for engagement'],
        prompt: 'Design an AI/tech startup landing page with a large 3D object (glowing orb, abstract geometric form, or floating chip) as the hero centerpiece. Keep the surrounding layout minimal — a bold headline, a single CTA, and generous negative space. Use a dark background with the 3D object as the sole source of visual energy. Implement subtle mouse-parallax interaction.'
      }
    },
    {
      key: 'glass-motion',
      label: 'Glass + Motion UI',
      cssClass: 'ai-style--glass-motion',
      doc: {
        why: ['Glass → communicates a premium, layered, intelligent interface', 'Motion UI → makes the product feel alive, intelligent, and responsive — core to AI brand perception', 'Together they create an interface that genuinely feels like it\'s thinking'],
        bestFor: '👉 INTELLIGENCE + INTERACTIVITY',
        useWhen: ['Building AI assistants, chatbot interfaces, or real-time AI tool UIs', 'You want the interface itself to feel like a living, intelligent entity', 'The product benefit is real-time responsiveness or streaming output'],
        avoidWhen: ['prefers-reduced-motion accessibility is a primary concern for your user base', 'The animation budget would significantly delay time-to-interactive', 'The product is a static informational site with no dynamic behavior'],
        keyUi: ['Animated glass panels that slide or fade into position on load', 'Typing/streaming text animations for AI output displays', 'Hover-triggered glass card elevation changes', 'Smooth page transition animations'],
        visual: ['Dark gradient base: deep navy or charcoal', 'Glass surface: rgba(255,255,255,0.07) with backdrop-filter: blur(16px)', 'Motion accent: electric blue or violet glow trailing animations', 'Smooth easing: cubic-bezier(0.34, 1.56, 0.64, 1) for spring-like motion'],
        mistakes: ['Animating every element simultaneously — stagger animations with animation-delay', 'Motion that lasts too long — keep transitions under 400ms for UI interactions', 'Ignoring @media (prefers-reduced-motion: reduce) — always provide a static fallback'],
        notes: ['Use Intersection Observer API to trigger animations only when elements enter the viewport', 'Apply transform and opacity only for animations (never width/height) for 60fps performance', 'Build a motion design system: define 3 easing curves and 3 duration tokens used across all animations'],
        prompt: 'Design an AI tool interface using dark glassmorphism combined with refined motion UI. Animate glass panels sliding in on load, use streaming text animations for AI output, and add spring-like hover interactions on cards. Use a deep navy gradient background, frosted glass surfaces, and electric blue motion accents. All animations must be smooth, purposeful, and staggered.'
      }
    },
    {
      key: 'spatial-floating',
      label: 'Spatial UI + Floating Cards',
      cssClass: 'ai-style--spatial-floating',
      doc: {
        why: ['Spatial UI → creates a sense of genuine 3D depth in a 2D interface, making navigation feel spatial and innovative', 'Floating Cards → give each feature or content block its own visual "altitude" in space', 'Together they represent the leading edge of post-flat design — the UI paradigm that Apple Vision Pro accelerated'],
        bestFor: '👉 INNOVATION + IMMERSIVE DEPTH',
        useWhen: ['Building next-generation AI interfaces, AR/VR companion apps, or spatial computing products', 'The product needs to feel genuinely different from every other SaaS competitor', 'Your audience is design-forward, experimental, and early-adopter'],
        avoidWhen: ['Users need a traditional, learnable interface immediately (spatial UI has a learning curve)', 'Mobile is the primary platform (spatial depth loses impact on small screens)', 'The product needs to communicate familiarity and trust over innovation'],
        keyUi: ['Cards at multiple perceived "altitudes" using layered shadows and scale', 'Background elements subtly blurred (simulating depth-of-field)', 'Foreground interactive cards with strong shadows and crisp edges', 'Mouse-driven parallax creating spatial movement on hover'],
        visual: ['Deep, soft background: dark blue-gray or near-black with a faint gradient', 'Card layers: darkest (background) → medium surface → brightest (foreground/interactive)', 'Shadows: layered box-shadow with multiple values to simulate physical depth', 'Accent: a single vivid color as a lighting source on foreground elements'],
        mistakes: ['Too many depth layers confuse users rather than delight them — three layers maximum', 'Heavy parallax that makes users nauseous — limit parallax movement to 5–15px range', 'Forgetting that all spatial UI must still have a clear, obvious interaction model'],
        notes: ['Simulate depth with layered box-shadows: 0 2px 4px, 0 8px 24px, 0 24px 64px at increasing opacity', 'Use perspective and transform: translateZ() for literal CSS 3D layering', 'Parallax layers: background moves at 10% speed, midground at 30%, foreground at 60% of mouse travel'],
        prompt: 'Design an AI startup interface using a spatial UI with floating cards at multiple depth layers. Background elements should appear recessed and slightly blurred; foreground interactive cards should appear closest, with strong layered shadows and crisp edges. Implement gentle mouse-driven parallax so the spatial depth is felt through interaction. Use a deep dark background with vivid accent lighting.'
      }
    }
  ],
  antipatterns: [
    '❌ <strong>Generic "neural network" stock illustrations</strong> → immediately destroys credibility with tech audiences',
    '❌ <strong>Pure white/light corporate design</strong> → too conservative for a product claiming to be futuristic',
    '❌ <strong>Over-animated UI</strong> → makes the product feel like a demo, not a real tool',
    '❌ <strong>Multiple neon colors</strong> → one neon accent = technical edge; three = visual chaos',
    '❌ <strong>Heavy 3D that lags on mobile</strong> → ruins first impressions faster than no 3D at all'
  ]
};

const categoryRegistry = [saasCategoryData, financeCategoryData, aiCategoryData]; // Extensible for future categories
let currentSaasOption = null;
let currentFinanceOption = null;
let currentAiOption = null;

function renderCategoryMode(index) {
  const catData = categoryRegistry[index];

  if (catData.id === 'saas') {
    renderSaasCategoryHTML(catData);
  } else if (catData.id === 'finance') {
    renderFinanceCategoryHTML(catData);
  } else if (catData.id === 'ai') {
    renderAiCategoryHTML(catData);
  }
}

function renderSaasCategoryHTML(catData) {
  categoriesModeContainer.innerHTML = `
    <div class="cat-mode">
      <div class="cat-header">
        <h2 class="cat-header__title">${catData.title}</h2>
        <div class="cat-header__badges">
          <div class="cat-badge"><strong>👉 Covers:</strong> ${catData.covers}</div>
          <div class="cat-badge"><strong>🧠 Core Goal:</strong> ${catData.coreGoal}</div>
        </div>
      </div>
      
      <div class="cat-options-grid" id="saas-options-grid"></div>
      
      <div class="saas-preview-wrapper">
        <div class="preview-label">
          <span class="preview-label__dot"></span>
          Live Preview — <span id="saas-preview-label">Minimal + Bento</span>
        </div>
        
        <div class="saas-preview" id="saas-preview-box">
          <div class="saas-sidebar">
            <div class="saas-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              AcmeCorp
            </div>
            <div class="saas-nav">
              <div class="saas-nav-item">🏠 Overview</div>
              <div class="saas-nav-item">📊 Analytics</div>
              <div class="saas-nav-item">👥 Customers</div>
              <div class="saas-nav-item">⚙️ Settings</div>
            </div>
            <div class="saas-sidebar-footer">
              Pro Plan (Active)
            </div>
          </div>
          <div class="saas-main">
            <div class="saas-topbar">
              <div class="saas-breadcrumb">Overview / Analytics</div>
              <div class="saas-actions">
                <button class="saas-btn">Export</button>
                <button class="saas-btn saas-btn--primary">New Report</button>
              </div>
            </div>
            <div class="saas-kpi-row">
              <div class="saas-kpi-card">
                <div class="saas-kpi-label">Revenue</div>
                <div class="saas-kpi-value">$45,231</div>
              </div>
              <div class="saas-kpi-card">
                <div class="saas-kpi-label">Active Users</div>
                <div class="saas-kpi-value">2,405</div>
              </div>
              <div class="saas-kpi-card">
                <div class="saas-kpi-label">Conversion</div>
                <div class="saas-kpi-value">3.2%</div>
              </div>
              <div class="saas-kpi-card">
                <div class="saas-kpi-label">Churn</div>
                <div class="saas-kpi-value">1.1%</div>
              </div>
            </div>
            <div class="saas-bento-grid">
              <div class="saas-card saas-card--wide">
                <div class="saas-card-title">Revenue Overview</div>
                <div class="saas-chart-placeholder"></div>
              </div>
              <div class="saas-card">
                <div class="saas-card-title">Top Sources</div>
                <div class="saas-chart-placeholder"></div>
              </div>
              <div class="saas-card">
                <div class="saas-card-title">Device Split</div>
                <div class="saas-chart-placeholder"></div>
              </div>
            </div>
            <div class="saas-data-row">
              <div class="saas-card">
                <div class="saas-card-title">Recent Transactions</div>
                <table class="saas-table">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Stripe Inc.</td>
                      <td>Oct 24, 2023</td>
                      <td>$1,200</td>
                      <td><span class="saas-badge" style="background:#dcfce7;color:#166534;">Completed</span></td>
                    </tr>
                    <tr>
                      <td>Vercel Corp</td>
                      <td>Oct 23, 2023</td>
                      <td>$850</td>
                      <td><span class="saas-badge" style="background:#fef9c3;color:#854d0e;">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="saas-doc-container"></div>
      
      <!-- Anti-Pattern Warning Box -->
      <div class="cat-warning-box">
        <div class="cat-warning-heading">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Anti-Patterns for SaaS / Productivity / Tools
        </div>
        <ul class="cat-doc-list" style="color: inherit;">
          ${catData.antipatterns.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>

      <!-- Quick Decision Table -->
      <div class="cat-decision-table-container">
        <div class="cat-decision-table-title">⚡ Quick Decision Guide</div>
        <table class="cat-decision-table">
          <thead>
            <tr>
              <th>If your priority is…</th>
              <th>Use this combo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Structure + many features</td><td>Bento + Minimal</td></tr>
            <tr><td>Data density + precision</td><td>Minimal + Data UI</td></tr>
            <tr><td>Premium modern feel</td><td>Glassmorphism (Light) + Minimal</td></tr>
            <tr><td>Scalable dashboard view</td><td>Bento + Data UI</td></tr>
            <tr><td>Accessibility + speed</td><td>Flat + Card-Based UI</td></tr>
            <tr><td>Strong brand impact</td><td>Minimal + Massive Typography</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Render options buttons
  const optionsGrid = document.getElementById('saas-options-grid');
  catData.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'style-btn';
    btn.dataset.key = opt.key;
    btn.innerHTML = `<span class="style-btn__label">${opt.label}</span>`;
    btn.onclick = () => switchSaasOption(opt);
    optionsGrid.appendChild(btn);
  });

  // Auto-select first option
  currentSaasOption = null;
  switchSaasOption(catData.options[0]);
}

function switchSaasOption(opt) {
  if (currentSaasOption === opt.key) return;
  currentSaasOption = opt.key;

  // Update buttons
  document.querySelectorAll('#saas-options-grid .style-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.key === opt.key);
  });

  const previewBox = document.getElementById('saas-preview-box');
  const previewLabel = document.getElementById('saas-preview-label');

  // Fade effect
  previewBox.style.opacity = '0';
  previewBox.style.transform = 'translateY(10px)';

  setTimeout(() => {
    previewLabel.textContent = opt.label;
    previewBox.className = 'saas-preview ' + opt.cssClass;
    previewBox.style.opacity = '1';
    previewBox.style.transform = 'translateY(0)';
  }, 200);

  renderSaasDoc(opt.doc);
}

function renderSaasDoc(doc) {
  const container = document.getElementById('saas-doc-container');

  container.innerHTML = `
    <div class="cat-doc-box">
      <div class="cat-doc-section">
        <div class="cat-doc-heading">🤔 Why This Works</div>
        <ul class="cat-doc-list">${doc.why.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">🎯 Best For</div>
        <div class="cat-doc-text"><strong>${doc.bestFor}</strong></div>
      </div>
      
      <div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:32px;">
        <div style="flex:1;min-width:250px;">
          <div class="cat-doc-heading">✅ Use When</div>
          <ul class="cat-doc-list">${doc.useWhen.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div style="flex:1;min-width:250px;">
          <div class="cat-doc-heading">🚫 Avoid When</div>
          <ul class="cat-doc-list">${doc.avoidWhen.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">⚙️ Key UI Elements</div>
        <ul class="cat-doc-list">${doc.keyUi.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">🎨 Visual Direction</div>
        <ul class="cat-doc-list">${doc.visual.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">⚠️ Common Mistakes</div>
        <ul class="cat-doc-list">${doc.mistakes.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">💡 Design Notes (Practical)</div>
        <ul class="cat-doc-list">${doc.notes.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">💻 Prompt (for vibe coding)</div>
        <div class="cat-prompt-box">${doc.prompt}</div>
      </div>
    </div>
  `;
}

/* ============================================
   FINANCE CATEGORY RENDER LOGIC
   ============================================ */

function renderFinanceCategoryHTML(catData) {
  categoriesModeContainer.innerHTML = `
    <div class="cat-mode">
      <div class="cat-header">
        <h2 class="cat-header__title">${catData.title}</h2>
        <div class="cat-header__badges">
          <div class="cat-badge"><strong>👉 Covers:</strong> ${catData.covers}</div>
          <div class="cat-badge"><strong>🧠 Core Goal:</strong> ${catData.coreGoal}</div>
        </div>
      </div>
      
      <div class="cat-options-grid" id="finance-options-grid"></div>
      
      <div class="finance-preview-wrapper">
        <div class="preview-label">
          <span class="preview-label__dot"></span>
          Live Preview — <span id="finance-preview-label">Minimal + Data UI</span>
        </div>
        
        <div class="finance-preview" id="finance-preview-box">
          <div class="finance-topbar">
            <div class="finance-topbar-left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Acme Wealth
            </div>
            <div class="finance-topbar-right">
              <div class="finance-date-picker">
                Last 30 Days
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </div>
          
          <div class="finance-main">
            <div class="finance-hero-section">
              <div>
                <div class="finance-balance-label">Total Portfolio Value</div>
                <div class="finance-balance-value">$1,284,500.00</div>
              </div>
              <div class="finance-trend-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                +12.4%
              </div>
            </div>
            
            <div class="finance-bento-grid">
              <div class="finance-card">
                <div class="finance-card-header">
                  Portfolio Performance
                </div>
                <div class="finance-chart-area">
                  [ Candlestick / Area Chart Placeholder ]
                </div>
              </div>
              
              <div class="finance-card">
                <div class="finance-card-header">
                  Key Metrics
                </div>
                <div class="finance-kpi-grid">
                  <div class="finance-kpi-mini">
                    <div class="finance-kpi-mini-label">YTD Return</div>
                    <div class="finance-kpi-mini-value" style="color: #10b981;">+$142K</div>
                  </div>
                  <div class="finance-kpi-mini">
                    <div class="finance-kpi-mini-label">Unrealized P&L</div>
                    <div class="finance-kpi-mini-value">+$89K</div>
                  </div>
                  <div class="finance-kpi-mini">
                    <div class="finance-kpi-mini-label">Margin Avail</div>
                    <div class="finance-kpi-mini-value">$45K</div>
                  </div>
                  <div class="finance-kpi-mini">
                    <div class="finance-kpi-mini-label">Day Gain</div>
                    <div class="finance-kpi-mini-value" style="color: #ef4444;">-$1.2K</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="finance-card" style="margin-top: 0;">
              <div class="finance-card-header">
                Recent Transactions
              </div>
              <table class="finance-transaction-table">
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AAPL (Apple Inc.)</td>
                    <td>Buy</td>
                    <td>Oct 24, 2023</td>
                    <td>$4,500.00</td>
                  </tr>
                  <tr>
                    <td>BTC (Bitcoin)</td>
                    <td>Sell</td>
                    <td>Oct 23, 2023</td>
                    <td>$12,450.00</td>
                  </tr>
                  <tr>
                    <td>VTI (Vanguard ETF)</td>
                    <td>Buy</td>
                    <td>Oct 20, 2023</td>
                    <td>$2,100.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div id="finance-doc-container"></div>
      
      <!-- Anti-Pattern Warning Box -->
      <div class="cat-warning-box">
        <div class="cat-warning-heading">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Anti-Patterns for Finance / Data / Analytics
        </div>
        <ul class="cat-doc-list" style="color: inherit;">
          ${catData.antipatterns.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>

      <!-- Quick Decision Table -->
      <div class="cat-decision-table-container">
        <div class="cat-decision-table-title">⚡ Quick Decision Guide</div>
        <table class="cat-decision-table">
          <thead>
            <tr>
              <th>If your priority is…</th>
              <th>Use this combo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Trust + clarity</td><td>Minimal + Data UI</td></tr>
            <tr><td>Modern fintech feel</td><td>Glassmorphism + Minimal</td></tr>
            <tr><td>Dashboard overview</td><td>Bento + Data UI</td></tr>
            <tr><td>Consumer-friendly</td><td>Neumorphism (Light) + Minimal</td></tr>
            <tr><td>Power user tool</td><td>Dark UI + Data Visualization</td></tr>
            <tr><td>Bold data statement</td><td>Minimal + Typography (Numbers Focus)</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Render options buttons
  const optionsGrid = document.getElementById('finance-options-grid');
  catData.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'style-btn';
    btn.dataset.key = opt.key;
    btn.innerHTML = `<span class="style-btn__label">${opt.label}</span>`;
    btn.onclick = () => switchFinanceOption(opt);
    optionsGrid.appendChild(btn);
  });

  // Auto-select first option
  currentFinanceOption = null;
  switchFinanceOption(catData.options[0]);
}

function switchFinanceOption(opt) {
  if (currentFinanceOption === opt.key) return;
  currentFinanceOption = opt.key;

  // Update buttons
  document.querySelectorAll('#finance-options-grid .style-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.key === opt.key);
  });

  const previewBox = document.getElementById('finance-preview-box');
  const previewLabel = document.getElementById('finance-preview-label');

  // Fade effect
  previewBox.style.opacity = '0';
  previewBox.style.transform = 'translateY(10px)';

  setTimeout(() => {
    previewLabel.textContent = opt.label;
    previewBox.className = 'finance-preview ' + opt.cssClass;
    previewBox.style.opacity = '1';
    previewBox.style.transform = 'translateY(0)';
  }, 200);

  renderFinanceDoc(opt.doc);
}

function renderFinanceDoc(doc) {
  const container = document.getElementById('finance-doc-container');

  container.innerHTML = `
    <div class="cat-doc-box">
      <div class="cat-doc-section">
        <div class="cat-doc-heading">🤔 Why This Works</div>
        <ul class="cat-doc-list">${doc.why.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">🎯 Best For</div>
        <div class="cat-doc-text"><strong>${doc.bestFor}</strong></div>
      </div>
      
      <div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:32px;">
        <div style="flex:1;min-width:250px;">
          <div class="cat-doc-heading">✅ Use When</div>
          <ul class="cat-doc-list">${doc.useWhen.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div style="flex:1;min-width:250px;">
          <div class="cat-doc-heading">🚫 Avoid When</div>
          <ul class="cat-doc-list">${doc.avoidWhen.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">⚙️ Key UI Elements</div>
        <ul class="cat-doc-list">${doc.keyUi.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">🎨 Visual Direction</div>
        <ul class="cat-doc-list">${doc.visual.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">⚠️ Common Mistakes</div>
        <ul class="cat-doc-list">${doc.mistakes.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">💡 Design Notes (Practical)</div>
        <ul class="cat-doc-list">${doc.notes.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">💻 Prompt (for vibe coding)</div>
        <div class="cat-prompt-box">${doc.prompt}</div>
      </div>
    </div>
  `;
}

function renderAiCategoryHTML(catData) {
  categoriesModeContainer.innerHTML = `
    <div class="cat-mode">
      <div class="cat-header">
        <h2 class="cat-header__title">${catData.title}</h2>
        <div class="cat-header__badges">
          <div class="cat-badge"><strong>👉 Covers:</strong> ${catData.covers}</div>
          <div class="cat-badge"><strong>🧠 Core Goal:</strong> ${catData.coreGoal}</div>
        </div>
      </div>
      
      <div class="cat-options-grid" id="ai-options-grid"></div>
      
      <div class="ai-preview-wrapper">
        <div class="preview-label">
          <span class="preview-label__dot"></span>
          Live Preview — <span id="ai-preview-label">Glassmorphism + Aurora</span>
        </div>
        
        <div class="ai-preview" id="ai-preview-box">
          <div class="ai-background"></div>
          
          <div class="ai-floating-panels">
            <div class="ai-panel ai-panel-1">
              <div class="ai-panel-title">System Status</div>
              <div class="ai-panel-content">All intelligence nodes online. Processing capacity at 94%.</div>
            </div>
            <div class="ai-panel ai-panel-2">
              <div class="ai-panel-title">Data Stream</div>
              <div class="ai-panel-content">Analyzing incoming vectors... 12.4M parameters updated.</div>
            </div>
          </div>

          <div class="ai-header">
            <div class="ai-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              Nexus AI
            </div>
            <div class="ai-nav">
              <span>Platform</span>
              <span>Models</span>
              <span>Docs</span>
            </div>
          </div>
          
          <div class="ai-hero">
            <h1 class="ai-headline">Next Generation Intelligence</h1>
            <p class="ai-subheadline">Build, deploy, and scale powerful AI models with our advanced developer platform. The future of software is here.</p>
            
            <div class="ai-prompt-box">
              <span class="ai-prompt-text">Describe the intelligent agent you want to build...</span>
              <button class="ai-prompt-btn">Generate</button>
            </div>
          </div>
          
          <div class="ai-feature-grid">
            <div class="ai-feature-card">
              <div class="ai-feature-icon">⚡</div>
              <div class="ai-feature-title">Ultra-Low Latency</div>
              <div class="ai-feature-desc">Global edge network ensures sub-50ms inference times anywhere.</div>
            </div>
            <div class="ai-feature-card">
              <div class="ai-feature-icon">🧠</div>
              <div class="ai-feature-title">Contextual Memory</div>
              <div class="ai-feature-desc">Persistent vector storage for deep, long-term conversation states.</div>
            </div>
            <div class="ai-feature-card">
              <div class="ai-feature-icon">🛡️</div>
              <div class="ai-feature-title">Enterprise Security</div>
              <div class="ai-feature-desc">SOC2 compliant, end-to-end encrypted model execution pipelines.</div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="ai-doc-container"></div>
      
      <!-- Anti-Pattern Warning Box -->
      <div class="cat-warning-box">
        <div class="cat-warning-heading">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Anti-Patterns for AI / Tech / Startup
        </div>
        <ul class="cat-doc-list" style="color: inherit;">
          ${catData.antipatterns.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>

      <!-- Quick Decision Table -->
      <div class="cat-decision-table-container">
        <div class="cat-decision-table-title">⚡ Quick Decision Guide</div>
        <table class="cat-decision-table">
          <thead>
            <tr>
              <th>If your priority is…</th>
              <th>Use this combo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Premium hero impression</td><td>Glassmorphism + Aurora Gradient</td></tr>
            <tr><td>Feature showcase clarity</td><td>Bento + AI Illustration</td></tr>
            <tr><td>Developer credibility</td><td>Dark UI + Neon (Cyberpunk Lite)</td></tr>
            <tr><td>Visual wow factor</td><td>3D Elements + Minimal</td></tr>
            <tr><td>Living, intelligent feel</td><td>Glass + Motion UI</td></tr>
            <tr><td>Next-gen innovation</td><td>Spatial UI + Floating Cards</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
  
  // Render options buttons
  const optionsGrid = document.getElementById('ai-options-grid');
  catData.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'style-btn';
    btn.dataset.key = opt.key;
    btn.textContent = opt.label;
    btn.onclick = () => switchAiOption(opt);
    optionsGrid.appendChild(btn);
  });
  
  // Auto-select first option
  currentAiOption = null;
  switchAiOption(catData.options[0]);
}

function switchAiOption(opt) {
  if (currentAiOption === opt.key) return;
  currentAiOption = opt.key;
  
  // Update buttons
  document.querySelectorAll('#ai-options-grid .style-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.key === opt.key);
  });
  
  const previewBox = document.getElementById('ai-preview-box');
  const previewLabel = document.getElementById('ai-preview-label');
  
  // Fade effect
  previewBox.style.opacity = '0';
  previewBox.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    previewLabel.textContent = opt.label;
    previewBox.className = 'ai-preview ' + opt.cssClass;
    
    previewBox.style.opacity = '1';
    previewBox.style.transform = 'translateY(0)';
  }, 200);
  
  renderAiDoc(opt.doc);
}

function renderAiDoc(doc) {
  const container = document.getElementById('ai-doc-container');
  
  container.innerHTML = `
    <div class="cat-doc-box">
      <div class="cat-doc-section">
        <div class="cat-doc-heading">🤔 Why This Works</div>
        <ul class="cat-doc-list">${doc.why.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">🎯 Best For</div>
        <div class="cat-doc-text"><strong>${doc.bestFor}</strong></div>
      </div>
      
      <div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:32px;">
        <div style="flex:1;min-width:250px;">
          <div class="cat-doc-heading">✅ Use When</div>
          <ul class="cat-doc-list">${doc.useWhen.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div style="flex:1;min-width:250px;">
          <div class="cat-doc-heading">🚫 Avoid When</div>
          <ul class="cat-doc-list">${doc.avoidWhen.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">⚙️ Key UI Elements</div>
        <ul class="cat-doc-list">${doc.keyUi.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">🎨 Visual Direction</div>
        <ul class="cat-doc-list">${doc.visual.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">⚠️ Common Mistakes</div>
        <ul class="cat-doc-list">${doc.mistakes.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">💡 Design Notes (Practical)</div>
        <ul class="cat-doc-list">${doc.notes.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      
      <div class="cat-doc-section">
        <div class="cat-doc-heading">💻 Prompt (for vibe coding)</div>
        <div class="cat-prompt-box">${doc.prompt}</div>
      </div>
    </div>
  `;
}
