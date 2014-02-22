jQuery( function( $ ) {

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

        } )();

        return {
            init: function() { init(); }
        }

    } )();

    /* debuglog */

    function debuglog( log ) {
        if( debugmode && typeof console != 'undefined' ) console.log( log );
    }

    /* requestAnimationFrame polyfill */

    var raf = window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              // IE Fallback, you can even fallback to onscroll
              function( callback ) { window.setTimeout( callback, 1000/60 ) }


    $( document ).ready( function () {

        debuglog( 'site-larger.js loaded...' );
        debuglog( blogurl );

        site.init();

    } ); /* end document ready */

} );