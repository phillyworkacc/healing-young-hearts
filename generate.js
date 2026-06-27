const fs = require('fs');
const path = require('path');

const OUT = '/home/claude/site';

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
        ${home.stats.map(stat => (`<div><div class="stat-num">${stat.value}</div><div class="stat-label">${stat.label}</div></div>`))}
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
          ${home.focusAreas.map(fa => (`<div class="tile">${fa}</div>`))}
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
            style="margin-top:1.5rem; max-width:380px; display:flex; gap:0.6rem;"
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
        <div><img class="photo portrait" src="assets/images/heart-tattoo-hands.jpg" alt="Close-up of hands reaching out, with a small heart tattoo"></div>
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
          `))}
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
          `))}
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
          `))}
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
              ${eventsPage.services.map(e => (`<li>${icon.check} ${e}</li>`))}
            </ul>
            <img class="photo" style="margin-top:1.75rem;" src="assets/images/heart-hands-toddler-forest.jpg" alt="A young child forming a heart shape with their hands outdoors">
          </div>
          <div class="card" style="background:var(--neutral-warm-light); box-shadow:none; display:flex; flex-direction:column; justify-content:center;">
            <h3 style="margin-bottom:1rem;">Get in touch to discuss</h3>
            <ul class="list-check">
              ${eventsPage.discussServices.map(ds => (`<li>${icon.check} ${ds}</li>`))}
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
          <form class="form-card" data-mailto="hello@healingyounghearts.co.uk">
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
        <p class="lede">These Terms and Conditions (“Terms”) govern your use of the website operated by Healing Young Hearts (“we”, “us”, or “our”) and the services we provide.</p>
        <p class="lede">By using our website or engaging our services, you agree to these Terms.</p>
      </div>
    </section>

    <section class="bg-white">
      <div class="container">
				<h3>About Us</h3>
				<p style="margin-top: 0.5rem;">Healing Young Hearts</p>
				<p>Epping, Essex, CM16 5AG.</p>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Use of Our Website</h3>
				<p style="margin-top: 0.5rem;">You may use our website for lawful purposes only. You must not:</p>
				<ul class="list-check">
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Use the website in any way that breaches applicable UK laws or regulations</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Attempt to gain unauthorised access to the website or its systems</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Copy, reproduce, or distribute website content without permission</li>
				</ul>
				<p style="margin-top: 0.5rem;">We may suspend or withdraw access to our website at any time without notice.</p>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Services and Quotations</h3>
				<ul class="list-check">
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Any information provided on our website is for general guidance only</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Quotes or estimates are provided based on the information available at the time</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Final pricing may change if the scope of work changes or unforeseen issues arise</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> All services are subject to availability</li>
				</ul>
				<p style="margin-top: 0.5rem;">Unless otherwise agreed in writing, quotes are valid for [e.g. 30 days].</p>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Appointments and Cancellations</h3>
				<ul class="list-check">
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Appointment times are estimates and may be affected by factors outside our control</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> If you need to cancel or reschedule, please provide reasonable notice</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> We reserve the right to charge for missed appointments or late cancellations where applicable</li>
				</ul>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Payment Terms</h3>
				<ul class="list-check">
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Payment terms will be agreed before work begins</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Payment is due upon completion of services unless otherwise agreed in writing</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Late payments may result in additional charges or suspension of future services</li>
				</ul>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Customer Responsibilities</h3>
				<p style="margin-top: 0.5rem;">You agree to:</p>
				<ul class="list-check">
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Provide accurate information about the property and work required</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Ensure safe and reasonable access to the property</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Inform us of any known hazards, restrictions, or special requirements</li>
				</ul>
				<p style="margin-top: 0.5rem;">We are not responsible for delays or issues caused by incomplete or inaccurate information.</p>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Intellectual Property</h3>
				<p style="margin-top: 0.5rem;">All content on this website, including text, logos, images, and designs, is owned by or licensed to Healing Young Hearts and may not be used without prior written consent.</p>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Limitation of Liability</h3>
				<p style="margin-top: 0.5rem;">To the fullest extent permitted by UK law:</p>
				<ul class="list-check">
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> We are not liable for any indirect, incidental, or consequential losses</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> We are not responsible for losses caused by events beyond our reasonable control</li>
					<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg> Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under UK law</li>
				</ul>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Warranties and Guarantees</h3>
				<p style="margin-top: 0.5rem;">Any guarantees or warranties provided will be clearly communicated in writing and apply only to the specific services agreed.</p>
				<p>Statutory consumer rights under UK law are not affected.</p>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Third-Party Links</h3>
				<p style="margin-top: 0.5rem;">Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those websites.</p>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Privacy and Data Protection</h3>
				<p style="margin-top: 0.5rem;">Your use of our website and services is also governed by our Privacy Policy, which explains how we collect and use personal data in accordance with UK GDPR.</p>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Changes to These Terms</h3>
				<p style="margin-top: 0.5rem;">We may update these Terms from time to time. Any changes will take effect once published on this page.</p>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Governing Law</h3>
				<p style="margin-top: 0.5rem;">These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </div>
			
			<br><br>

      <div class="container">
				<h3>Contact Us</h3>
				<p style="margin-top: 0.5rem;">If you have any questions about this Privacy Policy or how we handle your data, please contact:</p>
      </div>
    </section>

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
              ${contactPage.audiences.map(aud => (`<li>${icon.check} ${aud}</li>`))}
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
          <form class="form-card" data-mailto="hello@healingyounghearts.co.uk">
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
  { slug: 'contact.html', title: 'Contact', description: 'Get in touch with Healing Young Hearts.', body: contactBody },
];

pages.forEach(p => {
  const html = page(p);
  fs.writeFileSync(path.join(OUT, p.slug), html);
  console.log('wrote', p.slug);
});
