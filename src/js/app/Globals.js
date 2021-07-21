/**
 * Globals
 */
export default class Globals {
    constructor() {
        this.globals = {};
        this.init();
    }

    init() {
        this.set('blogurl', document.head.getAttribute('data-wpurl'));
        this.set('theme', document.head.getAttribute('data-project'));

        console.log(this.globals);
    }

    set(key, value) {
        this.globals[key] = value;
    }

    get(key) {
        return this.globals[key];
    }
}
