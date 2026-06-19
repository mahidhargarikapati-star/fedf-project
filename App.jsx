import { useState } from 'react';
import universityLogo from '../assets/image1.png';
import flowDiagram from '../assets/image2.png';

const doctors = [
  { name: 'Dr. Sandeep Reddy', specialty: 'Cardiology', branch: 'Hyderabad' },
  { name: 'Dr. Pavani Chandra', specialty: 'Neurology', branch: 'Vijayawada' },
  { name: 'Dr. Lakshmi Devi', specialty: 'Pediatrics', branch: 'Visakhapatnam' },
  { name: 'Dr. Ravi Teja', specialty: 'Orthopedics', branch: 'Tirupati' },
  { name: 'Dr. Srividya Reddy', specialty: 'Dermatology', branch: 'Warangal' },
  { name: 'Dr. Praveen Kumar', specialty: 'Oncology', branch: 'Nellore' },
  { name: 'Dr. Sneha Nandini', specialty: 'Psychiatry', branch: 'Kurnool' },
  { name: 'Dr. Chaitanya Varma', specialty: 'Gastroenterology', branch: 'Kadapa' },
];

const modules = [
  { icon: 'P', iconClass: 'patient', title: 'Patient', description: 'Access prescriptions, request refills, track medication history, and receive reminders.' },
  { icon: 'D', iconClass: 'doctor', title: 'Doctor', description: 'Create prescriptions, validate dosage details, manage patients, and approve requests.' },
  { icon: 'Rx', iconClass: 'pharmacy', title: 'Pharmacy', description: 'Receive assigned prescriptions, verify medicines, and support faster dispensing.' },
  { icon: 'A', iconClass: 'admin', title: 'Admin', description: 'Manage users, doctors, patients, pharmacies, drugs, settings, and system activity.' },
];

const objectives = [
  { title: 'Digitize prescription management', description: 'Improve storage, retrieval, accessibility, and record handling.' },
  { title: 'Reduce medication errors', description: 'Use digital prescriptions and dosage validation to prevent manual mistakes.' },
  { title: 'Maintain centralized records', description: 'Give authorized users fast access to prescription history and treatment context.' },
  { title: 'Improve communication', description: 'Share prescription information smoothly among doctors, patients, and pharmacies.' },
];

const outcomes = [
  'Digital prescription management',
  'Reduced medication errors',
  'Improved prescription accessibility',
  'Efficient refill management',
  'Enhanced pharmacy coordination',
  'Secure digital records',
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const closeMenu = () => setMenuOpen(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const doctorId = event.target.doctorId.value.trim();
    const doctorPassword = event.target.doctorPassword.value.trim();
    const validId = 'DRS2024';
    const validPassword = 'Vizag@123';

    if (doctorId === validId && doctorPassword === validPassword) {
      setLoginMessage('Login successful. Access patient status below.');
      document.getElementById('status')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setLoginMessage('Invalid doctor ID or password. Please check and try again.');
    }
  };

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

        <nav className={`site-nav${menuOpen ? ' open' : ''}`}>
          <a href="#overview" onClick={closeMenu}>Overview</a>
          <a href="#modules" onClick={closeMenu}>Services</a>
          <a href="#doctors" onClick={closeMenu}>Doctors</a>
          <a href="#login" onClick={closeMenu}>Doctor Login</a>
          <a href="#status" onClick={closeMenu}>Patient Status</a>
          <a className="nav-pill" href="#future" onClick={closeMenu}>Emergency Care</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Official branch portal</p>
            <h1>Apollo Hospital Vizag Branch</h1>
            <p className="hero-text">
              A secure portal for doctors to login, manage patient recovery status after surgery,
              assign medication and observation notes, and track accident, trauma, and injury cases.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#login">Doctor Login</a>
              <a className="button ghost" href="#status">Patient Status</a>
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
            <p className="eyebrow">Branch overview</p>
            <h2>Official Vizag branch emergency and surgical care.</h2>
          </div>
          <p className="lead">
            The Vizag branch portal helps doctors manage post-surgery recovery, monitor patient status, and
            coordinate medication plans for accident, trauma, and injury cases.
          </p>

          <div className="stats">
            <article>
              <strong>24</strong>
              <span>Hour emergency care</span>
            </article>
            <article>
              <strong>120+</strong>
              <span>Surgical recoveries per month</span>
            </article>
            <article>
              <strong>8</strong>
              <span>Specialist doctors on duty</span>
            </article>
          </div>
        </section>

        <section className="section modules" id="modules">
          <div className="section-heading">
            <p className="eyebrow">Branch services</p>
            <h2>Clinical services offered at the Vizag branch.</h2>
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
            <p className="eyebrow">Best Telugu doctors</p>
            <h2>Top specialists from Andhra Pradesh and Telangana.</h2>
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

        <section className="section login" id="login">
          <div className="section-heading">
            <p className="eyebrow">Doctor login</p>
            <h2>Login with branch ID and password.</h2>
          </div>
          <div className="login-grid">
            <form className="login-card" id="loginForm" onSubmit={handleLogin}>
              <label>
                Doctor ID
                <input type="text" name="doctorId" placeholder="Enter Doctor ID" required />
              </label>
              <label>
                Password
                <input type="password" name="doctorPassword" placeholder="Enter Password" required />
              </label>
              <button className="button primary" type="submit">Login</button>
              <p className="login-note">Demo login: ID <strong>DRS2024</strong>, Password <strong>Vizag@123</strong></p>
              <p className="login-message">{loginMessage}</p>
            </form>
            <div className="login-info">
              <h3>Vizag branch focus</h3>
              <p>
                Apollo Hospital Vizag branch handles post-surgery recovery, medication observation, and
                emergency trauma care for accidents, injuries, and surgeries.
              </p>
              <ul>
                <li>Monitor recovery status after surgery</li>
                <li>Assign medication and observation notes</li>
                <li>Manage accident, trauma, and injury cases</li>
                <li>Coordinate emergency care with specialists</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section status" id="status">
          <div className="section-heading">
            <p className="eyebrow">Patient status</p>
            <h2>Current recovery updates and trauma care cases.</h2>
          </div>
          <div className="status-grid">
            <article className="status-card">
              <h3>Post-surgery recovery</h3>
              <p>Patient #1247 is stable after abdominal surgery; vitals are normal and wound dressing is scheduled every 8 hours.</p>
            </article>
            <article className="status-card">
              <h3>Medication observation</h3>
              <p>Patient #1302 has been assigned antibiotics, pain management, and regular observation rounds for 24 hours.</p>
            </article>
            <article className="status-card">
              <h3>Accident / trauma</h3>
              <p>Three new cases admitted for road accident injuries and fall trauma; imaging and orthopedic review are underway.</p>
            </article>
          </div>
        </section>

        <section className="section workflow" id="workflow">
          <div className="section-heading">
            <p className="eyebrow">Project flow diagram</p>
            <h2>From patient visit to pharmacy coordination.</h2>
          </div>
          <figure className="flow-figure">
            <img src={flowDiagram} alt="Prescription Management System project flow diagram" />
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
                <span>{String(index + 1).padStart(2, '0')}</span>
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
            The system supports electronic prescriptions, medication records, drug search, dosage
            validation, refill requests, prescription history, notifications, and adherence tracking.
            Future enhancements can include AI, cloud computing, mobile applications, and telemedicine.
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
