/**
* Debug
*/

var state = {
    local: false,
    active: true
}

var log;

state.local = ( location.href.indexOf( 'local' ) > -1 ) ? true : false;
state.active = state.local;

if( state.active ) {
    log = console.log.bind( window.console );
} else {
    log = function() {}
}

export { log }
