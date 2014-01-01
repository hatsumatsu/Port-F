// global debug switch
debugmode = true; 

jQuery( function( $ ) {

    blogurl = $( 'head' ).attr( 'data-wpurl' );

    $( document ).ready( function () {

        debuglog( 'site.js loaded...' );
        debuglog( blogurl );

        $( 'html' ).removeClass( 'no-js' );

    } ); /* end document ready */



    /* debuglog */

    function debuglog( log ) {

        if( debugmode && typeof console != 'undefined' ) console.log( log );

    }

} );