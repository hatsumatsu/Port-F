import M from '@superstructure.net/m';
import C from '@superstructure.net/c';
import { S } from '@superstructure.net/s';

const state = new S({});
/**
 * Module
 */
class Module extends M {
    constructor(mediaQuery) {
        super(mediaQuery);
    }

    onInit() {
        console.log('Module.onInitB(E)');
    }

    onResize(viewport, isUIResize) {
        console.log('Module.onResize()');
    }

    onDestroy() {
        console.log('Module.onDestroy()');
    }
}

export { Module, state };
