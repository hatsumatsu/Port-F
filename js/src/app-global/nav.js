/**
 * Nav
 */
jQuery( function( $ ) {

    AppGlobal.Nav = ( function() {

        var settings = {

        };

        var init = function() {
            Debug.log( 'AppGlobal.Nav.init()' );

            bindEventHandlers();
        }

        var bindEventHandlers = function() {
            $( document )
                .on( 'click', '.nav-toggle', function( e ) {
                    e.preventDefault();

                    var navigation = $( this ).closest( 'nav' );
                    var id = navigation.attr( 'data-theme-location' );

                    if( $( 'html' ).hasClass( 'visible--' + id  ) ) {
                        $( document ).trigger( 'nav/hide' );
                    } else {
                        $( document ).trigger( 'nav/show' );
                    }

                    $( 'html' ).toggleClass( 'visible--' + id );
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