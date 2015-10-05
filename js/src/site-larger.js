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
                width: 0,
                height: 0,
                scrollTop: 0,
                scrollDetectionMode: 'scrollEvent', // 'scrollEvent' or 'requestAnimationFrame'
                now: Date.now(),
                fps: ( 1000 / 60 )
            };

            var init = function() {
                debuglog( 'siteLarger.win.init()' );
                
                settings.element = $( window );
                
                onResizeFinish();

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
                            $( document ).trigger( 'win/scroll' );
                        }
                    } );

                }

                $( document )
                    .on( 'win/scroll', function() {
                        onScroll();
                    } )
                    .on( 'win/resize/finish', function() {
                        onResizeFinish();
                    } );


            }

            /**
             * requestAnimationFrame loop throttled at 60fps 
             */
            var loop = function() {
                requestAnimationFrame( loop );
                
                var now = Date.now();
                var elapsed = now - settings.now;
                
                if( elapsed > settings.fps ) {
                    settings.now = now - ( elapsed % settings.fps );
                  
                    settings._scrollTop = settings.scrollTop;
                    settings.scrollTop = settings.element.scrollTop();

                    if( settings.scrollTop != settings._scrollTop ) {
                        $( document ).trigger( 'win/scroll' );
                    }
                }
            }

            var onResizeFinish = function() {
                debuglog( 'siteLarger.win.onResizeFinish()' );

                settings.width = settings.element.width();
                settings.height = settings.element.height();
            }

            var onScroll = function() {
                debuglog( 'siteLarger.win.onScroll()' );
            }

            var getWidth = function() {
                return settings.width;
            }

            var getHeight = function() {
                return settings.height;
            }

            var getScrollTop = function() {
                return settings.scrollTop;
            }            

            return {
                init:           function() { init(); },
                getWidth:       function() { return getWidth() },
                getHeight:      function() { return getHeight() },
                getScrollTop:   function() { return getScrollTop() }
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