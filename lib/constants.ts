// ─────────────────────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update copy, numbers, links.
// ─────────────────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Compare',      href: '#compare' },
  { label: 'Free Tools',   href: '#tools' },
  { label: 'Services',     href: '#services' },
] as const

export const TRUST_STATS = [
  { value: '5%',   label: 'Publisher\'s\ncommission' },
  { value: '$0',   label: 'Sign-up\nfee' },
  { value: '100%', label: 'Catalog\nregistered' },
  { value: 'You',  label: 'Who controls\nyour music', accent: true },
] as const

export const STEPS = [
  {
    num: '01 — Register',
    title: 'We register your songs',
    desc: 'We handle all registrations with ASCAP, BMI, SOCAN, The MLC, Harry Fox Agency, Music Reports, and SoundExchange on your behalf.',
    accent: 'coral' as const,
  },
  {
    num: '02 — Collect',
    title: 'Royalties go directly to you',
    desc: "Because we're Co-Publishers, collection societies pay you directly. We don't hold your money for 90 days and take a cut first.",
    accent: 'mint' as const,
  },
  {
    num: '03 — Keep',
    title: '5% to us, the rest is yours',
    desc: "Of the Publisher's Share (50% of total royalties), you keep 45% and we take 5%. No hidden fees, no 90-day holds.",
    accent: 'navy' as const,
  },
] as const

export const COMPARISON_ROWS = [
  {
    label: "Publisher's Commission",
    us: '5%',
    tunecore: '15%',
    cdbaby: '15%',
    songtrust: '15%',
    major: '25–50%',
    highlight: true,
  },
  {
    label: 'Sign Up Fee',
    us: '$0',
    tunecore: '$75',
    cdbaby: '$0',
    songtrust: '$100',
    major: 'N/A',
  },
  {
    label: 'Who Controls Your Music',
    us: 'You',
    tunecore: 'Them',
    cdbaby: 'Them',
    songtrust: 'Them',
    major: 'Definitely not you',
    bold: true,
  },
  {
    label: "Publisher's Share Goes To",
    us: '45% You · 5% Us',
    tunecore: '50% Them',
    cdbaby: '50% Them',
    songtrust: '50% Them',
    major: '50% Them',
  },
  {
    label: '% of Catalog Registered',
    us: '100%',
    tunecore: 'Good Luck',
    cdbaby: 'Good Luck',
    songtrust: 'Good Luck',
    major: 'Who Knows',
  },
  {
    label: 'Royalty Hold Period',
    us: 'None',
    tunecore: '90 days',
    cdbaby: '90 days',
    songtrust: '90 days',
    major: 'Months',
  },
] as const

export const TOOLS = [
  {
    name: 'Find My ISRC',
    desc: 'Paste any Spotify track link and instantly retrieve the ISRC code. Essential for publishing registration and catalog transfers.',
    href: '/tools/find-my-isrc',
    icon: 'isrc' as const,
  },
  {
    name: 'Find My UPC',
    desc: 'Paste any TIDAL album link to get the UPC code. Moving to a new distributor? You\'ll need this first.',
    href: '/tools/find-my-upc',
    icon: 'upc' as const,
  },
  {
    name: 'Royalty Calculator',
    desc: 'Estimate your streaming income. See the split between streaming royalties, PRO royalties (ASCAP/BMI), and MLC royalties.',
    href: '/tools/royalty-calculator',
    icon: 'calculator' as const,
  },
  {
    name: 'Writer Search',
    desc: 'Search any songwriter by name, email, or IPI number to find their catalog and publishing information.',
    href: '/writer-search',
    icon: 'search' as const,
  },
] as const

export const SERVICES = [
  'ASCAP, BMI & SOCAN Registration',
  'The MLC (Mechanical Licensing Collective)',
  'Music Reports Registration',
  'Harry Fox Agency',
  'SoundExchange Registration',
  'Royalties Paid Directly To You',
  'Full Catalog Management Dashboard',
  '100% of Your Catalog Registered',
] as const

export const COMPARISON_BARS = [
  { name: 'The Plug (Us)',       pct: 5,  barPct: 10, color: 'coral'    },
  { name: 'TuneCore / CD Baby',  pct: 15, barPct: 30, color: 'mint'     },
  { name: 'Major Publishers',    pct: 50, barPct: 75, color: 'muted'    },
] as const
