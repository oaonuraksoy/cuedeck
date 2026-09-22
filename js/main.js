/**
 * CUEDECK — INTERACTIVE ENGINE & TRANSLATIONS
 * Pure Vanilla JavaScript (Zero Dependencies, Instant Load)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMobileMenu();
  initFaqAccordion();
  initConsoleMockup();
});

/* ===================================================================
   1. MULTI-LANGUAGE SYSTEM (TR / EN)
   =================================================================== */
const translations = {
  tr: {
    // Navigation
    "nav.features": "Özellikler",
    "nav.compare": "Karşılaştırma",
    "nav.howItWorks": "Nasıl Çalışır?",
    "nav.faq": "SSS",
    "nav.support": "Destek",
    "nav.download": "Hemen İndir",

    // Hero
    "hero.badge": "CANLI REJİ KONSOLU",
    "hero.title": "Pahalı Donanımlara Son: Telefonunuz Profesyonel OBS Reji Masası",
    "hero.subtitle": "Donanım satın almaya veya aylık aboneliklere binlerce lira ödemeyin. CueDeck, telefonunuzu 60 FPS ses mikseri, sıfır gecikmeli sahne matrisi ve canlı tally ışıklarıyla tam teşekküllü bir yayın kontrol konsoluna dönüştürür.",
    "hero.highlight1": "Ücretsiz İndir • $0.99 Pro Ömür Boyu",
    "hero.highlight2": "PC Companion Yazılımı Gerektirmez",
    "hero.highlight3": "OBS v28+ Doğal WebSocket v5 Desteği",

    // Store Badges
    "store.appStore.sub": "App Store'dan",
    "store.appStore.main": "İndirin",
    "store.googlePlay.sub": "Google Play'den",
    "store.googlePlay.main": "Edinin",

    // Features Section
    "features.tag": "PROFESYONEL DONANIM GÜCÜ",
    "features.title": "Yayıncılar İçin Tasarlanan 6 Çekirdek Reji Modülü",
    "features.subtitle": "OBS Studio v28+ dahili WebSocket protokolüyle doğrudan konuşur. Sıfır aracı, sıfır gecikme.",
    
    "mod1.title": "Dinamik Sahne Matrisi & Tally",
    "mod1.desc": "Sahnelerinizi manuel girmeye son. OBS'e bağlandığınız an tüm sahneler otomatik taranır. Donanım konsollarındaki gibi Kırmızı (Program/Canlı) ve Yeşil (Preview) tally lambalarıyla yayını güvenle yönetin.",
    "mod1.spec1": "Tek dokunuşla solo geçiş (Quick Switch)",
    "mod1.spec2": "Büyük stüdyo CUT / TAKE butonu",

    "mod2.title": "Akıllı Katman & Göz (Overlay) Kontrolü",
    "mod2.desc": "Kamera çerçevesi, sponsor logoları, sohbet pencereleri ve alt bantları tek tuşla anında gizleyin veya yayına verin. Sahne değiştikçe katman listesi otomatik yenilenir.",
    "mod2.spec1": "Sahneye özel katman senkronizasyonu",
    "mod2.spec2": "Hızlı kaza önleyici aç/kapa mantığı",

    "mod3.title": "60 FPS İzole Ses Mikseri & VU Metre",
    "mod3.desc": "Oyun sesi, mikrofon, Discord ve müzik kanallarını bağımsız dikey fader'larla ayarlayın. Flutter GPU RepaintBoundary ile sıfır takılmalı, donanım kalitesinde gerçek zamanlı VU peak metreleri.",
    "mod3.spec1": "Tek dokunuşla acil kırmızı MUTE göstergesi",
    "mod3.spec2": "Hassas desibel (-dB) ayar fader'ları",

    "mod4.title": "Medya & VTR Sayacı",
    "mod4.desc": "Jingle, video klipler ve B-Roll görüntülerini başlatın, durdurun veya baştan sarın. Kalan süreyi canlı geri sayım sayacıyla (VTR) takip ederek yayında sessizlik anlarını sıfıra indirin.",
    "mod4.spec1": "Kalan süre milisaniye geri sayımı",
    "mod4.spec2": "Görsel medya durum göstergesi",

    "mod5.title": "Yayın & Kayıt Telemetrisi",
    "mod5.desc": "Canlı Program ekranını telefonunuzdan izleyin. CPU kullanımı, düşen kare (dropped frames), kbit/s bitrate ve süre telemetrisi. Kazara yayını kapatmayı imkansız kılan Slide-to-Confirm koruması.",
    "mod5.spec1": "Slide-to-Activate / Deactivate güvenliği",
    "mod5.spec2": "Kırmızı canlı REC rozeti ve süresi",

    "mod6.title": "Özel Makro Deck & Otomasyon",
    "mod6.desc": "Tek dokunuşla zincirleme aksiyonlar: 'Mola Modu'na basarak mikrofonu susturun, arkaplan müziğini kısın, mola sahnesine geçin ve geri sayım videosunu aynı anda başlatın.",
    "mod6.spec1": "Sıralı çoklu aksiyon tetikleme",
    "mod6.spec2": "Donanımsal dokunsal titreşim (Haptic) hissiyatı",

    // Comparison Section
    "compare.tag": "NEDEN CUEDECK?",
    "compare.title": "Geleneksel Çözümlerle Karşılaştırın",
    "compare.subtitle": "Donanım masraflarına ve karmaşık PC sunucularına veda edin.",
    "compare.th.feature": "Özellik & Kapasite",
    "compare.th.cuedeck": "CueDeck",
    "compare.th.streamdeck": "Elgato Stream Deck",
    "compare.th.touchportal": "Touch Portal",
    "compare.th.deckboard": "Deckboard",
    
    "compare.row1": "Maliyet Modeli",
    "compare.row1.cuedeck": "Ücretsiz İndirme + $0.99 Pro (Ömür Boyu)",
    "compare.row1.streamdeck": "150$ - 250$ Pahalı Donanım",
    "compare.row1.touchportal": "Aylık / Yıllık Pro Abonelik",
    "compare.row1.deckboard": "Abonelik / Ücretli Eklentiler",

    "compare.row2": "PC Companion Yazılımı Gereksinimi",
    "compare.row2.cuedeck": "GEREKMEZ (Doğrudan OBS v5 WebSocket)",
    "compare.row2.streamdeck": "Zorunlu Elgato Software",
    "compare.row2.touchportal": "Zorunlu Aracı PC Sunucusu",
    "compare.row2.deckboard": "Zorunlu Desktop Server",

    "compare.row3": "Kurulum ve Eşleşme Süresi",
    "compare.row3.cuedeck": "1 Saniyede OBS QR Kod Taraması",
    "compare.row3.streamdeck": "USB Kablo + Yazılım Ayarları",
    "compare.row3.touchportal": "Manuel IP, Port & Firewall Yapılandırması",
    "compare.row3.deckboard": "Manuel IP ve Eklenti Yükleme",

    "compare.row4": "60 FPS Canlı İzole VU Metre",
    "compare.row4.cuedeck": "Mevcut (GPU İvmeli Akıcı)",
    "compare.row4.streamdeck": "Yalnızca statik LCD tuşlar",
    "compare.row4.touchportal": "Gecikmeli / Düşük Yenileme Hızı",
    "compare.row4.deckboard": "Yok veya Çok Gecikmeli",

    "compare.row5": "Mobil Cihazda Canlı Program Monitörü",
    "compare.row5.cuedeck": "Mevcut (16:9 Gerçek Zamanlı)",
    "compare.row5.streamdeck": "Yok",
    "compare.row5.touchportal": "Sadece Ekstra Plugin ile",
    "compare.row5.deckboard": "Yok",

    // Steps Section
    "steps.tag": "3 ADIMDA BAŞLAYIN",
    "steps.title": "1 Dakikada Yayına Hazırsınız",
    "steps.subtitle": "Ek sürücü veya sunucu programı kurmanıza gerek yok. OBS Studio 28+ zaten hazır.",
    "step1.num": "1",
    "step1.title": "OBS 28+'ı Açın",
    "step1.desc": "OBS Studio menüsünden Araçlar -> 'WebSocket Sunucusu Ayarları' bölümüne girin. WebSocket sunucusunu etkinleştirin.",
    "step2.num": "2",
    "step2.title": "Bağlantı Bilgilerini Gösterin",
    "step2.desc": "'Show Connect Info' butonuna basarak ekrana gelen yerel QR kodunu açın.",
    "step3.num": "3",
    "step3.title": "CueDeck ile Okutun",
    "step3.desc": "Telefonunuzdaki CueDeck uygulamasını açın, QR kodu kameraya gösterin. Anında eşleşin ve yayını yönetmeye başlayın!",

    // Reviews Section
    "reviews.tag": "YAYINCI DENEYİMLERİ",
    "reviews.title": "Yayıncılar CueDeck Hakkında Ne Diyor?",
    "reviews.subtitle": "Twitch, YouTube ve Kick yayıncılarının reji tercihi.",

    // FAQ Section
    "faq.tag": "MERAK EDİLENLER",
    "faq.title": "Sıkça Sorulan Sorular",
    "faq.subtitle": "Aklınıza takılan soruların yanıtlarını burada bulabilirsiniz.",

    "faq.q1": "CueDeck kullanmak için bilgisayarıma ek bir program kurmam gerekir mi?",
    "faq.a1": "Kesinlikle HAYIR! CueDeck, OBS Studio sürüm 28 ve sonrasında yerleşik olarak bulunan resmi 'OBS WebSocket v5' protokolü ile doğrudan haberleşir. Bilgisayarınıza ekstra sunucu, aracı veya companion programı yüklemeniz gerekmez.",

    "faq.q2": "Hangi OBS sürümleriyle uyumludur?",
    "faq.a2": "OBS Studio v28, v29, v30, v31 ve sonraki tüm güncel sürümlerle %100 uyumludur. Eski OBS sürümleri için de obs-websocket eklentisi mevcuttur ancak yerleşik performans için OBS 28+ tavsiye edilir.",

    "faq.q3": "Telefonum ile bilgisayarım aynı Wi-Fi ağında mı olmalı?",
    "faq.a3": "Evet. CueDeck, en yüksek güvenlik ve sıfır gecikme için yerel ağ (LAN / Wi-Fi) üzerinden çalışır. İnternet kesilse dahi yerel reji bağlantınız kopmaz. Telefonunuz ve bilgisayarınız aynı modeme bağlı olmalıdır.",

    "faq.q4": "Abonelik ücreti var mı?",
    "faq.a4": "Hayır! CueDeck temel reji kontrolleriyle tamamen ÜCRETSİZDİR. 16+ sahne bankaları, auto-mute matrisi ve özel makrolar için sadece tek seferlik $0.99 (~34,99 ₺) Pro Ömür Boyu lisansı bulunur. Asla aylık abonelik ücreti yoktur.",

    "faq.q5": "Verilerim veya OBS şifrem güvende mi?",
    "faq.a5": "Tüm bağlantı şifreleriniz cihazınızın yerel güvenli anahtar zincirinde (iOS Keychain / Android Keystore) şifrelenerek saklanır. CueDeck hiçbir harici sunucuya, analitik servisine veya buluta veri göndermez. Sıfır telemetri ve sıfır veri toplama politikası geçerlidir.",

    // CTA Banner
    "cta.title": "Reji Masanızı Cebinize Taşıyın",
    "cta.subtitle": "Hemen indirin, saniyeler içinde OBS ile eşleştirin ve yayınlarınızı bir üst lige taşıyın.",

    // Footer
    "footer.desc": "OBS Studio için profesyonel, sıfır gecikmeli, donanım hisli mobil yayın kontrol konsolu.",
    "footer.col.nav": "Gezinme",
    "footer.col.legal": "Yasal & Güvenlik",
    "footer.col.connect": "Bağlantı & İletişim",
    "footer.privacy": "Gizlilik Politikası",
    "footer.terms": "Kullanım Koşulları (EULA)",
    "footer.support": "Destek & Sorun Giderme",
    "footer.deletion": "Kullanıcı Verisi Silme",
    "footer.disclaimer": "CueDeck bağımsız bir yazılımdır. OBS Studio, OBS Project'in; Elgato & Stream Deck, Corsair Gaming Inc.'in tescilli ticari markalarıdır. İlgili markalar referans amaçlı belirtilmiştir.",
    "footer.rights": "Tüm Hakları Saklıdır."
  },

  en: {
    // Navigation
    "nav.features": "Features",
    "nav.compare": "Comparison",
    "nav.howItWorks": "How it Works",
    "nav.faq": "FAQ",
    "nav.support": "Support",
    "nav.download": "Download Now",

    // Hero
    "hero.badge": "LIVE BROADCAST DECK",
    "hero.title": "Ditch Expensive Hardware: Turn Your Phone into a Pro OBS Deck",
    "hero.subtitle": "Stop spending hundreds of dollars on dedicated hardware or recurring subscriptions. CueDeck turns your mobile phone into an ultra-responsive broadcast control station with 60 FPS audio meters, zero-latency scene matrix, and instant live tally.",
    "hero.highlight1": "Free Download • $0.99 Pro Lifetime",
    "hero.highlight2": "No PC Companion Software Needed",
    "hero.highlight3": "Native OBS v28+ WebSocket v5 Protocol",

    // Store Badges
    "store.appStore.sub": "Download on the",
    "store.appStore.main": "App Store",
    "store.googlePlay.sub": "Get it on",
    "store.googlePlay.main": "Google Play",

    // Features Section
    "features.tag": "HARDWARE CONSOLE PERFORMANCE",
    "features.title": "6 Core Broadcast Modules Engineered for Streamers",
    "features.subtitle": "Communicates directly with OBS Studio's built-in WebSocket. Zero middleware, zero latency.",

    "mod1.title": "Dynamic Scene Matrix & Tally",
    "mod1.desc": "Never type scene names manually. CueDeck discovers all your OBS scenes upon connection. Hardware-grade Red (Live/Program) and Green (Preview) tally lights keep your broadcast foolproof.",
    "mod1.spec1": "Single-touch quick switch for solo creators",
    "mod1.spec2": "Dedicated CUT / TAKE button for multi-cam studios",

    "mod2.title": "Smart Layer & Overlay (Eye) Control",
    "mod2.desc": "Toggle facecam borders, overlays, sponsor banners, and chat boxes with instant haptic taps. The layer list refreshes dynamically as you switch active scenes.",
    "mod2.spec1": "Scene-aware overlay synchronization",
    "mod2.spec2": "Accidental-proof one-tap toggles",

    "mod3.title": "60 FPS Isolated Audio Mixer & VU Meters",
    "mod3.desc": "Balance game audio, microphone, Discord, and music on tactile vertical faders. Powered by Flutter GPU RepaintBoundary for smooth, stutter-free real-time VU peak metering.",
    "mod3.spec1": "One-touch urgent red MUTE indicator",
    "mod3.spec2": "Precise decibel (-dB) fader curve",

    "mod4.title": "Media & VTR Countdown Timer",
    "mod4.desc": "Trigger intros, sound clips, and B-Roll effortlessly. Track remaining clip durations with a live millisecond VTR countdown timer to eliminate dead air during broadcasts.",
    "mod4.spec1": "Live remaining clip countdown timer",
    "mod4.spec2": "Visual playback status indicator",

    "mod5.title": "Broadcast & Recording Telemetry",
    "mod5.desc": "Monitor live program video directly on your phone. Real-time CPU load, dropped frames, bitrate, and timer telemetry. Slide-to-Confirm safety lock prevents accidental stream termination.",
    "mod5.spec1": "Slide-to-Activate / Stop stream security",
    "mod5.spec2": "Red live REC badge and duration counter",

    "mod6.title": "Custom Macro Deck & Automation",
    "mod6.desc": "Chain complex broadcast actions into a single tap: Trigger 'BRB Mode' to mute your microphone, attenuate background music, switch scenes, and fire the countdown video simultaneously.",
    "mod6.spec1": "Sequential multi-action workflow execution",
    "mod6.spec2": "Hardware-grade physical haptic vibration",

    // Comparison Section
    "compare.tag": "WHY CUEDECK?",
    "compare.title": "Compare with Traditional Alternatives",
    "compare.subtitle": "Say goodbye to bulky hardware and clunky desktop server apps.",
    "compare.th.feature": "Feature & Capability",
    "compare.th.cuedeck": "CueDeck",
    "compare.th.streamdeck": "Elgato Stream Deck",
    "compare.th.touchportal": "Touch Portal",
    "compare.th.deckboard": "Deckboard",

    "compare.row1": "Pricing Model",
    "compare.row1.cuedeck": "Free Download + $0.99 Pro (Lifetime)",
    "compare.row1.streamdeck": "$150 - $250 Expensive Hardware",
    "compare.row1.touchportal": "Monthly / Yearly Pro Subscription",
    "compare.row1.deckboard": "Subscription / Paid Extensions",

    "compare.row2": "PC Companion App Required?",
    "compare.row2.cuedeck": "NO (Native OBS v5 WebSocket)",
    "compare.row2.streamdeck": "Requires Elgato Software",
    "compare.row2.touchportal": "Requires Companion PC Server",
    "compare.row2.deckboard": "Requires Desktop Server",

    "compare.row3": "Setup & Pairing Time",
    "compare.row3.cuedeck": "1-Second Instant QR Scan",
    "compare.row3.streamdeck": "USB Cables + Software Setup",
    "compare.row3.touchportal": "Manual IP, Port & Firewall Setup",
    "compare.row3.deckboard": "Manual IP & Plugin Installation",

    "compare.row4": "60 FPS GPU Audio Peak Meters",
    "compare.row4.cuedeck": "Yes (Smooth GPU Acceleration)",
    "compare.row4.streamdeck": "Static LCD icons only",
    "compare.row4.touchportal": "Laggy / Low Refresh Rate",
    "compare.row4.deckboard": "None or High Latency",

    "compare.row5": "Live Mobile Program Video Monitor",
    "compare.row5.cuedeck": "Included (16:9 Real-Time)",
    "compare.row5.streamdeck": "No",
    "compare.row5.touchportal": "Only with Extra Plugins",
    "compare.row5.deckboard": "No",

    // Steps Section
    "steps.tag": "GET STARTED IN 3 STEPS",
    "steps.title": "Live in Under 60 Seconds",
    "steps.subtitle": "No drivers, no extra server apps. OBS Studio 28+ has everything built-in.",
    "step1.num": "1",
    "step1.title": "Open OBS Studio 28+",
    "step1.desc": "In OBS Studio, navigate to Tools -> 'WebSocket Server Settings'. Ensure the WebSocket server is enabled.",
    "step2.num": "2",
    "step2.title": "Show Connect Info",
    "step2.desc": "Click 'Show Connect Info' to display the built-in local pairing QR code on your computer screen.",
    "step3.num": "3",
    "step3.title": "Scan with CueDeck",
    "step3.desc": "Launch CueDeck on your phone, point your camera at the QR code. You're paired instantly and ready to broadcast!",

    // Reviews Section
    "reviews.tag": "COMMUNITY REVIEWS",
    "reviews.title": "Trusted by Streamers Worldwide",
    "reviews.subtitle": "The go-to broadcast controller for Twitch, YouTube, and Kick creators.",

    // FAQ Section
    "faq.tag": "GOT QUESTIONS?",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know about CueDeck and OBS integration.",

    "faq.q1": "Do I need to install any software on my computer?",
    "faq.a1": "Absolutely NOT! CueDeck connects directly using the official 'OBS WebSocket v5' engine natively built into OBS Studio 28 and newer. No third-party desktop companion apps or background servers are needed.",

    "faq.q2": "Which OBS versions are supported?",
    "faq.a2": "CueDeck is 100% compatible with OBS Studio v28, v29, v30, v31, and all future releases.",

    "faq.q3": "Do my phone and PC need to be on the same Wi-Fi?",
    "faq.a3": "Yes. CueDeck operates over your local network (LAN / Wi-Fi) for lightning-fast zero latency and maximum security. Even if your external Internet goes down, local deck control stays fully operational.",

    "faq.q4": "Are there recurring subscription fees?",
    "faq.a4": "No! CueDeck is completely FREE to download and use with 2 scenes, 16:9 live confidence monitor, audio mixer, and stream safety controls. Advanced 16+ scene banks, smart auto-mute mic matrix, and custom macro decks are unlocked with a single one-time $0.99 Pro Lifetime purchase. No recurring subscriptions, ever!",

    "faq.q5": "Is my OBS password and data safe?",
    "faq.a5": "Your passwords and profiles are saved exclusively on your phone's hardware-encrypted storage (iOS Keychain / Android Keystore). CueDeck has zero cloud servers, zero analytics trackers, and collects zero personal data.",

    // CTA Banner
    "cta.title": "Put a Pro Broadcast Console in Your Pocket",
    "cta.subtitle": "Download now, pair in seconds, and elevate your live streaming workflow today.",

    // Footer
    "footer.desc": "Professional zero-latency mobile broadcast controller and stream deck for OBS Studio.",
    "footer.col.nav": "Navigation",
    "footer.col.legal": "Legal & Security",
    "footer.col.connect": "Connect & Support",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use (EULA)",
    "footer.support": "Support & Knowledge Base",
    "footer.deletion": "Data Deletion Request",
    "footer.disclaimer": "CueDeck is an independent software application. OBS Studio is a trademark of the OBS Project. Elgato and Stream Deck are trademarks of Corsair Gaming, Inc. All trademarks are the property of their respective owners.",
    "footer.rights": "All Rights Reserved."
  }
};

function initLanguage() {
  const savedLang = localStorage.getItem('cuedeck_lang') || (navigator.language.startsWith('tr') ? 'tr' : 'en');
  setLanguage(savedLang);

  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  localStorage.setItem('cuedeck_lang', lang);
  document.documentElement.lang = lang;

  // Update button active states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Translate text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

/* ===================================================================
   2. MOBILE NAVIGATION DRAWER
   =================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    navbar.classList.toggle('mobile-nav-active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('mobile-nav-active');
    });
  });
}

/* ===================================================================
   3. FAQ ACCORDION
   =================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* ===================================================================
   4. INTERACTIVE VIRTUAL STREAM DECK SIMULATION
   =================================================================== */
function initConsoleMockup() {
  const pads = document.querySelectorAll('.scene-pad');
  const monitorOverlay = document.querySelector('.mockup-monitor-overlay');
  const vuFill = document.querySelector('.vu-meter-fill');
  const vuDb = document.querySelector('.vu-db-text');
  const recBadge = document.querySelector('.mockup-rec-badge');

  // Scene pads click handler
  if (pads.length > 0) {
    pads.forEach(pad => {
      pad.addEventListener('click', () => {
        // Remove live class from all
        pads.forEach(p => {
          if (p.classList.contains('live')) {
            p.classList.remove('live');
            p.classList.add('preview');
            const tally = p.querySelector('.pad-tally');
            if (tally) {
              tally.classList.remove('red');
              tally.classList.add('green');
            }
          }
        });

        // Set current to live
        pad.classList.remove('preview');
        pad.classList.add('live');
        const tally = pad.querySelector('.pad-tally');
        if (tally) {
          tally.classList.remove('green');
          tally.classList.add('red');
        }

        // Update monitor text
        const title = pad.querySelector('.pad-title');
        if (title && monitorOverlay) {
          monitorOverlay.textContent = 'CANLI: ' + title.textContent.toUpperCase();
        }
      });
    });
  }

  // 60fps Smooth Audio Meter Bounce Simulation
  if (vuFill && vuDb) {
    let lastTime = 0;
    function animateAudio(time) {
      if (time - lastTime > 75) { // ~13 fps update for natural jitter
        lastTime = time;
        // Generate pseudo-realistic voice peaks
        const randomPeak = Math.floor(Math.random() * 45) + 45; // 45% - 90%
        vuFill.style.width = randomPeak + '%';

        // dB calculation simulation (-36dB to -2dB)
        const db = Math.round(((randomPeak / 100) * 34) - 36);
        vuDb.textContent = (db > 0 ? '+' : '') + db + ' dB';
        
        if (db > -4) {
          vuDb.style.color = '#FF3B30';
        } else if (db > -10) {
          vuDb.style.color = '#FFD60A';
        } else {
          vuDb.style.color = '#34C759';
        }
      }
      requestAnimationFrame(animateAudio);
    }
    requestAnimationFrame(animateAudio);
  }

  // Live Timer Simulation (REC duration)
  if (recBadge) {
    let seconds = 868; // starts around 00:14:28
    setInterval(() => {
      seconds++;
      const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
      const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
      const secs = String(seconds % 60).padStart(2, '0');
      recBadge.textContent = `${hrs}:${mins}:${secs}`;
    }, 1000);
  }
}
