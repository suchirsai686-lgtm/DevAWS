import { ArrowRight, Check, Mic, Code, Zap, Users, Coffee, Package, Utensils, Gift, Award, Camera, Wifi, Monitor, Layout, Quote, MapPin, Phone } from "lucide-react";
import Navbar from "./components/Navbar";
import { PersistentCountdown } from "./components/Countdown";
import { eventData } from "./data/eventData";

const speakerFormatIcons = { mic: Mic, code: Code, zap: Zap, users: Users };
const experienceIcons = { coffee: Coffee, package: Package, utensils: Utensils, gift: Gift, award: Award, users: Users, camera: Camera, wifi: Wifi };
const spaceIcons = { monitor: Monitor, users: Users, layout: Layout };

function SectionBadge({ icon: Icon, label }) {
  return (
    <div className="section-badge"><Icon size={16} /><span>{label}</span></div>
  );
}

function App() {
  return (
    <div className="page-bg">
      <Navbar />
      <PersistentCountdown target={eventData.date} />

      <main>
        {/* HERO */}
        <section className="scd-section hero-section">
          <div className="hero-glow-1" />
          <div className="hero-glow-2" />
          <div className="scd-container">
            <div className="hero-inner">
              <div className="hero-badge">AWS Student Builder Group mecs Presents</div>
              <h1 className="hero-title">Student <span className="gradient-text">Community</span><br />Day 2026</h1>
              <p className="hero-desc">{eventData.tagline}</p>
              <div style={{ paddingTop: 8 }}>
                <a className="hero-cta" href={eventData.registrationUrl} target="_blank" rel="noopener noreferrer">
                  <div className="cta-hover" /><span>Register Now</span><ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scd-section" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <div className="scd-container">
            <div className="about-grid">
              <div className="about-text">
                <h2>About the Event</h2>
                {eventData.about.paragraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p.html }} />
                ))}
              </div>
              <div className="about-image">
                <img src={eventData.about.image} alt="About the Event" />
                <div className="about-image-overlay" />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT ARE SCDs */}
        <section className="scd-section" style={{ padding: '80px 24px' }}>
          <div className="scd-container" style={{ maxWidth: 1024, margin: '0 auto' }}>
            <div className="scd-info-card">
              <div className="glow-tl" /><div className="glow-br" />
              <Quote className="quote-icon" />
              <div className="scd-badge"><div className="dot" /><span>What are SCDs?</span></div>
              <p dangerouslySetInnerHTML={{ __html: eventData.scdInfo.description }} />
              <p className="sub-text" dangerouslySetInnerHTML={{ __html: eventData.scdInfo.subText }} />
            </div>
          </div>
        </section>

        {/* CALL FOR SPEAKERS */}
        <section className="scd-section" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <div className="hero-glow-1" style={{ top: '25%', left: 'auto', right: '-80px' }} />
          <div className="hero-glow-2" style={{ bottom: 0, right: 'auto', left: '-80px' }} />
          <div className="scd-container" style={{ position: 'relative' }}>
            <div className="text-center">
              <SectionBadge icon={Mic} label="Call for Speakers" />
              <h2 className="section-title">Got a story to tell?<br /><span className="gradient-text">Take the stage.</span></h2>
              <p className="section-desc">We're looking for speakers, builders, and storytellers. Pick a format that fits you and share what you love with the community.</p>
            </div>
            <div className="experience-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 1024, margin: '0 auto 56px' }}>
              {eventData.speakerFormats.map((fmt) => {
                const Icon = speakerFormatIcons[fmt.icon] || Mic;
                return (
                  <div key={fmt.title} className="glass-card">
                    <div className="card-grid-bg" />
                    <div className="glass-card-icon"><div className="icon-box"><Icon size={24} /></div><div className="icon-glow" /></div>
                    <h3>{fmt.title}</h3><div className="divider" /><p>{fmt.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <a className="gradient-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSe9Z0-7fmtB5t7Cda5sGOsUkr-mHNUhIWF8b0ccj1bGmKcLAA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                <div className="btn-bg" /><div className="btn-bg-hover" /><span>Submit a Speaker Proposal</span><ArrowRight size={20} />
              </a>
              <p style={{ color: '#71717a', fontSize: 14, marginTop: 16 }}>All experience levels welcome · Applications reviewed on a rolling basis</p>
            </div>
          </div>
        </section>

        {/* CALL FOR SPONSORS */}
        <section className="scd-section" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <div className="hero-glow-1" style={{ left: '-80px', right: 'auto' }} />
          <div className="hero-glow-2" style={{ right: '-80px', left: 'auto' }} />
          <div className="scd-container" style={{ position: 'relative' }}>
            <div className="text-center">
              <SectionBadge icon={Award} label="Call for Sponsors" />
              <h2 className="section-title"><span className="gradient-text">Sponsor</span> the community.</h2>
              <p className="section-desc">Put your brand in front of 800+ builders, future hires, and cloud-curious students across Telangana.</p>
            </div>
            <div style={{ display: 'grid', gap: 24, maxWidth: 1024, margin: '0 auto 48px' }}>
              <div className="sponsor-benefit-card">
                <div className="card-grid-bg" style={{ opacity: .025 }} />
                <div className="card-header">
                  <div><div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.7)' }}><Mic size={24} /></div></div>
                  <span className="card-num">01</span>
                </div>
                <h3>Brand Awareness</h3><div className="accent-line" />
                <ul>
                  <li><Check size={16} /><span><span className="hl">Feature</span> your brand across reels, posts, and stories curated by our media team.</span></li>
                  <li><Check size={16} /><span><span className="hl">Publish</span> your company on the official SCD website.</span></li>
                  <li><Check size={16} /><span><span className="hl">Expose</span> your brand on flyers, posters, banners, t-shirts, and digital signage.</span></li>
                  <li><Check size={16} /><span><span className="hl">Introduce</span> your brand to all attendees at the opening ceremony.</span></li>
                </ul>
              </div>
              <div className="sponsor-benefit-card">
                <div className="card-grid-bg" style={{ opacity: .025 }} />
                <div className="card-header">
                  <div><div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.7)' }}><Users size={24} /></div></div>
                  <span className="card-num">02</span>
                </div>
                <h3>Audience Interaction</h3><div className="accent-line" />
                <ul>
                  <li><Check size={16} /><span><span className="hl">Meet</span> a talented, motivated audience from diverse technical backgrounds across Telangana.</span></li>
                  <li><Check size={16} /><span><span className="hl">Interact</span> with 800+ participants to share and promote your services and solutions.</span></li>
                  <li><Check size={16} /><span><span className="hl">Choose</span> top talent proficient in DevOps, AI, and cloud for internships and recruitment.</span></li>
                  <li><Check size={16} /><span><span className="hl">Highlight</span> your services with a dedicated BOOTH setup in the hall.</span></li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <a className="gradient-btn" href="#"><div className="btn-bg" /><div className="btn-bg-hover" /><span>Become a Sponsor</span><ArrowRight size={20} /></a>
              <p style={{ color: '#71717a', fontSize: 14, marginTop: 16 }}>Share a few quick details and our team will follow up with the full sponsorship deck</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="scd-section" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <div className="scd-container">
            <div className="text-center">
              <span style={{ color: '#a78bfa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16, display: 'block' }}>The Full Experience</span>
              <h2 className="section-title">Beyond the Sessions</h2>
              <p className="section-desc">Your ticket unlocks more than talks. Here's everything we're packing into the day.</p>
            </div>
            <div className="experience-grid" style={{ maxWidth: 1024, margin: '0 auto' }}>
              {eventData.experienceItems.map((item) => {
                const Icon = experienceIcons[item.icon] || Coffee;
                return <div key={item.title} className="experience-card"><div className="exp-icon"><Icon size={24} /></div><h4>{item.title}</h4><p>{item.desc}</p></div>;
              })}
            </div>
            <p style={{ color: '#71717a', fontSize: 14, marginTop: 40, maxWidth: 560, margin: '40px auto 0', textAlign: 'center' }}>… and a few surprises we're saving for the day itself.</p>
          </div>
        </section>

        {/* PRICING */}
        <section className="scd-section">
          <div className="scd-container">
            <div className="text-center"><h2 className="section-title">Tickets & Pricing</h2><p className="section-desc">Pick the pass that fits you — one all-access ticket to everything we're packing into Student Community Day.</p></div>
            <div className="pricing-grid">
              <div className="pricing-card solo"><div className="card-inner">
                <span className="tier">Solo</span><h3>Individual Pass</h3>
                <div className="price"><span className="amount">{eventData.pricing.solo.price}</span><span className="per">{eventData.pricing.solo.per}</span></div>
                <ul className="features">{eventData.pricing.solo.features.map((f) => <li key={f}><div className="check"><Check size={12} /></div>{f}</li>)}</ul>
                <button className="buy-btn">Get Individual Pass</button>
              </div></div>
              <div className="pricing-card squad"><div className="popular-tag">POPULAR</div><div className="card-inner">
                <span className="tier">Squad</span><h3>Group Pass (4 People)</h3>
                <div className="price"><span className="amount">{eventData.pricing.squad.price}</span><span className="per">{eventData.pricing.squad.per}</span></div>
                <ul className="features">{eventData.pricing.squad.features.map((f) => <li key={f}><div className="check"><Check size={12} /></div>{f}</li>)}</ul>
                <button className="buy-btn">Get Group Pass</button>
              </div></div>
            </div>
          </div>
        </section>

        {/* SPEAKERS */}
        <section id="speakers" className="scd-section" style={{ borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
          <div className="scd-container">
            <div className="text-center">
              <SectionBadge icon={Mic} label="Masterclass Speakers" />
              <h2 className="section-title">Learn from the <span className="gradient-text">best minds</span> in cloud & AI</h2>
              <p className="section-desc">Industry leaders, AWS ambassadors, and builders who are shaping the future.</p>
            </div>
            <div className="speakers-grid" style={{ maxWidth: 1024, margin: '0 auto' }}>
              {eventData.speakers.map((s) => (
                <div key={s.name} className="speaker-card">
                  <div className="blob-container">
                    <div className="blob-blob" style={{ width: s.blobWidth, height: s.blobHeight, top: s.blobTop, left: s.blobLeft, transform: 'translate(-50%, 0)', borderRadius: s.blobRadius, background: s.blobGradient }} />
                    <div className="speaker-img-wrap" style={{ width: 180, height: 220, borderRadius: s.blobRadius }}>
                      <img src={s.image} alt={s.name} />
                      <div className="img-gradient" />
                    </div>
                  </div>
                  <div className="speaker-info">
                    <div className="speaker-divider" />
                    <h3>{s.name}</h3>
                    <p className="role">{s.role}</p>
                    <p className="credential">{s.credential}</p>
                    <p className="ambassador">{s.ambassador}</p>
                    <div className="topic-box">
                      <div className="topic-header"><Mic size={16} /><div><span className="topic-label">Topic</span><p>{s.topic}</p></div></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNITY PARTNERS */}
        <section className="scd-section" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <div className="scd-container">
            <div className="text-center">
              <h2 className="section-title">Community <span className="gradient-text">partners</span></h2>
              <p className="section-desc">Student communities and organizations powering the movement alongside us.</p>
            </div>
            <div className="partner-grid">
              {eventData.communityPartners.map((p) => (
                <div key={p.name} className="partner-card">
                  <div className="partner-content"><img src={p.logo} alt={p.name} /><span className="partner-name">{p.name}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPONSORS */}
        <section id="sponsors" className="scd-section" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <div className="scd-container">
            <div className="text-center"><h2 className="section-title">Our Partners & Sponsors</h2><p className="section-desc">Backed by the best in the industry to bring this experience to you.</p></div>
            <div className="sponsor-logo-grid" style={{ maxWidth: 1024, margin: '0 auto' }}>
              {eventData.sponsors.map((s, i) => (
                <div key={i} className="sponsor-logo-card">
                  {s.tba ? <div className="tba-overlay"><span>TBA</span></div> : <img src={s.logo} alt={s.name} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VENUE */}
        <section id="venue" className="scd-section" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <div className="scd-container">
            <div className="text-center"><h2 className="section-title">Venue & Location</h2><p className="section-desc">Join us at the heart of Hyderabad for an unforgettable experience.</p></div>
            <div className="venue-grid">
              <div className="venue-image">
                <img src={eventData.venueDetails.image} alt={eventData.venueDetails.college} />
                <div className="venue-overlay" />
                <div className="venue-badge">
                  <div className="badge-pill"><MapPin size={16} color="#a78bfa" /><span>Main Campus</span></div>
                  <h3>{eventData.venueDetails.college}</h3>
                </div>
              </div>
              <div className="venue-map-container">
                <iframe src={eventData.venueDetails.mapEmbed} width="100%" height="100%" style={{ border: 0, minHeight: 250 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Venue Map" />
                <div className="venue-address">
                  <div className="pin"><MapPin size={20} /></div>
                  <div><h4>Getting Here</h4><p>{eventData.venueDetails.address}</p></div>
                </div>
              </div>
            </div>

            {/* EVENT SPACES */}
            <div style={{ marginTop: 80 }}>
              <div className="text-center" style={{ marginBottom: 48 }}>
                <span style={{ color: '#a78bfa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', display: 'block', marginBottom: 12 }}>On The Day</span>
                <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 12 }}>Event Spaces</h3>
                <p style={{ color: '#a1a1aa', maxWidth: 560, margin: '0 auto' }}>Three rooms across campus, each tuned to the kind of session inside.</p>
              </div>
              <div className="spaces-grid">
                {eventData.eventSpaces.map((space, i) => {
                  const Icon = spaceIcons[space.icon] || Monitor;
                  return (
                    <div key={space.title} className="space-card">
                      <div className="card-head">
                        <div className="space-icon"><Icon size={20} /></div>
                        <span className="space-num">0{i + 1}</span>
                      </div>
                      <h4>{space.title}</h4>
                      <div className="space-label-row"><span className="space-label">{space.label}</span><span className="space-label-line" /></div>
                      <p>{space.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* HELP */}
        <section className="scd-section" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <div className="scd-container">
            <div className="text-center">
              <SectionBadge icon={Phone} label="Need Help?" />
              <h2 className="section-title">We're here to help</h2>
              <p className="section-desc">Got questions about registration, directions, or anything else? Reach out to us.</p>
            </div>
            <div className="experience-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 640, margin: '0 auto' }}>
              <div className="glass-card">
                <div className="card-grid-bg" />
                <div className="glass-card-icon">
                  <div className="icon-box"><Phone size={24} /></div>
                  <div className="icon-glow" />
                </div>
                <h3>Siddhardha</h3>
                <div className="divider" />
                <a href="tel:9100208586" style={{ color: '#a78bfa', fontSize: 18, fontWeight: 600, textDecoration: 'none' }}>9100208586</a>
              </div>
              <div className="glass-card">
                <div className="card-grid-bg" />
                <div className="glass-card-icon">
                  <div className="icon-box"><Phone size={24} /></div>
                  <div className="icon-glow" />
                </div>
                <h3>Bavana</h3>
                <div className="divider" />
                <a href="tel:9492045240" style={{ color: '#a78bfa', fontSize: 18, fontWeight: 600, textDecoration: 'none' }}>9492045240</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="grid-bg" />
        <div className="footer-top-line" />
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div><h2>AWS Community</h2><div className="brand-underline" /></div>
              <p>Empowering developers to build, learn, and grow with AWS technologies through community events, workshops, and shared knowledge.</p>
              <div className="footer-socials">
                <a href={eventData.socialLinks.meetup} target="_blank" rel="noopener noreferrer">M</a>
                <a href={eventData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">in</a>
                <a href={eventData.socialLinks.instagram} target="_blank" rel="noopener noreferrer">I</a>
              </div>
            </div>
            <div className="footer-links-grid">
              <div className="footer-links">
                <h3>About</h3>
                <a href={eventData.socialLinks.meetup}>Our Mission</a>
                <a href={eventData.socialLinks.meetup}>Team</a>
                <a href={eventData.socialLinks.meetup}>Partners</a>
              </div>
              <div className="footer-links">
                <h3>Resources</h3>
                <a href={eventData.socialLinks.meetup}>Documentation</a>
                <a href={eventData.socialLinks.meetup}>Blog</a>
                <a href={eventData.socialLinks.meetup}>Events</a>
              </div>
              <div className="footer-links">
                <h3>Community</h3>
                <a href={eventData.socialLinks.meetup}>Discord</a>
                <a href={eventData.socialLinks.meetup}>Forums</a>
                <a href={eventData.socialLinks.meetup}>Meetups</a>
              </div>
            </div>
          </div>
          <div className="footer-governing">
            <span className="gov-label">Governing Body</span>
            <div className="avatars">
              {eventData.governingBody.map((m) => (
                <a key={m.name} href="#"><img src={m.image} alt={m.name} /></a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 AWS Student Builder Group mecs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
