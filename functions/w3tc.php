<?php

/**
 * Flush W3TC page cache when custom post types are updated.
 */
function W3TCflushCustomPostTypesPageCache( $post_id ) {
    if( !defined( 'W3TC' ) ) {
        return false;
    }

    if( !$post_id || !get_post_type( $post_id ) ) {
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
add_action( 'wp_trash_post', 'W3TCflushCustomPostTypesPageCache', 1000, 1 );
add_action( 'delete_post', 'W3TCflushCustomPostTypesPageCache', 1000, 1 );



/**
 * Prefix minified file names with theme evrsion to bust cache more aggressively
 *
 */
function W3TCModifyMinifyFileNames( $filename, $files, $type ) {
    $prefix = sanitize_title( str_replace( '.','', wp_get_theme()->version ) );
    $filename = $prefix .'_' . $filename;

    return $filename;
}

add_filter( 'w3tc_minify_urls_for_minification_to_minify_filename', 'W3TCModifyMinifyFileNames', 20, 3 );
