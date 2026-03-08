/**
 * MICA Supply — Language Switcher v3
 * EN / FR / ZH / AR / DE
 */
(function () {

  var LANGS = {
    en: { label: 'EN',   name: 'English',  dir: 'ltr' },
    fr: { label: 'FR',   name: 'Français', dir: 'ltr' },
    zh: { label: '中文',  name: '简体中文',  dir: 'ltr', font: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' },
    ar: { label: 'عربي', name: 'العربية',  dir: 'rtl', font: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap' },
    de: { label: 'DE',   name: 'Deutsch',  dir: 'ltr' }
  };

  var T = {
    /* ── NAV ── */
    'nav.home':       { en:'Home',          fr:'Accueil',      zh:'首页',     ar:'الرئيسية', de:'Startseite' },
    'nav.products':   { en:'Products',      fr:'Produits',     zh:'产品',     ar:'المنتجات', de:'Produkte' },
    'nav.about':      { en:'About Us',      fr:'À propos',     zh:'关于我们', ar:'من نحن',   de:'Über uns' },
    'nav.compliance': { en:'Compliance',    fr:'Conformité',   zh:'合规',     ar:'الامتثال', de:'Compliance' },
    'nav.faq':        { en:'FAQ',           fr:'FAQ',          zh:'常见问题', ar:'الأسئلة',  de:'FAQ' },
    'nav.rfq':        { en:'Request Quote', fr:'Demande',      zh:'询价',     ar:'طلب عرض', de:'Angebot' },

    /* ── FOOTER ── */
    'footer.copy': {
      en: '© 2026 MICA Supply LTD. · Vancouver, BC, Canada',
      fr: '© 2026 MICA Supply LTD. · Vancouver, BC, Canada',
      zh: '© 2026 MICA Supply LTD. · 加拿大不列颠哥伦比亚省温哥华',
      ar: '© 2026 MICA Supply LTD. · فانكوفر، كندا',
      de: '© 2026 MICA Supply LTD. · Vancouver, BC, Kanada'
    },

    /* ── INDEX — hero ── */
    'index.tag': {
      en: 'BC Registered · BIS Compliant · Global Hardware Broker',
      fr: 'Enregistré en BC · Conforme BIS · Courtier mondial en matériel',
      zh: 'BC省注册 · BIS合规 · 全球硬件经纪商',
      ar: 'مسجل في BC · متوافق مع BIS · وسيط أجهزة عالمي',
      de: 'BC-Registriert · BIS-Konform · Globaler Hardware-Broker'
    },
    'index.h1a':     { en:'Enterprise Hardware',  fr:'Matériel d\'entreprise', zh:'企业级硬件',        ar:'أجهزة المؤسسات',  de:'Enterprise-Hardware' },
    'index.h1b':     { en:'Sourced.',              fr:'Sourcé.',                zh:'精准采购，',        ar:'مُصدَّرة.',        de:'Beschafft.' },
    'index.h1c-mid': { en:'Verified.',             fr:'Vérifié.',               zh:'严格核验，',        ar:'مُوثَّقة.',        de:'Verifiziert.' },
    'index.h1c':     { en:'Delivered.',            fr:'Livré.',                 zh:'高效交付。',        ar:'مُسلَّمة.',        de:'Geliefert.' },
    'index.sub': {
      en: 'Your strategic broker for AI accelerators, server components, and enterprise silicon. Connecting North America, the UAE, and Europe with Asia\'s supply chain — with full BIS export compliance.',
      fr: 'Votre courtier stratégique en accélérateurs IA, composants serveurs et puces entreprise. Reliant l\'Amérique du Nord, les Émirats et l\'Europe à la chaîne d\'approvisionnement asiatique — en pleine conformité BIS.',
      zh: '您的AI加速器、服务器组件及企业级芯片战略经纪商。连接北美、阿联酋、欧洲与亚洲供应链——全程BIS出口合规。',
      ar: 'وسيطك الاستراتيجي لمسرّعات الذكاء الاصطناعي ومكونات الخوادم والرقائق المؤسسية. نربط أمريكا الشمالية والإمارات وأوروبا بسلسلة توريد آسيا مع الامتثال الكامل لتصدير BIS.',
      de: 'Ihr strategischer Broker für KI-Beschleuniger, Serverkomponenten und Enterprise-Chips. Verbindung zwischen Nordamerika, den Emiraten, Europa und der asiatischen Lieferkette – mit voller BIS-Exportkonformität.'
    },
    'index.btn.rfq': { en:'Submit an RFQ',    fr:'Soumettre une demande', zh:'提交询价',   ar:'إرسال طلب عرض',  de:'Anfrage senden' },
    'index.btn.inv': { en:'Browse Inventory', fr:'Voir l\'inventaire',     zh:'浏览库存',   ar:'تصفح المخزون',   de:'Inventar ansehen' },
    'index.trust1':  { en:'Factory New (NIB)',        fr:'Neuf en boîte (NIB)',          zh:'全新库存 (NIB)',      ar:'جديد في الصندوق (NIB)',  de:'Fabrikneu (NIB)' },
    'index.trust2':  { en:'Working Pulls — Tested',   fr:'Tirages testés',               zh:'工作状态翻新 — 已测试', ar:'مسحوب صالح — مختبر',    de:'Geprüfte Pulls — Getestet' },
    'index.trust3':  { en:'Cross-Border Logistics',   fr:'Logistique transfrontalière',  zh:'跨境物流',           ar:'لوجستيات عبر الحدود',   de:'Grenzüberschreitende Logistik' },
    'index.trust4':  { en:'EAR / BIS Compliant',      fr:'Conforme EAR / BIS',           zh:'EAR / BIS 合规',    ar:'متوافق مع EAR / BIS',   de:'EAR / BIS-Konform' },

    /* ── INDEX — spec card ── */
    'index.spec.title':  { en:'// Live Inventory Signal', fr:'// Signal d\'inventaire', zh:'// 实时库存信号',   ar:'// إشارة المخزون الحي',   de:'// Live-Bestandssignal' },
    'index.spec.gpu':    { en:'GPU Accelerators',         fr:'Accélérateurs GPU',       zh:'GPU加速器',        ar:'مسرّعات GPU',              de:'GPU-Beschleuniger' },
    'index.spec.cpu':    { en:'Server CPUs',              fr:'CPU serveurs',             zh:'服务器CPU',        ar:'معالجات الخوادم',          de:'Server-CPUs' },
    'index.spec.net':    { en:'Network Cards',            fr:'Cartes réseau',            zh:'网卡',            ar:'بطاقات الشبكة',            de:'Netzwerkkarten' },
    'index.spec.dram':   { en:'DRAM / Flash',             fr:'DRAM / Flash',             zh:'内存 / 闪存',      ar:'ذاكرة / فلاش',             de:'DRAM / Flash' },
    'index.spec.lead':   { en:'Lead Time',                fr:'Délai de livraison',       zh:'交货周期',         ar:'وقت التسليم',              de:'Lieferzeit' },
    'index.spec.rfq':    { en:'RFQ Response',             fr:'Réponse au devis',         zh:'询价响应',         ar:'رد على الطلب',             de:'Angebotsantwort' },
    'index.spec.avail':  { en:'● Available', fr:'● Disponible', zh:'● 有货', ar:'● متاح', de:'● Verfügbar' },
    'index.spec.avail2': { en:'● Available', fr:'● Disponible', zh:'● 有货', ar:'● متاح', de:'● Verfügbar' },
    'index.spec.avail3': { en:'● Available', fr:'● Disponible', zh:'● 有货', ar:'● متاح', de:'● Verfügbar' },
    'index.spec.onreq':  { en:'● On Request', fr:'● Sur demande', zh:'● 按需询价', ar:'● عند الطلب', de:'● Auf Anfrage' },
    'index.spec.leadval':{ en:'3–7 Business Days', fr:'3–7 jours ouvrés', zh:'3–7个工作日', ar:'٣–٧ أيام عمل', de:'3–7 Werktage' },
    'index.spec.rfqval': { en:'< 24 Hours',       fr:'< 24 heures',       zh:'< 24小时',    ar:'أقل من 24 ساعة', de:'< 24 Stunden' },

    /* ── INDEX — stats ── */
    'index.stat1': { en:'Transactions Completed', fr:'Transactions effectuées', zh:'已完成交易',   ar:'المعاملات المكتملة',     de:'Abgeschlossene Transaktionen' },
    'index.stat2': { en:'Countries Served',       fr:'Pays desservis',          zh:'服务国家',     ar:'الدول المخدومة',         de:'Bediente Länder' },
    'index.stat3': { en:'RFQ Response Time',      fr:'Délai de réponse RFQ',    zh:'询价响应时间',  ar:'وقت الرد على الطلب',    de:'Angebotsantwortzeit' },
    'index.stat4': { en:'BIS Compliant Exports',  fr:'Exportations conformes BIS', zh:'BIS合规出口', ar:'صادرات متوافقة مع BIS', de:'BIS-konforme Exporte' },

    /* ── INDEX — capabilities ── */
    'index.caps.tag':   { en:'// What We Do',     fr:'// Ce que nous faisons',    zh:'// 我们的服务',   ar:'// ما نقدمه',           de:'// Was wir tun' },
    'index.caps.title': { en:'Our Brokerage Capabilities', fr:'Nos capacités de courtage', zh:'我们的经纪服务', ar:'قدرات الوساطة لدينا', de:'Unsere Brokerage-Fähigkeiten' },
    'index.caps.sub': {
      en: 'From single-component sourcing to full BOM fulfillment — we operate where the open market falls short.',
      fr: 'Du sourcing d\'un composant unique à la réalisation complète d\'une BOM — nous intervenons là où le marché libre est défaillant.',
      zh: '从单件采购到完整BOM交付——我们在公开市场力不能及之处发挥作用。',
      ar: 'من توريد مكون واحد إلى تلبية قائمة المواد الكاملة — نعمل حيث يعجز السوق المفتوح.',
      de: 'Von der Einzelkomponenten-Beschaffung bis zur vollständigen BOM-Erfüllung — wir agieren dort, wo der offene Markt versagt.'
    },
    'index.cap1.title': { en:'Hardware Sourcing',  fr:'Approvisionnement matériel', zh:'硬件采购',  ar:'توريد الأجهزة',  de:'Hardware-Beschaffung' },
    'index.cap1.desc': {
      en: 'Submit your Part Numbers (P/N) or BOM. We locate hard-to-find, EOL, or highly allocated silicon components across global networks.',
      fr: 'Soumettez vos références (P/N) ou BOM. Nous localisons les composants rares, EOL ou fortement alloués sur les réseaux mondiaux.',
      zh: '提交料号(P/N)或BOM，我们在全球网络中寻找难以获取、停产或限量的芯片组件。',
      ar: 'أرسل أرقام القطع أو قائمة المواد. نحدد موقع مكونات الرقائق النادرة أو المتوقفة أو المخصصة عبر الشبكات العالمية.',
      de: 'P/N oder BOM einreichen. Wir finden schwer zu beschaffende, EOL- oder stark allozierte Halbleiterkomponenten weltweit.'
    },
    'index.cap1.link': { en:'Send Requirements →', fr:'Envoyer les besoins →', zh:'发送需求 →', ar:'أرسل المتطلبات →', de:'Anforderungen senden →' },
    'index.cap2.title': { en:'Asset Liquidation',  fr:'Liquidation d\'actifs',  zh:'资产变现',  ar:'تصفية الأصول',  de:'Asset-Liquidation' },
    'index.cap2.desc': {
      en: 'We supply high-volume, cost-effective pre-owned IT assets including server memory, Xeon/EPYC CPUs, and data center GPUs.',
      fr: 'Nous fournissons des actifs IT reconditionnés en grande quantité : mémoire serveur, CPU Xeon/EPYC et GPU de datacenter.',
      zh: '我们提供大批量、高性价比的二手IT资产，包括服务器内存、Xeon/EPYC CPU及数据中心GPU。',
      ar: 'نوفر أصول تقنية مستعملة بكميات كبيرة وبأسعار تنافسية، تشمل ذاكرة الخوادم ووحدات المعالجة Xeon/EPYC ووحدات GPU.',
      de: 'Wir liefern gebrauchte IT-Assets in großen Mengen — Serverspeicher, Xeon/EPYC-CPUs und Rechenzentrum-GPUs.'
    },
    'index.cap2.link': { en:'View Categories →', fr:'Voir les catégories →', zh:'查看分类 →', ar:'عرض الفئات →', de:'Kategorien ansehen →' },
    'index.cap3.title': { en:'Global Fulfillment', fr:'Livraison mondiale',   zh:'全球履行',  ar:'التوصيل العالمي', de:'Globale Abwicklung' },
    'index.cap3.desc': {
      en: 'Seamless cross-border transactions between North America and Asia, backed by established freight channels and full customs compliance.',
      fr: 'Transactions transfrontalières fluides entre l\'Amérique du Nord et l\'Asie, appuyées sur des canaux de fret établis et une conformité douanière totale.',
      zh: '北美与亚洲之间的无缝跨境交易，依托成熟的货运渠道与完整的海关合规流程。',
      ar: 'معاملات سلسة عبر الحدود بين أمريكا الشمالية وآسيا، مدعومة بقنوات شحن راسخة وامتثال جمركي كامل.',
      de: 'Nahtlose grenzüberschreitende Transaktionen zwischen Nordamerika und Asien, gestützt auf bewährte Frachtkanäle und volle Zollkonformität.'
    },
    'index.cap3.link': { en:'Learn About Us →', fr:'En savoir plus →', zh:'了解我们 →', ar:'تعرف علينا →', de:'Über uns →' },

    /* ── INDEX — product lines ── */
    'index.prods.tag':   { en:'// Inventory Categories', fr:'// Catégories d\'inventaire', zh:'// 库存分类',   ar:'// فئات المخزون',   de:'// Bestandskategorien' },
    'index.prods.title': { en:'Two Core Product Lines',  fr:'Deux gammes principales',     zh:'两大核心产品线', ar:'خطّا منتجات أساسيان', de:'Zwei Kernproduktlinien' },
    'index.nib.badge':   { en:'Factory New — NIB',       fr:'Neuf en boîte — NIB',         zh:'全新 — NIB',   ar:'جديد من المصنع',    de:'Fabrikneu — NIB' },
    'index.nib.title':   { en:'New In Box Hardware',     fr:'Matériel neuf en boîte',      zh:'全新盒装硬件',  ar:'أجهزة جديدة في الصندوق', de:'Neue Hardware im Karton' },
    'index.nib.desc': {
      en: 'Latest generation consumer GPUs (RTX 5090), AI accelerators, and high-end desktop processors direct from distribution channels. Sealed, factory-fresh condition.',
      fr: 'GPU grand public dernière génération (RTX 5090), accélérateurs IA et processeurs haut de gamme directement des circuits de distribution. État neuf d\'usine.',
      zh: '最新一代消费级GPU（RTX 5090）、AI加速器及高端桌面处理器，直接来自分销渠道。原封未拆，全新出厂状态。',
      ar: 'أحدث جيل من وحدات GPU (RTX 5090) ومسرّعات الذكاء الاصطناعي ومعالجات سطح المكتب عالية الأداء من قنوات التوزيع المباشر.',
      de: 'Neueste Generation Consumer-GPUs (RTX 5090), KI-Beschleuniger und High-End-Desktop-Prozessoren direkt aus dem Vertrieb.'
    },
    'index.nib.link':    { en:'Explore New Hardware',  fr:'Explorer le neuf',        zh:'探索全新硬件',  ar:'استعرض الأجهزة الجديدة', de:'Neue Hardware erkunden' },
    'index.pull.badge':  { en:'Working Pulls',         fr:'Tirages testés',           zh:'工作状态翻新',  ar:'مسحوب صالح للعمل',       de:'Geprüfte Pulls' },
    'index.pull.title':  { en:'Refurbished & Tested',  fr:'Reconditionné & testé',    zh:'翻新已测试',   ar:'مُجدَّد ومُختبَر',         de:'Refurbished & Getestet' },
    'index.pull.desc': {
      en: 'Maximize your IT budget with strictly graded and tested working pulls from decommissioned enterprise environments. Every unit verified before shipment.',
      fr: 'Optimisez votre budget IT avec des tirages strictement classés et testés issus d\'environnements entreprise mis hors service. Chaque unité vérifiée avant expédition.',
      zh: '通过严格分级、经过测试的工作状态翻新件，最大化您的IT预算，来源于退役企业级环境。每台出货前均经过验证。',
      ar: 'استثمر ميزانية تقنية المعلومات بأقصى كفاءة مع قطع مسحوبة مُصنَّفة ومُختبَرة من بيئات المؤسسات المسحوبة من الخدمة.',
      de: 'Maximieren Sie Ihr IT-Budget mit streng klassierten und getesteten Pulls aus außer Betrieb genommenen Enterprise-Umgebungen.'
    },
    'index.pull.link':   { en:'Explore Pre-Owned',   fr:'Explorer l\'occasion',       zh:'探索二手硬件',  ar:'استعرض المستعمل',   de:'Gebrauchtware erkunden' },

    /* ── INDEX — CTA ── */
    'index.cta.tag':   { en:'// Ready to Source?',       fr:'// Prêt à sourcer ?',                zh:'// 准备好采购了吗？',  ar:'// مستعد للشراء؟',     de:'// Bereit zur Beschaffung?' },
    'index.cta.title': { en:'Skip the Open Market Volatility', fr:'Évitez la volatilité du marché', zh:'跳过公开市场的价格波动', ar:'تجاوز تقلبات السوق المفتوح', de:'Marktvolatilität umgehen' },
    'index.cta.sub': {
      en: 'Let us find your target pricing and lead time. Most RFQs receive a response within 24 hours.',
      fr: 'Laissez-nous trouver votre prix cible et délai de livraison. La plupart des demandes reçoivent une réponse sous 24 heures.',
      zh: '让我们为您找到目标价格和交货周期。大多数询价将在24小时内获得回复。',
      ar: 'دعنا نجد التسعير المستهدف ووقت التسليم. معظم الطلبات تحصل على رد خلال 24 ساعة.',
      de: 'Wir finden Ihre Zielpreise und Lieferzeiten. Die meisten Anfragen erhalten innerhalb von 24 Stunden eine Antwort.'
    },
    'index.cta.btn1': { en:'Request a Quote Now',      fr:'Demander un devis',          zh:'立即申请报价',   ar:'اطلب عرض سعر الآن',       de:'Jetzt Angebot anfordern' },
    'index.cta.btn2': { en:'View Export Compliance',   fr:'Voir la conformité export',  zh:'查看出口合规',   ar:'عرض سياسة الامتثال',      de:'Export-Compliance ansehen' },

    /* ── INDEX — P/N search ── */
    'index.pn.tag':         { en:'// Instant RFQ',          fr:'// Demande instantanée',   zh:'// 即时询价',    ar:'// طلب فوري',           de:'// Sofortanfrage' },
    'index.pn.title':       { en:'Have a Part Number?',     fr:'Vous avez une référence ?', zh:'有料号吗？',     ar:'هل لديك رقم قطعة؟',   de:'Haben Sie eine Teilenummer?' },
    'index.pn.sub': {
      en: 'Enter one or more part numbers and we\'ll prepare a quote within 24 hours.',
      fr: 'Saisissez une ou plusieurs références et nous préparerons un devis sous 24 heures.',
      zh: '输入一个或多个料号，我们将在24小时内准备报价。',
      ar: 'أدخل رقم قطعة أو أكثر وسنعدّ عرضًا خلال 24 ساعة.',
      de: 'Eine oder mehrere Teilenummern eingeben – wir erstellen innerhalb von 24 Stunden ein Angebot.'
    },
    'index.pn.placeholder': { en:'e.g. H100 SXM5, RTX 5090, EPYC 9654 ...', fr:'ex. H100 SXM5, RTX 5090, EPYC 9654 ...', zh:'例如：H100 SXM5, RTX 5090, EPYC 9654 ...', ar:'مثال: H100 SXM5, RTX 5090', de:'z.B. H100 SXM5, RTX 5090, EPYC 9654 ...' },
    'index.pn.btn':         { en:'Get Quote',   fr:'Obtenir un devis', zh:'获取报价',  ar:'احصل على عرض',  de:'Angebot erhalten' },
    'index.pn.popular':     { en:'Popular:',    fr:'Populaires :',     zh:'热门:',     ar:'الأكثر طلبًا:', de:'Beliebt:' },

    /* ── PRODUCTS page ── */
    'products.tag':       { en:'// Current Inventory',  fr:'// Inventaire actuel',         zh:'// 当前库存',  ar:'// المخزون الحالي',  de:'// Aktueller Bestand' },
    'products.h1':        { en:'Hardware',               fr:'Matériel',                     zh:'硬件',        ar:'الأجهزة',            de:'Hardware' },
    'products.h1.span':   { en:'Inventory',              fr:'Inventaire',                   zh:'库存',        ar:'المخزون',            de:'Inventar' },
    'products.sub': {
      en: 'Factory New (NIB) and Working Pull enterprise hardware. All items subject to BIS/EAR compliance review. Submit RFQ for current pricing and lead time.',
      fr: 'Matériel entreprise neuf (NIB) et tirages testés. Tous les articles sont soumis à la revue de conformité BIS/EAR. Soumettez une demande pour les prix et délais actuels.',
      zh: '全新库存（NIB）及工作状态翻新企业级硬件。所有商品须经BIS/EAR合规审核。提交询价获取最新报价及交货周期。',
      ar: 'أجهزة المؤسسات جديدة في الصندوق ومسحوبة صالحة للعمل. جميع العناصر خاضعة لمراجعة الامتثال.',
      de: 'Fabrikneue (NIB) und geprüfte Enterprise-Hardware. Alle Artikel unterliegen der BIS/EAR-Compliance-Prüfung.'
    },
    'products.filter':      { en:'// Filter by category',     fr:'// Filtrer par catégorie',       zh:'// 按类别筛选',    ar:'// التصفية حسب الفئة',  de:'// Nach Kategorie filtern' },
    'products.bom.tag':     { en:'// Full BOM Fulfillment',    fr:'// Réalisation de BOM complète', zh:'// 完整BOM满足',   ar:'// تلبية قائمة المواد',  de:'// BOM-Erfüllung' },
    'products.bom.title':   { en:'Don\'t see your part number?', fr:'Référence introuvable ?',     zh:'没有找到您的料号？', ar:'لم تجد رقم القطعة؟',  de:'Teilenummer nicht gefunden?' },
    'products.bom.sub': {
      en: 'Submit your P/N list or full BOM — we source across global networks including EOL and allocated items.',
      fr: 'Soumettez votre liste de références ou BOM complète — nous approvisionnons dans le monde entier, y compris les articles EOL et alloués.',
      zh: '提交您的料号列表或完整BOM，我们在全球网络中采购，包括停产和限量商品。',
      ar: 'أرسل قائمة أرقام القطع أو قائمة المواد الكاملة، نستورد عبر شبكات عالمية.',
      de: 'P/N-Liste oder vollständige BOM einreichen — wir beschaffen weltweit, auch EOL- und allozierte Artikel.'
    },
    'products.bom.btn':     { en:'Submit BOM / P/N',   fr:'Soumettre BOM / Réf.',  zh:'提交BOM/料号',  ar:'إرسال قائمة المواد',  de:'BOM / P/N einreichen' },

    /* ── CONTACT page ── */
    'contact.tag':       { en:'// Request for Quote',  fr:'// Demande de devis',     zh:'// 询价请求',   ar:'// طلب عرض سعر',   de:'// Angebotsanfrage' },
    'contact.h1a':       { en:'Tell Us What',          fr:'Dites-nous ce',           zh:'告诉我们',     ar:'أخبرنا',           de:'Teilen Sie uns mit' },
    'contact.h1b':       { en:'Need.',                 fr:'dont vous avez besoin.',  zh:'您的需求。',   ar:'ما تحتاجه.',       de:'Was Sie brauchen.' },
    'contact.sub': {
      en: 'Submit your Part Number, BOM, or general hardware requirement. We respond with pricing, availability, and lead time within 24 hours.',
      fr: 'Soumettez votre référence, BOM ou besoin matériel. Nous répondons avec prix, disponibilité et délai sous 24 heures.',
      zh: '提交您的料号、BOM或一般硬件需求。我们将在24小时内回复报价、库存及交货周期。',
      ar: 'أرسل رقم القطعة أو قائمة المواد. نرد بالتسعير والتوفر ووقت التسليم خلال 24 ساعة.',
      de: 'Teilenummer, BOM oder allgemeine Hardwareanforderung einreichen. Antwort innerhalb von 24 Stunden.'
    },
    'contact.form.tag':     { en:'// RFQ Submission',      fr:'// Soumission de demande',   zh:'// 询价提交',   ar:'// تقديم الطلب',    de:'// Angebotseinreichung' },
    'contact.form.title':   { en:'Request for Quotation',  fr:'Demande de devis',           zh:'询价申请',     ar:'طلب عرض سعر',      de:'Angebotsanfrage' },
    'contact.field.name':   { en:'Full Name',              fr:'Nom complet',                zh:'姓名',         ar:'الاسم الكامل',      de:'Vollständiger Name' },
    'contact.field.company':{ en:'Company / Organization', fr:'Entreprise / Organisation',  zh:'公司/机构',    ar:'الشركة / المنظمة', de:'Unternehmen' },
    'contact.field.email':  { en:'Business Email',         fr:'E-mail professionnel',       zh:'商务邮箱',     ar:'البريد الإلكتروني', de:'Geschäftliche E-Mail' },
    'contact.field.phone':  { en:'Phone / WhatsApp',       fr:'Téléphone / WhatsApp',       zh:'电话/WhatsApp', ar:'الهاتف / واتساب',  de:'Telefon / WhatsApp' },
    'contact.field.country':{ en:'Country / Region',       fr:'Pays / Région',              zh:'国家/地区',    ar:'الدولة / المنطقة', de:'Land / Region' },
    'contact.field.type':   { en:'Inquiry Type',           fr:'Type de demande',            zh:'询价类型',     ar:'نوع الاستفسار',    de:'Anfrageart' },
    'contact.field.pn':     { en:'Part Number(s) / BOM Description', fr:'Référence(s) / Description BOM', zh:'料号/BOM描述', ar:'رقم القطع / وصف قائمة المواد', de:'Teilenummer(n) / BOM-Beschreibung' },
    'contact.field.qty':    { en:'Estimated Quantity',     fr:'Quantité estimée',           zh:'预计数量',     ar:'الكمية المقدرة',   de:'Geschätzte Menge' },
    'contact.field.price':  { en:'Target Price (USD)',     fr:'Prix cible (USD)',            zh:'目标价格（美元）', ar:'السعر المستهدف (USD)', de:'Zielpreis (USD)' },
    'contact.field.dest':   { en:'Delivery Destination',  fr:'Destination de livraison',   zh:'交货目的地',   ar:'وجهة التسليم',     de:'Lieferziel' },
    'contact.field.notes':  { en:'Additional Notes',       fr:'Notes supplémentaires',      zh:'备注',         ar:'ملاحظات إضافية',   de:'Anmerkungen' },
    'contact.field.bom':    { en:'BOM File Upload',        fr:'Téléverser fichier BOM',     zh:'BOM文件上传',  ar:'رفع ملف قائمة المواد', de:'BOM-Datei hochladen' },

    /* ── FAQ page ── */
    'faq.tag': { en:'// Frequently Asked Questions', fr:'// Questions fréquentes', zh:'// 常见问题', ar:'// الأسئلة الشائعة', de:'// Häufig gestellte Fragen' },
    'faq.h1':  { en:'Got',         fr:'Vous avez',    zh:'有',      ar:'هل لديك', de:'Haben Sie' },
    'faq.h1b': { en:'Questions?',  fr:'des questions ?', zh:'疑问？', ar:'أسئلة؟', de:'Fragen?' },
    'faq.sub': {
      en: 'Everything you need to know about sourcing hardware through MICA Supply — from submitting your first RFQ to receiving your shipment.',
      fr: 'Tout ce que vous devez savoir sur l\'approvisionnement matériel via MICA Supply — de votre première demande à la réception de votre commande.',
      zh: '关于通过MICA Supply采购硬件的一切——从提交首次询价到收货的全流程解答。',
      ar: 'كل ما تحتاج معرفته حول شراء الأجهزة عبر MICA Supply.',
      de: 'Alles über die Hardware-Beschaffung über MICA Supply — von der ersten Anfrage bis zum Wareneingang.'
    },

    /* ── FAQ — nav & section headers ── */
    'faq.nav.jump':  { en:'// Jump to',             fr:'// Aller à',                  zh:'// 跳转到',    ar:'// انتقل إلى',          de:'// Springe zu' },
    'faq.nav.rfq':   { en:'Quoting & Ordering',     fr:'Devis & Commande',            zh:'报价与订购',   ar:'الأسعار والطلبات',      de:'Angebot & Bestellung' },
    'faq.nav.moq':   { en:'Min. Order Qty',         fr:'Qté min. commande',           zh:'最小订购量',   ar:'الحد الأدنى للطلب',    de:'Mindestbestellmenge' },
    'faq.nav.nib':   { en:'NIB vs Pulls',           fr:'NIB vs Reconditionné',        zh:'NIB与翻新',   ar:'NIB مقابل المسحوبات',  de:'NIB vs. Pulls' },
    'faq.nav.log':   { en:'Logistics & Lead Time',  fr:'Logistique & Délais',         zh:'物流与周期',   ar:'اللوجستيات والمواعيد', de:'Logistik & Lieferzeit' },
    'faq.nav.comp':  { en:'Export Compliance',      fr:'Conformité export',           zh:'出口合规',     ar:'الامتثال للتصدير',     de:'Export-Compliance' },
    'faq.nav.pay':   { en:'Payment',                fr:'Paiement',                    zh:'付款',         ar:'الدفع',                de:'Zahlung' },

    'faq.s1.tag':   { en:'// 01 — Quoting & Ordering',     fr:'// 01 — Devis & Commande',            zh:'// 01 — 报价与订购',     ar:'// 01 — الأسعار والطلبات',      de:'// 01 — Angebot & Bestellung' },
    'faq.s1.title': { en:'How does the RFQ process work?', fr:'Comment fonctionne le processus RFQ ?', zh:'询价流程是怎样的？',      ar:'كيف تعمل عملية طلب الأسعار؟',  de:'Wie funktioniert der RFQ-Prozess?' },
    'faq.s2.tag':   { en:'// 02 — Minimum Order Quantity', fr:'// 02 — Quantité minimale de commande', zh:'// 02 — 最小订购量',     ar:'// 02 — الحد الأدنى للطلب',     de:'// 02 — Mindestbestellmenge' },
    'faq.s2.title': { en:'What are your order minimums?',  fr:'Quels sont vos minimums de commande ?', zh:'你们的最低订购量是多少？', ar:'ما هي الحدود الدنيا لطلبكم؟',  de:'Was sind Ihre Mindestbestellmengen?' },
    'faq.s3.tag':   { en:'// 03 — Product Condition',      fr:'// 03 — État du produit',               zh:'// 03 — 产品状态',        ar:'// 03 — حالة المنتج',           de:'// 03 — Produktzustand' },
    'faq.s3.title': { en:'What is the difference between NIB and Working Pulls?', fr:'Quelle est la différence entre NIB et reconditionné ?', zh:'NIB与工作状态翻新有什么区别？', ar:'ما الفرق بين NIB والمسحوبات الصالحة؟', de:'Was ist der Unterschied zwischen NIB und Working Pulls?' },
    'faq.s4.tag':   { en:'// 04 — Logistics & Lead Time',  fr:'// 04 — Logistique & Délais',           zh:'// 04 — 物流与交货周期',  ar:'// 04 — اللوجستيات والمواعيد',  de:'// 04 — Logistik & Lieferzeit' },
    'faq.s4.title': { en:'Shipping, delivery, and lead times', fr:'Expédition, livraison et délais',   zh:'运输、交付与交货周期',     ar:'الشحن والتسليم والمواعيد',      de:'Versand, Lieferung und Lieferzeiten' },
    'faq.s5.tag':   { en:'// 05 — Export Compliance',      fr:'// 05 — Conformité export',             zh:'// 05 — 出口合规',        ar:'// 05 — الامتثال للتصدير',      de:'// 05 — Export-Compliance' },
    'faq.s5.title': { en:'BIS, EAR, and End-User requirements', fr:'BIS, EAR et exigences utilisateur final', zh:'BIS、EAR与最终用户要求', ar:'متطلبات BIS وEAR والمستخدم النهائي', de:'BIS, EAR und Endnutzeranforderungen' },
    'faq.s6.tag':   { en:'// 06 — Payment',                fr:'// 06 — Paiement',                      zh:'// 06 — 付款',            ar:'// 06 — الدفع',                 de:'// 06 — Zahlung' },
    'faq.s6.title': { en:'Payment methods and terms',       fr:'Modes et conditions de paiement',       zh:'付款方式与条款',           ar:'طرق وشروط الدفع',               de:'Zahlungsmethoden und -bedingungen' },

    /* ── FAQ — questions ── */
    'faq.q1.1': { en:'How do I get a quote?',                          fr:'Comment obtenir un devis ?',                       zh:'如何获取报价？',            ar:'كيف أحصل على عرض سعر؟',                     de:'Wie erhalte ich ein Angebot?' },
    'faq.q1.2': { en:'What information should I include in my RFQ?',  fr:'Quelles informations inclure dans ma demande ?',   zh:'询价时应包含哪些信息？',     ar:'ما المعلومات التي يجب تضمينها في طلبي؟',    de:'Welche Angaben sollte ich in meine Anfrage aufnehmen?' },
    'faq.q1.3': { en:'How long does the full order process take?',     fr:'Combien de temps prend le processus de commande ?', zh:'完整订单流程需要多长时间？', ar:'كم يستغرق عملية الطلب الكاملة؟',            de:'Wie lange dauert der gesamte Bestellprozess?' },
    'faq.q1.4': { en:'Can you source items not listed on your products page?', fr:'Pouvez-vous sourcer des articles non listés ?', zh:'你们能采购产品页未列出的商品吗？', ar:'هل يمكنكم توريد عناصر غير مدرجة؟',      de:'Können Sie auch nicht gelistete Artikel beschaffen?' },
    'faq.q2.1': { en:'Is there a minimum order quantity (MOQ)?',       fr:'Y a-t-il une quantité minimale de commande ?',    zh:'有最小订购量要求吗？',       ar:'هل يوجد حد أدنى لكمية الطلب؟',             de:'Gibt es eine Mindestbestellmenge (MOQ)?' },
    'faq.q2.2': { en:'Do you offer volume discounts?',                 fr:'Proposez-vous des remises sur volume ?',           zh:'你们提供批量折扣吗？',        ar:'هل تقدمون خصومات على الكميات؟',            de:'Bieten Sie Mengenrabatte an?' },
    'faq.q3.1': { en:'What does Factory New (NIB) mean?',              fr:'Que signifie « neuf en boîte » (NIB) ?',          zh:'全新库存（NIB）是什么意思？', ar:'ماذا يعني "جديد في الصندوق" (NIB)؟',        de:'Was bedeutet Fabrikneu (NIB)?' },
    'faq.q3.2': { en:'What does Working Pull mean?',                   fr:'Que signifie « tirage fonctionnel » ?',            zh:'工作状态翻新是什么意思？',    ar:'ماذا يعني "مسحوب صالح للعمل"؟',            de:'Was bedeutet Working Pull?' },
    'faq.q3.3': { en:'How do I know which condition to request?',      fr:'Comment savoir quelle condition demander ?',       zh:'如何选择商品状态？',          ar:'كيف أعرف أي حالة أطلب؟',                   de:'Wie wähle ich den richtigen Zustand?' },
    'faq.q4.1': { en:'Which regions do you ship to?',                  fr:'Dans quelles régions livrez-vous ?',               zh:'你们向哪些地区发货？',        ar:'ما هي المناطق التي تشحنون إليها؟',         de:'In welche Regionen versenden Sie?' },
    'faq.q4.2': { en:'What are typical lead times?',                   fr:'Quels sont les délais typiques ?',                 zh:'典型的交货周期是多长？',      ar:'ما هي فترات التسليم الاعتيادية؟',          de:'Was sind typische Lieferzeiten?' },
    'faq.q4.3': { en:'Do you handle customs documentation?',           fr:'Gérez-vous la documentation douanière ?',          zh:'你们处理海关文件吗？',        ar:'هل تتولون توثيق الجمارك؟',                 de:'Übernehmen Sie die Zolldokumentation?' },
    'faq.q5.1': { en:'Why do you require an End-User Statement (EUS)?', fr:'Pourquoi exigez-vous une déclaration d\'utilisateur final ?', zh:'为什么需要最终用户声明？',   ar:'لماذا تطلبون بيان المستخدم النهائي؟',   de:'Warum verlangen Sie eine End-User-Erklärung?' },
    'faq.q5.2': { en:'What is BIS/Entity List screening?',             fr:'Qu\'est-ce que le contrôle BIS/Liste des entités ?', zh:'什么是BIS/实体名单审查？',   ar:'ما هو فحص BIS/قائمة الكيانات؟',            de:'Was ist die BIS/Entity-List-Prüfung?' },
    'faq.q5.3': { en:'Can you ship to China?',                         fr:'Pouvez-vous livrer en Chine ?',                    zh:'你们能发货到中国大陆吗？',    ar:'هل يمكنكم الشحن إلى الصين؟',               de:'Können Sie nach China liefern?' },
    'faq.q6.1': { en:'What payment methods do you accept?',            fr:'Quels modes de paiement acceptez-vous ?',          zh:'你们接受哪些付款方式？',      ar:'ما طرق الدفع التي تقبلونها؟',              de:'Welche Zahlungsmethoden akzeptieren Sie?' },
    'faq.q6.2': { en:'Do you offer credit terms or net payment?',      fr:'Proposez-vous des conditions de crédit ?',         zh:'你们提供信用账期吗？',         ar:'هل تقدمون شروط ائتمان أو دفع صافي؟',       de:'Bieten Sie Zahlungsziele oder Nettobedingungen an?' },

    /* ── FAQ — answers (HTML) ── */
    'faq.a1.1': {
      en: '<p>Submit a <a href="contact.html">Request for Quote (RFQ)</a> with your part number(s), required quantity, and delivery destination. You can also upload a BOM file in Excel or PDF format directly from the form.</p><p>We review every submission and respond with <strong>pricing, availability, and estimated lead time within 24 hours</strong> on business days.</p>',
      fr: '<p>Soumettez une <a href="contact.html">Demande de devis (RFQ)</a> avec vos références, la quantité requise et la destination de livraison. Vous pouvez aussi joindre un fichier BOM au format Excel ou PDF.</p><p>Nous examinons chaque demande et répondons avec <strong>les prix, la disponibilité et le délai estimé sous 24 heures</strong> les jours ouvrés.</p>',
      zh: '<p>通过<a href="contact.html">询价表（RFQ）</a>提交您的料号、所需数量和交货目的地。您也可以直接在表单中上传Excel或PDF格式的BOM文件。</p><p>我们审核每一份提交，并在工作日<strong>24小时内回复报价、库存及预计交货周期</strong>。</p>',
      ar: '<p>أرسل <a href="contact.html">طلب عرض سعر (RFQ)</a> مع أرقام القطع والكمية المطلوبة ووجهة التسليم. يمكنك أيضاً رفع ملف BOM بصيغة Excel أو PDF.</p><p>نراجع كل طلب ونرد بـ<strong>التسعير والتوفر وتقدير وقت التسليم خلال 24 ساعة</strong> أيام العمل.</p>',
      de: '<p>Senden Sie eine <a href="contact.html">Angebotsanfrage (RFQ)</a> mit Ihren Teilenummern, der benötigten Menge und dem Lieferziel. Sie können auch eine BOM-Datei als Excel oder PDF hochladen.</p><p>Wir prüfen jede Anfrage und antworten mit <strong>Preisen, Verfügbarkeit und geschätzter Lieferzeit innerhalb von 24 Stunden</strong> an Werktagen.</p>'
    },
    'faq.a1.2': {
      en: '<p>The more detail you provide, the faster we can respond. Ideally include:</p><p><strong>Part number(s) or model names</strong> — exact OEM P/N preferred<br><strong>Quantity</strong> — exact units or estimated range<br><strong>Condition preference</strong> — Factory New (NIB) or Working Pull<br><strong>Delivery destination</strong> — country and city<br><strong>Target price</strong> — if you have a budget in mind<br><strong>Timeline</strong> — required delivery date or lead time constraints</p><p>For large orders or full BOM lists, upload your file directly via the RFQ form.</p>',
      fr: '<p>Plus vous fournissez de détails, plus vite nous pouvons répondre. Idéalement, indiquez :</p><p><strong>Référence(s) ou noms de modèle</strong> — P/N OEM exact préféré<br><strong>Quantité</strong> — unités exactes ou fourchette estimée<br><strong>Préférence d\'état</strong> — Neuf en boîte (NIB) ou tirage<br><strong>Destination de livraison</strong> — pays et ville<br><strong>Prix cible</strong> — si vous avez un budget<br><strong>Délai</strong> — date de livraison requise ou contraintes</p><p>Pour les grandes commandes, joignez votre fichier BOM via le formulaire.</p>',
      zh: '<p>您提供的信息越详细，我们回复越快。理想情况下请包含：</p><p><strong>料号或型号</strong>——优先提供精确的OEM P/N<br><strong>数量</strong>——精确数量或估计范围<br><strong>状态偏好</strong>——全新库存（NIB）或工作状态翻新<br><strong>交货目的地</strong>——国家和城市<br><strong>目标价格</strong>——如有预算要求<br><strong>时间要求</strong>——所需交货日期或交货周期限制</p><p>大批量订单或完整BOM列表，请通过询价表直接上传文件。</p>',
      ar: '<p>كلما قدمت تفاصيل أكثر، كلما استجبنا أسرع. يُفضّل تضمين:</p><p><strong>أرقام القطع أو أسماء الطرازات</strong><br><strong>الكمية</strong> — وحدات دقيقة أو نطاق تقديري<br><strong>تفضيل الحالة</strong> — جديد في الصندوق أو مسحوب صالح<br><strong>وجهة التسليم</strong> — الدولة والمدينة<br><strong>السعر المستهدف</strong> — إن كان لديك ميزانية<br><strong>الجدول الزمني</strong> — تاريخ التسليم المطلوب</p>',
      de: '<p>Je mehr Details Sie angeben, desto schneller können wir antworten. Idealerweise geben Sie an:</p><p><strong>Teilenummer(n) oder Modellnamen</strong> — exakte OEM-P/N bevorzugt<br><strong>Menge</strong> — genaue Stückzahl oder Schätzbereich<br><strong>Zustandspräferenz</strong> — Fabrikneu (NIB) oder Working Pull<br><strong>Lieferziel</strong> — Land und Stadt<br><strong>Zielpreis</strong> — falls Budget vorhanden<br><strong>Zeitplan</strong> — benötigtes Lieferdatum oder Fristen</p><p>Für große Bestellungen laden Sie Ihre BOM-Datei direkt über das Formular hoch.</p>'
    },
    'faq.a1.3': {
      en: '<p>A typical order follows this timeline:</p><p><strong>Quote response:</strong> Within 24 hours of RFQ submission<br><strong>Compliance screening:</strong> 1 business day (BIS/Entity List check)<br><strong>Order confirmation:</strong> Upon receipt of signed PO and payment<br><strong>Sourcing & preparation:</strong> 2–7 business days depending on item<br><strong>Shipping:</strong> 3–10 business days depending on destination</p><p>Allocated or hard-to-find items may require additional sourcing time. We will communicate any delays proactively.</p>',
      fr: '<p>Une commande type suit ce calendrier :</p><p><strong>Réponse au devis :</strong> Dans les 24 heures suivant la soumission<br><strong>Contrôle de conformité :</strong> 1 jour ouvré (vérification BIS)<br><strong>Confirmation de commande :</strong> À réception du bon de commande signé et du paiement<br><strong>Approvisionnement & préparation :</strong> 2 à 7 jours ouvrés<br><strong>Expédition :</strong> 3 à 10 jours ouvrés selon la destination</p><p>Les articles alloués ou difficiles à trouver peuvent nécessiter plus de temps.</p>',
      zh: '<p>典型订单流程如下：</p><p><strong>报价回复：</strong>提交询价后24小时内<br><strong>合规审查：</strong>1个工作日（BIS/实体名单核查）<br><strong>订单确认：</strong>收到已签署采购订单及付款后<br><strong>采购与准备：</strong>视商品而定，2-7个工作日<br><strong>运输：</strong>视目的地而定，3-10个工作日</p><p>限量或难以获取的商品可能需要额外采购时间，我们将主动告知任何延误。</p>',
      ar: '<p>يتبع الطلب النموذجي هذا الجدول الزمني:</p><p><strong>رد على عرض الأسعار:</strong> خلال 24 ساعة<br><strong>فحص الامتثال:</strong> يوم عمل واحد<br><strong>تأكيد الطلب:</strong> عند استلام الطلب الموقّع والدفع<br><strong>التوريد والتحضير:</strong> 2-7 أيام عمل<br><strong>الشحن:</strong> 3-10 أيام عمل حسب الوجهة</p><p>قد تستغرق العناصر النادرة وقتاً إضافياً للتوريد.</p>',
      de: '<p>Eine typische Bestellung folgt diesem Zeitplan:</p><p><strong>Antwort auf Anfrage:</strong> Innerhalb von 24 Stunden<br><strong>Compliance-Prüfung:</strong> 1 Werktag (BIS/Entity-List-Check)<br><strong>Bestellbestätigung:</strong> Nach Eingang der unterzeichneten Bestellung und Zahlung<br><strong>Beschaffung & Vorbereitung:</strong> 2–7 Werktage je nach Artikel<br><strong>Versand:</strong> 3–10 Werktage je nach Ziel</p><p>Allozierte oder schwer zu findende Artikel können zusätzliche Beschaffungszeit erfordern.</p>'
    },
    'faq.a1.4': {
      en: '<p><strong>Yes.</strong> The products page shows commonly requested items, but our sourcing network covers a much broader range. We regularly handle:</p><div class="tag-row"><span class="faq-tag blue">EOL / Discontinued Parts</span><span class="faq-tag blue">Allocated Silicon</span><span class="faq-tag blue">Full BOM Fulfillment</span><span class="faq-tag blue">Custom Configurations</span></div><p style="margin-top:.8rem">Submit an RFQ with your P/N or BOM file — if it exists in the market, we will find it.</p>',
      fr: '<p><strong>Oui.</strong> La page produits présente les articles couramment demandés, mais notre réseau d\'approvisionnement est bien plus large. Nous traitons régulièrement :</p><div class="tag-row"><span class="faq-tag blue">Pièces EOL / Discontinuées</span><span class="faq-tag blue">Silicium alloué</span><span class="faq-tag blue">BOM complète</span><span class="faq-tag blue">Configurations personnalisées</span></div><p style="margin-top:.8rem">Soumettez un RFQ avec votre P/N ou fichier BOM — si ça existe sur le marché, on le trouve.</p>',
      zh: '<p><strong>可以。</strong>产品页面展示的是常见商品，但我们的采购网络覆盖范围更广。我们定期处理：</p><div class="tag-row"><span class="faq-tag blue">停产/EOL零件</span><span class="faq-tag blue">限量芯片</span><span class="faq-tag blue">完整BOM交付</span><span class="faq-tag blue">定制配置</span></div><p style="margin-top:.8rem">提交含料号或BOM文件的询价——只要市场上有，我们就能找到。</p>',
      ar: '<p><strong>نعم.</strong> تعرض صفحة المنتجات العناصر الأكثر طلباً، لكن شبكة التوريد لدينا أوسع بكثير. نتعامل بانتظام مع:</p><div class="tag-row"><span class="faq-tag blue">قطع EOL / متوقفة</span><span class="faq-tag blue">رقائق مخصصة</span><span class="faq-tag blue">تلبية BOM كاملة</span><span class="faq-tag blue">تكوينات مخصصة</span></div><p style="margin-top:.8rem">أرسل طلباً مع رقم القطعة أو ملف BOM — إن وُجد في السوق، سنجده.</p>',
      de: '<p><strong>Ja.</strong> Die Produktseite zeigt gängige Artikel, aber unser Beschaffungsnetzwerk deckt ein viel breiteres Spektrum ab. Wir bearbeiten regelmäßig:</p><div class="tag-row"><span class="faq-tag blue">EOL / Eingestellte Teile</span><span class="faq-tag blue">Allozierte Halbleiter</span><span class="faq-tag blue">Vollständige BOM-Erfüllung</span><span class="faq-tag blue">Spezielle Konfigurationen</span></div><p style="margin-top:.8rem">Senden Sie eine Anfrage mit Ihrer P/N oder BOM-Datei — wenn es auf dem Markt existiert, finden wir es.</p>'
    },
    'faq.a2.1': {
      en: '<p><strong>Minimum order is 1 unit.</strong> We work with buyers ranging from single-unit procurement to bulk pallet orders. There is no formal MOQ.</p><p>Unit pricing is more competitive for larger quantities. If purchasing a single high-value item, that is fully supported. For bulk purchases, mention your total target volume in the RFQ for tiered pricing.</p>',
      fr: '<p><strong>La commande minimale est de 1 unité.</strong> Nous travaillons avec des acheteurs allant de l\'unité unique aux commandes palettes. Il n\'y a pas de MOQ formel.</p><p>Le prix unitaire est plus compétitif pour les grandes quantités. Mentionnez votre volume cible dans la demande pour une tarification par paliers.</p>',
      zh: '<p><strong>最低订购量为1件。</strong>我们服务于从单件采购到整托批量订单的各类买家，没有正式的MOQ要求。</p><p>批量采购的单价更具竞争力。如需整体定价，请在询价中注明目标总量。</p>',
      ar: '<p><strong>الحد الأدنى للطلب هو وحدة واحدة.</strong> نعمل مع المشترين من طلب وحدة واحدة إلى طلبات بالطبلية. لا يوجد حد أدنى رسمي.</p><p>التسعير أكثر تنافسية للكميات الكبيرة. اذكر حجمك المستهدف في الطلب للحصول على تسعير متدرج.</p>',
      de: '<p><strong>Mindestbestellung ist 1 Einheit.</strong> Wir arbeiten mit Käufern von Einzelbestellungen bis hin zu Palettenmengen. Es gibt keine formale MOQ.</p><p>Der Stückpreis ist bei größeren Mengen wettbewerbsfähiger. Nennen Sie Ihr Zielvolumen in der Anfrage für Staffelpreise.</p>'
    },
    'faq.a2.2': {
      en: '<p>Yes. Pricing scales with volume. For large or recurring orders, we can offer structured pricing agreements. Include your estimated annual or quarterly volume in the RFQ notes.</p><p>Repeat customers and established partners receive priority sourcing and expedited response times.</p>',
      fr: '<p>Oui. La tarification s\'adapte au volume. Pour les commandes importantes ou récurrentes, nous pouvons proposer des accords de tarification structurés. Incluez votre volume annuel ou trimestriel estimé dans les notes de la demande.</p><p>Les clients réguliers et partenaires établis bénéficient d\'un approvisionnement prioritaire et de délais de réponse accélérés.</p>',
      zh: '<p>是的。价格随批量调整。对于大批量或长期订单，我们可以提供结构化定价协议。在询价备注中注明预计年度或季度采购量。</p><p>回头客和长期合作伙伴享有优先采购和加急响应服务。</p>',
      ar: '<p>نعم. يتدرج التسعير مع الحجم. للطلبات الكبيرة أو المتكررة، يمكننا تقديم اتفاقيات تسعير هيكلية.</p><p>يحصل العملاء المتكررون والشركاء المعتمدون على أولوية في التوريد وأوقات استجابة أسرع.</p>',
      de: '<p>Ja. Preise skalieren mit dem Volumen. Für große oder wiederkehrende Bestellungen können wir strukturierte Preisvereinbarungen anbieten.</p><p>Stammkunden und etablierte Partner erhalten bevorzugte Beschaffung und beschleunigte Antwortzeiten.</p>'
    },
    'faq.a3.1': {
      en: '<p><strong>NIB (New In Box)</strong> refers to factory-sealed units sourced directly from authorized distribution channels or manufacturer inventory. These units are:</p><div class="tag-row"><span class="faq-tag blue">Sealed OEM Packaging</span><span class="faq-tag blue">Never Installed</span><span class="faq-tag blue">Full Manufacturer Warranty</span><span class="faq-tag blue">Current Production</span></div><p style="margin-top:.8rem">NIB is recommended for production deployments, data center builds, and any use case requiring full warranty coverage.</p>',
      fr: '<p><strong>NIB (Neuf en boîte)</strong> désigne des unités scellées en usine provenant directement des canaux de distribution agréés. Ces unités sont :</p><div class="tag-row"><span class="faq-tag blue">Emballage OEM scellé</span><span class="faq-tag blue">Jamais installé</span><span class="faq-tag blue">Garantie fabricant complète</span><span class="faq-tag blue">Production actuelle</span></div><p style="margin-top:.8rem">Le NIB est recommandé pour les déploiements en production et la construction de datacenters.</p>',
      zh: '<p><strong>NIB（全新库存）</strong>指直接来自授权分销渠道或厂商库存的原厂密封产品，这些产品：</p><div class="tag-row"><span class="faq-tag blue">原厂密封包装</span><span class="faq-tag blue">从未安装</span><span class="faq-tag blue">享有完整厂商保修</span><span class="faq-tag blue">现行生产型号</span></div><p style="margin-top:.8rem">NIB适用于生产部署、数据中心建设及任何需要完整保修的场景。</p>',
      ar: '<p><strong>NIB (جديد في الصندوق)</strong> يشير إلى وحدات مختومة من المصنع مصدرها مباشرة من قنوات التوزيع المعتمدة. هذه الوحدات:</p><div class="tag-row"><span class="faq-tag blue">تغليف OEM مختوم</span><span class="faq-tag blue">لم تُركَّب قط</span><span class="faq-tag blue">ضمان المصنّع كامل</span><span class="faq-tag blue">إنتاج حالي</span></div><p style="margin-top:.8rem">يُنصح بـ NIB لبيئات الإنتاج ومراكز البيانات.</p>',
      de: '<p><strong>NIB (Neu im Karton)</strong> bezeichnet werksversiegelte Einheiten direkt aus autorisierten Vertriebskanälen. Diese Einheiten sind:</p><div class="tag-row"><span class="faq-tag blue">Versiegelte OEM-Verpackung</span><span class="faq-tag blue">Nie installiert</span><span class="faq-tag blue">Volle Herstellergarantie</span><span class="faq-tag blue">Aktuelle Produktion</span></div><p style="margin-top:.8rem">NIB empfiehlt sich für Produktionsumgebungen, Rechenzentrumsaufbau und alle Anwendungsfälle, die volle Garantieabdeckung erfordern.</p>'
    },
    'faq.a3.2': {
      en: '<p><strong>Working Pulls</strong> are enterprise-grade components removed from decommissioned hyperscaler or data center environments. Before shipment, all Working Pull items are:</p><div class="tag-row"><span class="faq-tag teal">Tested & Verified Functional</span><span class="faq-tag teal">Graded by Condition</span><span class="faq-tag teal">Cleaned & Inspected</span></div><p style="margin-top:.8rem">Working Pulls offer significant cost savings over NIB — typically 30–60% lower — and are ideal for lab environments, dev clusters, or capacity expansion.</p><p>All Working Pull items ship with a <strong>MICA Supply functional guarantee</strong>. If a unit fails on arrival, we replace it.</p>',
      fr: '<p><strong>Les tirages fonctionnels</strong> sont des composants de qualité enterprise retirés d\'environnements hyperscaler ou de datacenters mis hors service. Avant expédition, tous les articles sont :</p><div class="tag-row"><span class="faq-tag teal">Testés & fonctionnels</span><span class="faq-tag teal">Classés par état</span><span class="faq-tag teal">Nettoyés & inspectés</span></div><p style="margin-top:.8rem">Les tirages offrent des économies significatives par rapport au NIB — généralement 30 à 60 % moins cher.</p><p>Tous les articles livrent avec une <strong>garantie fonctionnelle MICA Supply</strong>. En cas de défaut à la réception, nous remplaçons l\'unité.</p>',
      zh: '<p><strong>工作状态翻新件</strong>是从退役超大规模数据中心或企业环境中拆除的企业级组件。发货前，所有翻新件均经过：</p><div class="tag-row"><span class="faq-tag teal">测试验证功能正常</span><span class="faq-tag teal">按状态分级</span><span class="faq-tag teal">清洁检查</span></div><p style="margin-top:.8rem">翻新件比NIB节省约30-60%的成本，适合实验室、开发集群或扩容场景。</p><p>所有翻新件随附<strong>MICA Supply功能保证</strong>——到货发现故障即更换。</p>',
      ar: '<p><strong>المسحوبات الصالحة للعمل</strong> هي مكونات على مستوى المؤسسات مُزالة من مراكز بيانات متوقفة عن الخدمة. قبل الشحن، تخضع جميع العناصر لـ:</p><div class="tag-row"><span class="faq-tag teal">اختبار والتحقق من الوظائف</span><span class="faq-tag teal">تصنيف حسب الحالة</span><span class="faq-tag teal">تنظيف وفحص</span></div><p style="margin-top:.8rem">توفر المسحوبات وفورات تصل إلى 30-60% مقارنة بـ NIB.</p><p>جميع المسحوبات تأتي مع <strong>ضمان MICA Supply الوظيفي</strong>.</p>',
      de: '<p><strong>Working Pulls</strong> sind Enterprise-Komponenten aus stillgelegten Hyperscaler- oder Rechenzentrumsbetrieben. Vor dem Versand werden alle Artikel:</p><div class="tag-row"><span class="faq-tag teal">Getestet & funktional verifiziert</span><span class="faq-tag teal">Nach Zustand klassiert</span><span class="faq-tag teal">Gereinigt & inspiziert</span></div><p style="margin-top:.8rem">Working Pulls bieten bis zu 30–60% Ersparnis gegenüber NIB und eignen sich für Lab- oder Dev-Umgebungen.</p><p>Alle Working-Pull-Artikel werden mit <strong>MICA Supply Funktionsgarantie</strong> geliefert.</p>'
    },
    'faq.a3.3': {
      en: '<p><strong>Choose NIB if:</strong> You require full OEM warranty, the item will be in a production-critical environment, or your procurement policy mandates new hardware.</p><p><strong>Choose Working Pull if:</strong> You are building a dev/test cluster, expanding capacity, need a cost-effective solution, or the item is EOL.</p><p>Not sure? Mention both options in your RFQ and we will quote both for comparison.</p>',
      fr: '<p><strong>Choisissez NIB si :</strong> Vous avez besoin de la garantie OEM complète, l\'article sera dans un environnement critique, ou votre politique impose du matériel neuf.</p><p><strong>Choisissez un tirage si :</strong> Vous construisez un cluster dev/test, vous étendez les capacités, vous cherchez une solution économique, ou l\'article est EOL.</p><p>Pas sûr(e) ? Mentionnez les deux dans votre demande et nous comparerons les deux options.</p>',
      zh: '<p><strong>选择NIB的情况：</strong>需要完整的OEM保修、用于生产关键环境，或采购政策要求全新硬件。</p><p><strong>选择翻新件的情况：</strong>构建开发/测试集群、扩充产能、需要经济实惠的方案，或商品已停产。</p><p>不确定？在询价中同时提及两种选项，我们将分别报价供您对比。</p>',
      ar: '<p><strong>اختر NIB إذا:</strong> تحتاج لضمان OEM الكامل، أو العنصر في بيئة إنتاج حرجة، أو تفرض سياستك أجهزة جديدة.</p><p><strong>اختر المسحوب الصالح إذا:</strong> تبني مجموعة تطوير/اختبار، أو توسع طاقتك، أو تحتاج حلاً اقتصادياً.</p><p>غير متأكد؟ اذكر كلا الخيارين في طلبك وسنقدم عرضَين للمقارنة.</p>',
      de: '<p><strong>Wählen Sie NIB, wenn:</strong> Sie volle OEM-Garantie benötigen, der Artikel in einer produktionskritischen Umgebung eingesetzt wird, oder Ihre Beschaffungsrichtlinie neue Hardware vorschreibt.</p><p><strong>Wählen Sie Working Pull, wenn:</strong> Sie einen Dev/Test-Cluster aufbauen, Kapazitäten erweitern oder einen kosteneffizienten EOL-Artikel benötigen.</p><p>Unsicher? Erwähnen Sie beide Optionen in Ihrer Anfrage — wir quotieren beides zum Vergleich.</p>'
    },
    'faq.a4.1': {
      en: '<p>We serve customers across four primary trade corridors:</p><div class="tag-row"><span class="faq-tag blue">North America</span><span class="faq-tag blue">United Arab Emirates</span><span class="faq-tag blue">Hong Kong</span><span class="faq-tag blue">Southeast Asia</span><span class="faq-tag blue">Europe</span></div><p style="margin-top:.8rem">Shipments outside these corridors are evaluated case-by-case. All international shipments are subject to export compliance screening prior to booking.</p>',
      fr: '<p>Nous servons des clients sur quatre corridors commerciaux principaux :</p><div class="tag-row"><span class="faq-tag blue">Amérique du Nord</span><span class="faq-tag blue">Émirats arabes unis</span><span class="faq-tag blue">Hong Kong</span><span class="faq-tag blue">Asie du Sud-Est</span><span class="faq-tag blue">Europe</span></div><p style="margin-top:.8rem">Les expéditions hors de ces corridors sont évaluées au cas par cas. Toutes les expéditions internationales sont soumises à un contrôle de conformité export.</p>',
      zh: '<p>我们服务于四大主要贸易走廊的客户：</p><div class="tag-row"><span class="faq-tag blue">北美</span><span class="faq-tag blue">阿联酋</span><span class="faq-tag blue">香港</span><span class="faq-tag blue">东南亚</span><span class="faq-tag blue">欧洲</span></div><p style="margin-top:.8rem">以上走廊以外的目的地按具体情况评估。所有国际货物在预订前须经出口合规审查。</p>',
      ar: '<p>نخدم العملاء عبر أربعة ممرات تجارية رئيسية:</p><div class="tag-row"><span class="faq-tag blue">أمريكا الشمالية</span><span class="faq-tag blue">الإمارات</span><span class="faq-tag blue">هونغ كونغ</span><span class="faq-tag blue">جنوب شرق آسيا</span><span class="faq-tag blue">أوروبا</span></div><p style="margin-top:.8rem">تُقيَّم الشحنات خارج هذه الممرات بشكل فردي، وتخضع جميع الشحنات الدولية لفحص الامتثال.</p>',
      de: '<p>Wir bedienen Kunden in vier primären Handelskorridoren:</p><div class="tag-row"><span class="faq-tag blue">Nordamerika</span><span class="faq-tag blue">Vereinigte Arabische Emirate</span><span class="faq-tag blue">Hongkong</span><span class="faq-tag blue">Südostasien</span><span class="faq-tag blue">Europa</span></div><p style="margin-top:.8rem">Lieferungen außerhalb dieser Korridore werden fallweise bewertet. Alle internationalen Sendungen unterliegen einer Compliance-Prüfung.</p>'
    },
    'faq.a4.2': {
      en: '<p>Lead times depend on item availability and destination:</p><p><strong>In-stock items:</strong> 2–5 business days after order confirmation<br><strong>Sourced items:</strong> 5–14 business days depending on supply chain<br><strong>Allocated/scarce items:</strong> Timeline quoted on a per-case basis</p><p>Express shipping is available for urgent requirements — mention your deadline in the RFQ.</p>',
      fr: '<p>Les délais dépendent de la disponibilité et de la destination :</p><p><strong>Articles en stock :</strong> 2 à 5 jours ouvrés après confirmation<br><strong>Articles à sourcer :</strong> 5 à 14 jours ouvrés<br><strong>Articles alloués/rares :</strong> Délai communiqué au cas par cas</p><p>L\'expédition express est disponible pour les besoins urgents — mentionnez votre délai dans la demande.</p>',
      zh: '<p>交货周期取决于商品库存和目的地：</p><p><strong>现货商品：</strong>订单确认后2-5个工作日<br><strong>采购商品：</strong>视供应链情况，5-14个工作日<br><strong>限量/稀缺商品：</strong>按具体情况报价</p><p>急单可安排快递——请在询价中注明您的截止时间。</p>',
      ar: '<p>تعتمد المواعيد على توفر العناصر والوجهة:</p><p><strong>العناصر المتوفرة:</strong> 2-5 أيام عمل بعد التأكيد<br><strong>العناصر المُوردة:</strong> 5-14 يوم عمل<br><strong>العناصر النادرة:</strong> يُحدد الوقت بحسب الحالة</p><p>الشحن السريع متاح للطلبات العاجلة.</p>',
      de: '<p>Lieferzeiten hängen von Verfügbarkeit und Ziel ab:</p><p><strong>Auf Lager:</strong> 2–5 Werktage nach Auftragsbestätigung<br><strong>Zu beschaffen:</strong> 5–14 Werktage je nach Lieferkette<br><strong>Allozierte/seltene Artikel:</strong> Zeitplan fallweise angegeben</p><p>Expressversand für dringende Anforderungen möglich — Frist in der Anfrage angeben.</p>'
    },
    'faq.a4.3': {
      en: '<p>Yes. We prepare full commercial documentation for all international shipments, including:</p><p><strong>Commercial Invoice</strong> — itemized with HS codes<br><strong>Packing List</strong> — unit count, weight, dimensions<br><strong>Certificate of Origin</strong> — where required<br><strong>Export License documentation</strong> — for controlled items</p><p>For EAR-controlled items, we work with licensed freight forwarders experienced in dual-use goods compliance.</p>',
      fr: '<p>Oui. Nous préparons la documentation commerciale complète pour toutes les expéditions internationales :</p><p><strong>Facture commerciale</strong> — détaillée avec codes SH<br><strong>Liste de colisage</strong> — nombre d\'unités, poids, dimensions<br><strong>Certificat d\'origine</strong> — si requis<br><strong>Documentation de licence d\'exportation</strong> — pour articles contrôlés</p><p>Pour les articles soumis à l\'EAR, nous collaborons avec des transitaires agréés.</p>',
      zh: '<p>是的。我们为所有国际货物准备完整的商业文件，包括：</p><p><strong>商业发票</strong>——含HS编码的明细清单<br><strong>装箱单</strong>——件数、重量、尺寸<br><strong>原产地证书</strong>——如需<br><strong>出口许可证文件</strong>——针对受控商品</p><p>对于EAR受控商品，我们与有双重用途商品合规经验的持牌货运代理合作。</p>',
      ar: '<p>نعم. نُعدّ الوثائق التجارية الكاملة لجميع الشحنات الدولية، بما فيها:</p><p><strong>الفاتورة التجارية</strong> — مفصّلة مع رموز HS<br><strong>قائمة التعبئة</strong><br><strong>شهادة المنشأ</strong> — عند الاقتضاء<br><strong>وثائق رخصة التصدير</strong> — للبنود الخاضعة للرقابة</p>',
      de: '<p>Ja. Wir erstellen die vollständige Handelsdokumentation für alle internationalen Sendungen:</p><p><strong>Handelsrechnung</strong> — aufgeschlüsselt mit HS-Codes<br><strong>Packliste</strong> — Stückzahl, Gewicht, Maße<br><strong>Ursprungszeugnis</strong> — wo erforderlich<br><strong>Exportlizenzdokumentation</strong> — für kontrollierte Waren</p><p>Für EAR-kontrollierte Artikel arbeiten wir mit zugelassenen Spediteuren zusammen.</p>'
    },
    'faq.a5.1': {
      en: '<p>Many products we handle — particularly AI accelerators — are controlled under <strong>U.S. Export Administration Regulations (EAR)</strong> administered by the Bureau of Industry and Security (BIS).</p><p>The End-User Statement is a legal declaration confirming the hardware will not be re-exported or used in violation of export laws. This protects both parties and is standard in legitimate hardware brokerage.</p><p>View our full <a href="compliance.html">Export Compliance Policy</a> for details.</p>',
      fr: '<p>De nombreux produits que nous traitons — notamment les accélérateurs IA — sont contrôlés en vertu des <strong>Réglementations américaines sur l\'administration des exportations (EAR)</strong>.</p><p>La déclaration d\'utilisateur final est une attestation légale confirmant que le matériel ne sera pas réexporté en violation des lois. Consultez notre <a href="compliance.html">politique de conformité export</a> pour plus de détails.</p>',
      zh: '<p>我们经手的许多产品——尤其是AI加速器——受美国商务部工业和安全局（BIS）管理的<strong>出口管理条例（EAR）</strong>约束。</p><p>最终用户声明是一份法律声明，确认硬件不会被再出口或违反出口法规使用。这保护双方利益，是合规硬件经纪的标准要求。</p><p>详情请查看我们的<a href="compliance.html">出口合规政策</a>。</p>',
      ar: '<p>كثير من المنتجات التي نتعامل معها — خاصة مسرّعات الذكاء الاصطناعي — تخضع للوائح <strong>إدارة الصادرات الأمريكية (EAR)</strong>.</p><p>بيان المستخدم النهائي إعلان قانوني يؤكد عدم إعادة تصدير الأجهزة أو استخدامها بما يخالف قوانين التصدير.</p><p>راجع <a href="compliance.html">سياسة الامتثال للتصدير</a> لمزيد من التفاصيل.</p>',
      de: '<p>Viele Produkte, die wir handeln — besonders KI-Beschleuniger — unterliegen den <strong>U.S. Export Administration Regulations (EAR)</strong>.</p><p>Die End-User-Erklärung ist eine rechtliche Erklärung, die bestätigt, dass die Hardware nicht unter Verstoß gegen Exportgesetze re-exportiert wird. Weitere Details in unserer <a href="compliance.html">Export-Compliance-Richtlinie</a>.</p>'
    },
    'faq.a5.2': {
      en: '<p>Before confirming any order, MICA Supply screens all parties against:</p><div class="tag-row"><span class="faq-tag amber">BIS Entity List</span><span class="faq-tag amber">OFAC SDN List</span><span class="faq-tag amber">Denied Persons List</span><span class="faq-tag amber">Consolidated Screening List</span></div><p style="margin-top:.8rem">This screening is non-negotiable and applies to all transactions regardless of order size. We reserve the right to decline any order that raises compliance concerns.</p>',
      fr: '<p>Avant toute confirmation de commande, MICA Supply contrôle toutes les parties contre :</p><div class="tag-row"><span class="faq-tag amber">Liste des entités BIS</span><span class="faq-tag amber">Liste SDN OFAC</span><span class="faq-tag amber">Liste des personnes refusées</span><span class="faq-tag amber">Liste de contrôle consolidée</span></div><p style="margin-top:.8rem">Ce contrôle est non négociable et s\'applique à toutes les transactions. Nous nous réservons le droit de refuser toute commande soulevant des problèmes de conformité.</p>',
      zh: '<p>在确认任何订单之前，MICA Supply对所有参与方进行以下名单审查：</p><div class="tag-row"><span class="faq-tag amber">BIS实体名单</span><span class="faq-tag amber">OFAC SDN名单</span><span class="faq-tag amber">被拒绝人员名单</span><span class="faq-tag amber">综合筛查名单</span></div><p style="margin-top:.8rem">此审查不可协商，适用于所有交易，无论订单大小。我们保留拒绝任何引发合规担忧的订单的权利。</p>',
      ar: '<p>قبل تأكيد أي طلب، تفحص MICA Supply جميع الأطراف مقابل:</p><div class="tag-row"><span class="faq-tag amber">قائمة كيانات BIS</span><span class="faq-tag amber">قائمة OFAC SDN</span><span class="faq-tag amber">قائمة الأشخاص المرفوضين</span><span class="faq-tag amber">القائمة الفحص الموحدة</span></div><p style="margin-top:.8rem">هذا الفحص غير قابل للتفاوض ويُطبَّق على جميع المعاملات.</p>',
      de: '<p>Vor jeder Auftragsbestätigung prüft MICA Supply alle Parteien gegen:</p><div class="tag-row"><span class="faq-tag amber">BIS Entity List</span><span class="faq-tag amber">OFAC SDN List</span><span class="faq-tag amber">Denied Persons List</span><span class="faq-tag amber">Consolidated Screening List</span></div><p style="margin-top:.8rem">Diese Prüfung ist nicht verhandelbar und gilt für alle Transaktionen unabhängig von der Bestellgröße.</p>'
    },
    'faq.a5.3': {
      en: '<p>Shipments to mainland China of controlled items — including AI accelerators under ECCN 3A090 — are subject to strict restrictions under current U.S. export regulations.</p><p><strong>We do not facilitate transactions that would violate EAR restrictions.</strong> All inquiries involving mainland China delivery of controlled items will be assessed for compliance eligibility before we can proceed.</p><p>Deliveries to <strong>Hong Kong</strong> are evaluated separately and may be supported depending on the specific item and end-user.</p>',
      fr: '<p>Les expéditions vers la Chine continentale d\'articles contrôlés — notamment les accélérateurs IA sous ECCN 3A090 — sont soumises à des restrictions strictes.</p><p><strong>Nous ne facilitons pas les transactions qui violeraient les restrictions EAR.</strong> Toutes les demandes de livraison en Chine continentale d\'articles contrôlés seront évaluées pour leur éligibilité à la conformité.</p><p>Les livraisons à <strong>Hong Kong</strong> sont évaluées séparément.</p>',
      zh: '<p>向中国大陆出口受控商品——包括ECCN 3A090下的AI加速器——受现行美国出口法规严格限制。</p><p><strong>我们不承接任何违反EAR限制的交易。</strong>所有涉及向中国大陆交货受控商品的询价，在处理前均须进行合规资质评估。</p><p>向<strong>香港</strong>的交货将单独评估，视具体商品和最终用户而定是否可支持。</p>',
      ar: '<p>الشحنات إلى الصين القارية من العناصر الخاضعة للرقابة — بما فيها مسرّعات الذكاء الاصطناعي — تخضع لقيود صارمة.</p><p><strong>لا نُسهّل المعاملات التي تنتهك قيود EAR.</strong> سيُقيَّم كل استفسار يتعلق بتوصيل عناصر خاضعة للرقابة إلى الصين القارية.</p><p>توصيلات <strong>هونغ كونغ</strong> تُقيَّم بشكل منفصل.</p>',
      de: '<p>Sendungen kontrollierter Artikel nach Festlandchina — einschließlich KI-Beschleuniger unter ECCN 3A090 — unterliegen strengen Beschränkungen.</p><p><strong>Wir führen keine Transaktionen durch, die gegen EAR-Beschränkungen verstoßen würden.</strong> Alle Anfragen bezüglich Festlandchina-Lieferungen kontrollierter Artikel werden vor der Bearbeitung auf Compliance-Eignung geprüft.</p><p>Lieferungen nach <strong>Hongkong</strong> werden separat bewertet.</p>'
    },
    'faq.a6.1': {
      en: '<p>Payment details are confirmed at the time of quotation and vary by order size and customer relationship. Please include payment preference in your RFQ or contact us at <a href="mailto:sales@micasupply.ca">sales@micasupply.ca</a> to discuss terms.</p>',
      fr: '<p>Les conditions de paiement sont confirmées lors de la cotation et varient selon la taille de la commande et la relation client. Incluez votre préférence de paiement dans la demande ou contactez-nous à <a href="mailto:sales@micasupply.ca">sales@micasupply.ca</a>.</p>',
      zh: '<p>付款详情在报价时确认，因订单大小和客户关系而异。请在询价中注明付款偏好，或发邮件至<a href="mailto:sales@micasupply.ca">sales@micasupply.ca</a>商讨条款。</p>',
      ar: '<p>تفاصيل الدفع تُؤكَّد عند تقديم عرض الأسعار وتتفاوت حسب حجم الطلب. يُرجى تضمين تفضيل الدفع في الطلب أو التواصل عبر <a href="mailto:sales@micasupply.ca">sales@micasupply.ca</a>.</p>',
      de: '<p>Zahlungsdetails werden bei der Angebotsabgabe bestätigt und variieren je nach Bestellgröße und Kundenbeziehung. Bitte Zahlungspräferenz in der Anfrage angeben oder uns unter <a href="mailto:sales@micasupply.ca">sales@micasupply.ca</a> kontaktieren.</p>'
    },
    'faq.a6.2': {
      en: '<p>Extended payment terms may be available for established customers with a verified order history. First-time orders typically require payment prior to shipment. Contact us to discuss your requirements.</p>',
      fr: '<p>Des conditions de paiement étendues peuvent être disponibles pour les clients établis avec un historique de commandes vérifié. Les premières commandes nécessitent généralement un paiement avant l\'expédition.</p>',
      zh: '<p>对于有经过核实订单历史的老客户，可能可提供延期付款条款。首次订单通常需要在发货前付款。请联系我们商讨您的需求。</p>',
      ar: '<p>قد تتوفر شروط دفع ممتدة للعملاء المعتمدين ذوي تاريخ طلبات موثّق. الطلبات الأولى تستلزم عادةً الدفع قبل الشحن.</p>',
      de: '<p>Erweiterte Zahlungsziele können für Stammkunden mit nachgewiesener Bestellhistorie verfügbar sein. Erstbestellungen erfordern in der Regel Vorauszahlung. Bitte kontaktieren Sie uns.</p>'
    },

    /* ── FAQ — sidebar & CTA ── */
    'faq.sb.tag1':   { en:'// At a Glance',             fr:'// En bref',                   zh:'// 概览',       ar:'// نظرة سريعة',          de:'// Auf einen Blick' },
    'faq.sb.tag2':   { en:'// Still Have Questions?',   fr:'// Encore des questions ?',    zh:'// 还有疑问？', ar:'// لديك أسئلة أخرى؟',    de:'// Noch Fragen?' },
    'faq.sb.tag3':   { en:'// Compliance Resources',    fr:'// Ressources conformité',     zh:'// 合规资源',   ar:'// موارد الامتثال',       de:'// Compliance-Ressourcen' },
    'faq.sb.ctitle': { en:'Contact our team directly',  fr:'Contactez notre équipe',       zh:'直接联系我们团队', ar:'تواصل مع فريقنا مباشرة', de:'Unser Team direkt kontaktieren' },
    'faq.sb.csub':   { en:'Submit an RFQ or email us — we respond within one business day.', fr:'Soumettez une demande ou écrivez-nous — nous répondons en un jour ouvré.', zh:'提交询价或发送邮件——我们在一个工作日内回复。', ar:'أرسل طلباً أو راسلنا — نرد خلال يوم عمل واحد.', de:'Anfrage senden oder uns mailen — wir antworten innerhalb eines Werktags.' },
    'faq.sb.cbtn':   { en:'Submit RFQ',                 fr:'Soumettre une demande',        zh:'提交询价',      ar:'إرسال طلب عرض',          de:'Anfrage senden' },
    'faq.stat.quote':{ en:'Quote Response',             fr:'Délai de réponse',             zh:'报价响应',      ar:'وقت الرد على عرض السعر', de:'Angebotsantwort' },
    'faq.stat.min':  { en:'Min. Order',                 fr:'Commande min.',                zh:'最低订购',      ar:'الحد الأدنى للطلب',      de:'Mindestbestellung' },
    'faq.stat.reg':  { en:'Trade Regions',              fr:'Régions commerciales',         zh:'贸易地区',      ar:'مناطق التجارة',          de:'Handelsregionen' },
    'faq.stat.scr':  { en:'Screened Orders',            fr:'Commandes contrôlées',         zh:'已审查订单',    ar:'الطلبات المفحوصة',       de:'Geprüfte Bestellungen' },
    'faq.cta.tag':   { en:'// Ready to Source?',        fr:'// Prêt à sourcer ?',          zh:'// 准备好采购了吗？', ar:'// مستعد للشراء؟',      de:'// Bereit zur Beschaffung?' },
    'faq.cta.title': { en:'Submit your RFQ today',      fr:'Soumettez votre demande',      zh:'立即提交您的询价', ar:'أرسل طلبك اليوم',        de:'Jetzt Anfrage einreichen' },
    'faq.cta.sub':   { en:'Part numbers, BOM files, or general inquiries — we respond within 24 hours.', fr:'Références, fichiers BOM ou questions générales — nous répondons sous 24 heures.', zh:'料号、BOM文件或一般询问——我们在24小时内回复。', ar:'أرقام القطع أو ملفات BOM أو استفسارات عامة — نرد خلال 24 ساعة.', de:'Teilenummern, BOM-Dateien oder allgemeine Anfragen — wir antworten innerhalb von 24 Stunden.' },
    'faq.cta.btn':   { en:'Request a Quote',            fr:'Demander un devis',            zh:'申请报价',      ar:'طلب عرض سعر',            de:'Angebot anfordern' },

    /* ── ABOUT / COMPLIANCE ── */
    'about.tag':      { en:'// Independent Hardware Broker', fr:'// Courtier matériel indépendant', zh:'// 独立硬件经纪商', ar:'// وسيط أجهزة مستقل', de:'// Unabhängiger Hardware-Broker' },
    'compliance.tag': { en:'// Export Compliance Framework', fr:'// Cadre de conformité export',    zh:'// 出口合规框架',   ar:'// إطار الامتثال للتصدير', de:'// Export-Compliance-Rahmen' },

    /* ── COMMON ── */
    'common.rfq':  { en:'Request a Quote',  fr:'Demander un devis',   zh:'申请报价',  ar:'طلب عرض سعر',        de:'Angebot anfordern' },
    'common.back': { en:'Back to Featured', fr:'Retour à la sélection', zh:'返回精选', ar:'العودة للمميزين',    de:'Zurück zur Auswahl' }
  };

  /* ─── DETECT / LOAD ─────────────────────────────────── */
  function detectBrowserLang() {
    var bl = (navigator.language || 'en').toLowerCase();
    if (bl.indexOf('fr') === 0) return 'fr';
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

  /* ─── APPLY LANGUAGE ────────────────────────────────── */
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
      document.body.style.fontFamily = '';
    }

    /* translate text */
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

    /* translate HTML (answers with links/bold) */
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var h = 0; h < htmlEls.length; h++) {
      var hel = htmlEls[h];
      var hkey = hel.getAttribute('data-i18n-html');
      if (!T[hkey]) continue;
      var hval = T[hkey][lang] !== undefined ? T[hkey][lang] : T[hkey]['en'];
      if (hval !== undefined) hel.innerHTML = hval;
    }

    /* update button styles */
    var btns = document.querySelectorAll('.mica-lang-btn');
    for (var j = 0; j < btns.length; j++) {
      var active = btns[j].getAttribute('data-lang') === lang;
      btns[j].style.color       = active ? '#0ea5e9' : '#64748b';
      btns[j].style.background  = active ? 'rgba(14,165,233,0.12)' : 'transparent';
      btns[j].style.borderColor = active ? 'rgba(14,165,233,0.4)' : 'rgba(14,165,233,0.15)';
    }

    /* RTL fixes */
    var isRtl = cfg.dir === 'rtl';
    var navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.style.flexDirection = isRtl ? 'row-reverse' : '';

    var specCard = document.getElementById('specCard');
    if (specCard) {
      specCard.style.right = isRtl ? 'auto' : '4rem';
      specCard.style.left  = isRtl ? '4rem' : 'auto';
    }
  }

  /* ─── INJECT SWITCHER ───────────────────────────────── */
  function injectSwitcher() {
    var nav = document.querySelector('nav');
    if (!nav || document.querySelector('.mica-lang-wrap')) return;

    var style = document.createElement('style');
    style.textContent = '.mica-lang-btn{font-family:"DM Mono",monospace;font-size:.65rem;letter-spacing:.04em;border-radius:3px;padding:.28rem .55rem;cursor:pointer;border-width:1px;border-style:solid;transition:color .2s,background .2s,border-color .2s;white-space:nowrap;line-height:1}';
    document.head.appendChild(style);

    var wrap = document.createElement('div');
    wrap.className = 'mica-lang-wrap';
    wrap.style.cssText = 'display:flex;align-items:center;gap:3px;margin-left:1.2rem;flex-shrink:0';

    ['en','fr','zh','ar','de'].forEach(function(code) {
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

  /* ─── INIT ──────────────────────────────────────────── */
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
