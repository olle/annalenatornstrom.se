(function($win, $doc) {

  var $style = $doc.createElement('link');
  $style.setAttribute('rel', 'stylesheet');
  $style.setAttribute('href', 'css/base.css');
  $doc.getElementsByTagName('head')[0].appendChild($style);

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
        $img.setAttribute('src', src);
        $img.setAttribute('alt', '');
        $li.appendChild($img);
        $doc.getElementById('alt-images').appendChild($li);
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

})(window, document);
