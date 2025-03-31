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

  const phrase = `${v} your ${a} ${n} ${e}.`;
  document.getElementById("bs-output").innerText = phrase;

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    scalar: 1.2
  });

  if (typeof gtag === 'function') {
    gtag('event', 'generate_click', {
      event_category: 'interaction',
      event_label: phrase
    });
  }
}

function copyBullshit() {
  const text = document.getElementById("bs-output").innerText;
  const icon = document.getElementById("copy-icon");
  const copyText = document.getElementById("copy-text");

  navigator.clipboard.writeText(text).then(() => {
    // Switch to check icon + show "Copied"
    icon.classList.remove("fa-clipboard", "fa-regular");
    icon.classList.add("fa-check", "fa-solid");

    copyText.classList.remove("opacity-0", "translate-y-1");
    copyText.classList.add("opacity-100", "translate-y-0");

    // Revert after 1.5s
    setTimeout(() => {
      icon.classList.remove("fa-check", "fa-solid");
      icon.classList.add("fa-clipboard", "fa-regular");

      copyText.classList.add("opacity-0", "translate-y-1");
      copyText.classList.remove("opacity-100", "translate-y-0");
    }, 1500);
  }).catch(err => {
    alert("Copy failed");
    console.error(err);
  });
}
