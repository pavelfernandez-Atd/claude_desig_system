// AIO Mentions Sample — tab switching
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mentions-sample__tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      var tabs = tab.closest('.mentions-sample__tabs');
      if (tabs) {
        tabs.querySelectorAll('.mentions-sample__tab').forEach(function(t) {
          t.classList.remove('mentions-sample__tab--active');
        });
      }
      tab.classList.add('mentions-sample__tab--active');
    });
  });
});