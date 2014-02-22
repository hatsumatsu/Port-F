jQuery( function( $ ) {

    // app
    var site = ( function() {

        var init = function() {
            debuglog( 'site.init()' );
            bindEventHandlers();
        }

        var bindEventHandlers = function() {

        }

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