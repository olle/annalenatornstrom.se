(function($win, $doc, $$) {

  var hires = function() {
    var images = $doc.body.querySelectorAll('.alt-image img');
    Array.prototype.slice.call(images).forEach(function($img) {
      $img.setAttribute('src', $img.getAttribute('src').replace(
        '@lowres',
        '@orig'));
    });
  };

  $$.onImageAppended = function() {
    hires();
  };

  hires();

  if ($win.screen.width > 600) {
    $$.appendImages(2);
  }

})(window, document, window['_alt_']);
