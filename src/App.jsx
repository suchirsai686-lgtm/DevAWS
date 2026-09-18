import { useState } from "react";
import { ArrowRight, CalendarDays, MapPin, Clock3, Check, ChevronDown, Linkedin, Instagram, Youtube } from "lucide-react";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import Section from "./components/Section";
import { eventData } from "./data/eventData";

function App() {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="pill"><span className="dot" /> AWS Cloud Community • Tirupati</div>
              <h1>{eventData.name}<span> — {eventData.location} {eventData.year}</span></h1>
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
              <div className="aws-line"><span /> Powered by AWS Cloud Clubs <span /></div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="ABOUT THE EVENT" title="One day. Real skills. A stronger cloud community.">
          <div className="about-grid">
            <div>
              <p className="lead">AWS Student Community Day — Tirupati is a student-focused cloud computing conference designed to bring learning, building and community together.</p>
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
          <div className="speaker-grid">
            {eventData.speakers.map((speaker, i) => (
              <article className="speaker-card" key={i}>
                <div className="speaker-photo">{speaker.image ? <img src={speaker.image} alt={speaker.name} /> : <span>{speaker.name.slice(0, 1)}</span>}</div>
                <div className="speaker-body"><h3>{speaker.name}</h3><p>{speaker.role}</p><span>{speaker.topic}</span><a href="#" aria-label={`${speaker.name} LinkedIn`}><Linkedin size={17}/></a></div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="tracks" dark eyebrow="TRACKS & TOPICS" title="What you'll explore.">
          <div className="tracks-grid">{eventData.tracks.map((track, i) => <div className="track" key={track}><span>0{i + 1}</span><strong>{track}</strong><ArrowRight /></div>)}</div>
        </Section>

        <Section id="community" eyebrow="THE COMMUNITY" title="Student-led. Hands-on. Career-focused.">
          <div className="community-panel"><div className="community-logo">AWS<br/><b>Cloud Club</b></div><div><p className="lead">Hosted by an AWS student community committed to practical learning, real-world projects and career preparation.</p><p>Replace this placeholder with the confirmed Tirupati organizing community, institution details, mission and social links.</p><a className="text-link" href="#">Visit community page <ArrowRight /></a></div></div>
        </Section>

        <Section id="sponsors" dark eyebrow="SPONSORS & PARTNERS" title="Backed by the community.">
          <div className="sponsor-groups">{eventData.sponsors.map(group => <div className="sponsor-group" key={group.tier}><p>{group.tier}</p><div>{group.names.map((name, i) => <div className="sponsor-logo" key={i}>{name}</div>)}</div></div>)}</div>
        </Section>

        <Section id="gallery" eyebrow="PROOF OF WORK" title="Moments from the community.">
          <div className="gallery-grid">{[1,2,3,4,5,6].map(n => <div className="gallery-item" key={n}><span>Past event photo {n}</span></div>)}</div>
        </Section>

        <Section id="registration" dark eyebrow="REGISTRATION" title="Save your seat.">
          <div className="registration-card"><div><p className="lead">Ready to join AWS Student Community Day — Tirupati 2026?</p><p>Connect the confirmed KonfHub registration URL here. Payment and ticketing logic should remain on the ticketing platform.</p></div><a className="btn btn-orange btn-large" href={eventData.registrationUrl}>Get Tickets <ArrowRight /></a></div>
        </Section>

        <Section id="venue" eyebrow="VENUE" title="Find your way to the event.">
          <div className="venue-grid"><div className="map-placeholder"><MapPin size={42}/><span>Google Maps embed goes here</span></div><div className="venue-info"><h3>{eventData.venue}</h3><p>Replace with the confirmed venue name, complete address and transport/parking notes.</p><a className="btn btn-dark" href="#">Get Directions</a></div></div>
        </Section>

        <Section id="faq" dark eyebrow="FAQ" title="Questions, answered.">
          <div className="faq">{eventData.faqs.map(([q, a], i) => <div className={`faq-item ${faqOpen === i ? "active" : ""}`} key={q}><button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>{q}</span><ChevronDown /></button>{faqOpen === i && <p>{a}</p>}</div>)}</div>
        </Section>

        <Section id="team" eyebrow="ORGANIZING TEAM" title="Meet the people making it happen.">
          <div className="team-grid">{["Cloud Captain", "Lead Organizer", "Community Lead", "Operations"].map(role => <div className="team-card" key={role}><div className="team-avatar">TBA</div><strong>Team Member</strong><span>{role}</span></div>)}</div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><div className="brand"><span className="aws-mark">aws</span><span>Student Community Day</span></div><p>A student-led cloud computing conference.</p></div>
          <div><h4>Explore</h4>{eventData.nav.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</div>
          <div><h4>Connect</h4><div className="socials"><a href="#"><Instagram/></a><a href="#"><Linkedin/></a><a href="#"><Youtube/></a></div><a href="mailto:hello@example.com">hello@example.com</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 AWS Student Community Day — Tirupati</span><span>Code of Conduct • Powered by AWS Cloud Clubs</span></div>
      </footer>
    </>
  );
}

export default App;