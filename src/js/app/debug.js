import M from '@superstructure.net/m';
import E from '@superstructure.net/e';
import C from '@superstructure.net/c';

/**
 * Debug
 */
export default class Debug {
    constructor() {
        this.state = {
            local: false,
            active: true,
        };

        this.state.local = location.href.indexOf('local') > -1 ? true : false;
        this.state.active = this.state.local;

        if (this.state.active) {
            this.log = console.log.bind(window.console);
        } else {
            this.log = function () {};
        }
    }
}
