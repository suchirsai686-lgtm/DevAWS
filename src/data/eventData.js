export const eventData = {
  name: "AWS Student Community Day",
  location: "mecs",
  year: "2026",
  tagline: "A premier conference led by students, for students. Dive into the world of AWS, connect with industry leaders, and accelerate your cloud computing journey.",
  date: "2026-10-09T09:00:00+05:30",
  venue: "Matrusri Engineering College",
  venueShort: "mecs",
  registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeFZHIXnUFz46NuwibriOUkL7rEjk-PQetA8X0z2o9TCQK4pA/viewform",
  membershipUrl: "https://www.meetup.com/aws-sbg-at-matrusri-engineering-college/",
  registrationGroupUrl: "#",
  nav: [
    ["about", "About"],
    ["speakers", "Speakers"],
    ["agenda", "Agenda"],
    ["sponsors", "Sponsors"],
    ["venue", "Venue"],
    ["faq", "FAQ"],
  ],
  about: {
    paragraphs: [
      { html: '<span class="highlight">The AWS Student Builder Group MECS</span> is a student-led community supported by <span class="highlight">Amazon Web Services (AWS)</span> at Matrusri Engineering College. We are excited to bring you the <span class="highlight">AWS Student Community Day 2026</span>, happening on <span class="highlight">9th Oct</span> at Matrusri Engineering College. Join us for an exciting day of technology, innovation, and collaboration. Discover new ideas, connect with fellow tech enthusiasts, and explore the limitless possibilities of AWS. Together, we\u2019re building skills, creating solutions, and shaping the future of cloud technology.' },
      { html: '<span class="highlight">The AWS Student Community Day (SCD)</span> is a flagship, one-day conference that brings together students, developers, and industry experts to celebrate technology and innovation. Organized by student leaders, SCD is all about learning, building, and connecting. Explore the latest in cloud computing, gain real-world insights, and engage with the AWS community. <span class="highlight">One day. Endless possibilities.</span> A community of builders.' }
    ],
    image: "/about-event.jpg"
  },
  scdInfo: {
    description: 'AWS Student Community Day (SCD) are <span class="highlight">one-day, community-led conferences</span> where event logistics and content are <span class="highlight">planned, sourced, and delivered by student community leaders.</span>',
    subText: 'While a standard AWS Student Builder Group event focuses on one topic, a Student Community Day features <span class="highlight">3+ topics, sessions, and speakers</span> to gather, educate, and celebrate with a wider array of audiences.'
  },
  speakerFormats: [
    { title: "Keynote", desc: "Set the tone for the day with a vision-shaping talk on cloud, AI, or what's next.", icon: "mic" },
    { title: "Workshop", desc: "Roll up your sleeves — guide the community through a hands-on build session.", icon: "code" },
    { title: "Lightning Talk", desc: "Five minutes, one sharp idea. Fast, focused, and unforgettable.", icon: "zap" },
    { title: "Panel Discussion", desc: "Join an expert lineup for a moderated debate on a topic you care about.", icon: "users" }
  ],
  experienceItems: [
    { title: "Lunch", desc: "Full buffet included", icon: "utensils" },
    { title: "Swag Kit", desc: "Tee, stickers & more", icon: "gift" },
    { title: "Certificate", desc: "AWS-branded", icon: "award" },
    { title: "Networking", desc: "Builders & recruiters", icon: "users" },
    { title: "Photo-ops", desc: "Capture the day", icon: "camera" }
  ],
  pricing: {
    solo: { price: "₹149", per: "/person", features: ["Full day access", "Swag kit & meals", "Networking sessions"] },
    squad: { price: "₹549", per: "/total", features: ["Everything in Individual Pass", "Dedicated group seating", "Exclusive squad photo-op"] }
  },
  speakers: [
    {
      name: "Satyajit Samantray",
      role: "Principal Cloud Architect  @Searce",
      credential: "AWS Ambassador",
      ambassador: "AWS Community Builder",
      topic: "DevOps",
      image: "/speaker.jpg",
      blobRadius: "60% 40% 55% 45% / 55% 60% 40% 45%",
      blobGradient: "linear-gradient(135deg, rgba(139,92,246,.18), rgba(217,70,239,.12))",
      blobWidth: "75%", blobHeight: "80%", blobTop: "0%", blobLeft: "50%"
    },
    {
      name: "Sathpal Singh",
      role: "Director of Technology @Optum",
      credential: "Microsoft MVP in Azure Kubernetes Service",
      ambassador: "Grafana Champion",
      topic: "Agentic AI",
      image: "/speaker-2.jpg",
      blobRadius: "60% 40% 55% 45% / 55% 60% 40% 45%",
      blobGradient: "linear-gradient(135deg, rgba(139,92,246,.18), rgba(217,70,239,.12))",
      blobWidth: "75%", blobHeight: "80%", blobTop: "0%", blobLeft: "50%"
    },
    {
      name: "Praveen Kumar Grandhi",
      role: "DevOps Admin @Accenture",
      credential: "5+ years of experience in Site Reliability Engineering",
      ambassador: "AWS Engineer",
      topic: "AWS security",
      image: "/Profile_picture.png",
      blobRadius: "60% 40% 55% 45% / 55% 60% 40% 45%",
      blobGradient: "linear-gradient(135deg, rgba(139,92,246,.18), rgba(217,70,239,.12))",
      blobWidth: "75%", blobHeight: "80%", blobTop: "0%", blobLeft: "50%"
    },
    {
      name: "Avinash Reddy Thipparthi",
      role: "Founder of Aviz Academy",
      credential: "15 years of experience in IT and 9+ years of experience training students and professionals in AWS, Cloud, DevOps, and AI.",
      ambassador: "AWS Community Builder",
      topic: "AI Agents in Action: From Idea to Autonomous Application",
      image: "/IMG_4899.JPG.jpeg",
      blobRadius: "60% 40% 55% 45% / 55% 60% 40% 45%",
      blobGradient: "linear-gradient(135deg, rgba(139,92,246,.18), rgba(217,70,239,.12))",
      blobWidth: "75%", blobHeight: "80%", blobTop: "0%", blobLeft: "50%"
    },
    {
      name: "Snehith Allamraju",
      role: "Senior Director, Data Analytics Operations @Dun & Bradstreet",
      credential: "data analytics and AI leader with 19+ years of enterprise experience",
      ambassador: "active volunteer in Hyderabad\u2019s data & tech community",
      topic: "Data and AI",
      image: "/speaker-3.jpeg",
      blobRadius: "60% 40% 55% 45% / 55% 60% 40% 45%",
      blobGradient: "linear-gradient(135deg, rgba(139,92,246,.18), rgba(217,70,239,.12))",
      blobWidth: "75%", blobHeight: "80%", blobTop: "0%", blobLeft: "50%"
    },
    {
      name: "Varsha Verma",
      role: "AWS Cloud Specialist",
      credential: "8 years of experience working across AWS, cloud infrastructure, DevOps, automation, migration, security, and cost optimization.",
      ambassador: "AWS Community Builder",
      topic: "Cloud",
      image: "/speaker-4.jpeg",
      blobRadius: "60% 40% 55% 45% / 55% 60% 40% 45%",
      blobGradient: "linear-gradient(135deg, rgba(139,92,246,.18), rgba(217,70,239,.12))",
      blobWidth: "75%", blobHeight: "80%", blobTop: "0%", blobLeft: "50%"
    }
  ],
  faqs: [
    {
      group: "Event Information",
      items: [
        {
          q: "1. What are the event timings?",
          a: [
          "The event will take place on <b>9th October 2026, from 9:00 AM to 5:00 PM</b>.",
          "Please reach the venue by <b>9:00 AM</b> for registration and check-in."
          ]
        },
        {
          q: "2. Where is the event happening?",
          a: [
          "The event will be held at:",
          "<b>Matrusri Engineering College</b>",
          "Saidabad, Hyderabad, Telangana.",
          "The venue details and directions are available on the event website."
          ]
        },
        {
          q: "3. What are the morning sessions?",
          a: [
          "All participants will attend the morning sessions at <b>MV Sridhar Hall</b>.",
          "<b>10:30 AM - 11:15 AM</b>",
          "Agentic AI",
          "<b>11:15 AM - 12:00 PM</b>",
          "AI Agents in Action",
          "<b>12:00 PM - 12:40 PM</b>",
          "AWS Security"
          ]
        },
        {
          q: "4. What are the afternoon tracks?",
          a: [
          "From <b>2:00 PM to 4:00 PM</b>, you can choose from three different tracks:",
          ["<b>DevOps</b>", "<b>Cloud</b>", "<b>Data & AI</b>"],
          "Choose the track that interests you and attend the sessions under that track."
          ]
        },
        {
          q: "5. Can I choose which afternoon track I attend?",
          a: [
          "Yes. The afternoon sessions are divided into three parallel tracks, so you can choose the track that best matches your interests."
          ]
        },
        {
          q: "6. How do I choose my afternoon track?",
          a: [
          "You can choose your preferred track at the <b>registration desk while scanning your QR code</b>.",
          "Simply let the registration team know which track you would like to attend, and they will assign you to that track.",
          "The available tracks are:",
          ["<b>DevOps</b>", "<b>Cloud</b>", "<b>Data & AI</b>"],
          "<b>Please note:</b> Seats for each track are limited and will be assigned on a <b>first come, first serve basis</b>. We recommend arriving early to get your preferred track."
          ]
        },
        {
          q: "7. How long are the afternoon sessions?",
          a: [
          "The afternoon track sessions run from <b>2:00 PM to 4:00 PM</b>.",
          "After the sessions, please gather at <b>MV Sridhar Hall</b> for quizzes and activities."
          ]
        },
        {
          q: "8. Does every registered participant get a goodie bag?",
          a: [
          "Yes. <b>Every registered participant will receive a goodie bag.</b>"
          ]
        },
        {
          q: "9. Where can I collect my goodie bag?",
          a: [
          "The volunteers will guide you regarding the goodie bag collection point. If you are unsure, you can ask any volunteer for assistance."
          ]
        },
        {
          q: "10. Is lunch provided?",
          a: [
          "Yes, <b>lunch will be provided for registered participants.</b>",
          "<b>Lunch timing: 1:00 PM - 2:00 PM</b>"
          ]
        },
        {
          q: "11. Where will lunch be served?",
          a: [
          "The volunteers will guide you to the lunch area. If you are unsure where to go, simply approach a volunteer or ask in the WhatsApp group."
          ]
        },
        {
          q: "12. What should I do after the 2:00 PM - 4:00 PM sessions?",
          a: [
          "After your afternoon session, please <b>gather at MV Sridhar Hall</b>.",
          "We have some fun <b>quizzes and activities</b> planned, and you can also win prizes."
          ]
        }
      ]
    },
    {
      group: "Help & Assistance",
      items: [
        {
          q: "12. How do I identify the volunteers?",
          a: [
          "Our volunteers will be wearing <b>event shirts and volunteer ID cards</b>.",
          "If you need any assistance during the event, you can approach any volunteer."
          ]
        },
        {
          q: "13. Who should I contact if I have a question during the event?",
          a: [
          "Please <b>send your question in the official WhatsApp group</b>.",
          "Our team will check the message and assist you accordingly."
          ]
        },
        {
          q: "14. What should I do if I lose something?",
          a: [
          "If you lose an item during the event, please send a message in the <b>WhatsApp group</b> with the details of the item.",
          "Our team will check and get back to you."
          ]
        },
        {
          q: "15. What if I need help finding a session room?",
          a: [
          "You can approach any volunteer wearing the <b>event shirt and volunteer ID card</b>. They will guide you to the correct venue."
          ]
        },
        {
          q: "16. What if I need help finding the lunch area?",
          a: [
          "Please ask any volunteer. They will guide you to the lunch area.",
          "You can also ask in the WhatsApp group."
          ]
        }
      ]
    },
    {
      group: "Registration & Event Experience",
      items: [
        {
          q: "17. What should I do when I arrive at the venue?",
          a: [
          "Please head to the <b>registration/check-in area</b> first.",
          "Once you complete the check-in process, the volunteers will guide you regarding the event schedule and venues."
          ]
        },
        {
          q: "18. Do I need to carry my registration details?",
          a: [
          "It is recommended that you keep your <b>registration confirmation/ticket accessible on your phone</b> , it is required during check-in."
          ]
        },
        {
          q: "19. Do I need prior AWS experience?",
          a: [
          "No. You can attend the sessions based on your interests and current level of knowledge.",
          "The event covers topics across <b>AI, AWS, Cloud, DevOps, Data and Security</b>."
          ]
        },
        {
          q: "20. Can I switch between the afternoon tracks?",
          a: [
          "The afternoon tracks run in parallel, so you should choose the track you want to attend for the session.",
          "If you have any questions about switching tracks, please check with the volunteers."
          ]
        },
        {
          q: "21. Is there anything I should bring?",
          a: [
          "Please carry:",
          ["Your phone", "Registration confirmation", "College/student ID card", "Any essentials you may need during the event"]
          ]
        },
        {
          q: "22. Will there be a certificate?",
          a: [
          "Yes, registered participants will receive a <b>e-certificate</b> as part of the event."
          ]
        },
        {
          q: "23. What if I have any other questions?",
          a: [
          "You can always <b>ask a volunteer or message the official WhatsApp group</b>.",
          "We are here to help you have a smooth experience throughout the event."
          ]
        }
      ]
    }
  ],
  agenda: [
    { time: "9:00 AM – 10:00 AM", title: "Check-in & Registrations", desc: "Arrive, collect your badge and swag kit, grab a coffee, and settle in before the day begins.", icon: "checkin" },
    { time: "10:00 AM – 10:30 AM", title: "Inauguration & Welcome Ceremony", desc: "Opening remarks from the AWS SBG MECS team and guests — the official start of SCD 2026.", icon: "ceremony" },
    { time: "10:30 AM – 11:15 AM", title: "1st Speaker Session", desc: "The first masterclass of the day takes the stage.", icon: "speaker" },
    { time: "11:15 AM – 12:00 PM", title: "2nd Speaker Session", desc: "Fresh perspectives from industry — keep the momentum going.", icon: "speaker" },
    { time: "12:00 PM – 12:45 PM", title: "3rd Speaker Session", desc: "The final talk before we break for lunch.", icon: "speaker" },
    { time: "1:00 PM – 2:00 PM", title: "Lunch Break", desc: "Refuel with a full buffet and network with speakers, sponsors, and fellow builders.", icon: "lunch" },
    { time: "2:00 PM – 5:00 PM", title: "Parallel Tracks", desc: "The room splits into 3 tracks — head to the one that matches your interest.", icon: "tracks", accent: true }
  ],
  communityPartners: [
    { name: "DevCatalyst", logo: "/partner.png" },
    { name: "The Orbit", logo: "/partner-orbit.png" },
    { name: "CodeQuesters", logo: "/partner-codequesters.png" },
    { name: "Kramers", logo: "/partner-kramers.png" },
    { name: "Eleven Labs", logo: "/elevenlabs-logo-white.png" }
  ],
  sponsors: [
    { name: "AWS", logo: "/aws-logo.png" }
  ],
  venueDetails: {
    college: "Matrusri Engineering College",
    address: "Saidabad, Hyderabad, Telangana",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1190525981624!2d78.5052289!3d17.3580034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98686ae78299%3A0xb15620bbd3e6bec!2sMatrusri%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    image: "/venue.jpg"
  },
  eventSpaces: [
    { title: "MV Sridhar Hall", label: "Keynote and Data Analytics", desc: "Roll-up-your-sleeves build sessions. Bring a laptop, leave having shipped something.", icon: "layout" },
    { title: "To be announced", label: "Kiro", desc: "Headline keynotes and plenary sessions. The day opens and closes on this stage.", icon: "monitor" },
    { title: "To be announced", label: "DevOps Engineering", desc: "Panel discussions, lightning talks, and moderated conversations with industry guests.", icon: "users" }
  ],
  governingBody: [
    { name: "Esha Satvase", image: "/team/gov-01-face.jpg" },
    { name: "Zaid Ali Khan", image: "/team/gov-02-face.jpg" },
    { name: "Nahid Sami", image: "/team/gov-03-face.jpg" },
    { name: "Affah ullah shaik", image: "/team/gov-04-face.jpg" },
    { name: "Sidra Aleem", image: "/team/gov-05-face.jpg" },
    { name: "Saad Riyan", image: "/team/gov-06-face.jpg" },
    { name: "Musab Umayr", image: "/team/gov-07-face.jpg" },
    { name: "Shaik Abrar", image: "/team/gov-08-face.jpg" }
  ],
  socialLinks: {
    meetup: "https://www.meetup.com/aws-sbg-at-matrusri-engineering-college/",
    linkedin: "https://www.linkedin.com/company/aws-cloud-club-mecs/",
    instagram: "https://www.instagram.com/aws_student_builder_group_mecs?stkn=MWduYXZlaGRveG5wdg=="
  },
  speakerFormUrl: "#"
};
