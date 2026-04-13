/* =========================================================
   CASE STUDY MASTERCLASS — Tutorial & Practice Module
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

  const examFormat = t ? `
    <div class="concept-grid">
      <div class="concept-card" style="border-color:rgba(236,72,153,0.3);">
        <div class="concept-card-title" style="color:#ec4899;">Question 1: True/False</div>
        <div class="concept-card-text">
          <strong>12 soru</strong> × 1.5 puan = <strong>18 puan</strong><br><br>
          • Doğru/Yanlış seç<br>• Kısa gerekçe yaz (1-2 cümle)<br>• Her soru: 0.5 T/F + 1.0 gerekçe<br>• Yanlış seçim + doğru gerekçe = <strong>0 puan!</strong>
        </div>
      </div>
      <div class="concept-card" style="border-color:rgba(168,85,247,0.3);">
        <div class="concept-card-title" style="color:#a855f7;">Question 2: Case Study</div>
        <div class="concept-card-text">
          <strong>1 senaryo</strong> + alt sorular = <strong>12 puan</strong><br><br>
          • Gerçekçi bir AI senaryosu verilir<br>• 3-5 alt soru sorulur<br>• Kurs kavramlarını uygulamanı ister<br>• Sınav notunun <strong>%40'ı!</strong>
        </div>
      </div>
      <div class="concept-card" style="border-color:rgba(34,197,94,0.3);">
        <div class="concept-card-title" style="color:#22c55e;">Notlama</div>
        <div class="concept-card-text">
          <strong>Toplam:</strong> 30 puan<br><strong>Geçme:</strong> 21/30 (70%)<br><strong>PI-grade:</strong> (P-E)/(T-E)×10<br><strong>Örnek:</strong> 25 puan = (25-9)/(30-9)×10 = 7.6
        </div>
      </div>
      <div class="concept-card" style="border-color:rgba(251,191,36,0.3);">
        <div class="concept-card-title" style="color:#fbbf24;">⏱️ Süre Stratejisi</div>
        <div class="concept-card-text">
          <strong>Toplam:</strong> ~60 dakika<br>• Q1 (T/F): ~18 dk<br>• Q2 (Case): ~35 dk<br>• Gözden geçirme: ~7 dk<br><br><strong>⚠️ Case Study'ye en çok zaman ayır!</strong>
        </div>
      </div>
    </div>` : `
    <div class="concept-grid">
      <div class="concept-card" style="border-color:rgba(236,72,153,0.3);">
        <div class="concept-card-title" style="color:#ec4899;">Question 1: True/False</div>
        <div class="concept-card-text">
          <strong>12 questions</strong> × 1.5 pts = <strong>18 points</strong><br><br>
          • Select True or False<br>• Write brief justification (1-2 sentences)<br>• Each Q: 0.5 T/F + 1.0 justification<br>• Wrong selection + correct justification = <strong>0 points!</strong>
        </div>
      </div>
      <div class="concept-card" style="border-color:rgba(168,85,247,0.3);">
        <div class="concept-card-title" style="color:#a855f7;">Question 2: Case Study</div>
        <div class="concept-card-text">
          <strong>1 scenario</strong> + sub-questions = <strong>12 points</strong><br><br>
          • A realistic AI scenario is given<br>• 3-5 sub-questions asked<br>• Requires applying course concepts<br>• This is <strong>40% of the exam!</strong>
        </div>
      </div>
      <div class="concept-card" style="border-color:rgba(34,197,94,0.3);">
        <div class="concept-card-title" style="color:#22c55e;">Grading</div>
        <div class="concept-card-text">
          <strong>Total:</strong> 30 points<br><strong>Pass:</strong> 21/30 (70%)<br><strong>PI-grade:</strong> (P-E)/(T-E)×10<br><strong>Example:</strong> 25 pts = (25-9)/(30-9)×10 = 7.6
        </div>
      </div>
      <div class="concept-card" style="border-color:rgba(251,191,36,0.3);">
        <div class="concept-card-title" style="color:#fbbf24;">⏱️ Time Strategy</div>
        <div class="concept-card-text">
          <strong>Total:</strong> ~60 minutes<br>• Q1 (T/F): ~18 min<br>• Q2 (Case): ~35 min<br>• Review: ~7 min<br><br><strong>⚠️ Allocate most time to Case Study!</strong>
        </div>
      </div>
    </div>`;

  const steps = [
    {
      color: '#ec4899', icon: '🔍',
      titleEN: 'IDENTIFY THE ETHICAL ISSUE', titleTR: 'ETİK SORUNU TANIMLA',
      contentEN: `<strong>What to do:</strong> Read the scenario and clearly state the ethical issue.<br><br><strong>Template:</strong> "This scenario presents an ethical issue concerning [X], creating tension between [Y ethical principle] and [Z goal]."<br><br><strong>⚠️ Tip:</strong> Identify the issue from MULTIPLE angles — don't be one-dimensional!`,
      contentTR: `<strong>Ne yapmalısın:</strong> Senaryoyu oku ve etik sorunu net ifade et.<br><br><strong>Şablon:</strong> "Bu senaryo [X] ile ilgili bir etik sorun sunmaktadır, [Y etik ilke] ile [Z hedef] arasında gerilim vardır."<br><br><strong>⚠️ İpucu:</strong> Sorunu BİRDEN FAZLA açıdan tanımla — tek boyutlu bakma!`
    },
    {
      color: '#f59e0b', icon: '📚',
      titleEN: 'APPLY CONCEPTS & FRAMEWORKS', titleTR: 'KAVRAM VE ÇERÇEVELERİ UYGULA',
      contentEN: `<strong>KEY RULE:</strong> Define the concept AND apply it to the scenario!<br><br><strong>Frameworks:</strong> 6 Ethical Lenses • AREA Framework • Bias Types • GDPR Principles • AI Act Risk Levels • Trustworthy AI • Human Oversight<br><br>❌ WRONG: "GDPR includes data minimization."<br>✅ RIGHT: "The GDPR data minimization principle is violated here because the company collects health data solely for advertising — irrelevant to the stated purpose."`,
      contentTR: `<strong>TEMEL KURAL:</strong> Kavramı tanımla VE senaryoya uygula!<br><br><strong>Çerçeveler:</strong> 6 Ethical Lens • AREA • Bias Türleri • GDPR İlkeleri • AI Act Risk Seviyeleri • Trustworthy AI • Human Oversight<br><br>❌ YANLIŞ: "GDPR veri minimizasyonu ilkesini içerir."<br>✅ DOĞRU: "GDPR'ın veri minimizasyonu ilkesi bu senaryoda ihlal edilmektedir çünkü şirket sağlık verisini sadece reklam amacıyla toplamaktadır."`
    },
    {
      color: '#22c55e', icon: '🎭',
      titleEN: 'ANALYZE STAKEHOLDERS & IMPACTS', titleTR: 'PAYDAŞ VE ETKİLERİ ANALİZ ET',
      contentEN: `<strong>Stakeholders:</strong> Users/Citizens • Minorities/Vulnerable groups • Company/Government • Society/Future generations<br><br><strong>Template:</strong> "[Stakeholder] is affected by [specific impact] because [reasoning]. This is problematic from the [ethical lens] perspective."`,
      contentTR: `<strong>Paydaşlar:</strong> Kullanıcılar/Vatandaşlar • Azınlıklar/Savunmasız gruplar • Şirket/Hükümet • Toplum/Gelecek nesiller<br><br><strong>Şablon:</strong> "[Paydaş] bu durumdan [şu şekilde] etkilenmektedir çünkü [gerekçe]. Bu [ethical lens] açısından sorunludur."`
    },
    {
      color: '#3b82f6', icon: '💡',
      titleEN: 'PROPOSE SOLUTIONS', titleTR: 'ÇÖZÜM ÖNERİLERİ SUN',
      contentEN: `<strong>Technical:</strong> DPIA • Privacy by Design • Bias audits • XAI<br><strong>Organizational:</strong> DPO • Ethics committee • Training<br><strong>Regulatory:</strong> AI Act compliance • GDPR Art. 35<br><strong>User-centric:</strong> Meaningful consent • Opt-out • Counterfactual explanations<br><br><strong>⚠️ Link each solution to a SPECIFIC problem!</strong>`,
      contentTR: `<strong>Teknik:</strong> DPIA • Privacy by Design • Bias testleri • XAI<br><strong>Organizasyonel:</strong> DPO • Etik kurul • Eğitim<br><strong>Düzenleyici:</strong> AI Act uyumu • GDPR Madde 35<br><strong>Kullanıcı odaklı:</strong> Anlamlı rıza • Opt-out • Counterfactual açıklamalar<br><br><strong>⚠️ Her çözümü SENARYODAKİ somut soruna bağla!</strong>`
    },
    {
      color: '#a855f7', icon: '⚖️',
      titleEN: 'CRITICAL EVALUATION', titleTR: 'KRİTİK DEĞERLENDİRME',
      contentEN: `<strong>Template:</strong> "While this solution offers [advantage], it presents [limitation/trade-off]. Furthermore, [alternative perspective] should be considered."<br><br><strong>Discuss:</strong> Innovation vs safety • Individual rights vs societal benefit • Technical vs ethical • Short-term vs long-term<br><br><strong>🔑 This step separates average from excellent — REQUIRED for high marks!</strong>`,
      contentTR: `<strong>Şablon:</strong> "Bu çözüm [avantaj] sunarken [sınırlılık/trade-off] da mevcuttur. Ayrıca [alternatif bakış açısı] da değerlendirilmelidir."<br><br><strong>Tartış:</strong> İnovasyon vs güvenlik • Bireysel haklar vs toplumsal fayda • Teknik vs etik • Kısa vade vs uzun vade<br><br><strong>🔑 Bu adım sizi diğerlerinden ayırır — yüksek not için ŞART!</strong>`
    }
  ];

  let stepsHtml = steps.map((s, i) => `
    <div class="concept-card" style="border-left:4px solid ${s.color};padding-left:20px;">
      <div class="concept-card-title" style="color:${s.color};font-size:1.1rem;">Step ${i+1}: ${s.icon} ${t ? s.titleTR : s.titleEN}</div>
      <div class="concept-card-text">${t ? s.contentTR : s.contentEN}</div>
    </div>`).join('');

  const scenarios = [
    {
      titleEN: 'Scenario 1: AI Recruitment System', titleTR: 'Senaryo 1: AI İşe Alım Sistemi',
      descEN: 'A company uses AI for CV screening. Trained on historical data. Female hiring rate is 40% lower than males.',
      descTR: 'Bir şirket CV tarama için AI kullanıyor. Geçmiş verilere dayalı. Kadın işe alım oranı erkeklerden %40 düşük.',
      keysEN: '• <strong>Historical Bias</strong> — past data reflects gender inequality<br>• <strong>AI Act High Risk</strong> — employment AI<br>• <strong>Justice Lens</strong> — unequal outcomes<br>• <strong>GDPR Art. 22</strong> — automated decisions with legal effects<br>• <strong>Impossibility Theorem</strong> — choosing fairness metrics<br>• <strong>Solutions:</strong> Bias auditing, diverse training data, human-in-the-loop, DPIA',
      keysTR: '• <strong>Historical Bias</strong> — geçmiş veriler toplumsal cinsiyet eşitsizliğini yansıtıyor<br>• <strong>AI Act High Risk</strong> — istihdam AI\'ı<br>• <strong>Justice Lens</strong> — eşitsiz sonuçlar<br>• <strong>GDPR Art. 22</strong> — otomatik karar alma<br>• <strong>İmkansızlık Teoremi</strong> — adalet metrikleri seçimi<br>• <strong>Çözüm:</strong> Bias testi, çeşitli eğitim verisi, human-in-the-loop, DPIA'
    },
    {
      titleEN: 'Scenario 2: Smart City Surveillance', titleTR: 'Senaryo 2: Akıllı Şehir Gözetlemi',
      descEN: 'A city plans city-wide facial recognition cameras for crime prevention. Citizens protest privacy concerns.',
      descTR: 'Bir belediye suç önleme için şehir genelinde yüz tanıma kamerası kurmayı planlıyor. Vatandaşlar protesto ediyor.',
      keysEN: '• <strong>Panopticon</strong> — digital panopticon effect<br>• <strong>Chilling Effect</strong> — pressure on free speech<br>• <strong>AI Act Unacceptable Risk</strong> — real-time biometric ID in public = BANNED<br>• <strong>Proportionality</strong> — is mass surveillance proportionate?<br>• <strong>Function Creep</strong> — crime prevention → social control<br>• <strong>Solutions:</strong> Targeted surveillance, DPIA, citizen consultation',
      keysTR: '• <strong>Panopticon</strong> — dijital panoptikon etkisi<br>• <strong>Chilling Effect</strong> — ifade özgürlüğü baskısı<br>• <strong>AI Act Unacceptable Risk</strong> — gerçek zamanlı biyometrik tanıma = YASAK<br>• <strong>Proportionality</strong> — toplu gözetleme orantılı mı?<br>• <strong>Function Creep</strong> — suç önleme → toplumsal kontrol<br>• <strong>Çözüm:</strong> Hedefli gözetim, DPIA, vatandaş danışma'
    },
    {
      titleEN: 'Scenario 3: AI Medical Diagnosis', titleTR: 'Senaryo 3: AI Sağlık Teşhisi',
      descEN: 'A hospital uses AI to diagnose diseases from X-rays. 95% accuracy but cannot explain decisions. Misdiagnoses have caused harm.',
      descTR: 'Bir hastane röntgenlerden teşhis koyan AI kullanıyor. %95 doğruluk ama kararlarını açıklayamıyor. Yanlış teşhisler zarar verdi.',
      keysEN: '• <strong>Black Box Problem</strong> — model unexplainable, XAI needed<br>• <strong>Human-in-the-loop</strong> — doctor must review every diagnosis<br>• <strong>Responsibility Gap</strong> — who is responsible for misdiagnosis?<br>• <strong>LIME/SHAP</strong> — technical solutions for explanations<br>• <strong>AI Act High Risk</strong> — medical AI<br>• <strong>Solutions:</strong> XAI implementation, human oversight, bias testing, liability framework',
      keysTR: '• <strong>Black Box Problem</strong> — model açıklanamaz, XAI gerekli<br>• <strong>Human-in-the-loop</strong> — doktor her teşhisi gözden geçirmeli<br>• <strong>Responsibility Gap</strong> — yanlış teşhiste kim sorumlu?<br>• <strong>LIME/SHAP</strong> — açıklama için teknik çözümler<br>• <strong>AI Act High Risk</strong> — tıbbi AI<br>• <strong>Çözüm:</strong> XAI implementasyonu, insan denetimi, bias testi, sorumluluk çerçevesi'
    },
    {
      titleEN: 'Scenario 4: Social Media Content Moderation', titleTR: 'Senaryo 4: Sosyal Medya İçerik Moderasyonu',
      descEN: 'AI detects hate speech but misclassifies certain languages/cultures. Certain communities\' content removed disproportionately.',
      descTR: 'AI nefret söylemi tespit ediyor ama bazı dilleri/kültürleri yanlış sınıflandırıyor. Belirli toplulukların içerikleri fazla kaldırılıyor.',
      keysEN: '• <strong>Representation Bias</strong> — training data doesn\'t cover all languages<br>• <strong>Rights Lens</strong> — freedom of expression<br>• <strong>Justice Lens</strong> — disproportionate impact<br>• <strong>Counterfactual</strong> — "what needs to change to keep content?"<br>• <strong>Solutions:</strong> Multilingual training data, appeal mechanism, human review',
      keysTR: '• <strong>Representation Bias</strong> — eğitim verisi tüm dilleri kapsamıyor<br>• <strong>Rights Lens</strong> — ifade özgürlüğü<br>• <strong>Justice Lens</strong> — orantısız etki<br>• <strong>Counterfactual</strong> — "içeriğin kalması için ne değişmeli?"<br>• <strong>Çözüm:</strong> Çok dilli eğitim verisi, itiraz mekanizması, insan incelemesi'
    },
    {
      titleEN: 'Scenario 5: Autonomous Vehicle Ethics', titleTR: 'Senaryo 5: Otonom Araç Etiği',
      descEN: 'An autonomous vehicle company develops crash scenario algorithms. Ethical dilemma: protect passengers or pedestrians?',
      descTR: 'Otonom araç şirketi kaza senaryosu algoritması geliştiriyor. Etik ikilem: yolcuları mı yayaları mı koru?',
      keysEN: '• <strong>Deontology vs Utilitarianism</strong> — rule-based vs consequence-based<br>• <strong>Meaningful Human Control</strong> — life-and-death decisions<br>• <strong>Responsibility Gap</strong> — who is responsible in a crash?<br>• <strong>Trustworthy AI</strong> — human agency & oversight<br>• <strong>Solutions:</strong> Multi-stakeholder ethics committee, transparent rules, human-in-command',
      keysTR: '• <strong>Deontology vs Utilitarianism</strong> — kural vs sonuç temelli etik<br>• <strong>Meaningful Human Control</strong> — hayat-ölüm kararları<br>• <strong>Responsibility Gap</strong> — kazada kim sorumlu?<br>• <strong>Trustworthy AI</strong> — insan temsilciliği ve denetimi<br>• <strong>Çözüm:</strong> Çok paydaşlı etik komitesi, şeffaf kurallar, human-in-command'
    }
  ];

  let scenariosHtml = scenarios.map(s => `
    <div class="concept-card" style="cursor:pointer;" onclick="this.querySelector('.pa').classList.toggle('open')">
      <div class="concept-card-title" style="color:#06b6d4;">${t ? s.titleTR : s.titleEN}</div>
      <div class="concept-card-text" style="font-size:0.88rem;">${t ? s.descTR : s.descEN}</div>
      <div class="pa" style="max-height:0;overflow:hidden;transition:max-height 0.5s ease;">
        <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border);font-size:0.85rem;line-height:1.8;color:var(--text-muted);">
          <strong style="color:#22c55e;">${t ? 'Anahtar kavramlar:' : 'Key concepts:'}</strong><br>${t ? s.keysTR : s.keysEN}
        </div>
      </div>
    </div>`).join('');

  const goldenPhrases = t ?
    `• "Bu, <strong>[kavram]</strong> ilkesiyle ilişkilidir çünkü..."<br>• "GDPR'ın <strong>[ilke]</strong> ilkesi bu senaryoda ihlal edilmektedir çünkü..."<br>• "Bu durum <strong>[bias türü]</strong> riski taşımaktadır çünkü eğitim verisi..."<br>• "EU AI Act kapsamında bu sistem <strong>[risk seviyesi]</strong> olarak sınıflandırılır çünkü..."<br>• "Bu senaryoda <strong>[ethical lens]</strong> açısından bakıldığında..."<br>• "Proportionality gereği <strong>daha az invaziv alternatifler</strong> değerlendirilmelidir."<br>• "Önerim <strong>Privacy by Design</strong> ve <strong>human-in-the-loop</strong> mekanizmasıdır."<br>• "Ancak bu çözümün <strong>sınırlılıkları</strong> mevcuttur: [trade-off]"<br>• "Sonuç olarak, <strong>[kavram]</strong> ve <strong>[kavram]</strong> arasındaki gerilim dikkatli dengeleme gerektirir."` :
    `• "This relates to <strong>[concept]</strong> because..."<br>• "The GDPR <strong>[principle]</strong> is violated here because..."<br>• "This carries the risk of <strong>[bias type]</strong> because the training data..."<br>• "Under the AI Act, this is <strong>[risk level]</strong> because..."<br>• "From the <strong>[ethical lens]</strong> perspective..."<br>• "Under proportionality, <strong>less invasive alternatives</strong> should be considered."<br>• "I recommend <strong>Privacy by Design</strong> and <strong>human-in-the-loop</strong> oversight."<br>• "However, this solution has <strong>limitations</strong>: [trade-off]"<br>• "The tension between <strong>[concept]</strong> and <strong>[concept]</strong> requires careful balancing."`;

  const markingCriteria = t ? `
    <div class="concept-grid">
      <div class="concept-card" style="border-color:rgba(34,197,94,0.3);">
        <div class="concept-card-title" style="color:#22c55e;">Tam Puan (10-12/12)</div>
        <div class="concept-card-text">✅ Etik sorunu doğru tanımlıyor<br>✅ Birden fazla kavram uyguluyor<br>✅ Kavramları SENARYOYA bağlıyor<br>✅ Farklı paydaş perspektifleri<br>✅ Somut çözümler<br>✅ Trade-off tartışması<br>✅ Kendi argümanını geliştiriyor</div>
      </div>
      <div class="concept-card" style="border-color:rgba(251,191,36,0.3);">
        <div class="concept-card-title" style="color:#fbbf24;">Orta Puan (5-9/12)</div>
        <div class="concept-card-text">⚠️ Sorunu kısmen tanımlıyor<br>⚠️ Kavram tanımlıyor ama senaryoya bağlamıyor<br>⚠️ Tek perspektif<br>⚠️ Yüzeysel çözümler<br>⚠️ Trade-off yok</div>
      </div>
      <div class="concept-card" style="border-color:rgba(239,68,68,0.3);">
        <div class="concept-card-title" style="color:#ef4444;">Düşük Puan (0-4/12)</div>
        <div class="concept-card-text">❌ Sorunu tanımlayamıyor<br>❌ Yanlış/ilgisiz kavramlar<br>❌ Sadece tanım, uygulama yok<br>❌ Senaryo ile bağlantı yok<br>❌ Çözüm yok</div>
      </div>
    </div>` : `
    <div class="concept-grid">
      <div class="concept-card" style="border-color:rgba(34,197,94,0.3);">
        <div class="concept-card-title" style="color:#22c55e;">Full Marks (10-12/12)</div>
        <div class="concept-card-text">✅ Correctly identifies ethical issue<br>✅ Applies multiple concepts<br>✅ Links concepts TO SCENARIO<br>✅ Multiple stakeholder perspectives<br>✅ Concrete solutions<br>✅ Trade-off discussion<br>✅ Develops own argumentation</div>
      </div>
      <div class="concept-card" style="border-color:rgba(251,191,36,0.3);">
        <div class="concept-card-title" style="color:#fbbf24;">Mid Marks (5-9/12)</div>
        <div class="concept-card-text">⚠️ Partially identifies issue<br>⚠️ Defines but doesn't connect to scenario<br>⚠️ Single perspective<br>⚠️ Generic solutions<br>⚠️ No trade-off discussion</div>
      </div>
      <div class="concept-card" style="border-color:rgba(239,68,68,0.3);">
        <div class="concept-card-title" style="color:#ef4444;">Low Marks (0-4/12)</div>
        <div class="concept-card-text">❌ Cannot identify issue<br>❌ Incorrect/irrelevant concepts<br>❌ Only defines, doesn't apply<br>❌ No connection to scenario<br>❌ No solutions</div>
      </div>
    </div>`;

  const mistakes = [
    { titleEN: 'Textbook Copying', titleTR: 'Ders Kitabı Kopyalama',
      descEN: 'Defining concepts without applying them. "GDPR is a regulation" is not enough — connect it to the scenario!',
      descTR: 'Kavramı tanımlayıp bırakmak. "GDPR bir düzenlemedir" yetmez — senaryoya bağla!' },
    { titleEN: 'Single Perspective', titleTR: 'Tek Perspektif',
      descEN: 'Only looking from one angle. Use at least 2-3 different ethical lenses.',
      descTR: 'Sadece tek açıdan bakmak. En az 2-3 farklı ethical lens kullan.' },
    { titleEN: 'Analysis Without Solutions', titleTR: 'Çözümsüz Analiz',
      descEN: 'Analyzing without proposing solutions. Every analysis should end with a recommendation.',
      descTR: 'Problemi analiz edip çözüm önermemek. Her analiz bir çözüm ile bitmelidir.' },
    { titleEN: 'Listing Irrelevant Concepts', titleTR: 'İlgisiz Kavram Sıralama',
      descEN: 'Writing everything you know. Only use concepts RELEVANT to the scenario. Quality > Quantity!',
      descTR: 'Bildiğin her şeyi yazmak. Sadece SENARYOYLA İLGİLİ kavramları kullan. Kalite > Miktar!' },
    { titleEN: 'Unstructured Answers', titleTR: 'Yapısız Cevap',
      descEN: 'Messy paragraphs. Use numbered, organized paragraphs. Highlight concept names.',
      descTR: 'Düzensiz paragraflar. Numaralı, düzenli paragraflar yaz. Kavram isimlerini belirginleştir.' }
  ];

  let mistakesHtml = mistakes.map(m => `
    <div style="padding:14px 18px;background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);border-radius:10px;">
      <strong style="color:#ef4444;">${t ? m.titleTR : m.titleEN}</strong>
      <p style="color:var(--text-muted);margin-top:6px;font-size:0.88rem;">${t ? m.descTR : m.descEN}</p>
    </div>`).join('');

  const checklist = t ?
    `<strong style="color:#ec4899;">🔒 GİZLİLİK:</strong> Kişisel veri? Özel kategori? Rıza? Purpose limitation? Data minimization?<br>
     <strong style="color:#3b82f6;">⚖️ ADALET:</strong> Bias riski? Hangi tür? Savunmasız gruplar? İmkansızlık teoremi?<br>
     <strong style="color:#22c55e;">🔍 ŞEFFAFLIK:</strong> Kara kutu mu? XAI gerekli mi? LIME/SHAP? Kullanıcılar bilgilendiriliyor mu?<br>
     <strong style="color:#f59e0b;">👤 İNSAN DENETİMİ:</strong> Hangi seviye? In/on/command? Meaningful human control?<br>
     <strong style="color:#a855f7;">📋 DÜZENLEME:</strong> AI Act risk seviyesi? DPIA? DPO? Provider/Deployer? Art. 22?<br>
     <strong style="color:#ef4444;">👁️ GÖZETİM:</strong> Panopticon? Function creep? Chilling effect? Proportionality?<br>
     <strong style="color:#06b6d4;">🌐 KÜRESEL:</strong> Trustworthy AI? UNESCO? Ethics washing? Responsibility gap? IP?` :
    `<strong style="color:#ec4899;">🔒 PRIVACY:</strong> Personal data? Special category? Consent? Purpose limitation? Data minimization?<br>
     <strong style="color:#3b82f6;">⚖️ FAIRNESS:</strong> Bias risk? What type? Vulnerable groups? Impossibility theorem?<br>
     <strong style="color:#22c55e;">🔍 TRANSPARENCY:</strong> Black box? XAI needed? LIME/SHAP? Users informed?<br>
     <strong style="color:#f59e0b;">👤 HUMAN OVERSIGHT:</strong> Which level? In/on/command? Meaningful human control?<br>
     <strong style="color:#a855f7;">📋 REGULATION:</strong> AI Act risk level? DPIA? DPO? Provider/Deployer? Art. 22?<br>
     <strong style="color:#ef4444;">👁️ SURVEILLANCE:</strong> Panopticon? Function creep? Chilling effect? Proportionality?<br>
     <strong style="color:#06b6d4;">🌐 GLOBAL:</strong> Trustworthy AI? UNESCO? Ethics washing? Responsibility gap? IP?`;

  container.innerHTML = `
    <div style="max-width:950px;margin:0 auto;padding:24px 20px;">
      <header class="week-header">
        <div class="week-header-top">
          <button class="back-btn" onclick="selectWeek(0)"><span>←</span><span>${t ? 'Geri' : 'Back'}</span></button>
          <h2 class="week-title-main">${t ? '🎯 Case Study Tam Puan Rehberi' : '🎯 Case Study Full Marks Guide'}</h2>
        </div>
      </header>

      <!-- EXAM FORMAT -->
      <div class="summary-section" style="background:linear-gradient(135deg,rgba(236,72,153,0.08),rgba(168,85,247,0.08));border:1px solid rgba(236,72,153,0.25);border-radius:16px;padding:28px;margin-top:14px;">
        <h3 class="summary-section-title" style="color:#ec4899;font-size:1.3rem;">📋 ${t ? 'SINAV FORMATI' : 'EXAM FORMAT'}</h3>
        ${examFormat}
      </div>

      <!-- 5-STEP FRAMEWORK -->
      <div class="summary-section" style="margin-top:24px;background:linear-gradient(135deg,rgba(102,126,234,0.08),rgba(118,75,162,0.08));border:1px solid rgba(102,126,234,0.25);border-radius:16px;padding:28px;">
        <h3 class="summary-section-title" style="color:#667eea;font-size:1.3rem;">🏆 ${t ? 'TAM PUAN FORMÜLÜ — 5 Adım' : 'FULL MARKS FORMULA — 5 Steps'}</h3>
        <p style="color:var(--text-muted);margin-bottom:20px;">${t ? 'Bu 5 adımı her case study sorusuna uygula!' : 'Apply these 5 steps to EVERY case study!'}</p>
        <div style="display:flex;flex-direction:column;gap:16px;">${stepsHtml}</div>
      </div>

      <!-- MARKING CRITERIA -->
      <div class="summary-section" style="margin-top:24px;background:linear-gradient(135deg,rgba(34,197,94,0.08),rgba(16,185,129,0.08));border:1px solid rgba(34,197,94,0.25);border-radius:16px;padding:28px;">
        <h3 class="summary-section-title" style="color:#22c55e;font-size:1.3rem;">✅ ${t ? 'PUANLAMA KRİTERLERİ' : 'MARKING CRITERIA'}</h3>
        ${markingCriteria}
      </div>

      <!-- COMMON MISTAKES -->
      <div class="summary-section" style="margin-top:24px;background:linear-gradient(135deg,rgba(239,68,68,0.08),rgba(220,38,38,0.08));border:1px solid rgba(239,68,68,0.2);border-radius:16px;padding:28px;">
        <h3 class="summary-section-title" style="color:#ef4444;font-size:1.3rem;">🚫 ${t ? 'EN SIK HATALAR' : 'COMMON MISTAKES'}</h3>
        <div style="display:flex;flex-direction:column;gap:12px;">${mistakesHtml}</div>
      </div>

      <!-- CONCEPT CHECKLIST -->
      <div class="summary-section" style="margin-top:24px;background:linear-gradient(135deg,rgba(251,191,36,0.08),rgba(245,158,11,0.08));border:1px solid rgba(251,191,36,0.25);border-radius:16px;padding:28px;">
        <h3 class="summary-section-title" style="color:#fbbf24;font-size:1.3rem;">⚡ ${t ? 'KAVRAM KONTROL LİSTESİ' : 'CONCEPT CHECKLIST'}</h3>
        <p style="color:var(--text-muted);margin-bottom:16px;">${t ? 'Her senaryoda bu listeyi kontrol et:' : 'Check this list for every scenario:'}</p>
        <div class="concept-card"><div class="concept-card-text" style="font-size:0.88rem;line-height:2.0;">${checklist}</div></div>
      </div>

      <!-- PRACTICE SCENARIOS -->
      <div class="summary-section" style="margin-top:24px;background:linear-gradient(135deg,rgba(6,182,212,0.08),rgba(59,130,246,0.08));border:1px solid rgba(6,182,212,0.25);border-radius:16px;padding:28px;">
        <h3 class="summary-section-title" style="color:#06b6d4;font-size:1.3rem;">🎮 ${t ? 'PRATİK SENARYOLAR' : 'PRACTICE SCENARIOS'}</h3>
        <p style="color:var(--text-muted);margin-bottom:16px;">💡 ${t ? 'Tıklayarak cevap anahtarını gör!' : 'Click to reveal the answer key!'}</p>
        <div style="display:flex;flex-direction:column;gap:14px;">${scenariosHtml}</div>
      </div>

      <!-- GOLDEN PHRASES -->
      <div class="summary-section" style="margin-top:24px;margin-bottom:40px;background:linear-gradient(135deg,rgba(251,191,36,0.08),rgba(245,158,11,0.08));border:1px solid rgba(251,191,36,0.25);border-radius:16px;padding:28px;">
        <h3 class="summary-section-title" style="color:#fbbf24;font-size:1.3rem;">🔑 ${t ? 'ALTIN İFADELER' : 'GOLDEN PHRASES'}</h3>
        <div class="concept-card"><div class="concept-card-text" style="font-size:0.88rem;line-height:2.2;">${goldenPhrases}</div></div>
      </div>
    </div>`;

  // Add toggle CSS
  if (!document.getElementById('csStyles')) {
    const s = document.createElement('style');
    s.id = 'csStyles';
    s.textContent = '.pa.open{max-height:600px!important}';
    document.head.appendChild(s);
  }
}
