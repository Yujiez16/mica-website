/**
 * MICA Supply — Language Switcher
 * Supports: EN, ZH (Simplified Chinese), AR (Arabic, RTL), DE (German)
 * Usage: Add <script src="lang.js"></script> before </body> on any page.
 *        Add data-i18n="key" attributes to translatable elements.
 */

(function() {

var LANGS = {
  en: { label: 'EN', name: 'English', dir: 'ltr', font: null },
  zh: { label: '中文', name: '简体中文', dir: 'ltr', font: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' },
  ar: { label: 'عربي', name: 'العربية', dir: 'rtl', font: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap' },
  de: { label: 'DE', name: 'Deutsch', dir: 'ltr', font: null }
};

var T = {

  /* ── NAVBAR ── */
  'nav.home':       { en: 'Home',           zh: '首页',     ar: 'الرئيسية',  de: 'Startseite' },
  'nav.products':   { en: 'Products',       zh: '产品',     ar: 'المنتجات',  de: 'Produkte' },
  'nav.about':      { en: 'About Us',       zh: '关于我们', ar: 'من نحن',    de: 'Über uns' },
  'nav.compliance': { en: 'Compliance',     zh: '合规',     ar: 'الامتثال',  de: 'Compliance' },
  'nav.faq':        { en: 'FAQ',            zh: '常见问题', ar: 'الأسئلة',   de: 'FAQ' },
  'nav.rfq':        { en: 'Request Quote',  zh: '询价',     ar: 'طلب عرض',  de: 'Angebot' },

  /* ── FOOTER ── */
  'footer.copy':    { en: '© 2026 MICA Supply LTD. · Vancouver, BC, Canada', zh: '© 2026 MICA Supply LTD. · 温哥华，不列颠哥伦比亚省，加拿大', ar: '© 2026 MICA Supply LTD. · فانكوفر، كندا', de: '© 2026 MICA Supply LTD. · Vancouver, BC, Kanada' },

  /* ── INDEX PAGE ── */
  'index.tag':       { en: '// Enterprise Hardware Broker', zh: '// 企业硬件经纪商', ar: '// وسيط أجهزة المؤسسات', de: '// Enterprise-Hardware-Broker' },
  'index.h1.line1':  { en: 'Enterprise Hardware', zh: '企业级硬件', ar: 'أجهزة المؤسسات', de: 'Enterprise-Hardware' },
  'index.h1.line2':  { en: 'Sourced. Verified.', zh: '精准采购，严格核验，', ar: 'مُصدَّرة. مُوثَّقة.', de: 'Beschafft. Verifiziert.' },
  'index.h1.line3':  { en: 'Delivered.', zh: '高效交付。', ar: 'مُسلَّمة.', de: 'Geliefert.' },
  'index.subtitle':  { en: 'AI accelerators, server CPUs, and enterprise components — sourced globally, delivered compliantly across North America, the UAE, Europe, and Asia.', zh: 'AI加速器、服务器CPU及企业级组件——全球采购，合规交付至北美、阿联酋、欧洲及亚洲。', ar: 'مسرّعات الذكاء الاصطناعي ووحدات المعالجة المركزية للخوادم ومكونات المؤسسات — مصادر عالمية، توصيل متوافق عبر أمريكا الشمالية والإمارات وأوروبا وآسيا.', de: 'KI-Beschleuniger, Server-CPUs und Enterprise-Komponenten – global beschafft, compliant geliefert nach Nordamerika, den Emiraten, Europa und Asien.' },
  'index.cta.rfq':   { en: 'Submit RFQ', zh: '提交询价', ar: 'إرسال طلب', de: 'Anfrage senden' },
  'index.cta.products': { en: 'Browse Inventory', zh: '浏览库存', ar: 'تصفح المخزون', de: 'Inventar ansehen' },

  /* ── PRODUCTS PAGE ── */
  'products.tag':    { en: '// Current Inventory', zh: '// 当前库存', ar: '// المخزون الحالي', de: '// Aktueller Bestand' },
  'products.h1':     { en: 'Hardware', zh: '硬件', ar: 'الأجهزة', de: 'Hardware' },
  'products.h1.span':{ en: 'Inventory', zh: '库存', ar: 'المخزون', de: 'Inventar' },
  'products.sub':    { en: 'Factory New (NIB) and Working Pull enterprise hardware. All items subject to BIS/EAR compliance review. Submit RFQ for current pricing and lead time.', zh: '全新库存（NIB）及工作状态翻新企业级硬件。所有商品须经BIS/EAR合规审核。提交询价获取最新报价及交货周期。', ar: 'أجهزة المؤسسات جديدة في الصندوق (NIB) ومسحوبة صالحة للعمل. جميع العناصر خاضعة لمراجعة الامتثال BIS/EAR. أرسل طلب عرض للحصول على التسعير والمدة.', de: 'Fabrikneue (NIB) und geprüfte Enterprise-Hardware. Alle Artikel unterliegen der BIS/EAR-Compliance-Prüfung. RFQ einreichen für aktuelle Preise und Lieferzeit.' },
  'products.filter': { en: '// Filter by category', zh: '// 按类别筛选', ar: '// التصفية حسب الفئة', de: '// Nach Kategorie filtern' },
  'products.all':    { en: 'All', zh: '全部', ar: 'الكل', de: 'Alle' },
  'products.rfq':    { en: 'RFQ', zh: '询价', ar: 'طلب', de: 'Anfrage' },
  'products.nib':    { en: 'Factory New — NIB', zh: '全新库存 — NIB', ar: 'جديد في العلبة', de: 'Fabrikneu — NIB' },
  'products.pulls':  { en: 'Working Pull', zh: '工作状态翻新', ar: 'مسحوب صالح', de: 'Geprüfter Pull' },
  'products.bom.tag':   { en: '// Full BOM Fulfillment', zh: '// 完整BOM满足', ar: '// تلبية قائمة المواد الكاملة', de: '// Vollständige BOM-Erfüllung' },
  'products.bom.title': { en: "Don't see your part number?", zh: '没有找到您的料号？', ar: 'لم تجد رقم القطعة؟', de: 'Teilenummer nicht gefunden?' },
  'products.bom.sub':   { en: 'Submit your P/N list or full BOM — we source across global networks including EOL and allocated items.', zh: '提交您的料号列表或完整BOM — 我们在全球网络中采购，包括停产和限量商品。', ar: 'أرسل قائمة أرقام القطع أو قائمة المواد الكاملة — نستورد عبر شبكات عالمية تشمل العناصر المتوقفة والمخصصة.', de: 'P/N-Liste oder vollständige BOM einreichen — wir beschaffen weltweit, auch EOL- und allozierte Artikel.' },
  'products.bom.btn':   { en: 'Submit BOM / P/N', zh: '提交BOM/料号', ar: 'إرسال قائمة المواد', de: 'BOM / P/N einreichen' },

  /* ── CONTACT PAGE ── */
  'contact.tag':     { en: '// Request for Quote', zh: '// 询价请求', ar: '// طلب عرض سعر', de: '// Angebotsanfrage' },
  'contact.h1.line1':{ en: 'Tell Us What', zh: '告诉我们', ar: 'أخبرنا', de: 'Teilen Sie uns mit' },
  'contact.h1.span': { en: 'Need.', zh: '您的需求。', ar: 'ما تحتاجه.', de: 'Was Sie brauchen.' },
  'contact.sub':     { en: 'Submit your Part Number, BOM, or general hardware requirement. We respond with pricing, availability, and lead time within 24 hours.', zh: '提交您的料号、BOM或一般硬件需求。我们将在24小时内回复报价、库存及交货周期。', ar: 'أرسل رقم القطعة أو قائمة المواد أو متطلبات الأجهزة العامة. نرد بالتسعير والتوفر ووقت التسليم خلال 24 ساعة.', de: 'Teilenummer, BOM oder allgemeine Hardwareanforderung einreichen. Wir antworten innerhalb von 24 Stunden mit Preis, Verfügbarkeit und Lieferzeit.' },
  'contact.form.tag':   { en: '// RFQ Submission', zh: '// 询价提交', ar: '// تقديم الطلب', de: '// Angebotseinreichung' },
  'contact.form.title': { en: 'Request for Quotation', zh: '询价申请', ar: 'طلب عرض سعر', de: 'Angebotsanfrage' },
  'contact.form.sub':   { en: 'All fields marked * are required. The End-User Statement must be acknowledged before submission.', zh: '标有*的字段为必填项。提交前须确认最终用户声明。', ar: 'جميع الحقول المميزة بـ * مطلوبة. يجب الإقرار ببيان المستخدم النهائي قبل الإرسال.', de: 'Alle mit * markierten Felder sind Pflichtfelder. Die Endnutzererklärung muss vor dem Absenden bestätigt werden.' },
  'contact.field.name':    { en: 'Full Name', zh: '姓名', ar: 'الاسم الكامل', de: 'Vollständiger Name' },
  'contact.field.company': { en: 'Company / Organization', zh: '公司/机构', ar: 'الشركة / المنظمة', de: 'Unternehmen / Organisation' },
  'contact.field.email':   { en: 'Business Email', zh: '商务邮箱', ar: 'البريد الإلكتروني للعمل', de: 'Geschäftliche E-Mail' },
  'contact.field.phone':   { en: 'Phone / WhatsApp', zh: '电话/WhatsApp', ar: 'الهاتف / واتساب', de: 'Telefon / WhatsApp' },
  'contact.field.country': { en: 'Country / Region', zh: '国家/地区', ar: 'الدولة / المنطقة', de: 'Land / Region' },
  'contact.field.type':    { en: 'Inquiry Type', zh: '询价类型', ar: 'نوع الاستفسار', de: 'Anfrageart' },
  'contact.field.pn':      { en: 'Part Number(s) / BOM Description', zh: '料号/BOM描述', ar: 'رقم/أرقام القطع / وصف قائمة المواد', de: 'Teilenummer(n) / BOM-Beschreibung' },
  'contact.field.qty':     { en: 'Estimated Quantity', zh: '预计数量', ar: 'الكمية المقدرة', de: 'Geschätzte Menge' },
  'contact.field.price':   { en: 'Target Price (USD)', zh: '目标价格（美元）', ar: 'السعر المستهدف (USD)', de: 'Zielpreis (USD)' },
  'contact.field.dest':    { en: 'Delivery Destination', zh: '交货目的地', ar: 'وجهة التسليم', de: 'Lieferziel' },
  'contact.field.notes':   { en: 'Additional Notes', zh: '备注', ar: 'ملاحظات إضافية', de: 'Zusätzliche Anmerkungen' },
  'contact.field.bom':     { en: 'BOM File Upload', zh: 'BOM文件上传', ar: 'رفع ملف قائمة المواد', de: 'BOM-Datei hochladen' },
  'contact.submit.locked': { en: 'Acknowledge EUS to Submit', zh: '确认EUS后提交', ar: 'أقرّ ببيان المستخدم للإرسال', de: 'EUS bestätigen zum Absenden' },
  'contact.submit.unlocked':{ en: 'Submit RFQ', zh: '提交询价', ar: 'إرسال الطلب', de: 'Anfrage absenden' },
  'contact.direct.tag':    { en: '// Direct Contact', zh: '// 直接联系', ar: '// التواصل المباشر', de: '// Direktkontakt' },
  'contact.sla.tag':       { en: '// Response Commitment', zh: '// 响应承诺', ar: '// التزام الاستجابة', de: '// Reaktionsverpflichtung' },
  'contact.process.tag':   { en: '// How It Works', zh: '// 流程说明', ar: '// كيف يعمل', de: '// So funktioniert es' },

  /* ── FAQ PAGE ── */
  'faq.tag':         { en: '// Frequently Asked Questions', zh: '// 常见问题', ar: '// الأسئلة الشائعة', de: '// Häufig gestellte Fragen' },
  'faq.h1':          { en: 'Got', zh: '有', ar: 'هل لديك', de: 'Haben Sie' },
  'faq.h1.span':     { en: 'Questions?', zh: '疑问？', ar: 'أسئلة؟', de: 'Fragen?' },
  'faq.sub':         { en: 'Everything you need to know about sourcing hardware through MICA Supply — from submitting your first RFQ to receiving your shipment.', zh: '关于通过MICA Supply采购硬件的一切信息——从提交首次询价到收货的全流程解答。', ar: 'كل ما تحتاج معرفته حول شراء الأجهزة عبر MICA Supply — من تقديم طلب العرض الأول إلى استلام شحنتك.', de: 'Alles, was Sie über die Hardware-Beschaffung über MICA Supply wissen müssen — von der ersten Anfrage bis zum Wareneingang.' },

  /* ── ABOUT PAGE ── */
  'about.tag':       { en: '// Independent Hardware Broker', zh: '// 独立硬件经纪商', ar: '// وسيط أجهزة مستقل', de: '// Unabhängiger Hardware-Broker' },
  'about.h1.line1':  { en: 'Built for the', zh: '为企业级', ar: 'مبني لسوق', de: 'Gebaut für den' },
  'about.h1.span':   { en: 'Enterprise', zh: '硬件市场', ar: 'المؤسسات', de: 'Enterprise-' },
  'about.h1.line2':  { en: 'Hardware Market.', zh: '而生。', ar: 'الأجهزة.', de: 'Hardware-Markt.' },

  /* ── COMPLIANCE PAGE ── */
  'compliance.tag':  { en: '// Export Compliance Framework', zh: '// 出口合规框架', ar: '// إطار الامتثال للتصدير', de: '// Export-Compliance-Rahmen' },

  /* ── COMMON ── */
  'common.rfq.btn':  { en: 'Request a Quote', zh: '申请报价', ar: 'طلب عرض سعر', de: 'Angebot anfordern' },
  'common.view.all': { en: 'View All', zh: '查看全部', ar: 'عرض الكل', de: 'Alle anzeigen' },
  'common.back':     { en: 'Back to Featured', zh: '返回精选', ar: 'العودة للمميزين', de: 'Zurück zur Auswahl' },
};

// ── CURRENT LANGUAGE ────────────────────────────────────
var currentLang = localStorage.getItem('mica_lang') || detectBrowserLang();

function detectBrowserLang() {
  var bl = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (bl.startsWith('zh')) return 'zh';
  if (bl.startsWith('ar')) return 'ar';
  if (bl.startsWith('de')) return 'de';
  return 'en';
}

// ── APPLY TRANSLATIONS ──────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('mica_lang', lang);

  var cfg = LANGS[lang];

  // Direction
  document.documentElement.setAttribute('dir', cfg.dir);
  document.documentElement.setAttribute('lang', lang);

  // Load font if needed
  if (cfg.font && !document.querySelector('link[data-mica-font]')) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cfg.font;
    link.setAttribute('data-mica-font', '1');
    document.head.appendChild(link);
  }

  // Apply body font for CJK / Arabic
  if (lang === 'zh') {
    document.body.style.fontFamily = "'Noto Sans SC', 'Inter', sans-serif";
  } else if (lang === 'ar') {
    document.body.style.fontFamily = "'Noto Sans Arabic', 'Inter', sans-serif";
  } else {
    document.body.style.fontFamily = "'Inter', sans-serif";
  }

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (T[key] && T[key][lang]) {
      // Use innerHTML for elements that may contain HTML, textContent otherwise
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = T[key][lang];
      } else if (el.getAttribute('data-i18n-html')) {
        el.innerHTML = T[key][lang];
      } else {
        el.textContent = T[key][lang];
      }
    }
  });

  // Update switcher UI
  document.querySelectorAll('.lang-opt').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // RTL adjustments
  if (cfg.dir === 'rtl') {
    document.querySelectorAll('.nav-links').forEach(function(el){ el.style.flexDirection = 'row-reverse'; });
  } else {
    document.querySelectorAll('.nav-links').forEach(function(el){ el.style.flexDirection = ''; });
  }
}

// ── INJECT SWITCHER INTO NAVBAR ─────────────────────────
function injectSwitcher() {
  var nav = document.querySelector('nav');
  if (!nav) return;

  // Build switcher HTML
  var switcher = document.createElement('div');
  switcher.className = 'lang-switcher';
  switcher.style.cssText = 'display:flex;align-items:center;gap:2px;margin-left:1.5rem;flex-shrink:0;position:relative;';

  Object.keys(LANGS).forEach(function(code) {
    var btn = document.createElement('button');
    btn.className = 'lang-opt';
    btn.dataset.lang = code;
    btn.textContent = LANGS[code].label;
    btn.title = LANGS[code].name;
    btn.style.cssText = [
      'font-family:"DM Mono",monospace',
      'font-size:.65rem',
      'font-weight:500',
      'letter-spacing:.04em',
      'color:#64748b',
      'background:none',
      'border:1px solid rgba(14,165,233,0.12)',
      'border-radius:3px',
      'padding:.3rem .55rem',
      'cursor:pointer',
      'transition:color .2s,background .2s,border-color .2s',
      'white-space:nowrap'
    ].join(';');
    btn.addEventListener('mouseenter', function() {
      if (!this.classList.contains('active')) {
        this.style.color = '#f0f6ff';
        this.style.borderColor = 'rgba(14,165,233,0.3)';
      }
    });
    btn.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.color = '#64748b';
        this.style.borderColor = 'rgba(14,165,233,0.12)';
      }
    });
    btn.addEventListener('click', function() {
      applyLang(this.dataset.lang);
      updateActiveStyle();
    });
    switcher.appendChild(btn);
  });

  // Style injection for active state
  var style = document.createElement('style');
  style.textContent = '.lang-opt.active{color:#0ea5e9!important;background:rgba(14,165,233,.1)!important;border-color:rgba(14,165,233,.3)!important}';
  document.head.appendChild(style);

  // Append to nav (before the end)
  nav.appendChild(switcher);

  function updateActiveStyle() {
    document.querySelectorAll('.lang-opt').forEach(function(b) {
      if (b.dataset.lang === currentLang) {
        b.style.color = '#0ea5e9';
        b.style.background = 'rgba(14,165,233,.1)';
        b.style.borderColor = 'rgba(14,165,233,.3)';
      } else {
        b.style.color = '#64748b';
        b.style.background = 'none';
        b.style.borderColor = 'rgba(14,165,233,0.12)';
      }
    });
  }
  updateActiveStyle();
}

// ── INIT ────────────────────────────────────────────────
function init() {
  injectSwitcher();
  applyLang(currentLang);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();
