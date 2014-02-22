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

        // module win
        var win = ( function() {

            var winEl;
            var winScrollTop;

            var init = function() {
                debuglog( 'site.win.init()' );
                winEl = $( window );
                bindEventHandlers()
                scrollLoop();
            }

            var bindEventHandlers = function() {

            }

            var scrollLoop = function() {
                var _winScrollTop = winScrollTop;
                winScrollTop = winEl.scrollTop();

                if( winScrollTop != _winScrollTop ) {
                    scroll();
                }

                requestAnimationFramePolyfill( scrollLoop );
            }

            var scroll = function() {
                debuglog( 'site.win.scroll()' );
            }

            return {
                init: function() { init(); }
            }

        } )();

        // module 
        var module = ( function() {

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
        debuglog( config['blogurl'] );

        site.init();

    } ); /* end document ready */

} );