import * as lazysizes from 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import $ from 'jquery';

import * as Globals from './app/globals.js';
import * as Debug from './app/debug.js';
import * as Viewport from './app/viewport.js';
import * as Nav from './app/nav.js';



$( function() {
    Globals.init();
    Viewport.init();
    Nav.init();
} );
