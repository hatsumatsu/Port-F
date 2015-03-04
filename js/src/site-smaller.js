jQuery( function( $ ) {

    // app
    var site = ( function() {

        var init = function() {
            debuglog( 'smaller.init()' );
            bindEventHandlers();
        }

        var bindEventHandlers = function() {

        }

        // module 
        var module = ( function() {

            var settings = {};

            var init = function() {
                debuglog( 'smaller.module.init()' );
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
        debuglog( 'site-smaller.js loaded...' );
    
        site.init();
    } ); 

} );