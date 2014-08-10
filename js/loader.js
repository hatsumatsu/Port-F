jQuery( function( $ ) {

    $( document ).ready( function() {

        var min = ( globals.debug ) ? '' : '.min';
        var src = ( globals.debug ) ? 'src/' : '';

        Modernizr.load( [
            {
                test: Modernizr.mq( globals.mediaQuery ),
                yep : [ globals.blogurl + '/wp-content/themes/port-f/js/dependencies-smaller.min.js',
                        globals.blogurl + '/wp-content/themes/port-f/js/' + src + 'site-smaller' + min + '.js' ],
                nope: [ globals.blogurl + '/wp-content/themes/port-f/js/dependencies-larger.min.js',
                        globals.blogurl + '/wp-content/themes/port-f/js/' + src + 'site-larger' + min + '.js' ]
            },
            { 
                test: Modernizr.mq( 'only all' ),
                // for IE lte 8 and browsers not supporting media queries
                nope: []
            } 
        ] );

  } );

} );