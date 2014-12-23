// globals
globals = {};


// debuglog
debuglog = function( log, force ) {
    if( ( globals.debug || force ) && typeof console != 'undefined' ) console.log( log );
}

globals.debug = true;


jQuery( function( $ ) {

    // app
    var site = ( function() {

        var init = function() {
            debuglog( 'site.init()' );
            bindEventHandlers();
            win.init();
            nav.init();
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
                settings.element.on( 'resize', function() {
                    
                    if( settings.resizeDelay ) {
                        clearTimeout( settings.resizeDelay );
                        settings.resizeDelay = null;
                    } else {
                        $( 'html' ).addClass( 'resizing' );
                        $( document ).trigger( 'win/resize/start' );
                    }
                 
                    settings.resizeDelay = setTimeout( function() {
                        $( 'html' ).removeClass( 'resizing' );
                        $( document ).trigger( 'win/resize/finish' );
                        settings.resizeDelay = null;
                    }, 500 );
                
                } ); 

                $( document ).on( 'win/resize/finish', function() {
                    onResizeFinish();
                } )

            }

            var onResizeFinish = function() {
                debuglog( 'site.win.onResizeFinish()' );

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


        // nav 
        var nav = ( function() {

            var settings = {
                id: 'head_primary'
            };

            var init = function() {
                debuglog( 'site.nav.init()' );

                settings.el = $( '.nav-' + settings.id );

                bindEventHandlers();
            }

            var bindEventHandlers = function() {
                settings.el
                    .on( 'click', '.toggle', function( e ) {
                        e.preventDefault();
                        $( 'html' ).toggleClass( 'show-' + settings.id );
                    } );
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

        // init globals
        globals.blogurl = $( 'head' ).attr( 'data-wpurl' );
        globals.breakpoint = $( 'title' ).css( 'width' );
        globals.mediaQuery = $( 'title' ).css( 'fontFamily' )
            .replace( /'/g, '' )
            .replace( /"/g, '' );
        globals.transitionDuration = ( parseFloat( $( 'title' ).css( 'transitionDuration' ) ) * 1000 ) || 500;

        // mute debuglog on live sites
        if( globals.blogurl.indexOf( 'local' ) < 0 ) {
            globals.debug = false;
        }

        debuglog( 'site-global.js loaded...' );
        debuglog( globals );

        site.init();
    } );

} );