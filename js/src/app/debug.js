/**
 * Debug
 */
Debug = {
    state: {
        local: false,
        active: true
    },

    init: function() {
        this.state.local = ( location.href.indexOf( 'local' ) > -1 ) ? true : false;
        this.state.active = this.state.local;

        if( this.state.active ) {
            this.log = console.log.bind( window.console );
        } else {
            this.log = function() {}
        }
    }
}

Debug.init();
