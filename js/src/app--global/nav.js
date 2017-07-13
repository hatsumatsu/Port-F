/**
 * Nav
 */
jQuery( function( $ ) {

    AppGlobal.Nav = ( function() {

        var settings = {}

        var selector = {
            nav: '[data-nav-role="nav"]',
            toggle: '[data-nav-role="toggle"]'
        }

        var state = {}

        var init = function() {
            Debug.log( 'App Global.Nav.init()' );

            bindEvents();
        }

        var bindEvents = function() {
            $( document )
                .on( 'click', selector.toggle, function( event ) {
                    event.preventDefault();

                    var id = $( this ).attr( 'data-nav-id' );

                    if( id ) {
                        if( $( 'html' ).hasClass( 'visible--nav-' + id  ) ) {
                            $( document ).trigger( 'nav/hide', [{
                                id: id
                            }] );
                        } else {
                            $( document ).trigger( 'nav/show', [{
                                id: id
                            }] );
                        }

                        $( 'html' ).toggleClass( 'visible--nav-' + id );
                    }
                } );
        }

        return {
            init: function() { init(); }
        }

    } )();

    $( document ).ready( function () {
        AppGlobal.Nav.init();
    } );

} );
