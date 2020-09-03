import M from '@superstructure.net/m';
import E from '@superstructure.net/e';
import C from '@superstructure.net/c';

/**
 * Module
 */
export default class Module extends M {
    constructor(mediaQuery) {
        super(mediaQuery);
    }

    onInit() {
        console.log('Module.onInit()');
    }

    onResize(viewport, isUIResize) {
        console.log('Module.onResize()');
    }

    onDestroy() {
        console.log('Module.onDestroy()');
    }
}
