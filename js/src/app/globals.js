/**
* Globals
*/

import $ from 'jquery';

import * as Debug from './debug.js';



var globals = {}

var init = function() {
    set( 'blogurl', $( 'head' ).attr( 'data-wpurl' ) );
    set( 'theme', $( 'head' ).attr( 'data-project' ) );
    set( 'breakpoint', $( 'title' ).css( 'width' ) );
    set( 'mediaQuery', $( 'title' ).css( 'fontFamily' )
        .replace( /'/g, '' )
        .replace( /"/g, '' )
    );
    set( 'transitionDuration', ( parseFloat( $( 'title' ).css( 'transitionDuration' ) ) * 1000 ) || 500 );

    Debug.log( globals );
}

var set = function( key, value ) {
    globals[key] = value;
}

var get = function( key ) {
    return globals[key];
}



export { init, set, get }
