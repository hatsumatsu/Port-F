import * as lazysizes from 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/object-fit/ls.object-fit';

import { Globals } from './app/Globals.js';
import { HeaderNav } from './app/HeaderNav.js';
import { Module } from './app/Module.js';

new Globals();
new HeaderNav('( max-width: 680px )');
new Module();
