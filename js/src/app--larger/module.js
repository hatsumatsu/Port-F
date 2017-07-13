/**
 * Module
 */
jQuery( function( $ ) {

    AppLarger.Module = ( function() {
        var settings = {}

        var selector = {}

        var state = {}

        var init = function() {
            Debug.log( 'AppLarger.Module.init()' );

            bindEvents();
        }

        var bindEvents = function() {

        }

        return {
            init: function() { init(); }
        }
    } )();

    $( document ).ready( function() {
        AppLarger.Module.init();
    } );

} );
