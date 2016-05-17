/**
 * Viewport
 */
jQuery( function( $ ) {

    var Viewport = ( function() {

        var settings = {};

        var init = function() {
            Debug.log( 'Viewport.init()' );
        
            settings.state = Modernizr.mq( Globals.get( 'mediaQuery' ) );
            settings.element = $( window );

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
                    $( document ).trigger( 'viewport/resize/start' );
                }
             
                settings.resizeDelay = setTimeout( function() {
                    $( 'html' ).removeClass( 'resizing' );
                    $( document ).trigger( 'viewport/resize/finish' );
                    settings.resizeDelay = null;
                }, 500 );
            
            } ); 

            $( document ).on( 'viewport/resize/finish', function() {
                onResizeFinish();
            } )

        }

        var onResizeFinish = function() {
            Debug.log( 'Viewport.onResizeFinish()' );

            settings._state = settings.state;
            settings.state = Modernizr.mq( Globals.get( 'mediaQuery' ) );
            
            Debug.log( settings );

            if( settings.state != settings._state ) {
                window.location.reload();
            }
        }

        return {
            init: function() { init(); }
        }

    } )();

    $( document ).ready( function () {
        Viewport.init();
    } );    

} );