
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import "./index.css";

const skillGroups = [
  {
    title: "Web Development",
    icon: "⌘",
    description: "Building functional digital products",
    items: [
      "HTML", "CSS", "JavaScript", "PHP", "Laravel",
      "React (dasar)", "MySQL / MariaDB", "SQLite",
      "Bootstrap", "CRUD", "REST API (dasar)",
      "Responsive Web Design", "Git & GitHub",
      "Debugging dan Problem Solving",
    ],
  },
  {
    title: "Microsoft Office",
    icon: "▤",
    description: "Documents & administration",
    items: [
      "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint",
      "Dokumen dan surat resmi", "Tabel dan formulir",
      "Mail Merge", "Pengolahan data",
    ],
  },
  {
    title: "Microsoft Excel",
    icon: "▦",
    description: "Data processing & analysis",
    items: [
      "SUM, AVERAGE, MAX, MIN, COUNT",
      "IF, AND, OR", "VLOOKUP, HLOOKUP, XLOOKUP",
      "LEFT, RIGHT, MID", "Sort & Filter",
      "Conditional Formatting", "Merge Cells",
      "Referensi sel", "Chart",
    ],
  },
  {
    title: "UI/UX & Design",
    icon: "✳",
    description: "Designing digital interfaces",
    items: [
      "Figma (dasar)", "UI Website", "Wireframe",
      "Desain antarmuka", "Canva (dasar)",
    ],
  },
  {
    title: "Soft Skills",
    icon: "◎",
    description: "How I work and collaborate",
    items: [
      "Disiplin dan bertanggung jawab",
      "Cepat beradaptasi",
      "Kemauan belajar tinggi",
      "Kerja individu maupun tim",
      "Manajemen waktu",
      "Teliti dalam bekerja",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Pelacak Langganan",
    category: "FULL-STACK WEB APPLICATION",
    status: "Personal Project",
    description:
      "Aplikasi web untuk mencatat dan mengelola berbagai langganan seperti Netflix, Spotify, domain, dan hosting. Dilengkapi perhitungan total pengeluaran bulanan, pengingat tagihan yang jatuh tempo dalam 7 hari ke depan, serta pembaruan tanggal tagihan otomatis menggunakan Laravel Scheduler.",
    tech: ["Laravel 13", "PHP 8.4+", "SQLite", "Blade", "JavaScript", "Vite"],
    image: "/images/pelacak-langganan.png",
    link: "https://github.com/alawialthaf63-droid/pelacak-langganan",
    linkLabel: "View Source Code",
  },
  {
    number: "02",
    title: "Sistem Manajemen Aset",
    category: "WEB DEVELOPMENT",
    status: "Internship Project",
    description:
      "Sistem berbasis web untuk mengelola data aset, menampilkan dashboard, dan membantu proses pelaporan aset selama Praktik Kerja Lapangan di LAZ Graha Dhuafa Indonesia.",
    tech: ["Laravel 12", "PHP", "HTML", "CSS", "JavaScript", "MySQL", "Vite"],
    link: "#contact",
    linkLabel: "Discuss Project",
  },
];

const experiences = [
  {
    period: "2026",
    type: "PERSONAL PROJECT",
    title: "Pelacak Langganan",
    company: "Independent Project / Self-Directed Learning",
    description:
      "Mengembangkan aplikasi web Pelacak Langganan menggunakan Laravel 13, PHP 8.4+, SQLite, dan Blade. Project ini dibuat untuk mempelajari pengembangan aplikasi full-stack, pengelolaan database, implementasi fitur CRUD, perhitungan pengeluaran bulanan, serta otomatisasi proses bisnis menggunakan Laravel Scheduler.",
    result:
      "Berhasil membangun aplikasi pengelolaan langganan yang dapat mencatat data layanan, menghitung estimasi pengeluaran bulanan, memberikan peringatan tagihan dalam 7 hari ke depan, dan memperbarui tanggal tagihan secara otomatis.",
  },
  {
    period: "2025",
    type: "INTERNSHIP",
    title: "Praktik Kerja Lapangan",
    company: "LAZ Graha Dhuafa Indonesia",
    description:
      "Berkontribusi dalam pengembangan website Sistem Manajemen Aset menggunakan Laravel, PHP, MySQL, HTML, CSS, dan JavaScript. Mengembangkan dashboard admin, fitur login, pengelolaan data aset, serta laporan aset. Juga membuat desain UI menggunakan Figma, melakukan pengujian fitur, dan memperbaiki bug.",
    result:
      "Mengembangkan sistem manajemen aset berbasis web yang membantu proses pencatatan, pengelolaan, dan pemantauan aset menjadi lebih terstruktur.",
  },
  {
    period: "2026",
    type: "TRAINING",
    title: "Pelatihan Software Office",
    company: "BBPVP Bandung",
    description:
      "Menyelesaikan pelatihan Software Office dengan mempelajari Microsoft Word, Excel, dan PowerPoint untuk mendukung pekerjaan administrasi. Berlatih membuat dokumen formal, mengolah data menggunakan rumus Excel, serta membuat presentasi yang terstruktur.",
    result:
      "Meningkatkan kemampuan dalam mengolah data, membuat dokumen administrasi, menggunakan rumus Excel, serta menyusun presentasi secara rapi dan profesional.",
  },
];

const roles = [
  "Junior Web Developer",
  "Laravel Developer",
  "Software Developer",
];

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
];

const EMAIL = "alawialthaf63@gmail.com";
const GITHUB_URL = "https://github.com/alawialthaf63-droid";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/althaf-alawi-242207392/";

const WHATSAPP_URL = `https://wa.me/6289669582943?text=${encodeURIComponent(
  "Halo Althaf, saya melihat portfolio kamu dan ingin berdiskusi."
)}`;

// SVG icons: tidak membutuhkan package tambahan.
function SocialIcon({ type }) {
  const common = {
    width: 21,
    height: 21,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  };

  switch (type) {
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19.04 18.5h-2.97v-4.62c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.78 1.2-1.78 2.43v4.7H9.79V9h2.85v1.3h.04c.4-.75 1.37-1.53 2.82-1.53 3.01 0 3.57 1.98 3.57 4.55v5.18Z" />
        </svg>
      );

    case "github":
      return (
        <svg {...common}>
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.5 3.35 1.91.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M12.04 2a9.85 9.85 0 0 0-8.46 14.9L2.2 22l5.23-1.37A9.85 9.85 0 1 0 12.04 2Zm0 17.9a8.03 8.03 0 0 1-4.1-1.12l-.29-.17-3.1.81.83-3.02-.19-.31A8.05 8.05 0 1 1 12.04 19.9Zm4.42-6.03c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      );

    case "email":
      return (
        <svg {...common}>
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 4.25-7.02 4.68a1.05 1.05 0 0 1-1.16 0L4.4 8.25a.75.75 0 1 1 .83-1.25L12 11.55l6.77-4.55a.75.75 0 1 1 .83 1.25Z" />
        </svg>
      );

    default:
      return null;
  }
}

const socialLinks = [
  {
    name: "LinkedIn",
    type: "linkedin",
    url: LINKEDIN_URL,
    external: true,
  },
  {
    name: "GitHub",
    type: "github",
    url: GITHUB_URL,
    external: true,
  },
  {
    name: "WhatsApp",
    type: "whatsapp",
    url: WHATSAPP_URL,
    external: true,
  },
  {
    name: "Email",
    type: "email",
    url: `mailto:${EMAIL}`,
    external: false,
  },
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          className={`social-icon-link social-${social.type}`}
          href={social.url}
          aria-label={social.name}
          title={social.name}
          target={social.external ? "_blank" : undefined}
          rel={social.external ? "noopener noreferrer" : undefined}
        >
          <SocialIcon type={social.type} />
          <span className="social-tooltip">{social.name}</span>
        </a>
      ))}
    </div>
  );
}

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.15, 0.3, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="grain" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          althaf<span>.</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href="#contact">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="availability">
              <span className="availability-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M ALTHAF</p>

            <h1>
              Creating
              <br />
              <span className="outline-text">digital</span>{" "}
              <span className="lime-text">things.</span>
            </h1>

            <div className="role-line">
              <span className="role-symbol">✳</span>
              <span key={roleIndex} className="role-text">
                {roles[roleIndex]}
              </span>
              <span className="typing-cursor" />
            </div>

            <p className="intro">
              Lulusan Rekayasa Perangkat Lunak yang tertarik dengan
              pengembangan web. Saya senang membangun aplikasi yang
              fungsional, mempelajari teknologi baru, dan mengembangkan
              kemampuan melalui proyek nyata.
            </p>

            <div className="hero-meta">
              <span>⌖ Bandung, Indonesia</span>
              <span className="meta-divider" />
              <span>SMK Negeri 4 Bandung · RPL 2026</span>
            </div>

            <div className="actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a className="text-link" href="#about">
                More about me <span>↓</span>
              </a>
            </div>

            {/* SOCIAL MEDIA ICONS - HERO */}
            <SocialLinks className="hero-social-links" />
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="portrait-frame">
              <div className="portrait-topline">
                <span>PORTFOLIO / 2026</span>
                <span>01 — 05</span>
              </div>

              <img
                className="portrait-image"
                src="/images/althaf-portrait.jpeg"
                alt="Portrait of Althaf Alawi"
              />

              <div className="portrait-caption">
                <span>THE PERSON BEHIND THE CODE</span>
                <strong>Althaf Alawi.</strong>
              </div>
            </div>

            <div className="visual-sticker sticker-one">
              <span>✳</span>
              CREATIVE
              <br />
              DEVELOPER
            </div>

            <div className="visual-sticker sticker-two">
              <span className="sticker-dot" />
              ALWAYS
              <br />
              LEARNING
            </div>

            <span className="visual-index">BASED IN BANDUNG, ID</span>
          </motion.div>

          <div className="hero-bottom-note">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
          </div>
        </section>

        {/* STATS */}
        <section className="stats-strip" aria-label="Portfolio highlights">
          <div className="stat-item">
            <strong>02<span>+</span></strong>
            <span>Featured Projects</span>
          </div>
          <div className="stat-item">
            <strong>03</strong>
            <span>Experience & Learning</span>
          </div>
          <div className="stat-item">
            <strong>2026</strong>
            <span>RPL Graduate</span>
          </div>
          <div className="stat-item">
            <strong>∞</strong>
            <span>Curiosity to Learn</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / GET TO KNOW ME</p>
            <h2>
              Not just code.
              <br />
              <span className="lime-text">A little about me.</span>
            </h2>
            <p className="section-description">
              Sedikit cerita tentang perjalanan dan ketertarikan saya
              di dunia teknologi.
            </p>
          </div>

          <div className="about-card">
            <div className="about-mark">
              <span>A.</span>
              <small>DEVELOPER<br />BASED IN ID</small>
            </div>

            <div className="about-copy">
              <span className="about-label">A LITTLE INTRODUCTION</span>
              <h3>Turning ideas into useful digital experiences.</h3>

              <p>
                Halo! Saya seorang lulusan SMK Negeri 4 Bandung jurusan
                Rekayasa Perangkat Lunak (RPL) tahun 2026 yang memiliki
                minat di bidang teknologi, khususnya Web Development dan
                Software Engineering.
              </p>
              <p>
                Saya memiliki pengalaman PKL sebagai Web Developer di LAZ
                Graha Dhuafa Indonesia, dengan mengerjakan pengembangan
                website, dashboard admin, dan sistem manajemen aset
                menggunakan Laravel, PHP, HTML, CSS, JavaScript, serta
                database MySQL.
              </p>
              <p>
                Selain itu, saya telah menyelesaikan pelatihan Software
                Office di BBPVP Bandung untuk meningkatkan kemampuan dalam
                pengolahan data dan administrasi. Saya juga terus
                mengembangkan kemampuan di bidang pemrograman, mempelajari
                teknologi baru, dan membangun proyek untuk memperkuat
                portofolio.
              </p>
              <p>
                Saya adalah pribadi yang bertanggung jawab, mudah
                beradaptasi, dan memiliki semangat belajar yang tinggi.
                Saya siap terus berkembang, menghadapi tantangan baru, dan
                memberikan kontribusi melalui solusi teknologi yang
                bermanfaat.
              </p>

              <div className="about-tags">
                <span>Problem Solver</span>
                <span>Continuous Learner</span>
                <span>Web Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / WHAT I WORK WITH</p>
            <h2>
              Tools of
              <br />
              <span className="lime-text">my trade.</span>
            </h2>
            <p className="section-description">
              Teknologi dan kemampuan yang pernah saya pelajari dan gunakan
              dalam latihan maupun proyek.
            </p>
          </div>

          <div className="skills">
            {skillGroups.map((group, index) => (
              <motion.div
                className="skill-group"
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="skill-heading">
                  <span className="skill-icon">{group.icon}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>

                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li className="skill" key={item}>
                      <span>↗</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>
              Things I've
              <br />
              <span className="lime-text">put together.</span>
            </h2>
            <p className="section-description">
              Beberapa proyek yang menggambarkan proses belajar,
              eksplorasi teknologi, dan kemampuan pengembangan aplikasi.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <motion.article
                className="project"
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.55 }}
              >
                <div className="project-visual">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Screenshot ${project.title}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span>⌘</span>
                      <small>ASSET MANAGEMENT SYSTEM</small>
                    </div>
                  )}
                  <span className="project-visual-number">
                    PROJECT / {project.number}
                  </span>
                </div>

                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  <span className="project-status">
                    <span className="status-dot" />
                    {project.status}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  className="project-action"
                  href={project.link}
                  target={
                    project.link.startsWith("https://") ? "_blank" : undefined
                  }
                  rel={
                    project.link.startsWith("https://")
                      ? "noreferrer"
                      : undefined
                  }
                >
                  {project.linkLabel} <span>↗</span>
                </a>
              </motion.article>
            ))}
          </div>

          <p className="small-note">
            More projects and experiments will be added as I continue learning.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">04 / MY JOURNEY</p>
            <h2>
              The road
              <br />
              <span className="lime-text">so far.</span>
            </h2>
            <p className="section-description">
              Pengalaman, proyek mandiri, dan pelatihan yang menjadi bagian
              dari perjalanan saya.
            </p>
          </div>

          <div className="timeline">
            {experiences.map((item, index) => (
              <motion.article
                className="timeline-item"
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="timeline-marker"><span /></div>
                <div className="timeline-period">{item.period}</div>

                <div className="timeline-content">
                  <span className="timeline-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.description}</p>

                  {item.result && (
                    <div className="timeline-result">
                      <strong>Hasil yang dicapai</strong>
                      <p>{item.result}</p>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">05 / HAVE A PROJECT IN MIND?</p>
            <span className="contact-decoration">LET'S TALK</span>

            <h2>
              Have an idea?
              <br />
              <span className="lime-text">Let's make it real.</span>
            </h2>

            <p className="contact-description">
              Saya terbuka untuk kesempatan kerja, kolaborasi, dan belajar
              hal baru di bidang teknologi. Mari terhubung dan berdiskusi!
            </p>

            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${EMAIL}`}>
                Send Me an Email <span>↗</span>
              </a>

              <a
                className="button button-secondary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Me ↗
              </a>

              <a
                className="button button-secondary"
                href="/cv-althaf.pdf"
                download="CV-Althaf-Alawi.pdf"
              >
                Download CV ↓
              </a>
            </div>

            {/* SOCIAL MEDIA ICONS - CONTACT */}
            <SocialLinks className="contact-social-links" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">althaf<span>.</span></a>
        <p>Designed & built with React.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;