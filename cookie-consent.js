/**
 * MICA Supply LTD. — Cookie Consent Banner
 * PIPEDA Compliant | Version 1.0 | 2026
 */

(function () {
  const STORAGE_KEY = 'mica_cookie_consent';
  const CONSENT_VERSION = '1.0';

  // Already consented? Do nothing.
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.version === CONSENT_VERSION) return;
  } catch (e) {}

  // ── STYLES ──
  const style = document.createElement('style');
  style.textContent = `
    #mica-cookie-banner {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      z-index: 9999;
      background: rgba(5, 10, 15, 0.97);
      border-top: 1px solid rgba(14,165,233,0.2);
      backdrop-filter: blur(16px);
      padding: 1.4rem 3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;
      font-family: 'Inter', sans-serif;
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #mica-cookie-banner.visible {
      transform: translateY(0);
    }
    #mica-cookie-banner .cb-left {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      flex: 1;
      min-width: 260px;
    }
    #mica-cookie-banner .cb-icon {
      width: 36px; height: 36px;
      background: rgba(14,165,233,0.1);
      border: 1px solid rgba(14,165,233,0.2);
      border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; font-size: 1rem; margin-top: 2px;
    }
    #mica-cookie-banner .cb-text-tag {
      font-family: 'DM Mono', 'Courier New', monospace;
      font-size: 0.62rem;
      color: #0ea5e9;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 0.3rem;
    }
    #mica-cookie-banner .cb-text-title {
      font-size: 0.88rem;
      font-weight: 600;
      color: #f0f6ff;
      margin-bottom: 0.25rem;
    }
    #mica-cookie-banner .cb-text-body {
      font-size: 0.78rem;
      color: rgba(148,163,184,0.85);
      line-height: 1.55;
    }
    #mica-cookie-banner .cb-text-body a {
      color: #0ea5e9;
      text-decoration: none;
    }
    #mica-cookie-banner .cb-text-body a:hover {
      text-decoration: underline;
    }
    #mica-cookie-banner .cb-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-shrink: 0;
      flex-wrap: wrap;
    }
    #mica-cookie-banner .cb-btn-accept {
      background: #0ea5e9;
      color: #fff;
      border: none;
      padding: 0.65rem 1.5rem;
      border-radius: 4px;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
      box-shadow: 0 0 20px rgba(14,165,233,0.25);
      white-space: nowrap;
    }
    #mica-cookie-banner .cb-btn-accept:hover {
      background: #38bdf8;
      transform: translateY(-1px);
      box-shadow: 0 0 30px rgba(14,165,233,0.4);
    }
    #mica-cookie-banner .cb-btn-essential {
      background: transparent;
      color: #64748b;
      border: 1px solid rgba(100,116,139,0.3);
      padding: 0.65rem 1.2rem;
      border-radius: 4px;
      font-size: 0.78rem;
      font-weight: 500;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: color 0.2s, border-color 0.2s;
      white-space: nowrap;
    }
    #mica-cookie-banner .cb-btn-essential:hover {
      color: #94a3b8;
      border-color: rgba(148,163,184,0.4);
    }
    #mica-cookie-banner .cb-btn-close {
      background: transparent;
      border: none;
      color: #475569;
      cursor: pointer;
      padding: 0.4rem;
      border-radius: 4px;
      display: flex; align-items: center; justify-content: center;
      transition: color 0.2s;
      flex-shrink: 0;
    }
    #mica-cookie-banner .cb-btn-close:hover { color: #94a3b8; }

    /* Toast confirmation */
    #mica-cookie-toast {
      position: fixed;
      bottom: 1.5rem; right: 1.5rem;
      z-index: 10000;
      background: rgba(10,21,32,0.97);
      border: 1px solid rgba(34,197,94,0.3);
      border-radius: 6px;
      padding: 0.9rem 1.2rem;
      display: flex; align-items: center; gap: 0.7rem;
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem; color: #94a3b8;
      box-shadow: 0 8px 30px rgba(0,0,0,0.4);
      transform: translateY(20px); opacity: 0;
      transition: transform 0.3s ease, opacity 0.3s ease;
      pointer-events: none;
    }
    #mica-cookie-toast.show {
      transform: translateY(0); opacity: 1;
    }
    #mica-cookie-toast .toast-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 8px rgba(34,197,94,0.6);
      flex-shrink: 0;
    }

    @media (max-width: 768px) {
      #mica-cookie-banner {
        padding: 1.2rem 1.5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.2rem;
      }
      #mica-cookie-banner .cb-actions {
        width: 100%;
      }
      #mica-cookie-banner .cb-btn-accept,
      #mica-cookie-banner .cb-btn-essential {
        flex: 1;
        justify-content: center;
        text-align: center;
      }
    }
  `;
  document.head.appendChild(style);

  // ── BANNER HTML ──
  const banner = document.createElement('div');
  banner.id = 'mica-cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.innerHTML = `
    <div class="cb-left">
      <div class="cb-icon">🍪</div>
      <div>
        <div class="cb-text-tag">// Privacy Notice · PIPEDA</div>
        <div class="cb-text-title">We use cookies on this site</div>
        <div class="cb-text-body">
          We use <strong style="color:#f0f6ff">Google Analytics</strong> to understand how visitors interact with our website.
          No advertising cookies. No personal data sold.
          By clicking "Accept All", you consent to analytics cookies in accordance with Canada's
          <a href="/privacy.html">PIPEDA privacy framework</a>.
        </div>
      </div>
    </div>
    <div class="cb-actions">
      <button class="cb-btn-essential" id="cbEssential">Essential Only</button>
      <button class="cb-btn-accept" id="cbAccept">Accept All</button>
      <button class="cb-btn-close" id="cbClose" aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  `;
  document.body.appendChild(banner);

  // ── TOAST ──
  const toast = document.createElement('div');
  toast.id = 'mica-cookie-toast';
  toast.innerHTML = `<div class="toast-dot"></div><span id="cbToastMsg">Preferences saved</span>`;
  document.body.appendChild(toast);

  // Slide in after short delay
  setTimeout(() => banner.classList.add('visible'), 600);

  function showToast(msg) {
    document.getElementById('cbToastMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function dismiss(analyticsEnabled) {
    // Save consent
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: CONSENT_VERSION,
      analytics: analyticsEnabled,
      timestamp: new Date().toISOString()
    }));

    // If declined analytics, disable GA
    if (!analyticsEnabled && typeof window.gtag === 'function') {
      window['ga-disable-G-95048H8LK1'] = true;
    }

    // Slide out banner
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => banner.remove(), 400);

    // Show confirmation toast
    showToast(analyticsEnabled ? '✓ All cookies accepted' : '✓ Essential cookies only');
  }

  document.getElementById('cbAccept').addEventListener('click', () => dismiss(true));
  document.getElementById('cbEssential').addEventListener('click', () => dismiss(false));
  document.getElementById('cbClose').addEventListener('click', () => dismiss(false));

})();
