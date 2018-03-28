/**
 * Module
 */
jQuery( function( $ ) {

    Module = ( function() {
        var namespace = '.module';

        var settings = {
            minWidth: 690,
            maxWidth: 9999
        }

        var selector = {}

        var state = {
            initiated: false
        }

        var setup = function() {
            Debug.log( 'Module.setup()' );

            if( state.initiated ) {
                return false;
            }

            bindEvents();

            state.initiated = true;
        }

        var bindEvents = function() {
            $( document )
                .on( 'click' + namespace, function() {
                    alert( 'click' );
                } );
        }


        /**
         * Factory functions
         */
        var _init = function() {
            Debug.log( 'Module._init()' );

            // listen for resize event
            $( document )
                .on( 'viewport/resize/finish', function() {
                    _onResize();
                } )

            _checkWidth();
        }

        var _onResize = function() {
            _checkWidth();
        }

        var _setup = function() {
            setup();
        }

        var _destroy = function() {
            if( !state.initiated ) {
                return false;
            }

            $( document ).off( namespace )
            state.initiated = false;

            if( typeof destroy === 'function' ) {
                destroy();
            }
        }

        var _checkWidth = function() {
            if( Viewport.get( 'width' ) >= settings.minWidth && Viewport.get( 'width' ) <= settings.maxWidth && !state.initiated ) {
                _setup();
            }

            if( ( Viewport.get( 'width' ) < settings.minWidth || Viewport.get( 'width' ) > settings.maxWidth ) && state.initiated ) {
                _destroy();
            }
        }

        return {
            init: function() { _init(); }
        }
    } )();


    $( document ).ready( function() {
        Module.init();
    } );
} );
