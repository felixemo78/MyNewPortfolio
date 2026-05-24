import { useEffect, useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  const skills = [
    "ASP.NET",
    "Blazor",
    "C# .NET",
    "SQL Server",
    "REST API",
    "n8n Automation",
    "AI Agents",
    "JavaScript",
  ];

  const certificates = [
    {
      title: "Certificate 1",
      issuer: "Training / Course Provider",
      image: "/images/certificate_1.jpg",
    },
    {
      title: "Certificate 2",
      issuer: "Training / Course Provider",
      image: "/images/certificate_2.jpg",
    },
    {
      title: "Certificate 3",
      issuer: "Training / Course Provider",
      image: "/images/certificate_3.jpg",
    },
    {
      title: "Certificate 4",
      issuer: "Training / Course Provider",
      image: "/images/certificate_4.jpg",
    },
    {
      title: "Certificate 5",
      issuer: "Training / Course Provider",
      image: "/images/certificate_5.jpg",
    },
    {
      title: "Certificate 6",
      issuer: "Training / Course Provider",
      image: "/images/certificate_6.jpeg",
    },
    {
      title: "Certificate 7",
      issuer: "Training / Course Provider",
      image: "/images/certificate_7.jpg",
    },
    {
      title: "Certificate 8",
      issuer: "Training / Course Provider",
      image: "/images/certificate_8.jpg",
    },
    {
      title: "Certificate 9",
      issuer: "Training / Course Provider",
      image: "/images/certificate_9.jpg",
    },
    {
      title: "Certificate 10",
      issuer: "Training / Course Provider",
      image: "/images/certificate_10.jpg",
    },
    {
      title: "Certificate 11",
      issuer: "Training / Course Provider",
      image: "/images/certificate_11.jpg",
    },
    {
      title: "Certificate 12",
      issuer: "Training / Course Provider",
      image: "/images/certificate_12.jpg",
    },
    {
      title: "Certificate 13",
      issuer: "Training / Course Provider",
      image: "/images/certificate_13.jpg",
    },
    {
      title: "Certificate 14",
      issuer: "Training / Course Provider",
      image: "/images/certificate_14.jpg",
    },
    {
      title: "Certificate 15",
      issuer: "Training / Course Provider",
      image: "/images/certificate_15.jpg",
    },
    {
      title: "Certificate 16",
      issuer: "Training / Course Provider",
      image: "/images/certificate_16.jpg",
    },
    {
      title: "Certificate 17",
      issuer: "Training / Course Provider",
      image: "/images/certificate_17.jpg",
    },
    {
      title: "Certificate 18",
      issuer: "Training / Course Provider",
      image: "/images/certificate_18.jpg",
    },
    {
      title: "Certificate 19",
      issuer: "Training / Course Provider",
      image: "/images/certificate_19.jpg",
    },
    {
      title: "Certificate 20",
      issuer: "Training / Course Provider",
      image: "/images/certificate_20.jpg",
    },
    {
      title: "Certificate 21",
      issuer: "Training / Course Provider",
      image: "/images/certificate_21.jpg",
    },
    {
      title: "Certificate 22",
      issuer: "Training / Course Provider",
      image: "/images/certificate_22.jpg",
    },
    {
      title: "Certificate 23",
      issuer: "Training / Course Provider",
      image: "/images/certificate_23.jpg",
    },
    {
      title: "Certificate 24",
      issuer: "Training / Course Provider",
      image: "/images/certificate_24.png",
    },

  ];

  const projects = [
    {
      title: "AI Booking Chatbot",
      description: "AI-powered booking system with payment verification and workflow automation.",
      images: [
        "/images/chatbot_workflow.png",
        "/images/chatbot_output1.png",
        "/images/chatbot_output2.png",
      ],
      tags: ["n8n", "AI Agents", "Telegram", "Google Sheets", "Google Calendar", "Google Drive"],
      details:
        "A smart chatbot that handles end-to-end booking flows, from slot selection to payment verification, using AI agents and n8n automation workflows.",
    },
    {
      title: "Email Labeling AI Agent",
      description: "Automatically classifies and labels emails using AI and n8n.",
      images: ["/images/email_workflow.png", "/images/email_output.png"],
      tags: ["n8n", "AI Agents", "Gmail"],
      details:
        "An intelligent agent that reads incoming emails, classifies them by intent and urgency, and applies labels automatically to reduce manual inbox management.",
    },
    {
      title: "PHIVOLCS Earthquake Scraper",
      description: "Automated earthquake scraper with Facebook auto-post integration.",
      images: ["/images/quake_workflow.png", "/images/quake_output.png"],
      tags: ["JavaScript", "n8n", "REST API"],
      details:
        "Scrapes PHIVOLCS earthquake bulletins on a schedule and automatically posts structured updates to a Facebook page.",
    },
    {
      title: "Weekly Campaign Automation Report",
      description: "Automated weekly campaign performance report with data visualization.",
      images: ["/images/report_workflow.png", "/images/report_output.png"],
      tags: ["n8n", "Google Sheet", "Slack"],
      details:
        "Pulls campaign metrics from multiple sources every week, generates visual summaries, and delivers formatted reports to stakeholders.",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const certificateTimer = setInterval(() => {
      setCurrentCertificateIndex((index) => (index + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(certificateTimer);
  }, [certificates.length]);

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setLightboxOpen(false);
  };

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setLightboxOpen(false);
  };

  const goToPreviousImage = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((index) => Math.max(index - 1, 0));
  };

  const goToNextImage = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((index) => Math.min(index + 1, selectedProject.images.length - 1));
  };

  const goToPreviousCertificate = () => {
    setCurrentCertificateIndex((index) => (index === 0 ? certificates.length - 1 : index - 1));
  };

  const goToNextCertificate = () => {
    setCurrentCertificateIndex((index) => (index + 1) % certificates.length);
  };

  return (
    <>
      <nav className="site-nav navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            FE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["About", "Skills", "Certificates", "Projects", "Contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <p className="eyebrow">Full Stack .NET Developer</p>
                <h1 className="hero-title">FD Etiong builds clean business systems and useful AI automations.</h1>
                <p className="hero-description">
                  I design enterprise web apps, REST APIs, workflow automations, and AI-assisted tools using ASP.NET,
                  Blazor, SQL Server, JavaScript, and n8n.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn-modern btn-primary-modern">
                    View Projects
                  </a>
                  <a href="mailto:etiong.dhie07@gmail.com" className="btn-modern btn-secondary-modern">
                    Contact Me
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="portrait-wrap">
                  <img src="/images/Profile.png" alt="FD Etiong" className="profile-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">About</p>
              <h2 className="section-title">Practical software with calm, reliable automation.</h2>
            </div>
            <div className="row justify-content-end">
              <div className="col-lg-8">
                <p className="about-text">
                  I specialize in ASP.NET, Blazor, C# .NET, SQL Server, REST APIs, and AI automation using n8n.
                  My work focuses on scalable business applications and workflow systems that reduce repetitive work
                  without making the experience feel complicated.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Skills</p>
              <h2 className="section-title">Tools I use to ship dependable products.</h2>
            </div>
            <div className="skill-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className="certificates-section" id="certificates">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Certificates</p>
              <h2 className="section-title">Highlighted certificates and completed trainings.</h2>
            </div>

            <div className="certificate-slider-card">
              <button
                type="button"
                className="icon-button certificate-slide-button"
                onClick={goToPreviousCertificate}
                aria-label="Previous certificate"
              >
                &lsaquo;
              </button>

              <div className="certificate-display">
                <div className="certificate-image-frame">
                  <img
                    key={currentCertificateIndex}
                    src={certificates[currentCertificateIndex].image}
                    alt={certificates[currentCertificateIndex].title}
                    className="certificate-image"
                  />
                  <span className="image-count">
                    {currentCertificateIndex + 1} / {certificates.length}
                  </span>
                </div>

                <div className="certificate-info">
                  <p className="eyebrow">Auto Slider</p>
                  <h3>{certificates[currentCertificateIndex].title}</h3>
                  <p>{certificates[currentCertificateIndex].issuer}</p>
                </div>
              </div>

              <button
                type="button"
                className="icon-button certificate-slide-button"
                onClick={goToNextCertificate}
                aria-label="Next certificate"
              >
                &rsaquo;
              </button>
            </div>

            <div className="certificate-dots">
              {certificates.map((certificate, index) => (
                <button
                  key={certificate.title}
                  type="button"
                  className={index === currentCertificateIndex ? "active" : ""}
                  onClick={() => setCurrentCertificateIndex(index)}
                  aria-label={`View ${certificate.title}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Projects</p>
              <h2 className="section-title">Selected automation and application work.</h2>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <button key={project.title} className="project-card" onClick={() => handleOpenProject(project)}>
                  <img src={project.images[0]} alt={`${project.title} preview`} className="project-preview" />
                  <span className="project-content">
                    <span className="project-title">{project.title}</span>
                    <span className="project-description">{project.description}</span>
                    <span className="project-meta">View details &rarr;</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let&apos;s build something useful.</h2>
            <div className="contact-actions">
              <a href="mailto:etiong.dhie07@gmail.com" className="btn-modern btn-primary-modern">
                Email Me
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-modern btn-secondary-modern">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-modern btn-secondary-modern">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2026 Felizardo Etiong Jr. All Rights Reserved.</p>
        </div>
      </footer>

      {selectedProject && !lightboxOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-media">
              <img
                key={currentImageIndex}
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                onClick={() => setLightboxOpen(true)}
              />
              <button className="icon-button close-button" onClick={handleClose} aria-label="Close modal">
                &times;
              </button>
              {currentImageIndex > 0 && (
                <button className="icon-button nav-button previous-button" onClick={goToPreviousImage} aria-label="Previous image">
                  &lsaquo;
                </button>
              )}
              {currentImageIndex < selectedProject.images.length - 1 && (
                <button className="icon-button nav-button next-button" onClick={goToNextImage} aria-label="Next image">
                  &rsaquo;
                </button>
              )}
              <span className="image-count">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </span>
            </div>

            <div className="modal-content">
              <p className="eyebrow">Project</p>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.details}</p>
              <div className="tag-list">
                {selectedProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {lightboxOpen && selectedProject && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <img
            src={selectedProject.images[currentImageIndex]}
            alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
          />
          <button className="icon-button close-button" onClick={() => setLightboxOpen(false)} aria-label="Close lightbox">
            &times;
          </button>
          {currentImageIndex > 0 && (
            <button className="icon-button nav-button previous-button" onClick={goToPreviousImage} aria-label="Previous image">
              &lsaquo;
            </button>
          )}
          {currentImageIndex < selectedProject.images.length - 1 && (
            <button className="icon-button nav-button next-button" onClick={goToNextImage} aria-label="Next image">
              &rsaquo;
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default App;
