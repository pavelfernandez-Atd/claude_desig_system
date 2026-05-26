// Donut Chart — SVG segment renderer
function drawDonut(containerId, segments, total) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var svg = el.querySelector('svg');
  if (!svg) return;
  var cx = 124, cy = 124, r = 90, stroke = 28;
  var circumference = 2 * Math.PI * r;
  var offset = 0;
  svg.innerHTML = '';
  // Background ring
  var bg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  bg.setAttribute('cx', cx); bg.setAttribute('cy', cy); bg.setAttribute('r', r);
  bg.setAttribute('fill', 'none'); bg.setAttribute('stroke', '#e8edf5');
  bg.setAttribute('stroke-width', stroke);
  svg.appendChild(bg);
  segments.forEach(function(seg) {
    var pct = seg.value / total;
    var len = pct * circumference;
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx); circle.setAttribute('cy', cy); circle.setAttribute('r', r);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', seg.color);
    circle.setAttribute('stroke-width', stroke);
    circle.setAttribute('stroke-dasharray', len + ' ' + (circumference - len));
    circle.setAttribute('stroke-dashoffset', -offset * circumference / total + circumference * 0.25);
    circle.setAttribute('stroke-linecap', 'round');
    svg.appendChild(circle);
    offset += seg.value;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  drawDonut('donut-demo', [
    { value: 42, color: '#4a9ef8' },
    { value: 35, color: '#b3a2e7' },
    { value: 23, color: '#e0e5ef' }
  ], 100);
  // Also draw chartset donut if present
  drawDonut('chartset-donut', [
    { value: 42, color: '#4a9ef8' },
    { value: 35, color: '#b3a2e7' },
    { value: 23, color: '#e0e5ef' }
  ], 100);
  drawChartsetTimeline();
});

function drawChartsetTimeline() {
  var svg = document.getElementById('chartset-svg');
  if (!svg) return;
  var container = svg.parentElement;
  var W = container.clientWidth || 400;
  var H = container.clientHeight || 236;
  var PAD_L = 44, PAD_R = 12, PAD_T = 16, PAD_B = 28;
  var chartW = W - PAD_L - PAD_R;
  var chartH = H - PAD_T - PAD_B;

  var data = [
    { label: '1 Jan', values: [42, 28] },
    { label: '1 Feb', values: [45, 30] },
    { label: '1 Mar', values: [40, 32] },
    { label: '1 Apr', values: [48, 27] },
    { label: '31 May', values: [50, 25] }
  ];
  var colors = ['#4a9ef8', '#d47dd4'];
  var allVals = data.flatMap(function(d){ return d.values; });
  var minV = Math.min.apply(null, allVals) - 5;
  var maxV = Math.max.apply(null, allVals) + 5;

  function px(i) { return PAD_L + (i / (data.length - 1)) * chartW; }
  function py(v) { return PAD_T + (1 - (v - minV) / (maxV - minV)) * chartH; }

  var ns = 'http://www.w3.org/2000/svg';
  svg.setAttribute('width', W); svg.setAttribute('height', H);
  svg.innerHTML = '';

  // Grid
  [0.25, 0.5, 0.75, 1].forEach(function(f) {
    var y = PAD_T + f * chartH;
    var line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', PAD_L); line.setAttribute('x2', W - PAD_R);
    line.setAttribute('y1', y); line.setAttribute('y2', y);
    line.setAttribute('stroke', '#dce3ef'); line.setAttribute('stroke-width', '1');
    svg.appendChild(line);
  });

  // Lines + dots
  colors.forEach(function(color, ci) {
    var pts = data.map(function(d, i) { return px(i) + ',' + py(d.values[ci]); }).join(' ');
    var poly = document.createElementNS(ns, 'polyline');
    poly.setAttribute('points', pts); poly.setAttribute('fill', 'none');
    poly.setAttribute('stroke', color); poly.setAttribute('stroke-width', '2.5');
    svg.appendChild(poly);
    data.forEach(function(d, i) {
      var c = document.createElementNS(ns, 'circle');
      c.setAttribute('cx', px(i)); c.setAttribute('cy', py(d.values[ci]));
      c.setAttribute('r', '5.5'); c.setAttribute('fill', color);
      c.setAttribute('stroke', 'white'); c.setAttribute('stroke-width', '2');
      svg.appendChild(c);
    });
  });

  // X labels (first + last)
  [[0, 'start'], [data.length - 1, 'end']].forEach(function(pair) {
    var t = document.createElementNS(ns, 'text');
    t.setAttribute('x', px(pair[0]));
    t.setAttribute('y', H - 4);
    t.setAttribute('text-anchor', pair[1] === 'start' ? 'start' : 'end');
    t.setAttribute('font-family', 'Open Sans, sans-serif');
    t.setAttribute('font-size', '11');
    t.setAttribute('fill', '#858585');
    t.textContent = data[pair[0]].label;
    svg.appendChild(t);
  });
}