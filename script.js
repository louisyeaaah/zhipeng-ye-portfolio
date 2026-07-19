const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('.role-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const role = toggle.closest('.role');
    const wasOpen = role.classList.contains('open');

    document.querySelectorAll('.role').forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.role-toggle').setAttribute('aria-expanded', 'false');
      item.querySelector('.role-icon').textContent = '+';
    });

    if (!wasOpen) {
      role.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.querySelector('.role-icon').textContent = '−';
    }
  });
});

const proofSlides = [...document.querySelectorAll('.proof-slide')];
const proofCurrent = document.querySelector('#proof-current');
let proofIndex = 0;

function showProof(nextIndex) {
  proofIndex = (nextIndex + proofSlides.length) % proofSlides.length;
  proofSlides.forEach((slide, index) => slide.classList.toggle('active', index === proofIndex));
  proofCurrent.textContent = String(proofIndex + 1);
}

document.querySelectorAll('.proof-controls button').forEach((button) => {
  button.addEventListener('click', () => showProof(proofIndex + (button.dataset.direction === 'next' ? 1 : -1)));
});

if (!reducedMotion && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-copy > *', {
    y: 28,
    opacity: 0,
    duration: .9,
    stagger: .09,
    ease: 'power3.out'
  });

  gsap.from('.hero-ledger', {
    y: 42,
    scale: .94,
    opacity: 0,
    duration: 1.1,
    ease: 'power3.out',
    clearProps: 'opacity,transform'
  });

  gsap.utils.toArray('.reveal').forEach((element) => {
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: .9,
      ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 84%', once: true }
    });
  });

  gsap.utils.toArray('.reveal-card').forEach((card) => {
    gsap.from(card, {
      y: 55,
      scale: .96,
      opacity: 0,
      duration: .85,
      ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 88%', once: true }
    });
  });

  const proofWords = document.querySelectorAll('.proof-slide span');
  gsap.from(proofWords, {
    opacity: .15,
    y: 18,
    stagger: .12,
    scrollTrigger: {
      trigger: '.proof',
      start: 'top 72%',
      end: 'center 42%',
      scrub: true
    }
  });
}
