// Hero slideshow: fades between .slide elements. The active dot's fill animation
// is the timer (advance on animationend), so pausing it pauses the slideshow.
(function () {
  var root = document.querySelector('.slider');
  if (!root) return;
  var slides = root.querySelectorAll('.slide');
  var dotsBox = root.querySelector('.slider-dots');
  var rtl = document.documentElement.dir === 'rtl';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var current = 0;
  var dots = [];

  slides.forEach(function (slide, i) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slider-dot';
    dot.setAttribute('aria-label', (i + 1) + ' / ' + slides.length);
    dot.addEventListener('click', function () { show(i); });
    dot.addEventListener('animationend', function () { show(current + 1); });
    dotsBox.appendChild(dot);
    dots.push(dot);
  });

  function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, k) {
      var on = k === current;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', on ? 'false' : 'true');
      s.querySelectorAll('a, button').forEach(function (el) { el.tabIndex = on ? 0 : -1; });
    });
    dots.forEach(function (d, k) {
      d.classList.remove('is-active');
      d.setAttribute('aria-current', k === current ? 'true' : 'false');
    });
    if (!reduced) void dots[current].offsetWidth; // restart the fill animation
    dots[current].classList.add('is-active');
  }

  function setPaused(p) { root.classList.toggle('is-paused', p); }

  root.querySelector('.slider-prev').addEventListener('click', function () { show(current - 1); });
  root.querySelector('.slider-next').addEventListener('click', function () { show(current + 1); });
  root.addEventListener('mouseenter', function () { setPaused(true); });
  root.addEventListener('mouseleave', function () { setPaused(false); });
  root.addEventListener('focusin', function () { setPaused(true); });
  root.addEventListener('focusout', function () { setPaused(false); });
  root.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(current + (rtl ? 1 : -1));
    if (e.key === 'ArrowRight') show(current + (rtl ? -1 : 1));
  });

  var startX = null;
  root.addEventListener('pointerdown', function (e) { startX = e.clientX; });
  root.addEventListener('pointerup', function (e) {
    if (startX === null) return;
    var dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) < 50) return;
    var forward = rtl ? dx > 0 : dx < 0;
    show(current + (forward ? 1 : -1));
  });

  if (reduced) root.classList.add('is-static');
  show(0);
})();
