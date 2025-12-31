const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');
const callNow = document.getElementById('callNow');
const bookNow = document.getElementById('bookNow');
const estimateBtn = document.getElementById('estimateBtn');
const toast = document.getElementById('toast');

navToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.textContent = nav.classList.contains('open') ? 'Close' : 'Menu';
});

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
};

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = 'contact.html';
  }
};
[callNow, bookNow, estimateBtn].forEach((btn) => btn?.addEventListener('click', scrollToContact));

// Learn-more drawers (services page)
const learnButtons = document.querySelectorAll('[data-toggle="learn"]');
learnButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    target.classList.toggle('open');
    btn.textContent = target.classList.contains('open') ? 'Hide details' : 'Learn more';
  });
});

// Accordions (services page)
const accButtons = document.querySelectorAll('.acc-btn');
accButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const panel = document.getElementById(btn.dataset.acc);
    const isOpen = panel.classList.contains('open');
    document.querySelectorAll('.acc-panel').forEach((p) => p.classList.remove('open'));
    if (!isOpen) panel.classList.add('open');
  });
});

// Form handling (mock)
const quoteForm = document.getElementById('quoteForm');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

const handleSubmit = (event) => {
  event.preventDefault();
  showToast("Thanks! We'll confirm shortly.");
  if (formStatus) formStatus.textContent = "We received your request—dispatch will call soon.";
  event.target.reset();
};
quoteForm?.addEventListener('submit', handleSubmit);
contactForm?.addEventListener('submit', handleSubmit);

// Marquee duplicate track for seamless scroll
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  marqueeTrack.innerHTML += marqueeTrack.innerHTML;
}

// Smooth scroll for same-page hash links only
nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href') || '';
    const isHash = href.startsWith('#');
    if (isHash) {
      e.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth' });
    }
    nav.classList.remove('open');
  });
});
