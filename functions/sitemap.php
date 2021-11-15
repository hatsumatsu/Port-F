<?php

/**
 * Modify global entities included in sitemap
 * ( 'posts'|'taxonomies'|'users' )
 */
add_filter( 'wp_sitemaps_add_provider', function( $provider, $name ) {
    if ( $name === 'users' ) {
        return false;
    }
 
    return $provider;
}, 10, 2 );



/**
 * Modify post types included in sitemap
 */
add_filter( 'wp_sitemaps_post_types', function( $post_types ) {
    unset( $post_types['post'] );
    
    return $post_types;
} );



/**
 * Modify taxonomies included in sitemap
 */

add_filter( 'wp_sitemaps_taxonomies', function( $taxonomies ) {
    unset( $taxonomies['post_tag'] );
    unset( $taxonomies['category'] );
    unset( $taxonomies['projects_types'] );
    
    return $taxonomies;
} );
