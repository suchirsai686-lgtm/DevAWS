import { useState } from "react";
import { ArrowRight, CalendarDays, MapPin, Clock3, Check, ChevronDown, Linkedin, Instagram, Youtube, Phone, MessageCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Countdown, { PersistentCountdown } from "./components/Countdown";
import Section from "./components/Section";
import RegistrationForm from "./components/RegistrationForm";
import { eventData } from "./data/eventData";

function App() {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <>
      <Navbar />
      <PersistentCountdown target={eventData.date} />

      <main>
        <section className="hero">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="pill"><span className="dot" /> AWS Cloud Community • Hyderabad</div>
              <h1 className="hero-title">
                <span className="aws-logo-text">aws</span>
                <span className="title-student">STUDENT</span>
                <span className="title-community">COMMUNITY DAY</span>
                <span className="title-location">Hyderabad 2026</span>
              </h1>
              <p className="hero-tagline">{eventData.tagline}</p>
              <div className="quick-facts">
                <span><CalendarDays /> December 2026</span>
                <span><Clock3 /> Full Day</span>
                <span><MapPin /> {eventData.venue}</span>
              </div>
              <div className="hero-actions">
                <a className="btn btn-orange btn-large" href={eventData.registrationUrl}>Register Now <ArrowRight /></a>
                <a className="btn btn-ghost btn-large" href="#agenda">View Agenda</a>
              </div>
              <div className="social-proof"><span className="avatar-stack"><i/><i/><i/><i/></span> Join students, builders & cloud enthusiasts</div>
            </div>

            <div className="hero-card">
              <p className="eyebrow">COUNTDOWN</p>
              <h3>See you at Community Day</h3>
              <Countdown target={eventData.date} />
              <div className="aws-line"><span /> Powered by AWS SBG <span /></div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="ABOUT THE EVENT" title="One day. Real skills. A stronger cloud community.">
          <div className="about-grid">
            <div>
              <p className="lead">AWS Student Community Day — Hyderabad is a student-focused cloud computing conference designed to bring learning, building and community together.</p>
              <p>Explore AWS and modern cloud technologies through talks, practical workshops, networking and career-focused conversations. The page is structured so confirmed event content can be dropped in without changing the component architecture.</p>
            </div>
            <div className="stats-grid">
              {eventData.stats.map(([label, value]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </Section>

        <Section id="highlights" eyebrow="WHY ATTEND" title="Built for students who want to build.">
          <div className="card-grid">
            {eventData.highlights.map(([title, desc], i) => (
              <article className="feature-card" key={title}><div className="icon-box"><Check /></div><h3>{title}</h3><p>{desc}</p><span className="card-index">0{i + 1}</span></article>
            ))}
          </div>
        </Section>

        <Section id="agenda" dark eyebrow="AGENDA" title="A day packed with learning and connection.">
          <div className="agenda">
            {eventData.agenda.map((item, i) => (
              <article className="agenda-row" key={i}>
                <time>{item.time}</time><div className="agenda-marker" />
                <div className="agenda-main"><span className="tag">{item.type}</span><h3>{item.title}</h3><p>{item.description}</p>{item.speaker && <small>{item.speaker}</small>}</div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="speakers" eyebrow="SPEAKERS" title="Learn from people building in the real world.">
          <div className="speakers-tba">
            <div className="tba-icon"><Linkedin size={40}/></div>
            <h3>Yet to be announced.</h3>
            <p>Stay tuned for our exciting speaker lineup!</p>
          </div>
          <div className="speaker-interest-box" style={{marginTop: '40px'}}>
            <h3>Share your expertise</h3>
            <p>Passionate about cloud computing? Fill out our speaker interest form and join our amazing lineup!</p>
            <a className="btn btn-orange btn-large" href="https://docs.google.com/forms/d/e/1FAIpQLSe9Z0-7fmtB5t7Cda5sGOsUkr-mHNUhIWF8b0ccj1bGmKcLAA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              Fill Speaker Interest Form <ArrowRight />
            </a>
          </div>
        </Section>

        <Section id="tracks" dark eyebrow="TRACKS & TOPICS" title="What you'll explore.">
          <div className="tracks-grid">{eventData.tracks.map((track, i) => <div className="track" key={track}><span>0{i + 1}</span><strong>{track}</strong><ArrowRight /></div>)}</div>
        </Section>

        <Section id="community" eyebrow="THE COMMUNITY" title="Student-led. Hands-on. Career-focused.">
          <div className="community-panel"><div className="community-logo">AWS<br/><b>SBG</b></div><div><p className="lead">Hosted by an AWS student community committed to practical learning, real-world projects and career preparation.</p><p>Replace this placeholder with the confirmed Hyderabad organizing community, institution details, mission and social links.</p><a className="text-link" href="#">Visit community page <ArrowRight /></a></div></div>
        </Section>

        <Section id="sponsors" dark eyebrow="SPONSORS & PARTNERS" title="Backed by the community.">
          <div className="sponsor-groups">{eventData.sponsors.map(group => <div className="sponsor-group" key={group.tier}><p>{group.tier}</p><div>{group.names.map((name, i) => <div className="sponsor-logo" key={i}>{name}</div>)}</div></div>)}</div>
        </Section>

        <Section id="gallery" eyebrow="PROOF OF WORK" title="Moments from the community.">
          <div className="gallery-grid">{[1,2,3,4,5,6].map(n => <div className="gallery-item" key={n}><span>Past event photo {n}</span></div>)}</div>
        </Section>

        <Section id="registration" dark eyebrow="REGISTRATION" title="Save your seat.">
          <div className="stay-tuned">
            <div className="stay-tuned-icon">
              <ArrowRight size={32} />
            </div>
            <h3>Stay Tuned!</h3>
            <p>Registration is opening soon. Be the first to grab your seat!</p>
          </div>
        </Section>

        <Section id="venue" eyebrow="VENUE" title="Find your way to the event.">
          <div className="venue-grid">
            <div className="map-embed">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8!2d78.5078038!3d17.3579983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98686ae78299%3A0xb15620bbd3e6bec!2sMatrusri%20Engineering%20College!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{border:0, borderRadius:'10px'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Matrusri Engineering College"
              />
            </div>
            <div className="venue-info">
              <h3>{eventData.venue}</h3>
              <p>Join us at Matrusri Engineering College in Hyderabad. Click below for directions and parking information.</p>
              <a className="btn btn-orange" href="https://maps.app.goo.gl/wq2wSZ6HacUkY71W9" target="_blank" rel="noopener noreferrer">
                <MapPin size={16} /> Get Directions
              </a>
            </div>
          </div>
        </Section>

        <Section id="faq" dark eyebrow="FAQ" title="Questions, answered.">
          <div className="faq">{eventData.faqs.map(([q, a], i) => <div className={`faq-item ${faqOpen === i ? "active" : ""}`} key={q}><button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>{q}</span><ChevronDown /></button>{faqOpen === i && <p>{a}</p>}</div>)}</div>
        </Section>

        <Section id="team" eyebrow="ORGANIZING TEAM" title="Meet the people making it happen.">
          <div className="team-grid">{["Cloud Captain", "Lead Organizer", "Community Lead", "Operations"].map(role => <div className="team-card" key={role}><div className="team-avatar">TBA</div><strong>Team Member</strong><span>{role}</span></div>)}</div>
        </Section>

        <section className="help-section">
          <div className="help-glow" />
          <div className="container help-content">
            <div className="help-badge">
              <Phone size={20} />
              <span>NEED HELP?</span>
            </div>
            <h2 className="help-title">We're here for you</h2>
            <p className="help-subtitle">Got questions? Reach out to our team directly.</p>
            
            <div className="help-cards">
              <a href="tel:+919100208586" className="help-card">
                <div className="help-card-glow" />
                <div className="help-avatar">SH</div>
                <h3>Siddhardha</h3>
                <p>Event Coordinator</p>
                <div className="help-phone">
                  <Phone size={16} />
                  <span>91002 08586</span>
                </div>
                <div className="help-action">
                  <MessageCircle size={16} />
                  <span>Tap to Call</span>
                </div>
              </a>

              <a href="tel:+919492045240" className="help-card">
                <div className="help-card-glow" />
                <div className="help-avatar">BV</div>
                <h3>Bavana</h3>
                <p>Support Lead</p>
                <div className="help-phone">
                  <Phone size={16} />
                  <span>94920 45240</span>
                </div>
                <div className="help-action">
                  <MessageCircle size={16} />
                  <span>Tap to Call</span>
                </div>
              </a>
            </div>

            <p className="help-note">Available 9 AM — 6 PM IST</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><div className="brand"><span className="aws-mark">aws</span><span>Student Community Day</span></div><p>A student-led cloud computing conference.</p></div>
          <div><h4>Explore</h4>{eventData.nav.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</div>
          <div><h4>Connect</h4><div className="socials"><a href="#"><Instagram/></a><a href="#"><Linkedin/></a><a href="#"><Youtube/></a></div><a href="mailto:hello@example.com">hello@example.com</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 AWS Student Community Day — Hyderabad</span><span>Code of Conduct • Powered by AWS SBG</span></div>
      </footer>
    </>
  );
}

export default App;