const websiteConfig = {
  name: "Healing Young Hearts",
  minwebBusinessId: "f36ea77b788644b08fcd83f6e372da7e",
  formsUrl: "https://app.minwebagency.com/api/forms/custom",
  emailTo: "siobhan@healingyounghearts.com"
}

function formatMilliseconds(ms, withoutTime, shortHandMonth) {
  const date = new Date(ms);

  const day = date.getDate();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const timePeriod = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const formattedMinutes = minutes.toString().padStart(2, '0');

  return withoutTime
    ? `${day} ${shortHandMonth ? month.substring(0,3) : month} ${year}`
    : `${day} ${shortHandMonth ? month.substring(0,3) : month} ${year}, ${hours}:${formattedMinutes} ${timePeriod}`
}

  const contactFormEmail = (name, email, phone, message) => {
   return `Hello Siobhán,
<br /><br />
You've received a new message through the Contact Us form on your website.
<br /><br />
Here are the details:
<br /><br />
Name: ${name}<br />
Email: ${email}<br />
Phone (if provided): ${phone}
<br /><br />
Message:<br />
${message}
<br /><br />
Submitted on: ${formatMilliseconds(Date.now())}
<br /><br />
—<br />
Website Notification<br />
${websiteConfig.name}`;
}
  const bookingConsultationFormTemplate = (name, email, phone, message) => {
   return `Hello Siobhán,
<br /><br />
You've received a new free consultation booking request through your website.
<br /><br />
Here are the details:
<br /><br />
Name: ${name}<br />
Email: ${email}<br />
Phone (if provided): ${phone}
<br /><br />
Message:<br />
${message}
<br /><br />
Submitted on: ${formatMilliseconds(Date.now())}
<br /><br />
—<br />
Website Notification<br />
${websiteConfig.name}`;
}

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

});

const form = document.querySelector("form.form-card");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  var name = form.querySelector('[name="name"]').value;
  var email = form.querySelector('[name="email"]').value;
  var message = form.querySelector('[name="message"]').value;

  if (form.attributes.getNamedItem("id").value == "book-cons-mw") {
    var subject = `${websiteConfig.name} - Consultation Booking Submission`;
    var emailBody = bookingConsultationFormTemplate(name, email, undefined, message);

    try {
      const response = await fetch(websiteConfig.formsUrl, {
        method: "POST",
        body: JSON.stringify({
          subject, message: emailBody, minwebBusinessId: websiteConfig.minwebBusinessId, to: websiteConfig.emailTo
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log(data);
      alert(JSON.parse(data).success ? "Consultation Request Sent" : "Message failed to send. Please try again.");
    } catch (e) {
      alert("Message failed to send. Please try again.")
    }
  } else {
    var subject = `${websiteConfig.name} - Contact Form Submission`;
    var emailBody = contactFormEmail(name, email, undefined, message);
  
    try {
      const response = await fetch(websiteConfig.formsUrl, {
        method: "POST",
        body: JSON.stringify({
          subject, message: emailBody, minwebBusinessId: websiteConfig.minwebBusinessId, to: websiteConfig.emailTo
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log(data);
      alert(JSON.parse(data).success ? "Message Sent" : "Message failed to send. Please try again.");
    } catch (e) {
      alert("Message failed to send. Please try again.")
    }
  }
})
