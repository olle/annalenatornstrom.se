# annalenatornstrom.se

This is my mothers web site.

## Images

All image handling requires [ImageMagick](http://www.imagemagick.org).

We're going all in for PNG this time, even though lots of the material will
originally be JPEGs. The image conversion is simply done using:

    for file in *.jpg
    do
        convert "$file" "`basename -s .jpg $file`@orig.png"
    done
    
This will typically convert ``image.jpg`` to ``image@orig.png``.

This time around we're preparing images for mobile-first, with a focus on being
light to load and quick to display. Here's an conversion example for low
resolution image conversion that we will use:

    for file in *.png
    do
       convert \
          "$file" \
              -resize 240x \
              -posterize 25 \
              -dither FloydSteinberg \
              -colors 8 \
          "`basename -s .png $file`@lowres.png"
    done

This should produce a decent, super light image, for quick mobile loading,
renamed from ``image.png`` to ``image@lowres.png``. It will serve as a
preview that can be progressively enhanced as soon as a web pages loads, or
when the user whishes to see more details.


