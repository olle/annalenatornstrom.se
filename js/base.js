var _alt_ = window['_alt_'] = {};

(function($win, $doc, $$) {

  var loadCss = function (href) {
    var $style = $doc.createElement('link');
    $style.setAttribute('rel', 'stylesheet');
    $style.setAttribute('href', href);
    $doc.getElementsByTagName('head')[0].appendChild($style);
  };

  var loadJs = function (src) {
    var $script = $doc.createElement('script');
    $script.setAttribute('src', src);
    $doc.getElementsByTagName('body')[0].appendChild($script);
  };

  loadCss('css/base.css');

  var images = [
    'compositions/ahild14@lowres.png',
    'compositions/ahild15@lowres.png',
    'compositions/flygplan-b@lowres.png',
    'compositions/flygplan-c@lowres.png',
    'compositions/flygplan-d@lowres.png',
    'compositions/flygplan4@lowres.png',
  ];

  var appendImage = function() {
    if (images.length > 0) {
      images.splice(0, 2).forEach(function(src) {
        var $li = $doc.createElement('li');
        $li.setAttribute('class', 'alt-image');
        var $img = $doc.createElement('img');
        $img.setAttribute('alt', '');
        $li.appendChild($img);
        $doc.getElementById('alt-images').appendChild($li);
        $img.addEventListener("load", function() {
          ($$.onImageAppended || function () {}).call();
        }, false);
        $img.setAttribute('src', src);
      });
    } else {
      $doc.body.querySelector('.alt-more--title').setAttribute('class', 'alt-more--title is-hidden');
      $doc.body.querySelector('.alt-more--arrow').setAttribute('class', 'alt-more--arrow is-hidden');
    }
  };

  var $main = $doc.getElementsByTagName('main')[0];

  var $more = $doc.createElement('p');
  $more.textContent = 'Hämta fler bilder...';
  $more.setAttribute('class', 'alt-more--title');
  $main.appendChild($more);

  var $button = $doc.createElement('button');
  $button.setAttribute('class', 'alt-more--arrow');
  $button.addEventListener('click', appendImage);
  $main.appendChild($button);

  if ($win.screen.width > 480) {
    loadCss('css/extend.css');
    loadJs('js/extend.js');
  }

})(window, document, _alt_);
