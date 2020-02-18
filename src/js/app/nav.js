/**
* Nav
*/

import $ from 'jquery';

import * as Debug from './debug.js';



var namespace = '.nav';
var mediaQuery = 'screen';

var settings = {}

var selector = {
    nav: '[data-nav-role="nav"]',
    toggle: '[data-nav-role="toggle"]'
}

var state = {
    initiated: false,
    visible: {}
}

var setup = function() {
    Debug.log( 'Nav.setup()' );

    if( state.initiated ) {
        return false;
    }

    bindEvents();

    state.initiated = true;
}

var bindEvents = function() {
    $( document )
        .on( 'click', selector.toggle, function( event ) {
            event.preventDefault();

            var id = $( this ).attr( 'data-nav-id' );

            toggle( id );
        } );
}

var toggle = function( id ) {
    Debug.log( 'Nav.toggle()', id );

    if( !id ) {
        return false;
    }

    if( !state.visible[id] ) {
        show( id );
    } else {
        hide( id );
    }
}

var show = function( id ) {
    Debug.log( 'Nav.show()', id );

    state.visible[id] = true;

    $( 'html' ).addClass( 'visible--nav-' + id );

    $( document ).trigger( 'nav/show', [{ id: id }] );
}

var hide = function( id ) {
    Debug.log( 'Nav.hide()', id );

    state.visible[id] = false;

    $( 'html' ).removeClass( 'visible--nav-' + id );

    $( document ).trigger( 'nav/hide', [{ id: id }] );

}



/**
 * Factory functions
 */
var _init = function() {
    Debug.log( 'Nav._init()' );

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