jQuery( function( $ ) {

  $( document ).ready( function() {

      var blogurl = $( 'head' ).attr( 'data-wpurl' );
      var breakpoint = $( 'title' ).css( 'fontFamily' )
        .replace( /'/g, '' )
        .replace( /"/g, '' );

      var min = ( debugmode ) ? '' : '.min';

      Modernizr.load({
        test: Modernizr.mq( breakpoint ),
        yep : [ blogurl + '/wp-content/themes/port-f/js/dependencies-smaller.min.js',
                blogurl + '/wp-content/themes/port-f/js/site-smaller' + min + '.js' ],
        nope: [ blogurl + '/wp-content/themes/port-f/js/dependencies-larger.min.js',
                blogurl + '/wp-content/themes/port-f/js/site-larger' + min + '.js' ]
      });

  });

});