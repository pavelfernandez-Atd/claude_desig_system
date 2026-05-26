// KPI Card — Sparkline hover tooltip
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.kpi-card__sparkline').forEach(function(sparkline) {
    var svg = sparkline.querySelector('svg');
    var dot = sparkline.querySelector('.kpi-card__hover-dot');
    var tip = sparkline.querySelector('.kpi-card__hover-tooltip');
    if (!svg || !dot || !tip) return;
    var color = sparkline.dataset.color || '#4a9ef8';
    var start = parseFloat(sparkline.dataset.start || 28);
    var end = parseFloat(sparkline.dataset.end || 33);
    dot.style.background = color;
    sparkline.addEventListener('mousemove', function(e) {
      var rect = sparkline.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var pct = Math.max(0, Math.min(1, x / rect.width));
      var val = Math.round(start + (end - start) * pct);
      var svgRect = svg.getBoundingClientRect();
      // Approximate y from path — use linear interpolation
      var yPct = 1 - pct;
      var y = svgRect.height * 0.1 + yPct * svgRect.height * 0.8;
      dot.style.left = x + 'px';
      dot.style.top = (e.clientY - rect.top) + 'px';
      dot.style.opacity = '1';
      tip.textContent = val;
      tip.style.left = x + 'px';
      tip.style.top = (e.clientY - rect.top - 8) + 'px';
      tip.style.opacity = '1';
    });
    sparkline.addEventListener('mouseleave', function() {
      dot.style.opacity = '0';
      tip.style.opacity = '0';
    });
  });
});