// global debug switch
debugmode = true; 

// debuglog
debuglog = function( log ) {
    if( debugmode && typeof console != 'undefined' ) console.log( log );
}

// requestAnimationFrame polyfill
requestAnimationFramePolyfill = 
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function( callback ) { window.setTimeout( callback, 1000/60 ) }

// global vars
config = new Array();

jQuery( function( $ ) {

    // app
    var site = ( function() {

        var init = function() {
            debuglog( 'site.init()' );
            bindEventHandlers();
            win.init();
        }

        var bindEventHandlers = function() {

        }

        // module window
        var win = ( function() {

            var el;
            var resizeDelay;
            var state;
            var _state;

            var init = function() {
                debuglog( 'site.win.init()' );
            
                state = Modernizr.mq( config['mediaquery'] );
                el = $( window );
                bindEventHandlers();
            }

            var bindEventHandlers = function() {

                // throttle resize event
                el.on( 'resize', function() {
                    
                    if( resizeDelay ) { 
                        clearTimeout( resizeDelay );
                    }

                    resizeDelay = setTimeout( resize, 1000 );
                } );

            }

            var resize = function() {
                debuglog( 'site.win.resize()' );

                var _state = state;
                state = Modernizr.mq( config['mediaquery'] );
                
                if( state != _state ) {
                    window.location.reload();
                }
            }

            return {
                init: function() { init(); }
            }

        } )();

        // module 
        var module = ( function() {

            var init = function() {
                debuglog( 'site.module.init()' );
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

        // init config vars
        config['blogurl'] = $( 'head' ).attr( 'data-wpurl' );
        config['breakpoint'] = $( 'title' ).css( 'width' );
        config['mediaquery'] = $( 'title' ).css( 'fontFamily' )
            .replace( /'/g, '' )
            .replace( /"/g, '' );
        config['transition-duration'] = parseFloat( $( 'title' ).css( 'transitionDuration' ) * 1000 );


        debuglog( 'site-global.js loaded...' );
        debuglog( config['blogurl'] );

        site.init();

        $( 'html' ).removeClass( 'no-js' );

    } );

} );