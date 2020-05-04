import M from '@superstructure.net/m';
import E from '@superstructure.net/e';
import C from '@superstructure.net/c';

/**
 * Module
 */
export default class MyModule extends M {
    constructor(mediaQuery) {
        super(mediaQuery);
    }

    onInit() {
        Debug.log('Module.onInit()');
    }

    onResize(viewport, isUIResize) {
        Debug.log('Module.onResize()');
    }

    onDestroy() {
        Debug.log('Module.onDestroy()');
    }
}
