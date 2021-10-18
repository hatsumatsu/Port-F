import M from '@superstructure.net/m';
import C from '@superstructure.net/c';
import { S } from '@superstructure.net/s';

/**
 * HeaderNav
 */
const state = new S({
    visible: false,
});

class HeaderNav extends M {
    constructor(mediaQuery) {
        super(mediaQuery);
    }

    onInit() {
        console.log('Nav.onInit()');

        this.events = new C();

        this.bindEvents();
    }

    bindEvents() {
        this.events.on('click', '[data-HeaderNav-role="toggle"]', this.onClick.bind(this));

        state.on('visible', () => {
            if (state.get('visible')) {
                document.documentElement.classList.add('visible--HeaderNav');

                this.events.trigger('HeaderNav/show');
            } else {
                document.documentElement.classList.remove('visible--HeaderNav');

                this.events.trigger('HeaderNav/hide');
            }
        });
    }

    onClick(event) {
        event.preventDefault();

        this.toggle();
    }

    toggle() {
        console.log('Nav.toggle()');

        if (!state.get('visible')) {
            this.show();
        } else {
            this.hide();
        }
    }

    show() {
        console.log('Nav.show()');

        state.set('visible', true);
    }

    hide() {
        console.log('Nav.hide()');

        state.set('visible', false);
    }

    onDestroy() {
        console.log('Nav.onDestroy()');

        this.events.off();
    }
}

export { HeaderNav, state };