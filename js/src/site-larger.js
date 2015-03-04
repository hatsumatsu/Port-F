jQuery( function( $ ) {

    // app
    var site = ( function() {

        var init = function() {
            debuglog( 'larger.init()' );
            bindEventHandlers();
            win.init();
        }

        var bindEventHandlers = function() {

        }

        // module window
        var win = ( function() {

            var settings = {};

            var init = function() {
                debuglog( 'larger.win.init()' );
                
                settings.element = $( window );
                
                bindEventHandlers()
                loop();
            }

            var bindEventHandlers = function() {

            }

            var loop = function() {
                settings._scrollTop = settings.scrollTop;
                settings.scrollTop = settings.element.scrollTop();

                if( settings.scrollTop != settings._scrollTop ) {
                    onScroll();
                }

                requestAnimationFrame( loop );
            }

            var onScroll = function() {
                debuglog( 'larger.win.onScroll()' );
            }

            return {
                init: function() { init(); }
            }

        } )();

        // module 
        var module = ( function() {

            var settings = {};

            var init = function() {
                debuglog( 'larger.module.init()' );
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