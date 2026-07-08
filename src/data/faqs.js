/**
 * Frequently asked questions — single source of truth.
 *
 * Consumed by:
 *   - src/pages/FAQ.jsx        → renders the visible Q&A list
 *   - src/seo/seoData.js       → derives the FAQPage JSON-LD from the same array
 *
 * Answers are kept plain-text (no markup) so they can be dropped verbatim into
 * schema.org `acceptedAnswer.text`, which is what search and AI answer engines
 * extract. Keep them concise and self-contained — each answer should stand on
 * its own if quoted in isolation.
 */
export const faqs = [
    {
        q: 'What is retained search, and how is it different from contingency recruiting?',
        a: 'Retained search is an exclusive, fee-committed engagement in which a firm owns a role end to end — market mapping, outreach, evaluation, and offer negotiation — and is paid across the life of the search rather than only on placement. Contingency recruiting is non-exclusive and pays a fee only if the recruiter happens to place a candidate first, which incentivizes speed and volume over fit. Retained search is the right model for senior, technical, or confidential hires where a mis-hire is expensive and the qualified talent pool is small.',
    },
    {
        q: 'How do recruiting fees work, and what does a retained search cost?',
        a: 'Retained search is typically priced as a percentage of the hired candidate’s first-year cash compensation, invoiced in stages across the engagement rather than as a single success fee. Because the model is exclusive and fully dedicated, the firm commits senior bandwidth to the search from day one. Exact structure depends on role seniority, scarcity of the talent, and scope. Sycamore Creek scopes fees per engagement during an initial conversation.',
    },
    {
        q: 'How long does an executive or technical search take?',
        a: 'A focused retained search generally runs 6 to 10 weeks from kickoff to signed offer, depending on the scarcity of the skill set and the speed of the client’s interview process. Sycamore Creek’s completed engagements average a 58-day time to fill. Highly specialized or cleared roles can take longer because the qualified population is smaller and clearances add lead time.',
    },
    {
        q: 'What does it mean to be a "boutique" recruiting firm?',
        a: 'A boutique firm runs a small number of engagements with senior practitioners handling each search personally, rather than routing work to junior associates. At Sycamore Creek, the principal, Owen Howe, runs every engagement from scoping through offer close, with no handoff. The trade-off is intentional: fewer clients, deeper attention, and direct accountability for the outcome.',
    },
    {
        q: 'Do you recruit for cleared and defense-sector roles?',
        a: 'Yes. Cleared and defense engineering is a core specialization, including FPGA, RF, reverse engineering, and research roles that require active security clearances. These searches demand discretion and a network of candidates who are rarely on the open market, which is where a retained, relationship-driven model has a structural advantage over job-board sourcing.',
    },
    {
        q: 'What is embedded recruiting, and when does it make sense?',
        a: 'Embedded recruiting is when an outside recruiter integrates directly into your team for a defined period — working inside your ATS and Slack, attending standups, and running intake with hiring managers — functioning as an extension of your internal talent function without the cost of a full-time hire. It fits startups scaling quickly after a funding round, teams without an internal recruiter, or any organization facing a hiring surge its current team cannot absorb.',
    },
    {
        q: 'What is a "passive candidate," and why does it matter?',
        a: 'A passive candidate is someone highly qualified who is not actively job hunting and will never see or respond to a job posting. The strongest engineers and leaders are usually passive. Reaching them requires discreet, credible, direct outreach and a relationship of trust — not an inbound funnel. Sourcing passive talent is the central discipline of retained search.',
    },
    {
        q: 'What roles and industries do you specialize in?',
        a: 'Sycamore Creek focuses on technical and leadership hiring for high-growth startups and established institutions: FPGA and hardware engineering, AI/ML and LLM-native engineering, reverse engineering, mobile and product, and senior engineering leadership. Sector concentration is strongest in defense and cleared research, AI, and venture-backed technology companies.',
    },
    {
        q: 'Where are you based, and do you work with companies outside DC and NYC?',
        a: 'Sycamore Creek is based in Washington, D.C., with a strong presence in New York City, and places candidates nationwide. The DC and NYC roots reflect deep networks in the defense, research, and technology communities in those markets, but engagements are not geographically limited.',
    },
    {
        q: 'What happens if a placed candidate doesn’t work out?',
        a: 'The structured, scorecard-driven evaluation process is designed to prevent mis-hires before they happen, which is reflected in an 87% offer-acceptance rate and 96% search-completion rate across completed engagements. Every retained engagement includes follow-through support during onboarding and the critical first weeks. Specific guarantee terms are defined per engagement at the outset.',
    },
];
