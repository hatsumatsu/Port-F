<?php

/**
 * Flush W3TC page cache when custom post types are updated.
 */
function W3TCflushCustomPostTypesPageCache( $post_id ) {
    if( !defined( 'W3TC' ) ) {
        return false;
    }

    $postTypes = array(
        'page' => true,
        'post' => true
    );

    if( array_key_exists( get_post_type( $post_id ), $postTypes ) ) {
        w3tc_pgcache_flush();
        w3tc_dbcache_flush();
    }
}

add_action( 'save_post', 'W3TCflushCustomPostTypesPageCache', 1000, 1 );
add_action( 'edit_post', 'W3TCflushCustomPostTypesPageCache', 1000, 1 );
add_action( 'delete_post', 'W3TCflushCustomPostTypesPageCache', 1000, 1 );
