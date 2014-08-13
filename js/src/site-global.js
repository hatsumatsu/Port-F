// globals
globals = {};


// debuglog
debuglog = function( log ) {
    if( globals.debug && typeof console != 'undefined' ) console.log( log );
}

globals.debug = true;


jQuery( function( $ ) {

    // app
    var site = ( function() {

        var init = function() {
            debuglog( 'site.init()' );
            bindEventHandlers();
            win.init();
        }

        var bindEventHandlers = function() {

        }

        // module window
        var win = ( function() {

            var settings = {};

            var init = function() {
                debuglog( 'site.win.init()' );
            
                settings.state = Modernizr.mq( globals.mediaQuery );
                settings.el = $( window );

                bindEventHandlers();
            }

            var bindEventHandlers = function() {

                // throttle resize event
                settings.el.on( 'resize', function() {
                    
                    if( settings.resizeDelay ) { 
                        clearTimeout( settings.resizeDelay );
                    }

                    settings.resizeDelay = setTimeout( onResize, 1000 );
                } );

            }

            var onResize = function() {
                debuglog( 'site.win.onResize()' );

                settings._state = settings.state;
                settings.state = Modernizr.mq( globals.mediaQuery );
                
                debuglog( settings );

                if( settings.state != settings._state ) {
                    window.location.reload();
                }
            }

            return {
                init: function() { init(); }
            }

        } )();

        // module 
        var module = ( function() {

            var settings = {};

            var init = function() {
                debuglog( 'site.module.init()' );
                bindEventHandlers();
            }

            var bindEventHandlers = function() {

            }

            return {
                init: function() { init(); }
            }

        } )();

        return {
            init: function() { init(); }
        }

    } )();

    // document ready
    $( document ).ready( function () {
        debuglog( 'site-global.js loaded...' );

        // init globals
        globals.blogurl = $( 'head' ).attr( 'data-wpurl' );
        globals.breakpoint = $( 'title' ).css( 'width' );
        globals.mediaQuery = $( 'title' ).css( 'fontFamily' )
            .replace( /'/g, '' )
            .replace( /"/g, '' );
        globals.transitionDuration = ( parseFloat( $( 'title' ).css( 'transitionDuration' ) ) * 1000 ) || 500;

        debuglog( globals );

        site.init();
    } );

} );