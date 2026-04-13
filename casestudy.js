/* =========================================================
   CASE STUDY MASTERCLASS — Full Tutorial + Worked Examples
   ========================================================= */

function openCaseStudyTutorial() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('caseStudyView').classList.add('active');
  document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
  const caseBtn = document.getElementById('weekBtnCase');
  if (caseBtn) caseBtn.classList.add('active');
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
  renderCaseStudy();
}

function renderCaseStudy() {
  const container = document.getElementById('caseStudyContent');
  const lang = state.language;
  const t = lang === 'tr';

  container.innerHTML = `
    <div style="max-width:950px;margin:0 auto;padding:24px 20px;">
      <header class="week-header">
        <div class="week-header-top">
          <button class="back-btn" onclick="selectWeek(0)"><span>←</span><span>${t?'Geri':'Back'}</span></button>
          <h2 class="week-title-main">🎯 ${t?'Case Study Tam Puan Rehberi':'Case Study Full Marks Guide'}</h2>
        </div>
      </header>

      <!-- ============ SECTION 0: EXAM FORMAT ============ -->
      <div class="cs-section" style="--accent:236,72,153;">
        <h3>📋 ${t?'SINAV FORMATI':'EXAM FORMAT'}</h3>
        <div class="concept-grid">
          <div class="concept-card" style="border-color:rgba(236,72,153,0.3);">
            <div class="concept-card-title" style="color:#ec4899;">Q1: True/False — 18 ${t?'puan':'pts'}</div>
            <div class="concept-card-text">
              12 ${t?'soru':'questions'} × 1.5 ${t?'puan':'pts'}<br>
              ${t?'• T/F seçimi: <strong>0.5p</strong><br>• Gerekçe: <strong>1.0p</strong><br>• ⚠️ Yanlış T/F = gerekçe doğru olsa bile <strong>0p!</strong>':'• T/F choice: <strong>0.5p</strong><br>• Justification: <strong>1.0p</strong><br>• ⚠️ Wrong T/F = even correct justification gets <strong>0p!</strong>'}
            </div>
          </div>
          <div class="concept-card" style="border-color:rgba(168,85,247,0.3);">
            <div class="concept-card-title" style="color:#a855f7;">Q2: Case Study — 12 ${t?'puan':'pts'}</div>
            <div class="concept-card-text">
              ${t?'1 gerçekçi AI senaryosu + 3-5 alt soru<br>Alt sorular farklı konuları test eder<br><strong>Bu sınavın %40\'ıdır!</strong>':'1 realistic AI scenario + 3-5 sub-questions<br>Sub-questions test different topics<br><strong>This is 40% of the exam!</strong>'}
            </div>
          </div>
          <div class="concept-card" style="border-color:rgba(34,197,94,0.3);">
            <div class="concept-card-title" style="color:#22c55e;">${t?'Geçme & Not':'Pass & Grade'}</div>
            <div class="concept-card-text">
              ${t?'Toplam: <strong>30p</strong> | Geçme: <strong>21p</strong><br>PI = (P-9)/(30-9)×10<br>Örn: 25p → <strong>7.6</strong>':'Total: <strong>30p</strong> | Pass: <strong>21p</strong><br>PI = (P-9)/(30-9)×10<br>Ex: 25p → <strong>7.6</strong>'}
            </div>
          </div>
        </div>
      </div>

      <!-- ============ SECTION 1: THE 6-PILLAR PATTERN ============ -->
      <div class="cs-section" style="--accent:102,126,234;">
        <h3>🏆 ${t?'6 SÜTUN PATTERN — Her Soruya Uygula!':'THE 6-PILLAR PATTERN — Apply to Every Question!'}</h3>
        <p class="cs-subtitle">${t?'Hangi senaryo gelirse gelsin, cevabını bu 6 bölüme ayır. Her bölüm yaklaşık <strong>2 puan</strong> eder.':'Whatever scenario comes, divide your answer into these 6 sections. Each is worth roughly <strong>2 points</strong>.'}</p>

        <div class="cs-steps">
          <div class="cs-step" style="--step-color:#ec4899;">
            <div class="cs-step-num">1</div>
            <div class="cs-step-content">
              <div class="cs-step-title">${t?'SİSTEMİ TANIMLA':'DESCRIBE THE SYSTEM'} (~2p)</div>
              <div class="cs-step-body">
                ${t?'<strong>Ne:</strong> Teknolojinin adı, ne yapıyor, hangi veriyi işliyor<br><strong>Şablon:</strong> "Bu sistem bir [teknoloji türü]dür. [X veriyi] toplayarak [Y kararı] verir/destekler."<br><br><strong>⚡ İpucu:</strong> AI Act risk sınıflandırmasını da burada belirt!':'<strong>What:</strong> Name the technology, what it does, what data it processes<br><strong>Template:</strong> "This system is a [technology type]. It collects [X data] to make/support [Y decision]."<br><br><strong>⚡ Tip:</strong> Also mention the AI Act risk classification here!'}
              </div>
            </div>
          </div>

          <div class="cs-step" style="--step-color:#f59e0b;">
            <div class="cs-step-num">2</div>
            <div class="cs-step-content">
              <div class="cs-step-title">${t?'AKTÖRLER & BAKIŞ AÇILARI':'STAKEHOLDERS & PERSPECTIVES'} (~2p)</div>
              <div class="cs-step-body">
                ${t?'<strong>Ne:</strong> Kim etkileniyor? Her aktörün farklı bakış açısını yaz (SCOT — Interpretive Flexibility)<br><strong>Şablon:</strong><br>• "[Aktör 1] bu sistemi [güvenlik/verimlilik] açısından desteklemektedir"<br>• "[Aktör 2] bu sistemi [gizlilik/ayrımcılık] açısından eleştirmektedir"<br>• "[Aktör 3] bu sistemden [doğrudan/dolaylı] etkilenmektedir çünkü..."<br><br><strong>⚡ Her zaman en az 3 aktör yaz!</strong>':'<strong>What:</strong> Who is affected? Write each actor\'s different perspective (SCOT — Interpretive Flexibility)<br><strong>Template:</strong><br>• "[Actor 1] supports this system for [security/efficiency]"<br>• "[Actor 2] criticizes this system for [privacy/discrimination]"<br>• "[Actor 3] is [directly/indirectly] affected because..."<br><br><strong>⚡ Always write at least 3 stakeholders!</strong>'}
              </div>
            </div>
          </div>

          <div class="cs-step" style="--step-color:#22c55e;">
            <div class="cs-step-num">3</div>
            <div class="cs-step-content">
              <div class="cs-step-title">${t?'ETİK ANALİZ':'ETHICAL ANALYSIS'} (~2p)</div>
              <div class="cs-step-body">
                ${t?'<strong>Ne:</strong> Ethical lens\'leri kullanarak etik sorunları SENARYOYA bağla<br><strong>Şablon:</strong><br>• "<strong>Rights lens:</strong> Bu senaryoda [aktörün] [X hakkı] ihlal edilmektedir çünkü [somut neden]"<br>• "<strong>Justice lens:</strong> [Grup A] ve [Grup B] arasında eşitsiz etki vardır çünkü [neden]"<br>• "<strong>Utilitarian:</strong> [Fayda] ile [zarar] karşılaştırıldığında, [zarar] daha ağır basmaktadır"<br><br><strong>⚠️ EN KRİTİK KURAL:</strong><br>❌ "Privacy önemli bir etik ilkedir" → 0 PUAN (tanım)<br>✅ "Bu senaryoda taraftarların biyometrik verileri rızaları olmadan taranmaktadır ki bu gizlilik hakkının doğrudan ihlalidir" → TAM PUAN (uygulama)':'<strong>What:</strong> Apply ethical lenses TO THE SCENARIO<br><strong>Template:</strong><br>• "<strong>Rights:</strong> In this scenario, [actor\'s] [right X] is violated because [specific reason]"<br>• "<strong>Justice:</strong> There is unequal impact between [Group A] and [Group B] because [reason]"<br>• "<strong>Utilitarian:</strong> Comparing [benefit] with [harm], the [harm] outweighs"<br><br><strong>⚠️ THE CRITICAL RULE:</strong><br>❌ "Privacy is an important ethical principle" → 0 POINTS (definition)<br>✅ "In this scenario, fans\' biometric data is scanned without consent, directly violating privacy rights" → FULL POINTS (application)'}
              </div>
            </div>
          </div>

          <div class="cs-step" style="--step-color:#3b82f6;">
            <div class="cs-step-num">4</div>
            <div class="cs-step-content">
              <div class="cs-step-title">${t?'YASAL ÇERÇEVE':'LEGAL FRAMEWORK'} (~2p)</div>
              <div class="cs-step-body">
                ${t?'<strong>Ne:</strong> GDPR + AI Act + (varsa) UNESCO kavramlarını senaryoya uygula<br><strong>Şablon:</strong><br>• "<strong>GDPR:</strong> Biyometrik veri Madde 9 kapsamında Özel Kategori Veridir. Bu senaryoda [X] nedeniyle [hukuki dayanak/rıza] sorunu vardır"<br>• "<strong>AI Act:</strong> Bu sistem [risk seviyesi] olarak sınıflandırılır çünkü [gerekçe]. [Provider/Deployer] uyumluluk yükümlülüklerini taşır"<br>• "<strong>DPIA:</strong> Büyük ölçekli sistematik izleme olduğundan GDPR Madde 35 uyarınca DPIA zorunludur"<br><br><strong>⚡ AI Act risk seviyesini + GDPR ilgili maddelerini mutlaka yaz!</strong>':'<strong>What:</strong> Apply GDPR + AI Act + (if relevant) UNESCO to the scenario<br><strong>Template:</strong><br>• "<strong>GDPR:</strong> Biometric data is Special Category under Art. 9. In this scenario, [X] creates a [legal basis/consent] issue"<br>• "<strong>AI Act:</strong> This system is classified as [risk level] because [reason]. The [Provider/Deployer] bears compliance obligations"<br>• "<strong>DPIA:</strong> As large-scale systematic monitoring, DPIA is mandatory under GDPR Art. 35"<br><br><strong>⚡ Always write AI Act risk level + relevant GDPR articles!</strong>'}
              </div>
            </div>
          </div>

          <div class="cs-step" style="--step-color:#a855f7;">
            <div class="cs-step-num">5</div>
            <div class="cs-step-content">
              <div class="cs-step-title">${t?'TEKNİK RİSKLER & BIAS':'TECHNICAL RISKS & BIAS'} (~2p)</div>
              <div class="cs-step-body">
                ${t?'<strong>Ne:</strong> Algoritmik yanlılık, function creep, doğruluk sorunları<br><strong>Şablon:</strong><br>• "<strong>Representation Bias:</strong> Eğitim verisi [X grubu] yeterince temsil etmiyorsa, bu grupta hata oranı daha yüksek olacaktır"<br>• "<strong>Function Creep:</strong> [Orijinal amaç] için kurulan sistem zamanla [farklı amaç] için kullanılma riski taşır"<br>• "<strong>False positive/negative:</strong> Yanlış eşleşme [X sonuçlara] yol açabilir"<br><br><strong>⚡ En az 2 farklı risk türü yaz!</strong>':'<strong>What:</strong> Algorithmic bias, function creep, accuracy issues<br><strong>Template:</strong><br>• "<strong>Representation Bias:</strong> If training data underrepresents [group X], error rates will be higher for them"<br>• "<strong>Function Creep:</strong> System built for [original purpose] risks being used for [different purpose]"<br>• "<strong>False positive/negative:</strong> Misidentification could lead to [X consequences]"<br><br><strong>⚡ Write at least 2 different risk types!</strong>'}
              </div>
            </div>
          </div>

          <div class="cs-step" style="--step-color:#06b6d4;">
            <div class="cs-step-num">6</div>
            <div class="cs-step-content">
              <div class="cs-step-title">${t?'TOPLUMSAL ETKİ & ÇÖZÜMLER':'SOCIETAL IMPACT & SOLUTIONS'} (~2p)</div>
              <div class="cs-step-body">
                ${t?'<strong>Ne:</strong> Büyük resmi çiz + somut çözümler öner<br><strong>Şablon:</strong><br>• "<strong>Panopticon etkisi:</strong> Sürekli gözetim bireylerin [X davranışını] olumsuz etkiler (chilling effect)"<br>• "<strong>Çözüm 1:</strong> [Teknik] — Privacy by Design / DPIA / XAI / Bias audit"<br>• "<strong>Çözüm 2:</strong> [Organizasyonel] — Human-in-the-loop / DPO / Ethics committee"<br>• "<strong>Çözüm 3:</strong> [Düzenleyici] — AI Act uyumluluğu / sunset clause / orantılılık"<br>• "<strong>Kritik değerlendirme:</strong> Bu çözümler [avantaj] sunarken [sınırlılık] da mevcuttur"<br><br><strong>🔑 Kritik değerlendirme = diğerlerinden ayıran adım!</strong>':'<strong>What:</strong> Paint the big picture + propose concrete solutions<br><strong>Template:</strong><br>• "<strong>Panopticon effect:</strong> Constant surveillance negatively affects [behavior X] (chilling effect)"<br>• "<strong>Solution 1:</strong> [Technical] — Privacy by Design / DPIA / XAI / Bias audit"<br>• "<strong>Solution 2:</strong> [Organizational] — Human-in-the-loop / DPO / Ethics committee"<br>• "<strong>Solution 3:</strong> [Regulatory] — AI Act compliance / sunset clause / proportionality"<br>• "<strong>Critical evaluation:</strong> While these solutions offer [advantage], [limitation] also exists"<br><br><strong>🔑 Critical evaluation = what separates you from others!</strong>'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ============ SECTION 2: MOCK EXAM SOLVED ============ -->
      <div class="cs-section" style="--accent:251,191,36;">
        <h3>📝 ${t?'MOCK SINAV ÇÖZÜMÜ — Adım Adım':'MOCK EXAM SOLVED — Step by Step'}</h3>
        <div class="cs-scenario-box">
          <div class="cs-scenario-label">${t?'SENARYO':'SCENARIO'}</div>
          <p>${t?'Bir futbol stadyumu, güvenlik amaçlı <strong>Live Facial Recognition (LFR)</strong> sistemi kurmayı planlıyor. Sistem stadyuma giren <strong>tüm 70.000 taraftarı</strong> tarayacak, biyometrik şablonlar oluşturacak ve polis veritabanındaki aranan kişilerle eşleştirecek. Bir sivil haklar örgütü (<strong>"Liberté"</strong>) bu sisteme itiraz ediyor.':'A football stadium plans to deploy a <strong>Live Facial Recognition (LFR)</strong> system for security. The system would scan <strong>all 70,000 fans</strong> entering, create biometric templates, and match against a police watchlist. A civil liberties group (<strong>"Liberté"</strong>) is challenging this system.'}</p>
        </div>

        <div class="cs-walkthrough">
          <div class="cs-walk-step">
            <div class="cs-walk-header" onclick="this.parentElement.classList.toggle('open')">
              <span class="cs-walk-badge" style="background:#ec4899;">1</span>
              <span class="cs-walk-title">${t?'SİSTEM TANIMI':'SYSTEM DESCRIPTION'}</span>
              <span class="cs-walk-points">~2p</span>
              <span class="cs-walk-arrow">▼</span>
            </div>
            <div class="cs-walk-body">
              <div class="cs-model-answer">
                ${t?'<p>Bu sistem bir <strong>Live Facial Recognition (LFR)</strong> teknolojisidir. Stadyum girişlerindeki kameralar ile tüm taraftarların yüzlerini tarar, biyometrik yüz şablonları oluşturur ve bu şablonları polis veritabanındaki aranan kişiler listesiyle gerçek zamanlı olarak karşılaştırır.</p><p><strong>AI Act sınıflandırması:</strong> Kamusal alanda kolluk kuvvetleri tarafından gerçek zamanlı biyometrik tanıma kullanılması EU AI Act kapsamında <strong>Unacceptable Risk (Yasaklı)</strong> kategorisindedir — sadece sınırlı istisnai durumlarda (terör tehdidi, kayıp çocuk arama) izin verilir.</p><p><strong>Veri türü:</strong> Biyometrik veri — GDPR Madde 9 kapsamında <strong>Özel Kategori Veri</strong>dir ve işlenmesi varsayılan olarak YASAKTIR.</p>':'<p>This system uses <strong>Live Facial Recognition (LFR)</strong> technology. Cameras at stadium entrances scan all fans\' faces, create biometric face templates, and compare these in real-time against a police watchlist of wanted individuals.</p><p><strong>AI Act classification:</strong> Real-time biometric identification in public spaces by law enforcement is classified as <strong>Unacceptable Risk (Banned)</strong> under the EU AI Act — only permitted in narrow exceptions (terrorism, missing persons).</p><p><strong>Data type:</strong> Biometric data — classified as <strong>Special Category Data</strong> under GDPR Art. 9, processing is prohibited by default.</p>'}
              </div>
            </div>
          </div>

          <div class="cs-walk-step">
            <div class="cs-walk-header" onclick="this.parentElement.classList.toggle('open')">
              <span class="cs-walk-badge" style="background:#f59e0b;">2</span>
              <span class="cs-walk-title">${t?'AKTÖRLER & BAKIŞ AÇILARI':'STAKEHOLDERS & PERSPECTIVES'}</span>
              <span class="cs-walk-points">~2p</span>
              <span class="cs-walk-arrow">▼</span>
            </div>
            <div class="cs-walk-body">
              <div class="cs-model-answer">
                ${t?'<p><strong>SCOT analizi — Interpretive Flexibility:</strong> Her aktör aynı teknolojiyi farklı yorumlar:</p><p>🔵 <strong>Polis & Stadyum yönetimi:</strong> Sistemi güvenlik ve verimlilik aracı olarak görür. "70.000 kişi arasından aranan suçluları anında tespit edebiliriz — geleneksel yöntemlerle bu imkansız."</p><p>🔴 <strong>Liberté (sivil haklar örgütü):</strong> Sistemi kitlesel gözetim aracı olarak eleştirir. "70.000 masum insanın biyometrik verisini rızaları olmadan toplamak orantısız bir müdahaledir."</p><p>🟡 <strong>Taraftarlar:</strong> Doğrudan etkilenen gruptur. Bir kısmı güvenlik hissiyle rahat ederken, diğerleri izlendiklerini bilerek stadyuma gitme davranışlarını değiştirebilir (Chilling Effect).</p><p>🟢 <strong>Azınlık grupları:</strong> Yüz tanıma teknolojisinin koyu tenli bireylerde daha yüksek hata oranına sahip olduğu kanıtlanmıştır — bu grup orantısız olarak yanlış eşleşme riski altındadır.</p>':'<p><strong>SCOT analysis — Interpretive Flexibility:</strong> Each actor interprets the same technology differently:</p><p>🔵 <strong>Police & Stadium management:</strong> See the system as a security and efficiency tool. "We can instantly identify wanted criminals among 70,000 — impossible with traditional methods."</p><p>🔴 <strong>Liberté (civil rights org):</strong> Criticizes the system as mass surveillance. "Collecting biometric data of 70,000 innocent people without consent is a disproportionate interference."</p><p>🟡 <strong>Fans:</strong> Directly affected group. Some feel safer, others may change their behavior knowing they are watched (Chilling Effect).</p><p>🟢 <strong>Minority groups:</strong> FRT has proven higher error rates for darker-skinned individuals — this group faces disproportionate risk of false matches.</p>'}
              </div>
            </div>
          </div>

          <div class="cs-walk-step">
            <div class="cs-walk-header" onclick="this.parentElement.classList.toggle('open')">
              <span class="cs-walk-badge" style="background:#22c55e;">3</span>
              <span class="cs-walk-title">${t?'ETİK ANALİZ':'ETHICAL ANALYSIS'}</span>
              <span class="cs-walk-points">~2p</span>
              <span class="cs-walk-arrow">▼</span>
            </div>
            <div class="cs-walk-body">
              <div class="cs-model-answer">
                ${t?'<p><strong>Rights Lens:</strong> 70.000 taraftarın biyometrik verileri rızaları alınmadan işlenmektedir. Bu durum GDPR kapsamındaki <strong>gizlilik hakkını</strong> ve bireylerin <strong>otonomi hakkını</strong> doğrudan ihlal eder. Stadyuma girmek = rıza vermek DEĞİLDİR (GDPR "freely given" koşulu).</p><p><strong>Justice Lens:</strong> Yüz tanıma teknolojisi kanıtlanmış şekilde koyu tenli ve kadın bireylerde daha yüksek hata oranına sahiptir (<strong>Representation Bias</strong>). Bu, belirli demografik grupların yanlış eşleşme sonucu haksız yere sorgulanmasına yol açar — <strong>eşitsiz etki</strong>.</p><p><strong>Utilitarian Lens:</strong> 70.000 kişinin mahremiyetini ihlal ederek belki 1-2 aranan kişiyi yakalamak <strong>orantısızdır</strong>. Fayda/zarar oranı, tüm taraftarların temel haklarını feda etmeyi haklı kılmaz.</p><p><strong>Care Ethics:</strong> Savunmasız gruplar (azınlıklar, çocuklar) özel dikkat gerektirir. Sistem bu grupların özel ihtiyaçlarını göz önünde bulundurmamaktadır.</p>':'<p><strong>Rights Lens:</strong> Biometric data of 70,000 fans is processed without consent. This directly violates the <strong>right to privacy</strong> under GDPR and individuals\' <strong>autonomy</strong>. Entering a stadium ≠ giving consent (GDPR "freely given" condition).</p><p><strong>Justice Lens:</strong> FRT has proven higher error rates for darker-skinned and female individuals (<strong>Representation Bias</strong>). This leads to certain demographics being unfairly questioned — <strong>unequal impact</strong>.</p><p><strong>Utilitarian Lens:</strong> Violating the privacy of 70,000 to catch maybe 1-2 wanted persons is <strong>disproportionate</strong>. The benefit/harm ratio doesn\'t justify sacrificing everyone\'s fundamental rights.</p><p><strong>Care Ethics:</strong> Vulnerable groups (minorities, children) require special attention. The system doesn\'t account for their particular needs.</p>'}
              </div>
            </div>
          </div>

          <div class="cs-walk-step">
            <div class="cs-walk-header" onclick="this.parentElement.classList.toggle('open')">
              <span class="cs-walk-badge" style="background:#3b82f6;">4</span>
              <span class="cs-walk-title">${t?'YASAL ÇERÇEVE':'LEGAL FRAMEWORK'}</span>
              <span class="cs-walk-points">~2p</span>
              <span class="cs-walk-arrow">▼</span>
            </div>
            <div class="cs-walk-body">
              <div class="cs-model-answer">
                ${t?'<p><strong>EU AI Act:</strong> Kamusal alanda kolluk kuvvetlerince gerçek zamanlı biyometrik tanıma <strong>Unacceptable Risk</strong> kategorisindedir ve YASAKLANMIŞTIR. Stadyum bir kamusal/yarı-kamusal alandır. Sadece ciddi terör tehdidi gibi dar istisnalarda yargı onayı ile kullanılabilir.</p><p><strong>GDPR Madde 9:</strong> Biyometrik veri <strong>Özel Kategori Veri</strong>dir. İşlenmesi varsayılan olarak yasaktır. "Stadyuma girme = rıza" argümanı geçersizdir çünkü GDPR rızanın "freely given, specific, informed, unambiguous" olmasını gerektirir — taraftarın tek alternatifi maça gitmemektir ki bu gerçek bir seçenek değildir.</p><p><strong>GDPR Madde 35 — DPIA:</strong> Büyük ölçekli biyometrik veri işleme <strong>yüksek riskli</strong>dir ve DPIA (Veri Koruma Etki Değerlendirmesi) yapılması ZORUNLUDUR.</p><p><strong>GDPR Madde 22:</strong> Otomatik eşleşme sonucu bir taraftarın durdurulması, bireyin hakları üzerinde yasal etki yaratan otomatik karar almadır. Bireyin <strong>insan müdahalesi talep etme hakkı</strong> vardır.</p>':'<p><strong>EU AI Act:</strong> Real-time biometric identification by law enforcement in public spaces is <strong>Unacceptable Risk</strong> — BANNED. The stadium is a public/semi-public space. Only narrow exceptions (serious terrorism) with judicial authorization are permitted.</p><p><strong>GDPR Art. 9:</strong> Biometric data is <strong>Special Category Data</strong>. Processing is prohibited by default. "Entering stadium = consent" is invalid because GDPR requires consent to be "freely given, specific, informed, unambiguous" — the fan\'s only alternative is not attending, which isn\'t a genuine choice.</p><p><strong>GDPR Art. 35 — DPIA:</strong> Large-scale biometric processing is <strong>high-risk</strong> and a DPIA is MANDATORY.</p><p><strong>GDPR Art. 22:</strong> Automated matching leading to a fan being stopped constitutes automated decision-making with legal effects. Individuals have the <strong>right to human intervention</strong>.</p>'}
              </div>
            </div>
          </div>

          <div class="cs-walk-step">
            <div class="cs-walk-header" onclick="this.parentElement.classList.toggle('open')">
              <span class="cs-walk-badge" style="background:#a855f7;">5</span>
              <span class="cs-walk-title">${t?'TEKNİK RİSKLER & BIAS':'TECHNICAL RISKS & BIAS'}</span>
              <span class="cs-walk-points">~2p</span>
              <span class="cs-walk-arrow">▼</span>
            </div>
            <div class="cs-walk-body">
              <div class="cs-model-answer">
                ${t?'<p><strong>Representation Bias:</strong> Yüz tanıma modellerinin eğitim verisi çoğunlukla beyaz erkek yüzlerinden oluşmaktadır. Bu, koyu tenli bireylerde ve kadınlarda yanlış eşleşme (false positive) oranını 10-100 kat artırır. Stadyumda bu, masum bir azınlık taraftarının yanlışlıkla "aranan kişi" olarak işaretlenip güvenlik tarafından durdurulması anlamına gelir.</p><p><strong>Function Creep:</strong> Sistem "aranan suçluları tespit" için kurulsa da, zamanla bilet sahteciliği takibi → taraftar davranış analizi → ticari profilleme gibi orijinal amacı aşan kullanımlara kayabilir. Bu, GDPR\'ın <strong>Purpose Limitation</strong> ilkesinin ihlalidir.</p><p><strong>Accuracy & False Positives:</strong> %99 doğruluk bile 70.000 kişide 700 yanlış eşleşme demektir. Her yanlış eşleşme masum bir kişinin sorgulanması, gecikmesi ve potansiyel olarak küçük düşürülmesi anlamına gelir.</p>':'<p><strong>Representation Bias:</strong> FRT training data is predominantly white male faces. This increases false positive rates for darker-skinned individuals and women by 10-100x. At the stadium, this means an innocent minority fan could be falsely flagged as "wanted" and stopped by security.</p><p><strong>Function Creep:</strong> While built for "detecting criminals," the system could drift to ticket fraud → fan behavior analysis → commercial profiling. This violates GDPR\'s <strong>Purpose Limitation</strong> principle.</p><p><strong>Accuracy & False Positives:</strong> Even 99% accuracy means 700 false matches among 70,000. Each false match means an innocent person questioned, delayed, and potentially humiliated.</p>'}
              </div>
            </div>
          </div>

          <div class="cs-walk-step">
            <div class="cs-walk-header" onclick="this.parentElement.classList.toggle('open')">
              <span class="cs-walk-badge" style="background:#06b6d4;">6</span>
              <span class="cs-walk-title">${t?'TOPLUMSAL ETKİ & ÇÖZÜMLER':'SOCIETAL IMPACT & SOLUTIONS'}</span>
              <span class="cs-walk-points">~2p</span>
              <span class="cs-walk-arrow">▼</span>
            </div>
            <div class="cs-walk-body">
              <div class="cs-model-answer">
                ${t?'<p><strong>Panopticon Etkisi:</strong> Sürekli izlenme bilinci, taraftarların stadyumdaki davranışlarını değiştirir. Tezahürat yapmaktan, politik pankart açmaktan kaçınma — ifade özgürlüğü üzerinde <strong>chilling effect</strong>.</p><p><strong>Gözetimin Normalleşmesi:</strong> Stadyumda kabul edilen gözetim, AVM\'ler → sokaklar → okullar şeklinde yaygınlaşarak toplumsal normalizasyona yol açar.</p><hr style="border-color:var(--border);margin:16px 0;"><p><strong>Çözüm Önerileri:</strong></p><p>🔧 <strong>Teknik:</strong> FRT yerine daha az invaziv alternatifler kullanılmalı (bilet QR kodu, metal dedektör). Privacy by Design ilkesiyle tasarlanmalı.</p><p>👤 <strong>Human-in-the-loop:</strong> Herhangi bir eşleşme durumunda, eğitimli güvenlik personeli son kararı vermelidir — otomatik durdurma YAPILMAMALIDIR.</p><p>📋 <strong>Düzenleyici:</strong> DPIA yapılmalı, DPO atanmalı, veri tutma süresi minimuma indirilmeli (maç bitiminde silinmeli), bağımsız denetim mekanizması kurulmalı.</p><p>⏰ <strong>Sunset Clause:</strong> Sistem belirli bir süre sonra otomatik olarak sona ermeli ve yeniden değerlendirilmelidir.</p><hr style="border-color:var(--border);margin:16px 0;"><p><strong>Kritik Değerlendirme:</strong> Bu çözümler güvenlik endişelerini tamamen ortadan kaldırmaz — bu bir <strong>güvenlik vs. gizlilik trade-off\'udur</strong>. Ancak proportionality ilkesi gereği, 70.000 kişinin temel haklarını ihlal eden bir sistem, daha az invaziv alternatifler varken meşrulaştırılamaz. Collingridge Dilemması bize bu teknolojiyi devreye sokmadan ÖNCE düşünmemiz gerektiğini hatırlatır.</p>':'<p><strong>Panopticon Effect:</strong> Awareness of constant surveillance changes fan behavior. Avoiding chanting, political banners — <strong>chilling effect</strong> on freedom of expression.</p><p><strong>Normalization of surveillance:</strong> Surveillance accepted at stadiums spreads to malls → streets → schools, leading to societal normalization.</p><hr style="border-color:var(--border);margin:16px 0;"><p><strong>Solutions:</strong></p><p>🔧 <strong>Technical:</strong> Use less invasive alternatives to FRT (ticket QR codes, metal detectors). Design with Privacy by Design principles.</p><p>👤 <strong>Human-in-the-loop:</strong> Any match must be reviewed by trained security — NO automatic stops.</p><p>📋 <strong>Regulatory:</strong> Conduct DPIA, appoint DPO, minimize data retention (delete after match), establish independent oversight.</p><p>⏰ <strong>Sunset clause:</strong> System should automatically expire and require re-evaluation.</p><hr style="border-color:var(--border);margin:16px 0;"><p><strong>Critical Evaluation:</strong> These solutions don\'t eliminate security concerns entirely — this is a <strong>security vs. privacy trade-off</strong>. But under proportionality, a system violating 70,000 fundamental rights cannot be justified when less invasive alternatives exist. The Collingridge Dilemma reminds us to think BEFORE deploying this technology.</p>'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ============ SECTION 3: QUICK REFERENCE ============ -->
      <div class="cs-section" style="--accent:34,197,94;">
        <h3>⚡ ${t?'HIZLI REFERANS — Sınavda Yanında Olsun':'QUICK REFERENCE — Mental Cheat Sheet'}</h3>
        <div class="concept-card" style="border-color:rgba(34,197,94,0.3);">
          <div class="concept-card-text" style="font-size:0.9rem;line-height:2.2;">
            ${t?'<strong style="color:#ec4899;">1️⃣ SİSTEM:</strong> Ne yapıyor? Hangi veri? AI Act risk seviyesi?<br><strong style="color:#f59e0b;">2️⃣ AKTÖRLER:</strong> Kim destekliyor? Kim eleştiriyor? Kim zarar görüyor? (SCOT)<br><strong style="color:#22c55e;">3️⃣ ETİK:</strong> Hangi haklar ihlal? Eşitsiz etki var mı? Fayda/zarar oranı? (Lens\'ler)<br><strong style="color:#3b82f6;">4️⃣ YASAL:</strong> GDPR (Art.9/22/35) + AI Act risk + DPIA + rıza sorunu<br><strong style="color:#a855f7;">5️⃣ RİSKLER:</strong> Bias türü? Function creep? False positive/negative?<br><strong style="color:#06b6d4;">6️⃣ ÇÖZÜM:</strong> Teknik + Organizasyonel + Düzenleyici + Kritik değerlendirme':'<strong style="color:#ec4899;">1️⃣ SYSTEM:</strong> What does it do? What data? AI Act risk level?<br><strong style="color:#f59e0b;">2️⃣ ACTORS:</strong> Who supports? Who criticizes? Who is harmed? (SCOT)<br><strong style="color:#22c55e;">3️⃣ ETHICS:</strong> Which rights violated? Unequal impact? Benefit/harm? (Lenses)<br><strong style="color:#3b82f6;">4️⃣ LEGAL:</strong> GDPR (Art.9/22/35) + AI Act risk + DPIA + consent<br><strong style="color:#a855f7;">5️⃣ RISKS:</strong> Bias type? Function creep? False positive/negative?<br><strong style="color:#06b6d4;">6️⃣ SOLUTIONS:</strong> Technical + Organizational + Regulatory + Critical evaluation'}
          </div>
        </div>
      </div>

      <!-- ============ SECTION 4: COMMON MISTAKES ============ -->
      <div class="cs-section" style="--accent:239,68,68;margin-bottom:40px;">
        <h3>🚫 ${t?'YAPMA BUNLARI! (0 Puan Garantisi)':'DON\'T DO THESE! (Guaranteed 0 Points)'}</h3>
        <div style="display:grid;gap:10px;">
          ${[
            {en:'Writing "GDPR is important for privacy" — DEFINE + APPLY to scenario!', tr:'Sadece "GDPR gizlilik için önemlidir" yazmak — TANIMLA + SENARYOYA UYGULA!'},
            {en:'Only one perspective — always discuss AT LEAST 3 stakeholders', tr:'Tek perspektif — her zaman EN AZ 3 aktör tartış'},
            {en:'No solutions — every problem needs concrete recommendations', tr:'Çözüm önermemek — her problem somut öneri ister'},
            {en:'Listing every concept you know — only use RELEVANT ones', tr:'Bildiğin her kavramı sıralamak — sadece İLGİLİ olanları kullan'},
            {en:'No critical evaluation — discuss trade-offs for high marks!', tr:'Kritik değerlendirme yapmamak — yüksek not için trade-off tartış!'},
            {en:'Messy structure — use the 6 pillars as numbered sections!', tr:'Yapısız cevap — 6 sütunu numaralı bölümler olarak kullan!'}
          ].map(m => `<div style="padding:12px 16px;background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);border-radius:10px;color:var(--text-muted);font-size:0.88rem;">❌ ${t?m.tr:m.en}</div>`).join('')}
        </div>
      </div>

    </div>`;

  // Inject styles for this page
  if (!document.getElementById('csStyles')) {
    const s = document.createElement('style');
    s.id = 'csStyles';
    s.textContent = `
      .cs-section{margin-top:24px;background:linear-gradient(135deg,rgba(var(--accent),0.06),rgba(var(--accent),0.02));border:1px solid rgba(var(--accent),0.2);border-radius:16px;padding:28px;}
      .cs-section h3{font-size:1.3rem;font-weight:700;margin-bottom:16px;color:rgb(var(--accent));}
      .cs-subtitle{color:var(--text-muted);margin-bottom:20px;font-size:0.92rem;line-height:1.6;}
      .cs-steps{display:flex;flex-direction:column;gap:14px;}
      .cs-step{display:flex;gap:16px;padding:20px;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;transition:border-color 0.3s;}
      .cs-step:hover{border-color:var(--step-color);}
      .cs-step-num{width:44px;height:44px;min-width:44px;border-radius:12px;background:var(--step-color);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.2rem;font-weight:800;}
      .cs-step-content{flex:1;}
      .cs-step-title{font-weight:700;font-size:1rem;margin-bottom:10px;color:var(--step-color);}
      .cs-step-body{font-size:0.88rem;line-height:1.8;color:var(--text-muted);}
      .cs-scenario-box{background:var(--bg-card);border:2px solid rgba(251,191,36,0.3);border-radius:14px;padding:22px;margin-bottom:20px;position:relative;}
      .cs-scenario-label{position:absolute;top:-12px;left:20px;background:#fbbf24;color:#000;padding:2px 14px;border-radius:8px;font-size:0.75rem;font-weight:700;letter-spacing:1px;}
      .cs-scenario-box p{color:var(--text-secondary);font-size:0.92rem;line-height:1.8;margin-top:8px;}
      .cs-walkthrough{display:flex;flex-direction:column;gap:12px;}
      .cs-walk-step{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:all 0.3s;}
      .cs-walk-header{display:flex;align-items:center;gap:12px;padding:16px 20px;cursor:pointer;user-select:none;}
      .cs-walk-header:hover{background:rgba(255,255,255,0.02);}
      .cs-walk-badge{width:32px;height:32px;min-width:32px;border-radius:8px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.9rem;}
      .cs-walk-title{flex:1;font-weight:600;font-size:0.95rem;}
      .cs-walk-points{font-size:0.78rem;color:var(--text-muted);background:rgba(255,255,255,0.05);padding:3px 10px;border-radius:6px;}
      .cs-walk-arrow{font-size:0.7rem;color:var(--text-muted);transition:transform 0.3s;}
      .cs-walk-step.open .cs-walk-arrow{transform:rotate(180deg);}
      .cs-walk-body{max-height:0;overflow:hidden;transition:max-height 0.5s ease;}
      .cs-walk-step.open .cs-walk-body{max-height:2000px;}
      .cs-model-answer{padding:0 20px 20px 64px;font-size:0.88rem;line-height:1.85;color:var(--text-muted);}
      .cs-model-answer p{margin-bottom:12px;}
      .cs-model-answer hr{border-color:var(--border);margin:16px 0;}
      @media(max-width:768px){
        .cs-step{flex-direction:column;gap:10px;}
        .cs-model-answer{padding:0 16px 16px 16px;}
      }
    `;
    document.head.appendChild(s);
  }
}
