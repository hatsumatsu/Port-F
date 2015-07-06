jQuery( function( $ ) {

    $( document ).ready( function() {

        if( globals.debug ) {

            Modernizr.load( [
                {
                    test: Modernizr.mq( globals.mediaQuery ),
                    yep : [ globals.blogurl + '/wp-content/themes/' + globals.theme + '/js/dependencies-global.min.js',
                            globals.blogurl + '/wp-content/themes/' + globals.theme + '/js/src/site-global.js',
                            globals.blogurl + '/wp-content/themes/' + globals.theme + '/js/dependencies-smaller.min.js',
                            globals.blogurl + '/wp-content/themes/' + globals.theme + '/js/src/site-smaller.js' ],
                    nope: [ globals.blogurl + '/wp-content/themes/' + globals.theme + '/js/dependencies-global.min.js',
                            globals.blogurl + '/wp-content/themes/' + globals.theme + '/js/src/site-global.js', 
                            globals.blogurl + '/wp-content/themes/' + globals.theme + '/js/dependencies-larger.min.js',
                            globals.blogurl + '/wp-content/themes/' + globals.theme + '/js/src/site-larger.js' ]
                }
            ] );

        } else {

            Modernizr.load( [
                {
                    test: Modernizr.mq( globals.mediaQuery ),
                    yep : [ globals.blogurl + '/wp-content/themes/' + globals.theme + '/js/all-smaller.min.js' ],
                    nope: [ globals.blogurl + '/wp-content/themes/' + globals.theme + '/js/all-larger.min.js' ]
                }
            ] );

        }

  } );

} );