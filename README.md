# Healing Young Hearts — website

A complete, ready-to-deploy 8-page website matching your design brief
(teal / orange / purple / sage palette, Poppins + Nunito Sans, organic
shapes, card-based layouts). Plain HTML/CSS/JS — no build step, no
framework, nothing to install.

## What's included

```
index.html              Home
about.html               About
services.html            Services (Training, Consultancy, Speaker, Systems Change, Supervision)
testimonials.html        Testimonials & impact
resources.html           Resources & recommended reading
events-networks.html     Events & Networks
book-consultation.html   Book a Consultation
contact.html             Contact
assets/styles.css        All styling
assets/script.js         Mobile nav + form handling
```

## Deploying to Vercel (no developer needed)

**Option A — drag and drop (easiest)**
1. Go to vercel.com and log in.
2. Click "Add New… → Project".
3. Drag this whole folder onto the upload area.
4. Click Deploy. You'll have a live URL in under a minute.

**Option B — connect your domain**
Once deployed, go to your Vercel project → Settings → Domains, and add
your Google domain. Vercel will give you DNS records (usually a single
A record or CNAME) to add at your domain registrar. This only affects
web traffic — your Google Workspace email (MX records) is untouched,
so email keeps working exactly as it does now.

## Editing copy yourself

Every page is a plain HTML file you can open in any text editor —
even Notepad or TextEdit will do, though something like VS Code makes
it easier to see the structure. Text content sits in plain English
inside the markup, e.g.:

```html
<h1>Helping adults create the conditions for young hearts to heal and thrive.</h1>
```

Change the words between the tags, save, and re-deploy (Vercel
redeploys automatically if connected to GitHub, or you can drag the
folder in again).

## Known placeholders to swap in later

- **Logo**: the header/footer currently use a simple drawn circle
  motif standing in for your logo. Swap in your real logo file
  (replace the `brandmark` SVG in each page, or ask whoever builds
  on this to drop in `logo.png`).
- **Photography**: real photos are now in place throughout
  (`assets/images/`), all licensed Pexels stock photos optimised for
  web. If you'd rather use original photography of your own training
  sessions and schools later, just swap the `<img src="...">` paths.
- **Forms**: the contact and booking forms currently open a pre-filled
  email (no backend required, works immediately). For submissions to
  land directly in an inbox or CRM, connect a form service such as
  Formspree or Getform — typically a five-minute change to the `
  <form>` tag's `action` attribute.
- **Instagram feed**: the four tiles on the Resources page link out to
  your Instagram profile but don't pull live posts. An embed service
  (e.g. SnapWidget, Elfsight) can show real thumbnails if wanted.

## Notes

- Built mobile-responsive throughout — tested down to 390px width.
- Fonts (Poppins, Nunito Sans) load from Google Fonts automatically;
  no installation needed.
- Nothing here requires Node, npm, or a build step to view or deploy
  — these are the actual files a browser reads.
