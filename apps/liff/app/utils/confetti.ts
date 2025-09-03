/* Pure CSS confetti burst utility for WebView-safe environments (no external deps)
 * Usage: triggerConfettiFromButton();
 */
export type ConfettiOptions = {
  spreadDeg?: number; // degrees, default 110
  basePieces?: number; // default 100 (auto-scales by cores/viewport)
  originSelector?: string; // default '[data-confetti-button="true"]'
  colors?: string[];
};

export function triggerConfettiFromButton(opts: ConfettiOptions = {}): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) return; // do nothing when reduced motion is preferred

  // Inject CSS once
  const styleSel = "style[data-confetti-css]";
  let styleEl = document.querySelector(styleSel) as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.setAttribute("data-confetti-css", "true");
    styleEl.textContent = `
@keyframes confetti-up-down {
  0% {
    transform: translate3d(0, 0, 0) rotate(var(--rot, 0deg));
    opacity: 0.95;
    animation-timing-function: cubic-bezier(.12,.62,.2,1);
  }
  45% {
    transform: translate3d(calc(var(--dx, 0px) * 0.7 + var(--sx, 0px) * 0.5), var(--upY, -60vh), 0) rotate(var(--rotMid, 540deg));
    opacity: 1;
    animation-timing-function: cubic-bezier(.4,0,.6,.2);
  }
  75% {
    transform: translate3d(calc(var(--dx, 0px) * 1.1 - var(--sx, 0px) * 0.3), calc(var(--downY, 100vh) * 0.55), 0) rotate(var(--rotEnd, 900deg));
    opacity: .98;
    animation-timing-function: cubic-bezier(.2,0,.2,1);
  }
  100% {
    transform: translate3d(calc(var(--dx, 0px) * 1.6), var(--downY, 100vh), 0) rotate(var(--rotEnd, 900deg));
    opacity: .9;
  }
}
.confetti-piece {
  position: absolute;
  opacity: .95;
  will-change: transform, opacity;
  /* drop-shadow disabled for perf */
}
@media (prefers-reduced-motion: reduce) {
  .confetti-piece {
    animation: none !important;
    display: none !important;
  }
}
`;
    document.head.appendChild(styleEl);
  }

  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.zIndex = "10000";
  overlay.style.pointerEvents = "none";
  overlay.style.overflow = "hidden";
  document.body.appendChild(overlay);

  const colors =
    opts.colors ?? ["#FFC700", "#FF3D00", "#00E0FF", "#7C4DFF", "#4CAF50", "#FF6F91"];

  const cores =
    typeof navigator !== "undefined"
      ? (navigator as Navigator).hardwareConcurrency ?? 4
      : 4;
  const smallViewport = window.innerWidth <= 360 || window.innerHeight <= 640;
  const base = opts.basePieces ?? 100;
  let pieces = base;
  if (cores <= 2) pieces = Math.round(base * 0.6);
  else if (cores <= 4 || smallViewport) pieces = Math.round(base * 0.8);

  // Compute origin from the footer button center
  const selector = opts.originSelector ?? '[data-confetti-button="true"]';
  const btn = document.querySelector(selector) as HTMLElement | null;
  const rect = btn?.getBoundingClientRect();
  const originLeft = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
  const originTop = rect
    ? rect.top + rect.height / 2
    : Math.min(window.innerHeight * 0.85, window.innerHeight - 80);

  // Setup cleanup/event tracking
  let finishedCount = 0;
  const cleanup = () => {
    try {
      document.body.removeChild(overlay);
    } catch (_e) {
      /* noop */
    }
  };
  const onPieceDone = () => {
    finishedCount++;
    if (finishedCount >= pieces) cleanup();
  };

  const vh = window.innerHeight / 100;
  const spreadDeg = opts.spreadDeg ?? 110;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < pieces; i++) {
    const d = document.createElement("div");
    d.className = "confetti-piece";
    const w = 6 + Math.floor(Math.random() * 8);
    const h = 8 + Math.floor(Math.random() * 10);
    const upVh = 50 + Math.random() * 20; // 50-70vh
    const downVh = 95 + Math.random() * 20; // 95-115vh
    const angle = ((Math.random() * spreadDeg) - spreadDeg / 2) * (Math.PI / 180);
    const vertPx = (upVh + downVh * 0.6) * vh;
    const dxPx = Math.tan(angle) * vertPx * 1.15;
    const xJitter = (Math.random() * 12) - 6;
    const sway = dxPx * 0.22;
    d.style.width = `${w}px`;
    d.style.height = `${h}px`;
    d.style.left = `${originLeft + xJitter}px`;
    d.style.top = `${originTop}px`;
    d.style.backgroundColor = colors[i % colors.length];
    d.style.borderRadius = `${Math.random() < 0.3 ? 50 : 4}%`;
    d.style.transformOrigin = `${20 + Math.floor(Math.random() * 60)}% ${20 + Math.floor(Math.random() * 60)}%`;
    const duration = 1600 + Math.random() * 500;
    const delay = 0; // single burst
    const rot = Math.floor(Math.random() * 360);
    const rotMid = rot + (360 + Math.floor(Math.random() * 360));
    const rotEnd = rotMid + (180 + Math.floor(Math.random() * 360));
    d.style.setProperty("--dx", `${dxPx.toFixed(1)}px`);
    d.style.setProperty("--upY", `-${upVh.toFixed(1)}vh`);
    d.style.setProperty("--downY", `${downVh.toFixed(1)}vh`);
    d.style.setProperty("--rot", `${rot}deg`);
    d.style.setProperty("--rotMid", `${rotMid}deg`);
    d.style.setProperty("--rotEnd", `${rotEnd}deg`);
    d.style.setProperty("--sx", `${sway.toFixed(1)}px`);
    d.addEventListener("animationend", onPieceDone, { once: true });
    d.style.animation = `confetti-up-down ${duration}ms linear ${delay}ms forwards`;
    frag.appendChild(d);
  }

  overlay.appendChild(frag);

  const maxDuration = 2800;
  const fallback = () => {
    if (finishedCount < pieces) cleanup();
  };
  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(() => setTimeout(fallback, maxDuration));
  } else {
    setTimeout(fallback, maxDuration);
  }
}
