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
