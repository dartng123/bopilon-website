document.addEventListener('DOMContentLoaded', () => {
    initFlourishChart();

});

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