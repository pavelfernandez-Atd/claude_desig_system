// Main Nav — active link tracking
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.main-nav__link');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.main-nav__item').forEach(function(item) {
        item.classList.remove('main-nav__item--active');
      });
      link.closest('.main-nav__item').classList.add('main-nav__item--active');
    });
  });
});