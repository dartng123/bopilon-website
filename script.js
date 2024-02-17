document.addEventListener('DOMContentLoaded', () => {
  initFAQAccordion();
  initFlourishChart();
  initStickyHeader();
  initTopHeader();
  var hamburger = document.querySelector('.hamburger');
  var navUL = document.querySelector('nav ul');
  hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('change');
      navUL.classList.toggle('nav-open');
  this.classList.toggle('change');
      hamburger.classList.toggle('is-active');
  });

  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
      navUL.classList.remove('nav-open');
          hamburger.classList.remove('is-active');
      hamburger.classList.remove('change');
      });
  });
});



function initFAQAccordion() {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
      question.classList.toggle('rotate');
    });
  });
}
function initFlourishChart() {
  const workflowGraphic = document.querySelector('.workflow-graphic');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        workflowGraphic.innerHTML = '<div class="flourish-embed flourish-chart" data-src="visualisation/16769994"></div>';
        const script = document.createElement('script');
        script.src = 'https://public.flourish.studio/resources/embed.js';
        script.onload = hideFlourishBranding;
        document.body.appendChild(script);
        observer.unobserve(workflowGraphic);
      }
    });
  }, { threshold: 0.1 });
  observer.observe(workflowGraphic);
}
function hideFlourishBranding() {
  setTimeout(() => document.querySelectorAll('.flourish-credit').forEach(el => el.style.display = 'none'), 500);
}

function initStickyHeader() {
  const stickyHeader = document.querySelector('.sticky-header');
  window.addEventListener('scroll', () => stickyHeader.style.display = window.pageYOffset > 100 ? 'block' : 'none');
}

function initTopHeader() {
  let lastScrollTop = 0;
  const heroSection = document.querySelector('.hero');
  const topHeader = document.querySelector('.top-header');

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    topHeader.style.opacity = (currentScroll > lastScrollTop || currentScroll > heroSection.offsetHeight) ? '0' : '1';
    topHeader.style.transform = topHeader.style.opacity === '0' ? 'translateY(-100%)' : 'translateY(0)';
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}
