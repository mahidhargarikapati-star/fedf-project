import { useState } from "react";
import "./style.css";
import universityLogo from "./assets/image1.png";
import flowDiagram from "./assets/image2.png";

const doctors = [
  { name: "Dr. Sandeep Reddy", specialty: "Cardiology", branch: "Hyderabad" },
  { name: "Dr. Pavani Chandra", specialty: "Neurology", branch: "Vijayawada" },
  { name: "Dr. Lakshmi Devi", specialty: "Pediatrics", branch: "Visakhapatnam" },
  { name: "Dr. Ravi Teja", specialty: "Orthopedics", branch: "Tirupati" },
  { name: "Dr. Srividya Reddy", specialty: "Dermatology", branch: "Warangal" },
  { name: "Dr. Praveen Kumar", specialty: "Oncology", branch: "Nellore" },
  { name: "Dr. Sneha Nandini", specialty: "Psychiatry", branch: "Kurnool" },
  { name: "Dr. Chaitanya Varma", specialty: "Gastroenterology", branch: "Kadapa" },
];

const branches = [
  { city: "Hyderabad", address: "Gachibowli, Hyderabad - 500032", phone: "+91-40-2313-1000" },
  { city: "Vijayawada", address: "MG Road, Vijayawada - 520010", phone: "+91-866-123-4000" },
  { city: "Visakhapatnam", address: "MVP Colony, Visakhapatnam - 530017", phone: "+91-891-234-5000" },
  { city: "Tirupati", address: "Near Alipiri, Tirupati - 517501", phone: "+91-877-765-6000" },
  { city: "Warangal", address: "Kazipet Road, Warangal - 506002", phone: "+91-871-123-7000" },
];

const modules = [
  {
    icon: "P",
    iconClass: "patient",
    title: "Patient",
    description:
      "Access prescriptions, request refills, track medication history, and receive reminders.",
  },
  {
    icon: "D",
    iconClass: "doctor",
    title: "Doctor",
    description:
      "Create prescriptions, validate dosage details, manage patients, and approve requests.",
  },
  {
    icon: "Rx",
    iconClass: "pharmacy",
    title: "Pharmacy",
    description:
      "Receive assigned prescriptions, verify medicines, and support faster dispensing.",
  },
  {
    icon: "A",
    iconClass: "admin",
    title: "Admin",
    description:
      "Manage users, doctors, patients, pharmacies, drugs, settings, and system activity.",
  },
];

const objectives = [
  {
    title: "Digitize prescription management",
    description: "Improve storage, retrieval, accessibility, and record handling.",
  },
  {
    title: "Reduce medication errors",
    description:
      "Use digital prescriptions and dosage validation to prevent manual mistakes.",
  },
  {
    title: "Maintain centralized records",
    description:
      "Give authorized users fast access to prescription history and treatment context.",
  },
  {
    title: "Improve communication",
    description:
      "Share prescription information smoothly among doctors, patients, and pharmacies.",
  },
];

const outcomes = [
  "Digital prescription management",
  "Reduced medication errors",
  "Improved prescription accessibility",
  "Efficient refill management",
  "Enhanced pharmacy coordination",
  "Secure digital records",
];

export default function PrescriptionManagement() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Prescription Management System home">
          <img src={universityLogo} alt="KL University logo" />
          <span>Prescription Management System</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav${menuOpen ? " open" : ""}`}>
          <a href="#overview" onClick={closeMenu}>Overview</a>
          <a href="#modules" onClick={closeMenu}>Modules</a>
          <a href="#doctors" onClick={closeMenu}>Doctors</a>
          <a href="#workflow" onClick={closeMenu}>Workflow</a>
          <a href="#outcomes" onClick={closeMenu}>Outcomes</a>
          <a className="nav-pill" href="#future" onClick={closeMenu}>Future Scope</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Digital healthcare project</p>
            <h1>Prescription Management System</h1>
            <p className="hero-text">
              A secure web platform for doctors, patients, pharmacies, and
              administrators to create, validate, store, share, and track
              prescriptions without the risks of paper-based records.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#workflow">View Flow</a>
              <a className="button ghost" href="#modules">Explore Modules</a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Prescription dashboard preview">
            <div className="panel-top">
              <span className="status-dot" />
              <span>Live prescription queue</span>
              <strong>Secure</strong>
            </div>

            <div className="metric-grid">
              <article>
                <span>Medication errors</span>
                <strong>Reduced</strong>
              </article>
              <article>
                <span>Refill requests</span>
                <strong>Online</strong>
              </article>
              <article>
                <span>Records</span>
                <strong>Centralized</strong>
              </article>
            </div>

            <div className="rx-card">
              <div>
                <p>Patient</p>
                <strong>Digital Prescription #034</strong>
              </div>
              <span>Validated</span>
            </div>

            <div className="medicine-list">
              <div><span />Dosage validation</div>
              <div><span />Pharmacy assignment</div>
              <div><span />History and PDF export</div>
            </div>
          </div>
        </section>

        <section className="section overview" id="overview">
          <div className="section-heading">
            <p className="eyebrow">Project abstract</p>
            <h2>Built to make prescriptions safer, faster, and easier to access.</h2>
          </div>
          <p className="lead">
            The system digitizes the complete prescription lifecycle. Doctors
            generate readable prescriptions, patients access medication
            history, pharmacies receive prescriptions quickly, and secure
            access controls protect patient information.
          </p>

          <div className="stats">
            <article><strong>4</strong><span>User roles</span></article>
            <article><strong>6</strong><span>Core services</span></article>
            <article><strong>100</strong><span>Paperless focus</span></article>
          </div>
        </section>

        <section className="section problem">
          <div className="problem-copy">
            <p className="eyebrow">Problem statement</p>
            <h2>Manual prescriptions slow down high-volume hospital care.</h2>
            <p>
              Paper prescriptions can cause illegible dosage instructions,
              lost records, delayed pharmacy communication, and weaker
              medication-adherence tracking.
            </p>
          </div>
          <div className="problem-list">
            <span>Illegible handwriting</span>
            <span>Incorrect dosage interpretation</span>
            <span>Communication delays</span>
            <span>Record maintenance issues</span>
          </div>
        </section>

        <section className="section modules" id="modules">
          <div className="section-heading">
            <p className="eyebrow">Frontend web pages</p>
            <h2>Role-based modules for every stakeholder.</h2>
          </div>
          <div className="module-grid">
            {modules.map((module) => (
              <article className="module-card" key={module.title}>
                <div className={`module-icon ${module.iconClass}`}>
                  {module.icon}
                </div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section doctors" id="doctors">
          <div className="section-heading">
            <p className="eyebrow">Top Telugu specialists</p>
            <h2>Best doctors from Andhra Pradesh and Telangana.</h2>
          </div>
          <div className="doctor-grid">
            {doctors.map((doctor) => (
              <article className="doctor-card" key={doctor.name}>
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
                <span>{doctor.branch}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section workflow" id="workflow">
          <div className="section-heading">
            <p className="eyebrow">Project flow diagram</p>
            <h2>From patient visit to pharmacy coordination.</h2>
          </div>
          <figure className="flow-figure">
            <img
              src={flowDiagram}
              alt="Prescription Management System project flow diagram"
            />
          </figure>
        </section>

        <section className="section objectives">
          <div className="section-heading">
            <p className="eyebrow">Objectives</p>
            <h2>Clear goals with direct healthcare value.</h2>
          </div>
          <div className="objective-list">
            {objectives.map((objective, index) => (
              <article key={objective.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{objective.title}</h3>
                <p>{objective.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section outcomes" id="outcomes">
          <div className="section-heading">
            <p className="eyebrow">Expected outcomes</p>
            <h2>What the proposed work delivers.</h2>
          </div>
          <div className="outcome-grid">
            {outcomes.map((outcome) => (
              <article key={outcome}>{outcome}</article>
            ))}
          </div>
        </section>

        <section className="section future" id="future">
          <div>
            <p className="eyebrow">Conclusion and future scope</p>
            <h2>A foundation for smarter digital healthcare.</h2>
          </div>
          <p>
            The system supports electronic prescriptions, drug search, dosage
            validation, refill requests, history, notifications, and adherence
            tracking. Future enhancements can include AI, cloud computing,
            mobile applications, and telemedicine.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>Project by G.S.S Gyanadeep and Garikapati Mahidhar | Team 34</p>
        <span>Guided by Dr. Niramala Jyothi</span>
      </footer>
    </>
  );
}
