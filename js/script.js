// Dynamic Navbar Height
(function () {
  function setNavHeightVar() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    const h = nav.offsetHeight + 'px';
    document.documentElement.style.setProperty('--nav-height', h);
  }

  window.addEventListener('load', setNavHeightVar);
  window.addEventListener('resize', setNavHeightVar);
  window.addEventListener('orientationchange', setNavHeightVar);

  const nav = document.querySelector('.navbar');
  if (nav && window.ResizeObserver) {
    const ro = new ResizeObserver(setNavHeightVar);
    ro.observe(nav);
  }
})();

// Modal with Carousel
document.addEventListener('DOMContentLoaded', function () {
  const modalEl = document.getElementById('portfolioModal1');
  if (!modalEl) return;

  const carouselEl = document.getElementById('obraCarousel');
  const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl);
  const titleEl = document.getElementById('obraModalTitle');
  const subtitleEl = document.getElementById('obraModalSubtitle');
  const yearEl = document.getElementById('obraModalYear');
  const descEl = document.getElementById('obraModalDesc');
  const specsTechEl = document.getElementById('obraModalSpecsTech');
  const specsSizeEl = document.getElementById('obraModalSpecsSize');
  const specsPriceEl = document.getElementById('obraModalSpecsPrice');
  const actionEl = document.getElementById('obraModalAction');

  function updateDetailsFromActiveSlide() {
    const active = carouselEl.querySelector('.carousel-item.active');
    if (!active) return;
    titleEl.textContent = active.dataset.title || '';
    subtitleEl.textContent = active.dataset.subtitle || '';
    yearEl.textContent = active.dataset.year || '';
    descEl.textContent = active.dataset.desc || '';
    specsTechEl.textContent = active.dataset.specsTech || '';
    specsSizeEl.textContent = active.dataset.specsSize || '';
    specsPriceEl.textContent = active.dataset.specsPrice || '';
  }

  carouselEl.addEventListener('slid.bs.carousel', updateDetailsFromActiveSlide);

  modalEl.addEventListener('show.bs.modal', function (e) {
    const trigger = e.relatedTarget;
    if (trigger && trigger.dataset.index) {
      const idx = parseInt(trigger.dataset.index, 10);
      if (!isNaN(idx)) carousel.to(idx);
    }
    setTimeout(updateDetailsFromActiveSlide, 10);
  });
});
