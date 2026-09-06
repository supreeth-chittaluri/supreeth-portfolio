const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const sitePath = (path: string) => `${basePath}${path}`;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience/" },
  { label: "Projects", href: "/projects/" },
  { label: "Stack", href: "/stack/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" }
];

export const snapshots = [
  { label: "University of Michigan", value: "Computer Science · Junior" },
  { label: "OneStream Software", value: "AI Product and Engineering Intern" },
  { label: "Ann Arbor, Michigan", value: "Based in" }
];

export const education = [
  { code: "EECS 201", title: "Computer Science Pragmatics" },
  { code: "EECS 203", title: "Discrete Mathematics" },
  { code: "EECS 280", title: "Programming and Introductory Data Structures" },
  { code: "EECS 281", title: "Data Structures and Algorithms" },
  { code: "EECS 370", title: "Introduction to Computer Organization" },
  { code: "EECS 376", title: "Foundations of Computer Science" },
  { code: "EECS 482", title: "Introduction to Operating Systems" },
  { code: "EECS 484", title: "Database Management Systems" },
  { code: "EECS 485", title: "Web Systems" },
  { code: "EECS 491", title: "Introduction to Distributed Systems" },
  { code: "EECS 493", title: "User Interface Development" },
  { code: "EECS 497", title: "Human Centered Software Design and Development" },
  { code: "EECS 498 016", title: "Applied Agentic Software Engineering" },
  { code: "ROB 102", title: "Introduction to AI Programming" },
  { code: "MATH 214", title: "Applied Linear Algebra" },
  { code: "MATH 215", title: "Multivariable and Vector Calculus" }
];

export const experiences = [
  {
    role: "AI Product and Engineering Intern",
    company: "OneStream Software",
    location: "Birmingham, Michigan",
    period: "Summer 2026",
    summary: "Worked within AI and Operational Analytics on AI focused engineering and production software, contributing across product thinking, implementation, and developer workflows inside the Xperiflow platform.",
    details: ["AI and Operational Analytics", "Production software", "Cross functional product work"]
  },
  {
    role: "Software Engineering Intern",
    company: "First Class Rentals",
    location: "Chicago, Illinois",
    summary: "Built pricing and operations tools for more than 20 rental units, combining booking data, demand forecasting, reporting automation, and practical decisions that helped increase revenue by 15 percent and occupancy from 90 percent to 95 percent.",
    details: ["Python and SQL", "More than 100 booking records", "5 point occupancy increase"]
  },
  {
    role: "Data Analytics Intern",
    company: "HCL Global Systems",
    location: "Farmington Hills, Michigan",
    summary: "Automated reporting across more than 450 employee records and built operational dashboards that improved compliance tracking by 30 percent while saving more than 10 hours of manual work each week.",
    details: ["Python and Pandas", "More than 450 records", "30 percent compliance improvement"]
  }
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  why: string;
  image?: string;
  imageAlt?: string;
  stack: string[];
  live?: string;
  github?: string;
  status?: string;
  published: boolean;
  challenge?: string;
  solution?: string;
  verification?: string;
  evidence: string[];
};

export const projects: Project[] = [
  {
    slug: "a2transit",
    title: "a2transit",
    category: "Transit routing",
    summary: "One trip planner for Ann Arbor's two bus networks",
    description: "Combines TheRide and University of Michigan bus schedules, walking connections, service calendars, live vehicles, and delays into one door to door route search.",
    why: "Ann Arbor riders move between two overlapping bus systems that expose separate maps, schedules, and service updates. For a Michigan student traveling between campus and the city, one trip can require several disconnected searches.",
    image: "/projects/a2transit.webp",
    imageAlt: "a2transit planning a route across a live map of Ann Arbor",
    stack: ["Python", "FastAPI", "PostgreSQL", "PostGIS", "Redis", "React", "MapLibre", "GTFS"],
    live: "https://a2transit.vercel.app",
    github: "https://github.com/supreeth-chittaluri/a2transit",
    published: true,
    challenge: "Adding walking connections exposed two subtle routing errors. One itinerary arrived at the correct time but reconstructed a destination two miles away. Another produced an impossible walk whose existence depended on iteration order.",
    solution: "The final design separates ride, walk, and ready parent state, then runs walking relaxation from a stable snapshot of vehicle arrivals. Both routing engines consume the same walking graph and are compared against each other on real transit data.",
    verification: "The router uses 8,308 walking links, including 1,456 connections between agencies. A timetable takes about 330 milliseconds to build, while a cached query completes in about 4 milliseconds.",
    evidence: ["Two independent routing engines", "8,308 walking links", "About 4 millisecond cached queries", "Real service calendar testing"]
  },
  {
    slug: "pulse",
    title: "Pulse",
    category: "Market intelligence",
    summary: "Finds stock discussion spikes that are unusual for each ticker",
    description: "Collects market conversations, identifies ticker mentions, scores sentiment, and compares each symbol with its own rolling baseline before surfacing a spike.",
    why: "Popular stocks generate constant discussion, so raw mention counts confuse background noise with meaningful movement. Pulse measures each symbol against its own history and keeps the resulting signal available without charging the public.",
    image: "/projects/pulse.webp",
    imageAlt: "Pulse dashboard showing market sentiment and mention volume",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "React", "Gemini", "Server Sent Events"],
    live: "https://pulse-b8zd.onrender.com",
    github: "https://github.com/supreeth-chittaluri/pulse",
    published: true,
    challenge: "The ingestion queue survived restarts, but useful signals still depended on someone pressing a button. Old posts could accumulate safely while the public product quietly became stale.",
    solution: "The final pipeline performs free local ticker filtering before Gemini, persists that decision, schedules scoring every 30 minutes, and coordinates manual and automatic work through one database lock. Every model call, including retries, reserves space under the same daily request budget.",
    verification: "Pulse filters about 45 percent of ingested posts before the model, operates at no ongoing cost, and records source publication time so an older queued post never appears to be fresh news.",
    evidence: ["262 passing tests", "45 percent filtered before Gemini", "400 request daily ceiling", "No ongoing operating cost"]
  },
  {
    slug: "undrift",
    title: "Undrift",
    category: "Developer analytics",
    summary: "Turns coding history into an evidence backed view of skill freshness",
    description: "Classifies public GitHub activity and translates it into explainable freshness, depth, momentum, and skill decay forecasts.",
    why: "A résumé records what someone has learned, but it cannot show what has been practiced recently or which skills may deserve attention next. Undrift turns public development history into a more current and explainable view.",
    image: "/projects/undrift.webp",
    imageAlt: "Undrift dashboard showing skill freshness, depth, momentum, and forecasts",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "GitHub API", "Claude"],
    live: "https://undrift-supreeth-chittaluri.vercel.app",
    github: "https://github.com/supreeth-chittaluri/undrift",
    published: true,
    challenge: "A single freshness score treated a deeply established skill that had gone quiet like a technology touched twice last week. The same number could demand opposite advice.",
    solution: "The scoring model separates freshness, depth, and momentum. Thin evidence produces no momentum claim, and the forecast solves directly for when a skill will cross a freshness threshold.",
    verification: "The evidence view links every score back to the commits that produced it. Batching later reduced classification cost for 302 commits from $1.70 to $0.09 while preserving a deterministic fallback.",
    evidence: ["Three independent scoring axes", "Evidence linked to commits", "302 commit classification run", "Classification cost reduced to $0.09"]
  },
  {
    slug: "miniredis",
    title: "MiniRedis",
    category: "Systems engineering",
    summary: "A Redis style server built to understand concurrency from the inside",
    description: "Serves concurrent TCP clients with expiration, LRU eviction, append only persistence, and six familiar Redis commands.",
    why: "I am building MiniRedis because reading about caches and locks is different from designing one, breaking it under load, and measuring the result.",
    stack: ["C++20", "TCP and IP", "Multithreading", "CMake"],
    status: "Coming soon",
    published: false,
    evidence: ["Concurrent TCP clients", "Reader and writer locks", "Expiration and eviction", "Append only persistence"]
  }
];

const icon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@2.16.0/icons/${path}`;

export const stackGroups = [
  { name: "Languages", skills: [
    { name: "C++", icon: icon("cplusplus/cplusplus-original.svg") },
    { name: "Python", icon: icon("python/python-original.svg") },
    { name: "TypeScript", icon: icon("typescript/typescript-original.svg") },
    { name: "JavaScript", icon: icon("javascript/javascript-original.svg") },
    { name: "SQL", icon: icon("postgresql/postgresql-original.svg") }
  ] },
  { name: "Frontend", skills: [
    { name: "React", icon: icon("react/react-original.svg") },
    { name: "Next.js", icon: icon("nextjs/nextjs-original.svg") },
    { name: "HTML", icon: icon("html5/html5-original.svg") },
    { name: "CSS", icon: icon("css3/css3-original.svg") }
  ] },
  { name: "Backend and APIs", skills: [
    { name: "FastAPI", icon: icon("fastapi/fastapi-original.svg") },
    { name: "Node.js", icon: icon("nodejs/nodejs-original.svg") },
    { name: "Express", icon: icon("express/express-original.svg") }
  ], extra: "REST APIs · Server Sent Events · WebSockets" },
  { name: "Data and Storage", skills: [
    { name: "PostgreSQL", icon: icon("postgresql/postgresql-original.svg") },
    { name: "Redis", icon: icon("redis/redis-original.svg") },
    { name: "SQLite", icon: icon("sqlite/sqlite-original.svg") },
    { name: "Pandas", icon: icon("pandas/pandas-original.svg") },
    { name: "NumPy", icon: icon("numpy/numpy-original.svg") }
  ], extra: "PostGIS · Supabase · SQLAlchemy" },
  { name: "Machine Learning", skills: [
    { name: "PyTorch", icon: icon("pytorch/pytorch-original.svg") },
    { name: "TensorFlow", icon: icon("tensorflow/tensorflow-original.svg") }
  ], extra: "Gemini · Applied AI · Statistical detection" },
  { name: "Infrastructure and Tools", skills: [
    { name: "Docker", icon: icon("docker/docker-original.svg") },
    { name: "AWS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark.svg") },
    { name: "Google Cloud", icon: icon("googlecloud/googlecloud-original.svg") },
    { name: "Git", icon: icon("git/git-original.svg") },
    { name: "GitHub", icon: icon("github/github-original.svg") },
    { name: "CMake", icon: icon("cmake/cmake-original.svg") },
    { name: "Linux", icon: icon("linux/linux-original.svg") }
  ] }
];

export const aboutStories = [
  { id: "friends", files: ["friends-1.webp", "friends-2.webp"], alts: ["Supreeth at an amusement park with friends", "Supreeth and friends together in the city at night"], caption: "Always love hanging out with my friends" },
  { id: "pizza", files: ["pizza.webp"], alts: ["Pizza at L’Industrie Pizzeria in New York City"], caption: "Always chasing the next great meal, this one’s at L’Industrie Pizzeria in NYC" },
  { id: "basketball", files: ["basketball.webp"], alts: ["An outdoor basketball hoop under the evening sky"], caption: "Play basketball often" },
  { id: "travel", files: ["la-sunset-1.webp", "la-sunset-2.webp"], alts: ["An orange sunset over the Pacific Ocean in Los Angeles", "A sunset over the hills of Los Angeles"], caption: "Love traveling, these are some sunsets from LA, California" },
  { id: "big-house", files: ["big-house.webp"], alts: ["Michigan football from the front row at the Big House"], caption: "Love catching games at the Big House" },
  { id: "concert", files: ["concert.webp"], alts: ["A concert arena filled with orange lights"], caption: "Big fan of live music" }
];
