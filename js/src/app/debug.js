/**
 * Debug
 */
Debug = ( function() {

    var settings = {
        keyboard: {
            key:        68,
            count:      0,
            countMax:   7,
            timeDuration:   5000,
            timer:      null
        },
    }

    var state = {
        local: false,
        active: true
    }

    var init = function() {
        state.local = ( location.href.indexOf( 'local' ) > -1 ) ? true : false;
        state.active = state.local;

        bindEventHandlers();
    }

    var bindEventHandlers = function() {
        document
            .addEventListener( 'keyup', function( event ) {
                if( event.which == settings.keyboard.key ) {
                    log( 'hit the toggle key' );

                    if( settings.keyboard.timer ) {
                        clearTimeout( settings.keyboard.timer );
                    }

                    settings.keyboard.timer = setTimeout( function() {
                        settings.keyboard.count = 0;
                        clearTimeout( settings.keyboard.timer );
                    }, settings.keyboard.timeDuration );

                    settings.keyboard.count = settings.keyboard.count + 1;
                    if( settings.keyboard.count == settings.keyboard.countMax ) {
                        state.active = !state.active;
                        log( 'toggle logging', state.active );
                    }
                }
            } );
    }

    var log = function() {
        if( state.active ) {
            console.log.apply( console, arguments );
        }
    }

    return {
        init: function() { init(); },
        log:  log
    }
} )();


Debug.init();
