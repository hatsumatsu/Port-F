/**
 * Viewport
 * handy module to track viewport events and properties
 */
jQuery( function( $ ) {

    Viewport = ( function() {

        var settings = {
            // dimensions
            width: 0,
            height: 0,
            documentHeight: 0,
            pixelRatio: 1,
            maxPixelRatio: 2,

            // loop
            nowLoop: Date.now(),
            fps: ( 1000 / 60 ),

            // scrolling
            scrollTop: -1,
            _scrollTop: -1,
            scrollLeft: -1,
            _scrollLeft: -1,
            scrollDetectionMode: 'scrollEvent', // 'scrollEvent' or 'requestAnimationFrame'
            nowScroll: Date.now(),
            scrollFactor: -1,
            scrollTopOffset: 20,
            scrollBottomOffset: 20,
            scrollToOffset: 0,
            scrollToSpeed: 2,

            // mouse
            mouseX: 0,
            mouseY: 0,
            mousePosition: {
                x: 0,
                y: 0,
                factorX: 0.5,
                factorY: 0.5
            },
            _mousePosition : {}
        };

        var state = {
            scrolledToTop: false,
            scrolledToBottom: false,
            scrolledToFirstScreen: false,
            scrolledToLastScreen: false,
            mediaQuery: null
        }

        var init = function() {
            Debug.log( 'Viewport.init()' );

            settings.element = $( window );

            onResizeFinish();

            bindEvents();

            onScroll();
            onLoop();
        }

        var bindEvents = function() {
            // throttle resize event
            settings.element.on( 'resize', function() {
                if( settings.resizeDelay ) {
                    clearTimeout( settings.resizeDelay );
                    settings.resizeDelay = null;
                } else {
                    $( 'html' ).addClass( 'resizing' );
                    $( document ).trigger( 'viewport/resize/start' );
                }

                settings.resizeDelay = setTimeout( function() {
                    $( 'html' ).removeClass( 'resizing' );
                    $( document ).trigger( 'viewport/resize/finish' );
                    settings.resizeDelay = null;
                }, 500 );
            } );

            // scroll event
            if( settings.scrollDetectionMode == 'scrollEvent' ) {
                settings.element.on( 'scroll', function() {
                    var now = Date.now();
                    var elapsed = now - settings.nowScroll;

                    if( elapsed > settings.fps ) {
                        settings.nowScroll = now - ( elapsed % settings.fps );

                        settings.scrollTop = settings.element.scrollTop();
                        $( document ).trigger( 'viewport/scroll' );
                    }
                } );
            }

            $( document )
                .on( 'viewport/scroll', function() {
                    onScroll();
                } )
                .on( 'viewport/resize/finish', function() {
                    onResizeFinish();
                } )

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
                } )

                // first screen
                .on( 'viewport/scroll/toFirstScreen', function() {
                    Debug.log( 'scrolled to first screen' );

                    $( 'html' ).addClass( 'scrolled-to-first-screen' );
                } )
                .on( 'viewport/scroll/fromFirstScreen', function() {
                    Debug.log( 'scrolled from first screen' );

                    $( 'html' ).removeClass( 'scrolled-to-first-screen' );
                } )

                // last screen
                .on( 'viewport/scroll/toLastScreen', function() {
                    Debug.log( 'scrolled to last screen' );

                    $( 'html' ).addClass( 'scrolled-to-last-screen' );
                } )
                .on( 'viewport/scroll/fromLastScreen', function() {
                    Debug.log( 'scrolled from last screen' );

                    $( 'html' ).removeClass( 'scrolled-to-last-screen' );
                } );

            // mouse movement
            settings.element
                .on( 'mousemove', function( event ) {
                    settings.mouseX = event.pageX - settings.scrollLeft;
                    settings.mouseY = event.pageY - settings.scrollTop;
                } );
        }

        /**
         * requestAnimationFrame loop throttled at 60fps
         */
        var onLoop = function() {
            requestAnimationFrame( onLoop );

            var now = Date.now();
            var elapsed = now - settings.nowLoop;

            // the actual 'loop'
            if( elapsed > settings.fps ) {
                settings.nowLoop = now - ( elapsed % settings.fps );

                $( document ).trigger( 'viewport/loop', [{ now: now }] );

                // scrollTop
                if( settings.scrollDetectionMode == 'requestAnimationFrame' ) {
                    settings._scrollTop = settings.scrollTop;
                    settings.scrollTop = settings.element.scrollTop();

                    settings._scrollLeft = settings.scrollLeft;
                    settings.scrollLeft = settings.element.scrollLeft();

                    if( settings.scrollTop != settings._scrollTop
                     || settings.scrollLeft != settings._scrollLeft ) {
                        $( document ).trigger( 'viewport/scroll' );
                    }
                }

                // mousemove
                settings._mousePosition = settings.mousePosition;

                if( settings.mouseX != settings._mousePosition.x
                 || settings.mouseY != settings._mousePosition.y ) {

                    var factorX = ( settings.mouseX / settings.width );
                    var factorY = ( settings.mousePosition.y / settings.height );

                    settings.mousePosition = {
                      x: settings.mouseX,
                      y: settings.mouseY,
                      factorX: factorX,
                      factorY: factorY
                    }

                    $( document ).trigger( 'viewport/mousemove' );
                }
            }
        }

        var onResizeFinish = function() {
            Debug.log( 'Viewport.onResizeFinish()' );

            state._mediaQuery = state.mediaQuery;
            state.mediaQuery = Modernizr.mq( Globals.get( 'mediaQuery' ) );
            if( state._mediaQuery !== null && state.mediaQuery !== state._mediaQuery ) {
                window.location.reload();
            }

            settings.width = settings.element.width();
            settings.height = settings.element.height();
            settings.documentHeight = $( 'html' ).outerHeight();
            settings.pixelRatio = window.devicePixelRatio || 1;
            if( settings.pixelRatio > settings.maxPixelRatio ) {
                settings.pixelRatio = settings.maxPixelRatio;
            }
        }

        var onScroll = function() {
            Debug.log( 'Viewport.onScroll()' );

            settings.scrollFactor = settings.scrollTop / ( settings.height - settings.documentHeight ) * -1;

            // top
            if( settings.scrollTop > settings.scrollTopOffset ) {
                if( state.scrolledToTop ) {
                    state.scrolledToTop = false;
                    $( document ).trigger( 'viewport/scroll/fromTop' );
                }
            }

            if( settings.scrollTop < settings.scrollTopOffset ) {
                if( !state.scrolledToTop ) {
                    state.scrolledToTop = true;
                    $( document ).trigger( 'viewport/scroll/toTop' );
                }
            }

            // bottom
            if( settings.scrollTop > settings.documentHeight - settings.height - settings.scrollBottomOffset ) {
                if( !state.scrolledToBottom ) {
                    state.scrolledToBottom = true;
                    $( document ).trigger( 'viewport/scroll/toBottom' );
                }
            }

            if( settings.scrollTop < settings.documentHeight - settings.height - settings.scrollBottomOffset ) {
                if( state.scrolledToBottom ) {
                    state.scrolledToBottom = false;
                    $( document ).trigger( 'viewport/scroll/fromBottom' );
                }
            }

            // first screen
            if( settings.scrollTop < settings.height ) {
                if( !state.scrolledToFirstScreen ) {
                    state.scrolledToFirstScreen = true;
                    $( document ).trigger( 'viewport/scroll/toFirstScreen' );
                }
            }

            if( settings.scrollTop > settings.height ) {
                if( state.scrolledToFirstScreen ) {
                    state.scrolledToFirstScreen = false;
                    $( document ).trigger( 'viewport/scroll/fromFirstScreen' );
                }
            }

            // last screen
            if( settings.scrollTop > settings.documentHeight - ( 2* settings.height ) ) {
                if( !state.scrolledToLastScreen ) {
                    state.scrolledToLastScreen = true;
                    $( document ).trigger( 'viewport/scroll/toLastScreen' );
                }
            }

            if( settings.scrollTop < settings.documentHeight - ( 2* settings.height ) ) {
                if( state.scrolledToLastScreen ) {
                    state.scrolledToLastScreen = false;
                    $( document ).trigger( 'viewport/scroll/fromLastScreen' );
                }
            }
        }

        var scrollTo = function( target, offset, animate ) {
            Debug.log( 'Viewport.scrollTo()' );
            Debug.log( target );

            var top = 0;

            // scroll to position
            if( typeof target == 'number' ) {
                top = target;
            }

            // scroll to id
            if( typeof target == 'string' && $( '#' + target ).length > 0 ) {
                top = parseInt( $( '#' + target ).offset().top );
            }

            // scroll to element
            if( typeof target == 'object' && target.length > 0 ) {
                top = parseInt( target.offset().top );
            }

            if( offset ) {
                top = top + offset;
            } else {
                top = top + settings.scrollToOffset;
            }

            var distance = Math.floor( Math.abs( top - $( window ).scrollTop() ) );
            var duration = Math.floor( distance / settings.scrollToSpeed );

            if( animate ) {
                $( 'html, body' ).animate( {
                    scrollTop: top
                }, duration );
            } else {
                settings.element.scrollTop( top );
            }

        }

        var getWidth = function() {
            return settings.width;
        }

        var getHeight = function() {
            return settings.height;
        }

        var getScrollTop = function() {
            return settings.scrollTop;
        }

        var getScrollLeft = function() {
            return settings.scrollLeft;
        }

        var getScrollFactor = function() {
            return settings.scrollFactor;
        }

        var getMousePosition = function() {
            return settings.mousePosition;
        }

        var get = function( key ) {
            return settings[key] || false;
        }

        return {
            init:               function() { init(); },
            scrollTo:           function( target, offset, animate ) { scrollTo( target, offset, animate ) },
            getWidth:           function() { return getWidth() },
            getHeight:          function() { return getHeight() },
            getScrollTop:       function() { return getScrollTop() },
            getScrollLeft:      function() { return getScrollLeft() },
            getScrollFactor:    function() { return getScrollFactor() },
            getMousePosition:   function() { return getMousePosition() },
            get:                function( key ) { return get( key ) }
        }
    } )();


    $( document ).ready( function() {
        Viewport.init();
    } );

} );
