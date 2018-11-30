/**
 * Viewport
 * Handy module to track viewport related events and properties
 */
jQuery( function( $ ) {

    Viewport = ( function() {

        var settings = {
            // screen
            maxPixelRatio: 2,

            // scroll
            scrollOffsetY: 20,
            scrollToOffset: 0
        }

        var elements = {
            document: null,
            viewport: null,
            scroller: null
        }

        var state = {
            // window / document
            width: 0,
            height: 0,
            documentHeight: 0,
            pixelRatio: 1,

            // scroll
            scrollY: -1,
            _scrollY: -1,
            scrollX: -1,
            _scrollX: -1,
            scrollFactorY: 0,

            scrolledToTop: false,
            scrolledToBottom: false,

            // mouse
            mousePosition: {
                x: 0,
                y: 0,
                factorX: 0.5,
                factorY: 0.5
            }
        }

        var init = function() {
            Debug.log( 'Viewport.init()' );

            elements.document = $( document );
            elements.viewport = $( window );
            elements.scroller = $( window );

            onResizeFinish();

            bindEventHandlers();

            onScroll();

            Debug.log( 'Viewport.state', state );
        }

        var bindEventHandlers = function() {
            // debounce resize event
            elements.viewport
                .on( 'resize', function() {
                    if( settings.resizeDelay ) {
                        clearTimeout( settings.resizeDelay );
                        settings.resizeDelay = null;
                    } else {
                        $( 'html' ).addClass( 'resizing' );
                        elements.document.trigger( 'viewport/resize/start' );
                    }

                    settings.resizeDelay = setTimeout( function() {
                        $( 'html' ).removeClass( 'resizing' );

                        onResizeFinish();

                        elements.document.trigger( 'viewport/resize/finish' );
                        settings.resizeDelay = null;
                    }, 500 );
                } );

            // throttle scroll event
            elements.scroller
                .on( 'scroll', function() {
                    state.scrollX = elements.scroller.scrollLeft();
                    state.scrollY = elements.scroller.scrollTop();

                    requestAnimationFrame( function() {
                        onScroll();

                        elements.document.trigger( 'viewport/scroll' );
                    } );
                } );

            elements.document
                // top
                .on( 'viewport/scroll/toTop', function() {
                    Debug.log( 'scrolled to top' );

                    $( 'html' ).addClass( 'scrolled-to-top' );
                } )
                .on( 'viewport/scroll/fromTop', function() {
                    Debug.log( 'scrolled from top' );

                    $( 'html' ).removeClass( 'scrolled-to-top' );
                } )

                // bottom
                .on( 'viewport/scroll/toBottom', function() {
                    Debug.log( 'scrolled to bottom' );

                    $( 'html' ).addClass( 'scrolled-to-bottom' );
                } )
                .on( 'viewport/scroll/fromBottom', function() {
                    Debug.log( 'scrolled from bottom' );

                    $( 'html' ).removeClass( 'scrolled-to-bottom' );
                } );

            // mouse movement
            elements.viewport
                .on( 'mousemove', function( event ) {
                    state.mousePosition.x = event.pageX - state.scrollX;
                    state.mousePosition.y = event.pageY - state.scrollY;
                    state.mousePosition.factorX = ( state.mousePosition.x / state.width );
                    state.mousePosition.factorY = ( state.mousePosition.y / state.height );
                } );
        }

        var onResizeFinish = function() {
            Debug.log( 'Viewport.onResizeFinish()' );

            state.width = elements.viewport.width();
            state.height = elements.viewport.height();
            state.documentHeight = $( 'html' ).outerHeight();
            state.pixelRatio = window.devicePixelRatio || 1;
            if( state.pixelRatio > settings.maxPixelRatio ) {
                state.pixelRatio = settings.maxPixelRatio;
            }
        }

        var onScroll = function() {
            Debug.log( state.scrollY );
            state.scrollFactorY = state.scrollY / ( state.height - state.documentHeight ) * -1;

            // top
            if( state.scrollY > settings.scrollOffsetY ) {
                if( state.scrolledToTop ) {
                    state.scrolledToTop = false;
                    elements.document.trigger( 'viewport/scroll/fromTop' );
                }
            }

            if( state.scrollY < settings.scrollOffsetY ) {
                if( !state.scrolledToTop ) {
                    state.scrolledToTop = true;
                    elements.document.trigger( 'viewport/scroll/toTop' );
                }
            }

            // bottom
            if( state.scrollY > state.documentHeight - state.height - settings.scrollOffsetY ) {
                if( !state.scrolledToBottom ) {
                    state.scrolledToBottom = true;
                    elements.document.trigger( 'viewport/scroll/toBottom' );
                }
            }

            if( state.scrollY < state.documentHeight - state.height - settings.scrollOffsetY ) {
                if( state.scrolledToBottom ) {
                    state.scrolledToBottom = false;
                    elements.document.trigger( 'viewport/scroll/fromBottom' );
                }
            }
        }

        var scrollTo = function( target, offset, animate ) {
            Debug.log( 'Viewport.scrollTo()', target );

            var y = 0;

            // scroll to position
            if( typeof target == 'number' ) {
                y = target;
            }

            // scroll to selector
            if( typeof target == 'string' && $( target ).length > 0 ) {
                y = parseInt( $( target ).first().offset().top );
            }

            // scroll to element
            if( typeof target == 'object' && target.length > 0 ) {
                y = parseInt( target.offset().top );
            }

            if( offset ) {
                y = y + offset;
            } else {
                y = y + settings.scrollToOffset;
            }

            if( animate ) {
                elements.scroller[0].scroll( {
                    top: y,
                    left: 0,
                    behavior: 'smooth'
                } );
            } else {
                elements.scroller.scrollTop( y );
            }

        }

        var get = function( key ) {
            return state[key] || false;
        }

        return {
            init:               function() { init(); },
            scrollTo:           function( target, offset, animate ) { scrollTo( target, offset, animate ) },
            get:                function( key ) { return get( key ) }
        }

    } )();


    $( function() {
        Viewport.init();
    } );

} );
