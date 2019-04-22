import pictureFill from './dependencies/picturefill.min.js';
import $ from 'jquery';

import * as Globals from './app/globals.js';
import * as Debug from './app/debug.js';
import * as Viewport from './app/viewport.js';
import * as Nav from './app/nav.js';

import * as Module from './app/module.js';
import * as ModuleViewportRestictions from './app/module--with-viewport-restrictions.js';



$( document ).ready( function() {
    Globals.init();
    Viewport.init();
    Nav.init();

    Module.init();
    ModuleViewportRestictions.init();
} );
