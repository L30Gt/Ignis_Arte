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
