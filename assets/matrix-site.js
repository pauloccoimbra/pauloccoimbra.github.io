  var yearEls = document.querySelectorAll('.year');
  var thisYear = new Date().getFullYear();
  yearEls.forEach(function(el){ el.textContent = thisYear; });

  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', function(){
      var html = document.documentElement;
      var next = html.getAttribute('data-lang') === 'pt' ? 'en' : 'pt';
      html.setAttribute('data-lang', next);
      langBtn.textContent = next === 'pt' ? 'EN' : 'PT';
    });
  }

  var tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      var target = btn.getAttribute('data-tab');
      tabBtns.forEach(function(b){ b.classList.toggle('active', b === btn); });
      document.querySelectorAll('.tab-panel').forEach(function(p){ p.classList.toggle('active', p.id === 'panel-' + target); });
    });
  });

  // Digital rain — katakana-free: binary, hex and the symbols of his own research
  (function(){
    var canvas = document.getElementById('rain');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canvas || reduce) { if (canvas) { canvas.style.display = 'none'; } return; }
    var ctx = canvas.getContext('2d');
    var chars = '01ΔΣΩπλβδεθμ∞∩∪∈∀∃≥≤→↔αγρτ'.split('');
    var fontSize = 15, drops;
    function resize(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(0).map(function(){ return Math.random() * -50; });
    }
    resize();
    window.addEventListener('resize', resize);
    function draw(){
      ctx.fillStyle = 'rgba(5,8,5,0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + 'px monospace';
      for (var i = 0; i < drops.length; i++) {
        var text = chars[Math.floor(Math.random() * chars.length)];
        var y = drops[i] * fontSize;
        ctx.fillStyle = Math.random() > 0.94 ? 'rgba(217,255,230,0.9)' : 'rgba(0,255,102,0.72)';
        ctx.fillText(text, i * fontSize, y);
        if (y > canvas.height && Math.random() > 0.975) { drops[i] = 0; }
        drops[i]++;
      }
    }
    setInterval(draw, 45);
  })();
