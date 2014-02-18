jQuery( function( $ ) {

  $( document ).ready( function() {

      var blogurl = $( 'head' ).attr( 'data-wpurl' );
      var breakpoint = $( 'title' ).css( 'fontFamily' )
        .replace( /'/g, '' )
        .replace( /"/g, '' );

      var min = ( debugmode ) ? '' : '.min';
      var src = ( debugmode ) ? 'src/' : '';

      Modernizr.load({
        test: Modernizr.mq( breakpoint ),
        yep : [ blogurl + '/wp-content/themes/port-f/js/dependencies-smaller.min.js',
                blogurl + '/wp-content/themes/port-f/js/' + src + 'site-smaller' + min + '.js' ],
        nope: [ blogurl + '/wp-content/themes/port-f/js/dependencies-larger.min.js',
                blogurl + '/wp-content/themes/port-f/js/' + src + 'site-larger' + min + '.js' ]
      });

  });

});