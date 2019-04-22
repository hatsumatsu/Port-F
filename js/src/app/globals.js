/**
* Globals
*/

import $ from 'jquery';

import * as Debug from './debug.js';



var globals = {}

var init = function() {
    set( 'blogurl', $( 'head' ).attr( 'data-wpurl' ) );
    set( 'theme', $( 'head' ).attr( 'data-project' ) );

    Debug.log( globals );
}

var set = function( key, value ) {
    globals[key] = value;
}

var get = function( key ) {
    return globals[key];
}



export { init, set, get }
