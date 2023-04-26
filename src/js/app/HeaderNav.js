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

    toggle() {
        console.log('HeaderNav.toggle()');

        state.set('visible', state.get('visible') ? false : true);
    }

    bindEvents() {
        this.onClick = this.onClick.bind(this);

        this.events.on('click', this.selector('toggle'), this.onClick);

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

    onInit() {
        console.log('HeaderNav.onInit()');

        this.events = new C();

        this.bindEvents();
    }

    onClick(event) {
        event.preventDefault();

        this.toggle();
    }

    onDestroy() {
        console.log('HeaderNav.onDestroy()');

        this.events.off();
        state.off(null, 'HeaderNav');
    }
}

export { HeaderNav, state };
