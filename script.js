const verbs = ["Revolutionize", "Gamify", "Empower", "Amplify", "Disrupt", "Streamline", "Optimize", "Monetize", "Orchestrate", "Leverage", "Scale", "Unlock"];
const adjectives = ["frictionless", "AI-driven", "real-time", "data-backed", "crypto-friendly", "white-label", "player-centric", "modular", "personalized", "omnichannel", "automated", "regulatory-compliant"];
const nouns = ["retention strategy", "affiliate stack", "player acquisition funnel", "KYC pipeline", "CRM journey", "lifetime value matrix", "revenue optimization model", "real-time dashboard", "bonus engine", "postback system", "payment orchestration layer", "gamification layer", "compliance framework", "iGaming ecosystem"];
const endings = ["to maximize ROI", "at scale", "across multiple jurisdictions", "for seamless onboarding", "without increasing overhead", "for next-gen affiliates", "to unlock exponential growth", "with zero tech debt", "to enhance user journeys"];

function generateBullshit() {
  const v = verbs[Math.floor(Math.random() * verbs.length)];
  const a = adjectives[Math.floor(Math.random() * adjectives.length)];
  const n = nouns[Math.floor(Math.random() * nouns.length)];
  const e = endings[Math.floor(Math.random() * endings.length)];
  const phrase = `${v} your ${a} ${n} ${e}.`;
  document.getElementById("bs-output").innerText = phrase;

  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, scalar: 1.2 });

  const today = new Date().toISOString().slice(0, 10);
  const updates = {
    '/total': firebase.database.ServerValue.increment(1),
    [`/today/${today}`]: firebase.database.ServerValue.increment(1),
    [`/buzzwords/${v}`]: firebase.database.ServerValue.increment(1),
    [`/buzzwords/${a}`]: firebase.database.ServerValue.increment(1),
    [`/buzzwords/${n}`]: firebase.database.ServerValue.increment(1)
  };
  db.ref().update(updates);
}

function listenForStats() {
  const today = new Date().toISOString().slice(0, 10);
  db.ref('/total').on('value', snap => {
    document.getElementById('total-count').innerText = snap.val() ?? 0;
  });
  db.ref(`/today/${today}`).on('value', snap => {
    document.getElementById('today-count').innerText = snap.val() ?? 0;
  });
  db.ref('/buzzwords').on('value', snap => {
    const data = snap.val() || {};
    const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
    const [topWord] = sorted[0] || ['N/A', 0];
    document.getElementById('popular-buzzword').innerText = `"${topWord}"`;
  });
}

function copyBullshit() {
  const text = document.getElementById("bs-output").innerText;
  const icon = document.getElementById("copy-icon");
  const copyText = document.getElementById("copy-text");
  navigator.clipboard.writeText(text).then(() => {
    icon.classList.replace("fa-clipboard", "fa-check");
    icon.classList.replace("fa-regular", "fa-solid");
    copyText.classList.remove("opacity-0", "translate-y-1");
    copyText.classList.add("opacity-100", "translate-y-0");
    setTimeout(() => {
      icon.classList.replace("fa-check", "fa-clipboard");
      icon.classList.replace("fa-solid", "fa-regular");
      copyText.classList.remove("opacity-100", "translate-y-0");
      copyText.classList.add("opacity-0", "translate-y-1");
    }, 1500);
  }).catch(err => {
    console.error("Copy failed", err);
  });
}

listenForStats();
