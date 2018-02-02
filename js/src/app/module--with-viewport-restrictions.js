/**
 * Module
 */
jQuery( function( $ ) {

    Module = ( function() {
        var settings = {
            minWidth: 640,
            maxWidth: 9999
        }

        var selector = {}

        var state = {
            initiated: false
        }

        var init = function() {
            console.log( 'Module.init()' );

            // listen for resize event
            $( document )
                .on( 'viewport/resize/finish', function() {
                    onResize();
                } )

            checkWidth();
        }

        var bindEvents = function() {
            $( document )
                .on( 'click.module', function() {
                    alert( 'click' );
                } );
        }

        var onResize = function() {
            checkWidth();

            /* custom resize behavior */
        }

        var setup = function() {
            console.log( 'Module.setup()' );

            if( state.initiated ) {
                return false;
            }

            bindEvents();

            state.initiated = true;
        }

        var destroy = function() {
            console.log( 'Module.destroy()' );

            if( !state.initiated ) {
                return false;
            }

            $( document ).off( '.module' )
            state.initiated = false;
        }

        var checkWidth = function() {
            if( Viewport.get( 'width' ) >= settings.minWidth && Viewport.get( 'width' ) <= settings.maxWidth && !state.initiated ) {
                setup();
            }

            if( ( Viewport.get( 'width' ) < settings.minWidth || Viewport.get( 'width' ) > settings.maxWidth ) && state.initiated ) {
                destroy();
            }
        }

        return {
            init: function() { init(); }
        }
    } )();


    $( document ).ready( function() {
        Module.init();
    } );
} );
