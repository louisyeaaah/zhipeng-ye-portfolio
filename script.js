const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-copy > *', {
    y: 35,
    opacity: 0,
    duration: 1,
    stagger: 0.11,
    ease: 'power3.out'
  });

  gsap.from('.hero-visual', {
    scale: 0.82,
    opacity: 0,
    duration: 1.35,
    ease: 'power3.out'
  });

  gsap.to('.hero-visual', {
    scale: 1,
    opacity: 0.28,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  gsap.utils.toArray('.reveal').forEach((element) => {
    gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 82%' }
    });
  });

  gsap.utils.toArray('.reveal-card').forEach((card, index) => {
    gsap.from(card, {
      y: 75,
      scale: 0.92,
      opacity: 0,
      duration: 1,
      delay: index * 0.04,
      ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 88%' }
    });
  });

  gsap.utils.toArray('.role-card').forEach((card, index) => {
    gsap.from(card, {
      scale: 0.93,
      opacity: 0.25,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        end: 'top 28%',
        scrub: true
      }
    });
  });
}
