import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import "./App.css";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About",
            how: "How",
            faq: "FAQ",
            contact: "Contact"
          },
          heroTitle: "Earn monthly with your SIM card",
          heroText: "Join the UK's trusted SIM sharing network and get passive income today.",
          start: "Start Earning",
          about: "About Us",
          aboutText1: "SimCash Inc. is a British telecommunications technology company...",
          aboutText2: "Since 2022, we have been officially registered in India...",
          howItWorks: "How It Works",
          steps: {
            step1Title: "1. Sign the Agreement",
            step1Text: "We prepare a legal SIM rental agreement...",
            step2Title: "2. Hand Over Your SIM",
            step2Text: "You give us your SIM card...",
            step3Title: "3. Receive Monthly Payments",
            step3Text: "You get paid every month..."
          },
          faqTitle: "Frequently Asked Questions",
          faqs: [
            {
              q: "What is this work about? Is it a real job?",
              a: "This is not a typical task-based job..."
            },
            {
              q: "Is this legal in India?",
              a: "✅ Yes, everything is done under a legal SIM rental agreement..."
            },
            {
              q: "Do I keep the SIM card?",
              a: "No. After signing, you hand over the SIM card..."
            },
            {
              q: "What do I need to get started?",
              a: "✅ Selfie ✅ ID (Aadhaar/PAN) ✅ Class 3 Digital Signature..."
            },
            {
              q: "What is DSC and how to get it?",
              a: "Get it from e-mudhra.com..."
            },
            {
              q: "How much will I earn?",
              a: "₹3000 joining bonus, ₹2500 DSC refund..."
            },
            {
              q: "Do I need internet on?",
              a: "❌ No. After SIM handover, we manage everything."
            },
            {
              q: "Is this safe?",
              a: "Yes. You sign a legal agreement..."
            }
          ],
          contact: "Contact Us",
          contactEmail: "support@simcash.in",
          contactPrompt: "Have questions? Reach out to us:"
        }
      },
      hi: {
        translation: {
          nav: {
            home: "मुखपृष्ठ",
            about: "हमारे बारे में",
            how: "कैसे",
            faq: "प्रश्न",
            contact: "संपर्क"
          },
          heroTitle: "अपनी सिम कार्ड से हर महीने कमाएँ",
          heroText: "यूके के भरोसेमंद सिम साझाकरण नेटवर्क से जुड़ें...",
          start: "कमाना शुरू करें",
          about: "हमारे बारे में",
          aboutText1: "SimCash Inc. एक ब्रिटिश दूरसंचार प्रौद्योगिकी कंपनी है...",
          aboutText2: "2022 से, हम भारत में SimCash Solutions Pvt. Ltd. के रूप में...",
          howItWorks: "यह कैसे काम करता है",
          steps: {
            step1Title: "1. अनुबंध पर हस्ताक्षर करें",
            step1Text: "हम एक वैध सिम रेंटल अनुबंध तैयार करते हैं...",
            step2Title: "2. अपनी सिम हमें सौंपें",
            step2Text: "आप अपनी सिम कार्ड को हमारी तकनीकी संरचना में...",
            step3Title: "3. मासिक भुगतान प्राप्त करें",
            step3Text: "आपको हर महीने भुगतान मिलता है..."
          },
          faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
          faqs: [
            {
              q: "यह काम क्या है? क्या यह असली नौकरी है?",
              a: "यह सामान्य कार्य-आधारित नौकरी नहीं है..."
            },
            {
              q: "क्या यह भारत में कानूनी है?",
              a: "✅ हाँ, सब कुछ वैध सिम किराए अनुबंध के तहत होता है..."
            },
            {
              q: "क्या सिम मेरे पास रहेगा?",
              a: "नहीं। अनुबंध के बाद आप हमारी तकनीकी टीम को सिम सौंपते हैं..."
            },
            {
              q: "शुरू करने के लिए मुझे क्या चाहिए?",
              a: "✅ सेल्फी ✅ ID ✅ क्लास 3 डिजिटल सिग्नेचर प्रमाणपत्र"
            },
            {
              q: "DSC क्या है और इसे कैसे प्राप्त करें?",
              a: "इसे e-mudhra.com से प्राप्त करें..."
            },
            {
              q: "मुझे कितनी कमाई होगी?",
              a: "₹3000 जॉइनिंग बोनस, ₹2500 DSC रिफंड..."
            },
            {
              q: "क्या इंटरनेट चालू रहना चाहिए?",
              a: "❌ नहीं। सिम सौंपने के बाद हम सब संभालते हैं।"
            },
            {
              q: "क्या यह सुरक्षित है?",
              a: "हाँ। आप कानूनी अनुबंध पर हस्ताक्षर करते हैं..."
            }
          ],
          contact: "संपर्क करें",
          contactEmail: "support@simcash.in",
          contactPrompt: "कोई प्रश्न हैं? हमसे संपर्क करें:"
        }
      }
    }
  });

function Header({ scrollToSection }) {
  const { t, i18n } = useTranslation();
  return (
    <header className="header fixed">
      <div className="logo">SimCash</div>
      <nav>
        <a onClick={() => scrollToSection("hero")}>{t("nav.home")}</a>
        <a onClick={() => scrollToSection("about")}>{t("nav.about")}</a>
        <a onClick={() => scrollToSection("how")}>{t("nav.how")}</a>
        <a onClick={() => scrollToSection("faq")}>{t("nav.faq")}</a>
        <a onClick={() => scrollToSection("contact")}>{t("nav.contact")}</a>
        <button className="lang-btn" onClick={() => i18n.changeLanguage(i18n.language === "en" ? "hi" : "en")}>
          {i18n.language === "en" ? "हिंदी" : "EN"}
        </button>
      </nav>
    </header>
  );
}

function Hero({ scrollToSection }) {
  const { t } = useTranslation();
  return (
    <section className="hero" id="hero">
      <h1>{t("heroTitle")}</h1>
      <p>{t("heroText")}</p>
      <button onClick={() => scrollToSection("how")}>{t("start")}</button>
    </section>
  );
}

function About() {
  const { t } = useTranslation();
  return (
    <section className="section" id="about">
      <h2>{t("about")}</h2>
      <p>{t("aboutText1")}</p>
      <p>{t("aboutText2")}</p>
      <p>
        📍 <em>Head Office (UK): 221B Baker Street, London, NW1 6XE, United Kingdom</em><br />
        📍 <em>India Office: C-78, Sector 63, Noida, Uttar Pradesh 201301</em>
      </p>
    </section>
  );
}

function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className="section" id="how">
      <h2>{t("howItWorks")}</h2>
      <div className="steps">
        <div className="step">
          <h3>{t("steps.step1Title")}</h3>
          <p>{t("steps.step1Text")}</p>
        </div>
        <div className="step">
          <h3>{t("steps.step2Title")}</h3>
          <p>{t("steps.step2Text")}</p>
        </div>
        <div className="step">
          <h3>{t("steps.step3Title")}</h3>
          <p>{t("steps.step3Text")}</p>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  return (
    <div className={`faq-block ${open ? "open" : ""}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>{question}</div>
      <div className="faq-answer" ref={contentRef} style={{
        maxHeight: open ? contentRef.current?.scrollHeight : 0,
        paddingBottom: open ? "15px" : "0px",
      }}>{answer}</div>
    </div>
  );
}

function FAQ() {
  const { t } = useTranslation();
  const faqs = t("faqs", { returnObjects: true });
  return (
    <section className="section" id="faq">
      <h2>{t("faqTitle")}</h2>
      {faqs.map((faq, idx) => (
        <FAQItem key={idx} question={faq.q} answer={faq.a} />
      ))}
    </section>
  );
}

function Contact() {
  const { t } = useTranslation();
  return (
    <section className="section" id="contact">
      <h2>{t("contact")}</h2>
      <p>{t("contactPrompt")}</p>
      <div className="contact-methods">
        <div className="contact-item">
          <img src="https://i.ibb.co/bMWbXrqR/free-icon-twitter-220233.png" alt="Twitter" />
          <a href="https://twitter.com/SimCashGlobal" target="_blank" rel="noopener noreferrer">@SimCashGlobal</a>
        </div>
        <div className="contact-item">
          <img src="https://i.ibb.co/hRhgxzND/free-icon-whatsapp-3670051.png" alt="WhatsApp" />
          <a href="https://wa.me/447366270726" target="_blank" rel="noopener noreferrer">+44 7366 270726</a>
        </div>
        <div className="contact-item">
          <img src="https://i.ibb.co/XZGF6kKZ/free-icon-mail-9210464.png" alt="Email" />
          <a href="mailto:support@simcash.in">{t("contactEmail")}</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      © 2025 SimCash. All rights reserved. | support@simcash.in
    </footer>
  );
}

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
