jQuery( function( $ ) {

    blogurl = $( 'head' ).attr( 'data-wpurl' );

    $( document ).ready( function () {

        debuglog( 'site-smaller.js loaded...' );
        debuglog( blogurl );
    
        site.init();

    } ); /* end document ready */


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

        } ) ();

        return {
            init: function() { init(); }
        }

    } )();

    /* debuglog */

    function debuglog( log ) {

        if( debugmode && typeof console != 'undefined' ) console.log( log );

    }

} );