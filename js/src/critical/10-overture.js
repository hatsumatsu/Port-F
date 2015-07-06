// globals
globals = {
	debug: true
};
siteGlobal = {};
siteSmaller = {};
siteLarger = {};


// debuglog
debuglog = function( log, force ) {
    if( ( globals.debug || force ) && typeof console != 'undefined' ) console.log( log );
}


jQuery( function( $ ) {

	$( document ).ready( function() {
	    // init globals
	    globals.blogurl = $( 'head' ).attr( 'data-wpurl' );
	    globals.theme = $( 'head' ).attr( 'data-project' );
	    globals.breakpoint = $( 'title' ).css( 'width' );
	    globals.mediaQuery = $( 'title' ).css( 'fontFamily' )
	        .replace( /'/g, '' )
	        .replace( /"/g, '' );
	    globals.transitionDuration = ( parseFloat( $( 'title' ).css( 'transitionDuration' ) ) * 1000 ) || 500;

	    // mute debuglog on live sites
	    if( globals.blogurl.indexOf( 'local' ) < 0 ) {
	        globals.debug = false;
	    }

	    debuglog( 'site-global.js loaded...' );
	    debuglog( globals );
	} );

} );