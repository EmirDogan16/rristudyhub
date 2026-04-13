/* =========================================================
   RRI Study Hub — Application Logic & Data
   ========================================================= */

// ============================
// DATA — All 7 Weeks
// ============================
const WEEKS = {
  1: {
    title: { en: "Week 1 — Technology & Society: Introduction to RRI", tr: "Hafta 1 — Teknoloji & Toplum: RRI'ya Giriş" },
    subtitle: { en: "Foundations of Responsible Research & Innovation", tr: "Sorumlu Araştırma & İnovasyon Temelleri" },
    summary: {
      en: [
        { heading: "🌍 Technology & Society Relationship", text: "This week introduces the complex relationship between technology and society. Technology is not neutral — it is shaped by and shapes social values, power structures, and cultural norms. We explore different perspectives on this relationship, from technological determinism to social constructionism." },
        { heading: "📘 Key Theoretical Frameworks", concepts: [
          { title: "Technological Determinism", text: "The view that technology is the primary driver of social change. Technology shapes society's structure and cultural values. Example: The printing press led to the Reformation and mass literacy." },
          { title: "SCOT (Social Construction of Technology)", text: "Developed by Pinch & Bijker. Technology is shaped by social groups through interpretation and negotiation. Different groups (relevant social groups) can interpret the same technology differently ('interpretive flexibility'). Design is not inevitable — it results from social choices." },
          { title: "Actor-Network Theory (ANT)", text: "Developed by Latour & Callon. Both human and non-human actors (technologies, regulations, standards) form networks. No distinction between human agency and technological agency. Technology and society co-produce each other." },
          { title: "Collingridge Dilemma", text: "A fundamental challenge: Early on → easy to change technology, but impacts are hard to predict (information problem). Later → impacts become clear, but the technology is entrenched and hard to change (power problem). This is WHY we need RRI — to anticipate before it's too late." },
          { title: "RRI (Responsible Research & Innovation)", text: "A transparent, interactive process by which societal actors and innovators become mutually responsive to each other with a view on the ethical acceptability, sustainability, and societal desirability of the innovation process." },
          { title: "AREA Framework", text: "Anticipate — foresee potential impacts and risks. Reflect — consider motivations, assumptions, and purposes. Engage — involve diverse stakeholders. Act — use insights to influence direction of research." },
          { title: "Stilgoe's 4 Dimensions of RRI", text: "Anticipation — systematic thinking about what might happen. Reflexivity — awareness of limits of knowledge. Inclusion — involving diverse stakeholders. Responsiveness — capacity to change course." }
        ]},
        { heading: "⚖️ Ethical Theories", concepts: [
          { title: "Deontology (Kant)", text: "Ethics based on duty and rules. An action is morally right if it follows moral rules regardless of consequences. 'Act only according to maxims you could will as universal laws.' Focus: RULES." },
          { title: "Utilitarianism (Mill/Bentham)", text: "Ethics based on consequences. An action is right if it produces the greatest good for the greatest number. Focus: OUTCOMES and maximizing total well-being." },
          { title: "Virtue Ethics (Aristotle)", text: "Ethics based on character. What would a virtuous person do? Focuses on cultivating good character traits (honesty, courage, compassion). Focus: CHARACTER." }
        ]},
        { heading: "🔍 The 6 Ethical Lenses", concepts: [
          { title: "Rights Lens", text: "Does the action respect moral rights? (privacy, dignity, safety, autonomy, truth)" },
          { title: "Justice Lens", text: "Is it fair? Do similar cases get similar treatment? Are benefits and burdens distributed equitably?" },
          { title: "Utilitarian Lens", text: "Does it produce the most good and least harm for the most people?" },
          { title: "Common Good Lens", text: "Does it serve the community and common welfare? Does it protect shared values?" },
          { title: "Virtue Lens", text: "Does it reflect good character? Would a virtuous person do this?" },
          { title: "Care Ethics Lens", text: "Does it protect relationships and those who are vulnerable? Does it show compassion?" }
        ]},
        { heading: "🔮 Utopian vs Dystopian Views", concepts: [
          { title: "Ray Kurzweil (Utopian)", text: "Technological Singularity — AI will surpass human intelligence. Technology will solve humanity's greatest problems (disease, poverty, death). Exponential growth in computing power." },
          { title: "Bill Joy (Dystopian)", text: "'Why the Future Doesn't Need Us' — warns that GNR technologies (Genetics, Nanotechnology, Robotics) could make humans obsolete. Self-replicating technologies are fundamentally different from previous dangers." }
        ]}
      ],
      tr: [
        { heading: "🌍 Teknoloji & Toplum İlişkisi", text: "Bu hafta teknoloji ve toplum arasındaki karmaşık ilişkiyi tanıtır. Teknoloji nötr değildir — toplumsal değerler, güç yapıları ve kültürel normlar tarafından şekillendirilir ve onları şekillendirir." },
        { heading: "📘 Temel Teorik Çerçeveler", concepts: [
          { title: "Teknolojik Determinizm", text: "Teknolojinin toplumsal değişimin birincil itici gücü olduğu görüşü. Teknoloji toplumun yapısını ve değerlerini belirler." },
          { title: "SCOT", text: "Teknoloji, sosyal gruplar tarafından yorum ve müzakere yoluyla şekillendirilir. Aynı teknoloji farklı gruplar tarafından farklı yorumlanabilir." },
          { title: "ANT (Aktör-Ağ Teorisi)", text: "İnsan ve insan-dışı aktörler (teknolojiler, düzenlemeler) ağlar oluşturur. Teknoloji ve toplum birbirini üretir." },
          { title: "Collingridge İkilemi", text: "Erken aşama → değiştirmek kolay ama etkiler belirsiz. Geç aşama → etkiler açık ama değiştirmek zor. RRI'nın gerekliliğinin nedeni." },
          { title: "RRI", text: "Toplumsal aktörler ve inovatörlerin etik kabul edilebilirlik, sürdürülebilirlik ve inovasyonun toplumsal arzu edilirliği konusunda birbirine duyarlı olduğu şeffaf, etkileşimli süreç." },
          { title: "AREA Çerçevesi", text: "Anticipate (Öngör) — Reflect (Yansıt) — Engage (Dahil Et) — Act (Harekete Geç)" },
          { title: "Stilgoe'nun 4 Boyutu", text: "Anticipation (Öngörü), Reflexivity (Özdüşünüm), Inclusion (Katılım), Responsiveness (Duyarlılık)" }
        ]}
      ]
    },
    flashcards: [
      { term: "Technological Determinism", definition: "The view that technology is the primary driver of social change — technology shapes society, not the other way around.", definitionTR: "Teknolojinin toplumsal değişimin birincil itici gücü olduğu görüşü." },
      { term: "Collingridge Dilemma", definition: "Early: easy to change but impacts unknown (information problem). Late: impacts known but change is difficult (power problem).", definitionTR: "Erken: değiştirmek kolay ama etkiler bilinmez. Geç: etkiler biliniyor ama değiştirmek zor." },
      { term: "SCOT", definition: "Social Construction of Technology — technology is shaped by social groups through interpretation and negotiation. Different groups can view the same technology differently.", definitionTR: "Teknolojinin sosyal gruplar tarafından yorum ve müzakere yoluyla şekillendirilmesi." },
      { term: "ANT (Actor-Network Theory)", definition: "Both human and non-human actors form networks. Technology and society co-produce each other. No privileged viewpoint.", definitionTR: "İnsan ve insan-dışı aktörler ağlar oluşturur. Teknoloji ve toplum birbirini üretir." },
      { term: "AREA Framework", definition: "Anticipate → Reflect → Engage → Act. The practical application framework for Responsible Research & Innovation.", definitionTR: "Öngör → Yansıt → Dahil Et → Harekete Geç. RRI'nın uygulama çerçevesi." },
      { term: "Deontology", definition: "Duty-based ethics (Kant). An action is right if it follows moral rules, regardless of consequences. 'Would I want this to be a universal law?'", definitionTR: "Görev temelli etik (Kant). Sonuçlardan bağımsız olarak ahlaki kurallara uygunsa doğrudur." },
      { term: "Utilitarianism", definition: "Consequence-based ethics (Mill/Bentham). The right action produces the greatest good for the greatest number of people.", definitionTR: "Sonuç temelli etik (Mill/Bentham). En çok kişiye en fazla fayda sağlayan eylem doğrudur." },
      { term: "Virtue Ethics", definition: "Character-based ethics (Aristotle). Focus on what a virtuous person would do — cultivating good character traits like honesty, courage, compassion.", definitionTR: "Karakter temelli etik (Aristoteles). Erdemli bir insanın ne yapacağına odaklanır." },
      { term: "6 Ethical Lenses", definition: "Rights, Justice, Utilitarian, Common Good, Virtue, and Care Ethics — six perspectives for analyzing ethical dilemmas.", definitionTR: "Haklar, Adalet, Faydacılık, Ortak İyilik, Erdem ve Bakım Etiği — etik analiz için 6 bakış açısı." },
      { term: "RRI (4 Dimensions)", definition: "Stilgoe et al.: Anticipation (foresight), Reflexivity (self-awareness), Inclusion (diverse stakeholders), Responsiveness (capacity to adapt).", definitionTR: "Öngörü, Özdüşünüm, Katılım, Duyarlılık — RRI'nın 4 boyutu." }
    ],
    quiz: [
      { q: "What does Technological Determinism claim?", options: ["Society shapes technology", "Technology is the primary driver of social change", "Technology and society develop independently", "Government controls technology development"], correct: 1, explanation: "Technological Determinism holds that technology determines social structure and cultural values — technology drives social change, not the other way around." },
      { q: "The Collingridge Dilemma describes:", options: ["The conflict between privacy and security", "The difficulty of controlling technology — easy to change early (but impacts unknown) vs. hard to change later (but impacts clear)", "The choice between open and closed source software", "The tension between innovation speed and regulation"], correct: 1, explanation: "Collingridge Dilemma has two 'horns': the information problem (impacts hard to predict early) and the power problem (hard to change once established)." },
      { q: "In SCOT (Social Construction of Technology), what is 'interpretive flexibility'?", options: ["The ability of technology to adapt to different environments", "Different social groups can interpret the same technology differently", "Software that can be customized by users", "The flexibility of technology standards"], correct: 1, explanation: "Interpretive flexibility is a key SCOT concept — different relevant social groups can assign different meanings and uses to the same technology." },
      { q: "Which ethical theory focuses on RULES/DUTY regardless of consequences?", options: ["Utilitarianism", "Virtue Ethics", "Deontology", "Care Ethics"], correct: 2, explanation: "Deontology (Kant) focuses on moral duties and rules. An action is right if it follows moral rules, regardless of outcomes. 'Categorical imperative.'" },
      { q: "The AREA framework stands for:", options: ["Analyze, Research, Evaluate, Apply", "Anticipate, Reflect, Engage, Act", "Assess, Review, Examine, Adjust", "Awareness, Responsibility, Ethics, Accountability"], correct: 1, explanation: "AREA = Anticipate, Reflect, Engage, Act — the practical framework for implementing RRI in research and innovation." },
      { q: "Which ethical lens asks: 'Does it produce the most good for the most people?'", options: ["Rights Lens", "Justice Lens", "Utilitarian Lens", "Virtue Lens"], correct: 2, explanation: "The Utilitarian Lens evaluates actions based on their consequences — seeking the greatest good for the greatest number." },
      { q: "Who argued in 'Why the Future Doesn't Need Us' that GNR technologies pose existential risks?", options: ["Ray Kurzweil", "Bill Joy", "Immanuel Kant", "Bruno Latour"], correct: 1, explanation: "Bill Joy wrote this influential article warning about the dangers of Genetics, Nanotechnology, and Robotics — self-replicating technologies that could make humans obsolete." },
      { q: "Actor-Network Theory (ANT) differs from SCOT because ANT:", options: ["Only considers human actors", "Gives agency to both human and non-human actors equally", "Focuses solely on economic factors", "Ignores technology entirely"], correct: 1, explanation: "ANT treats both human and non-human entities (technologies, rules, standards) as 'actants' in a network — there is no privileged viewpoint." },
      { q: "Stilgoe's 4 dimensions of RRI include all EXCEPT:", options: ["Anticipation", "Reflexivity", "Profitability", "Responsiveness"], correct: 2, explanation: "The 4 dimensions are: Anticipation, Reflexivity, Inclusion, and Responsiveness. Profitability is NOT one of them." },
      { q: "The Care Ethics lens focuses on:", options: ["Universal moral rules", "Maximizing total welfare", "Protecting relationships and vulnerable people", "Individual character virtues"], correct: 2, explanation: "Care Ethics emphasizes relationships, empathy, and the responsibility to protect those who are vulnerable or dependent." }
    ],
    terms: [
      { term: "Technological Determinism", def: "Technology shapes society and drives social change as the primary force.", defTR: "Teknoloji toplumu şekillendirir ve birincil güç olarak toplumsal değişimi yönlendirir.", importance: "high" },
      { term: "SCOT", def: "Social Construction of Technology — society shapes technology through social group interpretations and negotiations.", defTR: "Toplum, sosyal grup yorumları ve müzakereleri yoluyla teknolojiyi şekillendirir.", importance: "high" },
      { term: "ANT", def: "Actor-Network Theory — human and non-human actors co-create sociotechnical networks.", defTR: "Aktör-Ağ Teorisi — insan ve insan-dışı aktörler sosyoteknik ağları birlikte oluşturur.", importance: "high" },
      { term: "Collingridge Dilemma", def: "The tension between the information problem (unknown impacts early) and power problem (hard to change later).", defTR: "Bilgi sorunu (erken dönem bilinmezlik) ve güç sorunu (geç dönem değiştirememe) arasındaki gerilim.", importance: "high" },
      { term: "AREA Framework", def: "Anticipate, Reflect, Engage, Act — RRI implementation framework.", defTR: "Öngör, Yansıt, Dahil Et, Harekete Geç — RRI uygulama çerçevesi.", importance: "high" },
      { term: "Deontology", def: "Duty-based ethics (Kant) — actions are right if they follow moral rules regardless of outcomes.", defTR: "Görev temelli etik (Kant) — sonuçlardan bağımsız olarak ahlaki kurallara uygunluk.", importance: "high" },
      { term: "Utilitarianism", def: "Consequence-based ethics — the right action maximizes overall well-being.", defTR: "Sonuç temelli etik — doğru eylem genel refahı en üst düzeye çıkarır.", importance: "high" },
      { term: "Virtue Ethics", def: "Character-based ethics (Aristotle) — focus on cultivating good character traits.", defTR: "Karakter temelli etik (Aristoteles) — iyi karakter özelliklerini geliştirmeye odaklanır.", importance: "medium" },
      { term: "6 Ethical Lenses", def: "Rights, Justice, Utilitarian, Common Good, Virtue, Care Ethics — framework for ethical analysis.", defTR: "Haklar, Adalet, Faydacı, Ortak İyilik, Erdem, Bakım — etik analiz çerçevesi.", importance: "high" },
      { term: "Interpretive Flexibility", def: "SCOT concept: different social groups can interpret the same technology differently.", defTR: "SCOT kavramı: farklı toplumsal gruplar aynı teknolojiyi farklı yorumlayabilir.", importance: "medium" }
    ]
  },

  2: {
    title: { en: "Week 2 — Regulation & Governance", tr: "Hafta 2 — Düzenleme & Yönetişim" },
    subtitle: { en: "EU AI Act, GDPR, and Data Governance", tr: "AB AI Yasası, GDPR ve Veri Yönetişimi" },
    summary: {
      en: [
        { heading: "🇪🇺 EU AI Act — Risk-Based Framework", concepts: [
          { title: "Unacceptable Risk (BANNED)", text: "Social scoring by public authorities, subliminal manipulation, exploitation of vulnerable groups, real-time remote biometric identification in public spaces for law enforcement (with exceptions). These are PROHIBITED." },
          { title: "High Risk", text: "AI in critical infrastructure, education & vocational training, employment & worker management, essential private/public services (credit scoring), law enforcement, migration & asylum, administration of justice. Requires: risk management, data governance, technical documentation, human oversight, accuracy, robustness, cybersecurity." },
          { title: "Limited Risk", text: "Transparency obligations only. Chatbots must inform users they're interacting with AI. Emotion recognition systems must disclose. Deepfakes must be labeled." },
          { title: "Minimal/No Risk", text: "No specific regulatory requirements. Examples: AI in video games, spam filters, search engines." }
        ]},
        { heading: "🔐 GDPR — General Data Protection Regulation", concepts: [
          { title: "Personal Data", text: "Any information relating to an identified or identifiable natural person. Includes name, ID number, location data, online identifiers, physical/genetic/mental/economic/cultural/social identity factors." },
          { title: "Data Controller", text: "The entity that determines the PURPOSES and MEANS of processing personal data. They are the primary responsible party." },
          { title: "Data Processor", text: "An entity that processes personal data ON BEHALF of the controller. Must follow controller's instructions." },
          { title: "Data Subject", text: "The individual whose personal data is being processed. Has specific rights under GDPR." },
          { title: "6 Lawful Bases for Processing", text: "(1) Consent — freely given, specific, informed. (2) Contract — necessary for contract performance. (3) Legal obligation — required by law. (4) Vital interests — protect someone's life. (5) Public task — exercise of official authority. (6) Legitimate interests — balanced against data subject's rights." }
        ]},
        { heading: "📋 8 Data Subject Rights", concepts: [
          { title: "The 8 Rights", text: "(1) Right to be informed (2) Right of access (3) Right to rectification (4) Right to erasure ('Right to be forgotten') (5) Right to restrict processing (6) Right to data portability (7) Right to object (8) Rights related to automated decision-making and profiling" }
        ]},
        { heading: "🏭 AI Act: Provider vs Deployer", concepts: [
          { title: "Provider", text: "The entity that DEVELOPS or commissions an AI system and places it on the market under its name/trademark. Bears primary compliance obligations: risk management, conformity assessment, technical documentation, post-market monitoring." },
          { title: "Deployer", text: "The entity that USES an AI system in a professional capacity (not end-user). Must: use the system according to instructions, ensure human oversight, monitor for risks, inform provider of issues. Example: A hospital using an AI diagnostic tool." },
          { title: "Conformity Assessment", text: "High-risk AI systems must undergo conformity assessment BEFORE being placed on the market — demonstrating compliance with AI Act requirements. Some require third-party assessment." },
          { title: "General Purpose AI (GPAI)", text: "AI models trained on broad data to perform a wide range of tasks (e.g., GPT, foundation models). Subject to transparency obligations: technical documentation, copyright compliance, training data summaries. Systemic risk GPAI has additional obligations." }
        ]},
        { heading: "🗂️ Other Regulations", concepts: [
          { title: "EU Data Act", text: "Regulates access to and use of data generated by connected products and services. Gives users control over their data from IoT devices. Promotes data sharing and interoperability." },
          { title: "Special Category Data (GDPR Art. 9)", text: "Extra-sensitive data requiring explicit consent or specific exceptions: racial/ethnic origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data, health data, sex life/orientation." }
        ]}
      ],
      tr: [
        { heading: "🇪🇺 AB AI Yasası — Risk Temelli Çerçeve", concepts: [
          { title: "Kabul Edilemez Risk (YASAK)", text: "Sosyal skorlama, bilinçaltı manipülasyon, savunmasız grupların istismarı, kamusal alanda gerçek zamanlı biyometrik tanıma." },
          { title: "Yüksek Risk", text: "Kritik altyapı, eğitim, istihdam, temel hizmetler, kolluk kuvvetleri, göç, yargı. Sıkı denetim gerektirir." },
          { title: "Sınırlı Risk", text: "Sadece şeffaflık yükümlülüğü. Chatbotlar, duygu tanıma, deepfake etiketleme." },
          { title: "Minimal Risk", text: "Özel düzenleme yok. Oyunlar, spam filtreleri." }
        ]},
        { heading: "🔐 GDPR Kavramları", concepts: [
          { title: "Kişisel Veri", text: "Kimliği belirlenebilir bir gerçek kişiye ilişkin her türlü bilgi." },
          { title: "Veri Sorumlusu (Controller)", text: "Verilerin işlenme amaçlarını ve yöntemlerini belirleyen kuruluş." },
          { title: "Veri İşleyen (Processor)", text: "Veri sorumlusu adına veri işleyen kuruluş." },
          { title: "6 Hukuki Dayanak", text: "Rıza, Sözleşme, Yasal Yükümlülük, Hayati Çıkarlar, Kamu Görevi, Meşru Menfaat" }
        ]}
      ]
    },
    flashcards: [
      { term: "EU AI Act — Unacceptable Risk", definition: "BANNED AI: Social scoring by governments, subliminal manipulation, exploitation of vulnerable groups, real-time remote biometric ID by law enforcement in public.", definitionTR: "YASAKLI AI: Sosyal skorlama, bilinçaltı manipülasyon, savunmasız grupların istismarı, kamusal alanda gerçek zamanlı biyometrik tanıma." },
      { term: "EU AI Act — High Risk", definition: "AI in critical infrastructure, education, employment, essential services, law enforcement, migration, justice. Requires strict compliance: risk management, human oversight, transparency.", definitionTR: "Kritik altyapı, eğitim, istihdam, temel hizmetler, kolluk, göç, yargıda AI. Sıkı uyum gerektirir." },
      { term: "EU AI Act — Limited Risk", definition: "Transparency obligations: chatbots must disclose they are AI, emotion recognition must inform users, deepfakes must be labeled.", definitionTR: "Şeffaflık yükümlülüğü: chatbotlar AI olduğunu söylemeli, deepfake etiketlenmeli." },
      { term: "Personal Data (GDPR)", definition: "Any information relating to an identified or identifiable natural person — includes names, IDs, location, online identifiers, biometric data.", definitionTR: "Kimliği belirlenebilir gerçek kişiye ilişkin her türlü bilgi." },
      { term: "Data Controller", definition: "The entity that determines the PURPOSES and MEANS of personal data processing. Primary responsible party under GDPR.", definitionTR: "Kişisel verilerin işlenme amaçlarını ve yöntemlerini belirleyen taraf." },
      { term: "Data Processor", definition: "An entity that processes personal data ON BEHALF of the data controller, following the controller's instructions.", definitionTR: "Veri sorumlusu adına kişisel verileri işleyen taraf." },
      { term: "6 Lawful Bases (GDPR)", definition: "Consent, Contract, Legal Obligation, Vital Interests, Public Task, Legitimate Interests — at least one must apply for lawful processing.", definitionTR: "Rıza, Sözleşme, Yasal Yükümlülük, Hayati Çıkarlar, Kamu Görevi, Meşru Menfaat" },
      { term: "Right to Erasure", definition: "Also known as 'Right to be Forgotten' — data subjects can request deletion of their personal data when no longer needed.", definitionTR: "'Unutulma Hakkı' — veri sahipleri artık gerekli olmayan kişisel verilerinin silinmesini isteyebilir." },
      { term: "Special Category Data", definition: "Extra-sensitive data under GDPR Art. 9: racial origin, political opinions, religion, genetics, biometrics, health, sex life. Requires explicit consent.", definitionTR: "GDPR Madde 9 kapsamında ekstra hassas veriler: ırk, siyasi görüş, din, genetik, biyometrik, sağlık." },
      { term: "EU Data Act", definition: "Regulates access to data from connected products (IoT), gives users control over their data, promotes data sharing and interoperability.", definitionTR: "Bağlı ürünlerden (IoT) gelen verilere erişimi düzenler, kullanıcı kontrolü sağlar." },
      { term: "Provider vs Deployer (AI Act)", definition: "Provider = develops/commissions the AI system (primary obligations). Deployer = uses the AI system professionally (must follow instructions, ensure human oversight).", definitionTR: "Provider = AI sistemi geliştirir (birincil yükümlülükler). Deployer = AI sistemini profesyonel olarak kullanır." },
      { term: "GPAI (General Purpose AI)", definition: "AI models trained on broad data for wide-range tasks (e.g., GPT). Must provide: technical documentation, training data summaries, copyright compliance info.", definitionTR: "Geniş veri üzerinde eğitilmiş genel amaçlı AI modelleri (örn. GPT). Teknik dokümantasyon ve telif uyumu gerekli." }
    ],
    quiz: [
      { q: "Under the EU AI Act, social scoring by public authorities is classified as:", options: ["High Risk", "Limited Risk", "Unacceptable Risk (Banned)", "Minimal Risk"], correct: 2, explanation: "Social scoring by public authorities is BANNED under the EU AI Act as it poses an unacceptable risk to fundamental rights." },
      { q: "A chatbot that does NOT disclose it is AI violates which EU AI Act category?", options: ["Unacceptable Risk provisions", "High Risk requirements", "Limited Risk transparency obligations", "No violation — chatbots are unregulated"], correct: 2, explanation: "Under Limited Risk, chatbots must inform users they are interacting with AI — this is a transparency obligation." },
      { q: "Who determines the purposes and means of personal data processing under GDPR?", options: ["Data Processor", "Data Subject", "Data Controller", "Data Protection Officer"], correct: 2, explanation: "The Data Controller determines WHY and HOW personal data is processed. They are the primary responsible party." },
      { q: "How many lawful bases for processing exist under GDPR?", options: ["4", "5", "6", "8"], correct: 2, explanation: "There are 6 lawful bases: Consent, Contract, Legal Obligation, Vital Interests, Public Task, and Legitimate Interests." },
      { q: "The 'Right to be Forgotten' is formally known as:", options: ["Right to data portability", "Right to erasure", "Right to restrict processing", "Right to object"], correct: 1, explanation: "The Right to Erasure, commonly called 'Right to be Forgotten', allows data subjects to request deletion of their personal data." },
      { q: "AI used in employment/recruitment decisions is classified under the EU AI Act as:", options: ["Minimal Risk", "Limited Risk", "High Risk", "Unacceptable Risk"], correct: 2, explanation: "AI in employment and worker management is classified as HIGH RISK, requiring compliance with strict requirements including human oversight." },
      { q: "Which of the following is NOT a lawful basis under GDPR?", options: ["Consent", "Legitimate Interests", "Commercial Advantage", "Public Task"], correct: 2, explanation: "'Commercial Advantage' is NOT a lawful basis. The 6 bases are: Consent, Contract, Legal Obligation, Vital Interests, Public Task, Legitimate Interests." },
      { q: "Special Category Data under GDPR includes all EXCEPT:", options: ["Health data", "Political opinions", "Email address", "Biometric data"], correct: 2, explanation: "An email address alone is personal data but NOT special category data. Special categories include health, political opinions, biometrics, race, religion, genetics, sex life." },
      { q: "The EU AI Act follows which regulatory approach?", options: ["Technology-specific bans", "Risk-based classification", "Self-regulation by industry", "One-size-fits-all regulation"], correct: 1, explanation: "The EU AI Act uses a RISK-BASED approach, classifying AI systems into four risk levels with proportionate requirements." },
      { q: "Under GDPR, data subjects have how many core rights?", options: ["5", "6", "7", "8"], correct: 3, explanation: "Data subjects have 8 rights: Information, Access, Rectification, Erasure, Restrict Processing, Portability, Object, and Automated Decision-Making rights." },
      { q: "Under the AI Act, a 'Provider' is the entity that:", options: ["Uses an AI system professionally", "Develops or places the AI system on the market", "Regulates AI systems", "Trains end-users on AI"], correct: 1, explanation: "A Provider develops or commissions the AI system and places it on the market under its name/trademark. They bear PRIMARY compliance obligations." },
      { q: "A hospital using an AI diagnostic tool is classified under the AI Act as a:", options: ["Provider", "Deployer", "Data Processor", "End User"], correct: 1, explanation: "A Deployer is the entity that USES an AI system in a professional capacity. The hospital uses, but didn't develop, the AI tool." },
      { q: "General Purpose AI (GPAI) models like GPT must:", options: ["Be banned under the AI Act", "Only be used by governments", "Provide technical documentation and training data summaries", "Pass a medical conformity assessment"], correct: 2, explanation: "GPAI models must provide: technical documentation, copyright compliance info, and training data summaries. Those with systemic risk have additional obligations." }
    ],
    terms: [
      { term: "EU AI Act", def: "EU regulation establishing a risk-based framework for AI systems: Unacceptable, High, Limited, and Minimal risk categories.", defTR: "AI sistemleri için risk temelli çerçeve kuran AB düzenlemesi.", importance: "high" },
      { term: "GDPR", def: "General Data Protection Regulation — EU law protecting personal data of individuals within the EU/EEA.", defTR: "Genel Veri Koruma Tüzüğü — AB/AEA'daki bireylerin kişisel verilerini koruyan AB yasası.", importance: "high" },
      { term: "Data Controller", def: "Entity determining the purposes and means of personal data processing.", defTR: "Kişisel veri işlemenin amaçlarını ve yöntemlerini belirleyen kuruluş.", importance: "high" },
      { term: "Data Processor", def: "Entity processing personal data on behalf of the controller.", defTR: "Veri sorumlusu adına kişisel veri işleyen kuruluş.", importance: "high" },
      { term: "Data Subject", def: "The individual whose personal data is being processed.", defTR: "Kişisel verisi işlenen birey.", importance: "medium" },
      { term: "Lawful Basis", def: "Legal grounds for processing: Consent, Contract, Legal Obligation, Vital Interests, Public Task, Legitimate Interests.", defTR: "İşleme için hukuki dayanak: Rıza, Sözleşme, Yasal Yükümlülük, Hayati Çıkar, Kamu Görevi, Meşru Menfaat.", importance: "high" },
      { term: "Special Category Data", def: "Sensitive data requiring extra protection: race, politics, religion, genetics, biometrics, health, sex life.", defTR: "Ekstra koruma gerektiren hassas veriler: ırk, siyaset, din, genetik, biyometrik, sağlık.", importance: "medium" },
      { term: "Right to Erasure", def: "Right to be Forgotten — data subjects can request deletion of personal data.", defTR: "Unutulma Hakkı — veri sahipleri kişisel verilerinin silinmesini talep edebilir.", importance: "high" },
      { term: "High Risk AI", def: "AI in critical infrastructure, education, employment, essential services — requires strict oversight.", defTR: "Kritik altyapı, eğitim, istihdam, temel hizmetlerde AI — sıkı denetim gerektirir.", importance: "high" },
      { term: "EU Data Act", def: "Regulates data access from IoT/connected products, promotes data sharing and user control.", defTR: "IoT/bağlı ürünlerden veri erişimini düzenler, veri paylaşımını ve kullanıcı kontrolünü teşvik eder.", importance: "medium" }
    ]
  },

  3: {
    title: { en: "Week 3 — Responsible AI Development & Data Protection", tr: "Hafta 3 — Sorumlu AI Geliştirme & Veri Koruma" },
    subtitle: { en: "AREA Framework, Values-Norms-Rules, Privacy by Design, DPIA", tr: "AREA Çerçevesi, Değerler-Normlar-Kurallar, Tasarımdan Gizlilik, DPIA" },
    summary: {
      en: [
        { heading: "🛡️ Data Protection Principles (GDPR Art. 5)", concepts: [
          { title: "Lawfulness, Fairness & Transparency", text: "Data must be processed lawfully, fairly, and in a transparent manner. Data subjects must be informed about how their data is used." },
          { title: "Purpose Limitation", text: "Data collected for specified, explicit, legitimate purposes and not processed further in incompatible ways." },
          { title: "Data Minimization", text: "Only collect data that is adequate, relevant, and limited to what is necessary for the stated purpose." },
          { title: "Accuracy", text: "Personal data must be accurate and kept up to date. Inaccurate data must be corrected or deleted." },
          { title: "Storage Limitation", text: "Data kept only as long as necessary for the purposes. Not stored indefinitely." },
          { title: "Integrity & Confidentiality", text: "Appropriate security measures to protect against unauthorized processing, accidental loss, destruction, or damage." },
          { title: "Accountability", text: "The controller must be able to DEMONSTRATE compliance with all principles." }
        ]},
        { heading: "🔒 Privacy by Design & Default", concepts: [
          { title: "Privacy by Design (Art. 25)", text: "Data protection measures integrated INTO the design of systems and processes from the very beginning — not added as an afterthought. Example: encrypting data at rest and in transit." },
          { title: "Privacy by Default", text: "Default settings must be the MOST privacy-protective. Users should not need to change settings to protect their privacy. Example: social media profile set to private by default." }
        ]},
        { heading: "📝 DPIA — Data Protection Impact Assessment", concepts: [
          { title: "What is DPIA?", text: "A process to identify, assess, and mitigate data protection risks BEFORE starting high-risk processing. Required under GDPR Art. 35." },
          { title: "When is DPIA Required?", text: "Mandatory when processing is 'likely to result in HIGH RISK to rights and freedoms': (1) Systematic monitoring of publicly accessible areas (2) Large-scale processing of special category data (3) Automated decision-making with legal/significant effects (4) New technologies with potential high risk" },
          { title: "DPIA Steps", text: "Step 1: DESCRIBE the processing (what data, why, how). Step 2: ASSESS necessity and proportionality (is it justified?). Step 3: IDENTIFY and assess risks to individuals. Step 4: IDENTIFY measures to mitigate those risks." },
          { title: "Data Protection Officer (DPO)", text: "Required for: public authorities, organizations doing large-scale monitoring, organizations processing special category data at large scale. DPO advises on GDPR compliance." },
          { title: "Data Breach Notification", text: "Must notify supervisory authority within 72 HOURS of becoming aware of a breach. Must notify affected individuals if high risk to their rights." }
        ]},
        { heading: "ğŸ”„ Responsible AI Development", concepts: [
          { title: "Core Idea", text: "Ethics should NOT be something you add at the end. It must SHAPE the system during design and development. Responsibility is not a final checklist â€” it must be woven into every phase." },
          { title: "Responsibility Must Be:", text: "(1) CONTINUOUS â€” you do not ask ethical questions only once; you keep asking them throughout the project lifecycle. (2) PROACTIVE â€” you do not wait for harm to happen; you try to foresee risks early. (3) COLLECTIVE â€” responsibility is not just on one coder; it involves developers, managers, users, affected groups, regulators, and organizations." },
          { title: "AREA Framework in Practice", text: "ANTICIPATE â€” What could go wrong? Who might be harmed? Think ahead about potential impacts. REFLECT â€” What are our assumptions? Whose values are we embedding? Are we aware of our limits? ENGAGE â€” Have we talked to affected communities, diverse stakeholders, and end-users? ACT â€” Use insights from anticipation, reflection, and engagement to change direction, modify design, or halt the project." }
        ]},
        { heading: "📐 Values, Norms, and Rules", concepts: [
          { title: "Values", text: "Big moral ideas that guide us: fairness, honesty, safety, respect, equality. They are abstract and aspirational." },
          { title: "Norms", text: "Shared expectations derived from values. Examples: 'Do not interrupt others', 'Treat everyone respectfully', 'Give equal chance to speak'. They translate values into expected behavior." },
          { title: "Rules", text: "Explicit instructions derived from norms. Examples: 'Anonymize health data before sharing', 'Require consent before recording', 'Do not store personal data longer than necessary'. Rules are concrete and enforceable." },
          { title: "AI Example â€” The Chain", text: "Value: Privacy â†’ Norm: People should control access to their personal data â†’ Rule: Obtain consent before collecting data. This chain shows how abstract values become enforceable rules in AI systems." }
        ]}
      ],
      tr: [
        { heading: "🛡️ Veri Koruma İlkeleri", concepts: [
          { title: "Hukuka Uygunluk, Dürüstlük, Şeffaflık", text: "Veriler hukuka uygun, adil ve şeffaf bir şekilde işlenmelidir." },
          { title: "Amaç Sınırlaması", text: "Veriler belirli, açık, meşru amaçlar için toplanır." },
          { title: "Veri Minimizasyonu", text: "Sadece gerekli olan minimum veri toplanmalıdır." },
          { title: "Depolama Sınırlaması", text: "Veriler gerektiğinden uzun süre saklanmamalıdır." }
        ]},
        { heading: "📝 DPIA Süreci", concepts: [
          { title: "DPIA Nedir?", text: "Yüksek riskli veri işleme öncesi riskleri belirleme, değerlendirme ve azaltma süreci." },
          { title: "DPIA Adımları", text: "1: İşlemeyi tanımla, 2: Gerekliliği değerlendir, 3: Riskleri belirle, 4: Azaltma önlemleri belirle" }
        ]},
        { heading: "🔄 Sorumlu AI Geliştirme", concepts: [
          { title: "Temel Fikir", text: "Etik sona eklenen bir şey olmamalı. Tasarım ve geliştirme sırasında sistemi şekillendirmelidir. Sorumluluk sürekli, proaktif ve kolektif olmalıdır." },
          { title: "Değerler-Normlar-Kurallar Zinciri", text: "Değer: Gizlilik → Norm: İnsanlar kişisel verilerine erişimi kontrol etmeli → Kural: Veri toplamadan önce rıza al." }
        ]}
      ]
    },
    flashcards: [
      { term: "Privacy by Design", definition: "Data protection measures integrated into system design FROM THE START — not added afterwards. Required by GDPR Art. 25.", definitionTR: "Veri koruma önlemlerinin en başından itibaren sistem tasarımına entegre edilmesi." },
      { term: "Privacy by Default", definition: "Default settings must be the most privacy-protective. Users shouldn't need to change settings to protect their privacy.", definitionTR: "Varsayılan ayarlar en gizlilik dostu olmalıdır." },
      { term: "DPIA", definition: "Data Protection Impact Assessment — a process to identify, assess, and mitigate data protection risks BEFORE starting high-risk processing (GDPR Art. 35).", definitionTR: "Veri Koruma Etki Değerlendirmesi — yüksek riskli işleme başlamadan ÖNCE riskleri belirleme süreci." },
      { term: "Data Minimization", definition: "Only collect data that is adequate, relevant, and LIMITED to what is NECESSARY for the stated purpose. Don't collect more than you need.", definitionTR: "Sadece belirtilen amaç için gerekli olan yeterli, ilgili ve sınırlı veri toplanmalıdır." },
      { term: "Purpose Limitation", definition: "Data must be collected for specified, explicit, and legitimate purposes — cannot be further processed in incompatible ways.", definitionTR: "Veriler belirli, açık ve meşru amaçlar için toplanmalı — uyumsuz şekillerde işlenemez." },
      { term: "Storage Limitation", definition: "Personal data must be kept only for as long as necessary for the processing purpose — no indefinite storage.", definitionTR: "Kişisel veriler sadece işleme amacı için gerekli olduğu süre boyunca saklanmalıdır." },
      { term: "Accountability Principle", definition: "The data controller must be able to DEMONSTRATE compliance with all GDPR principles — not just comply, but PROVE compliance.", definitionTR: "Veri sorumlusu tüm GDPR ilkelerine uyumu sadece sağlamakla kalmayıp KANITLAMAK zorundadır." },
      { term: "DPIA Steps", definition: "1) Describe the processing 2) Assess necessity & proportionality 3) Identify & assess risks 4) Identify measures to mitigate risks.", definitionTR: "1) İşlemeyi tanımla 2) Gerekliliği değerlendir 3) Riskleri belirle 4) Azaltma önlemleri planla." },
      { term: "72-Hour Breach Notification", definition: "Under GDPR, data breaches must be reported to the supervisory authority within 72 HOURS. High-risk breaches must also be communicated to affected individuals.", definitionTR: "GDPR kapsamında veri ihlalleri 72 SAAT içinde denetim makamına bildirilmelidir." },
      { term: "Data Protection Officer (DPO)", definition: "Required for public authorities, large-scale monitoring, and large-scale special data processing. Advises on GDPR compliance.", definitionTR: "Kamu kurumları, büyük ölçekli izleme ve hassas veri işleme için zorunlu. GDPR uyumu konusunda danışmanlık yapar." },
      { term: "Responsibility (3 Properties)", definition: "Must be (1) CONTINUOUS — ask ethical questions throughout the project, (2) PROACTIVE — foresee risks early, don't wait for harm, (3) COLLECTIVE — involves developers, managers, users, regulators, affected groups.", definitionTR: "(1) SÜREKLİ — proje boyunca etik sorular sor, (2) PROAKTİF — riskleri önceden öngör, (3) KOLEKTİF — geliştiriciler, yöneticiler, kullanıcılar, düzenleyiciler dahil." },
      { term: "Values → Norms → Rules Chain", definition: "Values are big moral ideas (fairness, privacy). Norms are shared expectations derived from values. Rules are explicit enforceable instructions. Example: Privacy → People should control data → Obtain consent before collecting.", definitionTR: "Değerler büyük ahlaki fikirler. Normlar değerlerden türetilen beklentiler. Kurallar açık uygulanabilir talimatlar. Örnek: Gizlilik → Veri kontrolü → Rıza al." }
    ],
    quiz: [
      { q: "Privacy by Design means:", options: ["Adding privacy features after deployment", "Integrating data protection into system design from the start", "Making all data public by default", "Using only encrypted databases"], correct: 1, explanation: "Privacy by Design (GDPR Art. 25) requires data protection to be built INTO the design of systems from the very beginning — proactively, not reactively." },
      { q: "When is a DPIA mandatory?", options: ["For any personal data processing", "Only when processing children's data", "When processing is likely to result in HIGH RISK to rights and freedoms", "Only when using cloud computing"], correct: 2, explanation: "DPIA is required when processing is 'likely to result in high risk' — systematic monitoring, large-scale special data, automated decisions with legal effects." },
      { q: "The correct order of DPIA steps is:", options: ["Assess risks → Describe processing → Mitigate → Evaluate necessity", "Describe processing → Assess necessity → Identify risks → Identify mitigation measures", "Identify risks → Describe processing → Assess necessity → Implement", "Mitigate risks → Describe processing → Assess → Monitor"], correct: 1, explanation: "The 4 steps: 1) Describe processing, 2) Assess necessity and proportionality, 3) Identify risks, 4) Identify mitigation measures." },
      { q: "Data Minimization requires:", options: ["Collecting as much data as possible for future use", "Only collecting data adequate, relevant, and limited to what is necessary", "Minimizing the number of data processors", "Using the minimum number of databases"], correct: 1, explanation: "Data Minimization means only collecting what you NEED — no more. Data must be adequate, relevant, and limited to the stated purpose." },
      { q: "Under GDPR, a data breach must be reported to the supervisory authority within:", options: ["24 hours", "48 hours", "72 hours", "7 days"], correct: 2, explanation: "GDPR requires notification to the supervisory authority within 72 HOURS of becoming aware of a personal data breach." },
      { q: "Privacy by Default means:", options: ["Users must opt-in to all features", "Default settings should be the most privacy-protective", "All data is deleted after 30 days by default", "Privacy policies are displayed by default"], correct: 1, explanation: "Privacy by Default means the MOST privacy-protective settings apply automatically — users shouldn't need to change settings to be protected." },
      { q: "The Accountability principle under GDPR requires controllers to:", options: ["Delete all data annually", "Demonstrate compliance with GDPR principles", "Hire a DPO regardless of size", "Publish all processed data"], correct: 1, explanation: "Accountability means controllers must not just COMPLY but DEMONSTRATE (prove) their compliance with all GDPR data protection principles." },
      { q: "A DPO is required for:", options: ["Any company with more than 10 employees", "Public authorities and large-scale monitoring/special data processors", "Only banks and hospitals", "Only companies outside the EU"], correct: 1, explanation: "DPOs are required for: (1) public authorities, (2) organizations doing large-scale systematic monitoring, (3) organizations processing special category data at large scale." },
      { q: "Which GDPR principle states data should not be kept longer than necessary?", options: ["Data Minimization", "Purpose Limitation", "Storage Limitation", "Integrity & Confidentiality"], correct: 2, explanation: "Storage Limitation means data should be kept ONLY as long as necessary for the processing purpose. Not stored indefinitely." },
      { q: "'Purpose Limitation' under GDPR means:", options: ["Only one purpose per dataset", "Data must be collected for specified, explicit purposes and not used incompatibly", "Processing must be limited to 30 days", "Purpose of processing must be published annually"], correct: 1, explanation: "Purpose Limitation: data collected for specified, explicit, legitimate purposes and not further processed in a manner incompatible with those purposes." },
      { q: "Responsible AI Development says responsibility must be:", options: ["Only the developer's job", "Continuous, proactive, and collective", "Applied only at the end of the project", "Optional for small projects"], correct: 1, explanation: "Responsibility must be CONTINUOUS (throughout the project), PROACTIVE (foresee risks early), and COLLECTIVE (involves all stakeholders, not just one coder)." },
      { q: "In the Values-Norms-Rules chain, 'Norms' are:", options: ["Laws enforced by police", "Shared expectations derived from values", "Technical specifications", "Database schemas"], correct: 1, explanation: "Norms are shared behavioral expectations derived from abstract values. Example: from the value of 'respect', the norm 'treat everyone respectfully' follows." },
      { q: "The AREA framework step 'Reflect' asks:", options: ["How much will this cost?", "What are our assumptions and whose values are we embedding?", "Who will buy this product?", "What programming language to use?"], correct: 1, explanation: "Reflect means examining your own assumptions, motivations, and the values embedded in the technology — being aware of the limits of your knowledge." }
    ],
    terms: [
      { term: "Privacy by Design", def: "Integrating data protection into system design from the start (GDPR Art. 25).", defTR: "Veri korumayı en başından sistem tasarımına entegre etme.", importance: "high" },
      { term: "Privacy by Default", def: "Default settings must be the most privacy-protective.", defTR: "Varsayılan ayarlar en gizlilik dostu olmalıdır.", importance: "high" },
      { term: "DPIA", def: "Data Protection Impact Assessment — mandatory risk assessment before high-risk processing.", defTR: "Veri Koruma Etki Değerlendirmesi — yüksek riskli işleme öncesi zorunlu risk değerlendirmesi.", importance: "high" },
      { term: "Data Minimization", def: "Collect only data adequate, relevant, and necessary for the purpose.", defTR: "Sadece amaç için gerekli, yeterli ve ilgili veriyi topla.", importance: "high" },
      { term: "Storage Limitation", def: "Don't keep data longer than necessary for the processing purpose.", defTR: "Veriyi işleme amacından daha uzun süre saklama.", importance: "medium" },
      { term: "Purpose Limitation", def: "Data collected for specified, explicit, legitimate purposes only.", defTR: "Veriler sadece belirtilen, açık, meşru amaçlar için toplanır.", importance: "medium" },
      { term: "Accountability", def: "Controller must DEMONSTRATE compliance with GDPR principles.", defTR: "Veri sorumlusu GDPR ilkelerine uyumu KANITLAMAK zorundadır.", importance: "high" },
      { term: "72-Hour Notification", def: "Data breaches must be reported to authorities within 72 hours.", defTR: "Veri ihlalleri 72 saat içinde yetkililere bildirilmelidir.", importance: "medium" },
      { term: "Continuous Responsibility", def: "Ask ethical questions throughout the project lifecycle, not just once.", defTR: "Proje yaşam döngüsü boyunca etik sorular sor, sadece bir kez değil.", importance: "high" },
      { term: "Proactive Responsibility", def: "Don't wait for harm — foresee and mitigate risks early.", defTR: "Zarar bekleme — riskleri önceden öngör ve azalt.", importance: "high" },
      { term: "Collective Responsibility", def: "Responsibility involves developers, managers, users, regulators, affected groups, and organizations.", defTR: "Sorumluluk geliştiriciler, yöneticiler, kullanıcılar, düzenleyiciler ve etkilenen grupları kapsar.", importance: "high" },
      { term: "Values", def: "Big moral ideas: fairness, honesty, safety, respect, equality.", defTR: "Büyük ahlaki fikirler: adalet, dürüstlük, güvenlik, saygı, eşitlik.", importance: "medium" },
      { term: "Norms", def: "Shared expectations derived from values — translate values into expected behavior.", defTR: "Değerlerden türetilen paylaşılan beklentiler — değerleri beklenen davranışa çevirir.", importance: "medium" },
      { term: "Rules", def: "Explicit enforceable instructions derived from norms. Example: 'Anonymize health data before sharing.'", defTR: "Normlardan türetilen açık uygulanabilir talimatlar. Örnek: 'Sağlık verilerini paylaşmadan önce anonimleştir.'", importance: "medium" }
    ]
  },

  4: {
    title: { en: "Week 4 — FAIR Principles & Bias in AI", tr: "Hafta 4 — FAIR Prensipleri & AI'da Yanlılık" },
    subtitle: { en: "Data Management, Fairness, Bias Lifecycle & AI Unfairness", tr: "Veri Yönetimi, Adalet, Yanlılık Yaşam Döngüsü & AI Haksızlığı" },
    summary: {
      en: [
        { heading: "📊 FAIR Principles (Wilkinson et al. 2016)", concepts: [
          { title: "F — Findable", text: "Data must have globally unique, persistent identifiers (e.g., DOI). Rich metadata describing the data. Data registered or indexed in a searchable resource." },
          { title: "A — Accessible", text: "Data retrievable by their identifier using standard open protocols. Authentication and authorization where necessary. METADATA remains accessible even when data is no longer available." },
          { title: "I — Interoperable", text: "Data uses formal, accessible, shared, broadly applicable language (knowledge representation). Uses FAIR vocabularies. Includes qualified references to other data/metadata." },
          { title: "R — Reusable", text: "Data has clear and accessible usage license. Detailed provenance (origin/history). Meets domain-relevant community standards." }
        ]},
        { heading: "⚠️ Bias Types (Suresh & Guttag Framework)", concepts: [
          { title: "Historical Bias", text: "Existing societal inequalities embedded in data. Even with perfect sampling, the world itself may be biased. Example: historical gender disparities in hiring data." },
          { title: "Representation Bias", text: "Training data doesn't represent the full population. Some groups under/overrepresented. Example: facial recognition trained mostly on light-skinned faces." },
          { title: "Measurement Bias", text: "Using wrong proxy variables or features that don't capture what they should. Example: using zip code as proxy for race in risk assessment." },
          { title: "Learning Bias", text: "Model amplifies existing patterns. Optimization choices that favor certain outcomes. Example: model learns to associate 'nurse' with 'female'." },
          { title: "Aggregation Bias", text: "Ignoring differences between sub-groups; 'one-size-fits-all' model. Example: medical model treating all demographics the same." },
          { title: "Evaluation Bias", text: "Benchmark/test data not representative of the real-world population. Model appears accurate on benchmarks but fails on underrepresented groups." },
          { title: "Deployment Bias", text: "System used in a context different from what it was designed for. Example: tool designed for one population applied to another." }
        ]},
        { heading: "⚖️ Fairness Concepts", concepts: [
          { title: "Individual Fairness", text: "Similar individuals should receive similar outcomes. Focus on treating comparable cases comparably." },
          { title: "Group Fairness", text: "Statistical parity across demographic groups. Equal positive prediction rates across groups." },
          { title: "Impossibility Theorem", text: "It is mathematically IMPOSSIBLE to satisfy all fairness metrics simultaneously! You must choose which fairness criteria to prioritize — this is inherently a VALUE JUDGMENT, not just a technical decision." }
        ]},
        { heading: "🔄 Where Bias Can Enter the AI Lifecycle", concepts: [
          { title: "A. Conception", text: "Before the model is even built! Bias can begin when people define: the problem wrongly, the target wrongly, the categories badly, or success too narrowly." },
          { title: "B. Data Collection", text: "Bias can happen when: some groups are underrepresented, data is incomplete, labels are inconsistent, or data reflects social inequality. Example: AI facial recognition detects darker faces poorly." },
          { title: "C. Preprocessing", text: "Even cleaning or preparing data can introduce bias. Example: filling missing values carelessly can reinforce existing patterns." },
          { title: "D. Model Development", text: "Choices during model building matter: feature selection, loss function, thresholds. Optimizing for majority may harm minority groups." },
          { title: "E. Deployment & Post-deployment", text: "System used in wrong context, feedback loops that amplify initial biases, lack of monitoring for disparate impact over time." }
        ]},
        { heading: "🌐 Why AI Inherits Social Unfairness", concepts: [
          { title: "Internet & Society Contain Bias", text: "AI learns from society's data, which already contains: stereotypes, imbalances, incomplete categories, skewed labels, institutional practices, and human assumptions." },
          { title: "Fairness Needs Practical Checking", text: "Fairness is not achieved by empty speeches — it needs practical checking, auditing, and continuous monitoring. You must actively work to identify and mitigate unfairness in AI systems." }
        ]}
      ],
      tr: [
        { heading: "📊 FAIR Prensipleri", concepts: [
          { title: "F — Findable (Bulunabilir)", text: "Benzersiz tanımlayıcılar (DOI), zengin metadata, aranabilir kayıtlar." },
          { title: "A — Accessible (Erişilebilir)", text: "Standart protokollerle erişilebilir, metadata veri silinse bile erişilebilir kalır." },
          { title: "I — Interoperable (Birlikte Çalışabilir)", text: "Standart formatlar, FAIR sözlükler, çapraz referanslar." },
          { title: "R — Reusable (Yeniden Kullanılabilir)", text: "Açık lisans, detaylı köken bilgisi, topluluk standartlarına uygunluk." }
        ]},
        { heading: "⚠️ Yanlılık Türleri", concepts: [
          { title: "İmkansızlık Teoremi", text: "Tüm adalet metriklerini aynı anda sağlamak matematiksel olarak İMKANSIZDIR! Hangi adalet kriterinin öncelikleneceğini seçmek bir DEĞER YARGISIDIR." }
        ]}
      ]
    },
    flashcards: [
      { term: "FAIR — Findable", definition: "Data must have unique persistent identifiers (DOI), rich metadata, and be registered in searchable resources.", definitionTR: "Veriler benzersiz kalıcı tanımlayıcılara (DOI), zengin metadata'ya sahip olmalı ve aranabilir kaynaklarda kayıtlı olmalıdır." },
      { term: "FAIR — Accessible", definition: "Data retrievable by identifier using open protocols. Metadata remains accessible even when data is no longer available.", definitionTR: "Veriler açık protokollerle erişilebilir olmalı. Metadata, veri mevcut olmasa bile erişilebilir kalmalıdır." },
      { term: "FAIR — Interoperable", definition: "Data uses formal, shared, broadly applicable language. Uses FAIR vocabularies. Includes qualified references to other data.", definitionTR: "Veriler standart, paylaşılan dil kullanır. FAIR sözlükler ve çapraz referanslar içerir." },
      { term: "FAIR — Reusable", definition: "Data has clear usage license, detailed provenance (origin/history), and meets domain-relevant community standards.", definitionTR: "Veriler açık lisansa, detaylı köken bilgisine sahip ve topluluk standartlarına uygun olmalıdır." },
      { term: "Historical Bias", definition: "Existing real-world inequalities embedded in training data. Even perfect sampling reflects biased reality. Example: gender disparities in hiring history.", definitionTR: "Mevcut toplumsal eşitsizliklerin eğitim verisine yansıması. Mükemmel örnekleme bile önyargılı gerçekliği yansıtır." },
      { term: "Representation Bias", definition: "Training data doesn't represent the full population — some groups are under/overrepresented. Example: facial recognition mainly trained on light-skinned faces.", definitionTR: "Eğitim verisi tam popülasyonu temsil etmez — bazı gruplar eksik/fazla temsil edilir." },
      { term: "Measurement Bias", definition: "Using wrong proxy variables that don't accurately capture what they should measure. Example: zip code used as proxy for race.", definitionTR: "Ölçülmesi gerekeni doğru yakalamayan yanlış vekil değişkenler kullanma." },
      { term: "Impossibility Theorem", definition: "It's mathematically IMPOSSIBLE to satisfy all fairness metrics simultaneously. Choosing which fairness criteria to prioritize is a VALUE JUDGMENT.", definitionTR: "Tüm adalet metriklerini aynı anda sağlamak matematiksel olarak İMKANSIZDIR. Hangisinin öncelikleneceği bir DEĞER YARGISIDIR." },
      { term: "Aggregation Bias", definition: "Ignoring differences between sub-groups, using a 'one-size-fits-all' model. Fails when groups have different patterns.", definitionTR: "Alt gruplar arasındaki farkları göz ardı ederek 'herkese uyan tek model' kullanma." },
      { term: "Deployment Bias", definition: "System used in a context different from its design. A tool built for one population applied to another.", definitionTR: "Sistemin tasarlandığından farklı bir bağlamda kullanılması." },
      { term: "Bias at Conception", definition: "Bias before model is built: defining the problem wrongly, wrong targets, bad categories, defining success too narrowly.", definitionTR: "Model oluşturulmadan önceki yanlılık: problemi yanlış tanımlama, yanlış hedefler, kötü kategoriler." },
      { term: "Bias in Data Collection", definition: "Groups underrepresented, incomplete data, inconsistent labels, data reflecting social inequality. Example: FR detects darker faces poorly.", definitionTR: "Gruplar eksik temsil edilir, veriler eksik, etiketler tutarsız, veriler toplumsal eşitsizliği yansıtır." },
      { term: "AI Inherits Social Unfairness", definition: "AI learns from data containing stereotypes, imbalances, incomplete categories, skewed labels, institutional practices, and human assumptions.", definitionTR: "AI stereotipler, dengesizlikler, eksik kategoriler, kurumsal uygulamalar ve insan varsayımları içeren verilerden öğrenir." }
    ],
    quiz: [
      { q: "In FAIR principles, what does 'Findable' require?", options: ["Data must be free of charge", "Data must have unique persistent identifiers and rich metadata", "Data must be in English", "Data must be less than 1GB"], correct: 1, explanation: "Findable requires globally unique persistent identifiers (like DOI), rich metadata, and registration in searchable resources." },
      { q: "Which FAIR principle states that METADATA should remain accessible even when data is gone?", options: ["Findable", "Accessible", "Interoperable", "Reusable"], correct: 1, explanation: "Under Accessible (A): metadata should remain accessible even when the data itself is no longer available." },
      { q: "A facial recognition system trained mostly on light-skinned faces exhibits which bias?", options: ["Historical Bias", "Representation Bias", "Measurement Bias", "Deployment Bias"], correct: 1, explanation: "Representation Bias occurs when the training data doesn't represent the full population — some groups are underrepresented." },
      { q: "Using zip code as a proxy for race in a risk assessment tool is an example of:", options: ["Historical Bias", "Representation Bias", "Measurement Bias", "Aggregation Bias"], correct: 2, explanation: "Measurement Bias occurs when wrong proxy variables are used that don't accurately capture what they should measure." },
      { q: "The Impossibility Theorem states that:", options: ["AI can never be truly fair", "All fairness metrics can be achieved with enough data", "It's mathematically impossible to satisfy all fairness metrics simultaneously", "Bias can never be eliminated from algorithms"], correct: 2, explanation: "The Impossibility Theorem proves you CANNOT satisfy all fairness metrics at the same time — choosing which to prioritize is a value judgment." },
      { q: "A medical AI model that treats all demographics the same, ignoring sub-group differences, exhibits:", options: ["Deployment Bias", "Aggregation Bias", "Learning Bias", "Historical Bias"], correct: 1, explanation: "Aggregation Bias occurs when a 'one-size-fits-all' model ignores important differences between sub-groups." },
      { q: "FAIR — Reusable requires:", options: ["Real-time data access", "Clear usage license and detailed provenance", "Free public access", "Data in XML format only"], correct: 1, explanation: "Reusable requires: clear/accessible usage license, detailed provenance (origin & history), and adherence to community standards." },
      { q: "Historical Bias differs from Representation Bias because:", options: ["Historical Bias is about data quality, Representation is about quantity", "Historical Bias reflects real-world inequalities; Representation Bias is about unrepresentative sampling", "They are the same thing", "Historical Bias only applies to text data"], correct: 1, explanation: "Historical Bias: world itself is biased (even perfect samples reflect inequality). Representation Bias: sample doesn't represent the full population." },
      { q: "Individual Fairness means:", options: ["Each person gets a different model", "Similar individuals receive similar outcomes", "Every individual's data is treated separately", "AI must explain decisions to each individual"], correct: 1, explanation: "Individual Fairness: similar people (by relevant characteristics) should receive similar predictions/outcomes." },
      { q: "A credit scoring AI designed for urban populations is used for rural communities. This is:", options: ["Evaluation Bias", "Aggregation Bias", "Deployment Bias", "Learning Bias"], correct: 2, explanation: "Deployment Bias occurs when a system is used in a context different from what it was designed for." },
      { q: "Bias at the 'Conception' stage means:", options: ["The model has bad code", "People define the problem, targets, or categories wrongly before building the model", "The data is corrupted", "Users misunderstand the output"], correct: 1, explanation: "Conception bias occurs BEFORE the model is built — when the problem definition, target, categories, or success metrics are flawed." },
      { q: "Why does AI inherit social unfairness?", options: ["AI is programmed to be unfair", "AI learns from data that contains stereotypes, imbalances, and human assumptions", "AI hardware is biased", "AI only works in certain countries"], correct: 1, explanation: "AI learns from internet and society data that already contains stereotypes, imbalances, incomplete categories, skewed labels, and institutional biases." },
      { q: "At which stage can EVEN data cleaning introduce bias?", options: ["Conception", "Data Collection", "Preprocessing", "Deployment"], correct: 2, explanation: "Preprocessing: even cleaning or preparing data can make bias worse — for example, filling missing values carelessly can reinforce existing biased patterns." }
    ],
    terms: [
      { term: "FAIR Principles", def: "Findable, Accessible, Interoperable, Reusable — guidelines for scientific data management.", defTR: "Bulunabilir, Erişilebilir, Birlikte Çalışabilir, Yeniden Kullanılabilir — bilimsel veri yönetimi ilkeleri.", importance: "high" },
      { term: "Historical Bias", def: "Real-world inequalities reflected in training data, even with perfect sampling.", defTR: "Mükemmel örneklemeyle bile eğitim verisine yansıyan gerçek dünya eşitsizlikleri.", importance: "high" },
      { term: "Representation Bias", def: "Training data doesn't represent the full population — some groups under/overrepresented.", defTR: "Eğitim verisi tam popülasyonu temsil etmez — bazı gruplar eksik/fazla temsil edilir.", importance: "high" },
      { term: "Measurement Bias", def: "Wrong proxy variables used that don't capture what they should measure.", defTR: "Ölçülmesi gerekeni yakalamayan yanlış vekil değişkenler kullanma.", importance: "high" },
      { term: "Aggregation Bias", def: "One-size-fits-all model ignoring sub-group differences.", defTR: "Alt grup farklılıklarını göz ardı eden tek tip model.", importance: "medium" },
      { term: "Deployment Bias", def: "System used in a context different from its design intent.", defTR: "Sistemin tasarım amacından farklı bağlamda kullanılması.", importance: "medium" },
      { term: "Impossibility Theorem", def: "Cannot satisfy all fairness metrics simultaneously — choosing is a value judgment.", defTR: "Tüm adalet metrikleri aynı anda sağlanamaz — seçim bir değer yargısıdır.", importance: "high" },
      { term: "Individual Fairness", def: "Similar individuals should receive similar outcomes.", defTR: "Benzer bireyler benzer sonuçlar almalıdır.", importance: "medium" },
      { term: "Group Fairness", def: "Statistical parity across demographic groups.", defTR: "Demografik gruplar arasında istatistiksel eşitlik.", importance: "medium" },
      { term: "Bias Lifecycle", def: "Bias can enter at every stage: Conception → Data Collection → Preprocessing → Model Development → Deployment.", defTR: "Yanlılık her aşamada girebilir: Tasarım → Veri Toplama → Ön İşleme → Model Geliştirme → Dağıtım.", importance: "high" },
      { term: "Conception Bias", def: "Defining problem wrongly, bad targets/categories, or defining success too narrowly before building.", defTR: "Model oluşturmadan önce problemi yanlış tanımlama, kötü hedefler/kategoriler.", importance: "high" },
      { term: "AI Unfairness", def: "AI inherits bias from society's data: stereotypes, imbalances, skewed labels, institutional practices.", defTR: "AI toplumun verisinden yanlılık miras alır: stereotipler, dengesizlikler, eğik etiketler.", importance: "high" }
    ]
  },

  5: {
    title: { en: "Week 5 — Transparency & Explainability", tr: "Hafta 5 — Şeffaflık & Açıklanabilirlik" },
    subtitle: { en: "XAI, Black Box Problem, Accountability", tr: "XAI, Kara Kutu Problemi, Hesap Verebilirlik" },
    summary: {
      en: [
        { heading: "🔍 Core Concepts", concepts: [
          { title: "Transparency", text: "General openness about HOW a system works: what data it uses, what model it employs, what processes it follows. It's about the SYSTEM as a whole." },
          { title: "Explainability (XAI)", text: "The ability to explain WHY a SPECIFIC decision was made. It's about individual DECISIONS, not the system in general. Key for trust and accountability." },
          { title: "Interpretability", text: "The degree to which a human can understand the INTERNAL WORKINGS of a model. Simple models (linear regression) are inherently interpretable; complex models (deep neural networks) are not." },
          { title: "Black Box Problem", text: "Complex AI models (deep learning, ensemble models) whose internal decision-making logic is opaque — even developers may not understand exactly WHY a specific decision was made." }
        ]},
        { heading: "🛠️ XAI Techniques", concepts: [
          { title: "LIME (Local Interpretable Model-agnostic Explanations)", text: "Explains INDIVIDUAL predictions by approximating the model locally with an interpretable model. Creates a simple model around a specific prediction to show which features mattered." },
          { title: "SHAP (SHapley Additive exPlanations)", text: "Based on game theory (Shapley values). Calculates each feature's CONTRIBUTION to a specific prediction. Shows how much each input pushed the prediction up or down." },
          { title: "Counterfactual Explanations", text: "'What would need to change for a different outcome?' Example: 'Your loan was denied. If your income were €5,000 higher, it would be approved.' Actionable and intuitive." }
        ]},
        { heading: "⚖️ Transparency vs Explainability — Key Distinction", concepts: [
          { title: "Transparency ≠ Explainability", text: "Transparency: 'Our model uses 50 features and was trained on 1M records' (system-level). Explainability: 'Your application was rejected because your credit score was below threshold' (decision-level). A system can be transparent but NOT explainable, and vice versa!" }
        ]},
        { heading: "📋 Accountability", concepts: [
          { title: "Accountability", text: "Having mechanisms to assign RESPONSIBILITY for outcomes of AI systems. Who is responsible when AI makes a wrong decision? Requires: clear governance structures, audit trails, designated responsibility, appeal mechanisms." },
          { title: "Right to Explanation (GDPR Art. 22)", text: "Data subjects have the right NOT to be subject to decisions based SOLELY on automated processing that produce legal effects. They can request human intervention and an explanation." }
        ]}
      ],
      tr: [
        { heading: "🔍 Temel Kavramlar", concepts: [
          { title: "Şeffaflık vs Açıklanabilirlik", text: "Şeffaflık: sistem hakkında genel bilgi. Açıklanabilirlik: belirli bir kararın neden verildiğinin açıklanması. İkisi FARKLI şeylerdir!" },
          { title: "Kara Kutu Problemi", text: "Karmaşık AI modellerinin iç karar mekanizmalarının opak olması — geliştiriciler bile neden belirli bir karar verildiğini anlayamayabilir." }
        ]}
      ]
    },
    flashcards: [
      { term: "Transparency", definition: "General openness about HOW a system works: data sources, model type, processes. About the SYSTEM as a whole.", definitionTR: "Sistemin NASIL çalıştığı hakkında genel açıklık: veri kaynakları, model tipi, süreçler." },
      { term: "Explainability (XAI)", definition: "Ability to explain WHY a SPECIFIC decision was made. About individual DECISIONS, not the system in general.", definitionTR: "Belirli bir kararın NEDEN verildiğini açıklama yeteneği. Genel sistem değil, bireysel KARARLAR hakkında." },
      { term: "Interpretability", definition: "How well a human can understand a model's INTERNAL WORKINGS. Linear regression = interpretable. Deep learning = not interpretable.", definitionTR: "Modelin İÇ İŞLEYİŞİNİN insan tarafından ne kadar iyi anlaşılabildiği." },
      { term: "Black Box Problem", definition: "Complex AI models whose internal decision logic is opaque — even developers can't fully explain specific decisions.", definitionTR: "İç karar mantığı opak olan karmaşık AI modelleri — geliştiriciler bile tam olarak açıklayamaz." },
      { term: "LIME", definition: "Local Interpretable Model-agnostic Explanations — explains individual predictions by creating a simpler local model around a specific prediction.", definitionTR: "Belirli bir tahmin etrafında daha basit bir yerel model oluşturarak bireysel tahminleri açıklar." },
      { term: "SHAP", definition: "SHapley Additive exPlanations — uses game theory to calculate each feature's contribution to a specific prediction.", definitionTR: "Her özelliğin belirli bir tahmine katkısını hesaplamak için oyun teorisini kullanır." },
      { term: "Counterfactual Explanations", definition: "'What would need to change for a different outcome?' Example: 'If your income were €5k higher, your loan would be approved.'", definitionTR: "'Farklı bir sonuç için neyin değişmesi gerekir?' Örnek: 'Geliriniz 5 bin € daha fazla olsaydı krediniz onaylanırdı.'" },
      { term: "Accountability", definition: "Mechanisms to assign RESPONSIBILITY for AI outcomes: governance structures, audit trails, appeal mechanisms, designated responsibility.", definitionTR: "AI sonuçları için SORUMLULUK atama mekanizmaları: yönetişim yapıları, denetim izleri, itiraz mekanizmaları." },
      { term: "Right to Explanation (Art. 22)", definition: "GDPR: right NOT to be subject to solely automated decisions with legal effects + right to request human intervention and explanation.", definitionTR: "GDPR: sadece otomatik kararlarla yasal etki yaratılmasına tabi olmama hakkı + insan müdahalesi ve açıklama talep etme hakkı." },
      { term: "Transparency ≠ Explainability", definition: "Transparency = system-level info ('we use 50 features'). Explainability = decision-level info ('your loan was denied because...'). They are DIFFERENT!", definitionTR: "Şeffaflık = sistem seviyesi bilgi. Açıklanabilirlik = karar seviyesi bilgi. FARKLI şeylerdir!" }
    ],
    quiz: [
      { q: "What is the key difference between Transparency and Explainability?", options: ["They are the same concept", "Transparency is about the system; Explainability is about specific decisions", "Transparency is legal; Explainability is technical", "Explainability is about the system; Transparency is about decisions"], correct: 1, explanation: "Transparency = general info about the SYSTEM. Explainability = understanding WHY a SPECIFIC DECISION was made." },
      { q: "LIME explains predictions by:", options: ["Analyzing the full model architecture", "Creating a simpler local model around a specific prediction", "Removing features one by one", "Using Bayesian probability"], correct: 1, explanation: "LIME creates a local interpretable approximation around a specific prediction to identify which features influenced that particular decision." },
      { q: "SHAP is based on:", options: ["Bayesian statistics", "Game theory (Shapley values)", "Principal component analysis", "Clustering algorithms"], correct: 1, explanation: "SHAP uses Shapley values from game theory to calculate each feature's contribution to a prediction — fair distribution of credit." },
      { q: "A counterfactual explanation would say:", options: ["'The model used 100 features to make this decision'", "'Your loan was denied because the algorithm says so'", "'If your income were €5,000 higher, your loan would be approved'", "'The model has 95% accuracy'"], correct: 2, explanation: "Counterfactuals explain WHAT WOULD NEED TO CHANGE for a different outcome — actionable and intuitive." },
      { q: "The Black Box Problem refers to:", options: ["AI systems with no user interface", "Models that can only process text", "Complex models whose internal decision logic is opaque", "Hardware failures in AI systems"], correct: 2, explanation: "Black Box Problem: complex AI models (deep learning, ensembles) whose internal logic is opaque — even developers may not understand specific decisions." },
      { q: "GDPR Article 22 gives data subjects the right to:", options: ["Delete all AI models", "Not be subject to solely automated decisions with legal effects", "Access all training data", "Modify the algorithm"], correct: 1, explanation: "Article 22 protects against purely automated decisions that have legal or significant effects — subjects can request human intervention." },
      { q: "Which model is inherently MORE interpretable?", options: ["Deep neural network", "Random forest with 1000 trees", "Linear regression", "Generative adversarial network"], correct: 2, explanation: "Linear regression is inherently interpretable — you can see exactly how each feature contributes. Deep learning and complex ensembles are 'black boxes'." },
      { q: "Accountability in AI requires:", options: ["Making all models open source", "Clear governance, audit trails, designated responsibility, appeal mechanisms", "Using only interpretable models", "Government ownership of all AI"], correct: 1, explanation: "Accountability requires mechanisms to assign responsibility: clear governance structures, audit trails, designated roles, and appeal mechanisms." }
    ],
    terms: [
      { term: "Transparency", def: "Openness about how a system works — data, model, processes (system-level).", defTR: "Sistemin nasıl çalıştığı hakkında açıklık — veri, model, süreçler (sistem seviyesi).", importance: "high" },
      { term: "Explainability", def: "Ability to explain why a specific decision was made (decision-level).", defTR: "Belirli bir kararın neden verildiğini açıklama yeteneği (karar seviyesi).", importance: "high" },
      { term: "Black Box", def: "Complex AI model whose internal decision logic is opaque.", defTR: "İç karar mantığı opak olan karmaşık AI modeli.", importance: "high" },
      { term: "LIME", def: "Local Interpretable Model-agnostic Explanations — local approximation for individual predictions.", defTR: "Bireysel tahminler için yerel yaklaşım açıklamaları.", importance: "high" },
      { term: "SHAP", def: "SHapley Additive exPlanations — game theory-based feature contribution analysis.", defTR: "Oyun teorisi tabanlı özellik katkı analizi.", importance: "high" },
      { term: "Counterfactual", def: "'What would change for a different result?' Most intuitive explanation type.", defTR: "'Farklı sonuç için ne değişmeliydi?' En sezgisel açıklama türü.", importance: "medium" },
      { term: "Accountability", def: "Mechanisms to assign responsibility for AI system outcomes.", defTR: "AI sistem sonuçları için sorumluluk atama mekanizmaları.", importance: "high" },
      { term: "Art. 22 GDPR", def: "Right not to be subject to solely automated decisions with legal effects.", defTR: "Sadece otomatik kararlarla yasal etki yaratılmasına tabi olmama hakkı.", importance: "medium" }
    ]
  },

  6: {
    title: { en: "Week 6 — AI, Society, Power & Surveillance", tr: "Hafta 6 — AI, Toplum, Güç & Gözetleme" },
    subtitle: { en: "Technology & Social Relations, Inequality, Alienation, Surveillance", tr: "Teknoloji & Sosyal İlişkiler, Eşitsizlik, Yabancılaşma, Gözetleme" },
    summary: {
      en: [
        { heading: "👁️ Surveillance Concepts", concepts: [
          { title: "Panopticon (Bentham → Foucault)", text: "Bentham designed a prison where inmates COULD be observed at any time but couldn't tell WHEN they were being watched. Foucault used this as a metaphor: when people BELIEVE they might be watched, they regulate their own behavior. Self-disciplining effect of surveillance." },
          { title: "Surveillance Capitalism (Shoshana Zuboff)", text: "A new economic model where companies systematically extract personal data (behavioral surplus) to predict and modify behavior FOR PROFIT. Key operators: Google, Facebook, Amazon. Your data = their raw material." },
          { title: "Function Creep", text: "Technology gradually expanding BEYOND its original intended purpose. Example: Social Security numbers were designed for tax purposes only — now used for identification everywhere. CCTV for traffic monitoring → used for mass surveillance." },
          { title: "Chilling Effect", text: "When the FEAR or AWARENESS of surveillance causes people to self-censor and avoid lawful activities. Particularly harmful to free speech, political activism, journalism, and democratic participation." },
          { title: "Proportionality", text: "Any surveillance measure must be PROPORTIONATE to its legitimate aim. The most privacy-invasive option should be used only if less invasive alternatives won't work." }
        ]},
        { heading: "🎭 Facial Recognition Technology (FRT)", concepts: [
          { title: "Live Facial Recognition (LFR)", text: "Real-time face matching in public spaces — matching against watchlists. Privacy: captures EVERYONE including innocent people. Accuracy: higher error rates for women and darker-skinned individuals. Consent: people in public have no meaningful way to opt out." },
          { title: "Ethical Concerns of FRT", text: "Privacy: mass surveillance without consent. Fairness: demographic performance disparities. Autonomy: reduces people to machine-readable data points. Function Creep: from 'serious criminals' to routine monitoring. Chilling Effect: people avoid public spaces/protests." },
          { title: "Biometric Data under GDPR", text: "Biometric data (including facial data) is SPECIAL CATEGORY data under GDPR Art. 9 — requires explicit consent or specific legal basis. Processing is generally PROHIBITED unless an exception applies." }
        ]},
        { heading: "🏭 Technology & Social Relations", concepts: [
          { title: "Technology is NOT just a tool", text: "Technology changes social relations. AI is not just software — it affects jobs, power, status, control, inequality, and opportunity. The key question: Who gains more power because of this tool?" },
          { title: "Knowledge Economy & AI Power", text: "AI becomes powerful in knowledge economies because it can affect: decision-making, information flow, expertise, and professional judgment. So AI is not just automating factory work — it's reshaping knowledge work." },
          { title: "Main Social Question of Week 6", text: "Does AI reduce inequality, or deepen it? AI CAN: improve access, increase productivity, support decisions. BUT AI ALSO CAN: concentrate power, increase surveillance, replace or weaken labor." }
        ]},
        { heading: "👷 Alienation & Deskilling", concepts: [
          { title: "Alienation", text: "Workers become disconnected from: (1) the products of their labor, (2) the process of their work, (3) other people, (4) sometimes themselves. Example: If a worker is constantly managed by algorithms — timed, tracked, scored — they may feel less like a human agent and more like a machine." },
          { title: "Deskilling", text: "Technology reduces the skill needed for a task. The system takes over more of the thinking, judgment, or craft. Example: GPS replacing navigation skills, AI-generated reports replacing analytical writing." },
          { title: "Enskilling", text: "Technology increases or creates NEW skills. Workers learn to operate new tools, develop new capabilities. Example: Learning to prompt AI effectively, data literacy, human-AI collaboration skills." },
          { title: "Deskilling vs Enskilling", text: "Not all automation leads to deskilling — some creates new, more complex roles. The critical question: does the technology EMPOWER workers or REPLACE their judgment?" }
        ]},
        { heading: "⚖️ Ethical Decision-Making Lenses (Applied)", concepts: [
          { title: "Rights Lens", text: "Does this respect people's basic rights? Focus on: privacy, freedom, dignity, autonomy. If facial recognition is less accurate for certain ethnic groups, they bear more risk of false identification — violating their rights." },
          { title: "Justice Lens", text: "Is it fair? Are people treated equally and consistently? Look for: discrimination, unequal burden, defensible standards." },
          { title: "Utilitarian Lens", text: "Does this produce the most good and least harm for the greatest number? Evaluates by consequences and overall balance of good and harm. Warning: can justify benefit of majority over minority — that's why we don't use one lens alone." },
          { title: "Common Good Lens", text: "What helps society or community as a whole? A system that increases trust, public safety, and shared welfare may be defended under common good thinking. But: who defines 'common good'? That is where power enters." },
          { title: "Virtue Lens", text: "What kind of person or institution are we being? Focus on: honesty, courage, responsibility, integrity. A company hiding model failures may be technically compliant but acting without integrity." },
          { title: "Care Ethics Lens", text: "Does this take relationships, dependency, vulnerability, and empathy seriously? Matters most when: children are involved, patients are involved, vulnerable groups are involved." }
        ]}
      ],
      tr: [
        { heading: "👁️ Gözetleme Kavramları", concepts: [
          { title: "Panoptikon", text: "İzlendiğini düşünen bireylerin kendi davranışlarını düzenlemesi — gözetlemenin öz-disiplin etkisi." },
          { title: "Gözetleme Kapitalizmi (Zuboff)", text: "Şirketlerin davranışsal veriyi sistematik olarak toplayıp kar amacıyla kullandığı yeni ekonomik model." },
          { title: "İşlev Kayması (Function Creep)", text: "Teknolojinin orijinal amacı dışına genişlemesi." },
          { title: "Caydırıcı Etki (Chilling Effect)", text: "Gözetleme korkusunun ifade özgürlüğünü ve demokratik katılımı kısıtlaması." }
        ]},
        { heading: "🏭 Teknoloji & Sosyal İlişkiler", concepts: [
          { title: "Teknoloji Sadece Araç Değil", text: "Teknoloji sosyal ilişkileri değiştirir. AI işleri, gücü, statüyü, kontrolü, eşitsizliği ve fırsatları etkiler." },
          { title: "Yabancılaşma (Alienation)", text: "İşçiler emeklerinin ürünlerinden, sürecinden, diğer insanlardan ve kendilerinden kopma yaşar." },
          { title: "Deskilling vs Enskilling", text: "Deskilling: teknoloji beceri gereksinimini azaltır. Enskilling: teknoloji yeni beceriler yaratır ve geliştirir." }
        ]}
      ]
    },
    flashcards: [
      { term: "Panopticon", definition: "Bentham's prison design → Foucault's metaphor: people regulate their own behavior when they BELIEVE they might be watched. Self-disciplining effect of surveillance.", definitionTR: "İzlendiklerini DÜŞÜNEN insanlar kendi davranışlarını düzenler. Gözetlemenin öz-disiplin etkisi." },
      { term: "Surveillance Capitalism", definition: "Zuboff: companies systematically extract personal data (behavioral surplus) to predict and modify behavior for profit. Your data = their raw material (Google, Facebook).", definitionTR: "Zuboff: şirketler kar için davranışsal veriyi sistematik olarak toplar. Veriniz = ham maddeleri." },
      { term: "Function Creep", definition: "Technology gradually expanding BEYOND its original intended purpose. Example: SSN was for tax only, now used for everything. CCTV for traffic → mass surveillance.", definitionTR: "Teknoloji orijinal amacının ÖTESİNE genişler. Örnek: Trafik kamerası → toplu gözetleme." },
      { term: "Chilling Effect", definition: "Fear of surveillance causes self-censorship — people avoid lawful activities like protests, political speech, journalism. Harms democratic participation.", definitionTR: "Gözetleme korkusu öz-sansüre yol açar — insanlar protestolardan, siyasi konuşmalardan kaçınır." },
      { term: "Proportionality", definition: "Surveillance measures must be PROPORTIONATE to legitimate aims. Use the least privacy-invasive option that achieves the objective.", definitionTR: "Gözetleme önlemleri meşru amaçlarla ORANTILI olmalıdır. En az gizlilik ihlali yapan seçenek kullanılmalı." },
      { term: "Live Facial Recognition (LFR)", definition: "Real-time face matching in public spaces. Problems: captures everyone (including innocents), accuracy disparities across demographics, no meaningful consent.", definitionTR: "Kamusal alanda gerçek zamanlı yüz eşleştirme. Sorunlar: herkesi yakalar, demografik doğruluk farkları, anlamlı rıza yok." },
      { term: "Biometric Data (GDPR)", definition: "Special Category Data under GDPR Art. 9. Facial recognition data is biometric. Processing generally PROHIBITED unless explicit consent or legal exception.", definitionTR: "GDPR Madde 9 kapsamında Özel Kategori Veri. Yüz tanıma verisi biyometriktir. İşleme genellikle YASAK." },
      { term: "Mass vs Targeted Surveillance", definition: "Mass: monitoring entire populations indiscriminately. Targeted: monitoring specific individuals with justification. Mass surveillance raises proportionality concerns.", definitionTR: "Toplu: tüm nüfusu ayrım gözetmeksizin izleme. Hedefli: gerekçeyle belirli bireyleri izleme." },
      { term: "Technology Changes Social Relations", definition: "AI is not just software — it affects jobs, power, status, control, inequality, and opportunity. Key question: Who gains more power?", definitionTR: "AI sadece yazılım değil — işleri, gücü, statüyü, kontrolü, eşitsizliği etkiler. Anahtar soru: Kim daha fazla güç kazanır?" },
      { term: "Alienation", definition: "Workers become disconnected from: products of labor, process of work, other people, and themselves. Algorithmic management intensifies this.", definitionTR: "İşçiler emeklerinin ürünlerinden, sürecinden, diğer insanlardan ve kendilerinden kopar. Algoritmik yönetim bunu yoğunlaştırır." },
      { term: "Deskilling", definition: "Technology reduces skill needed for a task — system takes over thinking, judgment, or craft. Example: GPS replacing navigation skills.", definitionTR: "Teknoloji görev için gereken beceriyi azaltır — sistem düşünme ve yargıyı devralır." },
      { term: "Enskilling", definition: "Technology creates NEW skills — workers develop new capabilities. Example: learning to prompt AI, data literacy.", definitionTR: "Teknoloji YENİ beceriler yaratır — çalışanlar yeni yetenekler geliştirir." },
      { term: "AI & Inequality", definition: "AI can improve access and productivity BUT also concentrate power, increase surveillance, and replace/weaken labor.", definitionTR: "AI erişimi ve verimliliği artırabilir AMA aynı zamanda gücü yoğunlaştırabilir, gözetlemeyi artırabilir, emeği zayıflatabilir." },
      { term: "6 Ethical Lenses (Applied)", definition: "Rights (respects rights?), Justice (fair?), Utilitarian (most good?), Common Good (helps society?), Virtue (good character?), Care Ethics (protects vulnerable?)", definitionTR: "Haklar, Adalet, Faydacı, Ortak İyilik, Erdem, Bakım Etiği — 6 etik lens uygulamalı." }
    ],
    quiz: [
      { q: "Foucault's Panopticon metaphor illustrates:", options: ["The benefits of surveillance for public safety", "How surveillance technology was invented", "How people self-regulate behavior when they believe they might be watched", "The importance of prison architecture"], correct: 2, explanation: "Foucault used Bentham's Panopticon to show how perceived surveillance creates self-disciplining subjects — people modify their behavior when they THINK they're being watched." },
      { q: "Surveillance Capitalism (Zuboff) refers to:", options: ["Government surveillance programs", "Systematic extraction of personal data for profit prediction", "Capitalizing on security camera footage", "Surveillance technology manufacturing"], correct: 1, explanation: "Zuboff defines Surveillance Capitalism as the systematic extraction of behavioral data (surplus) by companies to predict and modify human behavior for commercial profit." },
      { q: "Function Creep occurs when:", options: ["Technology becomes obsolete", "Technology expands beyond its original intended purpose", "Technology functions are reduced", "Technology creeps into legislation"], correct: 1, explanation: "Function Creep: gradual expansion of technology beyond its original design. Example: SSN for tax → used for all identification. CCTV for traffic → mass surveillance." },
      { q: "The Chilling Effect describes:", options: ["Cold weather's impact on technology", "Temperature effects on AI accuracy", "Self-censorship due to fear of surveillance", "Technical cooling of server systems"], correct: 2, explanation: "Chilling Effect: awareness of surveillance leads people to self-censor and avoid lawful activities — protests, political speech, journalism." },
      { q: "Under GDPR, facial recognition data is classified as:", options: ["Regular personal data", "Special Category Data (Art. 9)", "Non-personal data", "Pseudonymized data"], correct: 1, explanation: "Facial recognition data is BIOMETRIC data — Special Category Data under GDPR Art. 9, requiring explicit consent or legal exception." },
      { q: "One key fairness concern with LFR (Live Facial Recognition) is:", options: ["It's too expensive", "Higher error rates for women and darker-skinned individuals", "It only works indoors", "It requires too much storage"], correct: 1, explanation: "LFR has demonstrated accuracy disparities — higher false positive rates for women and people with darker skin tones." },
      { q: "Proportionality in surveillance means:", options: ["Equal surveillance for everyone", "Surveillance must be proportionate to its legitimate aim", "Using proportional amounts of data", "Proportional budget allocation"], correct: 1, explanation: "Proportionality requires that surveillance measures be proportionate to the legitimate aim pursued — use the least invasive means available." },
      { q: "Social Security Numbers being used for purposes beyond tax is an example of:", options: ["Surveillance Capitalism", "Function Creep", "Chilling Effect", "Panopticism"], correct: 1, explanation: "SSN being used for general identification beyond its original tax purpose is a classic example of Function Creep." },
      { q: "According to Week 6, technology is NOT just a tool because it:", options: ["Is expensive", "Changes social relations — jobs, power, status, control, inequality", "Requires electricity", "Only works in developed countries"], correct: 1, explanation: "Technology changes social relations. AI affects jobs, power, status, control, inequality, and opportunity — it's not a neutral tool." },
      { q: "Alienation in the context of AI-managed work means:", options: ["Workers enjoy their jobs more", "Workers become disconnected from their labor, process, other people, and themselves", "Workers get higher salaries", "Workers learn new skills"], correct: 1, explanation: "Alienation: workers managed by algorithms (timed, tracked, scored) feel disconnected from their work, from others, and from themselves — feeling like machines." },
      { q: "Deskilling occurs when:", options: ["Workers learn new technologies", "Technology reduces the skill needed for a task", "Workers refuse to use AI", "Companies hire more people"], correct: 1, explanation: "Deskilling: technology takes over thinking, judgment, or craft. The system reduces the skill level needed. Example: GPS replacing navigation knowledge." },
      { q: "The Utilitarian Lens can be problematic because:", options: ["It ignores consequences", "It can justify benefit of majority over minority", "It only applies to individuals", "It requires government approval"], correct: 1, explanation: "Utilitarianism evaluates by overall consequences — it CAN justify sacrificing minority interests for majority benefit. That's why we use MULTIPLE lenses." },
      { q: "The Care Ethics lens is most relevant when:", options: ["Designing server architecture", "Children, patients, or vulnerable groups are involved", "Calculating costs", "Writing documentation"], correct: 1, explanation: "Care Ethics focuses on relationships, dependency, vulnerability, and empathy — most critical when vulnerable populations (children, patients) are affected." }
    ],
    terms: [
      { term: "Panopticon", def: "Foucault's metaphor: perceived surveillance causes self-regulation of behavior.", defTR: "Foucault'nun metaforu: algılanan gözetleme davranışın öz-düzenlenmesine neden olur.", importance: "high" },
      { term: "Surveillance Capitalism", def: "Zuboff: systematic extraction of personal behavioral data for commercial profit prediction.", defTR: "Zuboff: ticari kar tahmini için kişisel davranışsal verilerin sistematik olarak çıkarılması.", importance: "high" },
      { term: "Function Creep", def: "Technology expanding beyond its original intended purpose over time.", defTR: "Teknolojinin zamanla orijinal amacının ötesine genişlemesi.", importance: "high" },
      { term: "Chilling Effect", def: "Self-censorship caused by fear/awareness of surveillance.", defTR: "Gözetleme korkusu/farkındalığının neden olduğu öz-sansür.", importance: "high" },
      { term: "Proportionality", def: "Surveillance must be proportionate to its legitimate aim.", defTR: "Gözetleme meşru amacıyla orantılı olmalıdır.", importance: "medium" },
      { term: "LFR", def: "Live Facial Recognition — real-time face matching in public spaces.", defTR: "Canlı Yüz Tanıma — kamusal alanlarda gerçek zamanlı yüz eşleştirme.", importance: "high" },
      { term: "Biometric Data", def: "Special Category Data under GDPR — facial, fingerprint, iris data.", defTR: "GDPR kapsamında Özel Kategori Veri — yüz, parmak izi, iris verisi.", importance: "medium" },
      { term: "Alienation", def: "Workers disconnected from products, process, people, and self due to algorithmic management.", defTR: "İşçilerin algoritmik yönetim nedeniyle ürünlerden, süreçten, insanlardan ve kendilerinden kopması.", importance: "high" },
      { term: "Deskilling", def: "Technology reduces skill needed — system takes over thinking and judgment.", defTR: "Teknoloji gereken beceriyi azaltır — sistem düşünme ve yargıyı devralır.", importance: "high" },
      { term: "Enskilling", def: "Technology creates new skills and capabilities for workers.", defTR: "Teknoloji çalışanlar için yeni beceriler ve yetenekler yaratır.", importance: "medium" },
      { term: "AI & Inequality", def: "AI can improve access BUT also concentrate power, increase surveillance, replace labor.", defTR: "AI erişimi artırabilir AMA gücü yoğunlaştırabilir, gözetlemeyi artırabilir, emeği değiştirebilir.", importance: "high" },
      { term: "Knowledge Economy", def: "AI reshapes knowledge work by affecting decision-making, information flow, expertise.", defTR: "AI karar verme, bilgi akışı, uzmanlığı etkileyerek bilgi işini yeniden şekillendirir.", importance: "medium" }
    ]
  },

  7: {
    title: { en: "Week 7 — Human-Centric AI, IP & Global Governance", tr: "Hafta 7 — İnsan Odaklı AI, Fikri Mülkiyet & Küresel Yönetişim" },
    subtitle: { en: "Human Oversight, Intellectual Property, UNESCO, Trustworthy AI", tr: "İnsan Denetimi, Fikri Mülkiyet, UNESCO, Güvenilir AI" },
    summary: {
      en: [
        { heading: "👤 Human Oversight Levels", concepts: [
          { title: "Human-in-the-loop", text: "Human is ACTIVELY involved in EVERY decision. AI makes a recommendation, human approves/rejects. Example: Doctor reviews AI diagnosis before prescribing. HIGHEST human control." },
          { title: "Human-on-the-loop", text: "Human MONITORS the system and CAN INTERVENE when needed. AI operates autonomously but human can override. Example: Autonomous vehicle supervisor who can take control." },
          { title: "Human-in-command", text: "Human sets the OVERALL OBJECTIVES and BOUNDARIES. AI operates within defined limits. Human controls the strategy and scope, not individual decisions. Example: CEO setting AI strategy for the company." }
        ]},
        { heading: "🌐 UNESCO AI Ethics Recommendation (2021)", concepts: [
          { title: "UNESCO Values", text: "Human rights and human dignity, Living in peace, Diversity and inclusiveness, Environment and ecosystem flourishing, Trust" },
          { title: "UNESCO Principles (10)", text: "(1) Proportionality & Do No Harm (2) Safety & Security (3) Fairness & Non-discrimination (4) Sustainability (5) Right to Privacy (6) Human Oversight (7) Transparency & Explainability (8) Responsibility & Accountability (9) Awareness & Literacy (10) Multi-stakeholder Governance" }
        ]},
        { heading: "🏛️ Trustworthy AI (EU Ethics Guidelines)", concepts: [
          { title: "7 Requirements for Trustworthy AI", text: "(1) Human agency & oversight (2) Technical robustness & safety (3) Privacy & data governance (4) Transparency (5) Diversity, non-discrimination & fairness (6) Societal & environmental well-being (7) Accountability" },
          { title: "Three Components of Trustworthy AI", text: "Lawful (complies with law), Ethical (adheres to ethical principles), Robust (technically and socially reliable)" }
        ]},
        { heading: "⚔️ LAWS — Lethal Autonomous Weapon Systems", concepts: [
          { title: "LAWS Debate", text: "Weapons that can select and engage targets WITHOUT human intervention. Key concerns: meaningful human control, accountability gap, lowering threshold for conflict, arms race, compliance with International Humanitarian Law." },
          { title: "Meaningful Human Control", text: "Humans must maintain meaningful control over critical decisions — especially life-and-death. Not just rubber-stamping AI decisions, but genuine understanding and ability to override." },
          { title: "Responsibility Gap", text: "When no one can be held responsible for an AI system's harmful decision — neither the developer, the deployer, nor the AI itself. A major challenge for accountability in autonomous systems." }
        ]},
        { heading: "🎭 AI Ethics Washing", concepts: [
          { title: "Ethics Washing", text: "Companies or organizations claiming to follow ethical AI principles without genuine implementation. Using ethics as PR/marketing rather than systematic practice. Risk: undermines trust in genuine ethical AI efforts." }
        ]},
        { heading: "📜 Intellectual Property & AI", concepts: [
          { title: "What is IP?", text: "Intellectual Property = legal protection for things created by the mind. Includes: inventions, software, designs, books, logos, brand names, images, methods, trade secrets. IP exists to protect innovation and creativity from being unfairly copied — it gives the creator some control." },
          { title: "Why IP Matters for AI", text: "If people create something valuable, who has the right to control it, use it, copy it, or profit from it? AI raises unique IP challenges because: (1) AI can generate creative works, (2) AI is trained on potentially copyrighted data, (3) AI can invent solutions." },
          { title: "Copyright & AI", text: "Key issues: (1) Can AI-generated works be copyrighted? Generally NO — copyright requires human authorship. (2) Does training AI on copyrighted works constitute infringement? Debated — fair use vs. commercial exploitation. (3) GPAI models must disclose training data copyright info under AI Act." },
          { title: "Patents & AI", text: "AI as inventor: courts have generally ruled AI cannot be named as an inventor on patents (DABUS case). However, AI-assisted inventions BY humans can be patented. The inventive step must involve human creativity." },
          { title: "Trade Secrets", text: "AI models, training data, and algorithms can be protected as trade secrets. Tension with transparency requirements — companies may resist explaining AI to protect commercial secrets." },
          { title: "Open Source & AI", text: "Open source AI promotes transparency, collaboration, and scrutiny. However, concerns about misuse and lack of accountability. EU AI Act has specific provisions for open-source models." }
        ]}
      ],
      tr: [
        { heading: "👤 İnsan Denetim Seviyeleri", concepts: [
          { title: "Human-in-the-loop", text: "İnsan her karara AKTİF olarak dahil. AI önerir, insan onaylar/reddeder. EN YÜKSEK insan kontrolü." },
          { title: "Human-on-the-loop", text: "İnsan sistemi İZLER ve gerektiğinde müdahale eder. AI otonom çalışır ama insan geçersiz kılabilir." },
          { title: "Human-in-command", text: "İnsan GENEL HEDEFLERİ ve SINIRLARI belirler. AI belirlenen sınırlar içinde çalışır." }
        ]}
      ]
    },
    flashcards: [
      { term: "Human-in-the-loop", definition: "Human ACTIVELY involved in EVERY decision. AI recommends, human approves/rejects. Highest level of human control. Example: doctor reviewing AI diagnosis.", definitionTR: "İnsan HER karara AKTİF olarak dahil. AI önerir, insan onaylar/reddeder. En yüksek insan kontrolü." },
      { term: "Human-on-the-loop", definition: "Human MONITORS the system and CAN INTERVENE when needed. AI operates autonomously but human can override. Example: autonomous vehicle supervisor.", definitionTR: "İnsan sistemi İZLER ve gerektiğinde müdahale edebilir. AI otonom çalışır ama insan geçersiz kılabilir." },
      { term: "Human-in-command", definition: "Human sets the OVERALL OBJECTIVES and BOUNDARIES. AI operates within defined limits. Strategic control, not per-decision control.", definitionTR: "İnsan GENEL HEDEFLERİ ve SINIRLARI belirler. Stratejik kontrol — her kararda değil." },
      { term: "UNESCO AI Ethics (10 Principles)", definition: "Proportionality, Safety, Fairness, Sustainability, Privacy, Human Oversight, Transparency, Responsibility, Awareness, Multi-stakeholder Governance.", definitionTR: "Orantılılık, Güvenlik, Adalet, Sürdürülebilirlik, Gizlilik, İnsan Denetimi, Şeffaflık, Sorumluluk, Farkındalık, Çok Paydaşlı Yönetişim." },
      { term: "Trustworthy AI (7 Requirements)", definition: "Human agency, Technical robustness, Privacy & data governance, Transparency, Diversity/fairness, Societal wellbeing, Accountability.", definitionTR: "İnsan temsilciliği, Teknik sağlamlık, Gizlilik, Şeffaflık, Çeşitlilik/adalet, Toplumsal refah, Hesap verebilirlik." },
      { term: "LAWS", definition: "Lethal Autonomous Weapon Systems — weapons that select and engage targets WITHOUT human intervention. Raise concerns about meaningful human control.", definitionTR: "Otonom Silah Sistemleri — insan müdahalesi OLMADAN hedef seçen ve saldıran silahlar." },
      { term: "Meaningful Human Control", definition: "Genuine understanding and ability to override AI decisions, especially for critical/life-and-death decisions. Not just rubber-stamping.", definitionTR: "AI kararlarını gerçekten anlama ve geçersiz kılma yeteneği. Sadece otomatik onay değil." },
      { term: "Ethics Washing", definition: "Companies claiming ethical AI compliance without genuine implementation — using ethics as PR rather than systematic practice.", definitionTR: "Şirketlerin gerçek uygulama olmadan etik AI uyumu iddia etmesi — etiği PR olarak kullanma." },
      { term: "Three Components of Trustworthy AI", definition: "Lawful (legal compliance), Ethical (ethical principles), Robust (technically & socially reliable). All three must be met.", definitionTR: "Hukuka Uygun, Etik, Sağlam — üçü de sağlanmalıdır." },
      { term: "Multi-stakeholder Governance", definition: "AI governance involving diverse stakeholders: government, industry, academia, civil society, affected communities. Not top-down only.", definitionTR: "Çeşitli paydaşları içeren AI yönetişimi: hükümet, endüstri, akademi, sivil toplum." },
      { term: "Responsibility Gap", definition: "When no one can be held responsible for AI's harmful decision — neither developer, deployer, nor the AI itself. Major accountability challenge.", definitionTR: "AI'nın zararlı kararından kimsenin sorumlu tutulamadığı durum — ne geliştirici, ne kullanıcı, ne de AI." },
      { term: "Copyright & AI", definition: "AI-generated works generally cannot be copyrighted (requires human authorship). Training on copyrighted works is debated. GPAI must disclose copyright info.", definitionTR: "AI ürettiği eserlerde telif hakkı genellikle yok (insan yazarlığı gerekli). Eğitim verisi telif sorunu tartışmalı." },
      { term: "Intellectual Property (IP)", definition: "Legal protection for things created by the mind: inventions, software, designs, books, logos, brand names, images, methods, trade secrets. Protects innovation from unfair copying.", definitionTR: "Zihin tarafından yaratılan şeyler için yasal koruma: buluşlar, yazılım, tasarımlar, kitaplar, logolar, marka isimleri." },
      { term: "Why IP Exists", definition: "To protect innovation and creativity from being unfairly copied — gives creators control over their work and incentivizes innovation.", definitionTR: "İnovasyonu ve yaratıcılığı haksız kopyalanmadan korumak — yaratıcılara kontrol sağlar ve inovasyonu teşvik eder." }
    ],
    quiz: [
      { q: "In 'Human-in-the-loop', the human:", options: ["Sets overall objectives only", "Monitors but rarely intervenes", "Is actively involved in EVERY decision", "Has no role in decisions"], correct: 2, explanation: "Human-in-the-loop: human is ACTIVELY involved in EVERY decision. AI recommends, human approves or rejects. Highest level of human control." },
      { q: "A doctor who reviews AI diagnosis before prescribing is an example of:", options: ["Human-in-command", "Human-on-the-loop", "Human-in-the-loop", "Fully autonomous AI"], correct: 2, explanation: "The doctor reviews EVERY AI recommendation — this is Human-in-the-loop (active involvement in each decision)." },
      { q: "Human-on-the-loop means:", options: ["Human is in the physical loop of the technology", "Human monitors the system and can intervene when needed", "Human operates the system manually", "Human designs the algorithm only"], correct: 1, explanation: "Human-on-the-loop: human MONITORS autonomously operating AI and CAN INTERVENE when needed, but doesn't approve every decision." },
      { q: "How many principles does the UNESCO AI Ethics Recommendation contain?", options: ["5", "7", "10", "12"], correct: 2, explanation: "UNESCO's AI Ethics Recommendation (2021) contains 10 principles: Proportionality, Safety, Fairness, Sustainability, Privacy, Oversight, Transparency, Responsibility, Awareness, Governance." },
      { q: "Trustworthy AI according to EU Ethics Guidelines requires all EXCEPT:", options: ["Human agency & oversight", "Technical robustness & safety", "Maximum profitability", "Transparency"], correct: 2, explanation: "The 7 requirements don't include profitability. They are: Human agency, Robustness, Privacy, Transparency, Fairness, Societal wellbeing, Accountability." },
      { q: "LAWS (Lethal Autonomous Weapon Systems) raise concerns about:", options: ["Manufacturing costs", "Meaningful human control over life-and-death decisions", "Battery life", "User interface design"], correct: 1, explanation: "LAWS can select and engage targets WITHOUT human intervention — the key concern is maintaining meaningful human control over critical decisions." },
      { q: "Ethics Washing refers to:", options: ["Cleaning data of ethical violations", "Ethical auditing of AI systems", "Companies claiming ethical AI without genuine implementation", "Removing biased data from training sets"], correct: 2, explanation: "Ethics Washing: organizations claim to follow ethical AI principles without genuine implementation — using ethics as PR/marketing." },
      { q: "The three components of Trustworthy AI are:", options: ["Fast, Accurate, Cheap", "Lawful, Ethical, Robust", "Private, Secure, Available", "Fair, Explainable, Accountable"], correct: 1, explanation: "Trustworthy AI must be: (1) Lawful — comply with legislation, (2) Ethical — adhere to ethical principles, (3) Robust — technically and socially reliable." },
      { q: "Which human oversight level gives the MOST control to AI?", options: ["Human-in-the-loop", "Human-on-the-loop", "Human-in-command", "All give equal control"], correct: 2, explanation: "Human-in-command gives AI the MOST autonomy — human only sets overall objectives and boundaries. In-the-loop gives AI the LEAST autonomy." },
      { q: "Meaningful Human Control requires:", options: ["Automatic approval of all AI decisions", "Genuine understanding and real ability to override AI decisions", "Humans building AI from scratch", "At least 3 humans reviewing each decision"], correct: 1, explanation: "Meaningful Human Control = genuine understanding + real ability to override. Not just rubber-stamping AI decisions." },
      { q: "The 'Responsibility Gap' in AI refers to:", options: ["Lack of AI engineers in the job market", "When no entity can be held responsible for AI's harmful decision", "The gap between AI performance and human performance", "Time gap between AI development and deployment"], correct: 1, explanation: "Responsibility Gap: when no one (developer, deployer, or AI itself) can be held responsible for harmful AI decisions — a major accountability challenge." },
      { q: "Can AI-generated works be copyrighted?", options: ["Yes, always", "Generally NO — copyright requires human authorship", "Only if the AI has a license", "Only for commercial use"], correct: 1, explanation: "Copyright generally requires HUMAN authorship. AI-generated works without meaningful human creative input cannot be copyrighted." },
      { q: "In the DABUS patent case, courts ruled that:", options: ["AI can be named as an inventor", "AI-assisted inventions cannot be patented", "AI cannot be named as an inventor on patents", "Only government AI can hold patents"], correct: 2, explanation: "In the DABUS case, courts generally ruled that AI CANNOT be named as an inventor — patents require a human inventor, though AI-assisted inventions by humans can be patented." }
    ],
    terms: [
      { term: "Human-in-the-loop", def: "Human actively involved in every decision. Highest human control.", defTR: "İnsan her karara aktif olarak dahil. En yüksek insan kontrolü.", importance: "high" },
      { term: "Human-on-the-loop", def: "Human monitors and can intervene. AI operates autonomously.", defTR: "İnsan izler ve müdahale edebilir. AI otonom çalışır.", importance: "high" },
      { term: "Human-in-command", def: "Human sets objectives and boundaries. Most AI autonomy.", defTR: "İnsan hedef ve sınırları belirler. En fazla AI otonomisi.", importance: "high" },
      { term: "UNESCO Recommendation", def: "2021 global AI ethics framework with 10 principles and values.", defTR: "2021 küresel AI etik çerçevesi, 10 prensip ve değerler.", importance: "high" },
      { term: "Trustworthy AI", def: "EU framework: Lawful + Ethical + Robust with 7 key requirements.", defTR: "AB çerçevesi: Hukuka Uygun + Etik + Sağlam, 7 temel gereksinim.", importance: "high" },
      { term: "LAWS", def: "Lethal Autonomous Weapon Systems — weapons selecting targets without human control.", defTR: "Otonom Silah Sistemleri — insan kontrolü olmadan hedef seçen silahlar.", importance: "medium" },
      { term: "Ethics Washing", def: "Claiming ethical AI compliance without genuine implementation.", defTR: "Gerçek uygulama olmadan etik AI uyumu iddia etme.", importance: "medium" },
      { term: "Meaningful Human Control", def: "Genuine understanding and ability to override AI, not just rubber-stamping.", defTR: "AI'yı gerçekten anlama ve geçersiz kılma yeteneği.", importance: "high" },
      { term: "Responsibility Gap", def: "When no entity can be held responsible for AI's harmful decision.", defTR: "AI'nın zararlı kararından kimsenin sorumlu tutulamadığı durum.", importance: "high" },
      { term: "Copyright & AI", def: "AI-generated works lack copyright (need human authorship). Training on copyrighted data is debated.", defTR: "AI ürettiği eserler telif hakkını alamaz (insan yazarlığı gerekli).", importance: "medium" },
      { term: "Intellectual Property", def: "Legal protection for mind's creations: inventions, software, designs, logos, methods, trade secrets.", defTR: "Zihin yaratılarının yasal koruması: buluşlar, yazılım, tasarımlar, logolar, yöntemler.", importance: "high" },
      { term: "DABUS Case", def: "Courts ruled AI cannot be named as inventor on patents — human inventive step required.", defTR: "Mahkemeler AI'nın patent mucidi olarak adlandırılamayacağına karar verdi — insan buluş adımı gerekli.", importance: "medium" },
      { term: "Trade Secrets & AI", def: "AI models and training data can be trade secrets — tension with transparency requirements.", defTR: "AI modelleri ve eğitim verileri ticari sır olabilir — şeffaflık gereksinimleriyle çatışma.", importance: "medium" }
    ]
  }
};

// ============================
// UI TEXT TRANSLATIONS
// ============================
const UI_TEXT = {
  dashboard: { en: "Dashboard", tr: "Ana Sayfa" },
  summary: { en: "Summary", tr: "Özet" },
  flashcards: { en: "Flashcards", tr: "Kartlar" },
  quiz: { en: "Quiz", tr: "Quiz" },
  keyTerms: { en: "Key Terms", tr: "Terimler" },
  back: { en: "Back", tr: "Geri" },
  next: { en: "Next", tr: "Sonraki" },
  prev: { en: "Previous", tr: "Önceki" },
  checkAnswer: { en: "Check Answer", tr: "Cevabı Kontrol Et" },
  nextQuestion: { en: "Next Question", tr: "Sonraki Soru" },
  retry: { en: "Retry Quiz", tr: "Quiz'i Tekrarla" },
  known: { en: "✓ Known", tr: "✓ Biliyorum" },
  review: { en: "↻ Review", tr: "↻ Tekrar" },
  clickToFlip: { en: "Click to flip", tr: "Çevirmek için tıkla" },
  term: { en: "TERM", tr: "TERİM" },
  definition: { en: "DEFINITION", tr: "TANIM" },
  searchTerms: { en: "Search key terms...", tr: "Terimlerde ara..." },
  quizComplete: { en: "Quiz Complete!", tr: "Quiz Tamamlandı!" },
  yourScore: { en: "Your Score", tr: "Puanın" },
  excellent: { en: "Excellent! You've mastered this topic! 🌟", tr: "Mükemmel! Bu konuya hakimsin! 🌟" },
  good: { en: "Good job! Review a few concepts.", tr: "İyi iş! Birkaç kavramı tekrar et." },
  needsWork: { en: "Keep studying! You'll get there. 💪", tr: "Çalışmaya devam! Başaracaksın. 💪" },
  startMockExam: { en: "Start Mock Exam", tr: "Mock Sınava Başla" },
  mockExamTitle: { en: "Full Mock Exam", tr: "Tam Mock Sınav" },
  exitExam: { en: "Exit Exam", tr: "Sınavdan Çık" },
  submitExam: { en: "Submit Exam", tr: "Sınavı Gönder" },
  examResults: { en: "Exam Results", tr: "Sınav Sonuçları" },
  timeLeft: { en: "Time Left", tr: "Kalan Süre" },
  importance: { en: { high: "⭐ Exam Critical", medium: "📌 Important", low: "📎 Good to Know" }, tr: { high: "⭐ Sınav İçin Kritik", medium: "📌 Önemli", low: "📎 Bilmekte Fayda Var" } },
  flashcardsOf: { en: "of", tr: "/" },
  question: { en: "Question", tr: "Soru" }
};

// ============================
// APPLICATION STATE
// ============================
let state = {
  currentWeek: 0,
  currentMode: 'summary',
  language: 'en',
  flashcardIndex: 0,
  flashcardFlipped: false,
  quizIndex: 0,
  quizSelectedAnswer: null,
  quizAnswered: false,
  quizCorrectCount: 0,
  quizAnswers: [],
  knownCards: JSON.parse(localStorage.getItem('rri_known_cards') || '{}'),
  quizScores: JSON.parse(localStorage.getItem('rri_quiz_scores') || '{}'),
  weekVisited: JSON.parse(localStorage.getItem('rri_week_visited') || '{}'),
  mockExamActive: false,
  mockExamQuestions: [],
  mockExamIndex: 0,
  mockExamAnswers: [],
  mockExamTimer: null,
  mockExamTimeLeft: 0
};

// ============================
// INITIALIZATION
// ============================
function init() {
  renderWeekNav();
  renderDashboard();
  updateProgress();
  bindEvents();
}

function bindEvents() {
  // Sidebar week buttons
  document.getElementById('weekNav').addEventListener('click', (e) => {
    const btn = e.target.closest('.week-btn');
    if (btn) {
      const weekVal = btn.dataset.week;
      if (weekVal === 'casestudy') {
        openCaseStudyTutorial();
      } else {
        const week = parseInt(weekVal);
        selectWeek(week);
      }
    }
  });

  // Mode tabs
  document.getElementById('modeTabs').addEventListener('click', (e) => {
    const tab = e.target.closest('.mode-tab');
    if (tab) selectMode(tab.dataset.mode);
  });

  // Back to dashboard
  document.getElementById('backToDash').addEventListener('click', () => selectWeek(0));

  // Language toggle
  document.getElementById('langToggle').addEventListener('click', toggleLanguage);

  // Mobile menu
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('active');
  });
  document.getElementById('sidebarOverlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
  });

  // Mock exam button
  document.getElementById('startMockExam').addEventListener('click', startMockExam);

  // Case Study Masterclass button
  document.getElementById('openCaseStudy').addEventListener('click', openCaseStudyTutorial);
}

// ============================
// NAVIGATION
// ============================
function selectWeek(weekNum) {
  state.currentWeek = weekNum;
  state.currentMode = 'summary';
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
  state.quizIndex = 0;
  state.quizSelectedAnswer = null;
  state.quizAnswered = false;
  state.quizCorrectCount = 0;
  state.quizAnswers = [];

  // Update sidebar active
  document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`weekBtn${weekNum}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Show correct view
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  if (weekNum === 0) {
    document.getElementById('dashboardView').classList.add('active');
    renderDashboard();
  } else {
    document.getElementById('weekView').classList.add('active');
    state.weekVisited[weekNum] = true;
    localStorage.setItem('rri_week_visited', JSON.stringify(state.weekVisited));
    renderWeekView();
  }

  // Update mode tabs
  document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.mode-tab[data-mode="summary"]')?.classList.add('active');

  updateProgress();

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
}

function selectMode(mode) {
  state.currentMode = mode;

  // Reset mode-specific state
  if (mode === 'flashcards') {
    state.flashcardIndex = 0;
    state.flashcardFlipped = false;
  }
  if (mode === 'quiz') {
    state.quizIndex = 0;
    state.quizSelectedAnswer = null;
    state.quizAnswered = false;
    state.quizCorrectCount = 0;
    state.quizAnswers = [];
  }

  document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.mode-tab[data-mode="${mode}"]`)?.classList.add('active');
  renderModeContent();
}

// ============================
// RENDERING — DASHBOARD
// ============================
function renderWeekNav() {
  // Already in HTML, just update labels
  updateLanguageLabels();
}

function renderDashboard() {
  const grid = document.getElementById('dashboardGrid');
  const lang = state.language;

  let html = '';
  for (let i = 1; i <= 7; i++) {
    const w = WEEKS[i];
    const fc = w.flashcards.length;
    const qz = w.quiz.length;
    const knownCount = Object.keys(state.knownCards[i] || {}).length;
    const quizScore = state.quizScores[i] || null;
    const progress = calculateWeekProgress(i);

    html += `
      <div class="week-card animate-in" style="animation-delay: ${i * 0.06}s" onclick="selectWeek(${i})">
        <div class="week-card-header">
          <div class="week-card-num">${i}</div>
          <div>
            <div class="week-card-title">${w.title[lang]}</div>
            <div class="week-card-subtitle">${w.subtitle[lang]}</div>
          </div>
        </div>
        <div class="week-card-stats">
          <span class="week-card-stat"><span class="stat-dot" style="background:var(--accent-1)"></span> ${fc} ${lang === 'en' ? 'cards' : 'kart'}</span>
          <span class="week-card-stat"><span class="stat-dot" style="background:var(--success)"></span> ${knownCount}/${fc} ${lang === 'en' ? 'known' : 'bilinen'}</span>
          <span class="week-card-stat"><span class="stat-dot" style="background:var(--warning)"></span> ${quizScore !== null ? quizScore + '%' : '—'} quiz</span>
        </div>
        <div class="week-card-progress"><div class="week-card-progress-fill" style="width:${progress}%"></div></div>
      </div>
    `;
  }
  grid.innerHTML = html;
  updateDashboardStats();
}

function updateDashboardStats() {
  let totalKnown = 0, totalCards = 0, quizTotal = 0, quizCount = 0, weeksStudied = 0;
  for (let i = 1; i <= 7; i++) {
    totalCards += WEEKS[i].flashcards.length;
    totalKnown += Object.keys(state.knownCards[i] || {}).length;
    if (state.quizScores[i]) { quizTotal += state.quizScores[i]; quizCount++; }
    if (state.weekVisited[i]) weeksStudied++;
  }
  document.getElementById('statFlashcards').textContent = `${totalKnown}/${totalCards}`;
  document.getElementById('statQuizzes').textContent = quizCount > 0 ? Math.round(quizTotal / quizCount) + '%' : '—';
  document.getElementById('statWeeks').textContent = `${weeksStudied}/7`;
}

// ============================
// RENDERING — WEEK VIEW
// ============================
function renderWeekView() {
  const w = WEEKS[state.currentWeek];
  const lang = state.language;
  document.getElementById('weekTitle').textContent = w.title[lang];
  renderModeContent();
}

function renderModeContent() {
  const container = document.getElementById('modeContent');
  switch (state.currentMode) {
    case 'summary': renderSummary(container); break;
    case 'flashcards': renderFlashcards(container); break;
    case 'quiz': renderQuiz(container); break;
    case 'terms': renderTerms(container); break;
  }
}

// ============================
// RENDERING — SUMMARY
// ============================
function renderSummary(container) {
  const w = WEEKS[state.currentWeek];
  const lang = state.language;
  const summaryData = w.summary[lang] || w.summary.en;

  let html = '<div class="summary-container animate-in">';
  summaryData.forEach(section => {
    html += `<div class="summary-section">`;
    html += `<h3 class="summary-section-title">${section.heading}</h3>`;
    if (section.text) {
      html += `<div class="summary-text"><p>${section.text}</p></div>`;
    }
    if (section.concepts) {
      html += '<div class="concept-grid">';
      section.concepts.forEach(c => {
        html += `
          <div class="concept-card">
            <div class="concept-card-title">${c.title}</div>
            <div class="concept-card-text">${c.text}</div>
          </div>
        `;
      });
      html += '</div>';
    }
    html += '</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}

// ============================
// RENDERING — FLASHCARDS
// ============================
function renderFlashcards(container) {
  const w = WEEKS[state.currentWeek];
  const lang = state.language;
  const cards = w.flashcards;
  const idx = state.flashcardIndex;
  const card = cards[idx];
  const weekKnown = state.knownCards[state.currentWeek] || {};
  const isKnown = weekKnown[idx] === true;
  const def = lang === 'tr' && card.definitionTR ? card.definitionTR : card.definition;
  const progress = ((idx + 1) / cards.length * 100).toFixed(0);

  container.innerHTML = `
    <div class="flashcard-container animate-in">
      <div class="flashcard-progress-bar">
        <span class="flashcard-counter">${idx + 1} ${UI_TEXT.flashcardsOf[lang]} ${cards.length}</span>
        <div class="flashcard-track"><div class="flashcard-track-fill" style="width:${progress}%"></div></div>
      </div>

      <div class="flashcard-wrapper" onclick="flipFlashcard()">
        <div class="flashcard ${state.flashcardFlipped ? 'flipped' : ''}">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-label">${UI_TEXT.term[lang]}</div>
            <div class="flashcard-term">${card.term}</div>
            <div class="flashcard-hint">${UI_TEXT.clickToFlip[lang]}</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-label">${UI_TEXT.definition[lang]}</div>
            <div class="flashcard-definition">${def}</div>
            <div class="flashcard-hint">${UI_TEXT.clickToFlip[lang]}</div>
          </div>
        </div>
      </div>

      <div class="flashcard-controls">
        <button class="fc-btn" onclick="prevFlashcard()" ${idx === 0 ? 'disabled' : ''}>←</button>
        <button class="fc-btn fc-btn-review" onclick="markFlashcard(false)">↻</button>
        <button class="fc-btn fc-btn-known ${isKnown ? 'is-known' : ''}" onclick="markFlashcard(true)">✓</button>
        <button class="fc-btn" onclick="nextFlashcard()" ${idx === cards.length - 1 ? 'disabled' : ''}>→</button>
      </div>
    </div>
  `;
}

function flipFlashcard() {
  state.flashcardFlipped = !state.flashcardFlipped;
  const card = document.querySelector('.flashcard');
  if (card) card.classList.toggle('flipped', state.flashcardFlipped);
}

function nextFlashcard() {
  const cards = WEEKS[state.currentWeek].flashcards;
  if (state.flashcardIndex < cards.length - 1) {
    state.flashcardIndex++;
    state.flashcardFlipped = false;
    renderFlashcards(document.getElementById('modeContent'));
  }
}

function prevFlashcard() {
  if (state.flashcardIndex > 0) {
    state.flashcardIndex--;
    state.flashcardFlipped = false;
    renderFlashcards(document.getElementById('modeContent'));
  }
}

function markFlashcard(known) {
  if (!state.knownCards[state.currentWeek]) state.knownCards[state.currentWeek] = {};
  if (known) {
    state.knownCards[state.currentWeek][state.flashcardIndex] = true;
  } else {
    delete state.knownCards[state.currentWeek][state.flashcardIndex];
  }
  localStorage.setItem('rri_known_cards', JSON.stringify(state.knownCards));
  updateProgress();
  // Auto-advance
  nextFlashcard();
}

// ============================
// RENDERING — QUIZ
// ============================
function renderQuiz(container) {
  const w = WEEKS[state.currentWeek];
  const questions = w.quiz;
  const idx = state.quizIndex;
  const lang = state.language;

  if (idx >= questions.length) {
    renderQuizResults(container);
    return;
  }

  const q = questions[idx];
  const letters = ['A', 'B', 'C', 'D'];

  let optionsHtml = '';
  q.options.forEach((opt, i) => {
    let cls = 'quiz-option';
    if (state.quizAnswered) {
      cls += ' disabled';
      if (i === q.correct) cls += ' correct';
      else if (i === state.quizSelectedAnswer && i !== q.correct) cls += ' wrong';
    } else if (state.quizSelectedAnswer === i) {
      cls += ' selected';
    }
    optionsHtml += `
      <div class="${cls}" onclick="selectQuizAnswer(${i})">
        <span class="quiz-option-letter">${letters[i]}</span>
        <span class="quiz-option-text">${opt}</span>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="quiz-container animate-in">
      <div class="quiz-header">
        <span class="quiz-progress">${UI_TEXT.question[lang]} ${idx + 1}/${questions.length}</span>
        <span class="quiz-score-live">✓ ${state.quizCorrectCount}/${idx}</span>
      </div>
      <div class="quiz-question-card">
        <div class="quiz-question-text">${q.q}</div>
        <div class="quiz-options">${optionsHtml}</div>
        <div class="quiz-explanation ${state.quizAnswered ? 'show' : ''}" id="quizExplanation">
          💡 ${q.explanation}
        </div>
      </div>
      <div class="quiz-actions">
        ${!state.quizAnswered ?
          `<button class="quiz-btn quiz-btn-primary" onclick="checkQuizAnswer()" ${state.quizSelectedAnswer === null ? 'disabled' : ''}>${UI_TEXT.checkAnswer[lang]}</button>` :
          `<button class="quiz-btn quiz-btn-primary" onclick="nextQuizQuestion()">${idx < questions.length - 1 ? UI_TEXT.nextQuestion[lang] : (lang === 'en' ? 'See Results' : 'Sonuçları Gör')}</button>`
        }
      </div>
    </div>
  `;
}

function selectQuizAnswer(idx) {
  if (state.quizAnswered) return;
  state.quizSelectedAnswer = idx;
  renderQuiz(document.getElementById('modeContent'));
}

function checkQuizAnswer() {
  if (state.quizSelectedAnswer === null) return;
  state.quizAnswered = true;
  const q = WEEKS[state.currentWeek].quiz[state.quizIndex];
  if (state.quizSelectedAnswer === q.correct) {
    state.quizCorrectCount++;
  }
  state.quizAnswers.push({ selected: state.quizSelectedAnswer, correct: q.correct });
  renderQuiz(document.getElementById('modeContent'));
}

function nextQuizQuestion() {
  state.quizIndex++;
  state.quizSelectedAnswer = null;
  state.quizAnswered = false;
  renderQuiz(document.getElementById('modeContent'));
}

function renderQuizResults(container) {
  const w = WEEKS[state.currentWeek];
  const total = w.quiz.length;
  const correct = state.quizCorrectCount;
  const pct = Math.round((correct / total) * 100);
  const lang = state.language;

  // Save score
  state.quizScores[state.currentWeek] = pct;
  localStorage.setItem('rri_quiz_scores', JSON.stringify(state.quizScores));
  updateProgress();

  let msg = pct >= 80 ? UI_TEXT.excellent[lang] : pct >= 50 ? UI_TEXT.good[lang] : UI_TEXT.needsWork[lang];

  let breakdownHtml = '<ul class="results-list">';
  state.quizAnswers.forEach((a, i) => {
    const q = w.quiz[i];
    const isCorrect = a.selected === a.correct;
    breakdownHtml += `<li><span class="r-icon">${isCorrect ? '✅' : '❌'}</span> Q${i+1}: ${q.q.substring(0, 60)}...</li>`;
  });
  breakdownHtml += '</ul>';

  container.innerHTML = `
    <div class="quiz-container animate-in">
      <div class="quiz-results">
        <div class="quiz-results-score">${pct}%</div>
        <div class="quiz-results-label">${correct}/${total} ${lang === 'en' ? 'correct' : 'doğru'}</div>
        <div class="quiz-results-msg">${msg}</div>
        <div class="quiz-results-breakdown">
          <h4>${lang === 'en' ? 'Breakdown' : 'Detay'}</h4>
          ${breakdownHtml}
        </div>
        <div class="quiz-actions">
          <button class="quiz-btn quiz-btn-primary" onclick="selectMode('quiz')">${UI_TEXT.retry[lang]}</button>
          <button class="quiz-btn" onclick="selectMode('flashcards')">${lang === 'en' ? 'Review Flashcards' : 'Kartları Tekrarla'}</button>
        </div>
      </div>
    </div>
  `;
}

// ============================
// RENDERING — TERMS
// ============================
function renderTerms(container) {
  const w = WEEKS[state.currentWeek];
  const lang = state.language;
  const terms = w.terms;

  let termsHtml = '';
  terms.forEach((t, i) => {
    const def = lang === 'tr' && t.defTR ? t.defTR : t.def;
    const impClass = t.importance === 'high' ? 'importance-high' : t.importance === 'medium' ? 'importance-medium' : 'importance-low';
    const impLabel = UI_TEXT.importance[lang][t.importance] || '';

    termsHtml += `
      <div class="term-item" id="term${i}">
        <div class="term-header" onclick="toggleTerm(${i})">
          <span class="term-name">${t.term}</span>
          <span class="term-toggle">▼</span>
        </div>
        <div class="term-body">
          <div class="term-definition">${def}</div>
          <span class="term-importance ${impClass}">${impLabel}</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="terms-container animate-in">
      <input type="text" class="terms-search" placeholder="${UI_TEXT.searchTerms[lang]}" oninput="filterTerms(this.value)">
      <div class="terms-list" id="termsList">
        ${termsHtml}
      </div>
    </div>
  `;
}

function toggleTerm(idx) {
  document.getElementById(`term${idx}`).classList.toggle('open');
}

function filterTerms(query) {
  const items = document.querySelectorAll('.term-item');
  const q = query.toLowerCase();
  items.forEach(item => {
    const name = item.querySelector('.term-name').textContent.toLowerCase();
    const def = item.querySelector('.term-definition').textContent.toLowerCase();
    item.style.display = (name.includes(q) || def.includes(q)) ? '' : 'none';
  });
}

// ============================
// TRUE/FALSE QUESTION BANK (matches real exam format)
// ============================
const TRUE_FALSE_BANK = [
  // Week 1
  { statement: "Technological Determinism argues that society shapes technology, not the other way around.", answer: false, explanation: "Technological Determinism argues the OPPOSITE — technology shapes society and drives social change.", week: 1 },
  { statement: "The Collingridge Dilemma states that it's easy to change technology early but hard to predict impacts, and later impacts are clear but technology is hard to change.", answer: true, explanation: "Correct! The information problem (early) and power problem (late) are the two horns of the Collingridge Dilemma.", week: 1 },
  { statement: "In SCOT theory, 'interpretive flexibility' means different social groups can interpret the same technology differently.", answer: true, explanation: "Correct! Interpretive flexibility is a core SCOT concept — different relevant social groups assign different meanings.", week: 1 },
  { statement: "ANT (Actor-Network Theory) only considers human actors in its network analysis.", answer: false, explanation: "ANT treats BOTH human and non-human actors equally — technologies, regulations, and standards are also actants.", week: 1 },
  { statement: "Utilitarianism focuses on moral rules and duties regardless of consequences.", answer: false, explanation: "That describes Deontology (Kant). Utilitarianism focuses on OUTCOMES — greatest good for the greatest number.", week: 1 },
  { statement: "The AREA framework stands for Anticipate, Reflect, Engage, Act.", answer: true, explanation: "Correct! AREA is the practical framework for implementing RRI.", week: 1 },
  // Week 2
  { statement: "Under the EU AI Act, social scoring by public authorities is classified as High Risk.", answer: false, explanation: "Social scoring by governments is UNACCEPTABLE RISK — it's BANNED, not just High Risk.", week: 2 },
  { statement: "GDPR lists 6 lawful bases for processing personal data.", answer: true, explanation: "Correct! Consent, Contract, Legal Obligation, Vital Interests, Public Task, Legitimate Interests.", week: 2 },
  { statement: "A Data Processor determines the purposes and means of personal data processing.", answer: false, explanation: "That's the Data CONTROLLER. A Data Processor processes data ON BEHALF of the controller.", week: 2 },
  { statement: "Under the EU AI Act, AI used in employment decisions is classified as High Risk.", answer: true, explanation: "Correct! AI in employment/recruitment is High Risk, requiring strict compliance including human oversight.", week: 2 },
  { statement: "The 'Right to be Forgotten' is formally known as the Right to Data Portability.", answer: false, explanation: "It's called the Right to ERASURE. Right to Data Portability is a separate right.", week: 2 },
  { statement: "Under the AI Act, a 'Deployer' is the entity that develops the AI system.", answer: false, explanation: "A Deployer USES the AI system professionally. The entity that DEVELOPS it is the Provider.", week: 2 },
  // Week 3
  { statement: "Privacy by Design means adding privacy features after the system is deployed.", answer: false, explanation: "Privacy by Design means integrating data protection FROM THE START — during design, not after deployment.", week: 3 },
  { statement: "A DPIA is required when processing is likely to result in high risk to rights and freedoms.", answer: true, explanation: "Correct! DPIA is mandatory for high-risk processing under GDPR Art. 35.", week: 3 },
  { statement: "Under GDPR, data breaches must be reported to the supervisory authority within 24 hours.", answer: false, explanation: "The deadline is 72 HOURS, not 24 hours.", week: 3 },
  { statement: "The Accountability principle means controllers must DEMONSTRATE compliance, not just comply.", answer: true, explanation: "Correct! Accountability requires proof/evidence of compliance — documentation, records, assessments.", week: 3 },
  // Week 4
  { statement: "In FAIR principles, the 'A' stands for 'Accurate'.", answer: false, explanation: "The 'A' stands for ACCESSIBLE, not Accurate. FAIR = Findable, Accessible, Interoperable, Reusable.", week: 4 },
  { statement: "The Impossibility Theorem proves that all fairness metrics can be satisfied simultaneously with enough data.", answer: false, explanation: "The opposite! It proves you CANNOT satisfy all fairness metrics at the same time — choosing which to prioritize is a value judgment.", week: 4 },
  { statement: "Representation Bias occurs when training data doesn't represent the full population.", answer: true, explanation: "Correct! When some groups are under/overrepresented in training data, representation bias occurs.", week: 4 },
  { statement: "Historical Bias can exist even with perfect sampling if the real world itself is biased.", answer: true, explanation: "Correct! Historical bias reflects existing societal inequalities — perfect data sampling still captures biased reality.", week: 4 },
  // Week 5
  { statement: "Transparency and Explainability are the same thing.", answer: false, explanation: "They are DIFFERENT! Transparency = system-level openness. Explainability = decision-level reasoning for specific outcomes.", week: 5 },
  { statement: "SHAP is based on game theory (Shapley values) to calculate feature contributions.", answer: true, explanation: "Correct! SHAP uses Shapley values from cooperative game theory.", week: 5 },
  { statement: "GDPR Article 22 gives data subjects the right to not be subject to solely automated decisions with legal effects.", answer: true, explanation: "Correct! Art. 22 protects against purely automated decisions with legal or significant effects.", week: 5 },
  { statement: "A linear regression model is considered a 'Black Box' model.", answer: false, explanation: "Linear regression is INTERPRETABLE — you can see exactly how each feature contributes. Neural networks are black boxes.", week: 5 },
  // Week 6
  { statement: "Foucault's Panopticon metaphor illustrates how people self-regulate when they believe they're being watched.", answer: true, explanation: "Correct! The Panopticon effect: perceived surveillance leads to self-disciplining behavior.", week: 6 },
  { statement: "Surveillance Capitalism (Zuboff) describes government surveillance programs.", answer: false, explanation: "Surveillance Capitalism describes COMMERCIAL extraction of personal data for profit prediction by companies like Google and Facebook.", week: 6 },
  { statement: "Function Creep refers to technology being used beyond its original intended purpose.", answer: true, explanation: "Correct! Example: SSN designed for tax purposes, now used for general identification.", week: 6 },
  { statement: "Facial recognition data is regular personal data, not Special Category Data under GDPR.", answer: false, explanation: "Facial recognition is BIOMETRIC data — Special Category Data under GDPR Art. 9, requiring explicit consent.", week: 6 },
  // Week 7
  { statement: "Human-in-the-loop means the human only sets overall objectives and boundaries.", answer: false, explanation: "That's Human-in-COMMAND. Human-in-the-loop means human is actively involved in EVERY decision.", week: 7 },
  { statement: "The UNESCO AI Ethics Recommendation contains 10 principles.", answer: true, explanation: "Correct! Proportionality, Safety, Fairness, Sustainability, Privacy, Oversight, Transparency, Responsibility, Awareness, Governance.", week: 7 },
  { statement: "Trustworthy AI has three components: Lawful, Ethical, and Robust.", answer: true, explanation: "Correct! All three must be satisfied for AI to be considered trustworthy.", week: 7 },
  { statement: "AI-generated works can always be copyrighted under current law.", answer: false, explanation: "Generally NO — copyright requires HUMAN authorship. AI-generated works without human creative input lack copyright protection.", week: 7 },
  { statement: "Ethics Washing means companies genuinely implementing ethical AI principles.", answer: false, explanation: "Ethics Washing is the OPPOSITE — claiming ethical compliance without genuine implementation, using ethics as PR.", week: 7 },
  { statement: "The Responsibility Gap occurs when no entity can be held responsible for AI's harmful decision.", answer: true, explanation: "Correct! Neither developer, deployer, nor AI itself can be held accountable — a major governance challenge.", week: 7 }
];

// ============================
// MOCK EXAM
// ============================
function startMockExam() {
  state.mockExamActive = true;
  state.mockExamQuestions = generateMockExam(20);
  state.mockExamIndex = 0;
  state.mockExamAnswers = new Array(state.mockExamQuestions.length).fill(null);
  state.mockExamTimeLeft = 30 * 60; // 30 minutes

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('mockExamView').classList.add('active');

  // Start timer
  if (state.mockExamTimer) clearInterval(state.mockExamTimer);
  state.mockExamTimer = setInterval(updateMockTimer, 1000);

  renderMockExam();
}

function generateMockExam(count) {
  // Mix MCQ and True/False questions like real exam
  let allMCQ = [];
  for (let w = 1; w <= 7; w++) {
    WEEKS[w].quiz.forEach((q, i) => {
      allMCQ.push({ ...q, week: w, originalIndex: i, type: 'mcq' });
    });
  }

  // Convert T/F to quiz format
  let allTF = TRUE_FALSE_BANK.map((tf, i) => ({
    q: `True or False: ${tf.statement}`,
    options: ['True', 'False'],
    correct: tf.answer ? 0 : 1,
    explanation: tf.explanation,
    week: tf.week,
    originalIndex: i,
    type: 'tf'
  }));

  // Shuffle both pools
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  shuffle(allMCQ);
  shuffle(allTF);

  // Pick 12 T/F and 8 MCQ (like real exam: 12 T/F + case study)
  const tfQuestions = allTF.slice(0, Math.min(12, allTF.length));
  const mcqQuestions = allMCQ.slice(0, Math.min(8, allMCQ.length));

  return shuffle([...tfQuestions, ...mcqQuestions]);
}

function updateMockTimer() {
  state.mockExamTimeLeft--;
  if (state.mockExamTimeLeft <= 0) {
    clearInterval(state.mockExamTimer);
    submitMockExam();
    return;
  }
  const timerEl = document.getElementById('mockTimer');
  if (timerEl) {
    const m = Math.floor(state.mockExamTimeLeft / 60);
    const s = state.mockExamTimeLeft % 60;
    timerEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    if (state.mockExamTimeLeft < 300) timerEl.classList.add('warning');
  }
}

function renderMockExam() {
  const container = document.getElementById('mockExamContent');
  const lang = state.language;
  const qs = state.mockExamQuestions;
  const idx = state.mockExamIndex;
  const q = qs[idx];
  const m = Math.floor(state.mockExamTimeLeft / 60);
  const s = state.mockExamTimeLeft % 60;
  const letters = ['A', 'B', 'C', 'D'];
  const selectedAns = state.mockExamAnswers[idx];

  let optionsHtml = '';
  q.options.forEach((opt, i) => {
    let cls = 'quiz-option';
    if (selectedAns === i) cls += ' selected';
    optionsHtml += `
      <div class="${cls}" onclick="selectMockAnswer(${i})">
        <span class="quiz-option-letter">${letters[i]}</span>
        <span class="quiz-option-text">${opt}</span>
      </div>
    `;
  });

  // Question navigator dots
  let dotsHtml = '<div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:20px;">';
  qs.forEach((_, i) => {
    const answered = state.mockExamAnswers[i] !== null;
    const isCurrent = i === idx;
    dotsHtml += `<button onclick="goToMockQuestion(${i})" style="
      width:28px;height:28px;border-radius:6px;border:1px solid ${isCurrent ? 'var(--accent-1)' : 'var(--border)'};
      background:${isCurrent ? 'rgba(102,126,234,0.2)' : answered ? 'var(--success-bg)' : 'var(--bg-glass)'};
      color:${answered ? 'var(--success)' : 'var(--text-muted)'};cursor:pointer;font-size:0.7rem;font-weight:600;
      font-family:inherit;">${i+1}</button>`;
  });
  dotsHtml += '</div>';

  container.innerHTML = `
    <div class="mock-exam-header">
      <div>
        <strong>${UI_TEXT.mockExamTitle[lang]}</strong>
        <span class="mock-progress-text"> — ${idx + 1}/${qs.length}</span>
      </div>
      <div class="mock-timer" id="mockTimer">${m}:${s.toString().padStart(2, '0')}</div>
      <button class="mock-exit-btn" onclick="exitMockExam()">${UI_TEXT.exitExam[lang]}</button>
    </div>
    <div class="mock-exam-body">
      ${dotsHtml}
      <div class="quiz-question-card">
        <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:8px;">Week ${q.week}</div>
        <div class="quiz-question-text">${q.q}</div>
        <div class="quiz-options">${optionsHtml}</div>
      </div>
      <div class="quiz-actions">
        <button class="quiz-btn" onclick="goToMockQuestion(${idx - 1})" ${idx === 0 ? 'disabled' : ''}>← ${UI_TEXT.prev[lang]}</button>
        ${idx === qs.length - 1 ?
          `<button class="quiz-btn quiz-btn-primary" onclick="submitMockExam()">${UI_TEXT.submitExam[lang]}</button>` :
          `<button class="quiz-btn quiz-btn-primary" onclick="goToMockQuestion(${idx + 1})">${UI_TEXT.next[lang]} →</button>`
        }
      </div>
    </div>
  `;
}

function selectMockAnswer(idx) {
  state.mockExamAnswers[state.mockExamIndex] = idx;
  renderMockExam();
}

function goToMockQuestion(idx) {
  if (idx < 0 || idx >= state.mockExamQuestions.length) return;
  state.mockExamIndex = idx;
  renderMockExam();
}

function submitMockExam() {
  clearInterval(state.mockExamTimer);
  const qs = state.mockExamQuestions;
  const lang = state.language;
  let correct = 0;
  let weekBreakdown = {};

  qs.forEach((q, i) => {
    const ans = state.mockExamAnswers[i];
    const isCorrect = ans === q.correct;
    if (isCorrect) correct++;
    if (!weekBreakdown[q.week]) weekBreakdown[q.week] = { correct: 0, total: 0 };
    weekBreakdown[q.week].total++;
    if (isCorrect) weekBreakdown[q.week].correct++;
  });

  const pct = Math.round((correct / qs.length) * 100);
  let msg = pct >= 80 ? UI_TEXT.excellent[lang] : pct >= 50 ? UI_TEXT.good[lang] : UI_TEXT.needsWork[lang];

  let breakdownHtml = '';
  for (let w = 1; w <= 7; w++) {
    if (weekBreakdown[w]) {
      const b = weekBreakdown[w];
      const wpct = Math.round((b.correct / b.total) * 100);
      breakdownHtml += `<li><span class="r-icon">${wpct >= 70 ? '✅' : '⚠️'}</span> Week ${w}: ${b.correct}/${b.total} (${wpct}%)</li>`;
    }
  }

  let detailHtml = '';
  qs.forEach((q, i) => {
    const ans = state.mockExamAnswers[i];
    const isCorrect = ans === q.correct;
    detailHtml += `
      <div style="padding:12px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;margin-bottom:8px;">
        <div style="font-size:0.72rem;color:var(--text-muted);">Q${i+1} — Week ${q.week} ${isCorrect ? '✅' : '❌'}</div>
        <div style="font-size:0.85rem;font-weight:500;margin:6px 0;">${q.q}</div>
        ${!isCorrect ? `<div style="font-size:0.78rem;color:var(--error);">Your answer: ${ans !== null ? q.options[ans] : 'Not answered'}</div>` : ''}
        <div style="font-size:0.78rem;color:var(--success);">Correct: ${q.options[q.correct]}</div>
        <div style="font-size:0.75rem;color:var(--info);margin-top:4px;">💡 ${q.explanation}</div>
      </div>
    `;
  });

  document.getElementById('mockExamContent').innerHTML = `
    <div class="mock-exam-header">
      <strong>${UI_TEXT.examResults[lang]}</strong>
      <div></div>
      <button class="mock-exit-btn" onclick="exitMockExam()">${lang === 'en' ? 'Back to Dashboard' : 'Ana Sayfaya Dön'}</button>
    </div>
    <div class="mock-exam-body">
      <div class="quiz-results" style="margin-bottom:24px;">
        <div class="quiz-results-score">${pct}%</div>
        <div class="quiz-results-label">${correct}/${qs.length} ${lang === 'en' ? 'correct' : 'doğru'}</div>
        <div class="quiz-results-msg">${msg}</div>
        <div class="quiz-results-breakdown">
          <h4>${lang === 'en' ? 'Performance by Week' : 'Haftalık Performans'}</h4>
          <ul class="results-list">${breakdownHtml}</ul>
        </div>
      </div>
      <h3 style="margin-bottom:14px;font-size:1rem;">${lang === 'en' ? 'Detailed Review' : 'Detaylı İnceleme'}</h3>
      ${detailHtml}
    </div>
  `;
}

function exitMockExam() {
  clearInterval(state.mockExamTimer);
  state.mockExamActive = false;
  selectWeek(0);
}

// ============================
// LANGUAGE
// ============================
function toggleLanguage() {
  state.language = state.language === 'en' ? 'tr' : 'en';
  document.getElementById('langText').textContent = state.language === 'en' ? 'Türkçe' : 'English';
  updateLanguageLabels();

  // Re-render current view
  if (state.currentWeek === 0) {
    renderDashboard();
  } else {
    renderWeekView();
  }
}

function updateLanguageLabels() {
  const lang = state.language;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`) || el.getAttribute('data-en');
  });
}

// ============================
// PROGRESS
// ============================
function calculateWeekProgress(weekNum) {
  const w = WEEKS[weekNum];
  const knownCount = Object.keys(state.knownCards[weekNum] || {}).length;
  const totalCards = w.flashcards.length;
  const quizScore = state.quizScores[weekNum] || 0;
  const visited = state.weekVisited[weekNum] ? 1 : 0;

  // Weight: 40% flashcards known, 40% quiz score, 20% visited
  const cardPct = totalCards > 0 ? (knownCount / totalCards) * 100 : 0;
  const progress = (cardPct * 0.4) + (quizScore * 0.4) + (visited * 20);
  return Math.min(100, Math.round(progress));
}

function updateProgress() {
  let totalProgress = 0;
  for (let i = 1; i <= 7; i++) {
    const p = calculateWeekProgress(i);
    totalProgress += p;
    const fill = document.getElementById(`weekProg${i}`);
    if (fill) fill.style.width = p + '%';
  }
  const overallPct = Math.round(totalProgress / 7);
  document.getElementById('overallProgressFill').style.width = overallPct + '%';
  document.getElementById('overallProgressText').textContent = overallPct + '%';
}

// ============================
// START
// ============================
document.addEventListener('DOMContentLoaded', init);
