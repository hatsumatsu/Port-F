/**
 * Module
 */
jQuery( function( $ ) {

	AppLarger.Module = ( function() {
		var settings = {
			selector: {}
		}

		var state = {}
	
		var init = function() {
			Debug.log( 'AppLarger.Module.init()' );

			bindEventHandlers();
		}
		
		var bindEventHandlers = function() {

		}
		
		return {
			init: function() { init(); }
		}
	} )();

	$( document ).ready( function() {
		AppLarger.Module.init();
	} );

} );