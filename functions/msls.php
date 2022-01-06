<?php

/**
 * Modify MSLS's post meta box titles
 * 
 */
add_filter( 'msls_metabox_post_select_title', function( $title ) {
    $title = __( 'Languages', 'port-f' ); 

    return $title;
} );

add_filter( 'msls_term_select_title', function( $title ) {
    $title = __( 'Languages', 'port-f' ); 

    return $title;
} );
