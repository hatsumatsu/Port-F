/**
* Module
*/

import $ from 'jquery';

import * as Debug from './debug.js';



var settings = {}

var selector = {}

var state = {}

var init = function() {
    Debug.log( 'Module.init()' );

    bindEvents();
}

var bindEvents = function() {

}



export { init }
