/* SRC TELECOM – profile site interactions */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  // Unsplash photo id, or a local image path
  const img = (id, w = 900) => id.includes('/') ? id : `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;
  const WA = ['966500539637', '966563723792'];

  /* ---------- content ---------- */
  const SERVICES = [
    {
      n: '01', cat: 'osp', icon: 'clipboard-check', img: '1760963301666-582b92218a19',
      tag: 'OSP Quality Consultations',
      ar: { t: 'استشارات الجودة', d: 'استشارات هندسية لفحص جودة أعمال البنية التحتية OSP.' },
      en: { t: 'OSP Quality Consultations', d: 'Engineering consultations of OSP quality inspection.' },
      scope: [
        ['الإشراف على تنفيذ جميع أعمال البنية التحتية للاتصالات (المدنية / الألياف).', 'Supervision of the implementation of all telecom OSP works for civil / fiber.'],
        ['التأكد من التزام جميع المقاولين بمعايير المورّد / العميل.', 'Ensuring that all contractors are complying with vendor / client standards.'],
        ['توفير جميع أنواع الاختبارات للأعمال والمواد المدنية والألياف والإشراف عليها.', 'Provide and supervise all types of tests for civil / fiber works & materials.'],
        ['الإشراف على جميع أنواع التصاميم المطلوبة للشبكة المدنية وشبكة الألياف.', 'Supervise all required types of designs for the civil and fiber network.'],
        ['التأكد من مطابقة المواد والملحقات لمواصفات المورّد.', 'Confirming that materials & accessories are as per vendor specifications.'],
        ['نشر أدوات إدارة الجودة الآلية وإدارتها وصيانتها.', 'Deploy, manage, and maintain automated quality management tools.']
      ]
    },
    {
      n: '02', cat: 'osp', icon: 'construction', img: '1593436878396-e943a3cac98f',
      tag: 'OSP Implementation',
      ar: { t: 'تنفيذ البنية التحتية', d: 'خبرة واسعة في الأعمال المدنية والألياف NDP – UG – P2P – HO، وحلول تنفيذ متكاملة وفق المواصفات وفي الوقت المحدد مع مراعاة كاملة للجودة.' },
      en: { t: 'OSP Implementation – Civil & Fiber', d: 'Extensive experience in OSP civil / fiber works (NDP – UG – P2P – HO): integrated implementation to specification, on time, with full consideration of quality.' },
      scope: [
        ['المسح والتخطيط والتصميم وأعمال الحفريات ومدّ مجاري الكابلات والردم وتركيب MH / HH / JCL / FAT / ODB.', 'Survey, planning, design, excavations, duct laying, backfilling and installing MH / HH / JCL / FAT / ODB.'],
        ['تقديم المستندات والحصول على الموافقات (التصميم، المواد وإجراءات العمل، ووثائق As-Built / التسليم).', 'Submittals & approvals (design, materials & work procedure, as-built / HO documentation).'],
        ['تركيب ولحام جميع أنواع كابلات الألياف البصرية (FDT / JCL / FAT)، والكابلات المدفونة مباشرة والهوائية.', 'Installing and splicing all types of fiber optic cables (FDT / JCL / FAT), direct buried & overhead aerial cables.'],
        ['اختبار الأعمال المدنية والألياف وتشغيلها وتسليمها.', 'Civil / fiber testing, commissioning and handing over.']
      ]
    },
    {
      n: '03', cat: 'osp', icon: 'pencil-ruler', img: '1581092580497-e0d23cbdf1dc',
      tag: 'OSP Design',
      ar: { t: 'تصميم البنية التحتية', d: 'تصاميم مدنية وألياف بصرية لشبكات الاتصالات باستخدام معايير وبرامج تصميم متقدمة.' },
      en: { t: 'OSP Design – Civil & Fiber', d: 'Civil and fiber designs for telecom networks using advanced design standards and software.' },
      scope: [
        ['استشارات تصميم البنية التحتية (NDA – UG – P2P – HO).', 'OSP design consultations (NDA – UG – P2P – HO).'],
        ['تصميم البنية التحتية باستخدام معايير وبرامج تصميم متقدمة.', 'Designing infrastructure using advanced design standards and software.'],
        ['إجراء المسوحات الميدانية للأعمال المدنية والألياف.', 'Perform site surveys for civil & fiber works.'],
        ['تقديم جميع أنواع تصاميم البنية التحتية للاتصالات المدنية والألياف.', 'Provide all types of designs for telecom infrastructure, civil and fiber.'],
        ['إعداد تصاميم المخططات الجديدة وUG وP2P والمغذّيات وHO.', 'Perform designs for new development areas, UG, P2P, feeders and HO.'],
        ['تقديم استشارات فنية احترافية في تصميم FTTH / FTTx.', 'Provide professional technical consultancy in FTTH / FTTx design.'],
        ['إعداد أدلة تصميم لتطوير شبكات بنية تحتية قياسية ومُحسّنة.', 'Prepare design guidelines to develop standard and optimized infrastructure networks.']
      ]
    },
    {
      n: '04', cat: 'net', icon: 'waypoints', img: 'assets/img/ftth-fiber-splicing.jpg',
      tag: 'ISP / FTTH, FTTx Services',
      ar: { t: 'الخدمات المدارة – تركيب الفايبر', d: 'خدمات FTTH / FTTx المدارة: توصيل الألياف للعملاء، التفعيل، والصيانة وفق مؤشرات أداء واتفاقيات مستوى خدمة.' },
      en: { t: 'FTTH, FTTx Managed Service', d: 'Managed FTTH / FTTx services: fiber to the customer, activation, and maintenance under KPIs and SLAs.' },
      scope: [
        { sub: ['FTTH – MS Delivery', 'FTTH – MS Delivery'] },
        ['توصيل الألياف لكل عميل مع التمديد واللحام.', 'Installing fiber to each customer, cabling and splicing.'],
        ['تثبيت جهاز ONT وتهيئته وتفعيل الخدمة.', 'ONT fixing, configuring and service activation.'],
        ['توريد المواد وتمديد الألياف إلى العملاء.', 'Delivering the materials and extending fiber to customers.'],
        { sub: ['FTTH OSP – MS Assurance', 'FTTH OSP – MS Assurance'] },
        ['حلول صيانة شبكات الألياف البصرية.', 'Fiber optic network maintenance solutions.'],
        ['مؤشرات أداء الخدمات المدارة واتفاقيات مستوى الخدمة SLA.', 'Managed services KPIs & service level agreements.'],
        ['صيانة ومتابعة جميع البلاغات.', 'Maintain and follow up all tickets.']
      ]
    },
    {
      n: '05', cat: 'net', icon: 'radio-tower', img: '1473341304170-971dccb5ac1e',
      tag: 'GSM & BTS Solutions',
      ar: { t: 'حلول الموبايل GSM & BTS', d: 'تخطيط وتركيب وتحسين شبكات الجوال ومحطات BTS وأنظمة الطاقة وشبكات النقل.' },
      en: { t: 'GSM & BTS Solutions', d: 'Planning, installing and optimizing mobile networks, BTS sites, power systems and transmission.' },
      scope: [
        ['تخطيط وتركيب شبكة محطات BTS.', 'Planning & installing BTS network.'],
        ['حلول تحسين أداء شبكات GSM.', 'Optimizing GSM network solutions.'],
        ['المسح الفني للمواقع واختيارها TSSR / LOS.', 'TSSR / LOS (Technical Site Survey and Site Selection).'],
        ['دمج وتشغيل محطات BTS.', 'BTS integration & commissioning.'],
        ['حلول التغطية الداخلية والخارجية للمباني.', 'Indoor / outdoor building solutions.'],
        ['حلول أنظمة إمداد الطاقة DC.', 'DC power supply system solutions.'],
        ['تخطيط وتصميم شبكات النقل (Transmission).', 'Transmission network planning and design.']
      ]
    },
    {
      n: '06', cat: 'smart', icon: 'server', img: '1558494949-ef010cbdcc31',
      tag: 'Data Center Solutions',
      ar: { t: 'حلول مراكز البيانات', d: 'حلول مراكز بيانات قابلة للتوسع وعالية المرونة لمواكبة احتياجات الأعمال المتطورة.' },
      en: { t: 'Data Center Solutions', d: 'Scalable data centre solutions that are highly adaptable to evolving business needs.' },
      scope: [
        ['تصميم مراكز البيانات وفق معيار BICSI.', 'Data center design (BICSI standard).'],
        ['تركيب الأجهزة وصيانتها.', 'Hardware installation & maintenance.'],
        ['حلول غرف الشبكات والخوادم.', 'Network and server room solutions.']
      ]
    },
    {
      n: '07', cat: 'smart', icon: 'signal', img: '1486406146926-c627a92ad1ab',
      tag: 'IBS Solutions',
      ar: { t: 'حلول المباني الداخلية IBS', d: 'أنظمة الهوائيات الموزّعة DAS لتغطية مثالية داخل الأبراج والمولات والفنادق والمطارات والملاعب.' },
      en: { t: 'IBS – In-Building Solution', d: 'Distributed Antenna Systems (DAS) for reliable coverage inside towers, malls, hotels, airports and stadiums.' },
      scope: [
        ['تركيب أنظمة الهوائيات الموزّعة (DAS) في الأبراج العالية ومجمّعات الأعمال والمولات والأنفاق والفنادق والمطارات والملاعب لتمكين استخدام الأجهزة اللاسلكية.', 'Distributed Antenna Systems (DAS) can be installed in high-rise buildings, business parks, malls, tunnels, hotels, airports & stadiums to enable wireless device usage.'],
        ['نشر الإشارة عبر هوائيات موزّعة بشكل استراتيجي لتوسيع مدى التغطية وتوفير خدمة موثوقة.', 'DAS propagates the signal through strategically positioned antennas, extending the reach of the signal and providing users with reliable service.']
      ]
    },
    {
      n: '08', cat: 'smart', icon: 'cable', img: '1544197150-b99a580bb7a8',
      tag: 'Structured Cabling',
      ar: { t: 'التمديدات الشبكية المهيكلة', d: 'تصميم وتنفيذ أنظمة الكابلات المهيكلة وغرف الخوادم وMDF.' },
      en: { t: 'Structured Cabling', d: 'Design and build-out of structured cabling systems, server rooms and MDF.' },
      scope: [
        ['تصميم النظام وتجهيز المواد وفق احتياجات العميل.', 'Designing the system & preparing materials according to customer needs.'],
        ['سحب الكابلات وتوصيلها ولحامها وترقيمها واختبارها.', 'Cable pulling, termination, splicing, labeling and testing.'],
        ['تجهيز وبناء غرفة الخوادم / MDF وغرفة الهاتف الرئيسية.', 'Prepare and build out the server / MDF and main telephone room.']
      ]
    },
    {
      n: '09', cat: 'smart', icon: 'cctv', img: '1557597774-9d273605dfa9',
      tag: 'ELV Smart Solutions',
      ar: { t: 'أنظمة التيار المنخفض ELV', d: 'أنظمة إدارة المباني الذكية: كاميرات، إنذار حريق، تحكم بالدخول، صوتيات وغيرها.' },
      en: { t: 'ELV Low Current Systems', d: 'Smart building systems: CCTV, fire alarm, access control, audiovisual and more.' },
      scope: [
        ['نقدم حلولاً مخصّصة لأنظمة التيار المنخفض.', 'We provide customized Low Current Systems solutions.'],
        ['تركيب واختبار وتشغيل جميع أنظمة ELV.', 'Installation, testing and commissioning of all ELV systems.']
      ]
    }
  ];

  const STEPS = [
    ['الاستشارات', 'Consultations', 'دراسة احتياجاتك وتقديم الاستشارات الهندسية والفنية، والإشراف على الجودة وفق معايير المورّدين والعملاء.', 'We study your needs, provide engineering & technical consultations and supervise quality against vendor and client standards.'],
    ['التصميم', 'Design', 'مسوحات ميدانية وتصاميم مدنية وألياف وشبكات باستخدام معايير وبرامج تصميم متقدمة.', 'Site surveys and civil, fiber and network designs using advanced design standards and software.'],
    ['التنفيذ', 'Implementation', 'تنفيذ الأعمال المدنية والألياف والتركيبات بفرق فنية مؤهلة، وفق المواصفات وفي الوقت المحدد.', 'Civil, fiber and installation works by qualified technical teams — to specification and on schedule.'],
    ['التشغيل', 'Operation', 'تشغيل وصيانة الشبكات والخدمات المدارة، مع متابعة البلاغات ومؤشرات الأداء واتفاقيات مستوى الخدمة.', 'Operation & maintenance of networks and managed services, with ticket follow-up, KPIs and SLAs.'],
    ['إدارة المشاريع', 'Project Management', 'إدارة متكاملة للمشروع: التخطيط والجدولة والاعتمادات والتوثيق حتى التسليم النهائي.', 'End-to-end project management: planning, scheduling, approvals and documentation through final handover.']
  ];

  const DAS = [
    ['building-2', 'الأبراج العالية', 'High-rise Buildings'],
    ['briefcase-business', 'مجمّعات الأعمال', 'Business Parks'],
    ['shopping-bag', 'المولات', 'Malls'],
    ['train-front-tunnel', 'الأنفاق', 'Tunnels'],
    ['hotel', 'الفنادق', 'Hotels'],
    ['plane', 'المطارات', 'Airports'],
    ['trophy', 'الملاعب', 'Stadiums']
  ];

  const ELV = [
    ['cctv', 'كاميرات المراقبة CCTV / IP', 'CCTV / IP Camera'],
    ['flame', 'نظام إنذار الحريق', 'Fire Alarm System'],
    ['megaphone', 'نظام النداء العام', 'Public Address'],
    ['monitor-speaker', 'الأنظمة السمعية والبصرية', 'Audiovisual Systems'],
    ['satellite-dish', 'نظام SMATV', 'SMATV'],
    ['siren', 'نظام إنذار التسلل', 'Intrusion Alarm System'],
    ['fingerprint', 'نظام التحكم بالدخول', 'Access Control'],
    ['bell-ring', 'نظام نداء التمريض', 'Nurse Calling System']
  ];

  const ENG_UNITS = ['التشغيل|Operations', 'فنيون وعمال|Technicians & Workers'];
  const ORG = [
    {
      icon: 'clipboard-list', ar: 'الدراسات والمشاريع', en: 'Studies & Projects', note: ['5 أقسام هندسية', '5 engineering depts'],
      units: [
        ['network', 'قسم البنية التحتية', 'Infrastructure Dept.', ENG_UNITS],
        ['landmark', 'قسم الهندسة المدنية', 'Civil Engineering Dept.', ENG_UNITS],
        ['zap', 'قسم الهندسة الكهربائية', 'Electrical Engineering Dept.', ENG_UNITS],
        ['cog', 'قسم الهندسة الميكانيكية', 'Mechanical Engineering Dept.', ENG_UNITS],
        ['radio-tower', 'قسم الاتصالات وتقنية المعلومات', 'Telecom & IT Dept.', ENG_UNITS]
      ]
    },
    {
      icon: 'badge-check', ar: 'تطوير الأعمال والجودة', en: 'Business Development & Quality', note: ['الجودة والسلامة', 'Quality & safety'],
      units: [['shield-check', 'تطوير الأعمال والجودة', 'Business Development & Quality', ['تطوير الأعمال|Business development', 'ضمان الجودة|Quality assurance', 'معايير السلامة|Safety standards']]]
    },
    {
      icon: 'landmark', ar: 'الشؤون المالية والإدارية', en: 'Finance & Administration', note: ['المالية والموارد البشرية', 'Finance & HR'],
      units: [
        ['wallet', 'المدير المالي', 'Financial Manager', ['المحاسبة|Accounting', 'التحصيل|Collection']],
        ['users', 'مدير الموارد البشرية', 'HR Manager', ['الموارد البشرية|Human Resources']]
      ]
    },
    {
      icon: 'megaphone', ar: 'التسويق والمبيعات', en: 'Marketing & Sales', note: ['العملاء والعروض', 'Clients & offers'],
      units: [['handshake', 'التسويق والمبيعات', 'Marketing & Sales', ['التسويق|Marketing', 'المبيعات|Sales', 'علاقات العملاء|Client relations']]]
    }
  ];

  const BANNER = [
    ['1558494949-ef010cbdcc31', 'مراكز البيانات', 'Data Centers'],
    ['1593436878396-e943a3cac98f', 'الأعمال المدنية', 'Civil Works'],
    ['1660330589693-99889d60181e', 'الألياف البصرية', 'Fiber Optics'],
    ['1473341304170-971dccb5ac1e', 'الطاقة والأبراج', 'Power & Towers'],
    ['1557597774-9d273605dfa9', 'أنظمة المراقبة', 'Surveillance'],
    ['1544197150-b99a580bb7a8', 'الكابلات المهيكلة', 'Structured Cabling'],
    ['1486406146926-c627a92ad1ab', 'المباني الذكية', 'Smart Buildings'],
    ['1760963301666-582b92218a19', 'فرق فنية مؤهلة', 'Qualified Technicians']
  ];

  const UI = {
    ar: { more: 'نطاق العمل', scope: 'نطاق العمل', ask: 'استفسر عن هذه الخدمة', choose: 'اختر الخدمة', other: 'خدمة أخرى', hello: 'السلام عليكم، أرغب بالاستفسار عن خدمة', name: 'الاسم', company: 'الجهة', service: 'الخدمة', details: 'التفاصيل', req: 'طلب من موقع SRC TELECOM' },
    en: { more: 'Scope of work', scope: 'Scope of work', ask: 'Ask about this service', choose: 'Choose a service', other: 'Other service', hello: 'Hello, I would like to ask about', name: 'Name', company: 'Company', service: 'Service', details: 'Details', req: 'Request from SRC TELECOM website' }
  };

  let lang = 'ar';
  try { lang = localStorage.getItem('src-lang') || 'ar'; } catch (e) {}
  const L = (ar, en) => (lang === 'ar' ? ar : en);
  // keep Latin codes (e.g. "NDP – UG – P2P") in one LTR run inside Arabic text
  const B = s => (lang === 'ar' ? s.replace(/[A-Za-z][A-Za-z0-9 \/–&.\-]*[A-Za-z0-9]/g, '<bdi>$&</bdi>') : s);
  const icons = () => window.lucide && window.lucide.createIcons();

  /* ---------- render ---------- */
  function renderCards() {
    const f = $('#filters .active')?.dataset.f || 'all';
    $('#cards').innerHTML = SERVICES.map((s, i) => `
      <button class="card reveal in ${f !== 'all' && s.cat !== f ? 'hide' : ''}" data-i="${i}" data-cat="${s.cat}">
        <span class="card__img" style="background-image:url('${img(s.img, 700)}')"></span>
        <span class="card__num">${s.n}</span>
        <span class="card__ico"><i data-lucide="${s.icon}"></i></span>
        <span class="card__body">
          <span class="card__tag">${s.tag}</span>
          <h3>${B(s[lang].t)}</h3>
          <p>${B(s[lang].d)}</p>
          <span class="card__more">${UI[lang].more}<i data-lucide="arrow-left" class="flip"></i></span>
        </span>
      </button>`).join('');
  }

  function renderStep(i) {
    const s = STEPS[i];
    const p = $('#stepPanel');
    p.classList.remove('swap'); void p.offsetWidth; p.classList.add('swap');
    p.innerHTML = `<span class="num">0${i + 1}</span><div><h3>${L(s[0], s[1])}</h3><p class="muted">${L(s[2], s[3])}</p></div>`;
    $$('.step').forEach((b, j) => { b.classList.toggle('active', j === i); b.classList.toggle('done', j < i); });
    $('#stepsFill').style.width = (i / (STEPS.length - 1)) * 100 + '%';
  }

  function renderSolutions() {
    $('#dasChips').innerHTML = DAS.map(d => `<span class="chip"><i data-lucide="${d[0]}"></i>${L(d[1], d[2])}</span>`).join('');
    $('#elvGrid').innerHTML = ELV.map(d => `<div class="elv__item"><i data-lucide="${d[0]}"></i>${L(d[1], d[2])}</div>`).join('');
  }

  function renderBanner() {
    const items = BANNER.map(b => `<figure style="background-image:url('${img(b[0], 600)}')" data-cap="${L(b[1], b[2])}"></figure>`).join('');
    $('#bannerTrack').innerHTML = items + items;
  }

  let orgActive = 0;
  function renderOrg() {
    $('#orgRow').innerHTML = ORG.map((o, i) => `
      <button class="org__dept ${i === orgActive ? 'active' : ''}" data-i="${i}">
        <i data-lucide="${o.icon}"></i><b>${L(o.ar, o.en)}</b><small>${L(o.note[0], o.note[1])}</small>
      </button>`).join('');
    $('#orgDetail').innerHTML = ORG[orgActive].units.map((u, k) => `
      <div class="org__unit" style="animation-delay:${k * 70}ms">
        <h4><i data-lucide="${u[0]}"></i>${L(u[1], u[2])}</h4>
        <ul>${u[3].map(x => `<li>${L(...x.split('|'))}</li>`).join('')}</ul>
      </div>`).join('');
  }

  function renderSelect() {
    const sel = $('#serviceSelect');
    const cur = sel.selectedIndex;
    sel.innerHTML = `<option value="">${UI[lang].choose}</option>` +
      SERVICES.map((s, i) => `<option value="${i}">${s.n} · ${s[lang].t}</option>`).join('') +
      `<option value="other">${UI[lang].other}</option>`;
    if (cur > 0) sel.selectedIndex = cur;
  }

  /* ---------- language ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $('#langBtn').textContent = lang === 'ar' ? 'EN' : 'ع';
    $$('[data-en]').forEach(el => {
      if (el.dataset.ar === undefined) el.dataset.ar = el.innerHTML;
      el.innerHTML = lang === 'ar' ? el.dataset.ar : el.dataset.en;
    });
    $$('[data-en-ph]').forEach(el => {
      if (el.dataset.arPh === undefined) el.dataset.arPh = el.placeholder;
      el.placeholder = lang === 'ar' ? el.dataset.arPh : el.dataset.enPh;
    });
    document.title = lang === 'ar' ? 'SRC TELECOM | صن رودز للاتصالات' : 'SRC TELECOM | Telecom • Electricity • IT';
    renderCards(); renderStep(stepIdx); renderSolutions(); renderBanner(); renderOrg(); renderSelect();
    icons();
  }
  $('#langBtn').addEventListener('click', () => {
    lang = lang === 'ar' ? 'en' : 'ar';
    try { localStorage.setItem('src-lang', lang); } catch (e) {}
    applyLang();
  });

  /* ---------- lifecycle steps ---------- */
  let stepIdx = 0, stepTimer;
  const autoStep = () => { clearInterval(stepTimer); stepTimer = setInterval(() => { stepIdx = (stepIdx + 1) % STEPS.length; renderStep(stepIdx); }, 4500); };
  $$('.step').forEach(b => b.addEventListener('click', () => { stepIdx = +b.dataset.i; renderStep(stepIdx); autoStep(); }));

  /* ---------- service filters & modal ---------- */
  $('#filters').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#filters button').forEach(x => x.classList.toggle('active', x === b));
    $$('.card').forEach(c => c.classList.toggle('hide', b.dataset.f !== 'all' && c.dataset.cat !== b.dataset.f));
  });

  const modal = $('#modal');
  function openModal(i) {
    const s = SERVICES[i];
    $('#mImg').style.backgroundImage = `url('${img(s.img, 900)}')`;
    $('#mTag').textContent = `${s.n} · ${s.tag}`;
    $('#mTitle').innerHTML = B(s[lang].t);
    $('#mDesc').innerHTML = B(s[lang].d);
    $('#mScopeT').textContent = UI[lang].scope;
    $('#mScope').innerHTML = s.scope.map(x => x.sub ? `<li class="sub">${L(...x.sub)}</li>` : `<li><span>${B(L(x[0], x[1]))}</span></li>`).join('');
    $('#mWaT').textContent = UI[lang].ask;
    $('#mWa').href = `https://wa.me/${WA[0]}?text=${encodeURIComponent(`${UI[lang].hello}: ${s[lang].t}`)}`;
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
  $('#cards').addEventListener('click', e => { const c = e.target.closest('.card'); if (c) openModal(+c.dataset.i); });
  modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); waFloat.classList.remove('open'); } });

  /* ---------- org ---------- */
  $('#orgRow').addEventListener('click', e => {
    const b = e.target.closest('.org__dept'); if (!b) return;
    orgActive = +b.dataset.i; renderOrg(); icons();
  });

  /* ---------- nav ---------- */
  const nav = $('#nav'), links = $('#navLinks'), burger = $('#burger');
  burger.addEventListener('click', () => { links.classList.toggle('open'); burger.classList.toggle('open'); });
  links.addEventListener('click', e => { if (e.target.closest('a')) { links.classList.remove('open'); burger.classList.remove('open'); } });

  const sections = $$('section[id]');
  const toTop = $('#toTop'), prog = $('#progress');
  function onScroll() {
    const y = scrollY;
    nav.classList.toggle('scrolled', y > 30);
    toTop.classList.toggle('show', y > 700);
    prog.style.width = (y / (document.documentElement.scrollHeight - innerHeight)) * 100 + '%';
    let cur = 'home';
    sections.forEach(s => { if (y >= s.offsetTop - 140) cur = s.id; });
    $$('.nav__links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + (cur === 'stats' ? 'home' : cur)));
  }
  addEventListener('scroll', onScroll, { passive: true });
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- reveal + counters ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    $$('.count', e.target).concat(e.target.classList.contains('count') ? [e.target] : []).forEach(countUp);
    io.unobserve(e.target);
  }), { threshold: .15 });
  $$('.reveal').forEach(el => io.observe(el));
  function countUp(el) {
    if (el.dataset.done) return; el.dataset.done = 1;
    const to = +el.dataset.to, t0 = performance.now();
    const tick = t => { const p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }

  /* ---------- floating whatsapp ---------- */
  const waFloat = $('#waFloat');
  $('#waBtn').addEventListener('click', () => waFloat.classList.toggle('open'));
  document.addEventListener('click', e => { if (!e.target.closest('#waFloat')) waFloat.classList.remove('open'); });

  /* ---------- quote form → WhatsApp ---------- */
  $('#quoteForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, name = f.name.value.trim();
    f.name.classList.toggle('err', !name);
    $('#formErr').classList.toggle('show', !name);
    if (!name) { f.name.focus(); return; }
    const sv = f.service.value;
    const svc = sv === '' ? '-' : sv === 'other' ? UI[lang].other : SERVICES[+sv][lang].t;
    const u = UI[lang];
    const text = [`*${u.req}*`, `${u.name}: ${name}`, f.company.value.trim() && `${u.company}: ${f.company.value.trim()}`, `${u.service}: ${svc}`, f.msg.value.trim() && `${u.details}: ${f.msg.value.trim()}`].filter(Boolean).join('\n');
    window.open(`https://wa.me/${f.to.value}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });

  /* ---------- hero network canvas ---------- */
  const cv = $('#net'), ctx = cv.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W, H, nodes = [], packets = [], running = true;
  function size() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(90, (W * H) / 16000));
    nodes = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.8 + .8 }));
  }
  const D = 150;
  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    for (const p of nodes) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
      if (d < D) {
        ctx.strokeStyle = `rgba(143,184,224,${(1 - d / D) * .35})`; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        if (packets.length < 18 && Math.random() < .0009) packets.push({ a, b, t: 0 });
      }
    }
    for (const p of nodes) { ctx.fillStyle = 'rgba(200,220,245,.85)'; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill(); }
    packets = packets.filter(k => {
      k.t += .018; if (k.t > 1) return false;
      const x = k.a.x + (k.b.x - k.a.x) * k.t, y = k.a.y + (k.b.y - k.a.y) * k.t;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 8);
      g.addColorStop(0, 'rgba(243,154,74,1)'); g.addColorStop(1, 'rgba(243,154,74,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 8, 0, 7); ctx.fill();
      return true;
    });
    requestAnimationFrame(frame);
  }
  size(); addEventListener('resize', size);
  if (!reduce) {
    new IntersectionObserver(([e]) => { const was = running; running = e.isIntersecting; if (running && !was) frame(); }).observe(cv);
    frame();
  }

  /* ---------- init ---------- */
  $('#year').textContent = new Date().getFullYear();
  applyLang();
  autoStep();
  onScroll();
})();
