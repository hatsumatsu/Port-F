jQuery( function( $ ) {

    $( document ).ready( function() {

        if( Debug.isActive() ) {

            yepnope( [
                {
                    test: Modernizr.mq( Globals.get( 'mediaQuery' ) ),
                    yep : [ Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/dependencies-global.min.js',
                            Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/app-global.min.js',
                            Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/dependencies-smaller.min.js',
                            Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/app-smaller.min.js' ],
                    nope: [ Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/dependencies-global.min.js',
                            Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/app-global.min.js', 
                            Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/dependencies-larger.min.js',
                            Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/app-larger.min.js' ]
                }
            ] );

        } else {

            yepnope( [
                {
                    test: Modernizr.mq( Globals.get( 'mediaQuery' ) ),
                    yep : [ Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/all-smaller.min.js' ],
                    nope: [ Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/all-larger.min.js' ]
                }
            ] );

        }

  } );

} );