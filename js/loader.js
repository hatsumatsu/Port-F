jQuery( function( $ ) {

  $( document ).ready( function() {

      var min = ( debugmode ) ? '' : '.min';
      var src = ( debugmode ) ? 'src/' : '';

      Modernizr.load( [
        {
        test: Modernizr.mq( config['mediaquery'] ),
        yep : [ config['blogurl'] + '/wp-content/themes/port-f/js/dependencies-smaller.min.js',
                config['blogurl'] + '/wp-content/themes/port-f/js/' + src + 'site-smaller' + min + '.js' ],
        nope: [ config['blogurl'] + '/wp-content/themes/port-f/js/dependencies-larger.min.js',
                config['blogurl'] + '/wp-content/themes/port-f/js/' + src + 'site-larger' + min + '.js' ]
        },
        { 
        test: Modernizr.mq( 'only all' ),
        // for IE lte 8 and browsers not supporting media queries
        nope: [ config['blogurl'] + '/wp-content/themes/port-f/js/dependencies-larger.min.js' ]
        } 
        ] );

  });

});