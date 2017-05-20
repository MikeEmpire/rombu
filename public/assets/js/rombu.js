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
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $nav.velocity({opacity: 0});
    } else if (st === 0) {
      $nav.velocity({opacity: 0});
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $nav.velocity({
          opacity: 1
        }, {duration: "fast"});
      }
    }
    lastScrollTop = st;
  }
})
