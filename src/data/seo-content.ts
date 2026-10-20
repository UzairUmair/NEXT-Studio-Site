export const serviceDetails: Record<string, { heading: string; intro: string; audience: string; process: string[]; questions: [string, string][]; projectSlugs: string[] }> = {
  'web-development': {
    heading: 'Business websites built to be clear, fast and easy to use',
    intro: 'A custom website gives people a useful way to understand your business and get in touch. We plan the page structure, responsive interface and contact journey around the agreed scope.',
    audience: 'For small businesses and independent teams that need a new online presence or a clearer replacement for an existing site.',
    process: ['Review the audience, content and site goals.', 'Agree pages, features, content responsibilities and a quotation.', 'Design and build responsive pages, then review on phones and desktop.', 'Check links, accessibility and launch details before handoff.'],
    questions: [['Is hosting included?', 'Hosting, domain registration and paid tools are quoted separately unless your proposal includes them.'], ['Will I be able to request more pages?', 'Yes. Additional pages can be scoped and quoted before they are built.']],
    projectSlugs: ['cineverse'],
  },
  'application-development': {
    heading: 'Web application and MVP development for focused workflows',
    intro: 'An MVP is a first usable version of a product with a deliberately limited feature set. We define the workflow and interface before estimating the build, so the scope matches the problem.',
    audience: 'For founders and teams testing a product idea or replacing a manual process with a web-based tool.',
    process: ['Map users, tasks and the minimum useful feature set.', 'Agree screens, integrations, responsibilities and a quotation.', 'Build and review the selected workflows in stages.', 'Test the agreed flow and prepare a handoff or next-phase scope.'],
    questions: [['Is this a native mobile app?', 'The listed package is for a web application. Native iOS or Android development needs a separate scope.'], ['Are integrations included?', 'Only integrations specified in the written proposal are included.']],
    projectSlugs: ['freelancerflow'],
  },
  'graphic-design': {
    heading: 'Graphic design and brand identity with a clear visual direction',
    intro: 'We develop practical identity assets and graphics that work together across the agreed touchpoints. The proposal sets out formats, revision rounds and usage needs before design begins.',
    audience: 'For new ventures shaping a first identity and existing brands that need more consistent visual materials.',
    process: ['Review the audience, references and places the design will appear.', 'Agree concepts, deliverables, revisions and a quotation.', 'Develop visual directions and refine the chosen route.', 'Prepare the agreed files for handoff.'],
    questions: [['Are printing costs included?', 'No. Printing and production are separate unless explicitly included in the proposal.'], ['What files will I receive?', 'The final formats and usage rights are specified in your written quotation.']],
    projectSlugs: ['pure-roots', 'next-studio-identity'],
  },
  seo: {
    heading: 'Technical and on-page SEO for useful, crawlable pages',
    intro: 'Search engine optimization starts with pages that load, can be crawled, and answer the right questions. We audit the current site and prioritize fixes to page structure, metadata, links and content.',
    audience: 'For sites with unclear search visibility, technical barriers or service pages that do not explain their offer well.',
    process: ['Review crawlability, indexing signals and existing page content.', 'Agree a prioritized scope and measurement approach.', 'Implement the defined technical and on-page changes.', 'Report completed work and remaining account-dependent checks.'],
    questions: [['Can you guarantee rankings?', 'No. Rankings and traffic depend on search engines, competition and factors outside a single project.'], ['Do you write new content?', 'Content production is scoped separately unless the written proposal includes it.']],
    projectSlugs: [],
  },
  'geo-aio': {
    heading: 'GEO and AIO: clearer content for AI-assisted search',
    intro: 'Generative engine optimization and AI optimization describe work that helps search and AI-assisted systems understand a real business. We focus on accessible pages, clear service explanations, consistent identity and evidence-backed structured data.',
    audience: 'For businesses that want an honest assessment of how their existing site presents its services to search engines and AI-assisted discovery tools.',
    process: ['Audit crawl access, visible content and entity consistency.', 'Identify unsupported claims, missing context and technical barriers.', 'Recommend specific content and structured-data improvements.', 'Define checks that can be measured in available search tools.'],
    questions: [['Does this guarantee AI citations?', 'No. AI systems choose what to use independently; these changes improve clarity and eligibility, not placement.'], ['Is special AI schema required?', 'No special AI-only schema is required. Relevant, accurate page content and normal search foundations come first.']],
    projectSlugs: [],
  },
};

export const projectDetails: Record<string, { goal: string; scope: string; outcome: string; relatedService: string; imageAlt: string; galleryAlt?: string }> = {
  cineverse: { goal: 'Make browsing film and TV titles feel visually engaging while keeping discovery and a personal library easy to understand.', scope: 'Personal movie discovery interface. The founder’s source portfolio documents HTML, CSS, JavaScript, Firebase and TMDB API for this work.', outcome: 'A published personal project and live demo. It is a discovery interface, not a streaming platform or a client engagement.', relatedService: 'web-development', imageAlt: 'CineVerse movie discovery interface with featured title artwork and dark navigation', galleryAlt: 'CineVerse detail screen showing movie discovery content' },
  freelancerflow: { goal: 'Explore how client, project, task, deadline and invoice information could sit in one calmer workspace.', scope: 'Personal web application concept and interface mockups. The founder’s source portfolio lists HTML, CSS, JavaScript and Firebase.', outcome: 'A personal project with a live demo. The images are portfolio mockups and do not imply a public production dashboard.', relatedService: 'application-development', imageAlt: 'FreelancerFlow workspace mockup showing a freelancer project overview', galleryAlt: 'FreelancerFlow detail mockup showing productivity workflow panels' },
  'pure-roots': { goal: 'Test a bright, fruit-led visual direction for a beverage identity across a social campaign touchpoint.', scope: 'Concept identity exploration shown in the owner’s original social post mockup.', outcome: 'A design concept for portfolio presentation; no commercial launch or verified product claims are asserted.', relatedService: 'graphic-design', imageAlt: 'Pure Roots orange beverage identity concept in a social media mockup' },
  'next-studio-identity': { goal: 'Create a recognizable visual language for NEXT Studio itself.', scope: 'In-house logo, banner and workspace presentations using the existing violet, magenta and cyan identity.', outcome: 'A studio identity used in this website and portfolio presentation.', relatedService: 'graphic-design', imageAlt: 'NEXT Studio brand banner with angular logo and violet digital styling', galleryAlt: 'Additional NEXT Studio logo and workspace presentation' },
  'new-year-study': { goal: 'Practice editorial hierarchy, dimensional type and restrained color.', scope: 'Personal graphic design exercise supplied with the owner’s portfolio assets.', outcome: 'A portfolio study, not commissioned client work.', relatedService: 'graphic-design', imageAlt: '2026 New Year typography and illustration poster study' },
};
