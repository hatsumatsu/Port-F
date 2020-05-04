import * as lazysizes from 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/object-fit/ls.object-fit';

import Debug from './app/debug.js';
import Globals from './app/globals.js';
import Nav from './app/nav.js';
import Module from './app/module.js';

window.Debug = new Debug();
window.Globals = new Globals();
new Nav('( max-width: 680px )');
new Module();
