'use strict';

document.documentElement.classList.add('js');

// Edit these entries when you replace the demo concepts with real projects.
const PROJECTS = {
  toaster: {
    title: 'Toaster Market',
    kicker: 'CONCEPT STUDY / UNITY · 3D',
    description: 'A playful concept for a supermarket collecting game, with one very peculiar rule: everything is a toaster. This is concept art, not a screenshot of a released game.',
    img: 'assets/toaster-market.svg',
    alt: 'Illustrative concept art of a playful supermarket'
  },
  arcade: {
    title: 'Arcade Lab',
    kicker: 'VISUAL PLACEHOLDER / GAME DESIGN',
    description: 'A sample visual exploration showing how another Unity project could be presented. Replace this placeholder with a real project, trailer, or playable demo.',
    img: 'assets/arcade-lab.svg',
    alt: 'Illustrative neon arcade world'
  },
  systems: {
    title: 'Gameplay Systems',
    kicker: 'ENGINEERING FOCUS / UNITY · C#',
    description: 'Triple Jump Games focuses on the building blocks behind engaging games: core mechanics, reusable gameplay logic, iteration workflows and performance-conscious implementation. This image is illustrative.',
    img: 'assets/system-blueprint.svg',
    alt: 'Illustrative gameplay-systems diagram'
  }
};

const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }
}, { rootMargin: '0px 0px -35px 0px', threshold: 0.06 }) : null;

document.querySelectorAll('.reveal').forEach((el) => {
  if (observer) observer.observe(el);
  else el.classList.add('is-visible');
});

const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
function closeMenu() {
  navLinks.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open menu');
}
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.addEventListener('click', e => {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) closeMenu();
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => {
      b.classList.toggle('active', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    });
    const selection = button.dataset.filter;
    let shown = 0;
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.hidden = selection !== 'all' && card.dataset.category !== selection;
      if (!card.hidden) shown++;
    });
    const count = document.getElementById('filter-count');
    if (count) count.textContent = `SHOWING ${String(shown).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  });
});

const modal = document.getElementById('project-dialog');
let lastTrigger = null;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const info = PROJECTS[button.dataset.project];
    if (!info) return;
    lastTrigger = button;
    document.getElementById('dialog-title').textContent = info.title;
    document.getElementById('dialog-kicker').textContent = info.kicker;
    document.getElementById('dialog-desc').textContent = info.description;
    const image = document.getElementById('dialog-img');
    image.src = info.img;
    image.alt = info.alt;
    modal.showModal();
  });
});
function closeDialog() {
  modal.close();
}
modal.addEventListener('close', () => lastTrigger?.focus());
modal.querySelector('.dialog-close').addEventListener('click', closeDialog);
modal.addEventListener('click', e => { if (e.target === modal) closeDialog(); });

document.getElementById('year').textContent = String(new Date().getFullYear());

// A tiny, reduced-motion-aware parallax treatment for the hero showcase.
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches && window.matchMedia('(pointer: fine)').matches) {
  const preview = document.querySelector('.hero-preview');
  const area = document.querySelector('.hero-art-wrap');
  area.addEventListener('pointermove', (event) => {
    const rect = area.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    preview.style.transform = `perspective(1400px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(-3px)`;
  }, { passive: true });
  area.addEventListener('pointerleave', () => { preview.style.transform = ''; });
}


// Compact navigation and reading progress, updated in one animation frame per scroll.
const progressBar = document.querySelector('.scroll-progress');
const siteHeader = document.querySelector('.site-header');
const trackedSections = [...document.querySelectorAll('main section[id]')];
const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
let chromeFramePending = false;

function updatePageChrome() {
  chromeFramePending = false;
  const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const fraction = Math.min(1, Math.max(0, window.scrollY / scrollable));
  if (progressBar) progressBar.style.transform = `scaleX(${fraction})`;
  siteHeader?.classList.toggle('is-scrolled', window.scrollY > 24);

  let activeSection = '';
  for (const section of trackedSections) {
    if (section.getBoundingClientRect().top < Math.min(190, window.innerHeight * 0.35)) {
      activeSection = section.id;
    }
  }
  for (const link of sectionLinks) {
    const active = link.getAttribute('href') === `#${activeSection}`;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
function schedulePageChrome() {
  if (chromeFramePending) return;
  chromeFramePending = true;
  window.requestAnimationFrame(updatePageChrome);
}
window.addEventListener('scroll', schedulePageChrome, { passive: true });
window.addEventListener('resize', schedulePageChrome);
schedulePageChrome();
