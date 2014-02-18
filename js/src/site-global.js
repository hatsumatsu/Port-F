// global debug switch
debugmode = true; 
blogurl = '';

jQuery( function( $ ) {


    $( document ).ready( function () {

        blogurl = $( 'head' ).attr( 'data-wpurl' );

        debuglog( 'site.js loaded...' );
        debuglog( blogurl );

        $( 'html' ).removeClass( 'no-js' );

    } ); /* end document ready */



    /* debuglog */

    function debuglog( log ) {

        if( debugmode && typeof console != 'undefined' ) console.log( log );

    }

} );