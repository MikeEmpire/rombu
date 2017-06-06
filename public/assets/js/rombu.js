$(document).ready(function() {
  $img = $('#logo'),
  $scrollLogo = $('#scrollLogo');
  setTimeout(() => {
    $scrollLogo.velocity({
      opacity: 0
    }, {loop: 2}).velocity({width: 60});

    $img.velocity({opacity: 1});

  }, 5000);
  // $(window).scroll(function() {
  //   if ($(document).scrollTop() > 50) {
  //     $nav.addClass('shrink');
  //   } else {
  //     $nav.removeClass('shrink');
  //   }
  // });
  var $nav = $('.navbar');
  var linksList = document.querySelectorAll('#navbar ul li a[href]');
  for (var i = 0; i < linksList.length; i++) {
    var link = linksList[i];
    if (window.location.href === linksList[i].href) {
      link.className = 'active';
    }
  }
  $nav.mouseenter(function() {
    $nav.velocity({opacity: 1})
  }).mouseleave(function() {
    $nav.velocity('reverse');
  });

})
