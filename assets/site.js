  document.getElementById('year').textContent = new Date().getFullYear();

  var langBtn = document.getElementById('langToggle');
  if (langBtn){
    langBtn.addEventListener('click', function(){
      var html = document.documentElement;
      var cur = html.getAttribute('data-lang');
      var next = cur === 'pt' ? 'en' : 'pt';
      html.setAttribute('data-lang', next);
      html.setAttribute('lang', next);
      langBtn.textContent = next === 'pt' ? 'EN' : 'PT';
      var titleAttr = next === 'pt' ? 'data-title-pt' : 'data-title-en';
      if (html.hasAttribute(titleAttr)){ document.title = html.getAttribute(titleAttr); }
    });
  }

  var tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      var target = btn.getAttribute('data-tab');
      tabBtns.forEach(function(b){
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(function(panel){
        var show = panel.id === 'panel-' + target;
        panel.classList.toggle('active', show);
        if (show){ panel.removeAttribute('hidden'); } else { panel.setAttribute('hidden', ''); }
      });
    });
  });

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
  }
