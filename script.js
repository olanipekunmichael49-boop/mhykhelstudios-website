document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const details = form.querySelector('textarea[name="details"]').value.trim();
    const recipient = 'olanipekunmichael49@gmail.com';

    const subject = encodeURIComponent(`AI Video Inquiry from ${name || 'website visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${details}`);
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    const button = form.querySelector('button');
    button.textContent = 'Opening mail...';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = 'Send Inquiry';
      button.disabled = false;
      form.reset();
    }, 2000);
  });
});
