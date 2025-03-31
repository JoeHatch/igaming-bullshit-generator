const verbs = [
  "Revolutionize", "Gamify", "Empower", "Amplify", "Disrupt", "Streamline",
  "Optimize", "Monetize", "Orchestrate", "Leverage", "Scale", "Unlock"
];

const adjectives = [
  "frictionless", "AI-driven", "real-time", "data-backed", "crypto-friendly",
  "white-label", "player-centric", "modular", "personalized", "omnichannel",
  "automated", "regulatory-compliant"
];

const nouns = [
  "retention strategy", "affiliate stack", "player acquisition funnel",
  "KYC pipeline", "CRM journey", "lifetime value matrix", "revenue optimization model",
  "real-time dashboard", "bonus engine", "postback system", "payment orchestration layer",
  "gamification layer", "compliance framework", "iGaming ecosystem"
];

const endings = [
  "to maximize ROI", "at scale", "across multiple jurisdictions",
  "for seamless onboarding", "without increasing overhead", "for next-gen affiliates",
  "to unlock exponential growth", "with zero tech debt", "to enhance user journeys"
];

function generateBullshit() {
  const v = verbs[Math.floor(Math.random() * verbs.length)];
  const a = adjectives[Math.floor(Math.random() * adjectives.length)];
  const n = nouns[Math.floor(Math.random() * nouns.length)];
  const e = endings[Math.floor(Math.random() * endings.length)];

  document.getElementById("bs-output").innerText = `${v} your ${a} ${n} ${e}.`;
}
