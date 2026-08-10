const fs = require('fs');
const path = require('path');

const OUT = './';

/* ---------------- Icons (simple inline SVG, currentColor) ---------------- */
const icon = {
  training: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6.5C4 5.5 5 5 6.5 5H12v14H6.5C5 19 4 18.5 4 17.5z"/><path d="M20 6.5C20 5.5 19 5 17.5 5H12v14h5.5c1.5 0 2.5-.5 2.5-1.5z"/></svg>`,
  bulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.4.3.6.8.6 1.3V16h5.8v-.8c0-.5.2-1 .6-1.3A6 6 0 0 0 12 3z"/></svg>`,
  mic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>`,
  systems: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M6.6 7.6 10.5 16.5"/><path d="M17.4 7.6 13.5 16.5"/><path d="M7 6h10"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.3-9.3-8.6C1.4 8.3 3 5 6.3 5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2 3.3 0 4.9 3.3 3.6 6.4C19 15.7 12 20 12 20z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5C4 4.7 4.9 4 6 4h6v16H6c-1.1 0-2-.7-2-1.5z"/><path d="M20 5.5C20 4.7 19.1 4 18 4h-6v16h6c1.1 0 2-.7 2-1.5z"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M14.8 9.2 13 13l-3.8 1.8L11 11z"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5"/><circle cx="17.5" cy="9" r="2.3"/><path d="M16 14.2c2.3.3 4 1.8 4 3.8"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17"/><path d="M8 3v4"/><path d="M16 3v4"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v6c0 4.2 3 7 7 9 4-2 7-4.8 7-9V6z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9.5h4V21H3zM9 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.2c0-1.24-.02-2.83-1.73-2.83-1.74 0-2 1.36-2 2.74V21H9z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>`,
  bookshop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>`,
};

/* ---------------- Brand mark (organic interwoven circles motif) ---------------- */
const headerLogo = `<img src="./assets/images/header-logo.png" alt="logo" width="25" height="25" />`;
const logoWithBorder = `<img src="./assets/images/logo-border.png" alt="logo" width="55" height="55" />`;

function heroBlob(cls, variant) {
  const colors = variant === 2
    ? ['#F28C3D', '#6B4C9A']
    : ['#3AA79B', '#BFD8D1'];
  return `<svg class="hero-blob ${cls}" viewBox="0 0 400 400" aria-hidden="true">
    <circle cx="180" cy="180" r="160" fill="${colors[0]}" opacity="0.25"/>
    <circle cx="240" cy="230" r="120" fill="${colors[1]}" opacity="0.35"/>
  </svg>`;
}

/* ---------------- Nav + Footer ---------------- */
const NAV_LINKS = [
  ['index.html', 'Home'],
  ['about.html', 'About'],
  ['services.html', 'Services'],
  ['testimonials.html', 'Testimonials'],
  ['resources.html', 'Resources'],
  ['events-networks.html', 'Events & Networks'],
  ['contact.html', 'Contact'],
];

function header(active) {
  const links = NAV_LINKS.map(([href, label]) =>
    `<a href="${href}"${active === href ? ' class="active"' : ''}>${label}</a>`
  ).join('\n        ');
  return `<header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="brandmark">
        ${headerLogo}
        <span>Healing Young Hearts</span>
      </a>
      <nav class="main-nav">
        ${links}
        <a href="book-consultation.html" class="btn btn-primary nav-cta">Book a Consultation</a>
      </nav>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-col">
          <a href="index.html" class="brandmark">${logoWithBorder}<span>Healing Young Hearts</span></a>
          <p class="footer-tagline">Helping adults create the conditions for young hearts to heal and thrive.</p>
        </div>
        <div class="footer-col">
          <h4>Site</h4>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="testimonials.html">Testimonials</a>
          <a href="resources.html">Resources</a>
          <a href="events-networks.html">Events & Networks</a>
          <a href="contact.html">Contact</a>
          <a href="book-consultation.html">Book a Consultation</a>
          <a href="terms.html">Terms & Conditions</a>
          <a href="privacy.html">Privacy Policy</a>
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <a href="https://www.linkedin.com/in/siobh%C3%A1n-garrett-b1b4a51b6/">LinkedIn</a>
          <a href="https://www.instagram.com/healing_young_hearts/">Instagram</a>
          <a href="https://uk.bookshop.org/shop/HYH/">Bookshop.org</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; Healing Young Hearts. Registered in England &amp; Wales (16057232). Registered office: Epping, Essex, CM16 5AG.</span>
        <div class="footer-social">
          <a href="terms.html">Terms and Conditions</a>
          <a href="https://www.linkedin.com/in/siobh%C3%A1n-garrett-b1b4a51b6/" aria-label="LinkedIn">${icon.linkedin}</a>
          <a href="https://www.instagram.com/healing_young_hearts/" aria-label="Instagram">${icon.instagram}</a>
          <a href="https://uk.bookshop.org/shop/HYH/" aria-label="Bookshop.org">${icon.bookshop}</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function pillars() {
  return `<div class="pillars">
    <div class="pillar">${icon.compass} Curiosity</div>
    <div class="pillar">${icon.heart} Compassion</div>
    <div class="pillar">${icon.users} Connection</div>
  </div>`;
}

/* ---------------- Page wrapper ---------------- */
function page({ slug, title, description, body }) {
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Healing Young Hearts</title>
  <meta name="description" content="${description}">
  <link rel="shortcut icon" href="assets/images/logo.png" type="image/x-icon">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  ${header(slug)}
  <main>
${body}
  </main>
  ${footer()}
  <script src="assets/script.js"></script>
</body>
</html>
`;
}

/* =========================================================
   HOMEPAGE
   ========================================================= */

const home = JSON.parse(fs.readFileSync('./content/home.json', 'utf8'));
const homeBody = `
    <section class="hero">
      ${heroBlob('b1', 1)}
      ${heroBlob('b2', 2)}
      <div class="hero-inner">
        <p class="eyebrow">${home.hero.eyebrow}</p>
        <h1>${home.hero.title}</h1>
        <p class="lede">${home.hero.description}</p>
        <div class="btn-row">
          <a href="contact.html" class="btn btn-accent">Work With Us</a>
          <a href="services.html" class="btn btn-outline">Explore Training</a>
        </div>
      </div>
    </section>

    <section class="stats-strip section-tight">
      <div class="container stats-grid">
        ${home.stats.map(stat => (`<div><div class="stat-num">${stat.value}</div><div class="stat-label">${stat.label}</div></div>`)).join("")}
      </div>
    </section>

    <section class="bg-white">
      <div class="container two-col">
        <div>
          <p class="eyebrow">Introduction</p>
          <h2>${home.intro.title}</h2>
          <p style="margin-top:1rem;">${home.intro.paragraph1}</p>
          <p style="margin-top:1rem;">${home.intro.paragraph2}</p>
        </div>
        <div><img class="photo" src="assets/images/heart-hands-friends-outdoor.jpg" alt="Two friends forming a heart shape with their hands outdoors"></div>
      </div>
    </section>

    <section class="bg-warm">
      <div class="container">
        <div class="section-head center">
          <p class="eyebrow">Areas of focus</p>
          <h2>Key focus areas</h2>
        </div>
        <div class="grid grid-4">
          ${home.focusAreas.map(fa => (`<div class="tile">${fa}</div>`)).join("")}
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container">
        <div class="section-head center">
          <p class="eyebrow">What I offer</p>
          <h2>Services for schools, colleges &amp; organisations</h2>
        </div>
        <div class="grid grid-3">
          <div class="card">
            <div class="card-icon">${icon.training}</div>
            <h3>Training</h3>
            <p>Reflective, evidence-informed sessions combining neuroscience with practical strategies staff can use straight away.</p>
            <a href="services.html#training" class="card-link">Explore training &rarr;</a>
          </div>
          <div class="card">
            <div class="card-icon">${icon.bulb}</div>
            <h3>Consultancy</h3>
            <p>Collaborative support to embed relational approaches that are sustainable and responsive to your context.</p>
            <a href="services.html#consultancy" class="card-link">Explore consultancy &rarr;</a>
          </div>
          <div class="card">
            <div class="card-icon">${icon.mic}</div>
            <h3>Speaker</h3>
            <p>Keynotes and conference sessions on trauma-informed practice, belonging and relationships.</p>
            <a href="services.html#speaker" class="card-link">Learn more &rarr;</a>
          </div>
          <div class="card">
            <div class="card-icon">${icon.systems}</div>
            <h3>Systems Change</h3>
            <p>Embedding trauma-informed cultures at whole-system level across trusts and local authorities.</p>
            <a href="services.html#systems-change" class="card-link">Learn more &rarr;</a>
          </div>
          <div class="card">
            <div class="card-icon">${icon.heart}</div>
            <h3>Supervision</h3>
            <p>Individual and group reflective supervision for staff carrying relational, pastoral and therapeutic work.</p>
            <a href="services.html#supervision" class="card-link">Find out more &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-sage">
      <div class="container">
        <div class="grid grid-2" style="align-items:stretch;">
          <div class="testimonial-card">
            <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="quote">"Genuinely impressed by both the content and the way it was delivered &mdash; she invited us into the conversation rather than simply communicating information to us."</p>
            <p class="author">Senior Leader<span>Secondary School</span></p>
          </div>
          <div class="impact-banner">
            <div class="impact-num">24,000+</div>
            <p><strong>London Violence Reduction Unit &middot; nurtureuk partnership.</strong> Supported schools across 13 boroughs to reduce exclusions and strengthen belonging. Featured in the International Journal of Nurture in Education.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-warm">
      <div class="container">
        <div class="section-head center">
          <p class="eyebrow">What belonging looks like</p>
          <h2>Connection, in all its forms</h2>
        </div>
        <div class="gallery-grid">
          <img class="photo square" src="assets/images/heart-hands-girl-yellow.jpg" alt="Young girl forming a heart shape with her hands">
          <img class="photo square" src="assets/images/heart-hands-teens-park.jpg" alt="Two teenagers forming a heart shape with their hands in a park">
          <img class="photo square" src="assets/images/heart-hands-child-white.jpg" alt="Child forming a heart shape with their hands">
          <img class="photo square" src="assets/images/heart-hands-girl-overalls.jpg" alt="Young girl forming a heart shape with her hands">
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container two-col">
        <div style="order:2;"><img class="photo" src="assets/images/heart-hands-women-wall.jpg" alt="Two women forming a heart shape with their hands"></div>
        <div style="order:1;">
          <p class="eyebrow">Stay connected</p>
          <h2>Reflective insights, straight to your inbox</h2>
          <p style="margin-top:0.9rem;">I share occasional, evidence-informed writing on trauma-informed practice, belonging, relational leadership and staff wellbeing.</p>
          <ul class="list-check" style="margin-top:1.1rem;">
            <li>${icon.check} Reflections and research-informed writing</li>
            <li>${icon.check} Training and event updates</li>
            <li>${icon.check} Recommended reading and resources</li>
          </ul>
          <form
            action="https://trauma-informed.us6.list-manage.com/subscribe/post?u=0f16e3acd46502f6311ed7374&amp;id=0a3bcd2b75&amp;f_id=00bbc2e1f0"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank"
            style="margin-top:1.5rem; width:100%; max-width: 380px; display:flex; gap:0.6rem;"
          >
            <input type="hidden" name="FNAME" id="mce-FNAME" required hidden />
            <input type="hidden" name="LNAME" id="mce-LNAME" required hidden />
            <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Your email address" required style="flex:1;" />
            <button type="submit" class="btn btn-primary">Join</button>
          </form>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="cta-band">
          <h2>Ready to start the conversation?</h2>
          <p>Whether you're exploring training, consultancy or whole-system support, I'd love to hear from you.</p>
          <div class="btn-row"><a href="book-consultation.html" class="btn btn-accent">Book a Discovery Call</a></div>
        </div>
      </div>
    </section>

    ${pillars()}
`;

/* =========================================================
   ABOUT
   ========================================================= */
const about = JSON.parse(fs.readFileSync('./content/about.json', 'utf8'));
const aboutBody = `
    <section class="page-hero">
      ${heroBlob('b1', 1)}
      <div class="container">
        <p class="eyebrow">About</p>
        <h1>${about.hero.title}</h1>
        <p class="lede">${about.hero.title}</p>
      </div>
    </section>

    <section class="bg-white">
      <div class="container two-col">
        <div>
          <p>${about.biography.paragraph1}</p>
          <p style="margin-top:1rem;">${about.biography.paragraph2}</p>
        </div>
        <div><img class="photo portrait" src="assets/images/hyh_audience_portrait.jpeg" alt="Close-up of hands reaching out, with a small heart tattoo"></div>
      </div>
    </section>

    <section class="bg-sage">
      <div class="container">
        <div class="panel">
          <p class="panel-quote"><span class="mark">&ldquo;</span>${about.researchQuote}</p>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Professional affiliations</p>
          <h2>I value being part of communities that keep practice evidence-informed and relational.</h2>
        </div>
        <div class="grid grid-4">
        ${about.affiliations.map(affiliation => (`
          <div class="card">
            <h3 style="font-size:1.05rem;">${affiliation.name}</h3>
            <p>${affiliation.description}</p>
          </div>
          `)).join("")}
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="cta-band">
          <h2>Let's work together</h2>
          <p>Book a discovery call to talk through what your school or organisation needs.</p>
          <div class="btn-row"><a href="book-consultation.html" class="btn btn-accent">Book a Discovery Call</a></div>
        </div>
      </div>
    </section>

    ${pillars()}
`;

/* =========================================================
   SERVICES
   ========================================================= */

   function serviceSection({ id, iconKey, eyebrow, heading, hook, body, listLabel, list, extra }) {
  return `
    <section id="${id}" class="bg-white">
      <div class="container">
        <div class="grid grid-2" style="align-items:flex-start; gap:3rem;">
          <div>
            <div class="card-icon" style="margin-bottom:1.25rem;">${icon[iconKey]}</div>
            <p class="eyebrow">${eyebrow}</p>
            <h2>${heading}</h2>
            <p style="margin-top:1rem; font-weight:600; color:var(--text);">${hook}</p>
            <p style="margin-top:0.75rem;">${body}</p>
          </div>
          <div class="card" style="background:var(--sage-light); box-shadow:none;">
            <h3 style="margin-bottom:0.9rem;">${listLabel}</h3>
            <ul class="list-check">
              ${list.map(i => `<li>${icon.check} ${i}</li>`).join('\n              ')}
            </ul>
            ${extra || ''}
          </div>
        </div>
      </div>
    </section>`;
}

const service = JSON.parse(fs.readFileSync('./content/services.json', 'utf8'));
const servicesBody = `
    <section class="page-hero">
      ${heroBlob('b1', 1)}
      <div class="container">
        <p class="eyebrow">Services</p>
        <h1>${service.intro.title}</h1>
        <p class="lede">${service.intro.description}</p>
      </div>
    </section>

    <section class="bg-white section-tight">
      <div class="container">
        <p style="max-width:760px;">I believe trauma-informed practice is not about lowering expectations or introducing "soft" approaches. It is about understanding behaviour, stress, belonging and learning through a relational, developmental and neurobiological lens, whilst building environments that are both compassionate and boundaried.</p>
      </div>
    </section>

    <section class="bg-sage section-tight">
      <div class="container">
        <div class="panel">
          <p class="panel-quote"><span class="mark">&ldquo;</span>${service.quotedParagraph}</p>
        </div>
      </div>
    </section>

    <section class="bg-white section-tight">
      <div class="container">
        <img class="photo" style="aspect-ratio:21/9;" src="assets/images/heart-hands-group-denim.jpg" alt="A diverse group of young people, two forming heart shapes with their hands">
      </div>
    </section>

    ${service.services.map(serviceItem => (
      serviceSection({
        id: serviceItem.id,
        iconKey: serviceItem.iconKey,
        eyebrow: serviceItem.title,
        heading: serviceItem.title,
        hook: serviceItem.hook,
        body: serviceItem.description,
        listLabel: serviceItem.listLabel,
        list: serviceItem.items,
        extra: serviceItem.extra ? `<div style="margin-top:1.25rem; padding-top:1.1rem; border-top:1px solid rgba(51,51,51,0.1);">
        <p style="font-weight:600; color:var(--text); margin-bottom:0.3rem;">${serviceItem.extra.name}</p>
        <p style="font-size:0.88rem;">${serviceItem.extra.description}</p>
      </div>` : undefined
      })
    ))}

    <section>
      <div class="container">
        <div class="cta-band">
          <h2>Not sure which service fits?</h2>
          <p>Book a discovery call and we'll work out the right starting point together.</p>
          <div class="btn-row"><a href="book-consultation.html" class="btn btn-accent">Book a Discovery Call</a></div>
        </div>
      </div>
    </section>

    ${pillars()}
`;

/* =========================================================
   TESTIMONIALS
   ========================================================= */
const testimonialsPage = JSON.parse(fs.readFileSync('./content/testimonials.json', 'utf8'));
const testimonialsBody = `
    <section class="page-hero">
      ${heroBlob('b1', 1)}
      <div class="container">
        <p class="eyebrow">Testimonials</p>
        <h1>Feedback &amp; impact</h1>
        <p class="lede">What matters most is the impact of this work in practice &mdash; in the classrooms, staffrooms and communities where it lives.</p>
      </div>
    </section>

    <section class="bg-white">
      <div class="container">
        <div class="grid grid-3">
          ${testimonialsPage.testimonials.map(tes => (`            
            <div class="testimonial-card">
              <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p class="quote">"${tes.quote}"</p>
              <p class="author">${tes.author}<span>${tes.organisation}</span></p>
            </div>
          `)).join("")}
        </div>
      </div>
    </section>

    <section class="bg-sage">
      <div class="container">
        <div class="section-head center">
          <p class="eyebrow">Programme impact</p>
          <h2>${testimonialsPage.impact.title}</h2>
        </div>
        <div class="impact-banner" style="max-width:780px; margin:0 auto;">
          <div class="impact-num">${testimonialsPage.impact.number}</div>
          <p>${testimonialsPage.impact.description}</p>
        </div>
        <p class="center" style="margin-top:1.5rem;"><a href="https://www.nurtureuk.org/our-programmes/london-violence-reduction-programme/" class="muted-link">Read about the London VRU Programme &rarr;</a></p>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="cta-band">
          <h2>Want results like these for your team?</h2>
          <p>Let's talk about what trauma-informed practice could look like at your school.</p>
          <div class="btn-row"><a href="book-consultation.html" class="btn btn-accent">Book a Discovery Call</a></div>
        </div>
      </div>
    </section>

    ${pillars()}
`;

/* =========================================================
   RESOURCES
   ========================================================= */
const resourcesPage = JSON.parse(fs.readFileSync('./content/resources.json', 'utf8'));
const resourcesBody = `
    <section class="page-hero">
      ${heroBlob('b1', 1)}
      <div class="container">
        <p class="eyebrow">Resources</p>
        <h1>Resources &amp; recommended reading</h1>
        <p class="lede">Articles, reflections, evidence-informed resources and practical guidance exploring trauma-informed practice, belonging, neurodiversity, wellbeing and relational approaches in education.</p>
      </div>
    </section>

    <section class="bg-white">
      <div class="container">
        <div class="section-head center">
          <p class="eyebrow">Coming soon</p>
          <h2>This section will include</h2>
        </div>
        <div class="grid grid-3">
          <div class="card"><div class="card-icon">${icon.book}</div><h3>Articles &amp; insights</h3><p>Reflections grounded in research and lived practice.</p></div>
          <div class="card"><div class="card-icon">${icon.heart}</div><h3>Blogs &amp; reflections</h3><p>Thinking out loud on relational and trauma-informed practice.</p></div>
          <div class="card"><div class="card-icon">${icon.shield}</div><h3>Downloadable resources</h3><p>Practical tools for schools and organisations.</p></div>
          <div class="card"><div class="card-icon">${icon.systems}</div><h3>Research &amp; evidence</h3><p>The studies and frameworks that underpin this work.</p></div>
          <div class="card"><div class="card-icon">${icon.mic}</div><h3>Podcast &amp; media features</h3><p>Conversations and appearances on relational practice.</p></div>
          <div class="card"><div class="card-icon">${icon.bookshop}</div><h3>Recommended reading</h3><p>Curated picks on trauma, attachment and belonging.</p></div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head center">
          <h2>Downloadable Resources</h2>
        </div>
        <div class="grid grid-3">
          ${resourcesPage.downloads.map(downloadCard => (`
            <div class="card">
              <div class="card-icon">${icon.book}</div>
              <h3>${downloadCard.title}</h3>
              <a href="${downloadCard.file}" class="card-link" download="true">Download Here →</a>
            </div>
          `)).join("")}
        </div>
      </div>
    </section>

    <section class="bg-sage">
      <div class="container two-col">
        <div>
          <p class="eyebrow">Reading list</p>
          <h2>Browse my curated professional reading recommendations</h2>
          <p style="margin-top:0.9rem;">Available through my Bookshop.org affiliate store.</p>
          <div class="btn-row" style="margin-top:1.25rem;"><a href="${resourcesPage.bookshopLink}" class="btn btn-primary">Visit the Bookshop.org store</a></div>
        </div>
        <div><img class="photo" src="assets/images/heart-hands-young-man.jpg" alt="Young man forming a heart shape with his hands"></div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container">
        <div class="section-head center">
          <p class="eyebrow">Follow along</p>
          <h2>Our Instagram</h2>
        </div>
        <div class="insta-grid">
          <a class="insta-card" href="https://www.instagram.com/healing_young_hearts/">${icon.instagram}<span>View post</span></a>
          <a class="insta-card" href="https://www.instagram.com/healing_young_hearts/">${icon.instagram}<span>View post</span></a>
          <a class="insta-card" href="https://www.instagram.com/healing_young_hearts/">${icon.instagram}<span>View post</span></a>
          <a class="insta-card" href="https://www.instagram.com/healing_young_hearts/">${icon.instagram}<span>View post</span></a>
        </div>
        <p class="center" style="margin-top:1.25rem;"><a href="https://www.instagram.com/healing_young_hearts/" class="muted-link">Visit our Instagram &rarr;</a></p>
      </div>
    </section>

    ${pillars()}
`;

/* =========================================================
   EVENTS & NETWORKS
   ========================================================= */
const eventsPage = JSON.parse(fs.readFileSync('./content/events.json', 'utf8'));
const eventsBody = `
    <section class="page-hero">
      ${heroBlob('b1', 1)}
      <div class="container">
        <p class="eyebrow">Events &amp; Networks</p>
        <h1>${eventsPage.hero.title}</h1>
        <p class="lede">${eventsPage.hero.description}</p>
      </div>
    </section>

    <section class="bg-white">
      <div class="container">
        <div class="grid grid-2" style="gap:3rem;">
          <div>
            <p class="eyebrow">I offer</p>
            <h2>Professional learning &amp; collaboration</h2>
            <ul class="list-check" style="margin-top:1.25rem;">
              ${eventsPage.services.map(e => (`<li>${icon.check} ${e}</li>`)).join("")}
            </ul>
            <img class="photo" style="margin-top:1.75rem;" src="assets/images/heart-hands-toddler-forest.jpg" alt="A young child forming a heart shape with their hands outdoors">
          </div>
          <div class="card" style="background:var(--neutral-warm-light); box-shadow:none; display:flex; flex-direction:column; justify-content:center;">
            <h3 style="margin-bottom:1rem;">Get in touch to discuss</h3>
            <ul class="list-check">
              ${eventsPage.discussServices.map(ds => (`<li>${icon.check} ${ds}</li>`)).join("")}
            </ul>
            <a href="contact.html" class="btn btn-primary" style="margin-top:1.5rem;">Get in touch</a>
          </div>
        </div>
      </div>
    </section>

    ${pillars()}
`;

/* =========================================================
   BOOK CONSULTATION
   ========================================================= */
const bookBody = `
    <section class="page-hero section-tight">
      ${heroBlob('b1', 1)}
      <div class="container">
        <p class="eyebrow">Book a consultation</p>
        <h1>Book your free consultation</h1>
        <p class="lede">Tell me a little about what you're looking for, and I'll get back to you to arrange a time to talk.</p>
      </div>
    </section>

    <section class="bg-white section-tight">
      <div class="container">
        <div class="grid grid-2" style="gap:3rem; align-items:flex-start;">
          <form class="form-card" id="book-cons-mw" data-mailto="hello@healingyounghearts.co.uk">
            <div class="field">
              <label for="name">Name *</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="field">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="field">
              <label for="message">Your enquiry *</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" class="btn btn-accent">Send Message</button>
            <p class="form-note">This form currently opens a pre-filled email. Connect a form service (e.g. Formspree) for direct inbox delivery.</p>
          </form>
          <div class="card" style="background:var(--sage-light); box-shadow:none;">
            <h3 style="margin-bottom:1.1rem;">What happens next</h3>
            <ul class="list-check">
              <li>${icon.check} I'll reply within 1&ndash;2 working days to arrange a time to talk</li>
              <li>${icon.check} We'll have a short call to understand what your school or organisation needs</li>
              <li>${icon.check} I'll follow up with a tailored proposal &mdash; no obligation</li>
            </ul>
            <div style="margin-top:1.5rem; padding-top:1.25rem; border-top:1px solid rgba(51,51,51,0.1);">
              <p style="font-size:0.88rem;">Prefer email? Reach me directly and I'll get back to you personally.</p>
              <a href="contact.html" class="card-link">Other ways to get in touch &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${pillars()}
`;

/* =========================================================
   TERMS AND CONDITIONS
   ========================================================= */
const termsBody = `
<section class="page-hero section-tight">
  ${heroBlob('b1', 1)}
  <div class="container">
    <p class="eyebrow">Healing Young Hearts</p>
    <h1>Terms and Conditions</h1>
    <p class="lede">These are the terms on which we provide training, consultancy and supervision, and the terms on which you may use this website.</p>
    <p class="lede">
      <strong>Last updated:</strong> 8 August 2026 &nbsp;·&nbsp; <strong>Version:</strong> 1.0
    </p>
  </div>
</section>
<div class="privacy-layout-container">
<div class="privacy-layout">
  <nav class="privacy-contents" aria-label="Contents">
    <h2>On this page</h2>
    <ol>
      <li><a href="#about">About these terms</a></li>
      <li><a href="#booking">Making a booking</a></li>
      <li><a href="#fees">Fees and expenses</a></li>
      <li><a href="#payment">Invoicing and payment</a></li>
      <li><a href="#cancellation-client">Cancellation by you</a></li>
      <li><a href="#cancellation-us">Cancellation by us</a></li>
      <li><a href="#open-courses">Open courses and delegate places</a></li>
      <li><a href="#your-responsibilities">What we need from you</a></li>
      <li><a href="#ip">Our materials and intellectual property</a></li>
      <li><a href="#supervision">Supervision and reflective practice</a></li>
      <li><a href="#safeguarding">Safeguarding</a></li>
      <li><a href="#confidentiality">Confidentiality</a></li>
      <li><a href="#data">Data protection</a></li>
      <li><a href="#insurance">Insurance and liability</a></li>
      <li><a href="#force-majeure">Events outside our control</a></li>
      <li><a href="#complaints">Complaints</a></li>
      <li><a href="#general">General</a></li>
      <li><a href="#website">Website terms of use</a></li>
      <li><a href="#contact">Contact us</a></li>
    </ol>
  </nav>
  <main class="privacy-main">
    <section class="privacy-main-section" id="about">
      <h2>1. About these terms</h2>
      <p>These terms apply to all training, consultancy, supervision and related services provided by Healing Young Hearts Ltd, a company registered in England and Wales, company number 16057232 ("we", "us", "our").</p>
      <p>"You" means the school, college, local authority, organisation or individual booking our services. Where a booking is made by someone acting for an organisation, we treat that organisation as our client and assume the person booking has authority to enter into these terms on its behalf.</p>
      <p>Where we issue a written proposal, quotation or service agreement for a specific piece of work, that document and these terms are read together. If they conflict, the specific document takes precedence.</p>
      <p>These terms replace any earlier version, and apply in place of any purchase terms you may seek to impose, unless we have agreed otherwise in writing.</p>
      <div class="callout">
        <p><strong>Two separate organisations.</strong> Siobhán Garrett is Director of Healing Young Hearts Ltd and is separately engaged as a Regional Lead for Trauma Informed Schools and Communities UK. Where work is commissioned through Trauma Informed Schools and Communities UK, that organisation's terms apply, not these. Your booking confirmation will make clear which organisation you are contracting with.</p>
      </div>
    </section>

    <section class="privacy-main-section" id="booking">
      <h2>2. Making a booking</h2>
      <p>We will normally discuss your needs, then send you a written proposal setting out the scope of the work, the dates, the fee and anything we need from you.</p>
      <p>A contract is formed when you confirm the proposal in writing, by email or by issuing a purchase order. At that point the dates are held for you and the cancellation terms in section 5 begin to apply.</p>
      <p>Bookings for open courses and individual places are confirmed when we acknowledge your booking in writing.</p>
      <p>If you need work to begin before a formal purchase order can be raised, tell us. We will usually proceed on a written email confirmation, but the fee remains payable whether or not a purchase order is subsequently issued.</p>
    </section>

    <section class="privacy-main-section" id="fees">
      <h2>3. Fees and expenses</h2>
      <p>Our fees are set out in the proposal for your work. Unless the proposal says otherwise:</p>
      <ul>
        <li>Fees are quoted per session, per day or per programme, and cover preparation, delivery and any materials described in the proposal</li>
        <li>Travel, accommodation and subsistence are charged in addition, at cost, and estimated in the proposal where they are likely to apply</li>
        <li>Venue hire, refreshments and printing are your responsibility unless we have expressly agreed to arrange them</li>
        <li>Fees quoted for work in the Republic of Ireland may be invoiced in euro, at a rate agreed in the proposal</li>
      </ul>
      <p>We are not currently registered for VAT, so no VAT is charged on our fees and our invoices will not show a VAT element. If our VAT status changes we will tell you before your next booking is confirmed, and any VAT due would be added to fees quoted after that point.</p>
      <p>Quoted fees are valid for 90 days from the date of the proposal. If the scope of the work changes materially after it has been agreed, we will discuss this with you and confirm any change in fee in writing before proceeding.</p>
    </section>

    <section class="privacy-main-section" id="payment">
      <h2>4. Invoicing and payment</h2>
      <p>We invoice on completion of the work, or at agreed points for longer programmes. For programmes running over more than one term we may invoice in instalments as set out in the proposal.</p>
      <p>Invoices are payable within <strong>30 days</strong> of the invoice date, by bank transfer to the account shown on the invoice.</p>
      <p>Places on open courses are payable in full before the course begins, and your place is confirmed once payment is received.</p>
      <p>If an invoice is not paid by the due date we may charge interest and compensation under the Late Payment of Commercial Debts (Interest) Act 1998, and may suspend further work until payment is received. We will always contact you before taking either step.</p>
    </section>

    <section class="privacy-main-section" id="cancellation-client">
      <h2>5. Cancellation and rescheduling by you</h2>
      <p>We understand that schools and colleges face pressures that are outside their control, and we will always try to be flexible. Once a date is confirmed, however, it is held exclusively for you and we turn other work away, so the following applies.</p>
      <div class="table-wrap">
        <table>
          <caption>Charges where you cancel or postpone confirmed work</caption>
          <thead>
            <tr><th scope="col">Notice given before the agreed date</th><th scope="col">Charge</th></tr>
          </thead>
          <tbody>
            <tr><td>More than 20 working days</td><td>No charge</td></tr>
            <tr><td>11 to 20 working days</td><td>50% of the agreed fee</td></tr>
            <tr><td>10 working days or fewer</td><td>100% of the agreed fee</td></tr>
          </tbody>
        </table>
      </div>
      <p>Where a booking covers several dates, these charges apply separately to each date affected.</p>
      <p><strong>Rescheduling.</strong> If you move a date rather than cancel it, and the new date falls within six months and is agreed at the time, we will charge half the rate shown above. A date may be rescheduled once on this basis. Further changes are treated as a cancellation.</p>
      <p><strong>Work already under way.</strong> For consultancy and multi-session programmes, if you end the work early we will invoice for everything delivered up to that point, together with any preparation already carried out for the remaining sessions.</p>
      <p>Any expenses we have already incurred and cannot recover, such as non-refundable travel, remain payable.</p>
      <p>All cancellations and changes must be confirmed in writing to <a href="mailto:siobhan@healingyounghearts.com">siobhan@healingyounghearts.com</a>. The date we receive that written notice is the date used to calculate any charge.</p>
    </section>

    <section class="privacy-main-section" id="cancellation-us">
      <h2>6. Cancellation by us</h2>
      <p>If illness or another unavoidable circumstance means we cannot deliver on an agreed date, we will tell you as soon as we can and offer either an alternative date or a suitably qualified associate to deliver the work. If neither is acceptable to you, we will refund any fee you have paid for that work in full.</p>
      <p>We may cancel an open course if too few delegates have booked. Where this happens we will give as much notice as we can and refund fees paid in full.</p>
      <p>Beyond refunding what you have paid, we are not liable for other costs you may have incurred, such as venue hire or cover arrangements. We recommend you take this into account when booking a venue.</p>
      <p>We may decline or end a piece of work if we consider that continuing would place anyone at risk, would require us to act against our professional or ethical obligations, or if the working relationship has broken down. We will explain our reasons and refund any fee paid for work not yet delivered.</p>
    </section>

    <section class="privacy-main-section" id="open-courses">
      <h2>7. Open courses and delegate places</h2>
      <p>If a named delegate cannot attend, you may send someone else in their place at no extra charge. Let us know in writing before the session so we can update the register and any certificates. Substitutions cannot be made once a multi-session course has started.</p>
      <p>Where a delegate does not attend and no notice has been given, the full fee remains payable and we cannot transfer the place to a later date.</p>
      <p>Where a course is certificated, certificates are issued only to delegates who have attended in full and completed any required assessment.</p>
      <p>Individual delegates booking in a personal capacity have the statutory right to cancel within 14 days of booking. If you ask us to begin providing the course within that period and it then takes place, you lose the right to cancel once the course has been delivered.</p>
    </section>

    <section class="privacy-main-section" id="your-responsibilities">
      <h2>8. What we need from you</h2>
      <p>So that we can deliver the work well, you agree to:</p>
      <ul>
        <li>Provide a suitable room, with the seating layout and equipment described in the proposal, and check that any technology works in advance</li>
        <li>Give us accurate delegate numbers by the date we agree, and tell us about any access, dietary or communication needs in good time</li>
        <li>Ensure delegates are released to attend in full, and that the session is protected from interruption</li>
        <li>Provide the information, documents and access to staff that a consultancy piece requires, when we ask for them</li>
        <li>Tell us in advance about anything that may affect how the session is received, such as a recent bereavement or incident in the setting</li>
        <li>Meet your own responsibilities for the health and safety of everyone present, and tell us your arrangements for fire, first aid and safeguarding on arrival</li>
      </ul>
      <p>Where delays or missing information mean we cannot deliver as planned, we may need to reschedule, and the charges in section 5 may apply.</p>
    </section>

    <section class="privacy-main-section" id="ip">
      <h2>9. Our materials and intellectual property</h2>
      <p>All slides, handouts, audit tools, surveys, reports, frameworks and other materials we produce remain our intellectual property, or that of the third party who licensed them to us. Nothing in these terms transfers ownership to you.</p>
      <p>When you book with us, we give you a licence to use the materials we supply <strong>within your own organisation, for your own internal purposes, for as long as you need them</strong>. That licence does not allow you to:</p>
      <ul>
        <li>Deliver our materials as training to another organisation, or to charge others for their use</li>
        <li>Share them with a wider group such as a trust, federation or local authority beyond the setting that commissioned the work, unless the proposal says so</li>
        <li>Publish them, place them on a public website, or upload them to a platform outside your organisation</li>
        <li>Remove our branding, or present the content as your own</li>
        <li>Adapt them into a new resource for onward distribution without our written agreement</li>
      </ul>
      <p>Sessions may not be recorded, filmed or photographed without our prior written consent. Where we agree to a recording being made, it is for the internal use of the commissioning setting only and for the period we agree.</p>
      <p>Reports we write for you are yours to use within your organisation and to share with your governing body, trustees or inspectorate. Please tell us before sharing a report more widely.</p>
      <div class="callout">
        <p><strong>A note on frameworks.</strong> Healing Young Hearts materials draw on our own Curiosity, Compassion and Connection framework. Materials belonging to Trauma Informed Schools and Communities UK are separate and are licensed to you by that organisation on its own terms. Please do not combine or reproduce them together.</p>
      </div>
    </section>

    <section class="privacy-main-section" id="supervision">
      <h2>10. Supervision and reflective practice</h2>
      <p>Where we provide supervision or reflective practice, the person receiving it is the person we hold as our client, even where the employer is paying. This is what allows supervision to be a genuinely reflective space.</p>
      <p>We do not report the content of supervision sessions back to line managers or commissioners. What we can share is attendance, and themes at a level that identifies no individual, where that has been agreed at the outset.</p>
      <p>The exception is risk. Where something raised in supervision indicates that a child or an adult may be at risk of harm, or that there is a serious concern about professional conduct, we will act on it. We will normally discuss this with the supervisee first and agree the steps together, but we cannot agree to keep such a matter confidential.</p>
      <p>Supervision is professional supervision. It is not therapy, counselling or a substitute for occupational health support, and we will say so and signpost elsewhere if that is what is needed.</p>
    </section>

    <section class="privacy-main-section" id="safeguarding">
      <h2>11. Safeguarding</h2>
      <p>We follow the safeguarding arrangements of the setting we are working in, and we ask to be told who the designated safeguarding lead is on arrival.</p>
      <p>If a disclosure or concern arises during our work, we will pass it to the designated safeguarding lead without delay. If we are not satisfied that it has been acted on, we will refer to the relevant local authority or statutory service ourselves. We cannot agree to keep a safeguarding concern confidential, and this obligation continues after our work with you ends.</p>
      <p>We hold enhanced DBS clearance and our own safeguarding policy, both of which are available to you on request.</p>
    </section>

    <section class="privacy-main-section" id="confidentiality">
      <h2>12. Confidentiality</h2>
      <p>Each of us will keep confidential the information the other shares in the course of the work, and use it only for the purposes of the work. This does not apply to information that is already public, that we develop independently, or that we are required to disclose by law, by a regulator, or under section 11.</p>
      <p>We may name you as a client and describe the nature of the work in general terms. We will not quote you, publish a case study, or use your logo without asking you first.</p>
      <p>These obligations continue after the work ends.</p>
    </section>

    <section class="privacy-main-section" id="data">
      <h2>13. Data protection</h2>
      <p>How we handle personal information is set out in our <a href="/privacy">Privacy Policy</a>, which forms part of these terms.</p>
      <p>Where we hold personal information about your pupils, students or staff in order to deliver work for you, you are the data controller and we act as your processor. In those circumstances we will process the information only on your documented instructions, keep it secure, and delete or return it at the end of the work. We will enter into a written data processing agreement with you where you need one, and we can provide our standard version on request.</p>
      <p>We are registered with the Information Commissioner's Office, reference ZB955850.</p>
    </section>

    <section class="privacy-main-section" id="insurance">
      <h2>14. Insurance and liability</h2>
      <p>We hold professional indemnity and public liability insurance. Certificates are available on request.</p>
      <p>We will deliver our services with reasonable care and skill, and in line with the standards of our profession.</p>
      <p>Our services are advisory. Decisions about your setting, your staff and the children and young people in your care remain yours, and we are not responsible for outcomes that depend on how our advice is implemented.</p>
      <p>Except as set out below, our total liability arising out of any piece of work is limited to the fees paid for that work. We are not liable for loss of profit, loss of anticipated savings, loss of business opportunity, or any indirect or consequential loss.</p>
      <p>Nothing in these terms limits or excludes our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be limited or excluded by law.</p>
    </section>

    <section class="privacy-main-section" id="force-majeure">
      <h2>15. Events outside our control</h2>
      <p>Neither of us is responsible for failing to meet an obligation because of something genuinely outside our control, such as severe weather, transport failure, public health restrictions, a school closure directed by a public authority, or a serious incident in the setting.</p>
      <p>Where this happens we will agree an alternative date wherever possible, and the cancellation charges in section 5 will not apply. Where delivery is not possible at all, each of us may end the arrangement, and we will invoice only for work already delivered and unavoidable costs already incurred.</p>
      <p>Where the barrier is to in-person delivery only, we may offer to deliver online instead, and you are free to accept or decline.</p>
    </section>

    <section class="privacy-main-section" id="complaints">
      <h2>16. Complaints</h2>
      <p>If any part of our work falls short, please tell us. Contact Siobhán Garrett directly at <a href="mailto:siobhan@healingyounghearts.com">siobhan@healingyounghearts.com</a>. We will acknowledge your complaint within five working days and respond fully within twenty.</p>
      <p>We would much rather hear from you early and put something right than have you dissatisfied at the end of a programme.</p>
    </section>

    <section class="privacy-main-section" id="general">
      <h2>17. General</h2>
      <p><strong>Subcontracting.</strong> We may engage associate trainers to deliver work, and we remain responsible for it. Anyone we engage is bound by equivalent confidentiality, safeguarding and data protection obligations.</p>
      <p><strong>Changes.</strong> Any change to an agreed piece of work must be confirmed in writing by both of us. We may update these terms from time to time; the version in force when you confirm a booking is the one that applies to it.</p>
      <p><strong>Whole agreement.</strong> These terms and the proposal for your work set out everything we have agreed, and replace any earlier discussion or correspondence.</p>
      <p><strong>Third parties.</strong> Only you and we have rights under this contract. No one else may enforce it.</p>
      <p><strong>Severability.</strong> If any part of these terms is found to be unenforceable, the rest continues to apply.</p>
      <p><strong>Governing law.</strong> These terms are governed by the law of England and Wales, and the courts of England and Wales have exclusive jurisdiction, including for work delivered in the Republic of Ireland.</p>
    </section>

    <section class="privacy-main-section" id="website">
      <h2>18. Website terms of use</h2>
      <p>By using healingyounghearts.com you accept the following.</p>
      <p>The content of this site is for general information. We keep it as accurate and current as we reasonably can, but we do not guarantee that it is complete, accurate or up to date, and nothing on it is professional advice for your particular circumstances. Any action you take on the basis of it is at your own risk.</p>
      <p>The content, design and branding of this site belong to us or to those who have licensed it to us. You may view it, and print or download extracts for your own non-commercial use. You may not republish it, sell it, or use it commercially without our written permission, and where you do share it, please credit this site as the source.</p>
      <p>We link to other websites for convenience. We do not control them and are not responsible for their content or their privacy practices, and a link is not an endorsement.</p>
      <p>We try to keep the site available at all times, but we are not liable if it is unavailable for any period.</p>
      <p>These website terms are governed by the law of England and Wales.</p>
    </section>

    <section class="privacy-main-section" id="contact">
      <h2>19. Contact us</h2>
      <div class="contact">
        <p><strong>Siobhán Garrett, Director</strong></p>
        <p>Healing Young Hearts Ltd</p>
        <p><a href="mailto:siobhan@healingyounghearts.com">siobhan@healingyounghearts.com</a></p>
        <p>Registered in England and Wales, company number 16057232</p>
      </div>
    </section>

  </main>
  </div>
  </div>
  ${pillars()}
`;


const privacyBody = `
<section class="page-hero section-tight">
  ${heroBlob('b1', 1)}
  <div class="container">
    <p class="eyebrow">Healing Young Hearts</p>
    <h1>Privacy Policy</h1>
    <p class="lede">This notice explains what personal information we collect, why we collect it, how long we keep it, and the rights you have over it under UK data protection law.</p>
    <p class="lede">
      <b>Last updated:</b> 8 August 2026  ·  <b>Version</b>: 1.0
    </p>
  </div>
</section>
<div class="privacy-layout-container">
<div class="privacy-layout">
  <nav class="privacy-contents" aria-label="Contents">
    <h2>On this page</h2>
    <ol>
      <li><a href="#who-we-are">Who we are</a></li>
      <li><a href="#when-we-are-processor">When a school is the data controller</a></li>
      <li><a href="#what-we-collect">Information we collect</a></li>
      <li><a href="#sources">Where we get it from</a></li>
      <li><a href="#why">Why we use it, and our lawful basis</a></li>
      <li><a href="#special-category">Health, access and safeguarding information</a></li>
      <li><a href="#recordings">Recordings and photographs</a></li>
      <li><a href="#marketing">Our mailing list</a></li>
      <li><a href="#sharing">Who we share information with</a></li>
      <li><a href="#transfers">Transfers outside the UK</a></li>
      <li><a href="#retention">How long we keep it</a></li>
      <li><a href="#security">How we keep it safe</a></li>
      <li><a href="#cookies">Cookies, this website and other sites</a></li>
      <li><a href="#rights">Your rights</a></li>
      <li><a href="#complaints">Complaints</a></li>
      <li><a href="#changes">Changes to this notice</a></li>
      <li><a href="#contact">Contact us</a></li>
    </ol>
  </nav>
  <main class="privacy-main">
    <section class="privacy-main-section" id="who-we-are">
      <h2>1. Who we are</h2>
      <p>Healing Young Hearts Ltd ("Healing Young Hearts", "we", "us") is a training and consultancy practice working with schools, colleges, local authorities and other organisations across the UK and Ireland.</p>
      <p>For the information described in this notice, we are the <strong>data controller</strong>. That means we decide what personal information is collected and how it is used.</p>
      <div class="contact">
        <p><strong>Healing Young Hearts Ltd</strong></p>
        <p>Registered in England and Wales, company number 16057232</p>
        <p>Email: <a href="mailto:siobhan@healingyounghearts.com">siobhan@healingyounghearts.com</a></p>
        <p>Information Commissioner's Office registration number: ZB955850</p>
      </div>
      <p>Siobhán Garrett, Director, is responsible for data protection at Healing Young Hearts. We are not required to appoint a Data Protection Officer, but any question about how we handle personal information can be sent to the address above.</p>
    </section>

    <section class="privacy-main-section" id="when-we-are-processor">
      <h2>2. When a school or organisation is the data controller</h2>
      <p>Much of our work involves supporting organisations to think about children and young people they are responsible for. Where a school, college, local authority or other organisation shares personal information with us about its pupils, students, service users or staff — for example during a consultancy visit, a case discussion or a supervision session — <strong>that organisation remains the data controller</strong> and we act as a <strong>data processor</strong> on its behalf.</p>
      <p>In those circumstances we handle the information only on the organisation's documented instructions, under a written agreement that meets Article 28 of the UK GDPR. If you are a parent, pupil or member of staff and you want to know how your information is being used in that context, please contact the organisation directly in the first instance. You are also welcome to contact us and we will help you reach the right person.</p>
      <p>The rest of this notice describes the information for which we are the controller in our own right.</p>
    </section>

    <section class="privacy-main-section" id="what-we-collect">
      <h2>3. Information we collect</h2>

      <h3>If you contact us or make an enquiry</h3>
      <ul>
        <li>Your name, job role and the organisation you work for</li>
        <li>Your email address and telephone number</li>
        <li>The content of your enquiry and any correspondence that follows</li>
      </ul>

      <h3>If your organisation books training or consultancy</h3>
      <ul>
        <li>Contact details for the people arranging and hosting the work</li>
        <li>Booking details: dates, venue, delegate numbers, agreed scope and fee</li>
        <li>Billing contact details and purchase order references</li>
        <li>Records of correspondence, planning notes and reports arising from the work</li>
      </ul>

      <h3>If you attend training with us</h3>
      <ul>
        <li>Your name, role, setting and work email address</li>
        <li>Attendance records and, where a course is certificated, records of completion</li>
        <li>Any evaluation or feedback you choose to give us</li>
        <li>Any dietary, access or health information you tell us about so we can make reasonable adjustments</li>
        <li>For online sessions, your display name and any messages you send in the chat</li>
      </ul>

      <h3>If you join our mailing list</h3>
      <ul>
        <li>Your name and email address, and optionally your role and setting</li>
        <li>A record of your consent, including the date and the form you used</li>
        <li>Whether our emails were opened and which links were clicked, so we can see what is useful</li>
      </ul>

      <h3>If you are an associate, supplier or applicant</h3>
      <ul>
        <li>Contact and payment details, and records needed to manage the working relationship</li>
        <li>For associates: qualifications, DBS status and insurance details where relevant to the work</li>
      </ul>

      <h3>If you visit this website</h3>
      <ul>
        <li>Technical information such as your IP address, browser type and the pages you visited, collected by our hosting provider in its server logs for security and reliability</li>
      </ul>

      <h3>Anonymised and aggregated information</h3>
      <p>We also produce anonymised and aggregated information — for example, the proportion of delegates who rated a session as useful, or summary findings from a belonging audit. This is not personal data in law, because it cannot identify anyone, and we may use it in reports, proposals, evaluations and academic work. If we ever combined it with information that did identify you, we would treat the result as personal data and handle it as set out in this notice.</p>

      <h3>If you do not give us the information we ask for</h3>
      <p>Where we need information to deliver work we have agreed to do, or to meet a legal obligation, we may not be able to go ahead without it. We will tell you at the time if that is the case.</p>
    </section>

    <section class="privacy-main-section" id="sources">
      <h2>4. Where we get your information from</h2>
      <p>Most of the personal information we hold comes directly from you, when you contact us, book or attend our work, join our mailing list or give us feedback.</p>
      <p>We also receive or collect information from:</p>
      <ul>
        <li><strong>The organisation you work for</strong>, when it books training or consultancy and gives us delegate lists or contact details for the people we will be working with</li>
        <li><strong>Publicly available sources</strong>, such as school and college websites, published staff directories and professional networking sites, where we are identifying the right person to contact about our work. We only use business contact details obtained this way, and we stop contacting you as soon as you ask us to</li>
        <li><strong>Our service providers</strong>, such as our mailing list provider, which tells us whether an email was opened or a link followed</li>
      </ul>
    </section>

    <section class="privacy-main-section" id="why">
      <h2>5. Why we use your information, and our lawful basis</h2>
      <p>Under the UK GDPR we must have a lawful basis for using personal information. Ours are set out below.</p>
      <div class="table-wrap">
        <table>
          <caption>How and why we use personal information</caption>
          <thead>
            <tr><th scope="col">What we do</th><th scope="col">Our lawful basis</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Respond to enquiries and prepare proposals</td>
              <td><strong>Legitimate interests</strong> — replying to someone who has approached us about our services</td>
            </tr>
            <tr>
              <td>Agree and deliver training and consultancy, including planning, invoicing and reporting</td>
              <td><strong>Contract</strong> where you contract with us as an individual; <strong>legitimate interests</strong> where the contract is with your organisation and we need to deal with you as its representative</td>
            </tr>
            <tr>
              <td>Manage attendance, issue certificates and keep training records</td>
              <td><strong>Legitimate interests</strong> — running our courses properly and evidencing completion</td>
            </tr>
            <tr>
              <td>Ask for and review feedback to improve our practice</td>
              <td><strong>Legitimate interests</strong> — improving the quality of what we deliver</td>
            </tr>
            <tr>
              <td>Send our email newsletter and details of training</td>
              <td><strong>Consent</strong>, which you can withdraw at any time</td>
            </tr>
            <tr>
              <td>Keep accounting and tax records</td>
              <td><strong>Legal obligation</strong> — company and tax law</td>
            </tr>
            <tr>
              <td>Maintain insurance, deal with complaints and establish or defend legal claims</td>
              <td><strong>Legitimate interests</strong> — protecting the business</td>
            </tr>
            <tr>
              <td>Keep our website secure and available</td>
              <td><strong>Legitimate interests</strong> — security and reliability</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Where we rely on legitimate interests, we have considered whether our interest is outweighed by your rights and freedoms. You can ask us for a summary of that assessment, and you have the right to object (see section 14).</p>
      <h3>If we want to use your information for something else</h3>
      <p>We use personal information only for the purposes we collected it for, unless the new purpose is compatible with the original one. If we need to use it for an unrelated purpose, we will tell you and explain the lawful basis for doing so. In limited circumstances the law allows or requires us to process information without your knowledge or consent — safeguarding is the main example.</p>
    </section>

    <section class="privacy-main-section" id="special-category">
      <h2>6. Health, access and safeguarding information</h2>
      <p>Some information is treated as "special category" data under the UK GDPR and needs extra protection.</p>
      <h3>Access and health needs</h3>
      <p>If you tell us about a health condition, disability, dietary requirement or access need so that we can make an adjustment for you, we use that information on the basis of your <strong>explicit consent</strong> (Article 9(2)(a)). We share it only with the people who need it to make the adjustment, and we delete it once the session has taken place.</p>
      <h3>Safeguarding</h3>
      <p>Our work is with adults, but it concerns children and young people, and disclosures sometimes arise. If, during a training session, consultancy visit or conversation, we receive information that suggests a child or an adult at risk may be being harmed, <strong>we will pass it to the designated safeguarding lead of the setting concerned, and to the relevant statutory services if the setting does not act</strong>. We will normally tell you that we are doing this, unless doing so would increase the risk of harm.</p>
      <p>Where this involves special category information, we rely on the substantial public interest condition for safeguarding children and individuals at risk (Article 9(2)(g) of the UK GDPR and paragraph 18 of Schedule 1 to the Data Protection Act 2018). We do not need your consent to make a safeguarding referral, and we cannot agree to keep a disclosure of this kind confidential.</p>
      <div class="callout">
        <p>If you are worried about a child right now, contact the setting's designated safeguarding lead, your local authority children's services, or the NSPCC helpline on 0808 800 5000. In an emergency, call 999.</p>
      </div>
    </section>

    <section class="privacy-main-section" id="recordings">
      <h2>7. Recordings and photographs</h2>
      <p>We sometimes record online sessions so that delegates who could not attend can catch up, and we sometimes take photographs at in-person training. If a session is being recorded we will tell you at the start, and you can keep your camera off, mute your microphone and change your display name so that you do not appear in it.</p>
      <p>We use photographs and recordings in our own promotional material only with your explicit consent, which we ask for separately and which you can withdraw at any time. We do not use images of children or young people in promotional material.</p>
      <p>Where a recording captures a delegate talking about their own experience, we treat it as special category information and do not share or reuse it without asking you first.</p>
    </section>

    <section class="privacy-main-section" id="marketing">
      <h2>8. Our mailing list</h2>
      <p>We send occasional emails about our training, resources and practice. You will only receive them if you have asked to. When you sign up we send a confirmation email and add you to the list only once you click the link in it, so nobody is added by mistake.</p>
      <p>Every email we send includes an unsubscribe link, and you can also email us to be removed. Unsubscribing takes effect immediately and does not affect anything else we do for you.</p>
      <p>Our mailing list is managed using Mailchimp. Mailchimp records whether emails are opened and which links are clicked, which we use to judge whether our content is useful. We do not sell or rent our list, and we do not share it with any other organisation, including Trauma Informed Schools and Communities UK.</p>
    </section>

    <section class="privacy-main-section" id="sharing">
      <h2>9. Who we share information with</h2>
      <p>We do not sell personal information. We share it only where we need to:</p>
      <ul>
        <li><strong>Service providers</strong> who process information on our behalf under contract, including our email and document provider (Google Workspace), our mailing list provider (Mailchimp, part of Intuit), our records and project systems (Airtable and Basecamp), our accounting system (FreeAgent), our website host (Vercel) and our video conferencing provider (Zoom)</li>
        <li><strong>Our accountant</strong>, and HMRC and Companies House where the law requires</li>
        <li><strong>Our insurers and professional advisers</strong>, where we need advice or need to notify a claim</li>
        <li><strong>Associate trainers</strong> we engage to deliver work for us, who are bound by confidentiality and data protection terms</li>
        <li><strong>Venues</strong> hosting our training, where they need delegate numbers, names for signing in, or dietary and access requirements</li>
        <li><strong>Commissioners and funders</strong>, where a programme is funded by a local authority or similar body and we report on it. We report anonymised and aggregated findings unless you have agreed otherwise</li>
        <li><strong>Safeguarding and statutory bodies</strong>, in the circumstances described in section 6</li>
        <li><strong>A buyer</strong>, if the business is ever sold or reorganised</li>
      </ul>
      <div class="callout">
        <p><strong>A note on our two roles.</strong> Siobhán Garrett is also Regional Lead for Greater London and the South East at Trauma Informed Schools and Communities UK. Where work is commissioned through Trauma Informed Schools and Communities UK, that organisation is the data controller and its own privacy notice applies. The two organisations keep separate records, and we do not transfer contact details between them.</p>
      </div>
    </section>

    <section class="privacy-main-section" id="transfers">
      <h2>10. Transfers outside the UK</h2>
      <p>Some of our service providers are based in, or store data in, the United States. Where personal information is transferred outside the UK, we make sure it is protected by one of the safeguards the law allows: the UK Extension to the EU–US Data Privacy Framework where the provider is certified, or the International Data Transfer Agreement or UK Addendum to the standard contractual clauses. You can ask us for details of the safeguard in place for any particular provider.</p>
    </section>

    <section class="privacy-main-section" id="retention">
      <h2>11. How long we keep your information</h2>
      <p>We keep personal information only as long as we need it, and then delete it.</p>
      <div class="table-wrap">
        <table>
          <caption>Our retention periods</caption>
          <thead>
            <tr><th scope="col">Information</th><th scope="col">How long we keep it</th></tr>
          </thead>
          <tbody>
            <tr><td>Enquiries that do not lead to work</td><td>12 months from the last contact</td></tr>
            <tr><td>Client contracts, bookings and correspondence</td><td>6 years from the end of the contract</td></tr>
            <tr><td>Invoices and accounting records</td><td>6 years from the end of the financial year they relate to, as required by tax law</td></tr>
            <tr><td>Training attendance and certification records</td><td>3 years, so that we can confirm attendance if you need us to</td></tr>
            <tr><td>Evaluation and feedback</td><td>Anonymised within 12 months, then kept in anonymous form</td></tr>
            <tr><td>Access and dietary information</td><td>Deleted within 1 month of the session</td></tr>
            <tr><td>Safeguarding records</td><td>In line with the statutory guidance that applies, and normally handed to the setting's designated safeguarding lead rather than kept by us</td></tr>
            <tr><td>Mailing list details</td><td>Until you unsubscribe. We also review subscribers who have not opened an email in 24 months and remove them</td></tr>
            <tr><td>Website server logs</td><td>Up to 30 days</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="privacy-main-section" id="security">
      <h2>12. How we keep it safe</h2>
      <p>We use reputable providers, protect our accounts with strong passwords and two-factor authentication, encrypt information in transit and at rest, and limit access to those who need it. Devices are password-protected and encrypted. We review what we hold and delete what we no longer need.</p>
      <p>No system is completely secure. If a breach occurs that is likely to put your rights at risk, we will tell you, and we will report it to the Information Commissioner's Office within 72 hours where the law requires.</p>
    </section>

    <section class="privacy-main-section" id="cookies">
      <h2>13. Cookies, this website and other sites</h2>
      <p>This website does not use tracking or advertising cookies, and it does not profile visitors. Our host records standard server log information, described in section 3, to keep the site secure and running.</p>
      <p>If you follow a link from our site to another organisation's site, plug-in or application, that organisation's own privacy notice will apply. We do not control those sites and are not responsible for their privacy practices, so we encourage you to read their notices.</p>
      <p>The same applies if you interact with us on social media, or join a session through a third-party platform. Your use of those platforms is governed by their own terms and privacy notices as well as this one.</p>
    </section>

    <section class="privacy-main-section" id="rights">
      <h2>14. Your rights</h2>
      <p>Under UK data protection law you have the right to:</p>
      <ul>
        <li><strong>Be informed</strong> about how we use your information — this notice</li>
        <li><strong>Access</strong> a copy of the personal information we hold about you</li>
        <li><strong>Rectification</strong> — have inaccurate information corrected</li>
        <li><strong>Erasure</strong> — ask us to delete your information, where we have no continuing reason to keep it</li>
        <li><strong>Restrict processing</strong> — ask us to pause our use of your information while a concern is resolved</li>
        <li><strong>Object</strong> to processing we carry out on the basis of legitimate interests, and to direct marketing at any time</li>
        <li><strong>Data portability</strong> — receive information you gave us in a machine-readable format, where processing is based on consent or contract and is automated</li>
        <li><strong>Withdraw consent</strong> at any time, where we rely on it. This does not affect anything we did before you withdrew it</li>
      </ul>
      <p>To exercise any of these rights, email <a href="mailto:siobhan@healingyounghearts.com">siobhan@healingyounghearts.com</a>. We will respond within one month. There is no charge. We may ask you to confirm your identity before we release information.</p>
    </section>

    <section class="privacy-main-section" id="complaints">
      <h2>15. Complaints</h2>
      <p>If you are unhappy with how we have handled your information, please tell us first so we can put it right. You also have the right to complain to the Information Commissioner's Office:</p>
      <div class="contact">
        <p><strong>Information Commissioner's Office</strong></p>
        <p>Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</p>
        <p>Helpline: 0303 123 1113</p>
        <p><a href="https://ico.org.uk/make-a-complaint/" rel="noopener">ico.org.uk/make-a-complaint</a></p>
      </div>
      <p>If your query concerns information held about a child by a school or local authority we work with, that organisation is the controller and the complaint should be directed to them.</p>
    </section>

    <section class="privacy-main-section" id="changes">
      <h2>16. Changes to this notice</h2>
      <p>We review this notice at least once a year and whenever our practice changes. The date at the top shows when it was last updated. Where a change materially affects how we use information you have given us, we will tell you directly.</p>
    </section>

    <section class="privacy-main-section" id="contact">
      <h2>17. Contact us</h2>
      <p>For anything to do with this notice, or with personal information more generally:</p>
      <div class="contact">
        <p><strong>Siobhán Garrett, Director</strong></p>
        <p>Healing Young Hearts Ltd</p>
        <p><a href="mailto:siobhan@healingyounghearts.com">siobhan@healingyounghearts.com</a></p>
      </div>
    </section>

    </main>
  </div>
  </div>
  ${pillars()}
`;

/* =========================================================
   CONTACT
   ========================================================= */
const contactPage = JSON.parse(fs.readFileSync('./content/contact.json', 'utf8'));
const contactBody = `
    <section class="page-hero">
      ${heroBlob('b1', 1)}
      <div class="container">
        <p class="eyebrow">Contact</p>
        <h1>${contactPage.hero.title}</h1>
        <p class="lede">${contactPage.hero.description}</p>
      </div>
    </section>

    <section class="bg-white">
      <div class="container">
        <div class="grid grid-2" style="gap:3rem; align-items:flex-start;">
          <div>
            <h2 style="margin-bottom:1rem;">I work with</h2>
            <ul class="list-check">
              ${contactPage.audiences.map(aud => (`<li>${icon.check} ${aud}</li>`)).join("")}
            </ul>
            <h3 style="margin-top:2rem; margin-bottom:0.6rem;">Contact options</h3>
            <p>Training &amp; consultancy enquiries, speaking requests, partnership opportunities, network information, supervision enquiries &mdash; or book a call below.</p>
            <div class="btn-row" style="margin-top:1.25rem;"><a href="book-consultation.html" class="btn btn-accent">Book a Discovery Call</a></div>
            <div style="margin-top:2rem; display:flex; gap:1rem;">
              <a href="https://www.linkedin.com/in/siobh%C3%A1n-garrett-b1b4a51b6/" aria-label="LinkedIn">${icon.linkedin}</a>
              <a href="https://www.instagram.com/healing_young_hearts/" aria-label="Instagram">${icon.instagram}</a>
              <a href="https://uk.bookshop.org/shop/HYH/" aria-label="Bookshop.org">${icon.bookshop}</a>
            </div>
          </div>
          <form class="form-card" id="contact-form-mw" data-mailto="hello@healingyounghearts.co.uk">
            <div class="field"><label for="c-name">Name *</label><input type="text" id="c-name" name="name" required></div>
            <div class="field"><label for="c-email">Email *</label><input type="email" id="c-email" name="email" required></div>
            <div class="field"><label for="c-message">Your enquiry *</label><textarea id="c-message" name="message" required></textarea></div>
            <button type="submit" class="btn btn-accent">Send Message</button>
            <p class="form-note">This form currently opens a pre-filled email. Connect a form service for direct inbox delivery.</p>
          </form>
        </div>
      </div>
    </section>

    <section class="bg-sage section-tight">
      <div class="container">
        <p class="center" style="font-size:1.1rem; color:var(--teal-deepest); font-weight:500; max-width:680px;">Together, we can create relational, compassionate and emotionally sustainable environments where children, young people and adults feel safe, connected and able to thrive.</p>
      </div>
    </section>

    ${pillars()}
`;

/* ---------------- Write files ---------------- */
const pages = [
  { slug: 'index.html', title: 'Trauma-Informed Training & Consultancy', description: "Healing Young Hearts Ltd provides trauma-informed training and consultancy for schools, colleges and organisations.", body: homeBody },
  { slug: 'about.html', title: 'About', description: 'About Siobh\u00e1n Garrett, founder of Healing Young Hearts.', body: aboutBody },
  { slug: 'services.html', title: 'Services', description: 'Training, consultancy, speaking, systems change and supervision.', body: servicesBody },
  { slug: 'testimonials.html', title: 'Testimonials', description: 'Feedback and impact from schools and organisations.', body: testimonialsBody },
  { slug: 'resources.html', title: 'Resources', description: 'Articles, reading recommendations and resources.', body: resourcesBody },
  { slug: 'events-networks.html', title: 'Events & Networks', description: 'Professional learning, networks and events.', body: eventsBody },
  { slug: 'book-consultation.html', title: 'Book a Consultation', description: 'Book a free consultation with Healing Young Hearts.', body: bookBody },
  { slug: 'terms.html', title: 'Terms and Conditions', description: 'Terms and Conditions of Healing Young Hearts website.', body: termsBody },
  { slug: 'privacy.html', title: 'Privacy Policy', description: 'Privacy Policy of Healing Young Hearts website.', body: privacyBody },
  { slug: 'contact.html', title: 'Contact', description: 'Get in touch with Healing Young Hearts.', body: contactBody },
];

pages.forEach(p => {
  const html = page(p);
  fs.writeFileSync(path.join(OUT, p.slug), html);
  console.log('wrote', p.slug);
});
