/**
 * Fix a bug where images edited in the WP Editor are altered in an undocumented way
 * and don't respect the
 * https://core.trac.wordpress.org/ticket/34823
 */
console.log( 'admin.js' );

if ( wp.media.events ) {
    wp.media.events.on( 'editor:image-update', function( data ) {
        console.log( 'editor:image-update' );
        if( !data.editor.$( data.image ).attr( 'srcset' ) && data.editor.$( data.image ).attr( 'data-srcset' ) ) {
            console.log( 'set srcset' );

            data.editor.$( data.image )
                .attr( {
                    'srcset':  data.editor.$( data.image ).attr( 'data-srcset' )
                } );
        }
    } );
}
