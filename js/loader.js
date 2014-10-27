jQuery( function( $ ) {

    $( document ).ready( function() {

        if( globals.debug ) {

            Modernizr.load( [
                {
                    test: Modernizr.mq( globals.mediaQuery ),
                    yep : [ globals.blogurl + '/wp-content/themes/port-f/js/dependencies-smaller.min.js',
                            globals.blogurl + '/wp-content/themes/port-f/js/src/site-smaller.js' ],
                    nope: [ globals.blogurl + '/wp-content/themes/port-f/js/dependencies-larger.min.js',
                            globals.blogurl + '/wp-content/themes/port-f/js/src/site-larger.js' ]
                }
            ] );

        } else {

            Modernizr.load( [
                {
                    test: Modernizr.mq( globals.mediaQuery ),
                    yep : [ globals.blogurl + '/wp-content/themes/port-f/js/all-smaller.min.js' ],
                    nope: [ globals.blogurl + '/wp-content/themes/port-f/js/all-larger.min.js' ]
                }
            ] );

        }

  } );

} );