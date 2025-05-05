import React, { useRef, useState } from "react";
import "./App.css";

function Header({ scrollToSection }) {
  return (
    <header className="header fixed">
      <div className="logo">SimCash</div>
      <nav>
        <a onClick={() => scrollToSection("hero")}>Home</a>
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("how")}>How It Works</a>
        <a onClick={() => scrollToSection("faq")}>FAQ</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </nav>
    </header>
  );
}

function Hero({ scrollToSection }) {
  return (
    <section className="hero" id="hero">
      <h1>Earn monthly with your SIM card</h1>
      <p>Join India's trusted SIM sharing network and get passive income today.</p>
      <button onClick={() => scrollToSection("how")}>Start Earning</button>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <h2>About Us</h2>
      <p>
        <strong>SimCash Inc.</strong> is an American telecommunications technology company founded in 2016 and headquartered in <strong>San Jose, California (USA)</strong>. We specialize in distributed network systems and collaborate with internet providers in developing countries.
      </p>
      <p>
        Since 2022, we have been <strong>officially registered in India</strong> as <strong>SimCash Solutions Pvt. Ltd.</strong>, operating fully in compliance with the laws of the Republic of India.
      </p>
      <p>
        📍 <em>Head Office (USA): 98 N Almaden Blvd, San Jose, CA 95110</em><br />
        📍 <em>India Office: C-78, Sector 63, Noida, Uttar Pradesh 201301</em>
      </p>
    </section>
  );
}


function HowItWorks() {
  return (
    <section className="section" id="how">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Sign the Agreement</h3>
          <p>We prepare a legal SIM rental agreement, officially binding and fully compliant with Indian law.</p>
        </div>
        <div className="step">
          <h3>2. Hand Over Your SIM</h3>
          <p>You give us your SIM card for secure integration into our technical infrastructure.</p>
        </div>
        <div className="step">
          <h3>3. Receive Monthly Payments</h3>
          <p>You get paid every month — passive income, fully transparent and contract-based.</p>
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
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {question}
      </div>
      <div
        className="faq-answer"
        ref={contentRef}
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight : 0,
          paddingBottom: open ? "15px" : "0px",
        }}
      >
        {answer}
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "What is this work about? Is it a real job?",
      answer:
        "This is not a typical task-based job. It's a long-term partnership where we rent your SIM card and use it to expand technical infrastructure."
    },
    {
      question: "Is this legal in India?",
      answer:
        "✅ Yes, everything is done under a legal SIM rental agreement, and all data is verified under KYC norms."
    },
    {
      question: "Do I keep the SIM card?",
      answer:
        "No. After signing, you hand over the SIM card to our tech team. You're not responsible for usage."
    },
    {
      question: "What do I need to get started?",
      answer:
        "✅ Selfie ✅ ID (Aadhaar/PAN) ✅ Class 3 Digital Signature Certificate (.pfx)"
    },
    {
      question: "What is DSC and how to get it?",
      answer:
        "Get it from e-mudhra.com: select Class 3 Individual > Soft Token (.pfx) > Upload docs > Verify > Download."
    },
    {
      question: "How much will I earn?",
      answer:
        "₹3000 joining bonus, ₹2500 DSC refund, ₹3000/month SIM rental, ₹2000 per referral."
    },
    {
      question: "Do I need internet on?",
      answer:
        "❌ No. After SIM handover, we manage everything."
    },
    {
      question: "Is this safe?",
      answer:
        "Yes. You sign a legal agreement. We use it in technical infrastructure. You're not liable."
    }
  ];

  return (
    <section className="section" id="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, idx) => (
        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact Us</h2>
      <p>Have questions? Reach out to us:</p>
      <div className="contact-methods">
        <div className="contact-item">
          <img src="https://i.ibb.co/bMWbXrqR/free-icon-twitter-220233.png" alt="Twitter" />
          <a href="https://twitter.com/SimCashGlobal" target="_blank" rel="noopener noreferrer">
            @SimCashGlobal
          </a>
        </div>
        <div className="contact-item">
          <img src="https://i.ibb.co/hRhgxzND/free-icon-whatsapp-3670051.png" alt="WhatsApp" />
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            +91 98765 43210
          </a>
        </div>
        <div className="contact-item">
          <img src="https://i.ibb.co/G3rhcz0m/free-icon-email-9554729.png" alt="Email" />
          <a href="mailto:support@simcash.in">
            support@simcash.in
          </a>
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
