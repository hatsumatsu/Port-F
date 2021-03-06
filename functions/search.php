<?php

/**
 * Rewrite the search page's permalink
 * http://example.com/search/{query}
 */
function searchRedirect() {
    if( is_search() && !empty( $_GET['s'] ) && !is_admin() ) {
        wp_redirect( home_url( '/' . get_option( 'custom_search_base', 'search' ) . '/' ) . urlencode( get_query_var( 's' ) ) );
        exit();
    }
}

add_action( 'template_redirect', 'searchRedirect' );



/**
 * Register search related query vars
 * + Is error: search term too short
 * @param  array $vars query vars
 * @return array       query vars
 */
function searchModifyQueryVars( $vars ) {
    $vars[] = 'error--search-term-length';

    return $vars;
}

add_filter( 'query_vars', 'searchModifyQueryVars' );



/**
 * Modify search query:
 * + Force minimum search term length
 * + Set search result post count to infinity
 */
function searchModifyQuery( $query ) {
    if( is_admin() ) {
        return;
    }

    if( is_search() && $query->is_main_query() && strlen( get_query_var( 's' ) ) < 3 ) {
        $query->set( 'post__in', array( 0 ) );
        $query->set( 'error--search-term-length', true );
    }
}

add_action( 'pre_get_posts', 'searchModifyQuery' );
