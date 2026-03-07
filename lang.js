/**
 * MICA Supply — Language Switcher v2
 * EN / ZH / AR / DE
 */
(function () {

  var LANGS = {
    en: { label: 'EN',   name: 'English',  dir: 'ltr' },
    zh: { label: '中文',  name: '简体中文',  dir: 'ltr', font: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' },
    ar: { label: 'عربي', name: 'العربية',  dir: 'rtl', font: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap' },
    de: { label: 'DE',   name: 'Deutsch',  dir: 'ltr' }
  };

  var T = {
    'nav.home':        { en:'Home',          zh:'首页',     ar:'الرئيسية', de:'Startseite' },
    'nav.products':    { en:'Products',      zh:'产品',     ar:'المنتجات', de:'Produkte' },
    'nav.about':       { en:'About Us',      zh:'关于我们', ar:'من نحن',   de:'Über uns' },
    'nav.compliance':  { en:'Compliance',    zh:'合规',     ar:'الامتثال', de:'Compliance' },
    'nav.faq':         { en:'FAQ',           zh:'常见问题', ar:'الأسئلة',  de:'FAQ' },
    'nav.rfq':         { en:'Request Quote', zh:'询价',     ar:'طلب عرض', de:'Angebot' },
    'footer.copy':     { en:'© 2026 MICA Supply LTD. · Vancouver, BC, Canada', zh:'© 2026 MICA Supply LTD. · 加拿大不列颠哥伦比亚省温哥华', ar:'© 2026 MICA Supply LTD. · فانكوفر، كندا', de:'© 2026 MICA Supply LTD. · Vancouver, BC, Kanada' },
    'index.tag':       { en:'// Enterprise Hardware Broker', zh:'// 企业硬件经纪商', ar:'// وسيط أجهزة المؤسسات', de:'// Enterprise-Hardware-Broker' },
    'index.h1a':       { en:'Enterprise Hardware', zh:'企业级硬件', ar:'أجهزة المؤسسات', de:'Enterprise-Hardware' },
    'index.h1b':       { en:'Sourced. Verified.', zh:'精准采购，严格核验，', ar:'مُصدَّرة. مُوثَّقة.', de:'Beschafft. Verifiziert.' },
    'index.h1c':       { en:'Delivered.', zh:'高效交付。', ar:'مُسلَّمة.', de:'Geliefert.' },
    'index.sub':       { en:'AI accelerators, server CPUs, and enterprise components — sourced globally, delivered compliantly across North America, the UAE, Europe, and Asia.', zh:'AI加速器、服务器CPU及企业级组件——全球采购，合规交付至北美、阿联酋、欧洲及亚洲。', ar:'مسرّعات الذكاء الاصطناعي ووحدات المعالجة المركزية — مصادر عالمية، توصيل متوافق عبر أمريكا الشمالية والإمارات وأوروبا وآسيا.', de:'KI-Beschleuniger, Server-CPUs und Enterprise-Komponenten – global beschafft, compliant geliefert.' },
    'index.btn.rfq':   { en:'Submit RFQ', zh:'提交询价', ar:'إرسال طلب', de:'Anfrage senden' },
    'index.btn.inv':   { en:'Browse Inventory', zh:'浏览库存', ar:'تصفح المخزون', de:'Inventar ansehen' },
    'products.tag':    { en:'// Current Inventory', zh:'// 当前库存', ar:'// المخزون الحالي', de:'// Aktueller Bestand' },
    'products.h1':     { en:'Hardware', zh:'硬件', ar:'الأجهزة', de:'Hardware' },
    'products.h1.span':{ en:'Inventory', zh:'库存', ar:'المخزون', de:'Inventar' },
    'products.sub':    { en:'Factory New (NIB) and Working Pull enterprise hardware. All items subject to BIS/EAR compliance review. Submit RFQ for current pricing and lead time.', zh:'全新库存（NIB）及工作状态翻新企业级硬件。所有商品须经BIS/EAR合规审核。提交询价获取最新报价及交货周期。', ar:'أجهزة المؤسسات جديدة في الصندوق ومسحوبة صالحة للعمل. جميع العناصر خاضعة لمراجعة الامتثال.', de:'Fabrikneue (NIB) und geprüfte Enterprise-Hardware. Alle Artikel unterliegen der BIS/EAR-Compliance-Prüfung.' },
    'products.filter': { en:'// Filter by category', zh:'// 按类别筛选', ar:'// التصفية حسب الفئة', de:'// Nach Kategorie filtern' },
    'products.bom.tag':  { en:'// Full BOM Fulfillment', zh:'// 完整BOM满足', ar:'// تلبية قائمة المواد', de:'// BOM-Erfüllung' },
    'products.bom.title':{ en:"Don't see your part number?", zh:'没有找到您的料号？', ar:'لم تجد رقم القطعة؟', de:'Teilenummer nicht gefunden?' },
    'products.bom.sub':  { en:'Submit your P/N list or full BOM — we source across global networks including EOL and allocated items.', zh:'提交您的料号列表或完整BOM，我们在全球网络中采购，包括停产和限量商品。', ar:'أرسل قائمة أرقام القطع أو قائمة المواد الكاملة، نستورد عبر شبكات عالمية.', de:'P/N-Liste oder vollständige BOM einreichen — wir beschaffen weltweit.' },
    'products.bom.btn':  { en:'Submit BOM / P/N', zh:'提交BOM/料号', ar:'إرسال قائمة المواد', de:'BOM / P/N einreichen' },
    'contact.tag':       { en:'// Request for Quote', zh:'// 询价请求', ar:'// طلب عرض سعر', de:'// Angebotsanfrage' },
    'contact.h1a':       { en:'Tell Us What', zh:'告诉我们', ar:'أخبرنا', de:'Teilen Sie uns mit' },
    'contact.h1b':       { en:'Need.', zh:'您的需求。', ar:'ما تحتاجه.', de:'Was Sie brauchen.' },
    'contact.sub':       { en:'Submit your Part Number, BOM, or general hardware requirement. We respond with pricing, availability, and lead time within 24 hours.', zh:'提交您的料号、BOM或一般硬件需求。我们将在24小时内回复报价、库存及交货周期。', ar:'أرسل رقم القطعة أو قائمة المواد. نرد بالتسعير والتوفر ووقت التسليم خلال 24 ساعة.', de:'Teilenummer, BOM oder allgemeine Hardwareanforderung einreichen. Antwort innerhalb von 24 Stunden.' },
    'contact.form.tag':  { en:'// RFQ Submission', zh:'// 询价提交', ar:'// تقديم الطلب', de:'// Angebotseinreichung' },
    'contact.form.title':{ en:'Request for Quotation', zh:'询价申请', ar:'طلب عرض سعر', de:'Angebotsanfrage' },
    'contact.field.name':   { en:'Full Name', zh:'姓名', ar:'الاسم الكامل', de:'Vollständiger Name' },
    'contact.field.company':{ en:'Company / Organization', zh:'公司/机构', ar:'الشركة / المنظمة', de:'Unternehmen' },
    'contact.field.email':  { en:'Business Email', zh:'商务邮箱', ar:'البريد الإلكتروني', de:'Geschäftliche E-Mail' },
    'contact.field.phone':  { en:'Phone / WhatsApp', zh:'电话/WhatsApp', ar:'الهاتف / واتساب', de:'Telefon / WhatsApp' },
    'contact.field.country':{ en:'Country / Region', zh:'国家/地区', ar:'الدولة / المنطقة', de:'Land / Region' },
    'contact.field.type':   { en:'Inquiry Type', zh:'询价类型', ar:'نوع الاستفسار', de:'Anfrageart' },
    'contact.field.pn':     { en:'Part Number(s) / BOM Description', zh:'料号/BOM描述', ar:'رقم القطع / وصف قائمة المواد', de:'Teilenummer(n) / BOM-Beschreibung' },
    'contact.field.qty':    { en:'Estimated Quantity', zh:'预计数量', ar:'الكمية المقدرة', de:'Geschätzte Menge' },
    'contact.field.price':  { en:'Target Price (USD)', zh:'目标价格（美元）', ar:'السعر المستهدف (USD)', de:'Zielpreis (USD)' },
    'contact.field.dest':   { en:'Delivery Destination', zh:'交货目的地', ar:'وجهة التسليم', de:'Lieferziel' },
    'contact.field.notes':  { en:'Additional Notes', zh:'备注', ar:'ملاحظات إضافية', de:'Anmerkungen' },
    'contact.field.bom':    { en:'BOM File Upload', zh:'BOM文件上传', ar:'رفع ملف قائمة المواد', de:'BOM-Datei hochladen' },
    'faq.tag':  { en:'// Frequently Asked Questions', zh:'// 常见问题', ar:'// الأسئلة الشائعة', de:'// Häufig gestellte Fragen' },
    'faq.h1':   { en:'Got', zh:'有', ar:'هل لديك', de:'Haben Sie' },
    'faq.h1b':  { en:'Questions?', zh:'疑问？', ar:'أسئلة؟', de:'Fragen?' },
    'faq.sub':  { en:'Everything you need to know about sourcing hardware through MICA Supply — from submitting your first RFQ to receiving your shipment.', zh:'关于通过MICA Supply采购硬件的一切——从提交首次询价到收货的全流程解答。', ar:'كل ما تحتاج معرفته حول شراء الأجهزة عبر MICA Supply.', de:'Alles über die Hardware-Beschaffung über MICA Supply.' },
    'about.tag':      { en:'// Independent Hardware Broker', zh:'// 独立硬件经纪商', ar:'// وسيط أجهزة مستقل', de:'// Unabhängiger Hardware-Broker' },
    'compliance.tag': { en:'// Export Compliance Framework', zh:'// 出口合规框架', ar:'// إطار الامتثال للتصدير', de:'// Export-Compliance-Rahmen' },
    'common.rfq':     { en:'Request a Quote', zh:'申请报价', ar:'طلب عرض سعر', de:'Angebot anfordern' },
    'common.back':    { en:'Back to Featured', zh:'返回精选', ar:'العودة للمميزين', de:'Zurück zur Auswahl' },

    /* INDEX — hero */
    'index.tag':      { en:'BC Registered · BIS Compliant · Global Hardware Broker', zh:'BC省注册 · BIS合规 · 全球硬件经纪商', ar:'مسجل في BC · متوافق مع BIS · وسيط أجهزة عالمي', de:'BC-Registriert · BIS-Konform · Globaler Hardware-Broker' },
    'index.h1a':      { en:'Enterprise Hardware', zh:'企业级硬件', ar:'أجهزة المؤسسات', de:'Enterprise-Hardware' },
    'index.h1b':      { en:'Sourced.', zh:'精准采购，', ar:'مُصدَّرة.', de:'Beschafft.' },
    'index.h1c-mid':  { en:'Verified.', zh:'严格核验，', ar:'مُوثَّقة.', de:'Verifiziert.' },
    'index.h1c':      { en:'Delivered.', zh:'高效交付。', ar:'مُسلَّمة.', de:'Geliefert.' },
    'index.sub':      { en:'Your strategic broker for AI accelerators, server components, and enterprise silicon. Connecting North America, the UAE, and Europe with Asia\'s supply chain — with full BIS export compliance.', zh:'您的AI加速器、服务器组件及企业级芯片战略经纪商。连接北美、阿联酋、欧洲与亚洲供应链——全程BIS出口合规。', ar:'وسيطك الاستراتيجي لمسرّعات الذكاء الاصطناعي ومكونات الخوادم والرقائق المؤسسية. نربط أمريكا الشمالية والإمارات وأوروبا بسلسلة توريد آسيا مع الامتثال الكامل لتصدير BIS.', de:'Ihr strategischer Broker für KI-Beschleuniger, Serverkomponenten und Enterprise-Chips. Verbindung zwischen Nordamerika, den Emiraten, Europa und der asiatischen Lieferkette – mit voller BIS-Exportkonformität.' },
    'index.btn.rfq':  { en:'Submit an RFQ', zh:'提交询价', ar:'إرسال طلب عرض', de:'Anfrage senden' },
    'index.btn.inv':  { en:'Browse Inventory', zh:'浏览库存', ar:'تصفح المخزون', de:'Inventar ansehen' },
    'index.trust1':   { en:'Factory New (NIB)', zh:'全新库存 (NIB)', ar:'جديد في الصندوق (NIB)', de:'Fabrikneu (NIB)' },
    'index.trust2':   { en:'Working Pulls — Tested', zh:'工作状态翻新 — 已测试', ar:'مسحوب صالح — مختبر', de:'Geprüfte Pulls — Getestet' },
    'index.trust3':   { en:'Cross-Border Logistics', zh:'跨境物流', ar:'لوجستيات عبر الحدود', de:'Grenzüberschreitende Logistik' },
    'index.trust4':   { en:'EAR / BIS Compliant', zh:'EAR / BIS 合规', ar:'متوافق مع EAR / BIS', de:'EAR / BIS-Konform' },
    /* INDEX — spec card */
    'index.spec.title':  { en:'// Live Inventory Signal', zh:'// 实时库存信号', ar:'// إشارة المخزون الحي', de:'// Live-Bestandssignal' },
    'index.spec.gpu':    { en:'GPU Accelerators', zh:'GPU加速器', ar:'مسرّعات GPU', de:'GPU-Beschleuniger' },
    'index.spec.cpu':    { en:'Server CPUs', zh:'服务器CPU', ar:'معالجات الخوادم', de:'Server-CPUs' },
    'index.spec.net':    { en:'Network Cards', zh:'网卡', ar:'بطاقات الشبكة', de:'Netzwerkkarten' },
    'index.spec.dram':   { en:'DRAM / Flash', zh:'内存 / 闪存', ar:'ذاكرة / فلاش', de:'DRAM / Flash' },
    'index.spec.lead':   { en:'Lead Time', zh:'交货周期', ar:'وقت التسليم', de:'Lieferzeit' },
    'index.spec.rfq':    { en:'RFQ Response', zh:'询价响应', ar:'رد على الطلب', de:'Angebotsantwort' },
    'index.spec.avail':  { en:'● Available', zh:'● 有货', ar:'● متاح', de:'● Verfügbar' },
    'index.spec.avail2': { en:'● Available', zh:'● 有货', ar:'● متاح', de:'● Verfügbar' },
    'index.spec.avail3': { en:'● Available', zh:'● 有货', ar:'● متاح', de:'● Verfügbar' },
    'index.spec.onreq':  { en:'● On Request', zh:'● 按需询价', ar:'● عند الطلب', de:'● Auf Anfrage' },
    'index.spec.leadval':{ en:'3–7 Business Days', zh:'3–7个工作日', ar:'٣–٧ أيام عمل', de:'3–7 Werktage' },
    'index.spec.rfqval': { en:'< 24 Hours', zh:'< 24小时', ar:'أقل من 24 ساعة', de:'< 24 Stunden' },
    /* INDEX — stats */
    'index.stat1': { en:'Transactions Completed', zh:'已完成交易', ar:'المعاملات المكتملة', de:'Abgeschlossene Transaktionen' },
    'index.stat2': { en:'Countries Served', zh:'服务国家', ar:'الدول المخدومة', de:'Bediente Länder' },
    'index.stat3': { en:'RFQ Response Time', zh:'询价响应时间', ar:'وقت الرد على الطلب', de:'Angebotsantwortzeit' },
    'index.stat4': { en:'BIS Compliant Exports', zh:'BIS合规出口', ar:'صادرات متوافقة مع BIS', de:'BIS-konforme Exporte' },
    /* INDEX — capabilities */
    'index.caps.tag':   { en:'// What We Do', zh:'// 我们的服务', ar:'// ما نقدمه', de:'// Was wir tun' },
    'index.caps.title': { en:'Our Brokerage Capabilities', zh:'我们的经纪服务', ar:'قدرات الوساطة لدينا', de:'Unsere Brokerage-Fähigkeiten' },
    'index.caps.sub':   { en:'From single-component sourcing to full BOM fulfillment — we operate where the open market falls short.', zh:'从单件采购到完整BOM交付——我们在公开市场力不能及之处发挥作用。', ar:'من توريد مكون واحد إلى تلبية قائمة المواد الكاملة — نعمل حيث يعجز السوق المفتوح.', de:'Von der Einzelkomponenten-Beschaffung bis zur vollständigen BOM-Erfüllung — wir agieren dort, wo der offene Markt versagt.' },
    'index.cap1.title': { en:'Hardware Sourcing', zh:'硬件采购', ar:'توريد الأجهزة', de:'Hardware-Beschaffung' },
    'index.cap1.desc':  { en:'Submit your Part Numbers (P/N) or BOM. We locate hard-to-find, EOL, or highly allocated silicon components across global networks.', zh:'提交料号(P/N)或BOM，我们在全球网络中寻找难以获取、停产或限量的芯片组件。', ar:'أرسل أرقام القطع أو قائمة المواد. نحدد موقع مكونات الرقائق النادرة أو المتوقفة أو المخصصة عبر الشبكات العالمية.', de:'P/N oder BOM einreichen. Wir finden schwer zu beschaffende, EOL- oder stark allozierte Halbleiterkomponenten weltweit.' },
    'index.cap1.link':  { en:'Send Requirements →', zh:'发送需求 →', ar:'أرسل المتطلبات →', de:'Anforderungen senden →' },
    'index.cap2.title': { en:'Asset Liquidation', zh:'资产变现', ar:'تصفية الأصول', de:'Asset-Liquidation' },
    'index.cap2.desc':  { en:'We supply high-volume, cost-effective pre-owned IT assets including server memory, Xeon/EPYC CPUs, and data center GPUs.', zh:'我们提供大批量、高性价比的二手IT资产，包括服务器内存、Xeon/EPYC CPU及数据中心GPU。', ar:'نوفر أصول تقنية مستعملة بكميات كبيرة وبأسعار تنافسية، تشمل ذاكرة الخوادم ووحدات المعالجة Xeon/EPYC ووحدات GPU لمراكز البيانات.', de:'Wir liefern gebrauchte IT-Assets in großen Mengen — Serverspeicher, Xeon/EPYC-CPUs und Rechenzentrum-GPUs.' },
    'index.cap2.link':  { en:'View Categories →', zh:'查看分类 →', ar:'عرض الفئات →', de:'Kategorien ansehen →' },
    'index.cap3.title': { en:'Global Fulfillment', zh:'全球履行', ar:'التوصيل العالمي', de:'Globale Abwicklung' },
    'index.cap3.desc':  { en:'Seamless cross-border transactions between North America and Asia, backed by established freight channels and full customs compliance.', zh:'北美与亚洲之间的无缝跨境交易，依托成熟的货运渠道与完整的海关合规流程。', ar:'معاملات سلسة عبر الحدود بين أمريكا الشمالية وآسيا، مدعومة بقنوات شحن راسخة وامتثال جمركي كامل.', de:'Nahtlose grenzüberschreitende Transaktionen zwischen Nordamerika und Asien, gestützt auf bewährte Frachtkanäle und volle Zollkonformität.' },
    'index.cap3.link':  { en:'Learn About Us →', zh:'了解我们 →', ar:'تعرف علينا →', de:'Über uns →' },
    /* INDEX — product lines */
    'index.prods.tag':   { en:'// Inventory Categories', zh:'// 库存分类', ar:'// فئات المخزون', de:'// Bestandskategorien' },
    'index.prods.title': { en:'Two Core Product Lines', zh:'两大核心产品线', ar:'خطّا منتجات أساسيان', de:'Zwei Kernproduktlinien' },
    'index.nib.badge':   { en:'Factory New — NIB', zh:'全新 — NIB', ar:'جديد من المصنع', de:'Fabrikneu — NIB' },
    'index.nib.title':   { en:'New In Box Hardware', zh:'全新盒装硬件', ar:'أجهزة جديدة في الصندوق', de:'Neue Hardware im Karton' },
    'index.nib.desc':    { en:'Latest generation consumer GPUs (RTX 5090), AI accelerators, and high-end desktop processors direct from distribution channels. Sealed, factory-fresh condition.', zh:'最新一代消费级GPU（RTX 5090）、AI加速器及高端桌面处理器，直接来自分销渠道。原封未拆，全新出厂状态。', ar:'أحدث جيل من وحدات GPU (RTX 5090) ومسرّعات الذكاء الاصطناعي ومعالجات سطح المكتب عالية الأداء من قنوات التوزيع المباشر.', de:'Neueste Generation Consumer-GPUs (RTX 5090), KI-Beschleuniger und High-End-Desktop-Prozessoren direkt aus dem Vertrieb.' },
    'index.nib.link':    { en:'Explore New Hardware', zh:'探索全新硬件', ar:'استعرض الأجهزة الجديدة', de:'Neue Hardware erkunden' },
    'index.pull.badge':  { en:'Working Pulls', zh:'工作状态翻新', ar:'مسحوب صالح للعمل', de:'Geprüfte Pulls' },
    'index.pull.title':  { en:'Refurbished & Tested', zh:'翻新已测试', ar:'مُجدَّد ومُختبَر', de:'Refurbished & Getestet' },
    'index.pull.desc':   { en:'Maximize your IT budget with strictly graded and tested working pulls from decommissioned enterprise environments. Every unit verified before shipment.', zh:'通过严格分级、经过测试的工作状态翻新件，最大化您的IT预算，来源于退役企业级环境。每台出货前均经过验证。', ar:'استثمر ميزانية تقنية المعلومات بأقصى كفاءة مع قطع مسحوبة مُصنَّفة ومُختبَرة من بيئات المؤسسات المسحوبة من الخدمة.', de:'Maximieren Sie Ihr IT-Budget mit streng klassierten und getesteten Pulls aus außer Betrieb genommenen Enterprise-Umgebungen.' },
    'index.pull.link':   { en:'Explore Pre-Owned', zh:'探索二手硬件', ar:'استعرض المستعمل', de:'Gebrauchtware erkunden' },
    /* INDEX — CTA */
    'index.cta.tag':   { en:'// Ready to Source?', zh:'// 准备好采购了吗？', ar:'// مستعد للشراء؟', de:'// Bereit zur Beschaffung?' },
    'index.cta.title': { en:'Skip the Open Market Volatility', zh:'跳过公开市场的价格波动', ar:'تجاوز تقلبات السوق المفتوح', de:'Marktvolatilität umgehen' },
    'index.cta.sub':   { en:'Let us find your target pricing and lead time. Most RFQs receive a response within 24 hours.', zh:'让我们为您找到目标价格和交货周期。大多数询价将在24小时内获得回复。', ar:'دعنا نجد التسعير المستهدف ووقت التسليم. معظم الطلبات تحصل على رد خلال 24 ساعة.', de:'Wir finden Ihre Zielpreise und Lieferzeiten. Die meisten Anfragen erhalten innerhalb von 24 Stunden eine Antwort.' },
    'index.cta.btn1':  { en:'Request a Quote Now', zh:'立即申请报价', ar:'اطلب عرض سعر الآن', de:'Jetzt Angebot anfordern' },
    'index.cta.btn2':  { en:'View Export Compliance', zh:'查看出口合规', ar:'عرض سياسة الامتثال', de:'Export-Compliance ansehen' },
    /* INDEX — P/N search */
    'index.pn.tag':         { en:'// Instant RFQ', zh:'// 即时询价', ar:'// طلب فوري', de:'// Sofortanfrage' },
    'index.pn.title':       { en:'Have a Part Number?', zh:'有料号吗？', ar:'هل لديك رقم قطعة؟', de:'Haben Sie eine Teilenummer?' },
    'index.pn.sub':         { en:"Enter one or more part numbers and we'll prepare a quote within 24 hours.", zh:'输入一个或多个料号，我们将在24小时内准备报价。', ar:'أدخل رقم قطعة أو أكثر وسنعدّ عرضًا خلال 24 ساعة.', de:'Eine oder mehrere Teilenummern eingeben – wir erstellen innerhalb von 24 Stunden ein Angebot.' },
    'index.pn.placeholder': { en:'e.g. H100 SXM5, RTX 5090, EPYC 9654 ...', zh:'例如：H100 SXM5, RTX 5090, EPYC 9654 ...', ar:'مثال: H100 SXM5, RTX 5090, EPYC 9654 ...', de:'z.B. H100 SXM5, RTX 5090, EPYC 9654 ...' },
    'index.pn.btn':         { en:'Get Quote', zh:'获取报价', ar:'احصل على عرض', de:'Angebot erhalten' },
    'index.pn.popular':     { en:'Popular:', zh:'热门:', ar:'الأكثر طلبًا:', de:'Beliebt:' }
  };

  function detectBrowserLang() {
    var bl = (navigator.language || 'en').toLowerCase();
    if (bl.indexOf('zh') === 0) return 'zh';
    if (bl.indexOf('ar') === 0) return 'ar';
    if (bl.indexOf('de') === 0) return 'de';
    return 'en';
  }

  var currentLang;
  try { currentLang = localStorage.getItem('mica_lang'); } catch(e){}
  if (!currentLang || !LANGS[currentLang]) currentLang = detectBrowserLang();

  function loadFont(url) {
    if (document.querySelector('link[data-micafont]')) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = url;
    l.setAttribute('data-micafont', '1');
    document.head.appendChild(l);
  }

  function applyLang(lang) {
    if (!LANGS[lang]) lang = 'en';
    currentLang = lang;
    try { localStorage.setItem('mica_lang', lang); } catch(e){}

    var cfg = LANGS[lang];

    document.documentElement.setAttribute('dir', cfg.dir);
    document.documentElement.setAttribute('lang', lang);

    if (cfg.font) loadFont(cfg.font);

    if (lang === 'zh') {
      document.body.style.fontFamily = "'Noto Sans SC','Inter',sans-serif";
    } else if (lang === 'ar') {
      document.body.style.fontFamily = "'Noto Sans Arabic','Inter',sans-serif";
    } else {
      document.body.style.fontFamily = "";
    }

    // Apply all translations
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      if (!T[key]) continue;
      var val = T[key][lang] !== undefined ? T[key][lang] : T[key]['en'];
      if (val === undefined) continue;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    }

    // Update button styles
    var btns = document.querySelectorAll('.mica-lang-btn');
    for (var j = 0; j < btns.length; j++) {
      var isActive = btns[j].getAttribute('data-lang') === lang;
      btns[j].style.color       = isActive ? '#0ea5e9' : '#64748b';
      btns[j].style.background  = isActive ? 'rgba(14,165,233,0.12)' : 'transparent';
      btns[j].style.borderColor = isActive ? 'rgba(14,165,233,0.4)' : 'rgba(14,165,233,0.15)';
    }

    // RTL / LTR layout fix
    var isRtl = cfg.dir === 'rtl';

    // Nav links direction
    var navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.style.flexDirection = isRtl ? 'row-reverse' : '';

    // Move lang switcher to correct side of nav
    var langWrap = document.querySelector('.mica-lang-wrap');
    var nav = document.querySelector('nav');
    if (langWrap && nav) {
      langWrap.style.marginLeft  = isRtl ? '0' : '1.2rem';
      langWrap.style.marginRight = isRtl ? '1.2rem' : '0';
    }

    // Fix spec-card (position:absolute, right:4rem) for RTL
    var specCard = document.getElementById('specCard');
    if (specCard) {
      if (isRtl) {
        specCard.style.right = 'auto';
        specCard.style.left  = '4rem';
      } else {
        specCard.style.left  = 'auto';
        specCard.style.right = '4rem';
      }
    }

    // Fix any elements that use right-side absolute/fixed positioning
    // e.g. the live inventory widget on index page
    var rtlFlipEls = document.querySelectorAll('[data-rtl-flip]');
    for (var k = 0; k < rtlFlipEls.length; k++) {
      var fel = rtlFlipEls[k];
      var origRight = fel.getAttribute('data-rtl-flip');   // original right value e.g. "2rem"
      if (isRtl) {
        fel.style.right = 'auto';
        fel.style.left  = origRight;
      } else {
        fel.style.left  = 'auto';
        fel.style.right = origRight;
      }
    }

    // Generic: for fixed/absolute elements with inline right style, flip them
    var fixedEls = document.querySelectorAll('.hero-widget, .stats-widget, .inventory-signal, [class*="widget"], [class*="signal"]');
    for (var m = 0; m < fixedEls.length; m++) {
      var wel = fixedEls[m];
      var cs = window.getComputedStyle(wel);
      if (cs.position === 'absolute' || cs.position === 'fixed') {
        if (isRtl) {
          if (cs.right !== 'auto' && cs.right !== '') {
            wel.style.left = cs.right;
            wel.style.right = 'auto';
          }
        } else {
          // restore — remove inline overrides so CSS takes over
          wel.style.left = '';
          wel.style.right = '';
        }
      }
    }
  }

  function injectSwitcher() {
    var nav = document.querySelector('nav');
    if (!nav || document.querySelector('.mica-lang-wrap')) return;

    // Global style
    var s = document.createElement('style');
    s.textContent = '.mica-lang-btn{font-family:"DM Mono",monospace;font-size:.65rem;letter-spacing:.04em;border-radius:3px;padding:.28rem .55rem;cursor:pointer;border-width:1px;border-style:solid;transition:color .2s,background .2s,border-color .2s;white-space:nowrap;line-height:1}';
    document.head.appendChild(s);

    var wrap = document.createElement('div');
    wrap.className = 'mica-lang-wrap';
    wrap.style.cssText = 'display:flex;align-items:center;gap:3px;margin-left:1.2rem;flex-shrink:0';

    ['en','zh','ar','de'].forEach(function(code) {
      var btn = document.createElement('button');
      btn.className = 'mica-lang-btn';
      btn.setAttribute('data-lang', code);
      btn.setAttribute('type', 'button');
      btn.title = LANGS[code].name;
      btn.textContent = LANGS[code].label;
      btn.style.color = '#64748b';
      btn.style.background = 'transparent';
      btn.style.borderColor = 'rgba(14,165,233,0.15)';
      btn.addEventListener('click', function() {
        applyLang(this.getAttribute('data-lang'));
      });
      wrap.appendChild(btn);
    });

    nav.appendChild(wrap);
  }

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
