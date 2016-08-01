/**
 * Debug
 */
Debug = ( function() {

    var settings = {
        isLocal: false,
        isActive: true,
        keyboard: {
            key:        68,
            count:      0,
            countMax:   7,
            timeDuration:   5000,
            timer:      null
        },
    }

    var init = function() {
        settings.isLocal = ( location.href.indexOf( 'local' ) > -1 ) ? true : false;
        settings.isActive = settings.isLocal;

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
                        settings.isActive = !settings.isActive;
                        log( 'toggle logging', settings.isActive );
                    }
                }
            } );
    }

    var log = function() {
        if( settings.isActive ) {
            console.log.apply( console, arguments );
        }
    }

    return {
        init: function() { init(); },
        log:  log,
        isActive: function() { return settings.isActive }
    }

} )();

Debug.init();
