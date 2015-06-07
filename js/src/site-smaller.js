jQuery( function( $ ) {

    // app
    siteSmaller = ( function() {

        var init = function() {
            debuglog( 'siteSmaller.init()' );
            bindEventHandlers();
        }

        var bindEventHandlers = function() {

        }

        // module 
        var module = ( function() {

            var settings = {};

            var init = function() {
                debuglog( 'siteSmaller.module.init()' );
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
    
        siteSmaller.init();
    } ); 

} );