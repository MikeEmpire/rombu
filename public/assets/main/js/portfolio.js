$(document).ready(function() {
  // layout Masonry after each image loads
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });
})
