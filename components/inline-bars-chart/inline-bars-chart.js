// Inline Bars Chart — hover tooltip
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.ibc__row').forEach(function(row) {
    var barsWrap = row.querySelector('.ibc__bars-wrap');
    if (!barsWrap) return;
    var tooltip = barsWrap.querySelector('.ibc__tooltip');
    if (!tooltip) return;
    barsWrap.querySelectorAll('.ibc__bar').forEach(function(bar) {
      bar.addEventListener('mouseenter', function(e) {
        var cat = bar.dataset.cat || '';
        var pos = bar.dataset.pos || '';
        var neu = bar.dataset.neu || '';
        var neg = bar.dataset.neg || '';
        var titleEl = tooltip.querySelector('.ibc__tooltip-title');
        if (titleEl) titleEl.textContent = cat;
        var posEl = tooltip.querySelector('.ibc-pos');
        if (posEl) posEl.textContent = 'Positive: ' + pos;
        var neuEl = tooltip.querySelector('.ibc-neu');
        if (neuEl) neuEl.textContent = 'Neutral: ' + neu;
        var negEl = tooltip.querySelector('.ibc-neg');
        if (negEl) negEl.textContent = 'Negative: ' + neg;
        var rect = barsWrap.getBoundingClientRect();
        var barRect = bar.getBoundingClientRect();
        var left = barRect.left - rect.left + barRect.width / 2;
        tooltip.style.left = left + 'px';
        tooltip.style.opacity = '1';
        tooltip.style.pointerEvents = 'auto';
      });
      bar.addEventListener('mouseleave', function() {
        tooltip.style.opacity = '0';
        tooltip.style.pointerEvents = 'none';
      });
    });
  });
});