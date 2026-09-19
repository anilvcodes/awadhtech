import { useState } from "react";
import "./App.css";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const services = [
  {
    number: "01",
    icon: "</>",
    title: "Website Development",
    description:
      "Professional, responsive aur SEO-friendly websites jo aapke business ko online strong presence deti hain.",
    features: [
      "Business websites",
      "Landing pages",
      "Responsive design",
      "SEO-ready structure",
    ],
  },
  {
    number: "02",
    icon: "◈",
    title: "Web Applications",
    description:
      "Custom web applications jo aapke unique business workflows aur operational requirements ke according build hoti hain.",
    features: [
      "Custom dashboards",
      "Business automation",
      "User management",
      "Scalable architecture",
    ],
  },
  {
    number: "03",
    icon: "◫",
    title: "E-Commerce",
    description:
      "Modern online stores with product management, orders, payments aur customer-focused shopping experience.",
    features: [
      "Product management",
      "Online payments",
      "Order management",
      "Mobile-first store",
    ],
  },
  {
    number: "04",
    icon: "↻",
    title: "Website Maintenance",
    description:
      "Website launch ke baad bhi security, updates, backups aur technical support ke saath continuous care.",
    features: [
      "Security updates",
      "Bug fixing",
      "Performance support",
      "Regular backups",
    ],
  },
];

const faqs = [
  {
    question: "Website banwane mein kitna time lagta hai?",
    answer:
      "Project ki complexity par depend karta hai. Basic business website usually 5–15 working days mein complete ho sakti hai. Custom web applications aur e-commerce projects ki timeline requirements ke according decide hoti hai.",
  },
  {
    question: "Kya aap Gonda ke bahar clients ke saath kaam karte hain?",
    answer:
      "Bilkul. Hum Gonda, Uttar Pradesh se operate karte hain aur India ke different cities mein businesses ko remote IT services provide karte hain.",
  },
  {
    question: "Kya website mobile responsive hogi?",
    answer:
      "Haan. Hum mobile-first responsive approach follow karte hain, jisse website phones, tablets, laptops aur desktops par properly work kare.",
  },
  {
    question: "Website launch ke baad maintenance milegi?",
    answer:
      "Haan. Website maintenance, security updates, bug fixing, backups aur performance support ke liye ongoing maintenance plans available hain.",
  },
  {
    question: "Kya e-commerce website mein online payment add ho sakta hai?",
    answer:
      "Haan. Requirements ke according suitable payment gateway, order management, product management aur customer features integrate kiye ja sakte hain.",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-mark">&lt;/&gt;</span>
          <span>
            Tech<span className="logo-accent">Nova</span>
          </span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#process" onClick={closeMenu}>
            Process
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  return (
    <div className={`section-title ${align}`}>
      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="logo footer-logo">
            <span className="logo-mark">&lt;/&gt;</span>

            <span>
              Tech<span className="logo-accent">Nova</span>
            </span>
          </a>

          <p className="footer-description">
            Modern websites, web applications aur digital solutions
            for growing businesses.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
        </div>

        <div className="footer-column">
          <h4>Services</h4>

          <a href="#services">Website Development</a>
          <a href="#services">Web Applications</a>
          <a href="#services">E-Commerce</a>
          <a href="#services">Maintenance</a>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>

          <a href="#contact">Gonda, Uttar Pradesh</a>
          <a href="#contact">Serving All India</a>
          <a href="mailto:hello@yourcompany.com">
            hello@yourcompany.com
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} TechNova. All rights reserved.
        </span>

        <span>Built for digital growth.</span>
      </div>
    </footer>
  );
}

function App() {
  const [faqOpen, setFaqOpen] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const whatsappMessage = `Hello TechNova,

Name: ${name}
Phone: ${phone}
Service: ${service}

Project Details:
${message}`;

    if (WHATSAPP_NUMBER === "91XXXXXXXXXX") {
      alert(
        "Please replace WHATSAPP_NUMBER in App.jsx with your real WhatsApp number."
      );

      return;
    }

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}

        <section className="hero" id="home">
          <div className="hero-grid-bg" />

          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-content-wrap">
            <div className="hero-content">
              <div className="location-pill">
                <span className="pulse" />

                Gonda, Uttar Pradesh

                <span className="dot">•</span>

                Serving All India
              </div>

              <h1>
                Aapke Business Ko
                <span>Digital Growth</span>
                Dene Ke Liye Built.
              </h1>

              <p className="hero-description">
                Hum modern{" "}
                <strong>Website Development</strong>, custom{" "}
                <strong>Web Applications</strong>,{" "}
                <strong>E-Commerce</strong> aur reliable{" "}
                <strong>Website Maintenance</strong> solutions
                provide karte hain.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button primary">
                  Free Consultation
                  <span>→</span>
                </a>

                <a href="#services" className="button secondary">
                  Explore Services
                </a>
              </div>

              <div className="hero-trust">
                <div>
                  <strong>100%</strong>
                  <span>Custom Solutions</span>
                </div>

                <div>
                  <strong>Pan India</strong>
                  <span>Service Area</span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Technical Support</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="code-card">
                <div className="code-header">
                  <div className="window-dots">
                    <i />
                    <i />
                    <i />
                  </div>

                  <span>business.jsx</span>

                  <div className="code-status">
                    <span />
                    live
                  </div>
                </div>

                <div className="code-content">
                  <div>
                    <span className="purple">const</span>{" "}
                    <span className="blue">business</span> = {"{"}
                  </div>

                  <div className="indent">
                    <span className="cyan">website</span>:{" "}
                    <span className="green">"modern"</span>,
                  </div>

                  <div className="indent">
                    <span className="cyan">performance</span>:{" "}
                    <span className="orange">"fast"</span>,
                  </div>

                  <div className="indent">
                    <span className="cyan">responsive</span>:{" "}
                    <span className="yellow">true</span>,
                  </div>

                  <div className="indent">
                    <span className="cyan">seo</span>:{" "}
                    <span className="yellow">true</span>,
                  </div>

                  <div className="indent">
                    <span className="cyan">secure</span>:{" "}
                    <span className="yellow">true</span>,
                  </div>

                  <div>{"};"}</div>

                  <br />

                  <div>
                    <span className="purple">export default</span>{" "}
                    <span className="blue">business</span>;
                  </div>
                </div>

                <div className="code-footer">
                  <span>● Production Ready</span>
                  <span>React + Node</span>
                </div>
              </div>

              <div className="floating floating-one">
                <span>⚡</span>

                <div>
                  <strong>Fast Website</strong>
                  <small>Optimized Performance</small>
                </div>
              </div>

              <div className="floating floating-two">
                <span>🔒</span>

                <div>
                  <strong>Secure & Reliable</strong>
                  <small>Business Ready</small>
                </div>
              </div>

              <div className="floating floating-three">
                <span>✓</span>

                <div>
                  <strong>SEO Ready</strong>
                  <small>Search Friendly</small>
                </div>
              </div>
            </div>
          </div>

          <a className="scroll-indicator" href="#services">
            <span />
            Scroll to explore
          </a>
        </section>

        {/* SERVICES */}

        <section className="section services" id="services">
          <div className="container">
            <SectionTitle
              eyebrow="OUR SERVICES"
              title={
                <>
                  Digital Solutions,
                  <span> Ek Hi Place Par.</span>
                </>
              }
              description="Business ko online launch, manage aur grow karne ke liye complete IT services."
            />

            <div className="service-grid">
              {services.map((service) => (
                <article
                  className="service-card"
                  key={service.title}
                >
                  <div className="service-top">
                    <span className="service-icon">
                      {service.icon}
                    </span>

                    <span className="service-number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="service-link">
                    Get Started <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
{/* INDUSTRIES */}

<section className="section industries" id="industries">
  <div className="container">
    <SectionTitle
      eyebrow="INDUSTRIES WE SERVE"
      title={
        <>
          Solutions for
          <span> Every Industry.</span>
        </>
      }
      description="Gonda se India bhar ke businesses aur organizations ke liye customized technology solutions."
    />

    <div className="industry-grid">
      <div className="industry-card">
        <span>🏥</span>
        <h3>Healthcare</h3>
        <p>Clinics, hospitals, diagnostic centers aur healthcare businesses.</p>
      </div>

      <div className="industry-card">
        <span>🎓</span>
        <h3>Education</h3>
        <p>Schools, colleges, coaching institutes aur education platforms.</p>
      </div>

      <div className="industry-card">
        <span>🛒</span>
        <h3>Retail & E-Commerce</h3>
        <p>Retail stores, online stores aur product-based businesses.</p>
      </div>

      <div className="industry-card">
        <span>🏗️</span>
        <h3>Real Estate</h3>
        <p>Builders, property dealers, brokers aur real estate companies.</p>
      </div>

      <div className="industry-card">
        <span>🏭</span>
        <h3>Manufacturing</h3>
        <p>Manufacturers, factories, suppliers aur industrial businesses.</p>
      </div>

      <div className="industry-card">
        <span>🚚</span>
        <h3>Logistics</h3>
        <p>Transport, courier, logistics aur supply-chain businesses.</p>
      </div>

      <div className="industry-card">
        <span>🌾</span>
        <h3>Agriculture</h3>
        <p>Agri businesses, farmers, suppliers aur agriculture platforms.</p>
      </div>

      <div className="industry-card">
        <span>🏨</span>
        <h3>Hospitality</h3>
        <p>Hotels, restaurants, cafes, resorts aur travel businesses.</p>
      </div>

      <div className="industry-card">
        <span>💼</span>
        <h3>Professional Services</h3>
        <p>Consultants, CA, lawyers, agencies aur service professionals.</p>
      </div>

      <div className="industry-card">
        <span>🏢</span>
        <h3>Corporate & Enterprises</h3>
        <p>Growing companies ke liye custom software aur business solutions.</p>
      </div>

      <div className="industry-card">
        <span>🏪</span>
        <h3>Local Businesses</h3>
        <p>Gonda aur India ke local businesses ke liye digital solutions.</p>
      </div>

      <div className="industry-card">
        <span>⚙️</span>
        <h3>Other Industries</h3>
        <p>Unique business requirements ke liye customized technology solutions.</p>
      </div>
    </div>

    <div className="industries-bottom">
      <strong>Don't see your industry?</strong>
      <span>
        No problem — we build solutions according to your business requirements.
      </span>
    </div>
  </div>
</section>
        {/* ABOUT */}

        <section className="section about" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-main-card">
                <div className="about-card-glow" />

                <div className="about-logo">&lt;/&gt;</div>

                <span className="mini-label">TECHNOLOGY</span>

                <h3>
                  Technology
                  <span>That Works.</span>
                </h3>

                <p>Simple. Fast. Secure. Scalable.</p>

                <div className="tech-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Cloud</span>
                  <span>SEO</span>
                </div>
              </div>

              <div className="about-badge">
                <strong>INDIA</strong>

                <span>
                  Serving
                  <br />
                  Nationwide
                </span>
              </div>

              <div className="about-orbit orbit-one" />
              <div className="about-orbit orbit-two" />
            </div>

            <div className="about-content">
              <span className="eyebrow">ABOUT US</span>

              <h2>
                Gonda Se Start,
                <span>India Bhar Tak.</span>
              </h2>

              <p>
                Hum ek Gonda-based IT service provider hain jo
                businesses ko digital world mein strong presence
                build karne mein help karta hai.
              </p>

              <p>
                Chahe aapko ek professional business website
                chahiye, custom web application, online store ya
                regular technical maintenance — hum solution ko
                aapki actual business requirement ke according build
                karte hain.
              </p>

              <div className="check-list">
                <div>
                  <span>✓</span>
                  Custom business-focused solutions
                </div>

                <div>
                  <span>✓</span>
                  Mobile-first responsive design
                </div>

                <div>
                  <span>✓</span>
                  Fast & SEO-friendly development
                </div>

                <div>
                  <span>✓</span>
                  Secure & scalable architecture
                </div>

                <div>
                  <span>✓</span>
                  Long-term technical support
                </div>
              </div>

              <a href="#contact" className="button primary">
                Let's Build Together →
              </a>
            </div>
          </div>
        </section>

        {/* WHY US */}

        <section className="section why">
          <div className="container">
            <SectionTitle
              eyebrow="WHY CHOOSE US"
              title={
                <>
                  Sirf Website Nahi,
                  <span> Business Solution.</span>
                </>
              }
              description="Technology ko business goals ke saath connect karna hamara focus hai."
            />

            <div className="why-grid">
              <div className="why-card">
                <span className="why-number">01</span>
                <div className="why-icon">◎</div>
                <h3>Business First</h3>
                <p>
                  Design aur development se pehle hum aapke business
                  goals ko understand karte hain.
                </p>
              </div>

              <div className="why-card">
                <span className="why-number">02</span>
                <div className="why-icon">⚡</div>
                <h3>Fast & Lightweight</h3>
                <p>
                  Unnecessary libraries aur heavy elements avoid
                  karke performance par focus.
                </p>
              </div>

              <div className="why-card">
                <span className="why-number">03</span>
                <div className="why-icon">⌕</div>
                <h3>SEO Ready</h3>
                <p>
                  Semantic HTML, metadata, structured data aur
                  search-friendly architecture.
                </p>
              </div>

              <div className="why-card">
                <span className="why-number">04</span>
                <div className="why-icon">↻</div>
                <h3>Long-Term Support</h3>
                <p>
                  Website launch ke baad bhi maintenance, updates
                  aur technical support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}

        <section className="section work" id="work">
          <div className="container">
            <div className="section-heading-row">
              <SectionTitle
                eyebrow="OUR WORK"
                title={
                  <>
                    Projects That
                    <span> Solve Real Problems.</span>
                  </>
                }
                align="left"
              />

              <a href="#contact" className="text-link">
                Start Your Project →
              </a>
            </div>

            <div className="projects">
              <article className="project">
                <div className="project-preview purple-preview">
                  <div className="preview-browser">
                    <div className="preview-top">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="preview-layout">
                      <div className="preview-sidebar">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="preview-main">
                        <div className="preview-heading" />
                        <div className="preview-subheading" />

                        <div className="preview-cards">
                          <i />
                          <i />
                          <i />
                        </div>

                        <div className="preview-chart">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <span>BUSINESS WEBSITE</span>
                  <h3>Professional Business Website</h3>
                  <p>Fast, responsive aur SEO-ready website.</p>
                </div>
              </article>

              <article className="project">
                <div className="project-preview blue-preview">
                  <div className="preview-browser">
                    <div className="preview-top">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="ecommerce-preview">
                      <div className="shop-nav" />
                      <div className="shop-hero" />

                      <div className="shop-products">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <span>E-COMMERCE</span>
                  <h3>Online Store Platform</h3>
                  <p>
                    Products, orders aur payments ke saath.
                  </p>
                </div>
              </article>

              <article className="project">
                <div className="project-preview orange-preview">
                  <div className="dashboard-preview">
                    <div className="dashboard-sidebar" />

                    <div className="dashboard-main">
                      <div className="dashboard-top" />

                      <div className="dashboard-stats">
                        <i />
                        <i />
                        <i />
                      </div>

                      <div className="dashboard-chart">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <span>WEB APPLICATION</span>
                  <h3>Business Management System</h3>
                  <p>
                    Custom dashboard aur business workflow.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="section process" id="process">
          <div className="container">
            <SectionTitle
              eyebrow="OUR PROCESS"
              title={
                <>
                  Idea Se
                  <span> Launch Tak.</span>
                </>
              }
              description="Simple process, clear communication aur predictable development."
            />

            <div className="process-grid">
              <div className="process-item">
                <div className="process-number">01</div>
                <h3>Discuss</h3>
                <p>
                  Aapki requirement, business aur goals ko samajhna.
                </p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-item">
                <div className="process-number">02</div>
                <h3>Plan</h3>
                <p>
                  Features, design, technology aur development plan.
                </p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-item">
                <div className="process-number">03</div>
                <h3>Build</h3>
                <p>
                  Development, testing aur performance optimization.
                </p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-item">
                <div className="process-number">04</div>
                <h3>Launch</h3>
                <p>
                  Deployment ke baad support aur maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="cta-section">
          <div className="container cta">
            <div>
              <span className="eyebrow">HAVE A PROJECT?</span>

              <h2>
                Aapka Idea,
                <span> Hamari Technology.</span>
              </h2>

              <p>
                Apne project ke baare mein batayein. Hum aapko
                suitable digital solution suggest karenge.
              </p>
            </div>

            <a href="#contact" className="button white">
              Free Consultation →
            </a>
          </div>
        </section>

        {/* FAQ */}

        <section className="section faq" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <span className="eyebrow">FAQ</span>

              <h2>
                Frequently Asked
                <span> Questions.</span>
              </h2>

              <p>
                Project start karne se pehle common questions ke
                answers yahan mil jayenge.
              </p>

              <a href="#contact" className="text-link">
                Still have a question? →
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = faqOpen === index;

                return (
                  <div
                    className={`faq-item ${
                      isOpen ? "active" : ""
                    }`}
                    key={faq.question}
                  >
                    <button
                      onClick={() =>
                        setFaqOpen(isOpen ? -1 : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>

                      <span className="faq-plus">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`faq-answer ${
                        isOpen ? "show" : ""
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div className="contact-content">
              <span className="eyebrow">CONTACT US</span>

              <h2>
                Let's Build Something
                <span> Great Together.</span>
              </h2>

              <p>
                Website, Web App, E-Commerce ya Maintenance — apni
                requirement share karein.
              </p>

              <div className="contact-info">
                <div>
                  <span>📍</span>

                  <div>
                    <strong>Location</strong>
                    <p>Gonda, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div>
                  <span>🌎</span>

                  <div>
                    <strong>Service Area</strong>
                    <p>All India</p>
                  </div>
                </div>

                <div>
                  <span>✉️</span>

                  <div>
                    <strong>Email</strong>
                    <p>hello@yourcompany.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-note">
                <span>●</span>

                <p>
                  Usually respond within a few hours during business
                  hours.
                </p>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-header">
                <span>START A PROJECT</span>
                <h3>Tell us about your project.</h3>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">
                  Required Service
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select service
                  </option>

                  <option>Website Development</option>
                  <option>Web Application</option>
                  <option>E-Commerce Development</option>
                  <option>Website Maintenance</option>
                  <option>UI/UX Design</option>
                  <option>SEO & Optimization</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Apne project ke baare mein thoda batayein..."
                  required
                />
              </div>

              <button
                type="submit"
                className="button primary submit"
              >
                Send via WhatsApp →
              </button>

              <p className="form-security">
                🔒 Your information is only used to discuss your
                project.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;