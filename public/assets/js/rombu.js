$(document).ready(function() {
  $img = $('#logo'),
  $scrollLogo = $('#scrollLogo');
  setTimeout(() => {
    $scrollLogo.velocity({
      opacity: 0
    }, {loop: 2}).velocity({width: 60});

    $img.velocity({opacity: 1});

  }, 5000);
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var $nav = $('.navbar');
  var navbarHeight = $('.navbar').outerHeight();
  var linksList = document.querySelectorAll('#navbar ul li a[href]');
  for (var i = 0; i < linksList.length; i++) {
  	var link = linksList[i];
  	if (window.location.href === linksList[i].href) {
  		link.className = 'active';
  	}
  }

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > 100) {
      // Scroll Down
      $nav.velocity({opacity: 1});
    } else if (st < 600) {
      $nav.velocity({opacity: 0});
    } else {}
    lastScrollTop = st;
  }

})
