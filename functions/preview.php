<?php

/**
 * Change draft's perview link to work with fronend's router
 * 
 * page: /preview:{postId}
 * other post type: /{post_type_query_var}/preview:{postId}
 */
add_filter( 'preview_post_link', function( $preview_link, $post ) {
    if( $post->post_status === 'draft' ) {
        $postTypeObject = get_post_type_object( $post->post_type );
        $preview_link = get_site_url( null, $postTypeObject->query_var .'/preview:' . $post->ID );
    }

    return $preview_link;
}, 10, 2 );



/**
 * Add custom rewrite rules for draft permalinks
 */
add_action( 'init',  function() {
    // pages
    add_rewrite_rule( '^preview:([0-9]+)[/]?$', 'index.php?page_id=$matches[1]&preview=true', 'top' );

    // other post types
    add_rewrite_rule( '^(news)/preview:([0-9]+)[/]?$', 'index.php?post_type=$matches[1]&p=$matches[2]&preview=true', 'top' );
} );
