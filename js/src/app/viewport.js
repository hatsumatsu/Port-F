/**
 * Viewport
 * handy module to track viewport events and properties
 */
jQuery( function( $ ) {

    Viewport = ( function() {

        var settings = {
            // window / document
            maxPixelRatio: 2,

            // time
            fps: ( 1000 / 60 ),

            // scrolling
            scrollYOffset: 20,
            scrollBottomOffset: 20,
            scrollToOffset: 0,
            scrollTimer: null,
        };

        var element = {
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

        var _now = Date.now();

        var init = function() {
            Debug.log( 'Viewport.init()' );

            element.viewport = $( window );
            element.scroller = $( window );

            onResizeFinish();

            bindEventHandlers();

            onScroll();

            Debug.log( 'Viewport.state', state );
        }

        var bindEventHandlers = function() {
            // throttle resize event
            element.viewport
                .on( 'resize', function() {
                    if( settings.resizeDelay ) {
                        clearTimeout( settings.resizeDelay );
                        settings.resizeDelay = null;
                    } else {
                        $( 'html' ).addClass( 'resizing' );
                        $( document ).trigger( 'viewport/resize/start' );
                    }

                    settings.resizeDelay = setTimeout( function() {
                        $( 'html' ).removeClass( 'resizing' );

                        onResizeFinish();

                        $( document ).trigger( 'viewport/resize/finish' );
                        settings.resizeDelay = null;
                    }, 500 );
                } );

            // scroll event
            element.scroller
                .on( 'scroll', function() {
                    var now = Date.now();
                    var elapsed = now - _now;

                    if( elapsed > settings.fps ) {
                        _now = now - ( elapsed % settings.fps );

                        state.scrollX = element.scroller.scrollLeft();
                        state.scrollY = element.scroller.scrollTop();

                        onScroll();

                        $( document ).trigger( 'viewport/scroll' );
                    }
                } );

            $( document )
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
            element.viewport
                .on( 'mousemove', function( event ) {
                    state.mousePosition.x = event.pageX - state.scrollX;
                    state.mousePosition.y = event.pageY - state.scrollY;
                    state.mousePosition.factorX = ( state.mousePosition.x / state.width );
                    state.mousePosition.factorY = ( state.mousePosition.y / state.height );
                } );
        }

        var onResizeFinish = function() {
            Debug.log( 'Viewport.onResizeFinish()' );

            state.width = element.viewport.width();
            state.height = element.viewport.height();
            state.documentHeight = $( 'html' ).outerHeight();
            state.pixelRatio = window.devicePixelRatio || 1;
            if( state.pixelRatio > settings.maxPixelRatio ) {
                state.pixelRatio = settings.maxPixelRatio;
            }
        }

        var onScroll = function() {
            state.scrollFactorY = state.scrollY / ( state.height - state.documentHeight ) * -1;

            // top
            if( state.scrollY > settings.scrollYOffset ) {
                if( state.scrolledToTop ) {
                    state.scrolledToTop = false;
                    $( document ).trigger( 'viewport/scroll/fromTop' );
                }
            }

            if( state.scrollY < settings.scrollYOffset ) {
                if( !state.scrolledToTop ) {
                    state.scrolledToTop = true;
                    $( document ).trigger( 'viewport/scroll/toTop' );
                }
            }

            // bottom
            if( state.scrollY > state.documentHeight - state.height - settings.scrollBottomOffset ) {
                if( !state.scrolledToBottom ) {
                    state.scrolledToBottom = true;
                    $( document ).trigger( 'viewport/scroll/toBottom' );
                }
            }

            if( state.scrollY < state.documentHeight - state.height - settings.scrollBottomOffset ) {
                if( state.scrolledToBottom ) {
                    state.scrolledToBottom = false;
                    $( document ).trigger( 'viewport/scroll/fromBottom' );
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
                element.scroller[0].scroll( {
                    top: y,
                    left: 0,
                    behavior: 'smooth'
                } );
            } else {
                element.scroller.scrollTop( top );
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

    $( document ).ready( function() {
        Viewport.init();
    } );

} );
