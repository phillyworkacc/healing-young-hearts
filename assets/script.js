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
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var to = "hello@healingyounghearts.co.uk"
  var name = form.querySelector('[name="name"]').value;
  var email = form.querySelector('[name="email"]').value;
  var message = form.querySelector('[name="message"]').value;
  var subject = encodeURIComponent('Website enquiry from ' + (name ? name.value : ''));
  var body = encodeURIComponent(
    'Name: ' + (name ? name.value : '') + '\n' +
    'Email: ' + (email ? email.value : '') + '\n\n' +
    (message ? message.value : '')
  );
  
  const mailLink = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
  console.log({ name, email, message });
  window.open(mailLink, '_blank');
})