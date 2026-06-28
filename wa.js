(function () {
  // ===== MICA WhatsApp 悬浮按钮 =====
  var PHONE   = "17788758392"; // +1 778-875-8392（国际格式，无 + 无空格）
  var PREFILL = "Hi MICA Supply, I'd like a quote for "; // 预填话术，可改
  var href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(PREFILL);

  var css =
    '.mica-wa{position:fixed;right:22px;bottom:22px;z-index:9999;display:flex;align-items:center;gap:10px;text-decoration:none;font-family:inherit;}'
    + '.mica-wa-btn{width:58px;height:58px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(0,0,0,.25);transition:transform .18s,box-shadow .18s;}'
    + '.mica-wa:hover .mica-wa-btn{transform:scale(1.06);box-shadow:0 8px 26px rgba(0,0,0,.32);}'
    + '.mica-wa-btn svg{width:32px;height:32px;}'
    + '.mica-wa-label{background:#fff;color:#0b1f3a;font-size:13px;font-weight:600;padding:9px 14px;border-radius:24px;box-shadow:0 4px 14px rgba(0,0,0,.18);white-space:nowrap;opacity:0;transform:translateX(8px);pointer-events:none;transition:opacity .18s,transform .18s;}'
    + '.mica-wa:hover .mica-wa-label{opacity:1;transform:translateX(0);}'
    + '@media(max-width:600px){.mica-wa-label{display:none;}.mica-wa{right:16px;bottom:16px;}.mica-wa-btn{width:54px;height:54px;}}';

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var a = document.createElement("a");
  a.className = "mica-wa";
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", "Chat with MICA Supply on WhatsApp");
  a.innerHTML =
    '<span class="mica-wa-label">Chat with us on WhatsApp</span>'
    + '<span class="mica-wa-btn"><svg viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M16.04 4C9.93 4 4.98 8.95 4.98 15.06c0 2.13.6 4.12 1.64 5.81L4.5 27.5l6.8-2.08a11 11 0 0 0 4.74 1.07h.01c6.11 0 11.06-4.95 11.06-11.06C27.11 8.95 22.15 4 16.04 4zm0 20.2h-.01a9.13 9.13 0 0 1-4.65-1.27l-.33-.2-3.86 1.18 1.2-3.76-.22-.34a9.1 9.1 0 0 1-1.4-4.85c0-5.04 4.1-9.14 9.15-9.14 2.44 0 4.74.95 6.46 2.68a9.08 9.08 0 0 1 2.68 6.47c0 5.04-4.1 9.14-9.16 9.14zm5.02-6.84c-.27-.14-1.63-.8-1.88-.9-.25-.09-.43-.13-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.36-.82-.73-1.36-1.62-1.52-1.9-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.85.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.52-.32z"/></svg></span>';

  function mount(){ document.body.appendChild(a); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
