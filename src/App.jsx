import { useEffect, useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "etiong.dhie07@gmail.com";

  const skillCategories = [
    {
      category: "Backend & Core",
      skills: ["C# .NET", "ASP.NET Core", "Blazor", "REST API"],
    },
    {
      category: "Database",
      skills: ["SQL Server", "Query Optimization", "Database Design"],
    },
    {
      category: "Workflow & AI Automation",
      skills: ["n8n Automation", "AI Agents", "Telegram & Slack Bots", "Webhook Integrations"],
    },
    {
      category: "Frontend & Web",
      skills: ["JavaScript", "HTML5 & CSS3", "Bootstrap", "Responsive UI"],
    },
  ];

  const certificates = [
    { title: "Certificate 1", issuer: "Professional Training", image: "/images/certificate_1.jpg" },
    { title: "Certificate 2", issuer: "Professional Training", image: "/images/certificate_2.jpg" },
    { title: "Certificate 3", issuer: "Professional Training", image: "/images/certificate_3.jpg" },
    { title: "Certificate 4", issuer: "Professional Training", image: "/images/certificate_4.jpg" },
    { title: "Certificate 5", issuer: "Professional Training", image: "/images/certificate_5.jpg" },
    { title: "Certificate 6", issuer: "Professional Training", image: "/images/certificate_6.jpeg" },
    { title: "Certificate 7", issuer: "Professional Training", image: "/images/certificate_7.jpg" },
    { title: "Certificate 8", issuer: "Professional Training", image: "/images/certificate_8.jpg" },
    { title: "Certificate 9", issuer: "Professional Training", image: "/images/certificate_9.jpg" },
    { title: "Certificate 10", issuer: "Professional Training", image: "/images/certificate_10.jpg" },
    { title: "Certificate 11", issuer: "Professional Training", image: "/images/certificate_11.jpg" },
    { title: "Certificate 12", issuer: "Professional Training", image: "/images/certificate_12.jpg" },
    { title: "Certificate 13", issuer: "Professional Training", image: "/images/certificate_13.jpg" },
    { title: "Certificate 14", issuer: "Professional Training", image: "/images/certificate_14.jpg" },
    { title: "Certificate 15", issuer: "Professional Training", image: "/images/certificate_15.jpg" },
    { title: "Certificate 16", issuer: "Professional Training", image: "/images/certificate_16.jpg" },
    { title: "Certificate 17", issuer: "Professional Training", image: "/images/certificate_17.jpg" },
    { title: "Certificate 18", issuer: "Professional Training", image: "/images/certificate_18.jpg" },
    { title: "Certificate 19", issuer: "Professional Training", image: "/images/certificate_19.jpg" },
    { title: "Certificate 20", issuer: "Professional Training", image: "/images/certificate_20.jpg" },
    { title: "Certificate 21", issuer: "Professional Training", image: "/images/certificate_21.jpg" },
    { title: "Certificate 22", issuer: "Professional Training", image: "/images/certificate_22.jpg" },
    { title: "Certificate 23", issuer: "Professional Training", image: "/images/certificate_23.jpg" },
    { title: "Certificate 24", issuer: "Professional Training", image: "/images/certificate_24.png" },
  ];

  const projects = [
    {
      title: "AI Booking Chatbot",
      description: "AI-powered booking system with automated payment verification and multi-service workflow orchestration.",
      images: [
        "/images/chatbot_workflow.png",
        "/images/chatbot_output1.png",
        "/images/chatbot_output2.png",
      ],
      tags: ["n8n", "AI Agents", "Telegram", "Google Sheets", "Google Calendar", "Google Drive"],
      details:
        "A conversational AI booking assistant that handles end-to-end appointment scheduling. Features include calendar slot checking, automated payment receipt parsing with AI verification, real-time customer confirmations, and cloud file management via n8n automation workflows.",
    },
    {
      title: "Email Labeling AI Agent",
      description: "Intelligent inbox categorization agent that analyzes intent and urgency using LLMs and automated triggers.",
      images: ["/images/email_workflow.png", "/images/email_output.png"],
      tags: ["n8n", "AI Agents", "Gmail", "Automation"],
      details:
        "An automated inbox intelligence system that watches incoming correspondence, evaluates message context with an AI agent, categorizes emails by priority and department, and applies custom labels instantly to reduce triage time.",
    },
    {
      title: "PHIVOLCS Earthquake Scraper",
      description: "Automated seismic alert scraper with data processing and scheduled multi-platform publication.",
      images: ["/images/quake_workflow.png", "/images/quake_output.png"],
      tags: ["JavaScript", "n8n", "REST API", "Facebook API"],
      details:
        "A real-time data scraper that monitors official PHIVOLCS seismic bulletins, structures raw advisory data into clean records, and automatically formats and broadcasts critical earthquake updates to social channels.",
    },
    {
      title: "Weekly Campaign Automation Report",
      description: "End-to-end marketing performance aggregator with metric calculations and team report generation.",
      images: ["/images/report_workflow.png", "/images/report_output.png"],
      tags: ["n8n", "Google Sheets", "Slack", "Data Pipelines"],
      details:
        "A cross-platform data pipeline pulling weekly campaign metrics from multiple endpoints, aggregating conversions and KPIs, creating visual summary digests, and delivering scheduled reports directly to team Slack channels.",
    },
  ];

  const highlights = [
    {
      number: "Full Stack",
      title: ".NET Ecosystem",
      desc: "Robust backend architectures with C#, ASP.NET Core, Blazor, and performant RESTful APIs.",
    },
    {
      number: "Automation",
      title: "Workflow & AI Systems",
      desc: "Event-driven automations with n8n and intelligent LLM agents that eliminate manual tasks.",
    },
    {
      number: "Data-Driven",
      title: "SQL Server & Pipelines",
      desc: "Optimized relational database schemas, complex queries, and reliable data synchronization.",
    },
  ];

  // Prevent background scrolling when modals or lightboxes are open
  useEffect(() => {
    const isModalActive = selectedProject || lightboxOpen || selectedCertificate !== null;
    document.body.style.overflow = isModalActive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, lightboxOpen, selectedCertificate]);

  // Certificates auto-slider timer
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const timer = setInterval(() => {
      setCurrentCertificateIndex((prev) => (prev + 1) % certificates.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, certificates.length]);

  // Global keyboard shortcuts (Esc to close, Left/Right arrow keys for navigation)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else if (selectedCertificate !== null) {
          setSelectedCertificate(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }

      if (e.key === "ArrowLeft") {
        if (selectedProject) {
          setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
        } else if (selectedCertificate !== null) {
          setSelectedCertificate((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
        }
      }

      if (e.key === "ArrowRight") {
        if (selectedProject) {
          setCurrentImageIndex((prev) =>
            prev < selectedProject.images.length - 1 ? prev + 1 : prev
          );
        } else if (selectedCertificate !== null) {
          setSelectedCertificate((prev) => (prev + 1) % certificates.length);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, lightboxOpen, selectedCertificate, certificates.length]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setLightboxOpen(false);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setLightboxOpen(false);
  };

  const prevProjectImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => Math.max(0, prev - 1));
  };

  const nextProjectImage = (e) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        Math.min(selectedProject.images.length - 1, prev + 1)
      );
    }
  };

  const prevCertificate = () => {
    setCurrentCertificateIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextCertificate = () => {
    setCurrentCertificateIndex((prev) => (prev + 1) % certificates.length);
  };

  return (
    <div className="portfolio-app">
      {/* Top Navigation */}
      <header className="site-header fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="brand-link" href="#home">
              <span className="brand-mark">FE</span>
              <span className="brand-name">Felizardo Etiong Jr.</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMain"
              aria-controls="navbarMain"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>

            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav ms-auto align-items-md-center">
                {["About", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
                  <li className="nav-item" key={item}>
                    <a className="nav-link" href={`#${item.toLowerCase()}`}>
                      {item}
                    </a>
                  </li>
                ))}
                <li className="nav-item ms-md-2 mt-2 mt-md-0">
                  <a href="#contact" className="btn btn-primary-custom btn-sm">
                    Get in Touch
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <div className="status-badge mb-3">
                  <span className="status-dot"></span>
                  <span>Available for Full-Time &amp; Project Engagements</span>
                </div>

                <h1 className="hero-heading">
                  Full Stack .NET Developer &amp; Automation Engineer
                </h1>

                <p className="hero-subtext">
                  I design and deliver clean enterprise web applications, high-performance REST APIs,
                  and intelligent business automation systems with C#, ASP.NET, Blazor, SQL Server, and n8n.
                </p>

                <div className="hero-cta-group">
                  <a href="#projects" className="btn btn-primary-custom">
                    View Selected Work
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-1">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <a href="#contact" className="btn btn-secondary-custom">
                    Contact Me
                  </a>
                </div>

                <div className="hero-tech-strip">
                  <span className="strip-label">Core Tech:</span>
                  <div className="strip-tags">
                    <span>ASP.NET Core</span>
                    <span>C#</span>
                    <span>Blazor</span>
                    <span>SQL Server</span>
                    <span>REST APIs</span>
                    <span>n8n</span>
                    <span>AI Agents</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 text-center">
                <div className="profile-container">
                  <div className="profile-avatar-frame">
                    <img
                      src="/images/Profile.png"
                      alt="Felizardo Etiong Jr."
                      className="profile-avatar"
                    />
                  </div>
                  <div className="profile-info-pill">
                    <div className="profile-info-text">
                      <strong>Felizardo Etiong Jr.</strong>
                      <span>Enterprise Systems &amp; Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding bg-light-subtle" id="about">
          <div className="container">
            <div className="section-header-clean">
              <span className="section-kicker">About Me</span>
              <h2 className="section-title-clean">Focused on reliability, scalability, and practical value.</h2>
            </div>

            <div className="row g-4 mt-1">
              <div className="col-lg-5">
                <div className="about-narrative">
                  <p>
                    I specialize in engineering dependable business applications and streamlining operational workflows.
                    With a solid foundation in the <strong>Microsoft .NET ecosystem</strong> and modern automation platforms,
                    I bridge the gap between complex enterprise software and seamless user experiences.
                  </p>
                  <p>
                    My philosophy is rooted in simplicity: writing clean, maintainable code, minimizing architectural clutter,
                    and creating automations that genuinely save teams hours of manual effort every week.
                  </p>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="row g-3">
                  {highlights.map((item, idx) => (
                    <div className="col-12" key={idx}>
                      <div className="highlight-card">
                        <div className="highlight-badge">{item.number}</div>
                        <div>
                          <h4 className="highlight-title">{item.title}</h4>
                          <p className="highlight-desc">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding" id="skills">
          <div className="container">
            <div className="section-header-clean">
              <span className="section-kicker">Technical Expertise</span>
              <h2 className="section-title-clean">Skills &amp; Technologies</h2>
              <p className="section-description-clean">
                A structured overview of the platforms, languages, and tools I use to build robust software.
              </p>
            </div>

            <div className="row g-4 mt-2">
              {skillCategories.map((group) => (
                <div className="col-md-6 col-lg-3" key={group.category}>
                  <div className="skill-category-card">
                    <div className="category-header">
                      <h3 className="category-title">{group.category}</h3>
                    </div>
                    <ul className="skill-pill-list">
                      {group.skills.map((skill) => (
                        <li key={skill} className="skill-pill-item">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pill-check-icon">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section-padding bg-light-subtle" id="projects">
          <div className="container">
            <div className="section-header-clean">
              <span className="section-kicker">Portfolio</span>
              <h2 className="section-title-clean">Featured Projects</h2>
              <p className="section-description-clean">
                Selected automation systems, web tools, and data workflows built to solve real-world operational challenges.
              </p>
            </div>

            <div className="row g-4 mt-2">
              {projects.map((project) => (
                <div className="col-md-6" key={project.title}>
                  <div className="clean-project-card" onClick={() => handleOpenProject(project)}>
                    <div className="project-thumbnail-wrapper">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} overview`}
                        className="project-thumbnail"
                        loading="lazy"
                      />
                      <div className="thumbnail-overlay">
                        <span className="view-case-badge">
                          View Details &amp; Workflow
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-1">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="project-card-body">
                      <div className="project-tags-row">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="tag-chip">{tag}</span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="tag-chip tag-more">+{project.tags.length - 3}</span>
                        )}
                      </div>

                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-desc">{project.description}</p>

                      <div className="project-action-link">
                        <span>Explore full details</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="section-padding" id="certificates">
          <div className="container">
            <div className="d-flex flex-column flex-md-row md-align-items-end justify-content-between mb-4">
              <div className="section-header-clean mb-md-0">
                <span className="section-kicker">Credentials</span>
                <h2 className="section-title-clean">Certificates &amp; Training</h2>
                <p className="section-description-clean">
                  Continuous professional education and technical certifications.
                </p>
              </div>

              {/* Slider Control Toolbar */}
              <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
                <button
                  type="button"
                  className="btn-icon-control"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  title={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
                  aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
                >
                  {isAutoPlaying ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  className="btn-icon-control"
                  onClick={prevCertificate}
                  aria-label="Previous certificate"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <span className="cert-counter">
                  {currentCertificateIndex + 1} / {certificates.length}
                </span>
                <button
                  type="button"
                  className="btn-icon-control"
                  onClick={nextCertificate}
                  aria-label="Next certificate"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Showcase Stage */}
            <div
              className="certificate-showcase-box"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <div
                    className="certificate-preview-stage"
                    onClick={() => setSelectedCertificate(currentCertificateIndex)}
                    title="Click to expand full size"
                  >
                    <img
                      key={currentCertificateIndex}
                      src={certificates[currentCertificateIndex].image}
                      alt={certificates[currentCertificateIndex].title}
                      className="cert-main-img"
                    />
                    <div className="zoom-hint">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="certificate-meta-panel">
                    <div className="cert-badge-pill">Verified Credential</div>
                    <h3 className="cert-name-heading">
                      {certificates[currentCertificateIndex].title}
                    </h3>
                    <p className="cert-issuer-text">
                      {certificates[currentCertificateIndex].issuer}
                    </p>

                    <hr className="divider-subtle" />

                    <div className="d-flex align-items-center gap-2 mb-3">
                      <button
                        type="button"
                        className="btn btn-secondary-custom btn-sm w-100"
                        onClick={() => setSelectedCertificate(currentCertificateIndex)}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        Full Resolution
                      </button>
                    </div>

                    <div className="quick-cert-list">
                      <span className="small-text text-muted mb-1 d-block">Quick Select:</span>
                      <div className="quick-cert-pills">
                        {certificates.map((cert, index) => (
                          <button
                            key={index}
                            type="button"
                            className={`quick-pill-btn ${index === currentCertificateIndex ? "active" : ""}`}
                            onClick={() => setCurrentCertificateIndex(index)}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-light-subtle" id="contact">
          <div className="container">
            <div className="contact-box-container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7">
                  <span className="section-kicker">Get in Touch</span>
                  <h2 className="contact-title">Have a project in mind or want to collaborate?</h2>
                  <p className="contact-subtext">
                    Whether you are looking for an enterprise .NET developer, full-cycle automation with n8n,
                    or want to discuss technical roles, feel free to reach out.
                  </p>

                  <div className="email-display-card">
                    <div className="email-info">
                      <span className="email-label">Direct Email</span>
                      <a href={`mailto:${emailAddress}`} className="email-link">
                        {emailAddress}
                      </a>
                    </div>
                    <button
                      type="button"
                      className="btn-copy-email"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="copied-label">Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="social-links-panel">
                    <h3 className="social-links-heading">Professional Links</h3>

                    <div className="social-link-stack">
                      <a
                        href={`mailto:${emailAddress}`}
                        className="social-card-item"
                      >
                        <div className="social-icon-box">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <div className="social-item-text">
                          <strong>Send Email</strong>
                          <span>etiong.dhie07@gmail.com</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>

                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="social-card-item"
                      >
                        <div className="social-icon-box">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                        <div className="social-item-text">
                          <strong>GitHub</strong>
                          <span>Code repositories &amp; open source</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>

                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="social-card-item"
                      >
                        <div className="social-icon-box">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </div>
                        <div className="social-item-text">
                          <strong>LinkedIn</strong>
                          <span>Connect professionally</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="footer-copyright mb-0">
              &copy; {new Date().getFullYear()} Felizardo Etiong Jr. All Rights Reserved.
            </p>
            <div className="d-flex align-items-center gap-4">
              <a href="#home" className="footer-link">
                Back to Top &uarr;
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && !lightboxOpen && (
        <div className="modal-backdrop-custom" onClick={handleCloseProject}>
          <div className="clean-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-bar">
              <div>
                <span className="modal-kicker">Project Spotlight</span>
                <h3 className="modal-title-clean">{selectedProject.title}</h3>
              </div>
              <button
                type="button"
                className="btn-modal-close"
                onClick={handleCloseProject}
                aria-label="Close dialog"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="modal-media-viewport">
              <img
                key={currentImageIndex}
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} slide ${currentImageIndex + 1}`}
                onClick={() => setLightboxOpen(true)}
                className="modal-slide-image"
                title="Click to zoom in full resolution"
              />

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="modal-nav-arrow arrow-left"
                    onClick={prevProjectImage}
                    disabled={currentImageIndex === 0}
                    aria-label="Previous screenshot"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="modal-nav-arrow arrow-right"
                    onClick={nextProjectImage}
                    disabled={currentImageIndex === selectedProject.images.length - 1}
                    aria-label="Next screenshot"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </>
              )}

              <div className="modal-img-counter">
                {currentImageIndex + 1} / {selectedProject.images.length} (Click image to zoom)
              </div>
            </div>

            {/* Thumbnail indicators */}
            {selectedProject.images.length > 1 && (
              <div className="modal-thumbnails-strip">
                {selectedProject.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`thumb-btn ${i === currentImageIndex ? "active" : ""}`}
                    onClick={() => setCurrentImageIndex(i)}
                  >
                    <img src={img} alt={`Thumb ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}

            <div className="modal-body-content">
              <h4 className="detail-section-title">Overview &amp; Architecture</h4>
              <p className="detail-description">{selectedProject.details}</p>

              <div className="detail-tags-section">
                <span className="tags-label">Technologies &amp; Integrations:</span>
                <div className="tags-container">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tag-chip tag-chip-lg">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox for Project Screenshots */}
      {lightboxOpen && selectedProject && (
        <div className="fullscreen-lightbox" onClick={() => setLightboxOpen(false)}>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close fullscreen view"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <img
            src={selectedProject.images[currentImageIndex]}
            alt={`${selectedProject.title} fullscreen`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          {selectedProject.images.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav-arrow arrow-left"
                onClick={prevProjectImage}
                disabled={currentImageIndex === 0}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="lightbox-nav-arrow arrow-right"
                onClick={nextProjectImage}
                disabled={currentImageIndex === selectedProject.images.length - 1}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          <div className="lightbox-footer-info">
            {selectedProject.title} — {currentImageIndex + 1} of {selectedProject.images.length}
          </div>
        </div>
      )}

      {/* Fullscreen Modal for Certificates */}
      {selectedCertificate !== null && (
        <div className="fullscreen-lightbox" onClick={() => setSelectedCertificate(null)}>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={() => setSelectedCertificate(null)}
            aria-label="Close certificate preview"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <img
            src={certificates[selectedCertificate].image}
            alt={certificates[selectedCertificate].title}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="lightbox-nav-arrow arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCertificate((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
            }}
            aria-label="Previous certificate"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="lightbox-nav-arrow arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCertificate((prev) => (prev + 1) % certificates.length);
            }}
            aria-label="Next certificate"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="lightbox-footer-info">
            {certificates[selectedCertificate].title} ({selectedCertificate + 1} of {certificates.length})
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
