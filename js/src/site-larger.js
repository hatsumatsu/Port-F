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
                
                settings.el = $( window );
                
                bindEventHandlers()
                scrollLoop();
            }

            var bindEventHandlers = function() {

            }

            var scrollLoop = function() {
                settings._scrollTop = settings.scrollTop;
                settings.scrollTop = settings.el.scrollTop();

                if( settings.scrollTop != settings._scrollTop ) {
                    onScroll();
                }

                requestAnimationFrame( scrollLoop );
            }

            var onScroll = function() {
                debuglog( 'site.win.onScroll()' );
            }

            return {
                init: function() { init(); }
            }

        } )();

        // module 
        var module = ( function() {

            config = {};

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

    $( document ).ready( function () {
        debuglog( 'site-larger.js loaded...' );

        site.init();
    } );

} );