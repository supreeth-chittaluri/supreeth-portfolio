export type BlogSection = { heading: string; paragraphs: string[]; points?: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  projectSlug?: string;
  externalLink?: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "job-search-agent-grok-bot",
    title: "I built a job search agent in two hours and it placed second",
    date: "September 3, 2026",
    category: "Hackathon",
    readTime: "7 minute read",
    summary: "How I turned a repetitive internship search into a Grok Bot that found roles, submitted applications, and built the follow up path around each company",
    externalLink: "https://luma.com/ephlo70e",
    sections: [
      {
        heading: "A problem I already understood",
        paragraphs: [
          "At the SpaceXAI at UMich Grok Bot Build Night, the prompt was open: build a Grok Bot for a personalized task. I chose the internship search because I knew the friction personally. Finding a role is only the first step. The real process is scattered across company career pages, job boards, repeated forms, and a second research loop for finding the right people after an application is submitted.",
          "I wanted one agent to treat that work as a connected process. It would search broadly for relevant software and AI internships, judge each role against my background, complete the application path, then identify people at the company who could be useful to contact afterward. The result ranked second among the bots built that night."
        ]
      },
      {
        heading: "Searching the web was only the beginning",
        paragraphs: [
          "A broad search returns volume, not relevance. The same opening can appear on a company site, a job board, and several reposting sites. Titles are inconsistent, locations are described differently, and some pages remain indexed after the position has closed. A useful agent has to turn that mess into a decision rather than a longer list for the user to clean up.",
          "I shaped the bot around my actual profile: a junior studying Computer Science at Michigan with experience in backend systems, applied AI, and full stack products. That context gave the bot a basis for ranking opportunities instead of matching only on a keyword such as software. The important output was not simply a URL. It was a role that made sense for me and a clear reason it belonged in the application queue."
        ],
        points: ["Search across multiple sources", "Remove repeated listings", "Compare requirements with my background", "Preserve the source application page"]
      },
      {
        heading: "The application was not the end of the workflow",
        paragraphs: [
          "Most job tools stop when they find the posting. I designed the bot around what happens next. After submitting an application, it searched for people connected to the role and company, such as engineers, recruiters, and University of Michigan alumni. It organized those potential contacts beside the application so follow up did not become a separate research project days later.",
          "That changed the bot from a search demo into a personal workflow. Each opportunity carried its application status, the relevant company context, and a practical next action. The system could move from discovering a role to preparing the human connection that often determines whether an application is ever noticed."
        ]
      },
      {
        heading: "Building under a real time limit",
        paragraphs: [
          "The event ran for two hours, so every feature had to earn its place. I focused on the complete path instead of polishing one isolated step. Search without application support would still leave most of the work untouched. Applications without follow up research would reproduce the same disconnected process I was trying to fix.",
          "The fastest way to make the idea credible was to demonstrate continuity. A role entered the system once, moved through evaluation and application, and left with a record of who might be worth contacting. That end to end story made the bot easy to understand during judging because the value appeared in the workflow rather than in a list of features."
        ]
      },
      {
        heading: "What second place meant to me",
        paragraphs: [
          "Placing second was exciting, but the more useful result was seeing how quickly a personal frustration could become a working agent. I did not need to invent a futuristic use case. I needed to notice where I was repeatedly moving information between websites and decide which parts required judgment, which parts required memory, and which parts could become automatic.",
          "If I continue the project, I would add stronger review controls before each submission, a durable application history, and better feedback from past decisions. The bot should learn which roles I accepted or rejected and use that evidence to improve future rankings. The hackathon version proved the workflow. The next version would make its judgment more transparent and dependable."
        ]
      }
    ]
  },
  {
    slug: "pulse-durable-but-stale",
    title: "The queue worked, but the product stayed stale",
    date: "September 5, 2026",
    category: "Pulse",
    readTime: "8 minute read",
    summary: "Durability prevented data loss, but it also hid the fact that useful work still depended on a visitor pressing a button",
    projectSlug: "pulse",
    sections: [
      {
        heading: "A safe queue can still produce a bad product",
        paragraphs: [
          "Pulse collects market conversations and looks for ticker activity that is unusual relative to each symbol's own history. The ingestion side was durable. New posts were stored, repeated posts were ignored, and a restart did not erase pending work. From an infrastructure perspective, the queue was behaving correctly.",
          "From a user's perspective, the system could still be stale. Sentiment scoring happened when somebody pressed Score Now. If nobody visited, the queue kept every post safely while the dashboard stopped reflecting current conversation. Nothing was lost, yet the product failed at the reason it existed."
        ]
      },
      {
        heading: "Removing the queue would have solved the wrong problem",
        paragraphs: [
          "It was tempting to score every post immediately or avoid storing pending work at all. That would make the interface look current during normal operation, but a provider error, restart, or exhausted model quota would turn a temporary delay into permanent data loss.",
          "The queue was necessary. The missing piece was automatic progress with clear limits. I kept durable state and divided the work into a free local stage and a model stage. The first stage uses a ticker expression and the SEC symbol list to reject posts that cannot produce a signal. About 45 percent of ingested posts finish without spending a model request."
        ]
      },
      {
        heading: "One budget for every path",
        paragraphs: [
          "Automatic scoring runs every 30 minutes and can process up to 60 candidates. The public button remains available as a catch up control, but it is no longer responsible for keeping the service alive. Manual and scheduled work acquire the same database lock so two server instances cannot start overlapping runs.",
          "The harder limit is the model quota. A batch that fails validation can produce retry calls, so budgeting only at the beginning of a run is not enough. Every individual Gemini request must reserve quota before it leaves the process. Scheduled work, manual work, and validation retries all draw from one 400 request daily ceiling aligned with the provider's reset window."
        ]
      },
      {
        heading: "The timestamp told another lie",
        paragraphs: [
          "After automation started draining the older queue, the live feed showed those signals as if they had just happened. The interface was using the time a signal was written instead of the time the source post was published. A correct processing timestamp became misleading product copy.",
          "I joined each signal back to the source publication time and exposed that value to the frontend. Queue age, scoring time, and event time now remain separate concepts. That distinction matters in any system where delayed processing is possible, especially when a user is deciding whether information is current."
        ]
      },
      {
        heading: "What the redesign taught me",
        paragraphs: [
          "Reliability is not only preserving work. It is making progress, staying inside external limits, and describing system state honestly. A durable queue without a worker is storage. A scheduler without a shared lock is a race. A quota check that ignores retries is a suggestion. A timestamp without a defined meaning can make old information look new.",
          "Pulse became more dependable when those concerns moved from assumptions into explicit state. The dashboard now distinguishes work awaiting free filtering from work awaiting Gemini, exposes the next scheduled run, and shows the remaining request budget. The system does not merely continue running. It can explain what it is doing."
        ],
        points: ["262 passing tests", "45 percent resolved before Gemini", "400 request daily ceiling", "No ongoing operating cost"]
      }
    ]
  },
  {
    slug: "a2transit-route-two-miles-away",
    title: "The route arrived on time and two miles away",
    date: "September 3, 2026",
    category: "a2transit",
    readTime: "9 minute read",
    summary: "A routing result looked correct until I reconstructed the journey and discovered that two pieces of state meant completely different things",
    projectSlug: "a2transit",
    sections: [
      {
        heading: "The result that passed at first glance",
        paragraphs: [
          "a2transit uses two routing engines. RAPTOR works directly with rounds of transit trips, while the reference engine searches a time expanded graph. They are intentionally different implementations because agreement between independent approaches is more valuable than a second copy of the same mistake.",
          "When I expanded walking connections across the network, one query returned an itinerary with the correct arrival time. That sounded like success. Reconstructing the actual legs told a different story: the final arrival was about two miles from the requested destination. The numerical result was right while the explanation of how the rider got there was impossible."
        ]
      },
      {
        heading: "One map was carrying three meanings",
        paragraphs: [
          "The bug came from treating every predecessor as the same kind of state. A ride can physically arrive at a stop. A walk can make another stop reachable. A stop can also be ready for boarding after the required transfer time. Those facts are related, but they are not interchangeable.",
          "RAPTOR stored the ride that arrived and the walk that made a later ride possible in one parent map. During reconstruction, the latest write could replace the physical path with boarding readiness. The algorithm still knew when the destination became reachable, but it no longer retained a truthful account of where the rider had traveled."
        ]
      },
      {
        heading: "Iteration order created a second failure",
        paragraphs: [
          "A separate walking pass read from the arrivals array while it was also updating that array. If a walk improved a stop early in the loop, that newly improved stop could immediately become the source of another walk in the same round. The outcome depended on which edge happened to be visited first.",
          "That produced an impossible 800 meter chain even though the data contained no direct walking connection for it. This kind of error is dangerous because a normal test can pass repeatedly when collection order remains stable. Expanding from a handful of declared transfers to 8,308 generated walking links finally created enough variation to expose it."
        ]
      },
      {
        heading: "The fix made illegal state difficult to represent",
        paragraphs: [
          "I split the predecessor state into separate ride, walk, and ready structures. Reconstruction now asks the correct source for each kind of leg instead of interpreting one overloaded value. I also changed walking relaxation to read from a snapshot of vehicle arrivals. A walking improvement can affect the next stage, but it cannot become a second walking origin inside the same pass.",
          "The stronger decision was structural. Rather than adding a condition that discouraged a second walk, the algorithm now makes that transition unavailable. Correctness is easier to maintain when an invalid route cannot be expressed by the state model."
        ]
      },
      {
        heading: "How I trusted the result again",
        paragraphs: [
          "Both engines now read the same walking table and are compared on real service data. Cross agency routes, walking only trips, service holidays, and arbitrary map coordinates travel through the same verification path. A route is not considered correct only because its arrival time matches. Its legs must also form a continuous physical journey.",
          "The episode changed what I look for in algorithm tests. A scalar answer can hide a broken explanation. For systems that return paths, schedules, or plans, the witness matters as much as the final score."
        ],
        points: ["8,308 walking links", "1,456 cross agency connections", "Two independent routing engines", "Real transit feed verification"]
      }
    ]
  },
  {
    slug: "undrift-freshness-was-not-enough",
    title: "A recent commit does not make a skill strong",
    date: "September 2, 2026",
    category: "Undrift",
    readTime: "8 minute read",
    summary: "My first score confused recent activity with real experience, so I replaced one confident number with three narrower answers",
    projectSlug: "undrift",
    sections: [
      {
        heading: "The first score was mathematically clean",
        paragraphs: [
          "Undrift began with an exponential decay model. Each relevant commit contributed weight that decreased with age, and the total was mapped to a score between zero and one hundred. The scale was absolute, so every skill could decay together instead of forcing one technology to remain at the top.",
          "The formula was consistent, replayable across past dates, and easy to explain. It was also answering more than the evidence allowed. A developer who used Java every day for three years and stopped eight months ago could receive a similar score to someone who touched Java twice last week. Those situations need opposite advice."
        ]
      },
      {
        heading: "Freshness and strength are different claims",
        paragraphs: [
          "The original number mixed two questions: how recently was this skill used, and how much evidence exists that it is a real skill? Recency must decay. Accumulated evidence should not disappear because a calendar moved forward.",
          "I separated the model into freshness, depth, and momentum. Freshness describes recent weighted activity. Depth describes the amount and spread of evidence across time and repositories. Momentum compares recent usage with an earlier window to show whether activity is increasing or decreasing."
        ]
      },
      {
        heading: "A correct formula can still make a dishonest chart",
        paragraphs: [
          "For momentum, ordinary percentage change fails when a skill is new because the prior window can be zero. I used the difference between recent and prior activity divided by their sum, producing a bounded value from negative one hundred to positive one hundred.",
          "That solves the arithmetic problem but not the evidence problem. One new commit would still produce positive one hundred. The dashboard therefore reports no momentum value when fewer than three commits exist across the two windows. Refusing to show a number is sometimes the most accurate result."
        ]
      },
      {
        heading: "Forecasting without pretending to know the future",
        paragraphs: [
          "Undrift does not predict what somebody will code next. It answers a narrower question: if no new evidence arrives, when will the existing freshness curve cross a selected threshold? Because the decay formula is known, that date can be solved directly rather than estimated with a simulation.",
          "The forecast and the dashboard colors share the same thresholds. That matters because a card should not say a skill starts fading in forty days while its visual state changes on a different rule. Presentation is part of the model contract."
        ]
      },
      {
        heading: "Evidence before confidence",
        paragraphs: [
          "Every score links back to the commits, repositories, classifier reasons, and confidence values that produced it. A visitor can ask why Undrift thinks somebody knows Python and inspect the actual evidence instead of trusting a decorative percentage.",
          "The broader lesson was that a product can become more useful by claiming less. Three focused measurements are more honest than one impressive score when each number has a clear meaning and a visible trail back to evidence."
        ],
        points: ["Freshness, depth, and momentum", "No trend claim for thin evidence", "Direct threshold forecast", "Every score linked to source commits"]
      }
    ]
  }
];
