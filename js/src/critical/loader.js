jQuery( function( $ ) {

    Loader = ( function() {

        var init = function() {
            if( Modernizr.mq( Globals.get( 'mediaQuery' ) ) ) {
                loadJS( Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/package-smaller.min.js' );
            } else {
                loadJS( Globals.get( 'blogurl' ) + '/wp-content/themes/' + Globals.get( 'theme' ) + '/js/package-larger.min.js' );
            }
        }

        var loadJS = function( url ) {
            var script = document.createElement( 'script' );
            script.type = 'text/javascript';
            script.src = url;

            $( 'head' ).append( script );
        }

        return {
            init: function() { init(); }
        }
    } )();

    $( document ).ready( function() {
        Loader.init();
    } );
} );
