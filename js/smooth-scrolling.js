document.addEventListener('DOMContentLoaded', function () {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', function (event) {
          event.preventDefault();
          var targetId = this.getAttribute('href');
          var targetElement = document.querySelector(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  }
});
