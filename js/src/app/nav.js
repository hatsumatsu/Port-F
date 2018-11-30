/**
 * Nav
 */
jQuery( function( $ ) {

    Nav = ( function() {
        var namespace = '.nav';

        var settings = {
            mediaQuery: 'screen',
        }

        var selector = {
            nav: '[data-nav-role="nav"]',
            toggle: '[data-nav-role="toggle"]'
        }

        var state = {
            initiated: false
        }

        var setup = function() {
            Debug.log( 'Nav.setup()' );

            if( state.initiated ) {
                return false;
            }

            bindEvents();

            state.initiated = true;
        }

        var bindEvents = function() {
            $( document )
                .on( 'click', selector.toggle, function( event ) {
                    event.preventDefault();

                    var id = $( this ).attr( 'data-nav-id' );

                    toggle( id );
                } );
        }

        var toggle = function( id ) {
            Debug.log( 'Nav.toggle()', id );

            if( !id ) {
                return false;
            }

            if( $( 'html' ).hasClass( 'visible--nav-' + id  ) ) {
                $( document ).trigger( 'nav/hide', [ {
                    id: id
                } ] );
            } else {
                $( document ).trigger( 'nav/show', [ {
                    id: id
                } ] );
            }

            $( 'html' ).toggleClass( 'visible--nav-' + id );
        }


        /**
         * Factory functions
         */
        var _init = function() {
            Debug.log( 'Nav._init()' );

            // listen for resize event
            $( document )
                .on( 'viewport/resize/finish', function() {
                    _onResize();
                } )

            _checkMediaQuery();
        }

        var _onResize = function() {
            _checkMediaQuery();
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

        var _checkMediaQuery = function() {
            if( window.matchMedia( settings.mediaQuery ).matches ) {
                _setup();
            } else {
                _destroy();
            }
        }

        return {
            init: function() { _init(); }
        }
    } )();


    $( function() {
        Nav.init();
    } );
} );
