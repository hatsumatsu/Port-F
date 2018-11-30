/**
 * Module
 */
jQuery( function( $ ) {

    Module = ( function() {
        var settings = {}

        var selector = {}

        var state = {}

        var init = function() {
            Debug.log( 'Module.init()' );

            bindEvents();
        }

        var bindEvents = function() {

        }

        return {
            init: function() { init(); }
        }
    } )();


    $( function() {
        Module.init();
    } );

} );
