import M from '@superstructure.net/m';
import E from '@superstructure.net/e';
import C from '@superstructure.net/c';

/**
 * Nav
 */
export default class Nav extends M {
    constructor(mediaQuery) {
        super(mediaQuery);

        this.visible = {};
    }

    onInit() {
        console.log('Nav.onInit()');

        this.events = new C();

        this.bindEvents();
    }

    bindEvents() {
        this.events.on('click', this.selector('toggle'), this.onClick.bind(this));
    }

    onClick(event) {
        event.preventDefault();

        let id = new E(event.actualTarget || event.target).getAttr('id', 'Nav');

        this.toggle(id);
    }

    toggle(id) {
        console.log('Nav.toggle()', id);

        if (!id) {
            return false;
        }

        if (!this.visible[id]) {
            this.show(id);
        } else {
            this.hide(id);
        }
    }

    show(id) {
        console.log('Nav.show()', id);

        this.visible[id] = true;

        new E('html').addClass('visible--nav-' + id);

        this.events.trigger('nav/show', { id: id });
    }

    hide(id) {
        console.log('Nav.hide()', id);

        this.visible[id] = false;

        new E('html').removeClass('visible--nav-' + id);

        this.events.trigger('nav/hide', { id: id });
    }

    onDestroy() {
        console.log('Nav.onDestroy()');

        this.events.off();
    }
}
