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
        console.log('HeaderNav.onInit()');

        this.events = new C();

        this.bindEvents();
    }

    bindEvents() {
        this.events.on('click', this.selector('toggle'), this.onClick.bind(this));

        state.on(
            'visible',
            () => {
                if (state.get('visible')) {
                    document.documentElement.classList.add('visible--HeaderNav');
                } else {
                    document.documentElement.classList.remove('visible--HeaderNav');
                }
            },
            'HeaderNav'
        );
    }

    onClick(event) {
        event.preventDefault();

        this.toggle();
    }

    toggle() {
        console.log('HeaderNav.toggle()');

        if (!state.get('visible')) {
            this.show();
        } else {
            this.hide();
        }
    }

    show() {
        console.log('HeaderNav.show()');

        state.set('visible', true);
    }

    hide() {
        console.log('HeaderNav.hide()');

        state.set('visible', false);
    }

    onDestroy() {
        console.log('HeaderNav.onDestroy()');

        this.events.off();
        state.off(null, 'HeaderNav');
    }
}

export { HeaderNav, state };
