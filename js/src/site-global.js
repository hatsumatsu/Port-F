jQuery( function( $ ) {

    // app
    siteGlobal = ( function() {

        var init = function() {
            debuglog( 'siteGlobal.init()' );
            bindEventHandlers();
            win.init();
            nav.init();
        }

        var bindEventHandlers = function() {

        }

        // module window
        var win = ( function() {

            var settings = {};

            var init = function() {
                debuglog( 'siteGlobal.win.init()' );
            
                settings.state = Modernizr.mq( globals.mediaQuery );
                settings.element = $( window );

                bindEventHandlers();
            }

            var bindEventHandlers = function() {

                // throttle resize event
                settings.element.on( 'resize', function() {
                    
                    if( settings.resizeDelay ) {
                        clearTimeout( settings.resizeDelay );
                        settings.resizeDelay = null;
                    } else {
                        $( 'html' ).addClass( 'resizing' );
                        $( document ).trigger( 'win/resize/start' );
                    }
                 
                    settings.resizeDelay = setTimeout( function() {
                        $( 'html' ).removeClass( 'resizing' );
                        $( document ).trigger( 'win/resize/finish' );
                        settings.resizeDelay = null;
                    }, 500 );
                
                } ); 

                $( document ).on( 'win/resize/finish', function() {
                    onResizeFinish();
                } )

            }

            var onResizeFinish = function() {
                debuglog( 'siteGlobal.win.onResizeFinish()' );

                settings._state = settings.state;
                settings.state = Modernizr.mq( globals.mediaQuery );
                
                debuglog( settings );

                if( settings.state != settings._state ) {
                    window.location.reload();
                }
            }

            return {
                init: function() { init(); }
            }

        } )();


        // nav 
        var nav = ( function() {

            var settings = {
                id: 'head-primary'
            };

            var init = function() {
                debuglog( 'siteGlobal.nav.init()' );

                settings.element = $( '.nav-' + settings.id );

                bindEventHandlers();
            }

            var bindEventHandlers = function() {
                settings.element
                    .on( 'click', '.toggle', function( e ) {
                        e.preventDefault();

                        if( $( 'html' ).hasClass( 'show-' + settings.id  ) ) {
                            $( document ).trigger( 'nav/hide' );
                        } else {
                            $( document ).trigger( 'nav/show' );
                        }

                        $( 'html' ).toggleClass( 'show-' + settings.id );

                    } );
            }

            return {
                init: function() { init(); }
            }

        } )();


        // module 
        var module = ( function() {

            var settings = {};

            var init = function() {
                debuglog( 'siteGlobal.module.init()' );
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

    // document ready
    $( document ).ready( function () {
        siteGlobal.init();
    } );

} );