<?php

/**
 * Rewrite the search page's permalink
 * http://example.com/search/{query}
 */
function modifySearchRewriteRule() {
    if( is_search() && !empty( $_GET['s'] ) && !is_admin() ) {
        wp_redirect( home_url( '/' . __( 'search', 'port-f' ) . '/' ) . urlencode( get_query_var( 's' ) ) );
        exit();
    }
}

add_action( 'template_redirect', 'modifySearchRewriteRule' );


/**
 * Modify WP's search permalink fragment
 * @param  array $rules original rewrite rules
 * @return array        modified rules
 */
function modifySearchRewriteRules( $rules ) {
    foreach( $rules as $rule => $target ) {
        $new_rule = str_replace( 'search', __( 'search', 'port-f' ), $rule );
        unset( $rules[$rule] );
        $rules[$new_rule] = $target;
    }

    return $rules;
}

add_filter( 'search_rewrite_rules', 'modifySearchRewriteRules' );


/**
 * Modify search query:
 * + Force minimum search term length
 * + Set search result post count to infinity
 */
function modifySearchQuery( $query ) {
    if( is_search() && !is_admin() ) {
        $query->set( 'posts_per_page', -1 );
    }

    if( is_search() && $query->is_main_query() && strlen( get_query_var( 's' ) ) < 3 ) {
        $query->set( 'post__in', array( 0 ) );
        $query->set( 'error--search-term-length', true );
    }
}

add_action( 'pre_get_posts', 'modifySearchQuery' );
