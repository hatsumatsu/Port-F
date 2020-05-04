import M from '@superstructure.net/m';
import E from '@superstructure.net/e';
import C from '@superstructure.net/c';

/**
 * Globals
 */
export default class Globals {
    constructor() {
        this.globals = {};
        this.init();
    }

    init() {
        this.set('blogurl', new E('head').getAttr('data-wpurl'));
        this.set('theme', new E('head').getAttr('data-project'));

        Debug.log(this.globals);
    }

    set(key, value) {
        this.globals[key] = value;
    }

    get(key) {
        return this.globals[key];
    }
}
