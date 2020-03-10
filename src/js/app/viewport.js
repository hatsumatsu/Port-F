/**
* Viewport
* Handy module to track viewport related events and properties
*/

import $ from 'jquery';
import smoothscroll from 'smoothscroll-polyfill';

import * as Debug from './debug.js';



smoothscroll.polyfill();


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
    scroll: {
        x: undefined,
        y: undefined,
        factorX: 0,
        factorY: 0,

        toTop: undefined,
        toBottom: undefined
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

                var isMobileUIResize = (
                    elements.viewport.width() <= 800 &&
                    state.width === elements.viewport.width() &&
                    Math.abs( state.height - elements.viewport.height() ) < 140
                );

                onResizeFinish( isMobileUIResize );

                elements.document.trigger( 'viewport/resize/finish', [{  isMobileUIResize: isMobileUIResize }] );
                settings.resizeDelay = null;
            }, 500 );
        } );

    // throttle scroll event
    elements.scroller
        .on( 'scroll', function() {
            state.scroll.x = elements.scroller.scrollLeft();
            state.scroll.y = elements.scroller.scrollTop();

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
}

var onResizeFinish = function( isMobileUIResize ) {
    Debug.log( 'Viewport.onResizeFinish()', isMobileUIResize );

    state.width = elements.viewport.width();
    state.height = elements.viewport.height();
    state.documentHeight = $( 'html' ).outerHeight();
    state.pixelRatio = Math.min( window.devicePixelRatio, settings.maxPixelRatio );

    state.scroll.x = elements.scroller.scrollLeft();
    state.scroll.y = elements.scroller.scrollTop();

    // write 1vw to CSS custom property
    document.documentElement.style.setProperty( '--vh', ( state.height / 100 ) + 'px' );
}

var onScroll = function() {
    state.scroll.factorY = state.scroll.y / ( state.documentHeight - state.height );

    // top
    if( state.scroll.y > settings.scrollOffsetY ) {
        if( state.scroll.toTop ) {
            state.scroll.toTop = false;
            elements.document.trigger( 'viewport/scroll/fromTop' );
        }
    } else {
        if( !state.scroll.toTop ) {
            state.scroll.toTop = true;
            elements.document.trigger( 'viewport/scroll/toTop' );
        }
    }

    // bottom
    if( state.scroll.y > state.documentHeight - state.height - settings.scrollOffsetY ) {
        if( !state.scroll.toBottom ) {
            state.scroll.toBottom = true;
            elements.document.trigger( 'viewport/scroll/toBottom' );
        }
    } else {
        if( state.scroll.toBottom ) {
            state.scroll.toBottom = false;
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



export { init, scrollTo, get };
