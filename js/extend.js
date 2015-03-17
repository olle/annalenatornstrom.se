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

  var _appendImages = $$.appendImages;

  if ($win.screen.width > 1039) {
    _appendImages(2);
    $$.appendImages = function () { _appendImages(4); };
  } else if ($win.screen.width > 799) {
    _appendImages();
    $$.appendImages = function () { _appendImages(3); };
  } else if ($win.screen.width > 599) {
    $$.appendImages = function () { _appendImages(2); };
  }

})(window, document, window['_alt_']);
