jQuery( function( $ ) {

    // app
    siteLarger = ( function() {

        var init = function() {
            debuglog( 'siteLarger.init()' );
            bindEventHandlers();
            win.init();
        }

        var bindEventHandlers = function() {

        }

        // module window
        var win = ( function() {

            var settings = {
                scrollDetectionMode: 'scrollEvent', // 'scrollEvent' or 'requestAnimationFrame'
                now: Date.now(),
                fps: ( 1000 / 60 )
            };

            var init = function() {
                debuglog( 'siteLarger.win.init()' );
                
                settings.element = $( window );
                
                bindEventHandlers();

                if( settings.scrollDetectionMode == 'requestAnimationFrame' ) {
                    loop();
                }
            }

            var bindEventHandlers = function() {

                if( settings.scrollDetectionMode == 'scrollEvent' ) {

                    settings.element.on( 'scroll', function() {
                        var now = Date.now();
                        var elapsed = now - settings.now;
                        
                        if( elapsed > settings.fps ) {
                            settings.now = now - ( elapsed % settings.fps );

                            settings.scrollTop = settings.element.scrollTop();
                            onScroll();
                        }
                    } );

                }

            }

            var loop = function() {
                requestAnimationFrame( loop );
                
                var now = Date.now();
                var elapsed = now - settings.now;
                
                if( elapsed > settings.fps ) {
                    settings.now = now - ( elapsed % settings.fps );
                  
                    settings._scrollTop = settings.scrollTop;
                    settings.scrollTop = settings.element.scrollTop();

                    if( settings.scrollTop != settings._scrollTop ) {
                        onScroll();
                    }
                }
            }

            var onScroll = function() {
                debuglog( 'siteLarger.win.onScroll()' );
            }

            return {
                init: function() { init(); }
            }

        } )();

        // module 
        var module = ( function() {

            var settings = {};

            var init = function() {
                debuglog( 'siteLarger.module.init()' );
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

    $( document ).ready( function () {
        debuglog( 'site-larger.js loaded...' );

        siteLarger.init();
    } );

} );