export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Signal Lost - Ngide Interactive</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=DM+Sans:wght@400;500&display=swap');
      
      :root {
        --background: oklch(0.105 0 0);
        --foreground: oklch(0.955 0.006 85);
        --card: oklch(0.16 0 0);
        --border: oklch(0.955 0.006 85 / 18%);
        --muted: oklch(0.62 0.006 85);
      }
      
      * { margin: 0; padding: 0; box-sizing: border-box; border-color: var(--border); }
      
      body {
        font-family: 'DM Sans', -apple-system, sans-serif;
        background: var(--background);
        color: var(--foreground);
        display: grid;
        place-items: center;
        min-height: 100vh;
        padding: 1.5rem;
        position: relative;
        overflow: hidden;
      }
      
      .noise {
        position: fixed;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        opacity: 0.035;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.9'/%3E%3C/svg%3E");
      }
      
      .vignette {
        position: fixed;
        inset: 0;
        z-index: 2;
        background: radial-gradient(circle at center, transparent 0%, var(--background) 70%);
        pointer-events: none;
      }
      
      .card {
        position: relative;
        z-index: 10;
        max-width: 32rem;
        width: 100%;
        text-align: center;
        padding: 3rem 2rem;
        border: 1px solid var(--border);
        background: var(--card);
      }
      
      .status {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-family: 'DM Mono', monospace;
        font-size: 10px;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: 2rem;
      }
      
      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ef4444;
        animation: pulse 2s ease-in-out infinite;
      }
      
      @keyframes pulse {
        50% { opacity: 0.25; }
      }
      
      h1 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0 0 1rem;
        line-height: 1.1;
      }
      
      .outline {
        -webkit-text-stroke: 1px var(--foreground);
        color: transparent;
      }
      
      p {
        color: var(--muted);
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0 0 2rem;
      }
      
      .actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      
      a, button {
        padding: 0.75rem 1.5rem;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        text-decoration: none;
        border: 1px solid transparent;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .primary {
        background: var(--foreground);
        color: var(--background);
        border: none;
      }
      
      .primary:hover {
        background: oklch(0.76 0.006 85);
      }
      
      .secondary {
        background: transparent;
        color: var(--foreground);
        border-color: var(--border);
      }
      
      .secondary:hover {
        background: var(--card);
        border-color: var(--foreground);
      }
      
      .coordinates {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'DM Mono', monospace;
        font-size: 9px;
        text-transform: uppercase;
        color: var(--muted);
        opacity: 0.5;
        white-space: nowrap;
      }
      
      @media (max-width: 480px) {
        .card { padding: 2rem 1.5rem; }
        h1 { font-size: 1.5rem; }
      }
    </style>
  </head>
  <body>
    <div class="noise"></div>
    <div class="vignette"></div>
    <div class="card">
      <div class="status">
        <span>Signal Lost</span>
        <div class="status-dot"></div>
      </div>
      <h1>Transmission <span class="outline">Failed</span></h1>
      <p>Something went wrong on our end. The signal was interrupted during transmission. You can try refreshing or return to base.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Reconnect</button>
        <a class="secondary" href="/">Return to Base</a>
      </div>
      <div class="coordinates">NGI-ERR // DEPOK SECTOR // 6.4025° S // 106.8188° E</div>
    </div>
  </body>
</html>`;
}
