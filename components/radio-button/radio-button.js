/**
 * Radio Button  —  radioSelect()
 *
 * Manages selection state for a group of .radio elements.
 * Switches the clicked item to "set" and all others to "default".
 *
 * Usage
 * -----
 * Add onclick="radioSelect('my-group', index)" to each .radio-row.
 * The group container must have id="radio-demo-<groupName>".
 *
 * Example markup:
 *   <div class="radio-group" id="radio-demo-plan">
 *     <label class="radio-row" onclick="radioSelect('plan', 0)">
 *       <div class="radio"><div class="radio__outer radio__outer--set"><div class="radio__inner"></div></div></div>
 *       <span class="radio-label">Option A</span>
 *     </label>
 *     <label class="radio-row" onclick="radioSelect('plan', 1)">
 *       <div class="radio"><div class="radio__outer radio__outer--default"></div></div>
 *       <span class="radio-label">Option B</span>
 *     </label>
 *   </div>
 */

function radioSelect(group, selectedIdx) {
  var rows = document.querySelectorAll('#radio-demo-' + group + ' .radio-row');
  rows.forEach(function (row, i) {
    var outer = row.querySelector('.radio__outer');
    if (!outer) return;

    if (i === selectedIdx) {
      // Switch to Set state
      outer.className = 'radio__outer radio__outer--set';
      if (!outer.querySelector('.radio__inner')) {
        var dot = document.createElement('div');
        dot.className = 'radio__inner';
        outer.appendChild(dot);
      }
    } else {
      // Switch to Default state
      outer.className = 'radio__outer radio__outer--default';
      var dot = outer.querySelector('.radio__inner');
      if (dot) dot.remove();
    }
  });
}
