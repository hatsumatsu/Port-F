/**
 * Debug
 */
Debug = ( function() {

	var settings = {
		isLocal: false,
		isActive: true
	}

	var init = function() {
		settings.isLocal = ( location.href.indexOf( 'local' ) > -1 ) ? true : false;
		settings.isActive = settings.isLocal;

		bindEventHandlers();
	}

	var bindEventHandlers = function() {

	}

	var log = function() {
		if( settings.isLocal || settings.isActive ) {
			console.log.apply( console, arguments );
		}
	}

	return {
		init: function() { init(); },
		log:  log,
		isActive: function() { return settings.isActive } 
	}
	
} )();

Debug.init();