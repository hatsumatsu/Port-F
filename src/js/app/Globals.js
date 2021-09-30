import { S } from '@superstructure.net/s';

/**
 * Globals
 */
const state = new S({
    blogurl: null,
    theme: null,
});

class Globals {
    constructor() {
        this.init();
    }

    init() {
        state.set('blogurl', document.head.getAttribute('data-wpurl'));
        state.set('theme', document.head.getAttribute('data-project'));

        console.log(state.get('blogurl'), state.get('theme'));
    }
}

export { Globals, state };
