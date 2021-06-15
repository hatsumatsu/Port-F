import * as lazysizes from 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/object-fit/ls.object-fit';

import Globals from './app/Globals.js';
import Nav from './app/Nav.js';
import Module from './app/Module.js';

window.Globals = new Globals();
new Nav('( max-width: 680px )');
new Module();
