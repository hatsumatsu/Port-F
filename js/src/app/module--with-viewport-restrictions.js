/**
* Module
*/

import $ from 'jquery';

import * as Debug from './debug.js';



var namespace = '.module';
var mediaQuery = '( min-width: 680px )';

var settings = {}

var selector = {}

var state = {
    initiated: false
}

var setup = function() {
    Debug.log( 'Module.setup()' );

    if( state.initiated ) {
        return false;
    }

    bindEvents();

    state.initiated = true;
}

var bindEvents = function() {
    $( document )
        .on( 'click' + namespace, function() {
            alert( 'click' );
        } );
}


/**
 * Factory functions
 */
var _init = function() {
    Debug.log( 'Module._init()' );

    // listen for resize event
    $( document )
        .on( 'viewport/resize/finish', function() {
            _onResize();
        } )

    _checkMediaQuery();
}

var _onResize = function() {
    _checkMediaQuery();
}

var _setup = function() {
    setup();
}

var _destroy = function() {
    if( !state.initiated ) {
        return false;
    }

    $( document ).off( namespace )
    state.initiated = false;

    if( typeof destroy === 'function' ) {
        destroy();
    }
}

var _checkMediaQuery = function() {
    if( window.matchMedia( mediaQuery ).matches ) {
        _setup();
    } else {
        _destroy();
    }
}



export { _init as init }
